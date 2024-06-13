'use client';
import { useEffect, useState } from 'react';
import locations from '@/app/Utils/data/locations';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { Title } from '@/app/Components/Title';
import Button from '@/app/Components/Button';
import Gallery from './Gallery';
import Information from './Information';
import Utforsk from './Utforsk';

export default function Lokalitet() {
    const pathname = usePathname();
    const [images, setImages] = useState<string[]>([]);
    const location = locations.find((loc) => pathname.includes(loc.id));

    useEffect(() => {
        if (location) {
            const loadImages = async () => {
                let imagePaths = [];
                let i = 1;
                while (true) {
                    const imagePath = `${location.dir}${location.id}-${i}.jpg`; // Adjust the extension if necessary
                    try {
                        const res = await fetch(imagePath);
                        if (res.ok) {
                            imagePaths.push(imagePath);
                            i++;
                        } else {
                            break;
                        }
                    } catch {
                        break;
                    }
                }

                // Prefetch images using the browser's Image object
                imagePaths.forEach((path) => {
                    const img = new window.Image();
                    img.src = path;
                });

                setImages(imagePaths);
            };

            loadImages();
        }
    }, [location]);

    return (
        <main className='my-10'>
            {location ? (
                <>
                    <div className="flex flex-col md:flex-row">
                        <div className="bg-white py-8 px-4 md:p-8 shadow-md lg:w-2/3 w-full md:rounded-s-md">
                            <Title text={location.name} />
                            <p className="whitespace-pre-wrap">{location.description}</p>
                            <Button icon={'ArrowLeft_sm'} text={'tilbake'} iconPosition='left' />
                        </div>
                        <div className="md:h-auto h-60 lg:w-1/3 w-full relative shadow-md">
                            <Image
                                src={location.image}
                                alt="Fasade Levanger"
                                objectFit="cover"
                                layout="fill"
                                className="md:rounded-e-md"
                            />
                        </div>
                    </div>
                    <Information location={location} />
                    <Gallery images={images} location={location} />
                </>
            ) : (
                <p>Location not found</p>
            )}
            <Utforsk location={location}/>
        </main>
    );
}

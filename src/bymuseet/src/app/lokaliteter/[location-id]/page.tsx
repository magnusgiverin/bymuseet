'use client';
import { useEffect, useState } from 'react';
import locations from '@/app/Utils/data/locations';
import { usePathname } from 'next/navigation';
import Gallery from './Gallery';
import Information from './Information';
import Utforsk from '../../index/Utforsk';
import Introduction from './Introduction';

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
                    <Introduction location={location}/>
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

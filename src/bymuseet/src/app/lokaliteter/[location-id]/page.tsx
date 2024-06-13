'use client';
import { useEffect, useRef, useState } from 'react';
import locations, { Location } from '@/app/Utils/data/locations';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { SubTitle, Title } from '@/app/Components/Title';
import Link from 'next/link';
import Button from '@/app/Components/Button';
import { spacedText } from '@/app/Utils/spacedText';

interface GalleryProps {
    images: string[];
    location: Location;
}

const Gallery: React.FC<GalleryProps> = ({ images, location }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [imageDimensions, setImageDimensions] = useState<{ width: number; height: number } | null>(null);

    const galleryRef = useRef<HTMLDivElement>(null);

    const openModal = (image: string) => {
        const img = new window.Image();
        img.onload = () => {
            setImageDimensions({ width: img.width, height: img.height });
            setSelectedImage(image);
            setIsOpen(true);
        };
        img.src = image;
    };

    const closeModal = () => {
        setSelectedImage(null);
        setIsOpen(false);
    };

    return (
        <>
            {images.length !== 0 && (
                <div className="my-10 bg-white rounded-0 md:rounded-md md:p-8 py-8 px-4">
                    <SubTitle text="album" />
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
                        {images.map((image, index) => (
                            <div
                                key={index}
                                className="shadow-md rounded-lg relative w-full h-64 cursor-pointer"
                                onClick={() => openModal(image)}
                            >
                                <Image
                                    src={image}
                                    alt={`${location.name} ${index + 1}`}
                                    layout="fill"
                                    objectFit="cover"
                                    className="rounded-lg"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {isOpen && selectedImage && imageDimensions && (
                <div className="hidden md:block">
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
                        <div className="relative bg-white p-4 rounded-lg shadow-lg w-2/3 max-w-full max-h-[90vh] overflow-auto">
                            <button
                                onClick={closeModal}
                                className="absolute top-2 right-2 bg-red-500 text-white rounded-full w-[25px] h-[25px] flex items-center justify-center"
                            >
                                &times;
                            </button>
                            <div className="flex justify-center">
                                <Image
                                    src={selectedImage}
                                    alt="Selected Image"
                                    width={imageDimensions.width}
                                    height={imageDimensions.height}
                                    className="rounded-lg"
                                />
                            </div>
                        </div>
                    </div>
                </div>

            )}
        </>
    );
};

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
                    <Gallery images={images} location={location} />
                </>
            ) : (
                <p>Location not found</p>
            )}
            <div className="my-10 bg-white rounded-0 md:rounded-md p-8 ">
                <SubTitle text='utforsk videre' shortText='utforsk' />
                <div className="flex flex-row flex-wrap justify-center gap-8">
                    {locations.filter(loc => loc.id !== location?.id).map((loc) => (
                        <div key={loc.id} className="flex flex-col items-center transition-transform duration-300 ease-in-out transform hover:scale-105">
                            <Link className="shadow-md rounded-md relative lg:w-96 lg:h-48 sm:w-64 sm:h-32 w-[330px] h-48 overflow-hidden cursor-pointer" href={`/lokaliteter/${loc.id}`}>
                                <Image
                                    src={loc.image}
                                    alt={loc.name}
                                    layout="fill"
                                    objectFit="cover"
                                    className="rounded-md"
                                />
                            </Link>
                            <p className="whitespace-pre-wrap mt-2 text-sm">{spacedText(loc.name)}</p>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}

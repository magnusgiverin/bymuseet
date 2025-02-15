'use client';
import { Title } from "@/app/Components/Title";
import Button from "@/app/Components/Button";
import { useEffect, useState } from "react";
import locations, { Location } from "@/app/Utils/data/locations"; // Assuming Location type is exported from locations
import Image from 'next/image';
import { spacedText } from "@/app/Utils/spacedText";

const ArrangementBilder = () => {
    const [locationsWithImages, setLocationsWithImages] = useState<{ location: string; images: string[] }[]>([]);
    const [isOpen, setIsOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [imageDimensions, setImageDimensions] = useState<{ width: number; height: number } | null>(null);

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

    useEffect(() => {
        const loadImagesForLocations = async () => {
            const locationsToLoad = locations.filter(loc => loc.arrangementerDir);

            const loadedLocations = await Promise.all(locationsToLoad.map(async (location) => {
                const imagePaths = await fetchImagePaths(location);
                return { location: location.name, images: imagePaths };
            }));

            setLocationsWithImages(loadedLocations);
        };

        loadImagesForLocations();
    }, []);

    const fetchImagePaths = async (location: Location) => {
        const imagePaths: string[] = [];
        let i = 1;

        while (true) {
            const jpgPath = `${location.arrangementerDir}${location.id}-${i}.jpg`;
            const pngPath = `${location.arrangementerDir}${location.id}-${i}.png`;

            try {
            const jpgRes = await fetch(jpgPath);
            const pngRes = await fetch(pngPath);

            if (jpgRes.ok) {
                imagePaths.push(jpgPath);
            } else if (pngRes.ok) {
                imagePaths.push(pngPath);
            } else {
                break;
            }

            i++;
            } catch {
            break;
            }
        }

        // Prefetch images using the browser's Image object
        imagePaths.forEach((path) => {
            const img = new window.Image();
            img.src = path;
        });

        return imagePaths;
    };

    return (
        <main className="flex flex-col items-center justify-between my-5 md:my-10 w-full gap-5 md:gap-10">
            {locationsWithImages.map(({ location, images }, index) => (
                <div key={location} className="w-full bg-white rounded-0 md:rounded-md md:p-8 py-8 px-4">
                    <Title text={`Bilder fra ${location}`} shortText={`${location}`} />
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {images.map((image, imgIndex) => (
                            <div
                                key={imgIndex}
                                className="shadow-md rounded-lg relative w-full h-64 cursor-pointer"
                                onClick={() => openModal(image)}
                            >
                                <Image
                                    src={image}
                                    alt={`${location} ${imgIndex + 1}`}
                                    layout="fill"
                                    objectFit="cover"
                                    className="rounded-lg"
                                    sizes="(min-width: 640px) 50vw, (min-width: 1024px) 33.3vw, 100vw" // Adjust according to your grid setup
                                />
                            </div>
                        ))}
                    </div>
                    {index === locationsWithImages.length - 1 && (
                        <Button icon={"ArrowLeft_sm"} text={"Tilbake"} iconPosition="left" link="/tilbud" />
                    )}
                </div>
            ))}
            {isOpen && selectedImage && imageDimensions && (
                <div className="hidden md:block">
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
                        <div className="m-20 relative bg-white p-1 rounded-lg shadow-lg w-2/3 w-auto max-w-full max-h-[90vh] overflow-auto">

                            <div className="flex justify-center z-0">
                                <Image
                                    src={selectedImage}
                                    alt="Selected Image"
                                    width={imageDimensions.width}
                                    height={imageDimensions.height}
                                    className="rounded-lg"
                                />
                                <button
                                    onClick={closeModal}
                                    className="absolute top-2 right-2 bg-red-500 z-50 text-white rounded-md w-auto px-2 py-1 flex items-center justify-center"
                                >
                                    <div>
                                        {spacedText("lukk")}
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </main>
    );
};

export default ArrangementBilder;

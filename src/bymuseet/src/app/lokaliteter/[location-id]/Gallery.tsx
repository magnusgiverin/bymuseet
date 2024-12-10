import { SubTitle } from "@/app/Components/Title";
import { useState } from "react";
import Image from 'next/image';
import { Location } from '@/app/Utils/data/locations';
import { spacedText } from "@/app/Utils/spacedText";
import Button from "@/app/Components/Button";

interface GalleryProps {
    images: string[];
    location: Location;
}

const Gallery: React.FC<GalleryProps> = ({ images, location }) => {
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

    return (
        <>
            {images.length !== 0 && (
                <div className="w-full bg-white rounded-0 md:rounded-md md:p-8 py-8 px-4 mt-5 md:mt-10">
                    <SubTitle text="album" />
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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
                                    sizes="(min-width: 640px) 50vw, (min-width: 1024px) 33.3vw, 100vw" // Adjust according to your grid setup
                                />
                            </div>
                        ))}
                    </div>
                    {location.galleryLink && (
                        <Button icon={"ArrowRight_sm"} text={location.galleryLink.text} link={location.galleryLink.url} target="_blank"/>
                    )}
                </div>
            )}

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
        </>
    );
};

export default Gallery;

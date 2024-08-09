'use client';

import { spacedText } from "@/app/Utils/spacedText";
import Image from 'next/image';
import locations from '@/app/Utils/data/locations';
import Button from "../Components/Button";
import LokaliteterBanner from "./lokaliteterBanner";

const Lokaliteter = () => {
    return (
        <div className="flex flex-col items-center justify-between mb-5 md:mb-10">
            <LokaliteterBanner />
            <div className="flex flex-col gap-5 md:gap-10 md:mt-10">
                {locations.map((loc) => (
                    <div
                        key={loc.id}
                        className="flex flex-col xl:flex-row bg-white shadow-md relative md:rounded-lg w-full"
                    >
                        <div className="relative w-full xl:w-1/2 h-[220px] xl:h-[370px] overflow-hidden">
                            <Image
                                src={loc.image}
                                alt={loc.name}
                                layout="fill"
                                objectFit="cover"
                                className="xl:rounded-s-lg xl:rounded-tr-none md:rounded-tl-lg md:rounded-tr-lg"
                            />
                        </div>
                        <div className="py-8 px-4 md:p-8 flex flex-col w-full gap-4 justify-between"> {/* Adjusted to push content to the top and button to the bottom */}
                            <div className="flex flex-col w-full gap-4">
                                <p className="whitespace-pre-wrap font-bold text-green-800">{spacedText(loc.name)}</p>
                                <p className="whitespace-pre-wrap">{loc.description}</p>
                            </div>
                            <div className="mt-auto">
                                <Button text="lær mer" icon={"ArrowRight_sm"} link={"/lokaliteter/" + loc.id} />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
};

export default Lokaliteter;

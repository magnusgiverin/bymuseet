'use client';

import { spacedText } from "@/app/Utils/spacedText";
import Image from 'next/image';
import locations from '@/app/Utils/data/locations';
import Button from "../Components/Button";
import LokaliteterBanner from "./LokaliteterBanner";

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
                        <div className="relative w-full xl:w-1/2 h-[300px] xl:h-auto overflow-hidden">
                            <Image
                                src={loc.image}
                                alt={loc.name}
                                layout="fill"
                                className="object-cover w-full xl:rounded-s-lg xl:rounded-tr-none md:rounded-tl-lg md:rounded-tr-lg"
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
                <div className="h-[600px] mt-20 inline-block overflow-hidden md:rounded-lg">
                    <iframe
                        src="https://www.google.com/maps/d/u/0/embed?mid=1MoCbFMMTQF254Jsaf84HGwCX-6QLj2I&ehbc=2E312F&noprof=1"
                        className="w-full h-[600px] md:rounded-lg"
                        style={{ position: "relative", top: "-50px", border: "none" }}
                    >
                    </iframe>
                </div>
            </div>
        </div>
    )
};

export default Lokaliteter;

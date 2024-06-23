'use client';
import Button from "../Components/Button";
import { Title } from "../Components/Title";
import { textContent } from "../Utils/data/text";
import Image from "next/image";
import bannerBilde from "../../../public/images/pynt/bymuseet-banner.jpg";

export default function Medlem() {
    const { medlem } = textContent;

    return (
        <main>
            <div className="relative h-auto shadow-md gap-5 md:gap-10 w-full my-5 md:my-10">
                <Image
                    src={bannerBilde}
                    alt="Bilde bymuseet"
                    layout="responsive"
                    objectFit="contain"
                    className="md:rounded-e-md"
                />
            </div>
            <span className="h-auto flex flex-col lg:flex-row gap-5 md:gap-10 w-full my-5 md:my-10">
                <div className="w-full lg:w-2/3 h-auto bg-white p-8 md:rounded-md flex flex-col py-8 px-4 md:p-8">
                    <span className="w-full">
                        <Title text={medlem.title} shortText={medlem.shortTitle} />
                    </span>
                    <p className="flex-grow">{medlem.paragraph1}</p>
                    <div className="hidden lg:block mt-auto">
                        <Button icon={"ArrowLeft_sm"} text={medlem.buttonText} iconPosition="left" />
                    </div>
                </div>
                <div className="w-full lg:w-1/3 h-auto bg-white p-8 md:rounded-md flex flex-col py-8 px-4 md:p-8">
                    <div className="w-full flex flex-col items-center justify-center text-center">
                        <p className="font-bold">{medlem.memberPrice}</p>
                        <p className="font-bold">{medlem.businessPrice}</p>
                        <p className="mt-4 font-bold">{medlem.paymentText}</p>
                        <p>{medlem.reminder}</p>
                        <p className="mt-4 font-bold">{medlem.thankYou}</p>
                        <p>{medlem.information}</p>
                        <p className="mt-4 text-blue-600 underline">
                            <a href={"mailto:" + medlem.emailAddress}>{medlem.emailAddress}</a>
                        </p>
                    </div>
                    <div className="lg:hidden mt-auto">
                        <Button icon={"ArrowLeft_sm"} text={"tilbake"} iconPosition="left" />
                    </div>
                </div>
            </span>
        </main>
    );
}

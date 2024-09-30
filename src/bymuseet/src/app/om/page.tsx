'use client';
import Link from "next/link";
import { SubTitle, Title } from "../Components/Title";
import Banner from "./OmOssBanner";
import { textContent } from "../Utils/data/text";
import Button from "../Components/Button";
import Image from "next/image";
import formålBilde from "../../../public/images/pynt/pynt-3.jpg";

export default function Om() {
    const { omSide, formål } = textContent;

    return (
        <main className="flex flex-col items-center justify-between mb-5 md:mb-10">
            <Banner />
            <div className="w-full bg-white p-8 md:rounded-md flex flex-col py-8 px-4 md:p-8 lg:mt-10">
                <SubTitle text={omSide.background.subTitle} />
                <p>{omSide.background.paragraph1}</p>
                <p className="mt-4">
                    {omSide.background.paragraph21}
                    <Link target="_blank" href="https://levangerfotomuseum.no/">
                        <span className="text-blue-600 hover:underline">{"Levanger fotomuseum"}</span>
                    </Link>
                    {omSide.background.paragraph22}
                </p>
                <Button link={omSide.background.readMoreLink.url} target="_blank" icon={"ArrowRight_sm"} text={omSide.background.readMoreLink.text}/>
            </div>
            <div className="flex flex-col lg:flex-row w-full mt-5 mb-5 md:mb-10 md:mt-10">
            <div className="bg-white py-8 px-4 md:p-8 md:rounded-t-md lg:rounded-s-md lg:rounded-e-none shadow-md lg:w-2/3 xl:w-3/5 w-full">
                <SubTitle text={formål.title} />
                <p className="mb-4">{formål.paragraph1}</p>
                <ul className="list-disc ml-4 mb-4">
                    {formål.list1.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
                <p className="mb-4">{formål.paragraph2}</p>
                <ul className="list-disc ml-4">
                    {formål.list2.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
            <div className="h-60 w-full relative shadow-md md:rounded-b-md lg:rounded-s-none lg:rounded-e-md lg:h-auto lg:w-1/3 xl:w-2/5">
                <Image
                    src={formålBilde}
                    alt="Sjøgata 1"
                    objectFit="cover"
                    layout="fill"
                    className="md:rounded-b-md lg:rounded-e-md lg:rounded-s-none"
                />
            </div>
        </div>
            <div className="w-full bg-white p-8 md:rounded-md flex flex-col py-8 px-4 md:p-8">
                <Title text={omSide.title} shortText={omSide.shortTitle} />
                <p>{omSide.intro.paragraph1}</p>
                <p className="mt-4">{omSide.intro.paragraph2}</p>
                <ul className="list-disc ml-8 mt-2">
                    {omSide.intro.boardMembers.map((member, index) => <li key={"member-" + index}>{member}</li> )}
                </ul>
                <p className="mt-4">{omSide.intro.paragraph3}</p>
                <Button link={omSide.intro.medlem.url} icon={"ArrowRight_sm"} text={omSide.intro.medlem.text}/>
            </div>
        </main>
    );
}

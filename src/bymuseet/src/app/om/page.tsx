'use client';
import Link from "next/link";
import { SubTitle, Title } from "../Components/Title";
import Banner from "./OmOssBanner";
import { textContent } from "../Utils/data/text";
import Button from "../Components/Button";

export default function Om() {
    const { omSide } = textContent;

    return (
        <main className="flex flex-col items-center justify-between mb-5 md:mb-10">
            <Banner />
            <div className="w-full bg-white p-8 md:rounded-md flex flex-col py-8 px-4 md:p-8 lg:mt-10">
                <Title text={omSide.title} shortText={omSide.shortTitle} />
                <p>{omSide.intro.paragraph1}</p>
                <p className="mt-4">{omSide.intro.paragraph2}</p>
                <ul className="list-disc ml-8 mt-2">
                    {omSide.intro.boardMembers.map((member, index) => <li key={"member-" + index}>{member}</li> )}
                </ul>
                <p className="mt-4">{omSide.intro.paragraph3}</p>
                <Button link={omSide.intro.medlem.url} icon={"Medlem"} text={omSide.intro.medlem.text}/>
            </div>
            <div className="w-full bg-white p-8 md:rounded-md flex flex-col py-8 px-4 md:p-8 mt-5 md:mt-10">
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
        </main>
    );
}

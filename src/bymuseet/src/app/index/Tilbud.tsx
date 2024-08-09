import { SubTitle } from "../Components/Title";
import { textContent } from "../Utils/data/text";
import Image from "next/image";
import utleieBilde from "../../../public/images/pynt/tilbud-2.jpg";
import { spacedText } from "../Utils/spacedText";
import Button from "../Components/Button";
import Link from "next/link";

const Tilbud = () => {
    const { utleie, byvandring, tilbud } = textContent;

    return (
        <div className="flex flex-col xl:flex-row w-full mt-5 md:mt-10 gap-5 md:gap-10">
            <div className="bg-white py-8 px-4 md:p-8 md:rounded-md shadow-md w-full xl:w-1/3">
                <SubTitle text={utleie.title} />
                <span className="flex flex-col gap-4">
                    {utleie.options.map((option, index) => (
                        <div key={index} className="flex flex-col gap-2">
                            <p className="font-bold text-green-800 whitespace-pre-wrap">{spacedText(option.title)}</p>
                            <p>{option.details}</p>
                        </div>
                    ))}
                </span>
                <Link href={utleie.infoLink} target="_blank" className="flex text-blue-600 hover:underline mt-6">
                    {utleie.infoLinkText}
                </Link>
                <span className="flex flex-col md:flex-row xl:flex-col md:gap-4 xl:gap-0">
                    <Button icon="ArrowRight_sm" text={tilbud.buttonText} link={tilbud.buttonLink} />
                </span>
            </div>
            <div className="bg-white md:rounded-md shadow-md py-8 px-4 md:p-8 gap-y-2 flex flex-col md:flex-row md:w-full md:space-x-10 w-full xl:w-2/3">
                <div className="mb-5 md:mb-0 md:flex-1">
                    <SubTitle text={byvandring.title} />
                    <div className="flex flex-col gap-4">
                        <p>{byvandring.info.introduction}</p>
                        <p>{byvandring.info.details}</p>
                    </div>
                </div>
                <div className="md:flex-1">
                    <div className="flex flex-col gap-4 md:gap-2">
                        <p className="font-bold text-green-800">{spacedText("informasjon") + ": "}</p>
                        <p>{byvandring.info.time}</p>
                        <p>
                            {byvandring.info.contact}
                            <a href={`mailto:${byvandring.info.contactMail}`} className="text-blue-600 hover:underline">
                                {byvandring.info.contactMail}
                            </a>
                        </p>
                        <p>
                            {byvandring.info.contactPerson}
                            <a href={`tel:${byvandring.info.contactPhone}`} className="text-blue-600 hover:underline">
                                {byvandring.info.contactPhone}
                            </a>
                        </p>
                        <p>{byvandring.info.prices}</p>
                        {/* Additional Links Section */}
                        <p className="font-bold text-green-800 mt-3 whitespace-pre-wrap">{spacedText(byvandring.additional.title + ":")}</p>
                        <div className="flex flex-col gap-2">
                            {byvandring.additional.links.map((link, index) => (
                                <a key={index} href={link.link} target="_blank" rel="noopener noreferrer" className="hover:underline text-blue-600">
                                    {link.buttonText}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tilbud;

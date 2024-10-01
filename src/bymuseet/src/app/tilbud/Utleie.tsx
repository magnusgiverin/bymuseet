import { SubTitle } from "../Components/Title";
import { textContent } from "../Utils/data/text";
import Image from "next/image";
import utleieBilde from "../../../public/images/pynt/tilbud-2.jpg";
import { spacedText } from "../Utils/spacedText";
import Button from "../Components/Button";
import Link from "next/link";

const Utleie = () => {
    const { utleie } = textContent;

    return (
        <div className="flex flex-col lg:flex-row w-full mb-5 md:mb-10">
            <div className="bg-white py-8 px-4 md:p-8 md:rounded-t-md lg:rounded-e-none lg:rounded-s-md shadow-md lg:w-2/5 w-full">
                <SubTitle text={utleie.title} />
                <span className="flex flex-col gap-4">
                    {utleie.options.map((option, index) => (
                        <div key={index} className="flex flex-col gap-2">
                            <p className="font-bold text-green-800 whitespace-pre-wrap">{spacedText(option.title)}</p>
                            <p>{option.details}</p>
                        </div>
                    ))}
                </span>

                <Link href={utleie.infoLink1} target="_blank" className="flex text-blue-600 hover:underline mt-6">
                    {utleie.infoLinkText1}
                </Link>
                <Link href={utleie.infoLink2} target="_blank" className="flex text-blue-600 hover:underline mt-6">
                    {utleie.infoLinkText2}
                </Link>
                <Button icon="ArrowRight_sm" text={"Se bilder"} link="/tilbud/bilder" />
            </div>
            <div className="h-60 w-full relative shadow-md md:rounded-b-md lg:rounded-s-none lg:rounded-e-md lg:h-auto lg:w-3/5">
                <Image
                    src={utleieBilde}
                    alt="Sjøgata 1"
                    objectFit="cover"
                    layout="fill"
                    className="md:rounded-b-md lg:rounded-s-none lg:rounded-e-md"
                />
            </div>
        </div>
    )
}

export default Utleie;

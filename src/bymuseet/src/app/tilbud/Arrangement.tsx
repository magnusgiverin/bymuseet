import { SubTitle } from "../Components/Title";
import { textContent } from "../Utils/data/text";
import Image from "next/image";
import arrangementBilde from "../../../public/images/pynt/tilbud-1.jpg";
import { spacedText } from "../Utils/spacedText";

const Arrangement = () => {
    const { arrangement } = textContent;

    return (
        <div className="w-full flex flex-col lg:flex-row">
            <div className="md:rounded-t-md lg:rounded-s-md lg:rounded-e-none lg:h-auto h-60 lg:w-1/3 xl:w-3/5 w-full relative shadow-md">
                <Image
                    src={arrangementBilde}
                    alt="Arrangement"
                    objectFit="cover"
                    layout="fill"
                    className="md:rounded-t-md lg:rounded-s-md lg:rounded-e-none"
                />
            </div>
            <div className="flex flex-col shadow-md w-full bg-white md:rounded-md py-8 px-4 md:p-8 lg:w-2/3 xl:w-2/5 md:rounded-b-md lg:rounded-e-md lg:rounded-s-none">
                <SubTitle text={arrangement.title} />
                <p>{arrangement.description}</p>
                <a href={arrangement.facebookLink} target="_blank" className="text-blue-600 underline mt-2">
                    Facebook siden vår
                </a>
                <div className="flex flex-col gap-2 mt-6">
                    <p className="font-bold text-green-800 whitespace-pre-wrap">{spacedText("Lokalene er åpne under:")}</p>
                    <ul className="list-disc ml-4">
                        {arrangement.events.map((event, index) => (
                            <li key={index}>{event}</li>
                        ))}
                    </ul>
                </div>
                <a href={arrangement.moreInfoLink} target="_blank" className="text-blue-600 underline mt-6">
                    Mer om faste arrangement i Levanger her
                </a>
            </div>
        </div>
    )
}

export default Arrangement;

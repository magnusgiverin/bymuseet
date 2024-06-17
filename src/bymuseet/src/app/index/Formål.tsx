import Button from "../Components/Button";
import { SubTitle } from "../Components/Title";
import Image from "next/image";
import formålBilde from "../../../public/images/pynt/pynt-1.jpg";
import { textContent } from "../Utils/data/text";

const Formål = () => {
    const { formål } = textContent;
    return (
        <div className="flex flex-col lg:flex-row w-full mb-5 md:mb-10 lg:mt-10">
            <div className="bg-white py-8 px-4 md:p-8 md:rounded-s-md shadow-md lg:w-2/3 xl:w-3/5 w-full">
                <SubTitle text={formål.title} />
                <p className="mb-4">{formål.paragraph1}</p>
                <ul className="list-disc ml-8 mb-4">
                    {formål.list1.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
                <p className="mb-4">{formål.paragraph2}</p>
                <ul className="list-disc ml-8">
                    {formål.list2.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
                <Button icon="ArrowRight_sm" text={formål.button.text} link={formål.button.link} />
            </div>
            <div className="lg:h-auto md:rounded-e-md h-60 lg:w-1/3 xl:w-2/5 w-full relative shadow-md">
                <Image
                    src={formålBilde}
                    alt="Sjøgata 1"
                    objectFit="cover"
                    layout="fill"
                    className="md:rounded-e-md"
                />
            </div>
        </div>
    )
}

export default Formål;

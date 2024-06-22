import Button from "../Components/Button";
import { SubTitle } from "../Components/Title";
import Image from "next/image";
import formålBilde from "../../../public/images/pynt/pynt-1.jpg";
import { textContent } from "../Utils/data/text";

const Formål = () => {
    const { formål } = textContent;
    return (
        <div className="flex flex-col lg:flex-row w-full mb-5 md:mb-10 lg:mt-10">
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
                <Button icon="ArrowRight_sm" text={formål.button.text} link={formål.button.link} />
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
    )
}

export default Formål;

import { SubTitle } from "../Components/Title";
import Image from "next/image";
import formålBilde from "../../../public/images/pynt/pynt-1.jpg";
import { textContent } from "../Utils/data/text";

const Formål = () => {
    const { formål } = textContent;
    return (
        <div className="flex flex-col lg:flex-row w-full mt-5 md:mt-10 shadow-md">
            <div className="h-60 w-full relative md:rounded-t-md lg:rounded-f-none lg:rounded-s-md lg:h-auto lg:w-1/3">
                <Image
                    src={formålBilde}
                    alt="Sjøgata 1"
                    objectFit="cover"
                    layout="fill"
                    className="md:rounded-t-md lg:rounded-s-md lg:rounded-e-none"
                />
            </div>
            <div className="bg-white py-8 px-4 md:p-8 md:rounded-b-md lg:rounded-e-md lg:rounded-s-none lg:w-2/3 w-full">
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
        </div>
    )
}

export default Formål;

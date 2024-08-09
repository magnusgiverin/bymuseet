import Button from "../Components/Button";
import { SubTitle } from "../Components/Title";
import Image from "next/image";
import omBilde from "../../../public/images/pynt/pynt-2.jpg";
import { textContent } from "../Utils/data/text";

const Om = () => {
    const { om } = textContent;

    return (
        <div className="w-full flex flex-col lg:flex-row lg:mt-10">
            
            <div className="bg-white py-8 px-4 md:p-8 shadow-md lg:w-2/3 xl:w-3/5 w-full md:rounded-t-md lg:rounded-s-md lg:rounded-e-none">
                <SubTitle text={om.title} />
                <p className="mb-4">{om.paragraph1}</p>
                <p>{om.paragraph2}</p>
                <span className="flex flex-col md:flex-row md:gap-4">
                    <Button icon="ArrowRight_sm" text={om.button1.text} link={om.button1.link} />
                </span>
            </div>
            <div className="md:rounded-b-md lg:rounded-e-md lg:rounded-s-none lg:h-auto h-60 lg:w-1/3 xl:w-1/2 w-full relative shadow-md">
                <Image
                    src={omBilde}
                    alt="Fasade Levanger"
                    objectFit="cover"
                    layout="fill"
                    className="md:rounded-b-md lg:rounded-e-md lg:rounded-s-none"
                />
            </div>
        </div>
    )
}

export default Om;

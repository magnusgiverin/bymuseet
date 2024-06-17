import Button from "../Components/Button";
import { SubTitle } from "../Components/Title";
import Image from "next/image";
import omBilde from "../../../public/images/pynt/pynt-2.jpg";
import { textContent } from "../Utils/data/text";

const Om = () => {
    const { om } = textContent;
    return (
        <div className="w-full flex flex-col lg:flex-row mb-5 md:mb-10">
            <div className="md:rounded-s-md lg:h-auto h-60 lg:w-1/3 xl:w-2/5 w-full relative shadow-md">
                <Image
                    src={omBilde}
                    alt="Fasade Levanger"
                    objectFit="cover"
                    layout="fill"
                    className="md:rounded-s-md"
                />
            </div>
            <div className="bg-white py-8 px-4 md:p-8 shadow-md lg:w-2/3 xl:w-3/5 w-full md:rounded-e-md">
                <SubTitle text={om.title} />
                <p className="mb-4">{om.paragraph1}</p>
                <p>{om.paragraph2}</p>
                <Button icon="ArrowRight_sm" text={om.button.text} link={om.button.link} />
            </div>
        </div>
    )
}

export default Om;

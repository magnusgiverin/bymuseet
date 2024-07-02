import Image from "next/image";
import banner from "../../../public/images/pynt/om-oss-banner.jpg";
import { spacedText } from "../Utils/spacedText";
import { textContent } from "../Utils/data/text";

const OmOssBanner = () => {
    const { om } = textContent;
    return (
        <>
            <div className="relative w-screen h-60 md:h-80 lg:h-96 sm:p-2 sm:px-2">
                <Image
                    src={banner}
                    alt="Background image"
                    objectFit="cover"
                    layout="fill"
                    className="absolute inset-0 z-0"
                />
                <div className="hidden lg:flex absolute inset-0 flex-col items-center justify-center z-10">
                    <div className="text-left backdrop-blur-3xl rounded-2xl py-4 px-8 text-white">
                        <h1 className="text-2xl font-bold whitespace-pre-wrap">{spacedText(om.title)}</h1>
                        <p className="text-sm whitespace-pre-wrap">{spacedText(om.description)}</p>
                    </div>
                </div>
            </div>

            <div className="lg:hidden my-8 flex flex-col items-center gap-2 w-full">
                <h1 className="text-base text-green-800 font-bold text-center whitespace-pre-wrap">{spacedText(om.title)}</h1>
            </div>
        </>
    );
}

export default OmOssBanner;

import Image from "next/image";
import banner from "../../../public/images/pynt/tilbud-banner.jpg";
import { spacedText } from "../Utils/spacedText";
import { textContent } from "../Utils/data/text";

const TilbudBanner = () => {
    const { tilbud } = textContent;
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
                    <div className="text-left rounded-2xl py-4 px-8 text-white"
                    style={{
                        backdropFilter: 'blur(40px)',
                        WebkitBackdropFilter: 'blur(40px)'
                    }}>
                        <h1 className="text-2xl font-bold whitespace-pre-wrap">{spacedText(tilbud.title)}</h1>
                        <p className="text-sm whitespace-pre-wrap">{spacedText(tilbud.description)}</p>
                    </div>
                </div>
            </div>

            <div className="lg:hidden my-8 flex flex-col items-center gap-2 w-full">
                <h1 className="text-base text-green-800 font-bold text-center whitespace-pre-wrap">{spacedText(tilbud.title)}</h1>
            </div>
        </>
    );
}

export default TilbudBanner;

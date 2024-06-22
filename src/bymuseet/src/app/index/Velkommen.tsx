import Image from "next/image";
import bakgrunnBilde from "../../../public/images/pynt/bakgrunn.jpg";
import { spacedText } from "../Utils/spacedText";
import { textContent } from "../Utils/data/text";

const Velkommen = () => {
    const { velkommen } = textContent;
    return (
        <>
            <div className="relative w-screen h-60 md:h-80 lg:h-96 sm:p-2 sm:px-2">
                <Image
                    src={bakgrunnBilde}
                    alt="Background image"
                    objectFit="cover"
                    layout="fill"
                    className="absolute inset-0 z-0"
                />
                <div className="hidden lg:flex absolute inset-0 flex-col items-center justify-center z-10">
                    <div className="text-left backdrop-blur-3xl rounded-2xl py-4 px-8 text-white">
                        <h1 className="text-2xl font-bold whitespace-pre-wrap">{spacedText(velkommen.title)}</h1>
                        <p className="text-sm whitespace-pre-wrap">{spacedText(velkommen.subtitle)}</p>
                        <p className="text-md mt-4">{velkommen.description}</p>
                    </div>
                </div>
            </div>

            <div className="lg:hidden my-8 flex flex-col items-center gap-2 w-full">
                <h1 className="text-base text-green-800 font-bold text-center">{spacedText(velkommen.title)}</h1>
                <p className="text-sm whitespace-pre-wrap">{spacedText(velkommen.subtitle)}</p>
            </div>
        </>
    );
}

export default Velkommen;

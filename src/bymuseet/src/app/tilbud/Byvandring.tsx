import { SubTitle } from "../Components/Title";
import { textContent } from "../Utils/data/text";
import { spacedText } from "../Utils/spacedText";

const Byvandring = () => {
    const { byvandring } = textContent;

    return (
        <div className="bg-white mb-5 md:mb-10 lg:mt-10 md:rounded-md shadow-md py-8 px-4 md:p-8 gap-y-2 flex flex-col md:flex-row md:w-full md:space-x-10">
            {/* Left Section */}
            <div className="mb-5 md:mb-0 md:flex-1">
                <SubTitle text={byvandring.title} />
                <div className="flex flex-col gap-4">
                    <p>{byvandring.info.introduction}</p>
                    <p>{byvandring.info.details}</p>
                </div>
            </div>

            {/* Right Section */}
            <div className="md:flex-1">
                <div className="flex flex-col gap-4 md:gap-2">
                    <p className="font-bold text-green-800">{spacedText("informasjon") + ": "}</p>
                    <p>{byvandring.info.time}</p>
                    <p>
                        {byvandring.info.contact}
                        <a href={`mailto:${byvandring.info.contactMail}`} className="text-blue-600 hover:underline">
                            {byvandring.info.contactMail}
                        </a>
                    </p>
                    <p>
                        {byvandring.info.contactPerson}
                        <a href={`tel:${byvandring.info.contactPhone}`} className="text-blue-600 hover:underline">
                            {byvandring.info.contactPhone}
                        </a>
                    </p>
                    <p>{byvandring.info.prices}</p>
                    {/* Additional Links Section */}
                    <p className="font-bold text-green-800 mt-3 whitespace-pre-wrap">{spacedText(byvandring.additional.title + ":")}</p>
                    <div className="flex flex-col gap-2">
                        {byvandring.additional.links.map((link, index) => (
                            <a key={index} href={link.link} target="_blank" rel="noopener noreferrer" className="hover:underline text-blue-600">
                                {link.buttonText}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Byvandring;

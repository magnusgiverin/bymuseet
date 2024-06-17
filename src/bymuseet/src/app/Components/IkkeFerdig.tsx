import Button from "./Button";
import { SubTitle } from "./Title";

const IkkeFerdig = () => {
    return (
        <div className="flex flex-col items-center p-10 my-10 w-full bg-white rounded-md shadow-md">
            <SubTitle text="Denne siden er ikke ferdig" shortText="jobber med saken..." />
            <div className="flex flex-col items-center text-center space-y-4 mt-4">
                <p>Denne siden jobbes med, og er oppe så snart som mulig.</p>
                <p>Takk for din interesse i Bymuseet i Levanger.</p>
                <div className="flex flex-col md:flex-row items-center gap-2">
                    <p>For mer informasjon, ta kontakt med oss på</p>
                    <a href="mailto:bymuseetilevanger@gmail.com" className="text-blue-500 hover:underline">
                        bymuseetilevanger@gmail.com
                    </a>
                </div>
            </div>
            <div className="mt-6">
                <Button icon={"ArrowLeft_sm"} text={"Tilbake"} iconPosition="left" />
            </div>
        </div>
    );
};

export default IkkeFerdig;

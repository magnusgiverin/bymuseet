'use client';
import Button from "../Components/Button";
import { Title } from "../Components/Title";

export default function Medlem() {
    return (
        <main className="flex flex-col items-center justify-center pt-24 gap-2 w-full">
            <span className="w-full">
            <Title text="Takk for din interesse" shortText="takk"/>
            </span>
            <p>Vi setter stor pris på at du ønsker å bli medlem hos oss.</p>
            <p>For å få mer informasjon, kontakt oss på:</p>
            <p className="mt-4 text-blue-500">
                <a href="mailto:bymuseetilevanger@gmail.com">bymuseetilevanger@gmail.com</a>
            </p>
            <Button icon={"ArrowLeft_sm"} text={"tilbake"} iconPosition="left"/>
        </main>
    );
}

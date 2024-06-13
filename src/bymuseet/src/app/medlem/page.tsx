'use client';
import Button from "../Components/Button";
import { Title } from "../Components/Title";

export default function Medlem() {
    return (
        <main className="mt-28 py-8 px-4 md:p-8 flex flex-col items-center md:rounded-md justify-center bg-white gap-2 w-full">
            <span className="w-full">
            <Title text="Takk for din interesse" shortText="takk"/>
            </span>
            <p className="text-center">Vi setter stor pris på at du ønsker å bli medlem hos oss.</p>
            <p className="text-center">For å få mer informasjon, kontakt oss på:</p>
            <p className="mt-4 text-blue-500">
                <a href="mailto:bymuseetilevanger@gmail.com">bymuseetilevanger@gmail.com</a>
            </p>
            <Button icon={"ArrowLeft_sm"} text={"tilbake"} iconPosition="left"/>
        </main>
    );
}

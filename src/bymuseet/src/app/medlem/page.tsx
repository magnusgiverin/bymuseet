'use client';
import Button from "../Components/Button";
import { Title } from "../Components/Title";

export default function Medlem() {
    return (
        <main className="h-auto flex flex-col lg:flex-row gap-5 md:gap-10 w-full my-5 md:my-10">
            <div className="w-full lg:w-2/3 h-auto bg-white p-8 md:rounded-md flex flex-col py-8 px-4 md:p-8">
                <span className="w-full">
                    <Title text="Takk for din interesse" shortText="takk" />
                </span>
                <p className="flex-grow">Bymuseet drives på frivillig basis og uten faste tilskudd til drift og vedlikehold. Det kreves årlig betydelige beløp til vedlikehold av de verneverdige bygningene. Dessuten er det nødvendig med midler for å kunne drive museumsarbeid i form av utstillinger og ulike arrangementer gjennom hele året. Gjennom din støtte til Bymuseet er du/dere med å bevare hus og sikre opplevelser som del av kulturarvmiljøet i Levanger.</p>
                <div className="mt-auto">
                    <Button icon={"ArrowLeft_sm"} text={"tilbake"} iconPosition="left" />
                </div>
            </div>
            <div className="w-full lg:w-1/3 bg-white py-8 px-4 md:p-8 md:rounded-md flex flex-col items-center">
                <div className="w-full flex flex-col items-center justify-center text-center">
                    <p className="font-bold">Medlem: 300 kr pr år</p>
                    <p className="font-bold">Bedrift: 700 kr pr år</p>
                    <p className="mt-4 font-bold">VIPPS til 506171 eller betal til konto 4420.06.97283</p>
                    <p>HUSK skriv navn og epostadresse</p>
                    <p className="mt-4 font-bold">TAKK FOR DIN STØTTE</p>
                </div>
                <div className="w-full flex flex-col items-center p-8 text-center">
                    <p>For å få mer informasjon, kontakt oss på:</p>
                    <p className="mt-4 text-blue-500">
                        <a href="mailto:bymuseetilevanger@gmail.com">bymuseetilevanger@gmail.com</a>
                    </p>
                </div>
            </div>
        </main >
    );
}

import Image from "next/image";
import bymuseetImage from '../../../public/images/pynt/bymuseet.png'; // Adjust the path as necessary

export default function Medlem() {
    return (
        <main className="flex flex-col items-center justify-between p-24 gap-10">
            <Image
                src={bymuseetImage}
                alt="Website logo"
                objectFit="contain"
                className="w-full"
            />
            <div className="text-center">
                <h1 className="text-2xl font-bold mb-4">Takk for din interesse!</h1>
                <p>Vi setter stor pris på at du ønsker å bli medlem hos oss.</p>
                <p>For å få mer informasjon om medlemskap eller for å melde deg inn, vennligst kontakt oss på:</p>
                <p className="mt-4 text-blue-500">
                    <a href="mailto:bymuseetilevanger@gmail.com">bymuseetilevanger@gmail.com</a>
                </p>
            </div>
        </main>
    );
}

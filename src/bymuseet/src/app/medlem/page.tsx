'use client';
import { Title } from "../Components/Title";
import Icons from "../Utils/Icons";
import { useRouter } from "next/navigation";

export default function Medlem() {
    const router = useRouter();

    return (
        <main className="flex flex-col items-center justify-between pt-24 gap-5">
            <Title text="Takk for din interesse" />
            <p>Vi setter stor pris på at du ønsker å bli medlem hos oss.</p>
            <p>For å få mer informasjon om medlemskap eller for å melde deg inn, vennligst kontakt oss på:</p>
            <p className="mt-4 text-blue-500">
                <a href="mailto:bymuseetilevanger@gmail.com">bymuseetilevanger@gmail.com</a>
            </p>
            <div className="mb-5 md:mb-0 flex justify-left">
                <button
                    onClick={() => router.push("/")}
                    className="flex flex-row items-center gap-4 whitespace-pre-wrap text-sm bg-green-800 text-white px-4 py-2 mt-8 rounded-md shadow-md hover:bg-green-700 transition"
                >
                    <Icons name="ArrowLeft_sm" />
                    T I L B A K E
                </button>
            </div>
        </main>
    );
}

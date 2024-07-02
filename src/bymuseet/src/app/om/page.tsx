'use client';
import Link from "next/link";
import NotDone from "../Components/NotDone";
import { SubTitle, Title } from "../Components/Title";
import Banner from "./OmOssBanner";

export default function Om() {
    return (
        <main className="flex flex-col items-center justify-between mb-5 md:mb-10">
            <Banner />
            <div className="w-full bg-white p-8 md:rounded-md flex flex-col py-8 px-4 md:p-8 lg:mt-10">
                <Title text="Bymuseet i Levanger" shortText="Bymuseet i Levanger" />
                <p>Bymuseet ledes av et styre som velges på årsmøtet som er Bymuseets høyeste besluttende organ.</p>
                <p className="mt-4">Styret i 2024 består av følgende personer:</p>
                <ul className="list-disc ml-8 mt-2">
                    <li>Tone Jørstad, styreleder</li>
                    <li>Asbjørn Rørslett Kolberg, nestleder</li>
                    <li>Oda Moen Møst, sekretær</li>
                    <li>Sissel Moksnes Hegdal, kasserer</li>
                    <li>Marit Fosså, styremedlem</li>
                    <li>Hege-Lill Bråten, styremedlem</li>
                    <li>Jan Heggdal, styremedlem</li>
                </ul>
                <p className="mt-4">
                    Bymuseet har i tillegg fem arbeidsutvalg knyttet til museets eiendommer: Brusve gård, Emilies hus, Dampskipsbrygga, inkl. Martnas- og byhistorie, Bilmuseet Hveding Auto og Skolemuseet. Utvalgslederne velges av styret.
                </p>
            </div>
            <div className="w-full bg-white p-8 md:rounded-md flex flex-col py-8 px-4 md:p-8 mt-5 md:mt-10">
                <SubTitle text="Bakgrunn" />
                <p>
                    Bymuseet i Levanger var opprinnelig en del av stiftelsen Levanger museum som ble opprettet 1. februar 1984 der følgende var med: Levanger kommune, Skogn museumslag, Fortidsminneforeningen, Levanger historielag, familien Bjerkan (fotosamling), Levanger håndverk- og industriforening og Levanger Bygdeboknemnd. Brusve gård ble administrasjonssenter for Levanger museum.
                </p>
                <p className="mt-4">
                    I 1998 ble Levanger museum omorganisert som følge av kommunens museumsplan av 1996. Denne omorganiseringa resulterte i opprettelsen av Stiftelsen Levanger museum som rent fotomuseum med fylkeskommunalt ansvar (i dag
                    <Link target="_blank" href="https://levangerfotomuseum.no/">
                        <span className="text-blue-600 hover:underline">{" Levanger fotomuseum"}</span>
                    </Link>
                    ) og Bymuseet i Levanger som frivillig organisasjon. Bymuseet ble eiere/forvaltere av Brusve gård (med stabbur, uthusbygning og det tidligere herredshuset for Frol kommune), arbeiderboligen Reinslyst, Dampskipsbrygga, bilmuseet Hveding Auto, Skolemuseet og Emilies hus.
                </p>

                <Link target="_blank" href="https://www.innherred.no/nyheter/i/kE74jk/disse-var-de-foerste-i-styret-naa-kan-museet-feire-40-aar">
                    <p className="mt-4 text-blue-600 hover:underline">Les mer her.</p>
                </Link>
            </div>
        </main>
    );
}

'use client';
import Image from "next/image";
import Link from "next/link";
import locations from "./Utils/data/locations";
import bakgrunnImage from "../../public/images/pynt/bakgrunn.jpg";
import pynt1 from "../../public/images/pynt/pynt-1.jpg";
import pynt2 from "../../public/images/pynt/pynt-2.jpg";

import { SubTitle, Title } from "./Components/Title";

const Home = () => {
  return (
    <main className="flex flex-col items-center justify-between gap-4 md:gap-8">
      <div className="relative w-screen h-60 md:h-80 lg:h-96 sm:p-2 sm:px-2">
        <Image
          src={bakgrunnImage}
          alt="Background image"
          objectFit="cover"
          layout="fill"
          className="absolute inset-0 z-0"
        />
        <div className="hidden lg:flex absolute inset-0 flex-col items-center justify-center z-10">
          <div className="text-center backdrop-blur-xl rounded-2xl p-10 text-white">
            <h1 className="text-xl font-bold">Velkommen til Bymuseet i Levanger</h1>
            <p className="text-lg">Utforsk våre lokaliteter, lær om hva vi gjør, og bli medlem hos oss.</p>
          </div>
        </div>
      </div>

      <div className="lg:hidden flex flex-col items-center gap-2 w-full mt-4">
        <h1 className="text-xl font-bold text-center">Velkommen til Bymuseet i Levanger</h1>
        <p className="text-lg text-center">Utforsk våre lokaliteter, lær om hva vi gjør, og bli medlem hos oss.</p>
      </div>


      <div className="flex flex-col md:flex-row">
        <div className="bg-white p-8 md:rounded-s-md shadow-md md:w-2/3 w-full">
          <SubTitle text="Vårt formål" />
          <p className="mb-4">Bymuseet i Levanger er en medlemsorganisasjon med formålet å samle, bevare, forske i og formidle kulturhistorisk materiale i og omkring Levanger Sentrum, med spesiell vekt på følgende områder:</p>
          <ul className="list-disc ml-8 mb-4">
            <li>Embedsmannskultur og arbeiderkultur, sosial- og kvinnehistorie</li>
            <li>Handels-, martnas- og byhistorie</li>
            <li>Skolebyen Levanger</li>
            <li>Bilmuseet Hveding Auto</li>
          </ul>
          <p className="mb-4">Bymuseet skal være en aktiv aktør for kulturarven i Trehusbyen Levanger. Sammen med historielaget, biblioteket, fotomuseet og andre museer skal Bymuseet bidra med følgende:</p>
          <ul className="list-disc ml-8 mb-4">
            <li>Å formidle kunnskap for å lette forståelsen av den historiske utviklingen</li>
            <li>Å samle og bevare gjenstander i autentiske miljøer</li>
            <li>Å være effektive samfunnsaktører for historieformidling i Levanger og omegn</li>
          </ul>
        </div>
        <div className="md:h-auto h-60 md:w-1/3 w-full relative">
          <Image
            src={pynt1}
            alt="Sjøgata 1"
            objectFit="cover"
            layout="fill"
            className="md:rounded-e-md"
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="md:h-auto h-60 md:w-1/3 w-full relative">
          <Image
            src={pynt2}
            alt="Fasade Levanger"
            objectFit="cover"
            layout="fill"
            className="md:rounded-s-md"
          />
        </div>
        <div className="bg-white p-8 shadow-md md:w-2/3 w-full md:rounded-e-md">
          <SubTitle text="Litt om oss" />
          <p className="mb-4">Bymuseet i Levanger er en medlemsorganisasjon med stor frivillig innsats og engasjement. Museet har samlet sett mye kompetanse og forvalter en viktig bygningsmasse, og en stor samling gjenstander og dokumenter. Organisasjonen har god anseelse lokalt, og har et positivt forhold til offentlige myndigheter. Bymuseet driver viktig formidling på digitale plattformer, og er en sentral aktør og samarbeidspartner under arrangement i Trehusbyen Levanger.</p>
          <p>Behovet for å styrke formidlingsaktiviteten og ønsket om å få på plass en egen hjemmeside ble drøftet under et arbeidsseminar og en strategisamling i 2023, der styret og utvalgene drøftet status, utfordringer og satsninger i årene framover. Museet eier og forvalter flere vernede og kulturhistorisk viktige bygninger, og har også samlinger som skal registreres, forvaltes og oppbevares på en forsvarlig måte.</p>
        </div>
      </div>
      
      <div className="bg-white p-8 md:rounded-md shadow-md w-full ">
        <Title text="Våre lokaliteter" />
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
          {locations.map((location) => (
            <div key={location.id} className="flex flex-col items-center transition-transform duration-300 ease-in-out transform hover:scale-105">
              <Link className="relative lg:w-96 lg:h-48 sm:w-64 sm:h-32 w-[330px] w-screen h-48 bg-gray-200 overflow-hidden cursor-pointer" href={`/lokaliteter/${location.id}`}>
                <Image
                  src={location.image}
                  alt={location.name}
                  layout="fill"
                  objectFit="cover"
                  className="pointer-events-none rounded-md inset-0 z-0"
                />
                <div className="hidden lg:flex absolute inset-0 flex-col items-center justify-end z-10">
                  <div className="w-full text-center backdrop-blur-md rounded-md p-2 text-white">
                    <h3 className="text-lg font-medium">{location.name}</h3>
                  </div>
                </div>
                <div className="lg:hidden absolute inset-0 flex items-end justify-center z-10">
                  <div className="w-full text-center backdrop-blur-md rounded-md p-2 text-white">
                    <h3 className="text-sm font-medium">{location.name}</h3>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Home;

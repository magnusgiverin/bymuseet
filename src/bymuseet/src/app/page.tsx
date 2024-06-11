'use client';
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";
import locations from "./Utils/data/locations";
import Icons from "./Utils/Icons";
import bakgrunnImage from "../../public/images/bakgrunn.jpg";

const Home = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/medlem");
  };

  return (
    <main className="flex flex-col items-center justify-between gap-8 p-2 ">
      <div className="flex flex-col items-center gap-8 w-full">
        <h1 className="text-4xl font-bold text-center">Velkommen til Bymuseet i Levanger</h1>
        <p className="text-lg text-center">Utforsk våre lokaliteter, lær om hva vi gjør, og bli medlem hos oss.</p>
      </div>

      <div className="relative w-full h-60 md:h-80 lg:h-96">
        <Image
          src={bakgrunnImage}
          alt="Background image"
          objectFit="cover"
          layout="fill"
          className="rounded-md"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-md shadow-md">
          <h2 className="text-xl font-bold mb-4">Våre lokaliteter</h2>
          <div className="flex flex-row flex-wrap justify-center gap-8">
            {locations.map((location) => (
              <div key={location.id} className="flex flex-col items-center transition-transform duration-300 ease-in-out transform hover:scale-105">
                <Link href={`/lokaliteter/${location.id}`}>
                  <div className="items-left relative w-64 h-32 bg-gray-200 overflow-hidden cursor-pointer">
                    <Image
                      src={location.image}
                      alt={location.name}
                      layout="fill"
                      objectFit="cover"
                      className="pointer-events-none rounded-md"
                    />
                  </div>
                  <h3 className="text-lg font-medium">{location.name}</h3>
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-green-800 text-white p-8 rounded-md shadow-md">
          <h2 className="text-xl font-bold mb-4">Vårt Formål</h2>
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
      </div>

      <div className="bg-white p-8 rounded-md shadow-md">
        <h2 className="text-xl font-bold mb-4">Litt om oss</h2>
        <p className="mb-4">Bymuseet i Levanger er en medlemsorganisasjon med stor frivillig innsats og engasjement. Museet har samlet sett mye kompetanse og forvalter en viktig bygningsmasse, og en stor samling gjenstander og dokumenter. Organisasjonen har god anseelse lokalt, og har et positivt forhold til offentlige myndigheter. Bymuseet driver viktig formidling på digitale plattformer, og er en sentral aktør og samarbeidspartner under arrangement i Trehusbyen Levanger.</p>
        <p>Behovet for å styrke formidlingsaktiviteten og ønsket om å få på plass en egen hjemmeside ble drøftet under et arbeidsseminar og en strategisamling i 2023, der styret og utvalgene drøftet status, utfordringer og satsninger i årene framover. Museet eier og forvalter flere vernede og kulturhistorisk viktige bygninger, og har også samlinger som skal registreres, forvaltes og oppbevares på en forsvarlig måte.</p>
      </div>

      <button onClick={handleClick} className="flex items-center justify-center bg-green-800 text-white p-4 rounded-md shadow-md hover:bg-green-700 transition-colors duration-300">
        <span className="mr-2">Bli medlem</span>
        <Icons name="Medlem" />
      </button>
    </main>
  );
};

export default Home;

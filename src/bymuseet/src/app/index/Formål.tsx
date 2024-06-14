import Button from "../Components/Button";
import { SubTitle } from "../Components/Title";
import Image from "next/image";
import formålBilde from "../../../public/images/pynt/pynt-1.jpg";

const Formål = () => {
    return (
      <div className="flex flex-col md:flex-row w-full mb-10">
        <div className="bg-white py-8 px-4 md:p-8 md:rounded-s-md shadow-md lg:w-2/3 w-full">
          <SubTitle text="formål" />
          <p className="mb-4">Bymuseet i Levanger er en medlemsorganisasjon med formålet å samle, bevare, forske i og formidle kulturhistorisk materiale i og omkring Levanger Sentrum, med spesiell vekt på følgende områder:</p>
          <ul className="list-disc ml-8 mb-4">
            <li>Embedsmannskultur og arbeiderkultur, sosial- og kvinnehistorie</li>
            <li>Handels-, martnas- og byhistorie</li>
            <li>Skolebyen Levanger</li>
            <li>Bilmuseet Hveding Auto</li>
          </ul>
          <p className="mb-4">Bymuseet skal være en aktiv aktør for kulturarven i Trehusbyen Levanger. Sammen med historielaget, biblioteket, fotomuseet og andre museer skal Bymuseet bidra med følgende:</p>
          <ul className="list-disc ml-8">
            <li>Å formidle kunnskap for å lette forståelsen av den historiske utviklingen</li>
            <li>Å samle og bevare gjenstander i autentiske miljøer</li>
            <li>Å være effektive samfunnsaktører for historieformidling i Levanger og omegn</li>
          </ul>
          <Button icon="ArrowRight_sm" text={"bli medlem"} link="/medlem" />
        </div>
        <div className="md:h-auto md:rounded-e-md h-60 lg:w-1/3 w-full relative shadow-md">
          <Image
            src={formålBilde}
            alt="Sjøgata 1"
            objectFit="cover"
            layout="fill"
            className="md:rounded-e-md"
          />
        </div>
      </div>
    )
  }

export default Formål;
  
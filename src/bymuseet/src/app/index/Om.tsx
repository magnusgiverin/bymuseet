import Button from "../Components/Button";
import { SubTitle } from "../Components/Title";
import Image from "next/image";
import omBilde from "../../../public/images/pynt/pynt-2.jpg";

const Om = () => {
    return (
        <div className="w-full flex flex-col md:flex-row mb-10">
            <div className="md:rounded-s-md md:h-auto h-60 lg:w-1/3 w-full relative shadow-md">
                <Image
                    src={omBilde}
                    alt="Fasade Levanger"
                    objectFit="cover"
                    layout="fill"
                    className="md:rounded-s-md"
                />
            </div>
            <div className="bg-white py-8 px-4 md:p-8 shadow-md lg:w-2/3 w-full md:rounded-e-md">
                <SubTitle text="om oss" />
                <p className="mb-4">Bymuseet i Levanger er en medlemsorganisasjon med stor frivillig innsats og engasjement. Museet har samlet sett mye kompetanse og forvalter en viktig bygningsmasse, og en stor samling gjenstander og dokumenter. Organisasjonen har god anseelse lokalt, og har et positivt forhold til offentlige myndigheter. Bymuseet driver viktig formidling på digitale plattformer, og er en sentral aktør og samarbeidspartner under arrangement i Trehusbyen Levanger.</p>
                <p>Behovet for å styrke formidlingsaktiviteten og ønsket om å få på plass en egen hjemmeside ble drøftet under et arbeidsseminar og en strategisamling i 2023, der styret og utvalgene drøftet status, utfordringer og satsninger i årene framover. Museet eier og forvalter flere vernede og kulturhistorisk viktige bygninger, og har også samlinger som skal registreres, forvaltes og oppbevares på en forsvarlig måte.</p>
                <Button icon="ArrowRight_sm" text={"les mer"} link="/om" />
            </div>
        </div>
    )
}

export default Om;
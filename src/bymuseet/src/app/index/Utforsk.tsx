import { SubTitle, Title } from "@/app/Components/Title";
import { spacedText } from "@/app/Utils/spacedText";
import Link from "next/link";
import Image from 'next/image';
import locations, { Location } from '@/app/Utils/data/locations';
import { usePathname } from "next/navigation";

interface UtforskProps {
    location?: Location;
}

const Utforsk: React.FC<UtforskProps> = ({ location }) => {
    const pathname = usePathname();

    return (
        <div className="w-full bg-white rounded-0 md:rounded-md p-8 ">
            {pathname === "/" ? (
                <Title text='våre lokasjoner' shortText="lokasjoner" />
            ) : (
                <SubTitle text='utforsk videre' shortText='utforsk' />
            )}
            <div className="flex flex-row flex-wrap justify-center gap-8">
                {locations.filter(loc => loc.id !== location?.id).map((loc) => (
                    <div key={loc.id} className="flex flex-col items-center transition-transform duration-300 ease-in-out transform hover:scale-105">
                        <Link className="shadow-md rounded-md relative lg:w-96 lg:h-48 sm:w-64 sm:h-32 w-[330px] h-48 overflow-hidden cursor-pointer" href={`/lokaliteter/${loc.id}`}>
                            <Image
                                src={loc.image}
                                alt={loc.name}
                                layout="fill"
                                objectFit="cover"
                                className="rounded-md"
                            />
                        </Link>
                        <p className="whitespace-pre-wrap mt-2 text-sm">{spacedText(loc.name)}</p>
                    </div>
                ))}
            </div>
        </div>
    )
};

export default Utforsk;
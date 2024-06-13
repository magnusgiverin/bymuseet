import { SubTitle } from "@/app/Components/Title";
import { Location } from '@/app/Utils/data/locations';
import { spacedText } from "@/app/Utils/spacedText";

interface InformationProps {
    location: Location;
}

const Information: React.FC<InformationProps> = ({ location }) => {
    return (
        <>
            {location.info1 && (
                <div className='flex flex-col lg:flex-row gap-10'>
                    {(location.addressse || location.byggår || location.fredet || location.stilart) && (
                        <div className='w-full lg:w-1/4 bg-white md:rounded-md p-8 mt-10'>
                            {Object.entries(location)
                                .filter(([key, value]) => (['addresse', 'byggår', 'fredet', 'stilart']).includes(key))
                                .map(([key, value]) => (
                                    <span key={key} className='flex flex-col pt-4'>
                                        <p className='font-bold text-green-800'>{spacedText(key) + ": "}</p>
                                        <p>{value}</p>
                                    </span>
                                ))}
                        </div>
                    )}
                    <div className={`lg:mt-10 bg-white rounded-0 md:rounded-md w-full p-8 ${location.addressse || location.byggår || location.fredet || location.stilart ? 'lg:w-3/4' : ''}`}>
                        <SubTitle text='informasjon' shortText='info' />
                        <div className="flex flex-col gap-4">
                            {Object.entries(location)
                                .filter(([key, value]) => key.includes("info"))
                                .map(([key, value]) => (
                                    <p key={key}>{value}</p>
                                ))}
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default Information;
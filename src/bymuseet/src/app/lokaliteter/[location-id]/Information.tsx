import { SubTitle } from "@/app/Components/Title";
import { Location } from '@/app/Utils/data/locations';
import { spacedText } from "@/app/Utils/spacedText";

interface InformationProps {
    location: Location;
}

const Information: React.FC<InformationProps> = ({ location }) => {
    return (
        <>
            {location.info ? (
                <div className='flex flex-col lg:flex-row gap-5 md:gap-10'>
                    {location.facts && (
                        <div className='flex flex-col shadow-md w-full lg:w-1/4 bg-white md:rounded-md py-8 px-4 md:p-8 gap-y-4'>
                            {Object.entries(location.facts)
                                .map(([key, value]) => (
                                    <span key={key} className='flex flex-col'>
                                        <p className='font-bold text-green-800'>{spacedText(key) + ": "}</p>
                                        <p className="whitespace-pre-wrap">{value}</p>
                                    </span>
                                ))}
                        </div>
                    )}
                    <div className={`shadow-md bg-white rounded-0 md:rounded-md w-full py-8 px-4 md:p-8 ${location.facts ? 'lg:w-3/4' : ''}`}>
                        <SubTitle text='informasjon'/>
                        <div className="flex flex-col gap-4">
                            {Object.entries(location.info)
                                .map(([key, value]) => (
                                    <p key={key}>{value}</p>
                                ))}
                        </div>
                    </div>
                </div>
            ) : (
                <>
                    {location.facts && (
                        <div className='flex flex-col shadow-md w-full bg-white md:rounded-md py-8 px-4 md:p-8 gap-y-4'>
                            {Object.entries(location.facts)
                                .map(([key, value]) => (
                                    <span key={key} className='flex flex-col'>
                                        <p className='font-bold text-green-800'>{spacedText(key) + ": "}</p>
                                        <p className="whitespace-pre-wrap">{value}</p>
                                    </span>
                                ))}
                        </div>
                    )}
                </>
            )}
        </>
    )
}

export default Information;

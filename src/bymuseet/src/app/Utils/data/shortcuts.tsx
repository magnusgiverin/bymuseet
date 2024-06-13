import { ReactElement } from "react";
import Icons from "../Icons";

export interface ShortcutLink {
    header: string;
    description: string;
    url: string;
    icon: ReactElement;
}

const shortcuts: ShortcutLink[] = [
    {
        header: 'Hjem',
        description: 'Landingside',
        url: '/',
        icon: <Icons name={"Hjem"}/>
    },
    {
        header: 'Formidling',
        description: 'Se våre tilbud',
        url: '/formidling',
        icon: <Icons name={"Formidling"}/>
    },
    {
        header: 'Arrangementer',
        description: 'Hva skjer på Bymusset i levanger?',
        url: '/arrangementer',
        icon: <Icons name={"Arrangementer"}/>
    },
    {
        header: 'Utleie',
        description: 'Utleie av museets lokaler på Brusve og DaMPSKIPBRYGGA',
        url: '/utleie',
        icon: <Icons name={"Utleie"}/>
    },
]

export default shortcuts;
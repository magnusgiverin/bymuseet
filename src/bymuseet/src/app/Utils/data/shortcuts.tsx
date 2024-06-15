import { ReactElement } from "react";
import Icons from "../Icons";

export interface ShortcutLink {
    header: string;
    url: string;
    icon?: ReactElement;
}

const shortcuts: ShortcutLink[] = [
    {
        header: 'Hjem',
        url: '/',
        icon: <Icons name={"Hjem"}/>
    },
    {
        header: 'Formidling',
        url: '/formidling',
        icon: <Icons name={"Formidling"}/>
    },
    {
        header: 'Arrangementer',
        url: '/arrangementer',
        icon: <Icons name={"Arrangementer"}/>
    },
    {
        header: 'Utleie',
        url: '/utleie',
        icon: <Icons name={"Utleie"}/>
    },
    {
        header: 'Om',
        url: '/om',
        icon: <Icons name={"Om"}/>
    },
]

export default shortcuts;
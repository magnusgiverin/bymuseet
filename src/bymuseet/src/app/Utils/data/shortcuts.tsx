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
        header: 'Om oss',
        url: '/om',
        icon: <Icons name={"Om"}/>
    },
    {
        header: 'Våre tilbud',
        url: '/tilbud',
        icon: <Icons name={"Formidling"}/>
    },
    {
        header: 'Bli medlem',
        url: '/medlem',
        icon: <Icons name={"Medlem"}/>
    },
]

export default shortcuts;
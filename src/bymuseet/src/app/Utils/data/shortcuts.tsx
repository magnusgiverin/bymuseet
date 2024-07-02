import { ReactElement } from "react";
import Icons from "../Icons";

export interface ShortcutLink {
    header: string;
    url: string;
    pages: string[];
    icon?: ReactElement;
}

const shortcuts: ShortcutLink[] = [
    {
        header: 'Hjem',
        url: '/',
        pages: [
            '/', 
            '/lokaliteter/brusve-gard', 
            '/lokaliteter/hveding-auto', 
            '/lokaliteter/reinslyst-arbeiderbolig', 
            '/lokaliteter/dampskipsbrygga',
            '/lokaliteter/emilies-hus',
            '/lokaliteter/skolemuseet',
        ],
        icon: <Icons name={"Hjem"}/>
    },
    {
        header: 'Om oss',
        url: '/om',
        pages: ['/om'],
        icon: <Icons name={"Om"}/>
    },
    {
        header: 'Våre tilbud',
        url: '/tilbud',
        pages: [
            '/tilbud',
            '/tilbud/bilder',
        ],
        icon: <Icons name={"Formidling"}/>
    },
    {
        header: 'Bli medlem',
        url: '/medlem',
        pages: ['/medlem'],
        icon: <Icons name={"Medlem"}/>
    },
]

export default shortcuts;
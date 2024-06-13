
export interface Location {
  id: string;
  name: string;
  image: string;
  dir: string;
  description: string;
  info?: {
    info1?: string;
    info2?: string;
    info3?: string;
  };
  facts?: {
    byggår?: string;
    adresse?: string;
    stilart?: string;
    fredet?: string;
  };
}

const locations: Location[] = [
  {
    id: 'brusve-gard',
    name: 'Brusve Gård',
    image: '/images/brusve-gard/brusve-gard-main.jpg',
    dir: '/images/brusve-gard/',
    description: 'Fra 1803 til 1883 var dette embetsgård for lensmennene Bardo Westrum, Ole Lynum og Bernt Oluf Lynum. I tillegg var Brusve et betydelig gårdsbruk.\n\nI folketellingen i 1835 er oppført hele 11 tjenestefolk på gården. Nå står låna og stabburet igjen. Valget av utsendinger fra amtet til Eidsvoldssamlingen foregikk på Brusve i 1814. \n\nOnsdager er det kafe på Brusve. Følg med på bymuseets facebooksider for tidspunkt.',
    info: {
      info1: 'Brusve gård ligger plassert ved Brusve bru over Levangerelva, i fonden av Brugaten fra Levanger sentrum. Embetsgården er delvis innbygget i et boligstrøk, men mot nordvest er det åpnet for et grøntareal med trær. Foruten den fredete hovedbygningen omfatter anlegget et gammelt stabbur og et nyere uthus.Brusve var fram til 1802 husmannsplass under vestre Ulve. Fra 1803 til 1883 var dette embetsgård for lensmennene Bardo Westrum, Ole Lynum og Bernt Oluf Lynum. I tillegg var Brusve et betydelig gårdsbruk. I folketellingen i 1835 er det oppført hele 11 tjenestefolk på gården. I 1889 kjøpte amtmann Peter Holst gården.',
      info2: 'Valget av utsendinger fra amtet til Eidsvoldssamlingen foregikk på Brusve i 1814. Brusve nedre har også vært vertskap for kongelig besøk ifølge innberetningen: "Karl Johan bodde der under sit opphold i Trøndelagen 1838".',
      info3: 'Hovedbygningen består av to midtkammerbygninger og er satt opp i to omganger. Den nordvestre delen stod ferdig i 1803 og den sørøstre delen i 1811. Bygningen har profilert etasjeskille og gesims med tannsnitt. Taket har asymmetrisk anbrakte arker. Fasaden mot gården har 3 empireportaler med glatte halvsøyler, overlysvindu og høyt profilert overstykke med tannsnitt og romber i lavt relieff. I vinkel med hovedbygningen står stabburet som er i to etasjer med utvendig stående panel.Fra 1900 ble Brusve eid av flere; Sandstad, Vennes, Folden og Janke, og eiendommen ble etter hvert oppstykket og solgt til villatomter. I 1949 kjøpte Frol kommune det som var igjen av hus og jord, og ved kommunesammenslutningen ble Levanger kommune eier. I 1984 ble Levanger museum eier. Brusve gård eies i dag av Bymuseet i Levanger.',
    },
    facts: {
      byggår: '1803',
      adresse: 'Gimlevegen 3',
      stilart: 'Empire',
      fredet: 'Hovedbygningen ble fredet i 1923',
    }
  },
  {
    id: 'dampskipsbrygga',
    name: 'Dampskipsbrygga',
    image: '/images/dampskipsbrygga/dampskipsbrygga-main.jpg',
    dir: '/images/dampskipsbrygga/',
    description: 'Dette er en viktig bygning for å belyse Levangers utvikling fra markedsplass til moderne sentrum med nærhet til sjø med handel og næringsliv i fortid og nåtid.\n\nDampskipsbrygga – eller Innherredsbrygga som har vært brukt som navn på sjøhuset og kaia – ble bygd opp igjen som et av de første hus i Levanger etter bybrannen i 1897 og er i dag fullstendig restaurert.\n\nFra Dampskipsbrygga kan man betrakte Sundet som fra uminnelige tider har vært selve livsnerven i byen.',
    info: {
      info1: 'Da Levanger fikk bystatus i 1836, fikk byen også sitt eget tolloppsyn. Tolletaten leide fra 1837 diverse boder i et sjøhus i Strandgaten 110.I 1846 brant byen ned og vi fikk en ny og helt annerledes reguleringsplan. Strandgaten skiftet navn til Sjøgaten og tomta med sjøhuset fikk nr. 19 som nytt gatenummer.',
      info2: 'En ny brann herjet byen igjen i 1877, og sjøhuset måtte bygges opp igjen. ”Innherreds Aktie Dampskipsselskap” ble i 1890 eier av Sjøgaten 19. Dampskipsbrygga, eller Innherredsbrygga, som har vært brukt som navn på sjøhuset og kaia, ble bygd opp igjen som et av de første hus etter bybrannen i 1897.',
      info3: 'Felleskjøpet fikk i 1990 tillatelse til å rive bygningen, som da var i bruk som lager og i dårlig forfatning. Det endte med at Bymuseet i Levanger i 1992 fikk kjøpte bygningen og reddet denne fra riving. I 1994 ble brygga restaurert. Bygningen brukes i dag som møte-, utstillings- og selskapslokale i 1. etasje og ”martnashistorisk” utstilling i 2. etasje.',
    },
    facts: {
      byggår: '1897',
      adresse: 'Sjøgata 19B',
    }
  },
  {
    id: 'emilies-hus',
    name: 'Emilies Hus',
    image: '/images/emilies-hus/emilies-hus-main.jpg',
    dir: '/images/emilies-hus/',
    description: 'Den siste autentiske arbeiderboligen fra 1897 i Levanger.\n\nBygningen ligger i et arbeider-, fisker- og sjømannstrøk som på folkemunne blir kalt Rotterdam. Dette er et navn som kunne karakterisere det sosiale miljøet og at mange reiste til sjøs herifra. Bymuseet ønsker å bruke boligen som et opplevelsessenter for byens historie knyttet til arbeiderkultur i et handtverker-, fisker og sjømannsstrøk.\n\nBoligen kan i perioder leies ut til kunstnere og hanverkere og til kunstutstillinger.',
    info: {
      info1: 'En typisk arbeiderbolig i ”nerbyen”. De fleste husene i dette kvartalet som var bygd opp etter 1897-brannen var i en etasje. Området ble kaldt ”Rotterdam” på grunn av de mange guttene fra denne bydelen som reiste til sjøs.',
      info2: 'Det har bodd opp til 11 mennesker i denne bygningen på bare 46m2 i grunnflate. Første eier var Konrad Barstad. Bygningen er oppkalt etter Emilie Eriksen, som ble 99 år, og bodde i boligen i Sjøgata 40 i 64 år. Emilies sønn, Erling overtok huset etter henne. Han bodde her i hele 84 år.',
      info3: 'I 1913 ble taket hevet. Ellers er det gjort lite bygningsmessige endringer på bygningen som har høy grad av autentisitet med original bordkledning og originale vinduer. Bymuseet i Levanger eier i dag bygningen. De har restaurert både bolighus og uthus på en skånsom måte.',
    },
    facts: {
      byggår: 'ca. 1897',
      adresse: 'Sjøgata 40',
    }
  },
  {
    id: 'hveding-auto',
    name: 'Hveding Auto',
    image: '/images/hveding-auto/hveding-auto-main.jpg',
    dir: '/images/hveding-auto/',
    description: 'Verkstedsbygningen er autentisk og restaurert med tanke på som opplevelsessenter for byens historie knyttet til samferdsel, og med spesiell fokus på overgangen mellom Levanger som "hesteby" der martnan var sentral og over til en mer moderne by preget av bilen og bilbruk.\n\nDet er viktig å vise bilen som kulturhistorisk fenomen og kulturbærer. Museet satser på fotosamling, gjenstandssamling og kulturhistorie knyttet til en overgangsperiod i byens utvikling. Verkstedet med virksomhet fra så tidlig som ca 1915 er representativt for bilens barndom der bilforretning og bilverksted var en integrert del av byens boligmiljø. Det er få sliek verksteder igjen i Norge.\n\nBygningen er en ypperlig ramme for en presentsjon for bilismens første år i Norge untenfor Kristiania.',
    info: {
      info1: 'Bygningen er delt i to, den østre delen er i dag ”Hveding Auto”. På eiendommen har det vært bilverksted så tidlig som i 1915. Opprinnelig var det et snekkerverksted i 1. etasje.',
      info2: 'Verkstedet er representativt for bilens barndom der bilforretning og bilverksted var en integrert del av byens boligmiljø. I ”gamle dager” var bilverksteder og bensinstasjoner gjerne det pulserende hjerte i byen, mens de i dag er flyttet ut av sentrumskjernen.',
      info3: 'Verkstedet inngår i dag som en del av Bymuseet i Levanger sin virksomhet og brukes som opplevelsessenter for byens historie knyttet til samferdsel. Museet fremstår med fotosamling, gjenstandssamling og kulturhistorie. Det er få slike bilverksteder bevart i Norge.Fasadene på bygningen er endret flere ganger siden 1898. I 1937 ble det satt inn port mot Sjøgata. I 1977 fikk den vestligste delen av bygningen dagens fasade. Bygningen har stor grad av autensitet med originalt panel.',
    },
    facts: {
      byggår: '1898',
      adresse: 'Sjøgata 14',
      stilart: 'Sveitserstilinspirert',
    }
  },
  {
    id: 'reinslyst-arbeiderbolig',
    name: 'Reinslyst',
    image: '/images/reinslyst-arbeiderbolig/reinslyst-arbeiderbolig-main.jpg',
    dir: '/images/reinslyst-arbeiderbolig/',
    description: 'Dette er en gammel arbeiderbolig som opprinnelig lå i Gamle Kongevei, ca 200 m fra Brusve.\n\nHer lå ca 7-8 små hus på Brusves grunn, og beboerne var stort sett husmenn med arbeidsplikt på gården. Boligen visr hvordan folk i små kår bodde og virket, i stor kontrast til de høyere sosiale lags overdådige levesett.',
    facts: {
      byggår: '1855'
    }
  },
  {
    id: 'skolemuseet',
    name: 'Skolemuseet',
    image: '/images/hveding-auto/hveding-auto-main.jpg',
    dir: '/images/hveding-auto/',
    description: 'Levanger skole var en av fylkets faste skole med oppstart før 1803. Til tomta Kirkegata 11 kom skolen i 1878 - først med forsettelsen av byens brgerskole, og deretter med klassene fra folkeskolen.\n\nFra 1892 var skolen øvingslokale for lærerskolen på Levanger - og i mange år den eneste. Det er tatt vare på store mengder undervisningsmateriell opp gjennom årene og i 1985 ble det systematisk registrert og plassert i et klasserom i det såkalte Middelskolebygget fra 1878.\n\nRommet er aldri gjort om - det er møblert med trepulter fra ca 1900 og inneholder gjenstander det knapt finnes make til i Trøndelag. I dette klasserommet får man et godt innblikk i hvordan en byskole ble drevet for 100 år siden. Inkludert gjenstander fra Røstad Skole har museet 4000 gjenstander.',
  },
];

export default locations;

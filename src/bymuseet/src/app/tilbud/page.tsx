'use client';
import Banner from "./TilbudBanner";
import Byvandring from "./Byvandring";
import Utleie from "./Utleie";
import Arrangement from "./Arrangement";

const Tilbud = () => {
    return (
        <main className="flex flex-col items-center justify-between mb-5 md:mb-10">
            <Banner/>
            <Byvandring/>
            <Utleie/>
            <Arrangement/>
        </main>
    );
};

export default Tilbud;

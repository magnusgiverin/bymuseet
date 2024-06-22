'use client';
import { SubTitle } from "@/app/Components/Title";
import { spacedText } from "@/app/Utils/spacedText";
import Button from "../Components/Button";
import { textContent } from "../Utils/data/text";
import Banner from "./Banner";
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

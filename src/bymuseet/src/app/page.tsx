'use client';
import Utforsk from "./index/Utforsk";
import Om from "./index/Om";
import Formål from "./index/Formål";
import Velkommen from "./index/Velkommen";
import Tilbud from "./index/Tilbud";


const Home = () => {
  return (
    <main className="flex flex-col items-center justify-between mb-5 md:mb-10">
      <Velkommen />
      <Om />
      <Tilbud />
      <Utforsk />
      <Formål />
    </main>
  );
};

export default Home;

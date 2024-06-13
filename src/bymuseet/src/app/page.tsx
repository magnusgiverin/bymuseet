'use client';
import Utforsk from "./index/Utforsk";
import Om from "./index/Om";
import Formål from "./index/Formål";
import Velkommen from "./index/Velkommen";


const Home = () => {
  return (
    <main className="flex flex-col items-center justify-between gap-4 mb-4 md:mb-8 md:gap-8">
      <Velkommen />
      <Formål />
      <Om />
      <Utforsk />
    </main>
  );
};

export default Home;

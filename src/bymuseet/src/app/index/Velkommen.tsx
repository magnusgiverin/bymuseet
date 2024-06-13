import Image from "next/image";
import bakgrunnBilde from "../../../public/images/pynt/bakgrunn.jpg";

const Velkommen = () => {
    return (
      <>
        <div className="relative w-screen h-60 md:h-80 lg:h-96 sm:p-2 sm:px-2">
          <Image
            src={bakgrunnBilde}
            alt="Background image"
            objectFit="cover"
            layout="fill"
            className="absolute inset-0 z-0"
          />
          <div className="hidden lg:flex absolute inset-0 flex-col items-center justify-center z-10">
            <div className="text-left backdrop-blur-xl rounded-2xl p-8 text-white">
              <h1 className="text-2xl font-bold">V E L K O M M E N</h1>
              <p className="text-md">Utforsk våre lokaliteter, lær om hva vi gjør, og bli medlem hos oss.</p>
            </div>
          </div>
        </div>
  
        <div className="lg:hidden flex flex-col items-center gap-2 w-full">
          <h1 className="text-xl font-bold text-center">V E L K O M M E N</h1>
          <p className="text-lg text-center">Utforsk, lær, og bli medlem hos oss.</p>
        </div>
      </>
    );
  }

export default Velkommen;
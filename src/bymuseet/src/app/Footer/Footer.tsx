import Link from "next/link";
import Shortcuts from '../Utils/Shortcuts';
import BreakLine from "../Utils/BreakLine";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer>
      <div className="bg-gray-600 p-8 mt-8">
        <div className="max-w-4xl m-auto">
          <div className="mb-4 ml-2 text-sm md:text-base">
          <Link href={"https://www.linkedin.com/in/magnus-giverin-5344b5188/"} target="_blank">
            <h3 className="font-semibold">Laget av Magnus Andreas Giverin</h3>
            </Link>
          </div>

          <div className="mb-4 text-sm ml-2">
            <h3>Bymuseet i Levanger © {year}</h3>
          </div>
        </div>

        <BreakLine />
        <div className="max-w-4xl m-auto">
          <div className=" flex flex-wrap items-center justify-center">
            {Shortcuts.map((link) => (
              <Link key={link.header} href={link.url} className="ml-2 mr-2 mb-2 hover:text-yellow-500">
                {link.header}
              </Link>
            ))}
          </div>
        </div>
      </div>

    </footer>
  )
};

export default Footer;

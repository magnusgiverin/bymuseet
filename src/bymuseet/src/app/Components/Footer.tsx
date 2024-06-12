import Link from "next/link";
import BreakLine from "../Utils/BreakLine";
import shortcuts from "../Utils/data/shortcuts";
import Icons from "../Utils/Icons";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="text-white bg-green-800 mt-8 pb-5">
      <div className="p-4 md:p-8">
        <div className="max-w-4xl m-auto flex flex-col md:flex-row gap-4">
          <div className="w-full md:w-1/2">
            <p className="font-bold">Kontakt:</p>
            <p>bymuseetilevanger@gmail.com</p>
            <p>Org.nr. 990 301 379</p>
            <p className="font-bold mt-4">Postadresse:</p>
            <p>Gimlevegen 1</p>
            <p>7605 LEVANGER</p>
            <div className="flex flex-row gap-1 mt-4">
              <p className="font-bold">Bilder:</p>
              <p>Frank Thomassen © {year}</p>
            </div>
            <p className="mt-4">Bymuseet i Levanger © {year}</p>
          </div>

          <div className="w-full md:w-1/2 flex flex-col mb-10">
            <p className="font-bold">Sider:</p>
            {shortcuts.map((link) => (
              <Link
                key={link.header}
                href={link.url}
                className="hover:text-yellow-500 flex flex-row gap-2 items-center my-1"
              >
                <span>{link.header}</span>
                <Icons name="ArrowRight_sm" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

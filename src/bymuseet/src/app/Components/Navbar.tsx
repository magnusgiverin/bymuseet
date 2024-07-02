'use client';

import shortcuts from '../Utils/data/shortcuts';
import { usePathname } from 'next/navigation';
import Dropdown from './Dropdown';
import { spacedText } from '../Utils/spacedText';

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className='sm:p-2 fixed sticky top-0 bottom-auto z-50 font-semibold w-full bg-green-800 sm:bg-white shadow-xl'>
      <div className="flex justify-center">
        <div className="hidden sm:block sm:flex flex-row w-full sm:w-auto justify-between sm:items-center">
          {shortcuts.map((shortcut, index) => {
            const isActive = shortcut.pages.includes(pathname);
            return (
              <a
                key={index}
                href={shortcut.url}
                className={`px-4 lg:px-8 py-2 text-sm flex flex-row gap-2 items-center ${isActive ? 'text-green-800' : ''}`}
                style={isActive ? { textDecoration: 'underline', textUnderlineOffset: '6px', textDecorationThickness: '3px' } : {}}
              >
                {shortcut.icon}
                <h3 className={`font-bold`}>{shortcut.header}</h3>
              </a>
            );
          })}
        </div>
        <div className='my-5 w-full sm:hidden flex flex-row items-center justify-center relative text-white'>
            <div className='absolute left-0 px-4'>
              <p className='whitespace-pre-wrap text-sm'>{spacedText("bymuseet i levanger")}</p>
            </div>
            <div className='absolute right-0'>
              <Dropdown />
            </div>
          </div>
      </div>
    </nav>
  );
};

export default Navbar;

'use client';

import shortcuts from '../Utils/data/shortcuts';
import { usePathname } from 'next/navigation';
import Dropdown from './Dropdown';
import { spacedText } from '../Utils/spacedText';

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className='sm:p-1 fixed sticky top-0 bottom-auto z-50 font-semibold w-full sm:bg-white bg-green-800 shadow-xl'>
      <div className="flex justify-between items-center w-full">
        <div className="hidden sm:block pl-4 lg:pl-10">
          <span className="whitespace-pre-wrap text-green-800">
            <p className='whitespace-pre-wrap text-md'>{spacedText("bymuseet i levanger")}</p>
          </span>
        </div>
        <div className="hidden sm:flex flex-grow justify-end items-center pr-4 lg:pr-10">
          {shortcuts.map((shortcut, index) => {
            const isActive = shortcut.pages.includes(pathname);
            return (
              <a
                key={index}
                href={shortcut.url}
                className={`relative group px-8 lg:px-5 py-2 text-sm flex flex-row gap-2 items-center ${isActive ? 'text-green-800' : ''}`}
                style={isActive ? { textDecoration: 'underline', textUnderlineOffset: '6px', textDecorationThickness: '2px' } : {}}
              >
                {shortcut.icon}
                <p className='whitespace-pre-wrap text-sm hidden lg:block'>{spacedText(shortcut.header)}</p>
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

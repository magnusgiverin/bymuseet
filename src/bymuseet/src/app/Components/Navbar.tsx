'use client';

import shortcuts from '../Utils/data/shortcuts';
import { usePathname } from 'next/navigation';
import Dropdown from './Dropdown';

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className='sm:p-1 fixed sticky top-0 bottom-auto z-50 font-semibold w-full sm:bg-white bg-green-800 shadow-xl'>
      <div className="flex justify-between items-center w-full">
        <p className='mt-1 hidden sm:block pl-4 lg:pl-10 text-green-800 text-md tracking-[0.15em]'>
          BYMUSEET I LEVANGER
        </p>
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
                <p className='mt-1 whitespace-pre-wrap text-xs xl:text-sm hidden lg:block tracking-[0.15em]'>{shortcut.header.toUpperCase()}</p>
              </a>
            );
          })}
        </div>
        <div className='my-1 w-full sm:hidden flex items-center justify-between pl-4 relative text-white'>
          <p className='mt-1 whitespace-pre-wrap text-sm tracking-[0.15em]'>BYMUSEET I LEVANGER</p>
          <Dropdown />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

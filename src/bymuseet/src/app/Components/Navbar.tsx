'use client';

import shortcuts from '../Utils/data/shortcuts';
import NextBreadcrumb from './BreadCrumbs';
import Dropdown from './Dropdown';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className='sm:sticky sm:top-0 fixed bottom-0 sm:relative z-50 bg-white font-semibold w-full'>
      <div className="flex justify-center p-2">
        <div className="xs:hidden flex items-center">
          {shortcuts.map((shortcut, index) => {
            const isActive = pathname === shortcut.url;
            return (
              <a
                key={index}
                href={shortcut.url}
                className={`block px-4 lg:px-8 py-2 text-sm flex flex-row gap-2 items-center ${isActive ? 'text-green-800' : ''}`}
                style={isActive ? { textDecoration: 'underline', textUnderlineOffset: '6px', textDecorationThickness: '3px' } : {}}
              >
                {shortcut.icon}
                <h3 className={`hidden sm:block font-bold`}>{shortcut.header}</h3>
              </a>
            );
          })}
        </div>
      </div>
      {/* <NextBreadcrumb
        homeElement={"Hjem"}
        separator={'/'}
        activeClasses='text-gray-500'
        listClasses='hover:underline mx-2 font-semibold'
      /> */}
    </nav>
  );
};

export default Navbar;

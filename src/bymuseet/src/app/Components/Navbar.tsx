'use client';

import shortcuts from '../Utils/data/shortcuts';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className='p-2 fixed sm:sticky sm:top-0 bottom-0 sm:bottom-auto z-50 font-semibold w-full bg-white backdrop-blur-2xl'>
      <div className="flex justify-center">
      <div className="xs:hidden flex flex-row w-full sm:w-auto justify-between sm:justify-between sm:items-center">
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

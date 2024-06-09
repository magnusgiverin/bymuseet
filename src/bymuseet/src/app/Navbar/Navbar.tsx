'use client';
import { useEffect, useState } from 'react';
import NextBreadcrumb from './BreadCrumbs';
import Dropdown from './Dropdown';

const Navbar = () => {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup function to remove the event listener when the component is unmounted
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
      <nav
        className={`sticky top-0 font-semibold flex justify-between items-center relative z-50 p-2 ${hasScrolled ? 'shadow-xl' : 'shadow-none'
          }`}
      >
        <div className="flex items-center">
          <NextBreadcrumb
            homeElement={"Hjem"}
            separator={'/'}
            activeClasses='text-gray-500'
            listClasses='hover:underline mx-2 font-semibold'
          />
        </div>
        <Dropdown />
      </nav>
  );
};

export default Navbar;

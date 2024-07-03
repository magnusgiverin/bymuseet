'use client';
import { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import Icons from '../Utils/Icons';
import { spacedText } from '../Utils/spacedText';
import shortcuts from '../Utils/data/shortcuts';
import { usePathname } from 'next/navigation';

const Dropdown = () => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const pathname = usePathname();

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const closeDropdown = () => {
        setIsOpen(false);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                closeDropdown();
            }
        };
        // Attach the event listener when the component mounts
        document.addEventListener('click', handleClickOutside);

        // Detach the event listener when the component unmounts
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []); // Empty dependency array to run this effect only once

    return (
        <>
            {isOpen && ReactDOM.createPortal(
                <div className="fixed inset-0 bg-black bg-opacity-75 z-10"></div>,
                document.body
            )}
            <div className="px-4 top-0 relative group text-white flex z-20" ref={dropdownRef}>
                <button onClick={toggleDropdown}>
                    {isOpen ?
                        <Icons name="Cross" /> : <Icons name="Dropdown" />
                    }
                </button>
                {/* Dropdown content */}
                {isOpen && (
                    <div className='absolute right-0 mt-9 w-screen bg-white z-30'>
                        {shortcuts.map((shortcut, index) => {
                            const isActive = shortcut.pages.includes(pathname);
                            return (
                                <a
                                    key={index}
                                    href={shortcut.url}
                                    className={`${isActive ? 'font-bold text-green-800' : ''} block px-4 py-2 text-sm text-black flex flex-row gap-4 hover:text-green-800`}
                                >
                                    <h3 className='flex whitespace-pre-wrap items-center'>{shortcut.header.toUpperCase()}</h3>
                                    <Icons name='ArrowRight_sm' />
                                </a>
                            )
                        })}
                    </div>
                )}
            </div>
        </>
    );
};

export default Dropdown;

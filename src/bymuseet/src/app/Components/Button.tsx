'use client';
import { useRouter } from "next/navigation";
import Icons from "../Utils/Icons";
import React from 'react';

interface ButtonProps {
    icon: string;
    text: string;
    link?: string;
    iconPosition?: 'left' | 'right';
    onClick?: () => void; // Add the onClick prop
}

const Button: React.FC<ButtonProps> = ({ icon, text, link = "/", iconPosition = 'right', onClick }) => {
    const router = useRouter();
    const spacedText = text.toUpperCase().split('').join(' ');

    const handleClick = () => {
        if (onClick) {
            onClick();

        } else {
            router.push(link);
        }
    };

    return (
        <div className="flex justify-left">
            <button
                onClick={handleClick}
                className="flex flex-row items-center gap-4 whitespace-pre-wrap text-sm bg-green-800 text-white px-4 py-2 mt-8 rounded-md shadow-md hover:bg-green-700 transition"
            >
                {iconPosition === 'left' && <Icons name={icon} />}
                {spacedText}
                {iconPosition === 'right' && <Icons name={icon} />}
            </button>
        </div>
    );
}

export default Button;

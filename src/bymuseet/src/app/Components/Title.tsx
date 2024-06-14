import React from 'react';

interface TitleProps {
    text: string;
    shortText?: string;
    type?: string;
}

const spacedText = (text: string) => text.toUpperCase().split('').join(' ');

export const Title: React.FC<TitleProps> = ({ text, shortText, type }) => {
    return (
        <h1 className="flex items-center justify-center text-base text-lg lg:text-xl font-bold mb-8">
            <span className={`sm:flex-grow sm:mr-4 sm:h-0.5 ${type === "white" ? 'bg-white' : 'bg-green-800'}`}></span>
            <span className="whitespace-pre-wrap text-center text-green-800 md:text-black">
                <span className="block sm:hidden">{spacedText(shortText || text)}</span>
                <span className="hidden sm:block">{spacedText(text)}</span>
            </span>
            <span className={`sm:flex-grow sm:ml-4 sm:h-0.5 ${type === "white" ? 'bg-white' : 'bg-green-800'}`}></span>
        </h1>
    );
};

export const SubTitle: React.FC<TitleProps> = ({ text, shortText, type = 'green' }) => {
    return (
        <h2 className="flex items-center justify-center text-base text-lg lg:text-xl font-semibold mb-8">
            <span className="whitespace-pre-wrap text-center text-green-800 md:text-black">
                <span className="block sm:hidden">{spacedText(shortText || text)}</span>
                <span className="hidden sm:block">{spacedText(text)}</span>
            </span>
            <span className={`sm:flex-grow sm:h-0.5 sm:ml-4 ${type === 'white' ? 'bg-white' : 'bg-green-800'}`}></span>
        </h2>
    );
};
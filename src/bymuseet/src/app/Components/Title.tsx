import React from 'react';

interface TitleProps {
    text: string;
    type?: string;
}

export const Title: React.FC<TitleProps> = ({ text, type }) => {
    const spacedText = text.toUpperCase().split('').join('  ');

    return (
        <h1 className="flex items-center justify-center text-2xl font-extrabold mb-8">
            <span className={`sm:flex-grow sm:mr-4 sm:h-0.5 ${type === "white" ? 'bg-white' : 'bg-green-800'}`}></span>
            <span className="whitespace-pre">{spacedText}</span>
            <span className={`sm:flex-grow sm:ml-4 sm:h-0.5 ${type === "white" ? 'bg-white' : 'bg-green-800'}`}></span>
        </h1>
    );
};

export const SubTitle: React.FC<TitleProps> = ({ text, type = 'green' }) => {
    const spacedText = text.toUpperCase().split('').join('  ');

    return (
        <h2 className="flex items-center justify-center text-xl font-bold mb-8">
            <span className="whitespace-pre">{spacedText}</span>
            <span className={`sm:flex-grow sm:h-0.5 sm:ml-4 ${type === 'white' ? 'bg-white' : 'bg-green-800'}`}></span>
        </h2>
    );
};
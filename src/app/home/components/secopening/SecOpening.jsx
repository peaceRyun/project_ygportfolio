'use client';

import { useRef } from 'react';
import { useSecOpeningScrollEffect } from '@/app/hooks/useGsap';

const SecOpening = ({ title, type }) => {
    const titleRef = useRef(null);
    const titleArray = title.split('').map((char) => (char === ' ' ? '\u00a0' : char));

    useSecOpeningScrollEffect(titleRef);

    return (
        <div className={`relative w-full h-[200vh] ${type === 'black' ? 'bg-#333' : null}`}>
            <div className='sticky top-0 left-0 w-full h-[50vh] flex items-center justify-center'>
                <div
                    ref={titleRef}
                    className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 w-full text-center whitespace-nowrap ${type === 'black' ? 'text-white' : null}`}
                >
                    {titleArray.map((letter, index) => (
                        <span
                            key={index}
                            className='inline-block uppercase font-bold text-[200px] max-lg:text-9xl max-sm:text-8xl'
                        >
                            {letter}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SecOpening;

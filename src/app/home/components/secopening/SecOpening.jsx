'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const SecOpening = ({ title, type }) => {
    const titleRef = useRef(null);
    const titleArray = title.split('').map((char) => (char === ' ' ? '\u00a0' : char));

    useEffect(() => {
        const element = titleRef.current;

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: element,
                start: 'top top',
                end: 'bottom top',
                scrub: true,
            },
        });

        tl.fromTo(element, { scale: 2 }, { scale: 1, ease: 'none' });

        document.body.classList.add('no-horizontal-scroll');

        return () => {
            document.body.classList.remove('no-horizontal-scroll');
            ScrollTrigger.getAll().forEach((t) => t.kill());
            tl.kill();
        };
    }, []);

    return (
        <div className={`relative w-full h-[200vh] ${type === 'black' ? 'bg-black' : null}`}>
            <div className='sticky top-0 left-0 w-full h-[70vh] flex items-center justify-center'>
                <div
                    ref={titleRef}
                    className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 w-full text-center whitespace-nowrap ${type === 'black' ? 'text-white' : null}`}
                >
                    {titleArray.map((letter, index) => (
                        <span
                            key={index}
                            className='inline-block uppercase font-bold text-[300px] max-lg:text-[200px] max-sm:text-[100px]'
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

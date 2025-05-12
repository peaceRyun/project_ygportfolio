'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const SecOpening = ({ title }) => {
    const titleRef = useRef(null);
    const titleArray = title.split('');

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

        // 스케일 애니메이션
        tl.fromTo(element, { scale: 2 }, { scale: 1, ease: 'none' });

        // 정리 함수
        return () => {
            ScrollTrigger.getAll().forEach((t) => t.kill());
        };
    }, []);

    return (
        <div className='relative w-full h-[500vh]'>
            <div className='sticky top-0 left-0 w-full h-screen flex items-center justify-center'>
                <div
                    ref={titleRef}
                    className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50'
                >
                    {titleArray.map((letter, index) => (
                        <span key={index} className='inline-block uppercase font-bold text-[300px]'>
                            {letter}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SecOpening;

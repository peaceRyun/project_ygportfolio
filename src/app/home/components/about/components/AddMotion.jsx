'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const HeroB = 'relative inline-block top-0 origin-center ml-[-8px] pl-[8px] will-change-fw text-left text-white';

const AddMotion = () => {
    const addMotionRef = useRef(null);

    useEffect(() => {
        if (typeof window === 'undefined' || !addMotionRef.current) {
            return;
        }

        const createdAnimations = [];

        const herotitleAnimation = gsap.fromTo(
            '.herotitle1',
            { xPercent: 0 },
            {
                xPercent: 25,
                duration: 10,
                ease: 'sine.inOut',
                yoyo: true,
                repeat: -1,
            }
        );
        createdAnimations.push(herotitleAnimation);

        const herotitletwoAnimation = gsap.fromTo(
            '.herotitle2',
            { xPercent: 0 },
            {
                xPercent: -25,
                duration: 10,
                ease: 'sine.inOut',
                yoyo: true,
                repeat: -1,
            }
        );
        createdAnimations.push(herotitletwoAnimation);

        return () => {
            createdAnimations.forEach((anim) => anim.kill());
        };
    }, []);

    const handleMouseEnter = (e) => {
        const target = e.target;
        const prevSibling = target.previousElementSibling;
        const nextSibling = target.nextElementSibling;

        gsap.to(target, { fontWeight: 200.5, duration: 0.5, ease: 'power2.out' });

        if (prevSibling) {
            gsap.to(prevSibling, { fontWeight: 500.5, duration: 0.5, ease: 'power2.out' });
        }
        if (nextSibling) {
            gsap.to(nextSibling, { fontWeight: 500.5, duration: 0.5, ease: 'power2.out' });
        }

        target.classList.remove('text-white');
        if (prevSibling) {
            prevSibling.classList.remove('text-white');
        }
        if (nextSibling) {
            nextSibling.classList.remove('text-white');
        }

        target.classList.add('text-gray-c-200');
        if (prevSibling) {
            prevSibling.classList.add('text-gray-c-500');
        }
        if (nextSibling) {
            nextSibling.classList.add('text-gray-c-500');
        }
    };

    const handleMouseLeave = (e) => {
        const parent = e.target.parentElement;
        if (parent) {
            const siblings = Array.from(parent.children);
            siblings.forEach((sibling) => {
                gsap.to(sibling, { fontWeight: 700.5, duration: 0.5, ease: 'power2.out' });
                sibling.classList.remove('text-gray-c-200', 'text-gray-c-500');
                sibling.classList.add('text-white');
            });
        }
    };

    return (
        <div ref={addMotionRef} className='w-full h-auto px-12 text-[11vw] font-clashv'>
            <div className='pt-[50px] flex justify-between uppercase leading-none tracking-[-0.2vw]'>
                <span className='Left text-left pr-[1px]'>
                    <span className='herotitle1 inline-block relative top-[2.5vw] overflow-visible z-10'>
                        <i className='absolute z-20 top-[20px] left-0 text-left blur-sm text-black-important overflow-visible'>
                            add
                        </i>
                        <b className={`${HeroB} z-20`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                            a
                        </b>
                        <b className={`${HeroB} z-20`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                            d
                        </b>
                        <b className={`${HeroB} z-20`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                            d
                        </b>
                    </span>
                    <br />
                    <span className='flex'>
                        <b className={`${HeroB}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                            m
                        </b>
                        <b className={`${HeroB}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                            o
                        </b>
                        <b className={`${HeroB}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                            t
                        </b>
                        <b className={`${HeroB}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                            i
                        </b>
                        <b className={`${HeroB}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                            o
                        </b>
                        <b className={`${HeroB}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                            n
                        </b>
                    </span>
                </span>
                <span className='Right mt-[11vw] text-right '>
                    <b className={`${HeroB}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                        t
                    </b>
                    <b className={`${HeroB}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                        o
                    </b>

                    <span className='relative max-lg:whitespace-nowrap max-lg:text-right max-lg:top-[-10px] '>
                        <b className={`${HeroB}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                            {'\u00A0'}
                        </b>
                        <b className={`${HeroB}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                            y
                        </b>
                        <b className={`${HeroB}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                            o
                        </b>
                        <b className={`${HeroB}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                            u
                        </b>
                        <b className={`${HeroB}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                            r
                        </b>
                    </span>

                    <br />
                    <span className='herotitle2 inline-block relative z-20 top-[-2.5vw] whitespace-nowrap'>
                        <i className='absolute top-[-20px] left-0 text-left blur-sm text-black-important overflow-visible'>
                            design
                        </i>
                        <b className={`${HeroB}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                            d
                        </b>
                        <b className={`${HeroB}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                            e
                        </b>
                        <b className={`${HeroB}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                            s
                        </b>
                        <b className={`${HeroB}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                            i
                        </b>
                        <b className={`${HeroB}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                            g
                        </b>
                        <b className={`${HeroB}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                            n
                        </b>
                    </span>
                </span>
            </div>
        </div>
    );
};

export default AddMotion;

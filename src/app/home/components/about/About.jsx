'use client';

import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import SecOpening from '../secopening/SecOpening';
import AboutIntro from './components/AboutIntro';
import MyValues from './components/MyValues';

const HeroB = 'relative inline-block top-0 origin-center ml-[-8px] pl-[8px] will-change-fw text-left text-white';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        if (typeof window === 'undefined') {
            return;
        }

        if (!sectionRef.current) {
            return;
        }

        const createdTriggers = [];

        const createdAnimations = [];

        const items = gsap.utils.toArray('.item', sectionRef.current);

        const pinTrigger = ScrollTrigger.create({
            trigger: sectionRef.current,
            start: 'top top',
            // pin: true,
        });
        createdTriggers.push(pinTrigger);

        items.forEach((item) => {
            const color = item.getAttribute('data-bgcolor');

            const colorTrigger = ScrollTrigger.create({
                trigger: item,
                start: 'top 0%',
                end: 'bottom 300%',

                onEnter: () =>
                    gsap.to('.item', {
                        backgroundColor: color,
                        duration: 1.4,
                    }),
                onEnterBack: () =>
                    gsap.to('.item', {
                        backgroundColor: color,
                        duration: 1.4,
                    }),
                onLeave: () => {
                    gsap.to('.item', { backgroundColor: '#fff', duration: 1.4 });
                },
                onLeaveBack: () => {
                    gsap.to('.item', { backgroundColor: '#fff', duration: 1.4 });
                },
            });
            createdTriggers.push(colorTrigger);
        });
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
            createdTriggers.forEach((trigger) => trigger.kill());
            createdAnimations.forEach((anim) => anim.kill());
        };
    }, [sectionRef.current]);

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
        <section id='about' ref={sectionRef} className='relative w-full h-[1200vh]'>
            <h2 className='sr-only'>About Me</h2>
            <div className='item w-full h-[1200vh] ' data-bgcolor='#333'>
                <div className='w-full h-[100vh]'></div>
                <AboutIntro />
                <SecOpening title='my values' type='black' />
                <MyValues />
                <div className='w-full h-screen px-12  text-[11vw] font-clashv '>
                    <div className='pt-[200px] flex justify-between uppercase leading-none tracking-[-0.2vw]'>
                        <span className='Left text-left pr-[1px]'>
                            <span className='herotitle1 inline-block relative top-[35px] overflow-visible'>
                                <i className='absolute z-10 top-[20px] left-0 text-left blur-sm text-black-important overflow-visible'>
                                    add
                                </i>
                                <b
                                    className={`${HeroB} z-20`}
                                    onMouseEnter={handleMouseEnter}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    a
                                </b>
                                <b
                                    className={`${HeroB} z-20`}
                                    onMouseEnter={handleMouseEnter}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    d
                                </b>
                                <b
                                    className={`${HeroB} z-20`}
                                    onMouseEnter={handleMouseEnter}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    d
                                </b>
                            </span>
                            <br />
                            <b
                                className={`${HeroB} z-10`}
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                            >
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
                        <span className='Right mt-[11vw] text-right'>
                            <b className={`${HeroB}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                                t
                            </b>
                            <b className={`${HeroB}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                                o
                            </b>
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
                            <br />
                            <span className='herotitle2 inline-block relative z-20 top-[-35px]'>
                                <i className='absolute top-[-20px] left-0 text-left blur-sm text-black-important overflow-visible'>
                                    design
                                </i>
                                <b
                                    className={`${HeroB}`}
                                    onMouseEnter={handleMouseEnter}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    d
                                </b>
                                <b
                                    className={`${HeroB}`}
                                    onMouseEnter={handleMouseEnter}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    e
                                </b>
                                <b
                                    className={`${HeroB}`}
                                    onMouseEnter={handleMouseEnter}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    s
                                </b>
                                <b
                                    className={`${HeroB}`}
                                    onMouseEnter={handleMouseEnter}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    i
                                </b>
                                <b
                                    className={`${HeroB}`}
                                    onMouseEnter={handleMouseEnter}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    g
                                </b>
                                <b
                                    className={`${HeroB}`}
                                    onMouseEnter={handleMouseEnter}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    n
                                </b>
                            </span>
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;

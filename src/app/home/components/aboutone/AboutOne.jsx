'use client';

import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

const HeroB =
    'relative inline-block top-0 origin-center ml-[-8px] pl-[8px] will-change-fw text-left font-bold transition-[font-weight] duration-500 ease-in-out';

gsap.registerPlugin(ScrollTrigger);

const AboutOne = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        if (typeof window === 'undefined') {
            return;
        }

        if (!sectionRef.current) {
            return;
        }

        const createdTriggers = [];

        const items = gsap.utils.toArray('.item', sectionRef.current);

        const pinTrigger = ScrollTrigger.create({
            trigger: sectionRef.current,
            start: 'top top',
            pin: true,
        });
        createdTriggers.push(pinTrigger);

        items.forEach((item) => {
            const color = item.getAttribute('data-bgcolor');

            const colorTrigger = ScrollTrigger.create({
                trigger: item,
                start: 'top 0%',
                end: 'bottom 50%',

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

        return () => {
            createdTriggers.forEach((trigger) => trigger.kill());
        };
    }, [sectionRef.current]);

    const handleMouseEnter = (e) => {
        const target = e.target; // hover된 <b> 요소
        const prevSibling = target.previousElementSibling; // 이전 <b> 요소
        const nextSibling = target.nextElementSibling; // 다음 <b> 요소

        // 기본 font-bold 클래스 제거
        target.classList.remove('font-bold');
        if (prevSibling) {
            prevSibling.classList.remove('font-bold');
        }
        if (nextSibling) {
            nextSibling.classList.remove('font-bold');
        }

        // hover 상태에 따른 font-weight 클래스 추가
        target.classList.add('font-extralight'); // 200
        target.classList.add('text-gray-c-200'); // 200
        if (prevSibling) {
            prevSibling.classList.add('font-medium'); // 500
            prevSibling.classList.add('text-gray-c-500'); // 500
        }
        if (nextSibling) {
            nextSibling.classList.add('font-medium'); // 500
            nextSibling.classList.add('text-gray-c-500'); // 500
        }
    };

    const handleMouseLeave = (e) => {
        // 마우스 이탈 시 모든 관련 요소의 font-weight 클래스를 기본값인 font-bold로 되돌립니다.
        // hover된 요소의 부모 (span)를 찾아서 모든 자식 (b) 요소를 순회하며 초기화합니다.
        const parent = e.target.parentElement;
        if (parent) {
            const siblings = Array.from(parent.children);
            siblings.forEach((sibling) => {
                // hover 상태에 따른 클래스 제거
                sibling.classList.remove('font-extralight', 'font-medium');
                // 기본 font-bold 클래스 추가
                sibling.classList.add('font-bold');
            });
        }
    };

    return (
        <section id='about' ref={sectionRef} className='relative w-full h-[1000vh]'>
            <div className='item w-full h-[1000vh] ' data-bgcolor='#000'>
                <div className='w-full h-full px-12 text-white text-[11vw] font-poppins '>
                    <div className='pt-[200px] flex justify-between uppercase leading-[1] tracking-[-0.2vw]'>
                        <span className='Left text-left'>
                            <b className={`${HeroB}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                                a
                            </b>
                            <b className={`${HeroB}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                                d
                            </b>
                            <b className={`${HeroB}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                                d
                            </b>
                            <br />
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
                        <span className='Right mt-[11vw] text-right'>
                            <b className={`${HeroB}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                                t
                            </b>
                            <b className={`${HeroB}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                                o
                            </b>
                            <b className={`${HeroB}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                                {' '}
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
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutOne;

'use client';

import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import SecOpening from '../secopening/SecOpening';
import AboutIntro from './components/AboutIntro';
import MyValues from './components/MyValues';
import AddMotion from './components/AddMotion';
import Skills from './components/Skills';

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

        return () => {
            createdTriggers.forEach((trigger) => trigger.kill());
        };
    }, [sectionRef.current]);

    return (
        <section id='about' ref={sectionRef} className='relative w-full h-[1200vh]'>
            <h2 className='sr-only'>About Me</h2>
            <div className='item w-full h-[1200vh] ' data-bgcolor='#333'>
                <div className='w-full h-[100vh]'></div>
                <AboutIntro />
                <SecOpening title='my values' type='black' />
                <MyValues />
                <Skills />
                <AddMotion />
            </div>
        </section>
    );
};

export default About;

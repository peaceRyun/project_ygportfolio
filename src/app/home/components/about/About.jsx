'use client';

import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import SecOpening from '../secopening/SecOpening';
import AboutIntro from './components/AboutIntro';
import MyValues from './components/MyValues';
import AddMotion from './components/AddMotion';
import Skills from './components/Skills';
import { useAboutScrollEffect } from '@/app/hooks/useGsap';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const sectionRef = useRef(null);

    useAboutScrollEffect(sectionRef);

    return (
        <section id='about' ref={sectionRef} className='relative w-full h-[1300vh]'>
            <h2 className='sr-only'>About Me</h2>
            <div className='item w-full h-[1300vh] ' data-bgcolor='#222831'>
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

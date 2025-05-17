'use client';

import { useState } from 'react';
import LoadScreen from '../layouts/loadscreen/LoadScreen';
import PerformanceB from './components/banner/PerformanceB';
import Intro from './components/intro/Intro';
import ProjectList from './components/project/ProjectList';
import About from './components/about/About';
import SecOpening from './components/secopening/SecOpening';
import LearningB from './components/banner/LearningB';
import Study from './components/study/Study';

const HomePage = () => {
    const [isLoadOn, setIsLoadOn] = useState(true);
    const mainCont = 'w-full relative max-w-[1920px] bg-white mx-auto';

    const handleLoad = () => {
        setIsLoadOn(false);
    };

    return (
        <>
            {isLoadOn && <LoadScreen handleLoad={handleLoad} />}

            <main className={`${mainCont}`}>
                <Intro />
                <PerformanceB />
                <SecOpening title='project' />
                <ProjectList />
                <About />
                <LearningB />
                <SecOpening title='study' />
                <Study />
            </main>
        </>
    );
};

export default HomePage;

'use client';

import { useState } from 'react';
import LoadScreen from '../layouts/loadscreen/LoadScreen';
import PerformanceB from './components/banner/PerformanceB';
import Intro from './components/intro/Intro';
import ProjectList from './components/project/ProjectList';

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
                <ProjectList />
            </main>
        </>
    );
};

export default HomePage;

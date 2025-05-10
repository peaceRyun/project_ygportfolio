import AboutOne from './components/aboutone/AboutOne';
import PerformanceB from './components/banner/PerformanceB';
import Intro from './components/intro/Intro';
import ProjectList from './components/project/ProjectList';

const HomePage = () => {
    const mainCont = 'w-full relative max-w-[1920px] bg-white mx-auto';

    return (
        <>
            <main className={`${mainCont}`}>
                <Intro />
                <PerformanceB />
                <ProjectList />
                <AboutOne />
            </main>
        </>
    );
};

export default HomePage;

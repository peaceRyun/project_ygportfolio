'use client';

import ScrollToExploreIcon from '@/app/ui/scrolltoexploreicon/ScrollToExploreIcon';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const Intro = () => {
    const SecCont = 'relative w-full h-full';
    const introText =
        'font-poppins text-left leading-[0.8em] tracking-[-0.09em] text-[rgb(52,53,57)] max-sm:text-40-16vh-73 max-lg:text-73-16vh-136 text-90-15vh-180';

    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['0', '1'],
    });

    const translateY = useTransform(scrollYProgress, [0, 1], [0, 1000]); // 스크롤 진행도 0~1을 translateY 0~100px로 매핑

    return (
        <div ref={ref} style={{ height: '100vh', position: 'relative' }}>
            <motion.div
                style={{
                    y: translateY,
                }}
            >
                <section className={`${SecCont}`}>
                    <h2 className='sr-only'>제목 소개</h2>
                    <div className='pt-[11vh] px-[50px] pb-[3.7vh] max-sm:pt-[6.5vh] max-sm:px-[20px] max-sm:pb-0 max-lg:pt-[7.7vh] max-lg:px-[30px] max-lg:pb-[1.4vh]'>
                        <div className='py-[7.5vh] flex flex-col gap-[0.4vh]'>
                            <h3 className={`${introText} font-bold`}>Balancing</h3>
                            <h3 className={`${introText} font-thin`}>Learning</h3>
                            <div className='flex gap-[1vw]'>
                                <h3 className={`${introText} font-bold`}>and</h3>
                                <div className='w-150-30vh-250 h-72-15vh-144 max-sm:w-[109.5px] max-sm:h-[58.41px] max-lg:w-100-30vh-204 max-lg:h-58-10vh-108'>
                                    <img
                                        className='block w-full h-full object-cover'
                                        src='./home/intro/seesaw-unscreen.gif'
                                        alt='코끼리 시소'
                                    />
                                </div>
                            </div>
                            <h3 className={`${introText} font-thin`}>Performance</h3>
                            <div className='flex gap-[1.5vw] pt-[3vh] max-sm:flex-col max-sm:pt-2.5 max-sm:pb-[5px] max-sm:gap-2.5'>
                                <div className='font-poppins font-semibold text-[rgb(52,53,57)] border-2 border-[rgb(52,53,57)] rounded-[250px] py-2.5 px-6 text-8-2vh-20 whitespace-nowrap max-sm:text-[12px] max-lg:text-[14px]'>
                                    Web Publisher
                                </div>
                                <div className='font-poppins font-semibold text-[rgb(52,53,57)] border-2 border-[rgb(52,53,57)] rounded-[250px] py-2.5 px-6 text-8-2vh-20 whitespace-nowrap max-sm:text-[12px] max-lg:text-[14px]'>
                                    FrontEnd Developer
                                </div>
                            </div>
                        </div>
                        <div className='w-full flex flex-col items-center justify-center gap-[1vh] pb-[10vh] relative'>
                            <span className='font-bold text-12-1vw-20 text-[#2c3e50]'>스크롤로 탐색하기</span>
                            <ScrollToExploreIcon className='absolute bottom-[2vh] left-1/2 -translate-x-1/2' />
                        </div>
                    </div>
                </section>
            </motion.div>
        </div>
    );
};

export default Intro;

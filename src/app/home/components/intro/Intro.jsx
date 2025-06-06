'use client';

import { useIntroTransform } from '@/app/hooks/useMotion';
import CoderPath from '@/app/ui/design/CoderPath';
import ScrollToExploreIcon from '@/app/ui/scrolltoexploreicon/ScrollToExploreIcon';
import ToolTip from '@/app/ui/tooltip/ToolTip';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';

const Intro = () => {
    const SecCont = 'relative w-full h-full';
    const introText =
        'font-poppins text-left leading-[0.8em] tracking-[-0.09em] text-[rgb(52,53,57)] max-sm:text-40-16vh-73 max-lg:text-73-16vh-136 text-[15vh]';

    const ref = useRef(null);
    const translateY = useIntroTransform(ref);

    return (
        <div ref={ref} style={{ height: '100vh', position: 'relative' }}>
            <motion.div
                style={{
                    position: 'relative',
                    y: translateY,
                }}
            >
                <section className={`${SecCont}`}>
                    <h2 className='sr-only'>제목 소개</h2>
                    <div
                        className='absolute top-0 right-0 z-10 w-[50vw]
                     h-[80vh] pt-[11vh] px-12 max-[1500px]:hidden'
                    >
                        <CoderPath />
                    </div>

                    <div className='pt-[11vh] px-12 pb-[3.7vh] max-sm:pt-[6.5vh] max-sm:px-[20px] max-sm:pb-0 max-lg:pt-[7.7vh] max-lg:px-[30px] max-lg:pb-[1.4vh] mx-auto relative z-20'>
                        <div className='py-[7.5vh] flex flex-col gap-[0.4vh]'>
                            <h3 className={`${introText} font-bold`}>Balancing</h3>
                            <h3 className={`${introText} font-thin`}>Learning</h3>
                            <div className='flex gap-[4vw]  relative'>
                                <h3 className={`${introText} font-bold`}>and</h3>
                                <div className='relative w-[12vh] h-[12vh] max-sm:w-[109.5px] max-sm:h-[58.41px] max-lg:w-100-30vh-204 max-lg:h-58-10vh-108'>
                                    <Image
                                        className='block w-full h-full object-cover'
                                        src='/home/intro/seesaw-unscreen.gif'
                                        alt='코끼리 시소'
                                        fill
                                        sizes='1'
                                        unoptimized
                                        priority
                                    />
                                </div>
                            </div>
                            <div className='flex gap-[2vw] items-center'>
                                <h3 className={`${introText} font-thin`}>Performance</h3>
                                <ToolTip />
                            </div>
                            <div className='flex gap-[1.5vw] pt-[3vh] max-sm:flex-col max-sm:pt-2.5 max-sm:pb-[5px] max-sm:gap-2.5 max-sm:inline'>
                                <div
                                    className={`flex items-center justify-start font-poppins font-semibold text-[rgb(52,53,57)] border-2 border-[rgb(52,53,57)] rounded-[250px] py-2.5 px-6 text-8-2vh-20 whitespace-nowrap max-sm:text-[12px] max-lg:text-[14px] max-sm:inline-block max-sm:mr-4`}
                                >
                                    Web Publisher
                                </div>
                                <div className='flex items-center justify-start font-poppins font-semibold text-[rgb(52,53,57)] border-2 border-[rgb(52,53,57)] rounded-[250px] py-2.5 px-6 text-8-2vh-20 whitespace-nowrap max-sm:text-[12px] max-lg:text-[14px] max-sm:inline-block'>
                                    FrontEnd Developer
                                </div>
                            </div>
                        </div>
                        <div className='w-full flex flex-col items-center justify-center gap-[1vh] pb-[10vh] relative'>
                            <span className='font-bold text-12-1vw-20 text-primary-dark'>스크롤로 탐색하기</span>
                            <ScrollToExploreIcon className='absolute bottom-[2vh] left-1/2 -translate-x-1/2' />
                        </div>
                    </div>
                </section>
            </motion.div>
        </div>
    );
};

export default Intro;

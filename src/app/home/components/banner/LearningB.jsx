'use client';

import { useRef } from 'react';
import { usePerformanceScrollEffect } from '@/app/hooks/useGsap';

const LearningB = () => {
    const pinWrapRef = useRef(null);
    const textObjectRef = useRef(null);

    usePerformanceScrollEffect(pinWrapRef, textObjectRef);
    return (
        <section className='bg-transparent relative z-30 min-h-screen'>
            <div className='absolute top-0 left-0 w-full h-full object-cover'>
                <div className='absolute inset-0 w-full h-full z-10 bg-black opacity-40'></div>
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    src='/home/banner/Ink_Blot_3.mp4'
                    alt='dust background'
                    className='absolute top-0 left-0 w-full h-full object-cover'
                />
            </div>
            <h2 className='sr-only'>learningB</h2>
            <div
                className='textBox w-full h-screen sticky top-0 flex items-center justify-center leading-normal z-10'
                ref={pinWrapRef}
            >
                <div className='w-full max-w-[1400px] mx-auto max-sm:px-6 max-lg:px-12'>
                    <span
                        className='webkitSpan font-poppins font-black text-40-5vh-60 max-sm:text-32-3vh-40 max-lg:text-38-4vh-44 text-white/30 bg-clip-text bg-no-repeat bg-gradient-to-r from-white to-white bg-[size:0%_100%]'
                        ref={textObjectRef}
                    >
                        "당신이 기술을 개선하고 학습을 촉진하는 전략을 사용하는데 집중하고 있다면,
                        <br /> 당신은
                        <span className='highlight bg-clip-text bg-no-repeat bg-gradient-to-t from-[var(--primary-dark)] to-[var(--primary-dark)] bg-[size:100%_0%] text-transparent px-1'>
                            학습 영역
                        </span>
                        에 있는 것이다."
                    </span>
                </div>
            </div>
        </section>
    );
};

export default LearningB;

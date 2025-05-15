'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const PerformanceB = () => {
    const pinWrapRef = useRef(null);
    const textObjectRef = useRef(null);

    useEffect(() => {
        const pinWrap = pinWrapRef.current;
        const textObject = textObjectRef.current;

        if (pinWrap && textObject) {
            // 배경색 채우기 애니메이션 (흰색)
            gsap.to(textObject, {
                backgroundSize: '100% 100%',
                scrollTrigger: {
                    trigger: pinWrap,
                    start: 'top top',
                    end: '+=500px',
                    pin: true,
                    scrub: 1,
                },
            });

            // 하이라이트 키워드 채우기 애니메이션 (노란색)
            gsap.to(textObject.querySelectorAll('.highlight'), {
                backgroundSize: '100% 100%',
                scrollTrigger: {
                    trigger: pinWrap,
                    start: 'top top',
                    end: '+=500px',
                    scrub: 1,
                },
            });
        }

        return () => {
            ScrollTrigger.killAll();
        };
    }, []);
    return (
        <section className='bg-transparent relative z-30 min-h-screen'>
            <div className='absolute top-0 left-0 w-full h-full'>
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    src='/home/banner/Dust_Impact_03.mp4'
                    alt='dust background'
                    className='absolute top-0 left-0 w-full h-full object-cover'
                />
            </div>
            <h2 className='sr-only'>performanceB</h2>
            <div
                className='textBox w-full h-screen sticky top-0 flex items-center justify-center leading-normal '
                ref={pinWrapRef}
            >
                <div className='w-full max-w-[1400px] mx-auto max-sm:px-6 max-lg:px-12'>
                    <span
                        className='webkitSpan font-poppins font-black text-40-5vh-60 max-sm:text-32-3vh-40 max-lg:text-38-4vh-44 text-white/30 bg-clip-text bg-no-repeat bg-gradient-to-r from-white to-white bg-[size:0%_100%]'
                        ref={textObjectRef}
                    >
                        "당신이 능력을 최대한 발휘해서 실행하는 데 주의를 기울이고 있다면,
                        <br /> 당신은
                        <span className='highlight bg-clip-text bg-no-repeat bg-gradient-to-t from-[var(--primary-dark)] to-[var(--primary-dark)] bg-[size:100%_0%] text-transparent px-1'>
                            성과 영역
                        </span>
                        에 있는 것이다."
                    </span>
                </div>
            </div>
        </section>
    );
};

export default PerformanceB;

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
        <section className='bg-[#dfe0df] relative z-30'>
            <h2 className='sr-only'>performanceB</h2>
            <div
                className='textBox w-full h-screen sticky top-0 flex items-center justify-center leading-normal px-12 max-sm:px-4 max-lg:px-8'
                ref={pinWrapRef}
            >
                <div className='w-full'>
                    <span
                        className='webkitSpan font-poppins font-black text-40-5vh-60 max-sm:text-32-3vh-40 max-lg:text-38-4vh-44 text-white/20 bg-clip-text bg-no-repeat bg-gradient-to-r from-white to-white bg-[size:0%_100%]'
                        ref={textObjectRef}
                    >
                        "당신이 능력을 최대한 발휘해서 실행하는 데 주의를 기울이고 있다면,
                        <br /> 당신은
                        <span className='highlight bg-clip-text bg-no-repeat bg-gradient-to-t from-[#d49a65] to-[#d49a65] bg-[size:100%_0%] text-transparent px-1'>
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

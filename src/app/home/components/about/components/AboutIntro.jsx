'use client';

import gsap from 'gsap';
import { useEffect, useRef } from 'react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

const AboutIntro = () => {
    const sectionRef = useRef(null);
    const leftTextRef = useRef(null);
    const rightTextRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top top',
                end: '+=200%',
                scrub: 1,
                pin: true,
                pinSpacing: true,
                anticipatePin: 1,
            },
        });

        // 처음에는 모든 요소 투명 상태 유지
        tl.set([leftTextRef.current, rightTextRef.current], { opacity: 0 });

        // 스크롤의 20% 지점까지는 아무 변화 없음 - 지연 시작
        tl.to({}, { duration: 0.2 });

        // 20% ~ 40% 지점: 왼쪽 텍스트 페이드 인
        tl.to(leftTextRef.current, { opacity: 1, duration: 0.2 });

        // 40% ~ 60% 지점: 왼쪽 텍스트 유지
        tl.to({}, { duration: 0.2 });

        // 60% ~ 70% 지점: 왼쪽 텍스트 페이드 아웃
        tl.to(leftTextRef.current, { opacity: 0, duration: 0.1 });

        // 70% ~ 85% 지점: 오른쪽 텍스트 페이드 인
        tl.to(rightTextRef.current, { opacity: 1, duration: 0.15 });

        // 85% ~ 100% 지점: 오른쪽 텍스트 유지 (더 오래 표시)
        tl.to({}, { duration: 0.15 });

        // 컴포넌트 언마운트 시 ScrollTrigger 정리
        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, []);
    return (
        <div ref={sectionRef} className='relative w-full h-[200vh]'>
            <div className=' w-full h-screen flex items-center justify-center'>
                <div className='w-full max-w-[1400px] mx-auto max-lg:px-12 max-sm:px-6 flex items-center justify-between text-white text-5xl max-lg:text-3xl max-sm:text-xl gap-[1vw] leading-normal font-poppins'>
                    <div ref={leftTextRef} className='left opacity-0 flex-1 whitespace-nowrap'>
                        <b>어떤</b> 프론트엔드 개발자
                        <br />
                        원하신가요?
                    </div>
                    <div ref={rightTextRef} className='right opacity-0 flex-1'>
                        <span className='whitespace-nowrap'>
                            <b>성실</b>하게 일하고,
                        </span>
                        <br />
                        <br />
                        <span className='whitespace-nowrap'>
                            <b>집요</b>하게 문제해결을 찾고,
                        </span>
                        <br />
                        <br />
                        <span className='whitespace-nowrap'>
                            <b>열정</b>있는 신입을 찾으신다면...
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutIntro;

'use client';

import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import 'swiper/css';
import { portfoliodata } from '@/app/api/data';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

gsap.registerPlugin(ScrollTrigger);

const ProjectList = () => {
    const swiperRef = useRef(null);
    const sectionRef = useRef(null);

    useEffect(() => {
        let scrollTrigger;
        const totalSlides = portfoliodata.length;

        if (swiperRef.current && sectionRef.current) {
            const swiper = swiperRef.current;

            const transitionDuration = 0.3;

            // 스크롤 트리거 설정
            scrollTrigger = ScrollTrigger.create({
                trigger: sectionRef.current,
                pin: true,
                start: 'top top',
                end: `+=${(totalSlides - 1) * 100}%`,
                snap: {
                    snapTo: 1 / (totalSlides - 1), // 각 슬라이드 간격을 균등하게 나눔
                    duration: { min: 0.6, max: 0.8 }, // 스냅 애니메이션 시간
                    ease: 'power2.inOut',
                },
                onUpdate: (self) => {
                    // 스크롤 위치에 따른 슬라이드 인덱스 계산
                    const newIndex = Math.round(self.progress * (totalSlides - 1));

                    // 슬라이드 인덱스가 변경된 경우만 업데이트
                    if (swiper.activeIndex !== newIndex) {
                        swiper.slideTo(newIndex, transitionDuration * 1000, 'linear');
                    }
                },
            });
        }

        return () => {
            if (scrollTrigger) {
                scrollTrigger.kill();
            }
            if (swiperRef.current) {
                swiperRef.current.off('slideChange');
            }
        };
    }, []);
    return (
        <section className='portfolio relative w-full h-full overflow-hidden bg-white' ref={sectionRef}>
            <h2 className='sr-only'>프로젝트 섹션</h2>
            <div className='px-20 pb-[60px] h-screen flex flex-col items-start gap-24 [@media_(max-height:700px)]:gap-16 [@media_(max-height:550px)]:gap-10'>
                <div className='textBox w-full pt-[15vh] pb-[10vh] text-[#0f0d0d]'>
                    <h3 className='font-poppins font-bold text-4xl leading-normal max-sm:text-3xl [@media_(max-height:600px)]:text-2xl [@media_(max-height:800px)]:text-3xl'>
                        PROJECTS
                    </h3>
                </div>
                <Swiper
                    onSwiper={(swiper) => {
                        swiperRef.current = swiper;
                    }}
                    slidesPerView={'auto'}
                    centeredSlides={true} // 활성화된 슬라이드를 중앙에 배치
                    loop={false}
                    initialSlide={0}
                    watchSlidesProgress={true}
                    spaceBetween={60}
                    className='w-full h-full overflow-hidden rounded-xl flex pb-[20vh] items-center'
                >
                    {portfoliodata.map((item) => (
                        <SwiperSlide
                            key={item.id}
                            className='w-full h-full max-w-[56.25rem] max-md:max-w-[48rem] max-sm:max-w-[24.375rem] [@media_(max-height:800px)]:max-w-[48rem] [@media_(max-height:600px)]:max-w-[24.375rem]'
                        >
                            <Link href={`/projects/${item.id}`}>
                                <div className='w-full h-auto relative rounded-xl group overflow-hidden aspect-video max-h-full'>
                                    <div className='absolute inset-0 w-full h-full z-20 bg-transparent opacity-0 transition duration-300 ease-in-out group-hover:bg-gradient-to-t group-hover:from-black group-hover:to-transparent group-hover:opacity-100'>
                                        <div className='absolute bottom-0 flex items-end justify-between w-full mt-auto p-10 text-white font-pretendard'>
                                            <span className='font-medium text-md'>{item.title}</span>
                                            <span className='font-thin text-sm'>{item.thumbstartdate}</span>
                                        </div>
                                    </div>
                                    <img
                                        src={item.src}
                                        alt={item.alt}
                                        className='object-cover block w-full h-full transition duration-300 ease-in-out group-hover:scale-[1.04] group-hover:cursor-pointer'
                                    />
                                </div>
                            </Link>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default ProjectList;

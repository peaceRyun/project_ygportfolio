'use client';

import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import 'swiper/css';
import { portfoliodata } from '@/app/api/data';
import Link from 'next/link';
import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Ribbon from '@/app/ui/tag/Ribbon';
import { useProjectListScrollEffect } from '@/app/hooks/useGsap';

gsap.registerPlugin(ScrollTrigger);

const ProjectList = () => {
    const swiperRef = useRef(null);
    const sectionRef = useRef(null);

    useProjectListScrollEffect(swiperRef, sectionRef, portfoliodata.length);
    return (
        <section id='projects' className='relative w-full h-full overflow-hidden bg-white' ref={sectionRef}>
            <h2 className='sr-only'>프로젝트 섹션</h2>
            <div className='px-20 py-[150px] h-screen'>
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
                    {portfoliodata.map((item) => {
                        let ribbonType = '';
                        if (item.type && item.type.find((t) => t.name === '개인')) {
                            ribbonType = '개인';
                        } else if (item.type && item.type.find((t) => t.name === '팀')) {
                            ribbonType = '팀';
                        }
                        let badgeType = '';
                        if (item.projecttype && item.projecttype.find((pt) => pt === '사이드')) {
                            badgeType = '사이드';
                        } else if (item.projecttype && item.projecttype.find((pt) => pt === '토이')) {
                            badgeType = '토이';
                        }
                        return (
                            <SwiperSlide
                                key={item.id}
                                className='w-full h-full max-w-[56.25rem] max-md:max-w-[48rem] max-sm:max-w-[24.375rem] [@media_(max-height:800px)]:max-w-[48rem] [@media_(max-height:600px)]:max-w-[24.375rem]'
                            >
                                <Link href={`/projects/${item.id}`}>
                                    <div
                                        className='w-full h-auto relative rounded-xl group overflow-hidden aspect-video max-h-full'
                                        style={{
                                            boxShadow:
                                                '0 10px 30px rgba(0, 0, 0, 0.1), 0 1px 8px rgba(0, 0, 0, 0.06), 0 0 1px rgba(0, 0, 0, 0.3)',
                                        }}
                                    >
                                        {ribbonType && (
                                            <div className='relative z-30'>
                                                <Ribbon ribbonType={ribbonType}>{ribbonType}</Ribbon>
                                            </div>
                                        )}
                                        {badgeType && (
                                            <div className='absolute top-0 right-0 z-30'>
                                                <div
                                                    className={`badge ${badgeType === '사이드' ? 'badge--purple' : null} ${badgeType === '토이' ? 'badge--yellow' : null}`}
                                                >
                                                    {badgeType} <br /> 프로젝트
                                                </div>
                                            </div>
                                        )}
                                        <div
                                            data-project-link='true'
                                            className='absolute inset-0 w-full h-full z-20 bg-transparent opacity-0 transition duration-300 ease-in-out group-hover:bg-gradient-to-t group-hover:from-black group-hover:to-transparent group-hover:opacity-100 '
                                        >
                                            <div className='absolute bottom-0 flex items-end justify-between w-full mt-auto p-10 text-white font-pretendard'>
                                                <span className='font-medium text-md'>{item.title}</span>
                                                <span className='font-thin text-sm'>{item.thumbstartdate}</span>
                                            </div>
                                        </div>
                                        <img
                                            src={item.src}
                                            alt={item.alt}
                                            className='object-contain block w-full h-full transition duration-300 ease-in-out group-hover:scale-[1.04] group-hover:cursor-pointer '
                                        />
                                    </div>
                                </Link>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </div>
        </section>
    );
};

export default ProjectList;

'use client';

import { useSkillsHrEffect } from '@/app/hooks/useGsap';
import Image from 'next/image';

const ulSpace = 'flex items-center justify-center gap-5 mt-14';

const ImgSizeWrap = 'relative w-15 h-15 max-lg:w-13 max-sm:w-10';

const Skills = () => {
    useSkillsHrEffect();
    return (
        <div className='relative w-full h-auto max-w-[1400px] mx-auto text-[#00ADB5]'>
            <div className='flex flex-col gap-45 pb-10'>
                <h3 className='text-8xl text-white font-semibold font-poppins uppercase  w-full text-center max-lg:text-6xl max-sm:text-4xl'>
                    skills
                </h3>
                <ul className='flex flex-col gap-30 max-lg:px-12 max-sm:px-6'>
                    <li className='relative uppercase text-4xl w-full text-center max-lg:text-2xl max-sm:text-xl'>
                        <h4 className='relative z-10 bg-[#222831] inline px-10'>디자인 & 협업 툴</h4>
                        <div className='hr-wrapper w-full absolute top-[20px] left-0'>
                            <hr></hr>
                        </div>
                        <ul className={`${ulSpace}`}>
                            <li>
                                <div className={`${ImgSizeWrap}`}>
                                    <Image src='/ui/skillicons/Photoshop.svg' fill alt='포토샵' sizes='1' />
                                </div>
                            </li>
                            <li>
                                <div className={`${ImgSizeWrap}`}>
                                    <Image src='/ui/skillicons/Figma-Dark.svg' fill alt='피그마' sizes='1' />
                                </div>
                            </li>
                            <li>
                                <div className={`${ImgSizeWrap}`}>
                                    <Image src='/ui/skillicons/Github-Dark.svg' fill alt='깃허브' sizes='1' />
                                </div>
                            </li>
                        </ul>
                    </li>
                    <li className='relative uppercase text-4xl w-full text-center max-lg:text-2xl max-sm:text-xl'>
                        <h4 className='relative z-10 bg-[#222831] inline px-10'>코드 툴 : 효과적으로 구현하기 위해</h4>
                        <div className='hr-wrapper w-full absolute top-[20px] left-0'>
                            <hr></hr>
                        </div>
                        <ul className={`${ulSpace}`}>
                            <li>
                                <div className={`${ImgSizeWrap}`}>
                                    <Image src='/ui/skillicons/HTML.svg' fill alt='Html5' sizes='1' />
                                </div>
                            </li>
                            <li>
                                <div className={`${ImgSizeWrap}`}>
                                    <Image src='/ui/skillicons/CSS.svg' fill alt='Css3' sizes='1' />
                                </div>
                            </li>
                            <li>
                                <div className={`${ImgSizeWrap}`}>
                                    <Image src='/ui/skillicons/JavaScript.svg' fill alt='JS' sizes='1' />
                                </div>
                            </li>
                            <li>
                                <div className={`${ImgSizeWrap}`}>
                                    <Image src='/ui/skillicons/React-Dark.svg' fill alt='리액트' sizes='1' />
                                </div>
                            </li>
                            <li>
                                <div className={`${ImgSizeWrap}`}>
                                    <Image src='/ui/skillicons/NextJS-Dark.svg' fill alt='넥스트' sizes='1' />
                                </div>
                            </li>
                            <li>
                                <div className={`${ImgSizeWrap}`}>
                                    <Image src='/ui/icons/GSAP.svg' fill alt='GSAP' sizes='1' />
                                </div>
                            </li>
                        </ul>
                    </li>
                    <li className='relative uppercase text-4xl w-full text-center max-lg:text-2xl max-sm:text-xl'>
                        <h4 className='relative z-10 bg-[#222831] inline px-10'>코드 툴 : 효율적으로 구현하기 위해</h4>
                        <div className='hr-wrapper w-full absolute top-[20px] left-0'>
                            <hr></hr>
                        </div>
                        <ul className={`${ulSpace}`}>
                            <li>
                                <div className={`${ImgSizeWrap}`}>
                                    <Image
                                        src='/ui/skillicons/StyledComponents.svg'
                                        fill
                                        alt='스타일컴포넌트'
                                        sizes='1'
                                    />
                                </div>
                            </li>
                            <li>
                                <div className={`${ImgSizeWrap}`}>
                                    <Image src='/ui/skillicons/TailwindCSS-Dark.svg' fill alt='테일윈드' sizes='1' />
                                </div>
                            </li>
                            <li>
                                <div className={`${ImgSizeWrap}`}>
                                    <Image src='/ui/icons/chakraui.svg' fill alt='차크라ui' sizes='1' />
                                </div>
                            </li>
                            <li>
                                <div className={`${ImgSizeWrap}`}>
                                    <Image src='/ui/skillicons/Sass.svg' fill alt='scss' sizes='1' />
                                </div>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Skills;

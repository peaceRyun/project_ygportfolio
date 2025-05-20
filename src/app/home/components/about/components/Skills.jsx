'use client';

import { useSkillsHrEffect } from '@/app/hooks/useGsap';
import Image from 'next/image';

const ulSpace = 'flex items-center justify-center gap-5 mt-14';

const ImgSizeWrap = 'relative w-15 h-15 max-lg:w-13 max-sm:w-10';

const liWrap =
    'relative w-25 h-25 rounded-full bg-primary-dark flex items-center justify-center hover:bg-secondary transition-color duration-300 group';

const skilldesc = `absolute bg-black text-white text-lg w-auto whitespace-nowrap top-[120px]
          left-1/2 transform -translate-x-1/2 text-center p-4 rounded-md
          opacity-0 invisible transition-all duration-500 ease-in-out
          pointer-events-none z-20
          group-hover:opacity-100 group-hover:visible`;

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
                            <li className={`${liWrap}`}>
                                <div className={`${ImgSizeWrap}`}>
                                    <Image src='/ui/skillicons/Photoshop.svg' fill alt='포토샵' sizes='1' />
                                </div>
                                <span className={`${skilldesc}`}>GTQ 1급 취득</span>
                            </li>
                            <li className={`${liWrap}`}>
                                <div className={`${ImgSizeWrap}`}>
                                    <Image src='/ui/skillicons/Figma-Dark.svg' fill alt='피그마' sizes='1' />
                                    <span className={`${skilldesc}`}>
                                        와이어프레임과 프로토타입을 제작한 경험이 있습니다. <br />
                                        협업 시 실시간 댓글 소통을 통한 피드백, 역할 분배 지침서 공유를 하며 효율적으로
                                        작업할 수 있었습니다.
                                    </span>
                                </div>
                            </li>
                            <li className={`${liWrap}`}>
                                <div className={`${ImgSizeWrap}`}>
                                    <Image src='/ui/skillicons/Github-Dark.svg' fill alt='깃허브' sizes='1' />
                                    <span className={`${skilldesc}`}>
                                        코드 협업시 필요한 버전 관리, 브랜치 관리, <br />
                                        이슈 소통& 커밋 메세지 이력 검토를 통한 디버깅을 하여 <br />
                                        효율적인 프로젝트 관리가 가능합니다.
                                    </span>
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
                            <li className={`${liWrap}`}>
                                <div className={`${ImgSizeWrap}`}>
                                    <Image src='/ui/skillicons/HTML.svg' fill alt='Html5' sizes='1' />
                                    <span className={`${skilldesc}`}>
                                        HTML5&CSS3을 활용한 웹표준과 웹접근성을 고려한 마크업 작성이 가능합니다.
                                    </span>
                                </div>
                            </li>
                            <li className={`${liWrap}`}>
                                <div className={`${ImgSizeWrap}`}>
                                    <Image src='/ui/skillicons/CSS.svg' fill alt='Css3' sizes='1' />
                                    <span className={`${skilldesc}`}>
                                        HTML5&CSS3을 활용한 웹표준과 웹접근성을 고려한 마크업 작성이 가능합니다.
                                    </span>
                                </div>
                            </li>
                            <li className={`${liWrap}`}>
                                <div className={`${ImgSizeWrap}`}>
                                    <Image src='/ui/skillicons/JavaScript.svg' fill alt='JS' sizes='1' />
                                    <span className={`${skilldesc}`}>
                                        JavaScript Es6+를 통해 동적인 UI 구현, async&await를 통한 비동기 api 요청을 할
                                        수 있습니다.
                                    </span>
                                </div>
                            </li>
                            <li className={`${liWrap}`}>
                                <div className={`${ImgSizeWrap}`}>
                                    <Image src='/ui/skillicons/React-Dark.svg' fill alt='리액트' sizes='1' />
                                    <span className={`${skilldesc}`}>
                                        React의 다양한 훅과 기초 설정을 이용한 효율적인 컴포넌트 기반 개발의 경험이
                                        있습니다. Vite 빌드 도구를 이용해 개발해나갔습니다.
                                    </span>
                                </div>
                            </li>
                            <li className={`${liWrap}`}>
                                <div className={`${ImgSizeWrap}`}>
                                    <Image src='/ui/skillicons/NextJS-Dark.svg' fill alt='넥스트' sizes='1' />
                                    <span className={`${skilldesc}`}>
                                        Next 프레임워크를 통한 빠른 렌더링을 통한 성능 개선, 효율적인 폴더 구조 라우팅
                                        설계가 가능합니다.
                                    </span>
                                </div>
                            </li>
                            <li className={`${liWrap}`}>
                                <div className={`${ImgSizeWrap}`}>
                                    <Image src='/ui/icons/GSAP.svg' fill alt='GSAP' sizes='1' />
                                    <span className={`${skilldesc}`}>
                                        GSAP을 기반으로 한 동적 인터렉티브 애니메이션 구현에 관심이 많습니다. <br />
                                        효과적인 브랜드 아이덴디티 표출, 사용자를 편하게 애니메이션을 볼 수 있게 만드는
                                        다양한 스크롤 기반 효과를 <br />
                                        프로젝트에 적용해보고 있습니다.
                                    </span>
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
                            <li className={`${liWrap}`}>
                                <div className={`${ImgSizeWrap}`}>
                                    <Image src='/ui/skillicons/Redux.svg' fill alt='리덕스' sizes='1' />
                                    <span className={`${skilldesc}`}>
                                        Redux를 통해 기존 react hook만으로는 구현하기 힘든 효율적인 전역 상태 관리가
                                        가능합니다.
                                    </span>
                                </div>
                            </li>
                            <li className={`${liWrap}`}>
                                <div className={`${ImgSizeWrap}`}>
                                    <Image
                                        src='/ui/skillicons/StyledComponents.svg'
                                        fill
                                        alt='스타일컴포넌트'
                                        sizes='1'
                                    />
                                    <span className={`${skilldesc}`}>
                                        Styled-Component을 통한 유지보수성과 확장성을 고려한 구조로 설계한 경험이
                                        있습니다.
                                    </span>
                                </div>
                            </li>
                            <li className={`${liWrap}`}>
                                <div className={`${ImgSizeWrap}`}>
                                    <Image src='/ui/skillicons/TailwindCSS-Dark.svg' fill alt='테일윈드' sizes='1' />
                                    <span className={`${skilldesc}`}>
                                        Tailwind CSS를 통해 빠른 생산성과 일관성 있는 코드 개발이 가능합니다.
                                    </span>
                                </div>
                            </li>
                            <li className={`${liWrap}`}>
                                <div className={`${ImgSizeWrap}`}>
                                    <Image src='/ui/icons/chakraui.svg' fill alt='차크라ui' sizes='1' />
                                    <span className={`${skilldesc}`}>
                                        Charkra UI의 간편한 스타일링과 일관된 디자인 시스템을 공부하며 컴포넌트의 빠른
                                        제작과 일관성 있는 코드 개발이 가능합니다.
                                    </span>
                                </div>
                            </li>
                            <li className={`${liWrap}`}>
                                <div className={`${ImgSizeWrap}`}>
                                    <Image src='/ui/skillicons/Sass.svg' fill alt='scss' sizes='1' />
                                    <span className={`${skilldesc}`}>
                                        바닐라 js 프로젝트에서 필요한 css 스타일링을 Sass를 통해 효율적으로 구현 및
                                        관리를 할 수 있습니다.
                                    </span>
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

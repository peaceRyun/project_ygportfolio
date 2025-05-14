'use client';

import { portfoliodata } from '@/app/api/data';
import LoadScreen from '@/app/layouts/loadscreen/LoadScreen';
import GitHub from '@/app/ui/icon/GitHub';
import TechStackIcon from '@/app/ui/icon/TechStackIcon';
import Web from '@/app/ui/icon/Web';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { RxArrowTopRight } from 'react-icons/rx';

const secStyle = 'relative bg-secondary rounded-xl p-8 text-black';
const h5Style = 'absolute top-0 left-0 bg-white pr-3 pb-3 rounded-br-2xl font-bold text-2xl w-[250px]';
const titleWrapStyle = 'bg-primary-light rounded-4xl px-4 py-2 text-center w-full block';

const ProjectPage = () => {
    const params = useParams();
    const paramsId = parseInt(params.id);
    const projectData = portfoliodata.find((item) => item.id === paramsId);
    const {
        src,
        alt,
        title,
        titledetail,
        deploy,
        code,
        desc,
        type,
        techStack,
        period_start,
        period_end,
        keyFeatures,
        troubleShooting,
        requests,
        process,
    } = projectData;
    if (!projectData) {
        return <div>프로젝트 데이터를 불러오지 못했습니다.</div>;
    }

    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.scrollTo(0, 0);
        }
    }, []);

    useEffect(() => {
        const glowInElements = document.querySelectorAll('.glowIn');

        glowInElements.forEach((element) => {
            // 이미 처리된 요소인지 확인 (다시 렌더링될 때 중복 적용 방지)
            if (element.getAttribute('data-glow-applied')) {
                return;
            }

            const text = element.textContent;
            element.textContent = ''; // 기존 텍스트를 비웁니다.

            const letters = text.split('');

            letters.forEach((letter, index) => {
                const span = document.createElement('span');
                span.textContent = letter;
                span.style.animationDelay = `${index * 0.5}s`; // 각 글자에 순차적인 animation-delay 적용
                element.append(span);
            });

            // 처리 완료 표시
            element.setAttribute('data-glow-applied', 'true');
        });
    }, [title]);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        function createTypingAnimation(element, message) {
            if (element.dataset.animated === 'true') return;

            element.textContent = '';
            element.dataset.animated = 'true';

            const timeline = gsap.timeline({
                scrollTrigger: {
                    trigger: element,
                    start: 'top 70%',
                    once: true,
                },
            });

            let chars = message.split('');
            chars.forEach((char, index) => {
                timeline.add(() => {
                    element.textContent += char;
                }, index * 0.05);
            });

            timeline.to(element, {
                borderRight: '0.5rem solid transparent',
                repeat: -1,
                yoyo: true,
                duration: 0.8,
            });

            return timeline;
        }

        keyFeatures.forEach((item, index) => {
            const element = document.getElementById(`dynamic-heading-${index}`);
            if (element) {
                createTypingAnimation(element, item.title);
            }
        });

        // 컴포넌트 언마운트 시 정리
        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, [keyFeatures]);

    const cardRef = useRef(null);
    const [style, setStyle] = useState({
        transform: 'perspective(1500px) rotateX(0deg) rotateY(0deg) scale(1)',
        transition: 'transform 200ms cubic-bezier(.03,.98,.52,.99)',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1), 0 1px 8px rgba(0, 0, 0, 0.06), 0 0 1px rgba(0, 0, 0, 0.3)',
    });
    const [isMouseOverLink, setIsMouseOverLink] = useState(false);
    const settings = {
        maxTilt: 15,
        perspective: 1500,
        scale: 1.01,
        speed: 500,
        easing: 'cubic-bezier(.03,.98,.52,.99)',
    };
    const onMouseMove = (e) => {
        if (!cardRef.current || isMouseOverLink) {
            return; // 링크 위에서는 기울기 적용 안 함
        }

        const card = cardRef.current;
        const rect = card.getBoundingClientRect();

        // 카드의 중심 좌표 계산
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        // 마우스 위치와 카드 중심의 차이 계산
        const mouseX = e.clientX - centerX;
        const mouseY = e.clientY - centerY;

        // 카드 크기에 비례하여 -1~1 범위로 정규화된 값 계산
        const tiltX = (settings.maxTilt * mouseY) / (rect.height / 2);
        const tiltY = (-settings.maxTilt * mouseX) / (rect.width / 2);

        // 변형 스타일 설정
        setStyle({
            transform: `perspective(${settings.perspective}px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale(${settings.scale})`,
            transition: `transform ${settings.speed}ms ${settings.easing}`,
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1), 0 1px 8px rgba(0, 0, 0, 0.06), 0 0 1px rgba(0, 0, 0, 0.3)',
        });
    };
    const onMouseLeave = () => {
        // 마우스가 카드에서 벗어나면 원래 상태로 복원
        setStyle({
            transform: 'perspective(1500px) rotateX(0deg) rotateY(0deg) scale(1)',
            transition: `transform ${settings.speed}ms ${settings.easing}`,
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1), 0 1px 8px rgba(0, 0, 0, 0.06), 0 0 1px rgba(0, 0, 0, 0.3)',
        });
        setIsMouseOverLink(false);
    };

    const [isLoadOn, setIsLoadOn] = useState(true);

    const handleLoad = () => {
        setIsLoadOn(false);
    };

    return (
        <>
            {isLoadOn && <LoadScreen handleLoad={handleLoad} />}
            <section className='relative w-full h-[587px] overflow-hidden max-lg:h-[510px]'>
                <h2 className='sr-only'>{title}</h2>
                <div className='absolute top-1/2 left-1/2 -translate-1/2 flex flex-col justify-center z-20 w-full mx-auto max-w-[1400px] px-12 max-lg:max-w-auto max-lg:px-8 max-sm:max-w-auto max-sm:px-5'>
                    <h3 className='text-white text-6xl font-bold glowIn'>{title}</h3>
                </div>
                <Image src={src} alt={alt} className='object-contain absolute top-0 left-0 z-0 blur-sm' fill priority />
                <div className='absolute inset-0 w-full h-full z-10 bg-black opacity-60'></div>
                <div className='waveAni absolute bottom-[-76px] left-0 w-[5000px] h-[247px] z-30 object-contain max-lg:bottom-0 max-lg:h-[160px]'></div>
            </section>
            <main className='w-full max-w-[1400px] mx-auto relative z-10 pt-[7.5rem] px-12 max-lg:px-8 max-sm:px-5 '>
                <div className='contents-wrap flex gap-24 justify-between items-stretch max-lg:flex-col max-lg:gap-20'>
                    <div className='info-area flex-1 '>
                        <div className='sticky top-[150px] left-0 w-full max-lg:relative max-lg:top-0'>
                            <div
                                ref={cardRef}
                                onMouseMove={onMouseMove}
                                onMouseLeave={onMouseLeave}
                                style={style}
                                className='flex flex-col items-start w-full gap-10 bg-secondary rounded-lg shadow-lg p-12'
                            >
                                <h4 className='text-4xl font-semibold whitespace-pre-wrap'>{titledetail}</h4>
                                <div className='flex flex-col gap-4'>
                                    <p className='font-bold'>Type</p>
                                    <ul className='flex gap-3 flex-wrap'>
                                        {type.map((item) => (
                                            <li
                                                key={item.name}
                                                className={`py-1 px-2 rounded-4xl whitespace-nowrap ${item.classname}`}
                                            >
                                                {item.name}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className='flex flex-col gap-4'>
                                    <p className='font-bold'>Overview</p>
                                    <p>{desc}</p>
                                </div>
                            </div>

                            <div className='py-12 flex flex-col w-full'>
                                <Link
                                    href={deploy}
                                    className='p-2 border-b-1 relative flex items-center justify-between gap-2.5 overflow-hidden w-full h-full link1'
                                    data-project-link='true'
                                >
                                    <div className='flex items-center gap-2'>
                                        <Web />
                                        Go Website
                                    </div>
                                    <RxArrowTopRight size={20} />
                                </Link>
                                <Link
                                    href={code}
                                    className='p-2 border-b-1 relative flex items-center justify-between gap-2.5 overflow-hidden w-full h-full link1'
                                    data-project-link='true'
                                >
                                    <div className='flex items-center gap-2'>
                                        <GitHub />
                                        Go Github
                                    </div>
                                    <RxArrowTopRight size={20} />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className='detail-area flex-1'>
                        <div className='flex flex-col gap-8'>
                            <section className={`${secStyle}`}>
                                <h5 className={`${h5Style}`}>
                                    <div className='absolute top-[-2px] right-[-14px] w-4 h-4 rotate-270'>
                                        <Image src='/ui/quarterpiece.svg' fill alt='piece' />
                                    </div>
                                    <span className={`${titleWrapStyle}`}>Period</span>
                                    <div className='absolute bottom-[-14px] left-[-2px] w-4 h-4 rotate-270'>
                                        <Image src='/ui/quarterpiece.svg' fill alt='piece' />
                                    </div>
                                </h5>

                                <p className='pt-15'>
                                    <span>{period_start}</span> ~ <span>{period_end}</span>
                                </p>
                            </section>
                            <section className={`${secStyle}`}>
                                <h5 className={`${h5Style}`}>
                                    <div className='absolute top-[-2px] right-[-14px] w-4 h-4 rotate-270'>
                                        <Image src='/ui/quarterpiece.svg' fill alt='piece' />
                                    </div>
                                    <span className={`${titleWrapStyle}`}>Tech Stack</span>
                                    <div className='absolute bottom-[-14px] left-[-2px] w-4 h-4 rotate-270'>
                                        <Image src='/ui/quarterpiece.svg' fill alt='piece' />
                                    </div>
                                </h5>
                                <ul className='flex flex-wrap gap-6 pt-15'>
                                    {techStack.map((name, index) => (
                                        <li key={index} className='inline'>
                                            <TechStackIcon name={name} />
                                        </li>
                                    ))}
                                    <li></li>
                                </ul>
                            </section>
                            <section className={`${secStyle}`}>
                                <h5 className={`${h5Style}`}>
                                    <div className='absolute top-[-2px] right-[-14px] w-4 h-4 rotate-270'>
                                        <Image src='/ui/quarterpiece.svg' fill alt='piece' />
                                    </div>
                                    <span className={`${titleWrapStyle}`}>Key Features</span>
                                    <div className='absolute bottom-[-14px] left-[-2px] w-4 h-4 rotate-270'>
                                        <Image src='/ui/quarterpiece.svg' fill alt='piece' />
                                    </div>
                                </h5>
                                <ul className='pt-15'>
                                    {keyFeatures.map((item, index) => (
                                        <li key={item.title} className='inline mr-4'>
                                            <div className='relative rounded-2xl w-full  overflow-hidden my-8'>
                                                <div className='relative pb-[56.25%]'>
                                                    <video
                                                        autoPlay
                                                        loop
                                                        muted
                                                        playsInline
                                                        src={item.video}
                                                        alt={item.title}
                                                        className='absolute top-0 left-0 w-full h-full object-cover'
                                                    />
                                                </div>
                                            </div>
                                            <p
                                                className='mb-3 text-xl font-semibold overflow-hidden'
                                                id={`dynamic-heading-${index}`}
                                                data-message={item.title}
                                                style={{
                                                    borderRight: '0.5rem solid transparent',
                                                }}
                                            ></p>
                                            <div className='flex flex-col gap-1'>
                                                <p>{item.desc1}</p>
                                                <p>{item.desc2}</p>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </section>
                            {requests ? (
                                <section className={`${secStyle}`}>
                                    <h5 className={`${h5Style}`}>
                                        <div className='absolute top-[-2px] right-[-14px] w-4 h-4 rotate-270'>
                                            <Image src='/ui/quarterpiece.svg' fill alt='piece' />
                                        </div>
                                        <span className={`${titleWrapStyle}`}>Request(Self)</span>
                                        <div className='absolute bottom-[-14px] left-[-2px] w-4 h-4 rotate-270'>
                                            <Image src='/ui/quarterpiece.svg' fill alt='piece' />
                                        </div>
                                    </h5>
                                    <ul className='pt-15'>
                                        {requests.map((item, index) => (
                                            <li key={index} className='inline mr-4'>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </section>
                            ) : null}
                            {process ? (
                                <section className={`${secStyle}`}>
                                    <h5 className={`${h5Style}`}>
                                        <div className='absolute top-[-2px] right-[-14px] w-4 h-4 rotate-270'>
                                            <Image src='/ui/quarterpiece.svg' fill alt='piece' />
                                        </div>
                                        <span className={`${titleWrapStyle}`}>Process</span>
                                        <div className='absolute bottom-[-14px] left-[-2px] w-4 h-4 rotate-270'>
                                            <Image src='/ui/quarterpiece.svg' fill alt='piece' />
                                        </div>
                                    </h5>
                                    <ul className='pt-15'>
                                        {process.map((item) => (
                                            <li key={item.title} className='inline mr-4'>
                                                <p className='mb-3 text-xl font-bold'>{item.title}</p>
                                                <div className='flex flex-col gap-1'>
                                                    <p className='whitespace-pre-wrap'>{item.desc}</p>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </section>
                            ) : null}

                            <section className={`${secStyle}`}>
                                <h5 className={`${h5Style}`}>
                                    <div className='absolute top-[-2px] right-[-14px] w-4 h-4 rotate-270'>
                                        <Image src='/ui/quarterpiece.svg' fill alt='piece' />
                                    </div>
                                    <span className={`${titleWrapStyle}`}>Trouble Shooting</span>
                                    <div className='absolute bottom-[-14px] left-[-2px] w-4 h-4 rotate-270'>
                                        <Image src='/ui/quarterpiece.svg' fill alt='piece' />
                                    </div>
                                </h5>
                                <ul className='pt-15'>
                                    {troubleShooting.map((item) => (
                                        <li key={item.title} className='inline mr-4'>
                                            <p className='mb-8 text-xl font-semibold'>{item.title}</p>
                                            <div className='flex flex-col gap-4'>
                                                <div className='flex flex-col gap-1'>
                                                    <p className='font-bold'>문제정의</p>
                                                    <p>{item.problem}</p>
                                                </div>
                                                <div className='flex flex-col gap-1'>
                                                    <p className='font-bold'>해결과정</p>
                                                    <p>{item.solution}</p>
                                                </div>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </section>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};

export default ProjectPage;

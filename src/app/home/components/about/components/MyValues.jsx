'use client';

import Image from 'next/image';
import { useState } from 'react';

const cardWrap =
    'w-full h-full rounded-2xl bg-white/90 py-[5vh] px-[2.5vw] flex flex-col gap-5 text-left items-center justify-start hover-shine';

const ImgSizeWrap = 'relative z-30 w-40 h-40 p-10 max-lg:w-30 max-lg:h-30';

const MyValues = () => {
    const [creativeGifSrc, setCreativeGifSrc] = useState('/home/about/photo-in-reveal.gif');
    const [planningGifSrc, setPlanningGifSrc] = useState('/home/about/demand-in-reveal.gif');
    const [growthGifSrc, setGrowthGifSrc] = useState('/home/about/computer-display-in-reveal.gif');

    const creativeHoverGif = '/home/about/photo-hover-pinch.gif';
    const planningHoverGif = '/home/about/demand-hover-click.gif';
    const growthHoverGif = '/home/about/computer-display-hover-angle.gif';
    return (
        <div className='relative w-full h-[100vh]'>
            <ul className='w-full max-w-[1024px] h-[40%] mx-auto max-lg:px-12 max-sm:px-6 flex flex-wrap justify-center text-black text-xl max-lg:text-lg leading-normal font-poppins'>
                <li className='flex-1 my-1 mr-1 max-lg:basis-2/5 max-sm:basis-1'>
                    <div className={`${cardWrap}`}>
                        <h4 className='text-3xl whitespace-nowrap font-bold'>창의적으로</h4>
                        <div
                            className={`${ImgSizeWrap}`}
                            onMouseEnter={() => setCreativeGifSrc(creativeHoverGif)}
                            onMouseLeave={() => setCreativeGifSrc('/home/about/photo-in-reveal.gif')}
                        >
                            <Image
                                src={creativeGifSrc}
                                alt='photo.gif'
                                fill
                                size='100'
                                className='object-cover'
                                unoptimized
                                sizes='100vw'
                            />
                        </div>
                        <p className='text-16-1vw-20'>
                            사용자의 관심, 직관적인 메세지 전달, 편안한 사용자 경험이 담긴 웹사이트에 다가가기 위해 최신
                            기술 습득에 적극적으로 참여합니다.
                        </p>
                    </div>
                </li>
                <li className='flex-1 my-1 mx-1 max-lg:basis-2/5 max-sm:basis-1'>
                    <div className={`${cardWrap}`}>
                        <h4 className='text-3xl whitespace-nowrap font-bold'>계획적으로</h4>
                        <div
                            className={`${ImgSizeWrap}`}
                            onMouseEnter={() => setPlanningGifSrc(planningHoverGif)}
                            onMouseLeave={() => setPlanningGifSrc('/home/about/demand-in-reveal.gif')}
                        >
                            <Image
                                src={planningGifSrc}
                                alt='photo.gif'
                                fill
                                size='100'
                                className='object-cover'
                                unoptimized
                                sizes='100vw'
                            />
                        </div>
                        <p className='text-16-1vw-20'>
                            목표가 주어지면 곧바로 요구사항 정리, 단계별 과제 설정, 우선순위 정하기 행동을 통해 명확한
                            로드맵을 수립하면서 흔들리지 않고 나아갑니다.
                        </p>
                    </div>
                </li>
                <li className='flex-1 my-1 ml-1 max-lg:basis-1 max-sm:basis-1'>
                    <div className={`${cardWrap}`}>
                        <h4 className='text-3xl whitespace-nowrap font-bold'>발전 욕망</h4>
                        <div
                            className={`${ImgSizeWrap}`}
                            onMouseEnter={() => setGrowthGifSrc(growthHoverGif)}
                            onMouseLeave={() => setGrowthGifSrc('/home/about/computer-display-in-reveal.gif')}
                        >
                            <Image
                                src={growthGifSrc}
                                alt='photo.gif'
                                fill
                                size='100'
                                className='object-cover'
                                unoptimized
                                sizes='100vw'
                            />
                        </div>
                        <p className='text-16-1vw-20'>
                            어제의 나보다 더 효율적인 코드, 직관적인 코드, 재사용성 높은 코드 작성에 만족을 느끼며
                            사용자에게 높은 가치가 있는 웹사이트 구현으로 이어지기 위해 매일 노력합니다.
                        </p>
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default MyValues;

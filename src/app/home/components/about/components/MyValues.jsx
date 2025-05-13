'use client';

import Image from 'next/image';
import { useState } from 'react';

const cardWrap = 'w-full h-full rounded-2xl bg-white/90 pt-[8vh] px-[6vh] flex flex-col gap-5 text-left items-center';

const MyValues = () => {
    const [creativeGifSrc, setCreativeGifSrc] = useState('/home/about/photo-in-reveal.gif');
    const [planningGifSrc, setPlanningGifSrc] = useState('/home/about/demand-in-reveal.gif');
    const [growthGifSrc, setGrowthGifSrc] = useState('/home/about/computer-display-in-reveal.gif');

    const creativeHoverGif = '/home/about/photo-hover-pinch.gif';
    const planningHoverGif = '/home/about/demand-hover-click.gif';
    const growthHoverGif = '/home/about/computer-display-hover-angle.gif';
    return (
        <ul className='w-full max-w-[1400px] h-[70vh] mx-auto px-2 flex items-start justify-between text-black text-xl leading-normal font-poppins gap-8'>
            <li className='flex-1 h-[500px]'>
                <div className={`${cardWrap}`}>
                    <h4 className='text-3xl whitespace-nowrap'>창의적으로</h4>
                    <div
                        className='relative w-40 h-40 p-10'
                        onMouseEnter={() => setCreativeGifSrc(creativeHoverGif)}
                        onMouseLeave={() => setCreativeGifSrc('/home/about/photo-in-reveal.gif')}
                    >
                        <Image src={creativeGifSrc} alt='photo.gif' fill size='100' className='object-cover' />
                    </div>
                    <p className='text-16-1vw-20'>
                        사용자의 관심, 직관적인 메세지 전달, 편안한 사용자 경험이 담긴 웹사이트에 다가가기 위해 최신
                        기술 습득에 적극적으로 참여합니다.
                    </p>
                </div>
            </li>
            <li className='flex-1 h-[500px]'>
                <div className={`${cardWrap}`}>
                    <h4 className='text-3xl whitespace-nowrap'>계획적으로</h4>
                    <div
                        className='relative w-40 h-40 p-10'
                        onMouseEnter={() => setPlanningGifSrc(planningHoverGif)}
                        onMouseLeave={() => setPlanningGifSrc('/home/about/demand-in-reveal.gif')}
                    >
                        <Image src={planningGifSrc} alt='photo.gif' fill size='100' className='object-cover' />
                    </div>
                    <p className='text-16-1vw-20'>
                        목표가 주어지면 곧바로 요구사항 정리, 단계별 과제 설정, 우선순위 정하기 행동을 통해 명확한
                        로드맵을 수립하면서 흔들리지 않고 나아갑니다.
                    </p>
                </div>
            </li>
            <li className='flex-1 h-[500px]'>
                <div className={`${cardWrap}`}>
                    <h4 className='text-3xl whitespace-nowrap'>발전하고 싶은 욕망</h4>
                    <div
                        className='relative w-40 h-40 p-10'
                        onMouseEnter={() => setGrowthGifSrc(growthHoverGif)}
                        onMouseLeave={() => setGrowthGifSrc('/home/about/computer-display-in-reveal.gif')}
                    >
                        <Image src={growthGifSrc} alt='photo.gif' fill size='100' className='object-cover' />
                    </div>
                    <p className='text-16-1vw-20'>
                        어제의 나보다 더 효율적인 코드, 직관적인 코드, 재사용성 높은 코드 작성에 만족을 느끼며
                        사용자에게 높은 가치가 있는 웹사이트 구현으로 이어지기 위해 매일 노력합니다.
                    </p>
                </div>
            </li>
        </ul>
    );
};

export default MyValues;

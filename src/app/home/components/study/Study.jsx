import Velog from '@/app/ui/icon/Velog';
import Link from 'next/link';
import { useState } from 'react';

const bentoCard =
    'flex flex-col items-start p-8 relative bg-white text-[#060633] rounded-[2.5rem] min-h-[15rem] shadow-[0_20px_30px_-10px_rgba(16,16,39,0.07)] text-balance font-poppins';
const cloud = 'p-12 lg:row-start-1 lg:row-end-3 lg:col-start-1 lg:col-end-2';

const logo = 'bg-gradient-to-tl from-[#fffeff] to-[#d7fffe] lg:row-start-1 lg:row-end-2 lg:col-start-2 lg:col-end-4';
const inbox = 'bg-gradient-to-tl from-white to-[#dacceb]';
const device =
    'bg-[url("https://emilandersson.com/storage/blog-thumbnails/01JP9N86ZWBRV57ZVZBSA243R9.jpg")] bg-[100%] bg-no-repeat bg-center object-contain';
const bentoCardDes = 'flex flex-col gap-8 relative';
const bentoH2 = 'font-bold text-5xl leading-[0.9]';
const bentoH3 = 'font-semibold text-4xl';
const bentoP = 'font-medium text-lg';

const Study = () => {
    const [isHover, setIsHover] = useState(false);

    const handleMouseEnter = () => {
        setIsHover(true);
    };

    const handleMouseLeave = () => {
        setIsHover(false);
    };
    return (
        <section className='w-full max-w-[1024px]  mx-auto'>
            <h2 className='sr-only'>study</h2>
            <div className='container flex flex-col my-12 w-full max-w-[1200px] font-poppins'>
                <div className='grid-features grid grid-cols-1 lg:grid-cols-[4fr_3fr_3fr] grid-rows-1 gap-x-8 gap-y-8 auto-cols-fr'>
                    <div className={`${bentoCard} ${cloud}bento-card cloud`}>
                        <div className={`${bentoCardDes}`}>
                            <h2 className={`${bentoH2}`}>교육 이수 경험</h2>
                            <p className={`${bentoP}`}>
                                국비지원 프론트엔드 교육과정 6개월(24.09~25.03)을 이수하며 다양한 사이드 프로젝트를 통해
                                실무 경험을 쌓았습니다.
                                <br />
                                <br />
                                Figma 도구를 통해 유저흐름설계, 와이어프레임, 프로토타입, 사이트 구조도를
                                제작해보았습니다.
                                <br />
                                <br />
                                랜딩페이지, 쇼핑몰 상세페이지, OTT 웹사이트를 포함한 다양한 웹사이트 구현을 해볼 수
                                있었습니다.
                                <br />
                                <br />
                                동적 인터렉티브 UI 개발에 중점을 두면서 원활한 사용자 경험을 만드는 데 관심이 가지며
                                계속해서 공부해나가고 있습니다.
                            </p>
                        </div>
                    </div>
                    <div className={`${bentoCard} ${logo} bento-card logo`}>
                        <div className={`${bentoCardDes}`}>
                            <h2 className={`${bentoH2}`}>학습 방향</h2>
                            <p className={`${bentoP}`}>
                                오프라인 교육에서 실제 사람과의 대면을 통해 협업 프로젝트 경험을 해보며 개발 협업시
                                필요한 커뮤니케이션을 체득하고자 하였습니다.
                                <br />
                                <br />
                                또한, 끊임없이 배워야 하는 개발 지식은 공식 문서 기반의 다양한 글과 강의를 통해 기초
                                프로그래밍 언어 지식, 프레임워크 & 라이브러리의 적합한 활용 방법, 퍼블리싱 설계를 위한
                                UI/UX 지식, 웹접근성&웹표준성&SEO, 안정적인 비동기 통신&인증&베포에 대한 정보를
                                습득해보고 있습니다.
                            </p>
                        </div>
                    </div>
                    {/* lg미만 */}
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-8 lg:hidden'>
                        <div className={`${bentoCard} ${device}bento-card device`}>
                            <div className={`${bentoCardDes}`}></div>
                        </div>
                        <div className={`${bentoCard} ${inbox} bento-card inbox`}>
                            <div className={`${bentoCardDes}`}>
                                <div className='w-full flex justify-between items-start'>
                                    <h3 className={`${bentoH3}`}>블로그</h3>
                                    <Link
                                        href='https://velog.io/@peaceryun/posts'
                                        className='block w-12 h-12'
                                        onMouseEnter={handleMouseEnter}
                                        onMouseLeave={handleMouseLeave}
                                    >
                                        <Velog isHover={isHover} />
                                    </Link>
                                </div>
                                <p className={`${bentoP}`}>
                                    꾸준하게 습득한 지식을 정리하여 아카이브에 저장하고 있습니다.
                                </p>
                            </div>
                            <div className={`${bentoCardDes}`}></div>
                        </div>
                    </div>
                    {/* lg이상 */}
                    <div
                        className={`${bentoCard} ${device} bento-card device hidden lg:block lg:col-start-2 lg:col-end-3 lg:row-start-2 lg:row-end-3`}
                    >
                        <div className={`${bentoCardDes}`}></div>
                    </div>
                    <div
                        className={`${bentoCard} ${inbox} bento-card inbox hidden lg:block lg:col-start-3 lg:col-end-4 lg:row-start-2 lg:row-end-3`}
                    >
                        <div className={`${bentoCardDes}`}>
                            <div className='w-full flex justify-between items-start'>
                                <h3 className={`${bentoH3}`}>블로그</h3>
                                <Link
                                    href='https://velog.io/@peaceryun/posts'
                                    className='block w-12 h-12'
                                    onMouseEnter={handleMouseEnter}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    <Velog isHover={isHover} />
                                </Link>
                            </div>
                            <p className={`${bentoP}`}>꾸준하게 습득한 지식을 정리하여 아카이브에 저장하고 있습니다.</p>
                        </div>
                        <div className={`${bentoCardDes}`}></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Study;

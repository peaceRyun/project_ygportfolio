import Image from 'next/image';

const Skills = () => {
    return (
        <div className='w-full h-screen max-w-[1400px] mx-auto text-white'>
            <div className='flex flex-col gap-15'>
                <h3 className='text-8xl font-bold font-poppins uppercase  w-full text-center'>skills</h3>
                <ul className='flex flex-col gap-10'>
                    <li className='relative uppercase text-4xl w-full text-center'>
                        <h4 className='relative z-10 bg-[#333] inline px-10'>디자인 & 커뮤니케이션 툴</h4>
                        <div className='w-full absolute top-[20px] left-0'>
                            <hr></hr>
                        </div>
                        <ul className='flex items-center justify-center gap-5 mt-7'>
                            <li>
                                <div className='relative w-15 h-15'>
                                    <Image src='/ui/icons/Photoshop.svg' fill alt='포토샵' sizes='1' />
                                </div>
                            </li>
                            <li>
                                <div className='relative w-15 h-15'>
                                    <Image src='/ui/icons/Figma.svg' fill alt='피그마' sizes='1' />
                                </div>
                            </li>
                            <li>
                                <div className='relative w-15 h-15'>
                                    <Image src='/ui/icons/Github.svg' fill alt='깃허브' sizes='1' />
                                </div>
                            </li>
                        </ul>
                    </li>
                    <li className='relative uppercase text-4xl w-full text-center'>
                        <h4 className='relative z-10 bg-[#333] inline px-10'>코드 툴 : 효과적으로 구현하기 위해</h4>
                        <div className='w-full absolute top-[20px] left-0'>
                            <hr></hr>
                        </div>
                        <ul className='flex items-center justify-center gap-5 mt-7'>
                            <li>
                                <div className='relative w-15 h-15'>
                                    <Image src='/ui/icons/Html5.svg' fill alt='Html5' sizes='1' />
                                </div>
                            </li>
                            <li>
                                <div className='relative w-15 h-15'>
                                    <Image src='/ui/icons/Css3.svg' fill alt='Css3' sizes='1' />
                                </div>
                            </li>
                            <li>
                                <div className='relative w-15 h-15'>
                                    <Image src='/ui/icons/Javascript.svg' fill alt='JS' sizes='1' />
                                </div>
                            </li>
                            <li>
                                <div className='relative w-15 h-15'>
                                    <Image src='/ui/icons/React.svg' fill alt='리액트' sizes='1' />
                                </div>
                            </li>
                            <li>
                                <div className='relative w-15 h-15'>
                                    <Image src='/ui/icons/nextdotjs.svg' fill alt='넥스트' sizes='1' />
                                </div>
                            </li>
                            <li>
                                <div className='relative w-15 h-15'>
                                    <Image src='/ui/icons/gsap.svg' fill alt='GSAP' sizes='1' />
                                </div>
                            </li>
                        </ul>
                    </li>
                    <li className='relative uppercase text-4xl w-full text-center'>
                        <h4 className='relative z-10 bg-[#333] inline px-10'>코드 툴 : 효율적으로 구현하기 위해</h4>
                        <div className='w-full absolute top-[20px] left-0'>
                            <hr></hr>
                        </div>
                        <ul className='flex items-center justify-center gap-5 mt-7'>
                            <li>
                                <div className='relative w-30 h-30'>
                                    <Image src='/ui/icons/styled-components.svg' fill alt='스타일컴포넌트' sizes='1' />
                                </div>
                            </li>
                            <li>
                                <div className='relative w-30 h-30'>
                                    <Image src='/ui/icons/tailwind.svg' fill alt='테일윈드' sizes='1' />
                                </div>
                            </li>
                            <li>
                                <div className='relative w-15 h-15'>
                                    <Image src='/ui/icons/chakraui.svg' fill alt='차크라ui' sizes='1' />
                                </div>
                            </li>
                            <li>
                                <div className='relative w-15 h-15'>
                                    <Image src='/ui/icons/sass.svg' fill alt='scss' sizes='1' />
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

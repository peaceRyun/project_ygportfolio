import Link from 'next/link';
import Image from 'next/image';
import Phone from '@/app/ui/icon/Phone';
import Mail from '@/app/ui/icon/Mail';

const Footer = () => {
    return (
        <footer>
            <div
                id='contact'
                className='relative w-full h-screen overflow-hidden flex flex-col items-center justify-center gap-15'
            >
                <div className='relative flex flex-col gap-10 items-center w-[800px] p-6 text-center '>
                    <p className='font-poppins text-5xl font-bold'>감사합니다.</p>
                    <p className='font-pretendard text-center'>
                        요구사항을 정확히 구현하기 위해 낯선 기술에도 적극적으로 도전하며 연구하고, <br />
                        사용자의 관점에서 우선적으로 생각하고 소통하여, <br />
                        결과적으로 가치있는 서비스에 일조 하고자 하는 신념하에 열심히 개발하겠습니다.
                    </p>
                </div>
                <div className='flex justify-between w-72'>
                    <Link
                        href='https://github.com/peaceRyun'
                        className='relative block w-12 h-12 transition duration-500 ease-in-out hover:scale-150'
                    >
                        <Image src='/ui/icons/github.svg' alt='kyg 깃허브' fill></Image>
                    </Link>
                    <a
                        href='mailto:xp7373@naver.com'
                        className='relative block transition duration-500 ease-in-out hover:scale-150'
                    >
                        <Mail />
                    </a>
                    <a
                        href='tel:010-2575-2721'
                        className='relative block transition duration-500 ease-in-out hover:scale-150'
                    >
                        <Phone />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

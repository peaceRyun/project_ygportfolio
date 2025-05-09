import ThreeInteraction from './components/ThreeInteraction';

const Footer = () => {
    return (
        <footer>
            <div id='contact' className='relative w-full h-screen  overflow-hidden '>
                <div className='absolute top-0 left-0 font-poppins text-9xl pt-12 px-12 bg-primary w-full'>
                    <p className='font-bold whitespace-nowrap uppercase'>get in touch</p>
                </div>

                <ThreeInteraction />
                <div className='absolute bottom-0 left-0 bg-primary w-full p-12'>
                    <div className='w-2/3 flex flex-col gap-5 font-pretendard text-4xl'>
                        <div className='w-full flex items-center justify-between'>
                            <p className='font-bold'>tel</p>
                            <p className='whitespace-nowrap'>010-2575-2721</p>
                        </div>
                        <div className='w-full flex items-center justify-between'>
                            <p className=' font-bold'>email</p>
                            <p className=' whitespace-nowrap'>xp7373@naver.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

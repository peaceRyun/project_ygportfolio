import ThreeInteraction from './components/ThreeInteraction';

const Footer = () => {
    return (
        <footer>
            <div id='contact' className='relative w-full h-screen '>
                <div className='absolute top-0 left-0 w-full h-full py-70 px-20'>
                    <div className='font-poppins font-bold text-9xl uppercase'>get in touch</div>
                    <div>xp7373@naver.com</div>
                    <div>dbsrn1110@gmail.com</div>
                </div>

                <ThreeInteraction />
            </div>
        </footer>
    );
};

export default Footer;

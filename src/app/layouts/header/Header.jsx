const Header = () => {
    return (
        <header className='w-full fixed z-50 flex items-center justify-center'>
            <div className='header-inner relative top-9 w-full h-16 max-w-[1400px] flex items-center overflow-hidden rounded-4xl'>
                <h1 className='sr-only'>로고</h1>
                <div className='header-bg absolute z-10 inset-0 bg-gray-400'></div>
                <div className='nav-inner relative w-full flex items-center justify-between z-20'>
                    <span className='font-poppins font-black text-lg ml-[3.125rem]'>YG's Portfolio</span>
                    <div className='flex items-center gap-6'>
                        <span className='py-4 px-5'>Projects</span>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;

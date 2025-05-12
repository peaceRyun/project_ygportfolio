const MyValues = () => {
    return (
        <ul className='w-full max-w-[1400px] h-screen mx-auto px-2 flex items-center justify-between text-black text-xl leading-normal font-poppins gap-8'>
            <li className='flex-1'>
                <div className='rounded-2xl bg-white/70 py-[70px] px-[60px]'>
                    <h4>창의적으로</h4>
                </div>
            </li>
            <li className='flex-1'>
                <div className='rounded-2xl bg-white/70 py-[70px] px-[60px]'>계획에 따라서</div>
            </li>
            <li className='flex-1'>
                <div className='rounded-2xl bg-white/70 py-[70px] px-[60px]'>적합한 해결책</div>
            </li>
        </ul>
    );
};

export default MyValues;

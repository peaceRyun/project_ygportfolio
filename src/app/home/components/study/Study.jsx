const Study = () => {
    const bentoCard =
        'flex flex-col items-start p-8 relative bg-white text-[#060633] rounded-[2.5rem] min-h-[15rem] shadow-[0_20px_30px_-10px_rgba(16,16,39,0.07)] text-balance';
    const cloud = 'row-start-1 row-end-3 col-start-1 col-end-2 p-12';
    const logo = 'row-start-1 row-end-2 col-start-2 col-end-4 bg-gradient-to-tl from-[#fffeff] to-[#d7fffe]';
    const inbox = 'bg-gradient-to-tl from-white to-[#dacceb]';
    const device =
        'bg-[url("https://emilandersson.com/storage/blog-thumbnails/01JP9N86ZWBRV57ZVZBSA243R9.jpg")] bg-[100%] bg-no-repeat bg-center object-contain';
    const bentoCardDes = 'flex flex-col gap-[1rem]';
    const bentoH2 = 'font-bold text-[3.8rem] leading-[0.9]';
    const bentoH3 = 'font-semibold text-[2.6rem]';
    const bentoP = 'font-medium text-1.2rem]';
    return (
        <section className='w-full max-w-[1024px]  mx-auto'>
            <h2 className='sr-only'>study</h2>
            <div className='container flex flex-col my-12 w-full max-w-[1200px] font-poppins'>
                <div className='grid-features grid grid-cols-[4fr_3fr_3fr] grid-rows-1 gap-x-8 gap-y-8 auto-cols-fr'>
                    <div className={`${bentoCard} ${cloud}bento-card cloud`}>
                        <div className={`${bentoCardDes}`}>
                            <h2 className={`${bentoH2}`}>Cloud Solutions</h2>
                            <p className={`${bentoP}`}>
                                Use a pre-designed template or personalize with video, stickers, fonts, and more
                            </p>
                        </div>
                    </div>
                    <div className={`${bentoCard} ${logo} bento-card logo`}>
                        <div className={`${bentoCardDes}`}>
                            <h2 className={`${bentoH2}`}>Impact The Environment</h2>
                            <p className={`${bentoP}`}>
                                We built smart solutions for you and the children of tomorrow. All your data will be
                                stored on smart storage
                            </p>
                        </div>
                        <div className='bento-card-details logo'></div>
                    </div>
                    <div className={`${bentoCard} ${device}bento-card device`}>
                        <div className={`${bentoCardDes}`}></div>
                    </div>
                    <div className={`${bentoCard} ${inbox} bento-card inbox`}>
                        <div className={`${bentoCardDes}`}>
                            <h3 className={`${bentoH3}`}>Inbox</h3>
                            <p className={`${bentoP}`}>Track your gifts, group chats, and sent cards</p>
                        </div>
                        <div className={`${bentoCardDes}`}></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Study;

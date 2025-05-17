const ToolTip = () => {
    return (
        <>
            <span className='w-[15px] flex flex-col items-center group relative font-pretendard '>
                <span className='text-8-2vh-20 text-primary-light group-hover:invisible whitespace-nowrap'>
                    hover <br />
                    on me!
                </span>
                <span className='bounceball mx-5'></span>
                <div className='invisible group-hover:visible absolute top-[-120px] right-[-400px] bg-secondary whitespace-nowrap p-3 text-primary-dark rounded-xl text-left max-lg:right-[-20px]'>
                    안녕하세요 <br />
                    웹퍼블리셔&프론트엔드 신입 지원자 권윤구입니다.
                    <br />
                    저의 현재 "성과" 인 프로젝트를 보여드리고,
                    <br />더 나은 성과를 위한 저의 "학습" 방향을 소개해드립니다.
                </div>
            </span>
        </>
    );
};

export default ToolTip;

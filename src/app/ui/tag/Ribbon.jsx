const ribbonWrapStyle = 'w-[200px] h-[200px] overflow-hidden absolute top-[-3px] left-[-3px]';

const ribbonStyle = 'font-bold font-pretendard text-xl text-center relative py-2 top-[30px] left-[-70px] w-[250px]';

const Ribbon = ({ children, ribbonType }) => {
    return (
        <div className={`${ribbonWrapStyle}`}>
            <div
                className={`webkit-transform-45 ${ribbonStyle} ${ribbonType === '개인' ? 'bg-teal-500' : 'bg-blue-500 '} text-white`}
            >
                {children}
            </div>
        </div>
    );
};

export default Ribbon;

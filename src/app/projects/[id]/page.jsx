'use client';

import { portfoliodata } from '@/app/api/data';
import { useParams } from 'next/navigation';

const ProjectPage = () => {
    const params = useParams();
    const paramsId = parseInt(params.id);

    const projectData = portfoliodata.find((item) => item.id === paramsId);

    const { id, src, alt, title } = projectData;

    if (!projectData) {
        return <div>프로젝트 데이터를 불러오지 못했습니다.</div>;
    }

    return (
        <>
            <div className='relative w-full h-[587px] overflow-hidden max-lg:h-[510px]'>
                <div className='absolute top-1/2 left-0 -translate-y-1/2 mx-auto flex flex-col justify-center z-20 w-full max-w-[1400px] px-8 max-lg:max-w-auto max-sm:max-w-auto max-sm:px-5'>
                    <h2 className='text-white text-6xl font-bold'>{title}</h2>
                </div>
                <img src={src} alt={alt} className='absolute top-0 left-0 z-0 blur-sm' />
                <div className='absolute inset-0 w-full h-full z-10 bg-[rgba(0, 0, 0, 0.6)]'></div>
                <div className='waveAni absolute bottom-[-76px] left-0 w-[5000px] h-[247px] z-30 object-contain max-lg:bottom-0 max-lg:h-[160px]'></div>
            </div>
            <div className='w-full max-w-[1400px] mx-auto relative z-10 max-lg:px-8 max-sm:px-5'>
                <div className='contents-wrap flex justify-between items-stretch'>
                    <div className='info-area flex-1'>
                        <div className='sticky top-0 left-0 w-full'>
                            <div className='flex items-center w-full'>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium aliquam sapiente
                                mollitia corrupti, cum iste enim, eligendi, dolor optio nam aspernatur itaque nostrum?
                                Placeat harum laboriosam veritatis consectetur totam! Adipisci!
                            </div>
                        </div>
                    </div>
                    <div className='img-area flex-1'>
                        <div className='h-[2000px]'>dd</div>
                        <div className='h-[2000px]'>dd</div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProjectPage;

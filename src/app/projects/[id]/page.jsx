"use client";

import { portfoliodata } from "@/app/api/data";
import TechStackIcon from "@/app/ui/icon/TechStackIcon";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { RxArrowTopRight } from "react-icons/rx";

const ProjectPage = () => {
  const params = useParams();
  const paramsId = parseInt(params.id);

  const projectData = portfoliodata.find((item) => item.id === paramsId);

  const {
    id,
    src,
    alt,
    title,
    titledetail,
    deploy,
    code,
    desc,
    techStack,
    period_start,
    period_end,
    keyFeatures,
    troubleShooting,
    requests,
    process,
  } = projectData;

  if (!projectData) {
    return <div>프로젝트 데이터를 불러오지 못했습니다.</div>;
  }

  return (
    <>
      <section className="relative w-full h-[587px] overflow-hidden max-lg:h-[510px]">
        <h2 className="sr-only">{title}</h2>
        <div className="absolute top-1/2 left-1/2 -translate-1/2 flex flex-col justify-center z-20 w-full mx-auto max-w-[1400px] px-12 max-lg:max-w-auto max-lg:px-8 max-sm:max-w-auto max-sm:px-5">
          <h3 className="text-white text-6xl font-bold">{title}</h3>
        </div>
        <Image
          src={src}
          alt={alt}
          className="absolute top-0 left-0 z-0 blur-sm"
          fill
        />
        <div className="absolute inset-0 w-full h-full z-10 bg-black opacity-60"></div>
        <div className="waveAni absolute bottom-[-76px] left-0 w-[5000px] h-[247px] z-30 object-contain max-lg:bottom-0 max-lg:h-[160px]"></div>
      </section>
      <main className="w-full max-w-[1400px] mx-auto relative z-10 pt-[7.5rem] px-12 max-lg:px-8 max-sm:px-5">
        <div className="contents-wrap flex gap-24 justify-between items-stretch max-lg:flex-col max-lg:gap-20">
          <div className="info-area flex-1">
            <div className="sticky top-[160px] left-0 w-full max-lg:relative max-lg:top-0">
              <div className="flex flex-col items-start w-full gap-10">
                <h4 className="text-4xl font-semibold whitespace-pre-wrap">
                  {titledetail}
                </h4>
                <div className="flex flex-col gap-4">
                  <p className="font-medium">Overview</p>
                  <p>{desc}</p>
                </div>
                <div className="flex flex-col w-full">
                  <Link
                    href={deploy}
                    className="p-2 border-b-1 relative flex items-center justify-between gap-2.5 overflow-hidden w-full h-full link1"
                    data-project-link="true"
                  >
                    Go Website
                    <RxArrowTopRight size={20} />
                  </Link>
                  <Link
                    href={code}
                    className="p-2 border-b-1 relative flex items-center justify-between gap-2.5 overflow-hidden w-full h-full link1"
                    data-project-link="true"
                  >
                    Go Github
                    <RxArrowTopRight size={20} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="detail-area flex-1">
            <div className="h-[4000px] flex flex-col gap-8">
              <section>
                <h5 className="font-bold text-2xl mb-4">Period</h5>
                <p>
                  <span>{period_start}</span> ~ <span>{period_end}</span>
                </p>
              </section>
              <section>
                <h5 className="font-bold text-2xl mb-4">Tech Stack</h5>
                <ul className="flex gap-6">
                  {techStack.map((name, index) => (
                    <li key={index} className="inline">
                      <TechStackIcon name={name} />
                    </li>
                  ))}
                  <li></li>
                </ul>
              </section>
              {requests ? (
                <section>
                  <h5 className="font-bold text-2xl mb-4">Request(Self)</h5>
                  <ul>
                    {requests.map((item, index) => (
                      <li key={index} className="inline mr-4">
                        {item}
                      </li>
                    ))}
                  </ul>
                </section>
              ) : null}
              {process ? (
                <section>
                  <h5 className="font-bold text-2xl mb-4">Process</h5>
                  <ul>
                    {process.map((item) => (
                      <li key={item.title} className="inline mr-4">
                        <p className="mb-3 text-xl">{item.title}</p>
                        <div className="flex flex-col gap-1">
                          <p className="whitespace-pre-wrap">{item.desc}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </section>
              ) : null}
              <section>
                <h5 className="font-bold text-2xl mb-4">Key Features</h5>
                <ul>
                  {keyFeatures.map((item) => (
                    <li key={item.title} className="inline mr-4">
                      <div className="relative rounded-3xl w-full h-[400px] overflow-hidden my-8">
                        <video
                          autoPlay
                          loop
                          muted
                          playsInline
                          src={item.video}
                          alt={item.title}
                          className="w-full h-full"
                        />
                      </div>
                      <p className="mb-3 text-xl">{item.title}</p>
                      <div className="flex flex-col gap-1">
                        <p>{item.desc1}</p>
                        <p>{item.desc2}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </section>
              <section>
                <h5 className="font-bold text-2xl mb-4">Trouble Shooting</h5>
                <ul>
                  {troubleShooting.map((item) => (
                    <li key={item.title} className="inline mr-4">
                      <p className="mb-3 text-xl">{item.title}</p>
                      <div className="flex flex-col gap-2">
                        <div className="flex flex-col gap-1">
                          <p>문제정의</p>
                          <p>{item.problem}</p>
                        </div>
                        <div className="flex flex-col gap-1">
                          <p>해결과정</p>
                          <p>{item.solution}</p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </section>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default ProjectPage;

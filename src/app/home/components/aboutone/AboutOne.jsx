"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AboutOne = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    if (!sectionRef.current) {
      return;
    }

    const createdTriggers = [];

    const items = gsap.utils.toArray(".item", sectionRef.current);

    const pinTrigger = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top top",
      pin: true,
    });
    createdTriggers.push(pinTrigger);

    items.forEach((item) => {
      const color = item.getAttribute("data-bgcolor");

      const colorTrigger = ScrollTrigger.create({
        trigger: item,
        start: "top 50%",
        end: "bottom 50%",

        onEnter: () =>
          gsap.to(".item", {
            backgroundColor: color,
            duration: 1.4,
          }),
        onEnterBack: () =>
          gsap.to(".item", {
            backgroundColor: color,
            duration: 1.4,
          }),
        onLeave: () => {
          gsap.to(".item", { backgroundColor: "#fff", duration: 1.4 });
        },
        onLeaveBack: () => {
          gsap.to(".item", { backgroundColor: "#fff", duration: 1.4 });
        },
      });
      createdTriggers.push(colorTrigger);
    });

    return () => {
      createdTriggers.forEach((trigger) => trigger.kill());
    };
  }, [sectionRef.current]);

  return (
    <section id="about" ref={sectionRef} className="relative w-full h-[1000vh]">
      <div
        className="item w-full h-[1000vh] text-3xl text-white"
        data-bgcolor="#000"
      >
        <div className="w-full h-[100vh]"></div>
        <div className=" w-full h-[500vh]">
          <div className="relative p-20 flex items-center justify-between">
            <span>object1</span>
            <span>object2</span>
            <span>object3</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutOne;

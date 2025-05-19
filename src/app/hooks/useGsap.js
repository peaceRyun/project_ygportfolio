'use client';

import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { usePathname } from 'next/navigation';

gsap.registerPlugin(ScrollTrigger);

// home page

/**
 * About 섹션 효과
 */
export const useAboutScrollEffect = (sectionRef) => {
    useEffect(() => {
        if (!sectionRef?.current) return;

        const triggers = [];
        const items = gsap.utils.toArray('.item', sectionRef.current);

        const pinTrigger = ScrollTrigger.create({
            trigger: sectionRef.current,
            start: 'top top',
            // pin: true,
        });
        triggers.push(pinTrigger);

        items.forEach((item) => {
            const color = item.getAttribute('data-bgcolor');
            const trigger = ScrollTrigger.create({
                trigger: item,
                start: 'top 0%',
                end: 'bottom 300%',
                onEnter: () => gsap.to('.item', { backgroundColor: color, duration: 1.4 }),
                onEnterBack: () => gsap.to('.item', { backgroundColor: color, duration: 1.4 }),
                onLeave: () => gsap.to('.item', { backgroundColor: '#fff', duration: 1.4 }),
                onLeaveBack: () => gsap.to('.item', { backgroundColor: '#fff', duration: 1.4 }),
            });
            triggers.push(trigger);
        });

        return () => triggers.forEach((t) => t.kill());
    }, [sectionRef]);
};

/**
 * Skills 컴포넌트 - HR 라인 애니메이션
 */
export const useSkillsHrEffect = () => {
    const pathname = usePathname();

    useEffect(() => {
        // 기존 트리거 제거
        const triggers = [];

        const hrWrappers = gsap.utils.toArray('.hr-wrapper');

        hrWrappers.forEach((wrapper) => {
            // ✅ 1. 초기 상태로 강제 리셋
            gsap.set(wrapper, { width: '100%' });

            // ✅ 2. 새 트리거 생성
            const anim = gsap.from(wrapper, {
                width: '0%',
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: wrapper,
                    start: 'top 75%',
                    once: true,
                },
            });

            triggers.push(anim.scrollTrigger);
        });

        return () => {
            triggers.forEach((t) => {
                if (t && typeof t.kill === 'function') {
                    t.kill();
                }
            });
        };
    }, [pathname]);
};

/**
 * PerformanceB 섹션 효과
 */
export const usePerformanceScrollEffect = (pinWrapRef, textObjectRef) => {
    useEffect(() => {
        const pinWrap = pinWrapRef?.current;
        const textObject = textObjectRef?.current;

        if (pinWrap && textObject) {
            const bgAnim = gsap.to(textObject, {
                backgroundSize: '100% 100%',
                scrollTrigger: {
                    trigger: pinWrap,
                    start: 'top top',
                    end: '+=500px',
                    pin: true,
                    scrub: 1,
                },
            });

            const highlightAnim = gsap.to(textObject.querySelectorAll('.highlight'), {
                backgroundSize: '100% 100%',
                scrollTrigger: {
                    trigger: pinWrap,
                    start: 'top top',
                    end: '+=500px',
                    scrub: 1,
                },
            });

            return () => {
                bgAnim.scrollTrigger?.kill();
                highlightAnim.scrollTrigger?.kill();
            };
        }

        return () => ScrollTrigger.killAll();
    }, [pinWrapRef, textObjectRef]);
};

/**
 * ProjectList 섹션 효과
 */
export const useProjectListScrollEffect = (swiperRef, sectionRef, totalSlides) => {
    useEffect(() => {
        if (!swiperRef.current || !sectionRef.current) return;

        const transitionDuration = 0.3;

        const scrollTrigger = ScrollTrigger.create({
            trigger: sectionRef.current,
            pin: true,
            start: 'top top',
            end: `+=${(totalSlides - 1) * 100}%`,
            snap: {
                snapTo: 1 / (totalSlides - 1),
                duration: { min: 0.6, max: 0.8 },
                ease: 'power2.inOut',
            },
            onUpdate: (self) => {
                const newIndex = Math.round(self.progress * (totalSlides - 1));
                if (swiperRef.current?.activeIndex !== newIndex) {
                    swiperRef.current?.slideTo(newIndex, transitionDuration * 1000, 'linear');
                }
            },
        });

        return () => {
            scrollTrigger.kill();
            swiperRef.current?.off('slideChange');
        };
    }, [swiperRef, sectionRef, totalSlides]);
};

/**
 * SecOpening 텍스트 확대 축소 효과
 */
export const useSecOpeningScrollEffect = (titleRef) => {
    useEffect(() => {
        if (!titleRef?.current) return;

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: titleRef.current,
                start: 'top top',
                end: 'bottom top',
                scrub: true,
            },
        });

        tl.fromTo(titleRef.current, { scale: 3 }, { scale: 1, ease: 'none' });

        document.body.classList.add('no-horizontal-scroll');

        return () => {
            document.body.classList.remove('no-horizontal-scroll');
            if (tl) {
                tl.kill();
            }
        };
    }, [titleRef]);
};

// project page

/**
 * Typing Animation
 */
export const useKeyFeatureTypingEffect = (keyFeatures = []) => {
    const pathname = usePathname();

    useEffect(() => {
        const triggers = [];

        function createTypingAnimation(element, message) {
            element.textContent = '';
            element.removeAttribute('data-animated');
            element.dataset.animated = 'true';

            const timeline = gsap.timeline({
                scrollTrigger: {
                    trigger: element,
                    start: 'top 70%',
                    once: true,
                },
            });

            message.split('').forEach((char, index) => {
                timeline.add(() => {
                    element.textContent += char;
                }, index * 0.05);
            });

            timeline.to(element, {
                borderRight: '0.5rem solid transparent',
                repeat: -1,
                yoyo: true,
                duration: 0.8,
            });

            triggers.push(timeline.scrollTrigger);
        }

        keyFeatures.forEach((item, index) => {
            const element = document.getElementById(`dynamic-heading-${index}`);
            if (element) {
                createTypingAnimation(element, item.title);
            }
        });

        return () => {
            triggers.forEach((t) => t.kill());
        };
    }, [pathname, keyFeatures]);
};

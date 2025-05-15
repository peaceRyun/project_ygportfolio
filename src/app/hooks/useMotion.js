import { useScroll, useTransform } from 'framer-motion';

/**
 * Intro 섹션 효과 (Framer Motion)
 */
export const useIntroTransform = (ref) => {
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['0', '1'],
    });

    const translateY = useTransform(scrollYProgress, [0, 1], [0, 1000]);

    return translateY;
};

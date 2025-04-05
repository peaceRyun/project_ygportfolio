import React, { useEffect, useRef } from 'react';
import * as S from './style';

const products = [
    {
        title: 'Blueprint',
        description:
            "Empowers early-stage B2B SaaS founders to understand what it takes to raise capital in today's market. We'll analyze your metrics and provide an objective assessment of how you compare to peers — through the lens of a VC.",
        image: '/images/d-letter.png',
    },
    {
        title: 'Benchmarks',
        description:
            'Drill down into our private database of early stage B2B SaaS metrics to see what Go-To-Market, Operations and Capital numbers look like for high quality venture backed businesses.',
        image: '/images/d-letter.png',
    },
    {
        title: 'Fragments',
        description:
            "Access best-in-class templates for your B2B SaaS data room — pitch decks to term sheets, board packs, and more, we've crafted everything you need. Plus, we share best practices to help you execute with confidence.",
        image: '/images/d-letter.png',
    },
];

const ProductSlider = () => {
    const [activeIndex, setActiveIndex] = React.useState(0);
    const [progress, setProgress] = React.useState(0);
    const wrapperRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (!wrapperRef.current) return;

            const rect = wrapperRef.current.getBoundingClientRect();
            const scrollProgress = (window.innerHeight - rect.top) / (rect.height - window.innerHeight);
            const clampedProgress = Math.max(0, Math.min(1, scrollProgress));

            setProgress(clampedProgress * 100);
            setActiveIndex(Math.floor(clampedProgress * 3));
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <S.SliderWrapper ref={wrapperRef}>
            {products.map((product, index) => (
                <S.SliderContent key={product.title} $isActive={index === activeIndex} $index={index}>
                    <S.ContentInner>
                        <S.HeadingWrapper>
                            <S.Heading>
                                <S.Word>
                                    {product.title.split('').map((char, i) => (
                                        <S.Char key={i} $visible={index === activeIndex}>
                                            {char}
                                        </S.Char>
                                    ))}
                                </S.Word>
                            </S.Heading>
                        </S.HeadingWrapper>
                        <S.ContentWrapper>
                            <S.Description>{product.description}</S.Description>
                            <S.ButtonWrapper>
                                <S.Button>Launch</S.Button>
                            </S.ButtonWrapper>
                        </S.ContentWrapper>
                        <S.ImageWrapper>
                            <S.StyledImage
                                src={product.image}
                                alt={product.title}
                                width={800}
                                height={800}
                                priority={index === 0}
                            />
                        </S.ImageWrapper>
                    </S.ContentInner>
                </S.SliderContent>
            ))}
            <S.ProgressWrapper>
                <S.CounterList>
                    {[1, 2, 3].map((num, index) => (
                        <S.CounterItem key={num} $active={index === activeIndex}>
                            {num.toString().padStart(2, '0')}
                        </S.CounterItem>
                    ))}
                </S.CounterList>
                <S.ProgressLine>
                    <S.ProgressBar $progress={progress} />
                </S.ProgressLine>
            </S.ProgressWrapper>
        </S.SliderWrapper>
    );
};

export default ProductSlider;

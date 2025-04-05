import React from 'react';
import styled from 'styled-components';

const ContentWrapper = styled.div`
    height: 100vh;
    display: flex;
    align-items: center;
`;

const ContentInner = styled.div`
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    gap: 2rem;

    @media (max-width: 1024px) {
        grid-template-columns: 1fr;
    }
`;

const Heading = styled.h1`
    font-size: 80px;
    color: var(--black);
    grid-column: 1 / 5;

    @media (max-width: 1024px) {
        grid-column: 1 / -1;
    }
`;

const Word = styled.div`
    display: inline-block;
`;

const Char = styled.div`
    display: inline-block;
    opacity: 1;
    will-change: opacity;
`;

const Description = styled.p`
    color: var(--black-60);
    font-size: 18px;
    will-change: background-image;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    display: flex;
    gap: 1.6rem;
    flex-direction: column;
    transition-property: background-image;
    transition-timing-function: var(--easeOutQuart);

    &.wave-effect {
        background-image: radial-gradient(at 150% 150%, transparent calc(-3 * 100%), var(--color) 100%);
    }
`;

const ButtonWrapper = styled.div`
    margin-top: 2rem;
`;

const Button = styled.button`
    position: relative;
    padding: 1rem 2rem;
    background: transparent;
    border: none;
    cursor: pointer;

    &:after,
    &:before {
        content: '';
        width: calc(100% + 1px);
        height: 1px;
        position: absolute;
        transition: transform 0.15s var(--easeOutQuart);
        background: var(--deep-blue);
        transform: scaleX(0);
    }

    &:hover div:before {
        transition-delay: 0.4s;
        transform: scaleY(0.99999);
        transform-origin: 0 100%;
    }
`;

const MarketingSection = () => {
    return (
        <ContentWrapper>
            <ContentInner>
                <Heading>
                    <Word>
                        <Char>B</Char>
                        <Char>l</Char>
                        <Char>u</Char>
                        <Char>e</Char>
                        <Char>p</Char>
                        <Char>r</Char>
                        <Char>i</Char>
                        <Char>n</Char>
                        <Char>t</Char>
                    </Word>
                </Heading>
                <div style={{ gridColumn: '10 / 13' }}>
                    <Description className='wave-effect'>
                        Empowers early-stage B2B SaaS founders to understand what it takes to raise capital in
                        today&apos;s market. We&apos;ll analyze your metrics and provide an objective assessment of how
                        you compare to peers — through the lens of a VC.
                    </Description>
                    <ButtonWrapper>
                        <Button>Learn More</Button>
                    </ButtonWrapper>
                </div>
            </ContentInner>
        </ContentWrapper>
    );
};

export default MarketingSection;

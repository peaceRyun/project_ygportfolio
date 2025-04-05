import styled from 'styled-components';
import Image from 'next/image';

export const SliderWrapper = styled.div`
    height: 290vh;
    position: relative;
`;

export const SliderContent = styled.div`
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    pointer-events: ${(props) => (props.$isActive ? 'auto' : 'none')};
    visibility: ${(props) => (props.$isActive ? 'visible' : 'hidden')};
    background-color: var(--blueprint-bg);
    color: var(--blueprint-text);
`;

export const ContentInner = styled.div`
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    gap: 2rem;
    width: 100%;
    height: 100%;
    max-width: 1440px;
    margin: 0 auto;
    padding: 4rem;
    position: relative;
    align-items: center;
`;

export const HeadingWrapper = styled.div`
    grid-column: 2 / 7;
    position: relative;
    z-index: 1;
`;

export const Heading = styled.h1`
    font-size: 120px;
    font-weight: 500;
    line-height: 1;
    color: inherit;
    margin: 0;
`;

export const Word = styled.div`
    display: inline-block;
`;

export const Char = styled.div`
    display: inline-block;
    opacity: ${(props) => (props.$visible ? 1 : 0)};
    transition: opacity 0.3s var(--easeOutQuart);
`;

export const Description = styled.p`
    font-size: 20px;
    line-height: 1.6;
    opacity: 0.8;
    max-width: 460px;
`;

export const ContentWrapper = styled.div`
    grid-column: 2 / 7;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    position: relative;
    z-index: 1;
    margin-top: 2rem;
`;

export const ButtonWrapper = styled.div`
    margin-top: 2rem;
`;

export const Button = styled.button`
    position: relative;
    padding: 1rem 0;
    background: transparent;
    border: none;
    cursor: pointer;
    color: inherit;
    font-size: 18px;

    &:after {
        content: '';
        width: 100%;
        height: 1px;
        position: absolute;
        bottom: 0;
        left: 0;
        background: currentColor;
        transform: scaleX(1);
        transform-origin: left;
        transition: transform 0.3s var(--easeOutQuart);
    }

    &:hover:after {
        transform: scaleX(0);
        transform-origin: right;
    }
`;

export const ImageWrapper = styled.div`
    grid-column: 7 / -1;
    position: relative;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const StyledImage = styled(Image)`
    width: 100%;
    height: auto;
    max-height: 80vh;
    object-fit: contain;
    filter: drop-shadow(0 20px 40px rgba(0, 0, 0, 0.1));
`;

export const ProgressWrapper = styled.div`
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, calc(-50% + 240px));
    display: flex;
    align-items: center;
    gap: 2rem;
    z-index: 10;
    color: var(--black);
`;

export const CounterList = styled.div`
    position: relative;
    overflow: hidden;
    width: 3rem;
    height: 1.5rem;
    text-align: center;
`;

export const CounterItem = styled.div`
    position: absolute;
    top: ${(props) => (props.$active ? '0' : '100%')};
    left: 50%;
    transform: translateX(-50%);
    transition: top 0.6s var(--easeOutQuart);
    font-variant-numeric: tabular-nums;
    font-size: 14px;
    font-weight: 500;
`;

export const ProgressLine = styled.div`
    width: 120px;
    height: 1px;
    position: relative;
    background-color: var(--divider-line);
`;

export const ProgressBar = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: ${(props) => props.$progress}%;
    height: 100%;
    background-color: var(--black);
    transition: width 0.3s var(--easeOutQuart);
`;

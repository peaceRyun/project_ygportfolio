import React from 'react';
import styled from 'styled-components';

const SliderWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
`;

const SliderContent = styled.div`
    position: relative;
    overflow: hidden;
`;

const Slide = styled.div`
    transition: opacity 0.3s var(--easeOutQuart);
    opacity: 0.6;

    &.active {
        opacity: 1;
    }
`;

const SlideList = styled.div`
    transition: transform 0.6s var(--easeOutQuart);
`;

const ProductShadow = styled.div`
    &:before {
        content: ' ';
        background-color: #0000000d;
        width: 100%;
        height: 100%;
        position: absolute;
        top: 6px;
        left: -8px;
        z-index: -1;
    }
`;

const CounterWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
    overflow: hidden;
`;

const CounterList = styled.div`
    position: relative;
    overflow: hidden;
    width: 3rem;
`;

const CounterItem = styled.div`
    position: absolute;
    top: 0;
    left: 0;
`;

const CounterLine = styled.div`
    height: 1px;
    width: 100%;
    position: relative;
`;

const CounterLineInner = styled.div`
    background-color: var(--divider-line);
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: 1;
`;

const CounterLineProgress = styled.div`
    position: absolute;
    background-color: var(--black);
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
    transform: scaleX(0);
`;

const ProductSlider = () => {
    return (
        <SliderWrapper>
            <SliderContent>
                <SlideList>
                    <Slide className='active'>
                        <ProductShadow>{/* 슬라이드 내용 */}</ProductShadow>
                    </Slide>
                </SlideList>
            </SliderContent>
            <CounterWrapper>
                <CounterList>
                    <CounterItem>1</CounterItem>
                </CounterList>
                <CounterLine>
                    <CounterLineInner />
                    <CounterLineProgress />
                </CounterLine>
            </CounterWrapper>
        </SliderWrapper>
    );
};

export default ProductSlider;

import React from 'react';
import styled from 'styled-components';
import MarketingSection from './MarketingSection/MarketingSection';
import ProductSlider from './ProductSlider/ProductSlider';

const LayoutWrapper = styled.div`
    height: 290vh;
`;

const MiddleWrapper = styled.div`
    height: 100%;
    width: 100%;
    position: absolute;
    left: 0;
    top: 0;
`;

const InnerContent = styled.div`
    position: sticky;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const BackgroundWrapper = styled.div`
    display: none;
    position: absolute;
    top: 0;
    height: 290vh;
    width: 100%;
    background-color: #f2f2f2;
`;

const TriggerWrapper = styled.div`
    margin-top: 50vh;
    height: 100vh;
`;

const MarketingLayout = () => {
    return (
        <LayoutWrapper>
            <MiddleWrapper>
                <InnerContent>
                    <MarketingSection />
                    <ProductSlider />
                </InnerContent>
            </MiddleWrapper>
            <BackgroundWrapper />
            <TriggerWrapper />
        </LayoutWrapper>
    );
};

export default MarketingLayout;

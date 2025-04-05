import React from 'react';
import * as S from './style';

const MarketingSection = ({ children }) => {
    return (
        <S.Section>
            <S.Container>{children}</S.Container>
        </S.Section>
    );
};

export default MarketingSection;

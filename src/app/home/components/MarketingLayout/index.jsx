import React from 'react';
import * as S from './style';

const MarketingLayout = ({ children }) => {
    return (
        <S.Layout>
            <S.Main>{children}</S.Main>
        </S.Layout>
    );
};

export default MarketingLayout;

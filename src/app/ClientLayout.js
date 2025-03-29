'use client';

import GlobalStyle from './styles/GlobalStyle';

export default function ClientLayout({ children }) {
    return (
        <>
            <GlobalStyle />
            {children}
        </>
    );
}

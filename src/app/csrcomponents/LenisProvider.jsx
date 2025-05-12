// components/LenisProvider.js (또는 .jsx)
'use client'; // 이 컴포넌트는 클라이언트에서 실행되어야 합니다.

import { useEffect, useRef } from 'react';
import Lenis from 'lenis';

const LenisProvider = ({ children }) => {
    const lenisRef = useRef(null); // 타입 없이 useRef 사용

    useEffect(() => {
        // Lenis 인스턴스 생성 (옵션은 필요에 따라 조절하세요)
        const lenis = new Lenis({
            duration: 2.5,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            direction: 'vertical',
            gestureDirection: 'vertical',
            smoothWheel: true,
            wheelMultiplier: 1,
            smoothScroll: true,
            syncTouch: false,
            autoResize: true,
            // 기타 옵션...
        });

        lenisRef.current = lenis;

        // requestAnimationFrame 루프를 사용하여 Lenis 업데이트
        function raf(time) {
            // time 파라미터 타입 제거
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        // 컴포넌트 언마운트 시 Lenis 인스턴스 정리
        return () => {
            lenis.destroy();
            lenisRef.current = null;
        };
    }, []); // 빈 의존성 배열을 사용하여 마운트 시 한 번만 실행

    return <>{children}</>;
};

export default LenisProvider;

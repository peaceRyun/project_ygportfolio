'use client';

import gsap from 'gsap';
import ScrollToPlugin from 'gsap/ScrollToPlugin';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

gsap.registerPlugin(ScrollToPlugin);

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const pathname = usePathname();

    // 화면 크기 감지 로직
    useEffect(() => {
        const checkScreenSize = () => {
            setIsMobile(window.innerWidth <= 1024);
        };

        // 초기 로드 시 체크
        checkScreenSize();

        // 리사이즈 이벤트 리스너 등록
        window.addEventListener('resize', checkScreenSize);

        return () => {
            window.removeEventListener('resize', checkScreenSize);
        };
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const scrolled = window.scrollY > 0;
            if (scrolled !== isScrolled) {
                setIsScrolled(scrolled);
            }
        };

        handleScroll();

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isScrolled]);

    useEffect(() => {
        if (window.location.hash === '#projects') {
            setTimeout(() => {
                gsap.to(window, {
                    scrollTo: '#projects',
                    duration: 1,
                    ease: 'power2.inOut',
                });
            }, 100);
        }
        if (window.location.hash === '#about') {
            setTimeout(() => {
                gsap.to(window, {
                    scrollTo: '#about',
                    duration: 1,
                    ease: 'power2.inOut',
                });
            }, 100);
        }
    }, [pathname]);

    const handleProjectsClick = (e) => {
        if (pathname !== '/') {
            return;
        }
        e.preventDefault(); // 기본 앵커 링크 동작 방지

        gsap.to(window, {
            scrollTo: '#projects',
            duration: 1,
            ease: 'power2.inOut',
        });

        if (isMobile) {
            setIsMenuOpen(false);
        }
    };

    const handleAboutClick = (e) => {
        if (pathname !== '/') {
            return;
        }
        e.preventDefault(); // 기본 앵커 링크 동작 방지

        gsap.to(window, {
            scrollTo: '#about',
            duration: 1,
            ease: 'power2.inOut',
        });

        if (isMobile) {
            setIsMenuOpen(false);
        }
    };

    const handleContactClick = (e) => {
        e.preventDefault(); // 기본 앵커 링크 동작 방지

        gsap.to(window, {
            scrollTo: '#contact',
            duration: 1,
            ease: 'power2.inOut',
        });

        if (isMobile) {
            setIsMenuOpen(false);
        }
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const textColorClass = pathname.startsWith('/projects') ? (isScrolled ? 'text-black' : 'text-white') : 'text-black';

    return (
        <header className='w-full fixed z-50 flex items-center justify-center'>
            {!isMobile ? (
                // 데스크탑 버전 (1024px 초과)
                <div
                    className={`header-inner relative top-9 transition-width duration-200 ease-out h-16 max-w-[1400px] flex items-center overflow-hidden rounded-4xl ${isScrolled ? 'w-1/2' : 'w-full'}`}
                >
                    <h1 className='sr-only'>YG's Portfolio</h1>
                    <div
                        className={`header-bg absolute z-10 inset-0 transition duration-200 ease-in-out ${isScrolled ? 'bg-gray-light opacity-90' : 'bg-transparent'}`}
                    ></div>
                    <div className='nav-inner relative w-full flex items-center justify-between z-20'>
                        <Link
                            href='/'
                            className={`font-poppins font-bold text-lg ml-[3.125rem] whitespace-nowrap ${textColorClass}`}
                        >
                            YG's Portfolio
                        </Link>
                        <div className={`flex items-center text-md ${textColorClass}`}>
                            <Link
                                href='/#projects'
                                onClick={handleProjectsClick}
                                className='py-4 px-5 hover:text-primary'
                            >
                                Projects
                            </Link>
                            <Link href='/#about' onClick={handleAboutClick} className='py-4 px-5 hover:text-primary'>
                                About
                            </Link>
                            <Link href='#contact' onClick={handleContactClick} className='py-4 px-5 hover:text-primary'>
                                Contact
                            </Link>
                        </div>
                    </div>
                </div>
            ) : (
                // 모바일 버전 (1024px 이하)
                <div
                    className={`w-full transition-all duration-300 overflow-hidden h-auto ${isScrolled ? 'bg-white  shadow-lg bg-opacity-90' : 'bg-transparent'} ${isMenuOpen ? 'max-h-[300px]' : 'max-h-[72px]'}`}
                >
                    <div className='flex justify-between items-center px-5 py-4'>
                        <Link href='/' className={`font-poppins font-bold text-lg whitespace-nowrap ${textColorClass}`}>
                            YG's Portfolio
                        </Link>
                        <button
                            onClick={toggleMenu}
                            className={`p-2 focus:outline-none ${textColorClass}`}
                            aria-label='메뉴 열기'
                        >
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                className='h-6 w-6'
                                fill='none'
                                viewBox='0 0 24 24'
                                stroke='currentColor'
                            >
                                <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    strokeWidth={2}
                                    d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                                />
                            </svg>
                        </button>
                    </div>

                    {/* 모바일 메뉴 */}

                    <div className={`mobile-menu w-full bg-white   ${textColorClass}`}>
                        <nav className='flex flex-col'>
                            <Link
                                href='/#projects'
                                onClick={handleProjectsClick}
                                className='py-3 px-5 hover:bg-gray-100'
                            >
                                Projects
                            </Link>
                            <Link href='/#about' onClick={handleAboutClick} className='py-3 px-5 hover:bg-gray-100'>
                                About
                            </Link>
                            <Link href='#contact' onClick={handleContactClick} className='py-3 px-5 hover:bg-gray-100'>
                                Contact
                            </Link>
                        </nav>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;

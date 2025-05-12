'use client';

import gsap from 'gsap';
import ScrollToPlugin from 'gsap/ScrollToPlugin';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

gsap.registerPlugin(ScrollToPlugin);

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    const pathname = usePathname();

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
    };

    const handleContactClick = (e) => {
        e.preventDefault(); // 기본 앵커 링크 동작 방지

        gsap.to(window, {
            scrollTo: '#contact',
            duration: 1,
            ease: 'power2.inOut',
        });
    };

    const textColorClass = pathname.startsWith('/projects') ? (isScrolled ? 'text-black' : 'text-white') : 'text-black';

    return (
        <header className='w-full fixed z-50 flex items-center justify-center'>
            <div
                className={`header-inner relative top-9 transition-width duration-200 ease-out h-16 max-w-[1400px] flex items-center overflow-hidden rounded-4xl ${isScrolled ? 'w-1/2' : 'w-full'}`}
            >
                <h1 className='sr-only'>YG's Portfolio</h1>
                <div
                    className={`header-bg absolute z-10 inset-0 transition duration-200 ease-in-out ${isScrolled ? 'bg-secondary opacity-90' : 'bg-transparent'}`}
                ></div>
                <div className='nav-inner relative w-full flex items-center justify-between z-20'>
                    <Link href='/' className='font-poppins font-bold text-lg ml-[3.125rem] text-primary-dark'>
                        YG's Portfolio
                    </Link>
                    <div className={`flex items-center text-md ${textColorClass}`}>
                        <Link
                            href='/#projects'
                            onClick={handleProjectsClick}
                            className='py-4 px-5 hover:text-primary-light'
                        >
                            Projects
                        </Link>
                        <Link href='/#about' onClick={handleAboutClick} className='py-4 px-5 hover:text-primary-light'>
                            About
                        </Link>
                        <Link
                            href='#contact'
                            onClick={handleContactClick}
                            className='py-4 px-5 hover:text-primary-light'
                        >
                            Contact
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;

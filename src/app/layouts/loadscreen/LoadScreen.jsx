'use client';

import { useEffect, useRef } from 'react';

const LSWrap = 'w-full h-screen fixed top-0 left-0 bg-transparent z-50';
const LSCont = 'w-full h-full flex items-center';
const LSElement = 'relative top-0 left-0 flex-1 w-full h-full transition-top duration-600 ease-in-out';
const LSEAnimated = 'top-[-100%]';

const LoadScreen = ({ handleLoad }) => {
    const listRef = useRef(null);

    useEffect(() => {
        document.body.style.overflow = 'hidden';
        const listItems = listRef.current?.querySelectorAll('li');

        const delayBetweenStarts = 100;

        listItems.forEach((item, index) => {
            const delay = index * delayBetweenStarts;

            setTimeout(() => {
                item.classList.add(LSEAnimated);
            }, delay);
        });

        const totalAnimationTime = listItems.length * delayBetweenStarts + 600;

        const timer = setTimeout(() => {
            handleLoad();
            document.body.style.overflow = 'visible';
        }, totalAnimationTime);

        return () => clearTimeout(timer);
    }, []);
    return (
        <div className={`${LSWrap}`}>
            <ul className={`${LSCont}`} ref={listRef}>
                {[1, 2, 3, 4, 5, 6].map((index) => (
                    <li key={index} className={`${LSElement} bg-primary-dark`}></li>
                ))}
            </ul>
        </div>
    );
};

export default LoadScreen;

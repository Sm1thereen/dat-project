import React, { useEffect, useState } from 'react';
import './style.css';

import rodonit from '../../assets/partners/Rodonit.jpg';
import BASF from '../../assets/partners/BASF.jpg';
import ADAMA from '../../assets/partners/ADAMA.jpg';
import Lidea from '../../assets/partners/LIDEA.jpg';
import DEKALB from '../../assets/partners/DEKALB.jpg';
import LG from '../../assets/partners/LG.jpg';

const Partners = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const slideInterval = 1000;
    const slideWidth = 255 + 30;
    const slideCount = 8;

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % slideCount);
        }, slideInterval);

        return () => {
            clearInterval(interval);
        };
    }, []);

    const slides = [
        { id: 1, src: LG },
        { id: 2, src: rodonit },
        { id: 3, src: BASF },
        { id: 4, src: ADAMA },
        { id: 5, src: Lidea },
        { id: 6, src: DEKALB },
        { id: 7, src: BASF },
        { id: 8, src: LG },
    ];

    return (
        <div id='partners' className="partners-container" >
            <div className="partners-wrapper">
                <ul className="title__item">
                    <li>
                        <svg
                            width="32"
                            height="25"
                            viewBox="0 0 32 25"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M31.957 0.00718358C31.8473 -0.00239453 31.7369 -0.00239453 31.6272 0.00718358H23.2067H18.1218C13.3429 0.180678 9.7507 1.36623 7.34528 3.56382C7.23059 3.66503 7.12064 3.76621 7.0155 3.87706C5.6325 5.27629 4.65714 7.03172 4.1959 8.95178L0 25H13.859C18.6157 24.8265 22.1967 23.6506 24.6022 21.4723C24.7169 21.3711 24.8267 21.265 24.9367 21.159C26.3415 19.7575 27.3339 17.991 27.804 16.0554L32 0.00718358H31.957ZM19.503 13.9012C19.2219 14.9994 18.6485 15.9993 17.8447 16.7927C17.7348 16.8988 17.6201 17.0048 17.5006 17.106L17.2999 17.265C16.3645 17.9829 15.2418 18.41 14.0693 18.494H10.4611L12.4635 11.1108C12.7385 10.0165 13.3016 9.01743 14.0932 8.21924C14.2031 8.11321 14.3178 8.00718 14.4373 7.90597L14.6666 7.71804C15.602 7.00016 16.7247 6.57304 17.8972 6.4891H21.5101L19.503 13.9012Z"
                                fill="#84C551"
                            />
                        </svg>
                    </li>
                    <li>
                        <h2 className="title">Партнери</h2>
                    </li>
                    <li>
                        <svg
                            width="32"
                            height="25"
                            viewBox="0 0 32 25"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M0.0429955 0.00718358C0.152706 -0.00239453 0.263063 -0.00239453 0.372774 0.00718358H8.79333H13.8782C18.6571 0.180678 22.2493 1.36623 24.6547 3.56382C24.7694 3.66502 24.8794 3.76621 24.9845 3.87706C26.3675 5.27629 27.3429 7.03172 27.8041 8.95178L32 25H18.141C13.3843 24.8265 9.80326 23.6506 7.39784 21.4723C7.28315 21.3711 7.17326 21.265 7.06334 21.159C5.65855 19.7575 4.66608 17.991 4.19596 16.0554L0 0.00718358H0.0429955ZM12.497 13.9012C12.7781 14.9994 13.3515 15.9993 14.1553 16.7927C14.2652 16.8988 14.3799 17.0048 14.4994 17.106L14.7001 17.265C15.6355 17.9829 16.7582 18.41 17.9307 18.494H21.5389L19.5365 11.1108C19.2615 10.0165 18.6984 9.01743 17.9068 8.21924C17.7969 8.11321 17.6822 8.00718 17.5627 7.90597L17.3334 7.71804C16.398 7.00016 15.2753 6.57304 14.1028 6.4891H10.4899L12.497 13.9012Z"
                                fill="#84C551"
                            />
                        </svg>
                    </li>
                </ul>
                <div className="partners-list">
                    <ul className="partners-card">
                        {slides.map((slide) => (
                            <li key={slide.id} className="partners-card__item">
                                <img className="card-partners__img" src={slide.src} alt="" />
                            </li>
                        ))}
                        {slides.map((slide) => (
                            <li key={slide.id} className="partners-card__item">
                                <img className="card-partners__img" src={slide.src} alt="" />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Partners;

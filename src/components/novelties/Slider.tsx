import React, {useState} from 'react';
import petunia from "../../assets/novelties/Petunia.jpg";
import img1 from "../../assets/novelties/skor250.jpg";
import img2 from "../../assets/novelties/skor250-2.jpg";
import horus from "../../assets/novelties/horus.jpg";
import './slider.css'
import Switch from "./Switch";

type Card = {
    img:any;
    alt:string;
    title:string;
    status:string;
    cost:string;
    quantity:string;
}
const Slider = () => {
    const [currentIndex,setCurrentIndex] = useState(0);



    const cards:Card[] = [
        {
            img:petunia,
            alt:'Petunia',
            title:'Петунія Софістика F1',
            status:'В наявності',
            cost:'20 грн',
            quantity:'1 шт',
        },
        {
            img:img1,
            alt:'Скор 250 ЕС к.э.',
            title:'Скор 250 ЕС к.э.',
            status:'В наявності',
            cost:'20 грн',
            quantity:'1 шт',
        },
        {
            img:img2,
            alt:'Скор 250 ЕС к.э.',
            title:'Скор 250 ЕС к.э.',
            status:'В наявності',
            cost:'20 грн',
            quantity:'1 шт',
        },
        {
            img:horus,
            alt:'horus',
            title:'Петунія Софістика F1',
            status:'В наявності',
            cost:'20 грн',
            quantity:'1 шт',
        },
        {
            img:petunia,
            alt:'Petunia',
            title:'Петунія Софістика F1',
            status:'В наявності',
            cost:'20 грн',
            quantity:'1 шт',
        },
        {
            img:img1,
            alt:'Скор 250 ЕС к.э.',
            title:'Скор 250 ЕС к.э.',
            status:'В наявності',
            cost:'20 грн',
            quantity:'1 шт',
        },
        {
            img:img2,
            alt:'Скор 250 ЕС к.э.',
            title:'Скор 250 ЕС к.э.',
            status:'В наявності',
            cost:'20 грн',
            quantity:'1 шт',
        },
        {
            img:horus,
            alt:'horus',
            title:'Петунія Софістика F1',
            status:'В наявності',
            cost:'20 грн',
            quantity:'1 шт',
        },

    ];

    const handleNext = () =>{
        setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
    }
    const handlePrev = () =>{
        setCurrentIndex((prevIndex) => (prevIndex - 1 + cards.length ) % cards.length)
    }

    const visibleCard = cards.slice(currentIndex,currentIndex +4 )

    return (
        <div>
            <ul className="novelties-list">
                <svg className="arrow-novelties" width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={handlePrev}>
                    <circle cx="35" cy="35" r="34.5" stroke="#84C551"/>
                    <g clip-path="url(#clip0_25_424)">
                        <path d="M43.7979 33.5961C43.716 33.5828 43.6332 33.5767 43.5504 33.5778H29.4408L29.7484 33.4347C30.0492 33.2923 30.3228 33.0986 30.5569 32.8623L34.5136 28.9056C35.0347 28.4081 35.1223 27.6079 34.7211 27.0095C34.2542 26.3719 33.3588 26.2334 32.7211 26.7003C32.6696 26.7381 32.6207 26.7792 32.5746 26.8235L25.4197 33.9784C24.8605 34.537 24.86 35.443 25.4186 36.0022C25.4189 36.0025 25.4193 36.0029 25.4197 36.0033L32.5746 43.1582C33.1342 43.7163 34.0403 43.715 34.5984 43.1554C34.6423 43.1114 34.6833 43.0645 34.7211 43.0151C35.1223 42.4168 35.0347 41.6165 34.5136 41.1191L30.5641 37.1552C30.3541 36.9451 30.1128 36.7688 29.8486 36.6329L29.4193 36.4397H43.4716C44.2026 36.4669 44.844 35.9563 44.9813 35.2377C45.1078 34.4576 44.578 33.7227 43.7979 33.5961Z" fill="#84BE51"/>
                    </g>
                    <defs>
                        <clipPath id="clip0_25_424">
                            <rect width="20" height="20" fill="white" transform="translate(25 25)"/>
                        </clipPath>
                    </defs>
                </svg>
                {visibleCard.map((card, index) => (
                    <li className="novelties-list__card" key={index}>
                        <div className="novelties-list__card__item">
                            <img className="novelties-card__img" src={card.img} alt={card.alt} />
                            <div className="card-info">
                                <h3 className="card-title">{card.title}</h3>
                                <p className="card-status">{card.status}</p>
                                <p className="card-cost">{card.cost}</p>
                                <p className="card-quantity">{card.quantity}</p>
                        <svg className='color-change-novelties' width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g filter="url(#filter0_d_21943_9212)">
                                <rect  x="8" y="8" width="47" height="47" rx="23.5" fill="#fff"/>
                            </g>
                            <g clip-path="url(#clip0_21943_9212)">
                                <path d="M39.9077 27.3428C39.8161 27.2115 39.6687 27.1304 39.5086 27.1235L29.5837 26.6957C29.2989 26.6833 29.0609 26.9031 29.0488 27.1865C29.0367 27.4699 29.2561 27.7093 29.5395 27.7215L38.7926 28.1203L36.9732 33.7968H28.877L27.4142 25.8324C27.3821 25.6579 27.2623 25.5123 27.097 25.4474L24.7013 24.5063C24.4373 24.4029 24.1393 24.5326 24.0356 24.7963C23.9321 25.0601 24.0618 25.3583 24.3257 25.462L26.4558 26.2988L27.9443 34.4029C27.9892 34.6465 28.2015 34.8235 28.4493 34.8235H28.6962L28.1324 36.3896C28.0852 36.5208 28.1047 36.6665 28.185 36.7805C28.2652 36.8945 28.3956 36.9623 28.5349 36.9623H28.9303C28.6853 37.2351 28.5349 37.5942 28.5349 37.9891C28.5349 38.8383 29.2259 39.5291 30.075 39.5291C30.924 39.5291 31.615 38.8383 31.615 37.9891C31.615 37.5942 31.4646 37.2351 31.2196 36.9623H34.5774C34.3322 37.2351 34.1818 37.5942 34.1818 37.9891C34.1818 38.8383 34.8727 39.5291 35.7219 39.5291C36.5712 39.5291 37.262 38.8383 37.262 37.9891C37.262 37.5942 37.1116 37.2351 36.8666 36.9623H37.3476C37.5839 36.9623 37.7754 36.7708 37.7754 36.5345C37.7754 36.2982 37.5839 36.1067 37.3476 36.1067H29.1436L29.6055 34.8233H37.3475C37.5708 34.8233 37.7683 34.6791 37.8363 34.4667L39.9753 27.793C40.0245 27.6406 39.9993 27.4741 39.9077 27.3428ZM30.075 38.6737C29.6975 38.6737 29.3905 38.3667 29.3905 37.9892C29.3905 37.6117 29.6975 37.3047 30.075 37.3047C30.4525 37.3047 30.7595 37.6117 30.7595 37.9892C30.7595 38.3667 30.4525 38.6737 30.075 38.6737ZM35.7219 38.6737C35.3444 38.6737 35.0374 38.3667 35.0374 37.9892C35.0374 37.6117 35.3444 37.3047 35.7219 37.3047C36.0994 37.3047 36.4064 37.6117 36.4064 37.9892C36.4064 38.3667 36.0994 38.6737 35.7219 38.6737Z" fill="#8C3213"/>
                            </g>
                            <defs>
                                <filter id="filter0_d_21943_9212" x="0" y="0" width="63" height="63" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                    <feOffset/>
                                    <feGaussianBlur stdDeviation="4"/>
                                    <feComposite in2="hardAlpha" operator="out"/>
                                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/>
                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_21943_9212"/>
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_21943_9212" result="shape"/>
                                </filter>
                                <clipPath id="clip0_21943_9212">
                                    <rect width="16" height="16" fill="white" transform="translate(24 24)"/>
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                </div>
                </li>
            ))}
                <svg className="arrow-novelties" width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={handleNext}>
                    <circle cx="35" cy="35" r="34.5" transform="rotate(-180 35 35)" stroke="#84C551"/>
                    <g clip-path="url(#clip0_21947_9869)">
                        <path d="M26.2021 36.4039C26.284 36.4172 26.3668 36.4233 26.4496 36.4222H40.5592L40.2516 36.5653C39.9508 36.7077 39.6772 36.9014 39.4431 37.1377L35.4864 41.0944C34.9653 41.5919 34.8777 42.3921 35.2789 42.9905C35.7458 43.6281 36.6412 43.7666 37.2789 43.2997C37.3304 43.2619 37.3793 43.2208 37.4254 43.1765L44.5803 36.0216C45.1395 35.463 45.14 34.557 44.5814 33.9978C44.5811 33.9975 44.5807 33.9971 44.5803 33.9967L37.4254 26.8418C36.8658 26.2837 35.9597 26.285 35.4016 26.8446C35.3577 26.8886 35.3167 26.9355 35.2789 26.9849C34.8777 27.5832 34.9653 28.3835 35.4864 28.8809L39.4359 32.8448C39.6459 33.0549 39.8872 33.2312 40.1514 33.3671L40.5807 33.5603H26.5284C25.7974 33.5331 25.156 34.0437 25.0187 34.7623C24.8922 35.5424 25.422 36.2773 26.2021 36.4039Z" fill="#84BE51"/>
                    </g>
                    <defs>
                        <clipPath id="clip0_21947_9869">
                            <rect width="20" height="20" fill="white" transform="matrix(-1 0 0 -1 45 45)"/>
                        </clipPath>
                    </defs>
                </svg>
            </ul>

        </div>
    );
};

export default Slider;
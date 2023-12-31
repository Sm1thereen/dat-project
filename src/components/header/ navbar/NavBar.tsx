import React, {useState} from 'react';
import './style.css'

import {Link} from "react-scroll";
import arrow from "../../../assets/main-page/header/header-arrow.svg";
import phoneIcon from "../../../assets/main-page/header/phone-icon.svg";
import line from "../../../assets/main-page/header/header-line.svg";
import login from "../../../assets/main-page/header/header-login.svg";
import logo from "../../../assets/main-page/header/logo.svg";
import searchIcon from "../../../assets/main-page/header/search-icon.svg";

const NavBar = () => {
    const [isDropdownOpen,setIsDropdownOpen] = useState(false);
    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const [isContactMenu, setContactMenu] = useState(false);
    const toggleDropdownContact = () => {
        setContactMenu(!isContactMenu)
    }
    return (
        <div>
            <nav className="nav">
                <ul className="nav-list">
                    <li className='nav-list__item' onClick={toggleDropdown}>
                        <div className="nav-list__item__link">
                            Про нас
                            <img
                                className={`nav-list__img ${isDropdownOpen ? 'open' : ''}`}
                                src={arrow}
                                alt=""
                            />
                        </div>
                        {isDropdownOpen  && (
                            <ul className="drop-down">
                                <li className='drop-down__item'>
                                    <p className='drop-down__item__text'>Наша команда</p>
                                </li>
                                <li className='drop-down__item'>
                                    <p className='drop-down__item__text'>Партнери</p>
                                </li>
                                <li className='drop-down__item'>
                                    <p className='drop-down__item__text'>Договір</p>
                                </li>
                            </ul>
                        )}
                    </li>
                    <li className='nav-list__item'>
                        <a href="#!" className='nav-list__item__link'>Каталог і продукції</a>
                    </li>
                    <li className='nav-list__item'>
                        <a href="#!" className='nav-list__item__link'>Оплата і доставка</a>
                    </li>
                    <li className='nav-list__item'>
                        <Link to='partners' className='nav-list__item__link'>
                            Партнери
                        </Link>
                    </li>
                    <li className='nav-list__item'>
                        <a href="#!" className='nav-list__item__link'>Новини</a>
                    </li>
                    <li className='nav-list__item'>
                        <p className='nav-list__item__link' onClick={toggleDropdownContact}>Контакти </p>
                        {isContactMenu  && (
                            <div className='contact-menu'>
                                <div className='nav-list__info__contact__wrapper'>
                                    <img className='nav_phone' src={phoneIcon} alt=""/>
                                    <p className='phone-number'>+38 (067) 115 00 58</p>
                                    <a href="" className='feedback-link'>Замовити зворотній зв’язок</a>
                                </div>
                            </div>

                        )}
                    </li>
                    <img src={line} alt=""/>
                    <ul className='nav-list__login'>
                        <li className='nav-list__item__login'>
                            <img src={login} alt=""/>
                            <a href="" className='nav-list__item__link'>Вхід</a>
                        </li>
                        <li className='nav-list__item__login'>
                            <a href="" className='nav-list__item__link'>Реестрація</a>
                        </li>
                    </ul>
                </ul>
            </nav>
            <div className="container-banner">
                <nav className="nav-info">
                    <img src={logo} alt=""/>
                    <ul className="nav-list__info">
                        <li className="nav-list__info__search">
                            <input className='nav-list__info__input' type="text" name="search" placeholder="Пошук"/>
                            <button className='nav-list__info__button' >
                                <img src={searchIcon} alt=""/>
                            </button>
                        </li>
                        <li className="nav-list__info__contact">
                            <div className='nav-list__info__contact__wrapper'>
                                <img className='nav_phone' src={phoneIcon} alt=""/>
                                <p className='phone-number'>+38 (067) 115 00 58</p>
                                <a href="" className='feedback-link'>Замовити зворотній зв’язок</a>
                            </div>
                        </li>
                    </ul>
                    <ul className="nav-list__icon">
                        <li className="nav-list__icon__item">
                            <svg className='color-change' id='like-icon'  width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path className='color-change' d="M20 14.2694C19.108 13.3624 17.8949 12.85 16.6094 12.85C13.9849
                                         12.85 11.85 14.9849 11.85 17.6094C11.85 19.1564 12.4281 20.7535 13.5523 22.3548L13.5523 22.3548C13.6743
                                          22.5285 13.914 22.5705 14.0878 22.4485C14.0878 22.4485 14.0878 22.4485 14.0878 22.4485L14.0016 22.3258C14.1075
                                           22.2514 14.1331 22.1052 14.0587 21.9993C13.0037 20.4965 12.4687 19.0195 12.4687 17.6094C12.4687 15.3262 14.3262 13.4688
                                            16.6094 13.4688C17.858 13.4688 19.0277 14.0243 19.8184 14.9929C19.863 15.0474 19.9296 15.0791 20 15.0791C20.0704 15.0791
                                             20.1371 15.0474 20.1816 14.9929C20.9723 14.0243 22.142 13.4688 23.3906 13.4688C25.6738 13.4688 27.5312 15.3265 27.5312 17.6099L20
                                              14.2694ZM20 14.2694C20.892 13.3624 22.1051 12.85 23.3906 12.85C26.0151 12.85 28.15 14.9852 28.15 17.61C28.1497 18.9426 27.719 20.3174 26.8801
                                               21.695C26.2163 22.785 25.2951 23.8817 24.1447 24.9553C22.1944 26.7753 20.2164 27.9282 20.1926 27.942L20.1926 27.942C20.133 27.9765 20.0664 27.9938
                                                20 27.9938C19.9351 27.9938 19.8701 27.9773 19.8116 27.9444M20 14.2694L27.3812 17.6099C27.381 18.9511 26.8778 20.2402 26.1531 21.4004C25.4287 22.5601
                                                 24.4882 23.5825 23.6268 24.3871C22.0891 25.8233 20.5322 26.8314 19.9989 27.1608C19.9457 27.1297 19.8853 27.095 19.8182 27.0565C19.0217 26.5998 17.2839
                                                  25.6035 15.5314 23.4403C15.3977 23.2753 15.1556 23.2501 14.9907 23.3836L14.9907 23.3836C14.8258 23.5173 14.8004 23.7593 14.9341 23.9243M14.9341 23.9243C14.9341 23.9243
                                                  14.934 23.9242 14.934 23.9242L15.0506 23.8298L14.9341 23.9243ZM14.9341 23.9243C16.0931 25.3547 17.3039 26.3548 18.2298 27C18.6928 27.3227 19.0848 27.5567 19.3638
                                                  27.7117C19.5034 27.7892 19.6146 27.8469 19.6924 27.8859C19.7312 27.9054 19.7616 27.9203 19.7829 27.9305L19.8072 27.9423C19.8093 27.9433 19.8107 27.9439 19.8116
                                                  27.9444M19.8116 27.9444C19.8134 27.9453 19.8134 27.9453 19.8125 27.9448C19.8116 27.9443 19.8096 27.9433 19.8075 27.942L19.8826 27.8122L19.8074 27.942C19.8088
                                                  27.9428 19.8102 27.9436 19.8116 27.9444ZM23.3906 13.6188C25.5909 13.6188 27.3812 15.4093 27.3812 17.6099L20.2978 15.0878C21.0601 14.1539 22.1871 13.6188 23.3906
                                                  13.6188Z" fill="white" stroke="#8C3213" stroke-width="0.3"/>
                                <circle cx="20" cy="20" r="19.5" stroke="#8C3213"/>
                            </svg>
                        </li>
                        <li className="nav-list__icon__item">
                            <svg className='color-change'  width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="20" cy="20" r="19.5" stroke="#8C3213"/>
                                <path d="M27.9331 20.7672L25.2374 16.2741L27.6566 15.6021C27.9061 15.5328 28.0521 15.2745 27.9828 15.025C27.9135 14.7756 27.6551 14.6295 27.4057 14.6988L24.3985 15.5342C24.3983 15.5342 24.3981 15.5343 24.3978 15.5343L20.4688 16.6257V11.4688C20.4688 11.2099 20.2589 11 20 11C19.7411 11 19.5313 11.2099 19.5313 11.4688V16.8861L15.3612 18.0444C15.361 18.0445 15.3607 18.0446 15.3605 18.0446L12.3434 18.8827C12.094 18.9519 11.948 19.2103 12.0172 19.4598C12.0749 19.6672 12.2633 19.8032 12.4686 19.8032C12.5101 19.8032 12.5524 19.7976 12.5943 19.7859L14.4751 19.2635L12.067 23.2775C12.0233 23.3504 12.0002 23.4338 12.0002 23.5187C12.0002 25.4382 13.5618 26.9998 15.4813 26.9998C17.4009 26.9998 18.9625 25.4382 18.9625 23.5187C18.9625 23.4338 18.9394 23.3504 18.8957 23.2775L16.2 18.7844L23.5124 16.7533L21.1043 20.7672C21.0606 20.8401 21.0375 20.9234 21.0375 21.0084C21.0375 22.9279 22.5991 24.4895 24.5186 24.4895C25.4485 24.4895 26.3227 24.1274 26.9802 23.4698C27.6378 22.8123 27.9999 21.9382 27.9998 21.0083C27.9999 20.9234 27.9768 20.84 27.9331 20.7672ZM15.4813 26.0623C14.2389 26.0623 13.2022 25.1667 12.9815 23.9874H17.9812C17.7605 25.1667 16.7238 26.0623 15.4813 26.0623ZM17.666 23.0499H13.2968L15.4813 19.4087L17.666 23.0499ZM24.5186 16.8984L26.7033 20.5396H22.3341L24.5186 16.8984ZM24.5187 23.552C23.2763 23.552 22.2395 22.6564 22.0188 21.4771H27.0186C26.7979 22.6564 25.7611 23.552 24.5187 23.552Z" fill="#8C3213"/>
                            </svg>
                        </li>
                        <li className="nav-list__icon__item">
                            <svg className='color-change' width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_21906_20678)">
                                    <path d="M27.9077 15.3429C27.8161 15.2116 27.6687 15.1305 27.5086 15.1236L17.5837 14.6958C17.2989 14.6833 17.0609 14.9032 17.0488 15.1866C17.0367 15.47 17.2561 15.7094 17.5395 15.7215L26.7926 16.1204L24.9732 21.7969H16.877L15.4142 13.8325C15.3821 13.658 15.2623 13.5124 15.097 13.4475L12.7013 12.5063C12.4373 12.403 12.1393 12.5327 12.0356 12.7964C11.9321 13.0602 12.0618 13.3583 12.3257 13.462L14.4558 14.2989L15.9443 22.403C15.9892 22.6466 16.2015 22.8236 16.4493 22.8236H16.6962L16.1324 24.3897C16.0852 24.5209 16.1047 24.6666 16.185 24.7806C16.2652 24.8946 16.3956 24.9624 16.5349 24.9624H16.9303C16.6853 25.2351 16.5349 25.5942 16.5349 25.9891C16.5349 26.8384 17.2259 27.5292 18.075 27.5292C18.924 27.5292 19.615 26.8384 19.615 25.9891C19.615 25.5943 19.4646 25.2351 19.2196 24.9624H22.5774C22.3322 25.2351 22.1818 25.5942 22.1818 25.9891C22.1818 26.8384 22.8727 27.5292 23.7219 27.5292C24.5712 27.5292 25.262 26.8384 25.262 25.9891C25.262 25.5943 25.1116 25.2351 24.8666 24.9624H25.3476C25.5839 24.9624 25.7754 24.7709 25.7754 24.5346C25.7754 24.2983 25.5839 24.1068 25.3476 24.1068H17.1436L17.6055 22.8234H25.3475C25.5708 22.8234 25.7683 22.6792 25.8363 22.4668L27.9753 15.793C28.0245 15.6407 27.9993 15.4742 27.9077 15.3429ZM18.075 26.6738C17.6975 26.6738 17.3905 26.3668 17.3905 25.9893C17.3905 25.6118 17.6975 25.3048 18.075 25.3048C18.4525 25.3048 18.7595 25.6118 18.7595 25.9893C18.7595 26.3668 18.4525 26.6738 18.075 26.6738ZM23.7219 26.6738C23.3444 26.6738 23.0374 26.3668 23.0374 25.9893C23.0374 25.6118 23.3444 25.3048 23.7219 25.3048C24.0994 25.3048 24.4064 25.6118 24.4064 25.9893C24.4064 26.3668 24.0994 26.6738 23.7219 26.6738Z" fill="#8C3213"/>
                                </g>
                                <circle cx="20" cy="20" r="19.5" stroke="#8C3213"/>
                                <defs>
                                    <clipPath id="clip0_21906_20678">
                                        <rect width="16" height="16" fill="white" transform="translate(12 12)"/>
                                    </clipPath>
                                </defs>
                            </svg>
                            <p className='nav-list__icon__item__cost'>0,0 грн</p>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default NavBar;
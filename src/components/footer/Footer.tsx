import React from 'react';
import './style.css'
import logo from '../../assets/footer/footer-logo.svg'
import callIcon from '../../assets/footer/footer-call-icon.svg';
import mailIcon from '../../assets/footer/footer-mail-icon.svg';
import arrowDown from '../../assets/footer/arrow-down.svg';
import line from '../../assets/footer/line.svg';
const Footer = () => {
    return (
        <div>
            <footer className="footer">
                <ul className="footer-wrapper">
                    <ul className='footer-logo'>
                        <li className='footer-logo__item'>
                            <img src={logo} alt=""/>
                        </li>
                        <li className='footer-logo-description'>Пропонуємо покупцям широкий вибір насіння овочів</li>
                    </ul>
                    <ul className='footer-information'>
                        <li className='footer-title'>Інформація</li>
                        <li className='footer-item'>
                            <a className='footer-item__link' href="">Про компанію</a>
                            </li>
                        <li className='footer-item'>
                            <a className='footer-item__link' href="">Оплата і доставка</a>
                        </li>
                        <li className='footer-item'>
                            <a className='footer-item__link' href="">Партнери</a>
                        </li>
                    </ul>
                    <ul className='footer-goods'>
                        <li className='footer-title'>Товари</li>
                        <li className='footer-item'>
                            <a href="" className='footer-item__link'>Каталог продукції</a>
                        </li>
                        <li className='footer-item'>
                            <a href="" className='footer-item__link'>Засоби захисту рослин</a>

                        </li>
                        <li className='footer-item'>
                            <a href="" className='footer-item__link'>Насіння</a>
                        </li>
                        <li className='footer-item'>
                            <a href="" className='footer-item__link'>Добрива</a>
                        </li>
                        <li className='footer-item'>
                            <a href="" className='footer-item__link'>Агроному в поміч</a>
                        </li>
                    </ul>
                    <ul className='footer-contact'>
                        <li className='footer-title'>Контакти</li>
                        <li className='footer-call__item'>
                            <img className='footer-phone' src={callIcon} alt=""/>
                            <div className='footer-number'>
                                <p className='footer-number__item'>+38 (067) 115 00 58</p>
                            </div>
                            <a href="" className='footer-link'>Замовити зворотній зв’язок</a>
                        </li>
                        <li className='footer-mail__item'>
                            <img src={mailIcon} alt=""/>
                            <p className='footer-mail'>DAT@gmail.com</p>
                        </li>
                    </ul>
                </ul>
                <img className='footer-img' src={line} alt=""/>
                <div className='verification'>
                    <p className='verification__text'>© 2022 DAT</p>
                </div>
            </footer>

        </div>
    );
};

export default Footer;
import React from 'react';
import './style.css'
import ground from '../../assets/about/ground.jpg';
import leaf from '../../assets/about/leaf.svg';
import Novelties from "../novelties/Novelties";
const AboutUs = () => {
    return (
        <div>
            <main className="about-us">
                <div className="about-us-container">
                    <img className='about-us__img' src={ground} alt=""/>
                    <div className="about-us__text">
                        <div className="about-us__title">
                            <img className='about-us__leaf' src={leaf} alt=""/>
                            <h1 className='about-us__title__text'>Про нас</h1>
                        </div>
                        <div className="about-us__description__text">
                            <p className='about-us__description'>
                                <span className='text-bold-green'>«Компанія ТОВ “ДАМАР АГРОТРЕЙД” </span> — молода команда, яка з’явилась на аграрному ринку у 2020 році.
                                Ми не боїмось труднощів і викликів. Тому навіть складний ковідний період, світова пандемія не стали на
                                заваді успішному старту.
                            </p>
                            <br/>
                            <p className='about-us__description'>
                                Отже, <span className='text-bold-green'>ми — сміливі, ми — драйвові</span>, ми — ті, що розвивають рослинництво та допомагають ставати успішними тисячам вітчизняних аграріїв.
                            </p>
                            <br/>
                            <p className='about-us__description'>
                                <span className='text-bold-green'>Бачення:</span> компанія ТОВ “ДАМАР АГРОТРЕЙД” тримає курс на підвищення престижності, довіри до засобів захисту рослин made in UA. Прагнемо, аби в кожному регіоні України наш споживач мав доступ до якісної продукції та консалтингу від фахівців команди.
                            </p>
                            <br/>
                            <p className='about-us__description'>
                                 <span className='text-bold-green'>Місія:</span> усе продуктове портфоліо, консультативні послуги ТОВ “ДАМАР АГРОТРЕЙД” направлені на підвищення рентабельності рослинництва в мінливих кліматичних умовах України. Також ставимо собі завдання підвищувати обізнаність клієнтів щодо сучасних методів ведення рослинництва...
                            </p>
                        </div>
                        <button className="button">Докладніше</button>
                    </div>
                </div>
                <Novelties />
            </main>
        </div>
    );
};

export default AboutUs;
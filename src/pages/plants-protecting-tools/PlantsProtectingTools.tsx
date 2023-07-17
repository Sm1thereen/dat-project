import React from 'react';
import './style.css';

import NavBar from "../../components/header/ navbar/NavBar";
import ButtonList from "../../components/header/button-list/ButtonList";
import ellipse from '../../assets/plants-protecting-tools/ellipse.svg';
import leftLeaf from '../../assets/plants-protecting-tools/leftLeaf.svg';
import rightLeaf from '../../assets/plants-protecting-tools/rightLeaf.svg';
// Card
import Herbicides  from '../../assets/plants-protecting-tools/card/Herbicides.png'
import Fungicides from '../../assets/plants-protecting-tools/card/Fungicides.png'
import Pollster from '../../assets/plants-protecting-tools/card/Pollster.png'
import Desiccants from '../../assets/plants-protecting-tools/card/Desiccants.png'
import Stainremovers from '../../assets/plants-protecting-tools/card/Removers.png'
import Rodenticides from '../../assets/plants-protecting-tools/card/Rodenticides.png'
import Retardants from '../../assets/plants-protecting-tools/card/Retardants.png'
import Adjuvants from '../../assets/plants-protecting-tools/card/Adjuvants.png'
import Footer from "../../components/footer/Footer";
const PlantsProtectingTools = () => {
    return (
        <div>
            <NavBar/>
            <div className="container">
                <ButtonList />
                <ul className='list-category'>
                    <li className='list-category__item'>
                        <p className='list-category__text'>Головна</p>
                        <img src={ellipse} alt=""/>
                    </li>
                    <li className='list-category__item'>
                        <p className='list-category__text'>Каталог</p>
                        <img src={ellipse} alt=""/>
                    </li>
                    <li className='list-category__item'>
                        <p className='list-category__text bold'>Засоби захисту рослин</p>
                    </li>
                </ul>
                <div className='title-wrapper'>
                    <img src={leftLeaf} alt=""/>
                    <h1 className='title'> Засоби захисту рослин</h1>
                    <img src={rightLeaf} alt=""/>
                </div>
                <div className="card-wrapper">
                    <ul className="card-list">
                        <li className='card-list__item'>
                            <img className='card__img' src={Herbicides} alt=""/>
                            <div className="card-title__wrapper">
                                <p className="card-title">
                                    Гербіциди
                                </p>
                            </div>
                        </li>
                        <li className='card-list__item'>
                            <img className='card__img' src={Fungicides} alt=""/>
                            <div className="card-title__wrapper">
                                <p className="card-title">
                                    Фунгіциди
                                </p>
                            </div>
                        </li>
                        <li className='card-list__item'>
                            <img className='card__img' src={Pollster} alt=""/>
                            <div className="card-title__wrapper">
                                <p className="card-title">
                                    Оприскувач
                                </p>
                            </div>
                        </li>
                        <li className='card-list__item'>
                            <img className='card__img' src={Desiccants} alt=""/>
                            <div className="card-title__wrapper">
                                <p className="card-title">
                                    Десиканти
                                </p>
                            </div>
                        </li>
                        <li className='card-list__item'>
                            <img className='card__img' src={Stainremovers} alt=""/>
                            <div className="card-title__wrapper">
                                <p className="card-title">
                                    Протруювачі
                                </p>
                            </div>
                        </li>
                        <li className='card-list__item'>
                            <img className='card__img' src={Rodenticides} alt=""/>
                            <div className="card-title__wrapper">
                                <p className="card-title">
                                    Родентициди
                                </p>
                            </div>
                        </li>
                        <li className='card-list__item'>
                            <img className='card__img' src={Retardants} alt=""/>
                            <div className="card-title__wrapper">
                                <p className="card-title">
                                    Ретарданти
                                </p>
                            </div>
                        </li>
                        <li className='card-list__item'>
                            <img className='card__img' src={Adjuvants} alt=""/>
                            <div className="card-title__wrapper">
                                <p className="card-title">
                                    Ад’юванти
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="info-wrapper">
                <div className="info-text">
                    <div className="info-title">
                        <img src={leftLeaf} alt=""/>
                        <h1 className='title white'>Засоби захисту рослин</h1>
                    </div>
                    <p className="text-description">
                        Засоби захисту рослин поділяють на чотири основні види: механічні, хімічні, біологічні та агротехнічні. Проте найраціональніше - це їх одночасне, правильне поєднання. Найпоширеніший метод - це хімічний. Існують тисячі різних видів препаратів хімічного захисту. Але не варто їх плутати, а тим більше об′єднувати з хімічними добривами. Методи їх впливу на рослини абсолютно протилежні.
                        <br/>
                        <br/>
                        Необхідно знати і розрізняти хімічні засоби захисту рослин. Адже ці препарати мають суоро визначений об′єкт впливу (збудник хвороби, комахи-шкідники, вид або родина бур′янів).
                        <br/>
                        <br/>
                        Отрутохімікати не терплять халатності. Це той тип препарату, який недостатньо просто розвести у воді і обприскати ним рослини. Якщо отрутохімікати неправильно застосувати, то вони можуть завдати шкоди вам, корисним комахам, урожаю.
                    </p>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default PlantsProtectingTools;
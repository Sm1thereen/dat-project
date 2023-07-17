import React from 'react';
import './style..css'

import seeds from "../../../assets/main-page/banner/seeds.svg";
import sapling from "../../../assets/main-page/banner/sapling.svg";
import fertilizer from "../../../assets/main-page/banner/fertilizer.svg";
import foodGroup from "../../../assets/main-page/banner/fooder-group.svg";
import farmer from "../../../assets/main-page/banner/farmer.svg";

const ButtonList = () => {
    return (
        <div>
            <ul className='banner-list'>
                <li className='banner-list__button'>
                    <button className='button-banner'>
                        <div className="button-banner__content">
                            <img className='button-banner__img' src={seeds} alt=""/>
                            <p className='button-banner__text'>Насіння</p>
                        </div>
                    </button>
                </li>
                <li className='banner-list__button'>
                    <button className='button-banner'>
                        <img className='button-banner__img' src={sapling} alt=""/>
                        <p className='button-banner__text'>Засоби захисту </p>
                    </button>
                </li>
                <li className='banner-list__button'>
                    <button className='button-banner'>
                        <img className='button-banner__img' src={fertilizer} alt=""/>
                        <p className='button-banner__text'>Добрива</p>
                    </button>

                </li>
                <li className='banner-list__button'>
                    <button className='button-banner'>
                        <img className='button-banner__img' src={foodGroup} alt=""/>
                        <p className='button-banner__text'>кормова група</p>
                    </button>

                </li>
                <li className='banner-list__button'>
                    <button className='button-banner'>
                        <img className='button-banner__img' src={farmer} alt=""/>
                        <p className='button-banner__text'>Агроному в поміч</p>
                    </button>
                </li>
            </ul>
        </div>
    );
};

export default ButtonList;
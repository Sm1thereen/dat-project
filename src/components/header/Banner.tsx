import React from 'react';
import seeds from '../../assets/banner/seeds.svg';
import sapling from '../../assets/banner/sapling.svg';
import fertilizer from '../../assets/banner/fertilizer.svg';
import foodGroup from '../../assets/banner/fooder-group.svg';
import farmer from '../../assets/banner/farmer.svg';
import manFarmer from '../../assets/banner/man-banner.jpg'
    const Banner = () => {
    return (
        <div>
                <div className="banner-wrapper">
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
                    <div className="container-info">
                        <div className="main_info">
                            <div className="info-text">
                                <div>
                                    <h1 className="info-title"><span className='text-bold'>Аграрний</span> <br/>інтернет-магазин
                                    </h1>
                                </div>
                                <p className="info-description">Основна сфера діяльності – дистрибуція насіння, засобів
                                    захисту рослин, мінеральних макро - та мікродобрив</p>
                                <button className='button'>Про компанію</button>
                            </div>
                        </div>
                        <img className='img-farmer' src={manFarmer} alt=""/>
                    </div>
            </div>
        </div>
    );
};

export default Banner;
import React from 'react';
import seeds from '../../assets/main-page/banner/seeds.svg';
import sapling from '../../assets/main-page/banner/sapling.svg';
import fertilizer from '../../assets/main-pagebanner/fertilizer.svg';
import foodGroup from '../../assets/main-pagebanner/fooder-group.svg';
import farmer from '../../assets/main-pagebanner/farmer.svg';
import manFarmer from '../../assets/banner/man-banner.jpg'
import ButtonList from "./button-list/ButtonList";
    const Banner = () => {
    return (
        <div>
                <div className="banner-wrapper">
                    <ButtonList/>
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
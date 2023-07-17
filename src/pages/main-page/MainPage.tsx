import React from 'react';
import Header from "../../components/header/Header";
import AboutUs from "../../components/about-us/AboutUs";
import Discount from "../../components/discount/Discount";
import Partners from "../../components/partners/Partners";
import Seeds from "../../components/seeds/Seeds";
import Footer from "../../components/footer/Footer";

const MainPage = () => {
    return (
        <div>
            <Header/>
            <AboutUs />
            <Discount />
            <Partners />
            <Seeds/>
            <Footer />
        </div>
    );
};

export default MainPage;
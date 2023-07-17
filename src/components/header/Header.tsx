import React, {useState} from 'react';
import './style.css'
import line from '../../assets/header/header-line.svg';
import login from '../../assets/header/header-login.svg'
import logo from '../../assets/header/logo.svg';
import searchIcon from '../../assets/header/search-icon.svg';
import phoneIcon from '../../assets/header/phone-icon.svg';
import Banner from "./Banner";
import {Link} from "react-scroll";
import arrow from '../../assets/header/header-arrow.svg';
import NavBar from "./ navbar/NavBar";
import ButtonList from "./button-list/ButtonList";

const Header = () => {
    return (
        <div>
            <header className="header">
                    <NavBar/>
                    <Banner />
            </header>
        </div>
    );
};

export default Header;
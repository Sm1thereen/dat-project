import React from 'react';
import Header from "./components/header/Header";
import AboutUs from "./components/about-us/AboutUs";
import Discount from "./components/discount/Discount";
import Partners from "./components/partners/Partners";
import Seeds from "./components/seeds/Seeds";
import Footer from "./components/footer/Footer";
import {Routes} from "react-router-dom";
import PlantsProtectingTools from "./pages/plants-protecting-tools/PlantsProtectingTools";
import MainPage from "./pages/main-page/MainPage";

function App() {
  return (
    <div className="App">
        <PlantsProtectingTools/>
    </div>

  );
}

export default App;


import React from 'react';
import Header from "./components/header/Header";
import AboutUs from "./components/about-us/AboutUs";
import Discount from "./components/discount/Discount";
import Partners from "./components/Partners/Partners";

function App() {
  return (
    <div className="App">
        <Header/>
        <AboutUs />
        <Discount />
        <Partners />
    </div>

  );
}

export default App;


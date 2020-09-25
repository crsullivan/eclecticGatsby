import React from "react";
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

const Carousel = () => (
    <AwesomeSlider className="carousel">
        <div><img className="carousel-image" src={require("../images/covidtracker.PNG")}></img></div>
        <div><img className="carousel-image" src={require("../images/kPortfolio.PNG")}></img></div>
        <div><img className="carousel-image" src={require("../images/portfolioSnap.PNG")}></img></div>
        <div><img className="carousel-image" src={require("../images/updateddbArch.PNG")}></img></div>
        <div><img className="carousel-image" src={require("../images/portfolioSnip2.PNG")}></img></div>
    </AwesomeSlider>
  )
  
  
  export default Carousel
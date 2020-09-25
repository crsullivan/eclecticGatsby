import React from "react";
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

const Carousel = () => (
    <AwesomeSlider className="carousel">
        <div><img className="carousel-image" src={require("../images/covidtracker.png")}></img></div>
        <div><img className="carousel-image" src={require("../images/kPortfolio.png")}></img></div>
        <div><img className="carousel-image" src={require("../images/portfolioSnap.png")}></img></div>
        <div><img className="carousel-image" src={require("../images/updateddbArch.png")}></img></div>
        <div><img className="carousel-image" src={require("../images/portfolioSnip2.png")}></img></div>
    </AwesomeSlider>
  )
  
  
  export default Carousel
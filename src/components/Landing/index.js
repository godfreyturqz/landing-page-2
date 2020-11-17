import React from 'react'
import imgSrc from "../../images/side-view.png";
import './styles.css'

function Landing() {
    return (
        <div className="landing">
            <div className="img-container">
                <h1>G502</h1>
                <img src={imgSrc} alt="mouse"/>
            </div>
            <div className="texts">
                <h3 className="title">G502 HERO HIGH PERFORMANCE GAMING MOUSE</h3>
                <div className="price">
                    <h3 style={{"text-decoration": "line-through"}}>$ 79.99</h3>
                    <h3>$ 49.99</h3>
                </div>
                <p className="p1">SOLD OUT</p>
                <div className="p2">
                    <p>SPECIFICATIONS</p>
                    <p>SUPPORT</p>
                </div>
            </div>
        </div>
    )
}

export default Landing

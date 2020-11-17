import React, {useEffect} from 'react'
import imgSrc from "../../images/iso-view.png";
import './styles.css'
import aos from 'aos'
import 'aos/dist/aos.css'

function Section2() {
    useEffect(()=> {
        aos.init({ duration: 1000})
    }, [])
    return (
        <div className="section2">
            <div className="texts" data-aos="fade-up">
                <h2>A REBORN HERO</h2>
                <div className="line"></div>
                <p data-aos="fade-up" data-aos-delay="200">
                    G502 HERO features an advanced optical sensor for maximum tracking accuracy, customizable RGB lighting, custom game profiles, from 100 up to 16,000 DPI, and repositionable weights. 
                </p>
            </div>
            <div className="features">
                <div className="section">
                    <h2 className="title">HERO 16K</h2>
                    <h4 className="subtitle">OUR MOST ACCURATE</h4>
                </div>
                <div className="section">
                    <h2 className="title">11 BUTTONS</h2>
                    <h4 className="subtitle">FULLY PROGRAMMABLE</h4>
                </div>
                <div className="section section-special">
                    <h2 className="title">FIVE 3.6G</h2>
                    <h4 className="subtitle">ADJUSTABLE WEIGHTS</h4>
                </div>
            </div>
            <div className="img-container">
                <img src={imgSrc} alt="mouse"/>
            </div>
        </div>
    )
}

export default Section2

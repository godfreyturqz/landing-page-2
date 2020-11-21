import React, {useEffect} from 'react'
import imgSrc from "../../images/side-view.png";
import './styles.css'
import aos from 'aos'
import 'aos/dist/aos.css'

function Landing() {
    useEffect(()=> {
        aos.init({ duration: 1000})
    }, [])
    return (
        <div className="landing">
            <div className="img-container">
                <h1 data-aos="fade-up">G502</h1>
                <img src={imgSrc} alt="mouse"/>
            </div>
            <div className="texts">
                <h3 className="title">G502 HERO HIGH PERFORMANCE GAMING MOUSE</h3>
                <div className="price">
                    <h3 style={{"textDecoration": "line-through"}}>$ 79.99</h3>
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

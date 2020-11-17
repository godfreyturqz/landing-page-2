import React, {useEffect} from 'react'
import './styles.css'
import aos from 'aos'
import 'aos/dist/aos.css'

function Section3(props) {
    useEffect(()=> {
        aos.init({ duration: 1000})
    }, [])
    return (
        <div className="section3" style={{background: props.background}}>
            <div className="img-container">
                <img src={props.image} alt="mouse"/>
            </div>
            <div className="texts">
                <div className="line" data-aos="fade-left" ></div>
                <h2 data-aos="fade-left">{props.title}</h2>
                <p data-aos="fade-left" data-aos-delay="100">{props.description}</p>
            </div>
        </div>
    )
}

export default Section3

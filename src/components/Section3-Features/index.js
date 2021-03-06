import React, {useEffect} from 'react'
import './styles.css'
import aos from 'aos'
import 'aos/dist/aos.css'
import { SectionDiv } from "./styledElements";

function Section3(props) {
    useEffect(()=> {
        aos.init({ duration: 1000})
    }, [])
    return (
        <SectionDiv 
        className="section3" 
        style={{background: props.background}} 
        imgOrientation={props.imgOrientation}>

            <div className="img-container">
                <img src={props.image} alt="mouse"/>
            </div>
            <div className="texts">
                <div className="line" data-aos="fade-up"></div>
                <h2 data-aos="fade-up">{props.title}</h2>
                <p data-aos="fade-up" data-aos-delay="100">{props.description}</p>
            </div>
            
        </SectionDiv>
    )
}

export default Section3

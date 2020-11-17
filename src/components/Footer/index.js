import React from 'react'
import './styles.css'


function FooterLinks(props) {
    return <p><a href="/">{props.title}</a></p>
}

function Footer() {
    return (
        <div className="footer">
            <div className="links">
                <div>
                    <FooterLinks title="ABOUT"/>
                    <FooterLinks title="CONTACT"/>
                    <FooterLinks title="CAREERS"/>
                </div>
                <div>
                    <FooterLinks title="PRIVACY + SECURITY"/>
                    <FooterLinks title="SITEMAP"/>
                    <FooterLinks title="INVESTORS"/>
                </div>
                <div>
                    <FooterLinks title="TERMS OF USE"/>
                    <FooterLinks title="SUSTAINABILITY"/>
                    <FooterLinks title="PRESS"/>
                </div>
                <div>
                    <FooterLinks title="RETURN POLICY"/>
                    <FooterLinks title="STUDENT DISCOUNT"/>
                    <FooterLinks title="ACCESSIBILITY"/>
                    <FooterLinks title="PARTNER DEVELOPER LAB"/>
                </div>
            </div>
            <div className="subscribe">
                <input type="email" placeholder="EMAIL ADDRESS*"/>
                <button>SUBSCRIBE</button>
                <div className="checkbox">
                    <input type="checkbox" id="checkbox"/>
                    <label htmlFor="checkbox" >Yes, I want to receive emails about products, news, and more from Logitech G*</label>
                </div>
            </div>
            <p className="credits">© 2020 Logitech. All rights reserved</p>
        </div>
    )
}


export default Footer
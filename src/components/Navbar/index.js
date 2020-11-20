import React from 'react'
import './styles.css'
import imgSrc from "./../../images/logitech.png";
import { FaBars, FaSearch } from 'react-icons/fa';
import { FiShoppingCart } from 'react-icons/fi';

function Navbar() {
    return (
        <div className="navbar-container">
            <div className="bars">
                <FaBars/>
            </div>
            <div className="logo-container">
                <a href="/">
                    <img src={imgSrc} alt="logo"/>
                </a>
            </div>
            <div className="right">
                <FiShoppingCart className="cart"/>
                <FaSearch className="search"/>
            </div>
            
        </div>
    )
}

export default Navbar

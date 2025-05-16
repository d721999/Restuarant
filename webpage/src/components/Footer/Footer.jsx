import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
    return (
        <div className='footer' id='footer'>
            <div className="footer-content">
                <div className="footer-content-left">
                    <img className='logo-img' src={assets.logo} alt="" />
                    <p>Welcome to FOOD HUB Your One-Stop Destination for Deliciousness!

                        At FOOD HUB, we believe that food is more than just sustenance—it’s an experience that brings people together, sparks joy, and nourishes the soul. Whether you're a foodie looking for the best local eats, a home cook searching for fresh ingredients</p>
                    <div className="footer-social-icons">
                        <img src={assets.facebook_icon} alt="" />
                        <img src={assets.twitter_icon} alt="" />
                        <img src={assets.linkedin_icon} alt="" />
                    </div>

                </div>
                <div className="footer-content-center">
                    <h2>COMPANY</h2>
                    <ul>
                        <li>Hme</li>
                        <li>About us</li>
                        <li>Delivery</li>
                        <li>Privacy policy</li>
                    </ul>

                </div>
                <div className="footer-content-right">
                    <h2>Contact-Us</h2>
                    <ul>
                        <li>+91-8219588688</li>
                        <li>thakur721998@gmail.com</li>
                    </ul>

                </div>
            </div>
            <hr />
            <p className="footer-copyright">Copyright 2025 FoodHub.com - All Rights Reserved</p>



        </div>
    )
}

export default Footer
import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} width="200px" height="200px" alt='' />
          <p>Food delivery is a courier service in which a restaurant, store, or independent food-delivery company delivers food to a customer.</p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" link=""/>
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>Company</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+91-8949-685017</li>
            <li>contact@food-delivery.com</li>
          </ul>
        </div>
      </div>
      <hr/>
      <p classname="footer-copyright">Copyright 2024 Food-Delivery.com - All Right Reserved</p>
    </div>
  )
}

export default Footer

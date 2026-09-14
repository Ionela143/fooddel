import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer' >
      <div className='footer-content'>
        <div className='footer-content-left'>
        <img src={assets.logo} alt="" />
        <p>We believe great food should be convenient, affordable, and enjoyable. Our menu features a diverse selection of carefully prepared dishes designed to satisfy every taste. Whether you're looking for a quick lunch, a family dinner, or a special treat, you'll find plenty of delicious options to choose from. Order online in just a few clicks and let us bring fresh, flavorful meals directly to you.</p>
       <div className='footer-social-icons'>
        <img src={assets.facebook_icon} alt="" />
        <img src={assets.twitter_icon} alt="" />
        <img src={assets.linkedin_icon} alt="" />
       </div>
       
        </div>
        <div className='footer-content-center'>
        <h2>COMPANY</h2>
        <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
        </ul>
        </div>

        <div className='footer-content-right'>
        <h2>GET IN TOUCH</h2>
        <ul>
            <li>+40 700 000 000</li>
            <li>contact@tomato.com</li>
        </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer

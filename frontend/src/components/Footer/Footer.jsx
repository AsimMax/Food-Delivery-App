import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
     <div className="footer-content">
        <div className="footer-content-left">
        <img src={assets.logo} alt="" />
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis fugit nobis, numquam nostrum eligendi ducimus adipisci unde minima illo quasi molestias enim, quam suscipit consequatur qui! Hic, veniam eveniet perspiciatis nemo temporibus recusandae nobis eos nihil velit vitae nostrum fuga?</p>
        <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
        </div>
        </div>
        <div className="footer-content-center">
        <h2>COMPANY</h2>
        <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy policy</li> 
        </ul>
        </div>
        <div className="footer-content-right">
        <h2>GET IN TOUCH</h2>
        <ul>
            <li>123 Main Street, City, Country</li>
            <li>info@tomato.com</li>
            <li>+1 (123) 456-7890</li>
        </ul>
        </div>
     </div>
     <hr />
     <p className='footer-copyright'>© 2026 Tomato. All rights reserved.</p>
    </div>
  )
}

export default Footer

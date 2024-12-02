import React from 'react';
import './Footer.css';
import Footer_Logo from '../Barcelona_Assets/OIP.jpg';
import Instagram from '../Barcelona_Assets/instagram_icon.png';
import Pintester_Icon from '../Barcelona_Assets/pintester_icon.png';
import WhatsUp_Icons from '../Barcelona_Assets/whatsapp_icon.png';
const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-logo'>
            <img src={Footer_Logo} alt='' className='LOGO'/>
            <p> Barcelona_Store</p>
        </div>
        <ul className='footer-links'>
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className='footer-social-icon'>
            <div className='footer-icons-container'>
                <img src={Instagram} alt=''/>
            </div>
            <div className='footer-icons-container'>
                <img src={Pintester_Icon} alt=''/>
            </div>
            <div className='footer-icons-container'>
                <img src={WhatsUp_Icons} alt=''/>
            </div>
        </div>
        <div className='footer_copyrights'>
            <hr />
            <p>Copyright @2023 - All Rights Reserved.</p>
        </div>
    </div>
  )
}

export default Footer;

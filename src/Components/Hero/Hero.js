import React from 'react';
import './Hero.css';
//import Hand_Icon from '../Barcelona_Assets/hand_icon.png';
import Arrow_Icon from '../Barcelona_Assets/arrow.png';
//import Hero_Img from '../Barcelona_Assets/hero_image.png';
import Lamine from '../Barcelona_Assets/OIP.jpg';
const Hero = () => {
  return (
    <div className='hero'>
        <div className='hero-left'>
            {/* <h2>NEW ARRIVALS ONLY</h2> */}
            <div>
                <div className='hero-hand-icon'>
                    {/* <p>new</p> */}
                    {/* <img src={Hand_Icon} alt =""/> */}
                </div>
                <p>newwwwww collections</p>
                <p>for everyone</p>
            </div>
            <div className='hero-latest-btn'>
                <div>Latest Collection</div>
                 <img src={Arrow_Icon} alt=''/>
            </div>
        </div>
        <div className='hero-right'>
        <img src={Lamine} alt=''/>
        </div>  
    </div>
  )
}

export default Hero;
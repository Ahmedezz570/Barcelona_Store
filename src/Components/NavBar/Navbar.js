import React , {useState} from 'react';
import './Navbar.css';
import Logo from '../Barcelona_Assets/OIP.jpg';
import Cart_Icon from'../Barcelona_Assets/cart_icon.png';
import { Link } from 'react-router-dom';

function Navbar() {
    const [menu , setMenu] = useState("shop");
    return (
      <div className='navbar'>
  
         <div className='nav-logo'>
              <img src={Logo} alt='' className='LOGO'/>
              <p>Barcelona_Store</p>
          </div>        
          <ul className='nav-menu'>
              <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration:"none"}}to='/' >Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
              <li onClick={()=>{setMenu("mens")}}><Link style={{textDecoration:"none"}} to='/Season_2025'>Season_2025</Link>{menu==="mens"?<hr/>:<></>}</li>
              <li onClick={()=>{setMenu("womens")}}><Link style={{textDecoration:"none"}} to='/Another_Seasons'>Another_Seasons</Link>{menu==="womens"?<hr/>:<></>}</li>
              <li onClick={()=>{setMenu("kids")}}><Link style={{textDecoration:"none"}} to='/Special'>Special</Link>{menu==="kids"?<hr/>:<></>}</li>
          </ul>
          <div className='nav-login-cart'>
              <Link to='/login'><button>Login</button></Link>
              <Link to='/cart'><img src={Cart_Icon} alt=''/></Link>
              <div className='nav-cart-count'>0</div>
          </div>
      </div>
    )
}

export default Navbar
import React,{useState} from 'react';
import '../styles/Navbar.css'
import logoLight from '../images/logoLight.svg'
import { FaBars } from 'react-icons/fa';
// import {NavLinks}
function Navbar() {
    const [nav,setNav] = useState(false)
  return (
      <header>
          <nav className={`Navbar-top ${nav ? 'active' : ''}`}>
        <p>
            <img src={logoLight} alt="logo"/>
            <span className='Nav-bars' onClick={ e => setNav(!nav)}>
                <FaBars />
            </span>
        </p>
        <aside>
        <ul>
            <li>
                <a href='#'>Features</a>
            </li>
            <li>
                <a href='#'>Pricing</a>
            </li>
            <li>
                <a href='#'>Resources</a>
            </li>
        </ul>
       <ul>
            <li>
                <a href='#'>Login</a>
            </li>
            <li className='Navbar-signup'>
                <a href='#'>Sign up</a>
            </li>
       </ul>
        </aside>
  </nav>
      </header>
  );
}

export default Navbar;

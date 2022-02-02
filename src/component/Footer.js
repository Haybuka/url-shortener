import React from 'react';
import logo from '../images/logo.svg'
import faceBook from '../images/icon-facebook.svg'
import insta from '../images/icon-instagram.svg'
import pinT from '../images/icon-pinterest.svg'
import tweet from '../images/icon-twitter.svg'

import '../styles/Footer.css'
function Footer() {
  return (<footer className='Footer'>
     <section>
     <p className='Footer-logo'>
        <img src={logo} alt="logo" />
      </p>
      <aside>
          <p>Features</p>
          <ul>
            <li>
                <a href="#">
                 Link Shortening
                </a>
            </li>
            <li>
                <a href="#">
                Branded Links
                </a>
            </li>
            <li>
                <a href="#">
                Analytics
                </a>
            </li>
          </ul>
      </aside>
      <aside>
          <p>Resources</p>
          <ul>
            <li>
                <a href="#">
                Blog
                </a>
            </li>
            <li>
                <a href="#">
               Developers
                </a>
            </li>
            <li>
                <a href="#">
                Support
                </a>
            </li>
          </ul>
      </aside>
      <aside>
          <p>Company</p>
          <ul>
            <li>
                <a href="#">
                About
                </a>
            </li>
            <li>
                <a href="#">
               Our Team
                </a>
            </li>
            <li>
                <a href="#">
               Careers
                </a>
            </li>
          </ul>
      </aside>
      <aside>
          <ul className='Footer-icons'>
              <li>
                  {/* ftpi */}
                <img src={faceBook} alt="social link"  />
              </li>
              <li>
                  {/* ftpi */}
                <img src={tweet}  alt="social link" />
              </li>
              <li>
                  {/* ftpi */}
                <img src={pinT} alt='social link'/>
              </li>
              <li>
                  {/* ftpi */}
                <img src={insta} alt='social link' />
              </li>
          </ul>
      </aside>
     </section>
  </footer>);
}

export default Footer;
// 740838

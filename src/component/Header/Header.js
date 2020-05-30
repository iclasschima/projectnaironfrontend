import React from 'react';

import { Link } from 'react-router-dom'


import './Header.css'


function Header() {
    return <div className="header">
           {/* <header className="header"> */}
    <div class="container">

      <div id="logo" className="pull-left">
        <h1><a href="#hero">Nairon</a></h1>
      </div>

      <nav className="nav-menu-container">
        <ul className="nav-menu">
          <li><a href="#portfolio">Login</a></li>
          <li><button variant="outline-info">Create account</button>{' '}</li>

          <li className="menu-has-children"><Link to=""> 
           <button variant="outline-primary">English</button>{' '}
            </Link>
            <ul>
              <li><Link to="#">Drop Down 1</Link></li>
              <li className="menu-has-children"><Link to="#">Locals</Link>
                <ul>
                  <li><Link to="#">Yoruba</Link></li>
                  <li><Link to="#">Igbo</Link></li>
                  <li><Link to="#">Hausa</Link></li>
                </ul>
              </li>
              <li><Link to="#">French</Link></li>
              <li><Link to="#">German</Link></li>
              <li><Link to="#">Dutch</Link></li>
            </ul>
          </li>
          <li><Link to="#contact">Contact Us</Link></li>
        </ul>
      </nav>
    </div>
  {/* </header> */}
</div>
    
}

export default Header
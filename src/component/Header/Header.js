import React from 'react';
import './Header.css'


function Header() {
    return <div className="header">
           {/* <header className="header"> */}
    <div class="container">

      <div className="logo" className="pull-left">
        <h1><a href="#hero">Nairon</a></h1>
      </div>

      <nav className="nav-menu-container">
        <ul className="nav-menu">
          <li><a href="#portfolio">Login</a></li>
          <li><Button variant="outline-info">Create account</Button>{' '}</li>

          <li className="menu-has-children"><a href=""> 
           <Button variant="outline-primary">English</Button>{' '}
            </a>
            <ul>
              <li><a href="#">Drop Down 1</a></li>
              <li className="menu-has-children"><a href="#">Locals</a>
                <ul>
                  <li><a href="#">Yoruba</a></li>
                  <li><a href="#">Igbo</a></li>
                  <li><a href="#">Hausa</a></li>
                </ul>
              </li>
              <li><a href="#">French</a></li>
              <li><a href="#">German</a></li>
              <li><a href="#">Dutch</a></li>
            </ul>
          </li>
          <li><a href="#contact">Contact Us</a></li>
        </ul>
      </nav>
    </div>
  {/* </header> */}
</div>
    
}

export default Header
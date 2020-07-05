import React from 'react';


import './Section6.css'


function Section6() {
    return <div className="header">
           {/* <header className="header"> */}
    <div className="container">

      <div className="logo" className="pull-left">
        <h6><a href="#hero">Try nairon today</a></h6>
        <h4>Connect to your customer </h4>
        <h4>right now.</h4>

        <h4>Newsletter</h4>
        <p>leave your email to receive the letter</p>
        <form>
        <input type="email" className="form-control" id="email" />

        </form>

      </div>

      <nav className="nav-menu-container">
        <ul className="nav-menu">
          <li><button variant="outline-info">Create account</button>{' '}</li>

        </ul>
      </nav>
    </div>
    <section id="facts">
      <div className="container wow fadeIn">
     
        <div className="row counters">

  				<div className="col-lg-3 col-6 text-center">
            <span data-toggle="counter-up">232</span>
            <h6>Products</h6>
            <p>outbound Messages</p>
            <p>Team index</p>
  				</div>

          <div className="col-lg-3 col-6 text-center">
            <span data-toggle="counter-up">521</span>
            <h6>Features</h6>
            <p>Business Messanger</p>
  				</div>

          <div className="col-lg-3 col-6 text-center">
            <span data-toggle="counter-up">1,463</span>
            <h6>FAQ</h6>
            <p>Account</p>
            <p>customer</p>
            <p>careers</p>
  				</div>

          <div className="col-lg-3 col-6 text-center">
            <span data-toggle="counter-up">15</span>
            <h6>Company</h6>
            <p>contact us</p>
            <p>Terms</p>
            <p>Privacy</p>
            <p>Security</p>
  				</div>
          <div className="col-lg-3 col-6 text-center">
            <span data-toggle="counter-up">15</span>
            <h6>Resources</h6>
            <p>Blog</p>
            <p>Security</p>
  				</div>
         <div className="col-lg-3 col-6 text-center">
            <span data-toggle="counter-up">15</span>
            <h6>Services</h6>
            <p>Peer resources</p>
            <p>Partners</p>
  				</div>


  			</div>

      </div>
    </section>
  {/* </header> */}
</div>
    
}

export default Section6
import React from 'react';

import './section1.css'


function Section1() {
    return (
        <section className="hero">
        <div className="hero-container">
          <h2>Generate Demand for your</h2>
          <h2>Products and Services</h2>
          <p>We help advertisers connect to their target customers</p>
          <p>across multiple platforms anytime - anywhere</p>
          <div className="col-auto">
      {/* <label class="sr-only" for="inlineFormInputGroup">Username</label> */}
      <div className="input-group mb-2">
        <div className="input-group-prepend">
          <div className="input-group-text">@</div>
        </div>
        <input type="text" className="form-control" id="inlineFormInputGroup" placeholder="Enter your email" />
      </div>
    </div>
          <a href="#about" className="btn-get-started">Get Started</a>
        </div>
      </section>
    )
}

export default Section1

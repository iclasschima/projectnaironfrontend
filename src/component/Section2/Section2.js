import React from  'react';
 import './Section2.css';

import logo7 from '../../img/Group 54.png';
import logo8 from '../../img/Group 55.png';
import logo9 from '../../img/Group 56.png';


function Section2() {
  return (
    <section id="services">
    <div class="container wow fadeIn">
      <div class="section-header">
        <h3 class="section-title">Create.Curate.Convert</h3>
        <p class="section-description"> its our mission to help in real time conversion measurement*</p>
        <p class="section-description"> Connecting with customers is more important than ever*</p>

      </div>
      <div class="row">
        <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.2s">
          <div class="box">
            <div class="icon"><a href=""><i class="fa fa-desktop"></i></a></div>
            <h4 class="title"><img src={logo7} className="App-logo" alt="Group54" /></h4>
            <h5 class="description">Trusted and Secure</h5>

            <p class="description">We store the vast majority of the digital assets</p>
            <p class="description">in secure offline cold storage</p>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.4s">
          <div class="box">
            <div class="icon"><a href=""><i class="fa fa-bar-chart"></i></a></div>
            <h4 class="title"><img src={logo8} className="App-logo" alt="Group55"/></h4>
            <h5 class="description">Delightful Experience</h5>
            <p class="description">Our charting tools and simple ordering process will</p>
            <p class="description">get you advertising from day one</p>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.6s">
          <div class="box">
            <div class="icon"><a href=""><i class="fa fa-paper-plane"></i></a></div>
            <h4 class="title"><img src={logo9} className="App-logo" alt="Group56" /></h4>
            <h5 class="description">Beginner Friendly</h5>
            <p class="description">We offer an intuitive, beginner friendly</p>
            <p class="description">interface and 247 support</p>
          </div>
        </div>
      </div>

    </div>
  </section>
  )
}

export default Section2
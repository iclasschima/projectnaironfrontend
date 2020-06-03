import React from 'react';

import './Section3.css';
//import { withRouter } from 'react-router-dom';

import logo10 from '../../img/Group 74.png';
import logo11 from '../../img/Group 75.png';
import logo12 from '../../img/Group 76.png';


function Section3() {
    return (
    <div className="section-header">
    <h3 className="section-title">Starting is Simple</h3>
    <p className="section-description"> start advertising on Nairon with these 3 easy steps</p>

    <h3 className="section-title">Create</h3>
    <p className="section-description">Please provide your full name, valid email address and input secure password</p>
    <img src={logo10} className="App-logo" alt="Group74" />

    <hr style={{
        color: 'white',
        margin: 10,
        padding: 5
    }} />

    <h3 className="section-title">Curate</h3>
    <p className="section-description">Start advertising in native, Social-media Display, Rich media and CTV contents</p>
    <p className="section-description"> Easy to use</p>

    <img src={logo11} className="App-logo" alt="Group75" />

    <hr style={{
        color: 'white',
        margin: 10,
        padding: 5
    }} />


    <h3 className="section-title">Convert</h3>
    <p className="section-description"> its our mission to help in real time conversion measurement*</p>
    <p className="section-description"> Connecting with customers is more important than ever*</p>

    <img src={logo12} className="App-logo" alt="Group76" />

  </div>
    )
}
export default Section3
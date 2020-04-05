import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Image from "../../src/LoginFull1.png";
import "../Login.css";

class Login extends Component {
  // state = {};
  render() {
    return (
      <div>
        {/*Navbar*/}
        <div class="topnav">
          <a class="active">English</a>
          <div class="topnav-right">
            {/* <li>Don't have an account yet?</li> */}
            <a>Don't have an account yet?</a>
            <a href="/signup">
              <button className="signup">Sign up</button>
            </a>
            <a className="wow" href="#about">
              <u>Need help</u>
            </a>
          </div>
        </div>

        {/*page icon */}
        <div className="yo">
          <div className="image">
            <img src={Image} />
          </div>
        </div>
        <div className="Gratefull">
          <h1>How who's is this?</h1>
        </div>

        {/*Login Form*/}
        <div className="form">
          <form>
            <div>
              <label htmlFor="em">Email address</label>
              <br></br>
              <input type="email" id="em" aria-describedby="emailHelp" />
            </div>

            <div className="girl">
              <label htmlFor="ps">Password</label>
              <br></br>
              <input type="password" id="ps" />
              <small id="emailHelp" class="form-text text-muted">
                <a href="#about">
                  <u>I forgot my password</u>
                </a>
              </small>
            </div>
          </form>
          <div className="button">
            <input type="submit" id="search" value="Login to ProjectNairon" />
          </div>
          {/* <div className="cooltext">
            <h2>
              <span>or</span>
            </h2>
          </div> */}
        </div>
      </div>
    );
  }
}

export default Login;

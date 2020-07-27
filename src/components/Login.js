import React from "react";
import "../Styles/login.scss";
import logo from "../img/yc__ 3.png";
import { Divider } from "semantic-ui-react";
import { useHistory } from "react-router-dom";

export default function Login() {
  const history = useHistory();

  return (
    <div className="login container-fluid">
      <div className="row justify-content-center">
        <div className="col-md-4 login-container">
          <div className="logo-container">
            <img src={logo} className="logo" />
          </div>  
          <div className="form-container">
            <div className="text-center">
              <h5>login to your account</h5>
            </div>
            <form>
              <button className="form-control google-btn">
                <img
                  class="google-icon"
                  src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                />
                Log in with Google
              </button>

              <button className="form-control fb-btn">
                <img
                  class="google-icon"
                  src="https://upload.wikimedia.org/wikipedia/commons/c/c2/F_icon.svg"
                />
                Log in with Facebook
              </button>

              <Divider className="divider" horizontal>Or</Divider>
              
            <button className="form-control email-btn" onClick={() => history.push("/login-with-email")}>
                Log in with Email
            </button>
            
            <div className="form-footer text-center">
                <span>New to yconnector? <a href="/signup"> sign up </a></span>
            </div>
              
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

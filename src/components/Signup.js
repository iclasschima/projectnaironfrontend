import React from "react";
import "../Styles/signup.scss";
import logo from "../img/yc__ 3.png";
import { Divider } from "semantic-ui-react";
import { useHistory } from "react-router-dom"

export default function Signup() {

  const history = useHistory()

  return (
    <div className="signup container-fluid">
      <div className="row justify-content-center">
        <div className="col-md-4 signup-container">
          <div className="logo-container">
            <img src={logo} className="logo" />
          </div>
          <div className="form-container">
            <div className="text-center">
              <h5>create an account</h5>
              <p>Connect with customers - Better and Faster</p>
            </div>
            <form>
              <button className="form-control google-btn">
                <img
                  class="google-icon"
                  src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                />
                Sign up with Google
              </button>

              <button className="form-control fb-btn">
                <img
                  class="google-icon"
                  src="https://upload.wikimedia.org/wikipedia/commons/c/c2/F_icon.svg"
                />
                Sign up with Facebook
              </button>

              <Divider className="divider" horizontal>
                Or
              </Divider>

              <button className="form-control email-btn" onClick={e => history.push("/create-account")}>
                Sign up with Email
              </button>

              <div className="form-footer text-center">
                <span>
                  Already signed up? <a href="/login"> log in </a>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

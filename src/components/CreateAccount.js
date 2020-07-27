import React from "react";
import "../Styles/create-account.scss";
import logo from "../img/yc__ 3.png";
import TextField from "@material-ui/core/TextField";
import { useHistory } from "react-router-dom";

export default function CreateAccount() {
  const history = useHistory()
  return (
    <div className="create-account container-fluid">
      <div className="row justify-content-center">
        <div className="col-md-4 create-account-container">
          <div className="logo-container">
            <img src={logo} className="logo" />
          </div>
          <div className="form-container">
            <div className="text-center">
              <h5>create new account</h5>
            </div>
            <form>
              <TextField label="Email address" variant="outlined" fullWidth />

              <TextField
                label="Phone number"
                type="number"
                variant="outlined"
                fullWidth
              />

              <TextField
                label="Password"
                type="password"
                variant="outlined"
                fullWidth
              />
              <button className="form-control email-btn" onClick={() => history.push("/login-with-email")}>
                Get Started
              </button>

              <div className="form-footer text-center">
                <span>
                  By signing up, you agree to yconnector's Terms of Services and
                  Privacy Policy
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

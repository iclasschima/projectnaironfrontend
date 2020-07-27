import React from "react";
import "../Styles/login-with-email.scss";
import logo from "../img/yc__ 3.png";
import TextField from "@material-ui/core/TextField";
import { useHistory } from "react-router-dom";
import toast from "react-toastify"

export default function LoginWithEmail() {

  const history = useHistory()

  return (
    <div className="login-with-email container-fluid">
      <div className="row justify-content-center">
        <div className="col-md-4 login-with-email-container">
          <div className="logo-container">
            <img src={logo} className="logo" />
          </div>
          <div className="form-container">
            <div className="text-center">
              <h5>Welcome back!</h5>
            </div>
            <form>
              <TextField label="Email address" variant="outlined" fullWidth />

              <TextField
                label="Password"
                type="password"
                variant="outlined"
                fullWidth
              />

              <div className="text-right forgotten-password pr-1">
                <span onClick={() => history.push("/request-reset-password")}>Forgotten Password?</span>
              </div>
              <button className="form-control email-btn"
                onClick={() => {
                  history.push("/dashboard")
                }}>Log in</button>

              <div className="form-footer text-center">
                <span></span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

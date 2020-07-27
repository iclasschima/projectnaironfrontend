import React from "react";
import "../Styles/reset-password.scss";
import logo from "../img/yc__ 3.png";
import TextField from "@material-ui/core/TextField";
import { useHistory } from "react-router-dom";

export default function ResetPassword() {
  const history = useHistory();

  return (
    <div className="reset-password container-fluid">
      <div className="row justify-content-center">
        <div className="col-md-4 reset-password-container">
          <div className="logo-container">
            <img src={logo} className="logo" />
          </div>
          <div className="form-container">
            <div className="text-center">
              <h5>Reset password</h5>
              <p>Hi Clark, enter your new password to continue</p>
            </div>
            <form>
              <TextField label="New Password" variant="outlined" fullWidth />

              <TextField
                label="Confirm Password"
                variant="outlined"
                fullWidth
              />

              <button
                className="form-control email-btn"
                onClick={() => history.push("/login-with-email")}
              >
                Change Password
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

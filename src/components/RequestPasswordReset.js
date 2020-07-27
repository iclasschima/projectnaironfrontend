import React from "react";
import "../Styles/reset-password.scss";
import logo from "../img/yc__ 3.png";
import TextField from "@material-ui/core/TextField";
import { useHistory } from "react-router-dom";

export default function RequestPasswordReset() {
  const history = useHistory();

  return (
    <div className="reset-password container-fluid">
      <div className="row justify-content-center">
        <div className="col-md-4 reset-password-container">
          <div className="logo-container">
            <img src={logo} className="logo" />
          </div>
          <div className="form-container request-form">
            <div className="text-center">
              <h5>Request Password Reset</h5>
            </div>
            <form>
              <TextField label="Email address" variant="outlined" fullWidth />

              <button
                className="form-control email-btn"
                onClick={() => history.push("/reset-password")}
              >
                Request Reset
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

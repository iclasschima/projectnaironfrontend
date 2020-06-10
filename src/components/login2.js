import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
//import FormControlLabel from "@material-ui/core/FormControlLabel";
//import Checkbox from "@material-ui/core/Checkbox";
//import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
//import Box from "@material-ui/core/Box";
//import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import naironLogo from "../img/NAIRON.png";
import "react-phone-input-2/lib/bootstrap.css";
//import ReactPhoneInput from "react-phone-input-2";
import DropdownExampleSearchDropdown from "./dropdown";
import "../Design/SignIn.css";
import googleicon from "../img/googleicon.png";
import facebooklogo from "../img/alaajo-facebook.png";
import naironlogo from "../img/Vector.png";

import { connect } from "react-redux";
import { userActions } from "../_actions";

const styles = (theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(5),
    // marginBottom: theme.spacing(20),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    // backgroundColor: "red",
  },
  avatar: {
    // margin: theme.spacing(1),
    marginBottom: theme.spacing(5),
    width: 220,
    // position: "absolute",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  footer: {
    padding: theme.spacing(0, 0),
    marginTop: "auto",
    backgroundColor: "#B670D3",
    // theme.palette.type === "light"
    //   ? theme.palette.grey[200]
    //   : theme.palette.grey[800],
  },
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  },
});

const BootstrapButton = withStyles({
  root: {
    // width: 50,
    boxShadow: "none",
    textTransform: "none",
    fontSize: 16,
    padding: "6px 12px",
    border: "3px solid",
    lineHeight: 2.5,
    // backgroundColor: "#B66FD3",
    borderColor: "#eaecee ",
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:hover": {
      backgroundColor: "grey",
      // borderColor: "",
      boxShadow: "none",
    },
    "&:active": {
      boxShadow: "none",
      backgroundColor: "grey",
      // borderColor: "#B66FD3",
    },
    "&:focus": {
      boxShadow: "0#B66FD3",
    },
  },
})(Button);

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        email: "",
        password: "",
        phoneNumber: "",
      },
      submitted: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    const { user } = this.state;
    this.setState({
      user: {
        ...user,
        [name]: value,
      },
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    this.setState({ submitted: true });
    const { user } = this.state;
    if (user.email && user.password && user.phoneNumber) {
      this.props.register(user);
    }
  }

  componentDidMount() {
    document.body.style.backgroundColor = "#B670D3";
  }
  render() {
    const { classes } = this.props;
    //const { registering } = this.props;
    const { user, submitted } = this.state;
    console.log(this.state);

    return (
      <React.Fragment>
        <div className={classes.root}>
          <Container
            component="main"
            // style={{ backgroundColor: "red" }}
            maxWidth="xl"
          >
            <div className={classes.paper}>
              {/* <h1>this text will auto size with the screen</h1> */}
              <div>
                <Avatar
                  className={classes.avatar}
                  src={naironlogo}
                  variant="square"
                >
                  {/* <LockOutlinedIcon /> */}
                </Avatar>
              </div>
              <Container
                maxWidth="xs"
                style={{
                  backgroundColor: "white",
                  // paddingLeft: 10,
                  // paddingRight: 10,
                }}
              >
                <CssBaseline />
                <div className={classes.paper}>
                  <Typography component="h1" variant="h5">
                    Log in to your account
                  </Typography>
                  {/* <Typography component="label" variant="p">
                    All your advertising needs met in one place
                  </Typography> */}

                  <form
                    className={classes.form}
                    noValidate
                    onSubmit={this.handleSubmit}
                  >
                    <div
                      style={{
                        // backgroundColor: "black",
                        alignItems: "center",
                        paddingLeft: 20,
                        paddingRight: 20,
                      }}
                    >
                      <div>
                        {/* <div
                          style={{
                            position: "absolute",
                            paddingTop: 12,
                            paddingLeft: 5,
                          }}
                        >
                          <Avatar
                            alt="gicon"
                            src={googleicon}
                            className={classes.small}
                          ></Avatar>
                        </div> */}

                        <BootstrapButton
                          type="submit"
                          variant="outlined"
                          color="black"
                          fullWidth
                          // startIcon={<naironlogo />}
                        >
                          Log in with Google.{" "}
                        </BootstrapButton>
                      </div>
                      <div style={{ paddingTop: 20, paddingBottom: 10 }}>
                        {/* <div
                          style={{
                            position: "absolute",
                            paddingTop: 12,
                            paddingLeft: 5,
                          }}
                        >
                          <Avatar
                            alt="icon"
                            // variant="square"
                            src={facebooklogo}
                            className={classes.small}
                          ></Avatar>
                        </div> */}
                        <BootstrapButton
                          type="submit"
                          variant="outlined"
                          color="black"
                          fullWidth
                          // startIcon={<CloudUploadIcon />}/
                          // className={classes.facebook}
                        >
                          Log in with Facebook.{" "}
                        </BootstrapButton>
                      </div>

                      <div style={{ padding: 20 }}>
                        <p
                          style={{
                            textAlign: "center",
                            borderBottomStyle: "solid",
                            borderBottomColor: "#eaecee ",
                            lineHeight: "0.1em",
                            margin: "10px 0 20px",
                          }}
                        >
                          <span
                            style={{
                              backgroundColor: "#fff",
                              padding: "0 10px",
                            }}
                          >
                            OR
                          </span>
                        </p>
                      </div>
                      <Grid container spacing={4}>
                        <Grid item xs={12}>
                          <label style={{ fontSize: 15 }}>Email</label>

                          <TextField
                            variant="outlined"
                            required
                            fullWidth
                            id="email"
                            name="email"
                            autoComplete="email"
                            value={user.email}
                            onChange={this.handleChange}
                          />
                          {submitted && !user.email && (
                            <div
                              className="help-block"
                              style={{ color: "red" }}
                            >
                              Email Name is required
                            </div>
                          )}
                        </Grid>

                        <Grid item xs={12}>
                          <label style={{ fontSize: 15 }}>Password</label>{" "}
                          <TextField
                            variant="outlined"
                            required
                            fullWidth
                            name="password"
                            type="password"
                            id="password"
                            value={user.password}
                            onChange={this.handleChange}
                            autoComplete="current-password"
                          />
                          {submitted && !user.password && (
                            <div
                              className="help-block"
                              style={{ color: "red" }}
                            >
                              Password is required
                            </div>
                          )}
                        </Grid>

                        <Grid item xs={12}>
                          <BootstrapButton
                            type="submit"
                            variant="contained"
                            // color="primary"
                            style={{
                              backgroundColor: "#7EB1D8",
                              border: "none",
                              color: "white",
                            }}
                            fullWidth
                          >
                            Log in.{" "}
                          </BootstrapButton>
                        </Grid>
                      </Grid>

                      <Grid
                        // container
                        // justify="flex-end"
                        container
                        spacing={2}
                        style={{ marginTop: 15 }}
                      >
                        <Grid item xs={12}>
                          {/* <Typography>
                      <Link href="#" variant="body2">
                        By signing up, you agree to ProjectNairon's
                      </Link>
                      </Typography> */}
                          <Typography
                            component="label"
                            variant="p"
                            style={{ fontSize: 12 }}
                          >
                            By signing up, you agree to ProjectNairon's
                            {/* <a id="link" href="#" variant="p">
                              {" "}
                              Terms of Service and
                            </a> */}
                          </Typography>
                        </Grid>
                        <Grid item xs={12}>
                          <Typography
                            component="label"
                            variant="p"
                            style={{ fontSize: 12 }}
                          >
                            Already signed up?
                            {/* <a id="link" href="#" variant="p">
                              {" "}
                              Log in
                            </a> */}
                          </Typography>
                        </Grid>
                      </Grid>
                    </div>
                  </form>
                </div>
              </Container>
            </div>
          </Container>
          <footer
            className={classes.footer}
            style={{ backgroundColor: "transparent" }}
          >
            {/* <Grid container spacing={3}>
              <Grid item xs={9}>
                <p>Privacy Policy</p>
              </Grid>
              <Grid item xs={3}>
                <DropdownExampleSearchDropdown></DropdownExampleSearchDropdown>
              </Grid>
            </Grid> */}
            <Grid container justify="flex-end">
              <Grid>
                <DropdownExampleSearchDropdown></DropdownExampleSearchDropdown>
              </Grid>
            </Grid>
          </footer>
        </div>
      </React.Fragment>
    );
  }
}

// export default withStyles(styles, { withTheme: true })(SignUp);
function mapState(state) {
  const { registering } = state.registration;
  return { registering };
}

const actionCreators = {
  register: userActions.register,
};

const connectedRegisterPage = connect(mapState, actionCreators)(SignIn);
export default withStyles(styles, { withTheme: true })(connectedRegisterPage);

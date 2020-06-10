import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import naironLogo from "../img/NAIRON.png";
import "react-phone-input-2/lib/bootstrap.css";
import ReactPhoneInput from "react-phone-input-2";
import DropdownExampleSearchDropdown from "./dropdown";
import "../Design/SignIn.css";

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
    border: "1px solid",
    // lineHeight: 5,
    backgroundColor: "#B66FD3",
    borderColor: "#B66FD3",
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
      backgroundColor: "#B66FD3",
      borderColor: "#B66FD3",
      boxShadow: "none",
    },
    "&:active": {
      boxShadow: "none",
      backgroundColor: "#B66FD3",
      borderColor: "#B66FD3",
    },
    "&:focus": {
      boxShadow: "0#B66FD3",
    },
  },
})(Button);

class SignUp extends React.Component {
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

  // phoneHandleChange = (e) => {
  //   this.state.user.phoneNumber = e;
  // };

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
   // const { registering } = this.props;
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
                  src={naironLogo}
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
                    Create your account
                  </Typography>
                  <Typography component="label" variant="p">
                    All your advertising needs met in one place
                  </Typography>

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
                      <Grid container spacing={4}>
                        <Grid item xs={12}>
                          <label style={{ fontSize: 18 }}>Email</label>

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
                          <label style={{ fontSize: 18 }}>Phone Number</label>{" "}
                          <ReactPhoneInput
                            country={"ng"}
                            name="phoneNumber"
                            value={user.phoneNumber}
                            containerStyle={{ height: 55 }}
                            inputStyle={{ width: "100%", height: "100%" }}
                            // onChange={(event) =>
                            //   (this.state.user.phoneNumber = event)
                            // }
                            onChange={this.phoneHandleChange}
                          />
                          {submitted && !user.phoneNumber && (
                            <div
                              className="help-block"
                              style={{ color: "red" }}
                            >
                              Phone Number is required
                            </div>
                          )}
                        </Grid>
                        <Grid item xs={12}>
                          <label style={{ fontSize: 18 }}>Password</label>{" "}
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
                            color="primary"
                            fullWidth
                          >
                            Get started.{" "}
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

const connectedRegisterPage = connect(mapState, actionCreators)(SignUp);
export default withStyles(styles, { withTheme: true })(connectedRegisterPage);

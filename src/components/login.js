import React from "react";
// import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
// import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { withStyles } from "@material-ui/core/styles";
import DropdownExampleSearchDropdown from "./dropdown";
import { Avatar } from "@material-ui/core";
import naironLogo from "../img/NAIRON.png";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import googleicon from "../img/googleicon.png";
import facebooklogo from "../img/alaajo-facebook.png";

// import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { userActions } from "../_actions";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const style = (theme) => ({
  // paper: {
  //   marginTop: theme.spacing(8),
  //   display: "flex",
  //   flexDirection: "column",
  //   alignItems: "center",
  // },

  paper: {
    marginTop: theme.spacing(8),
    // marginBottom: theme.spacing(10),
    paddingBottom: theme.spacing(6),
    marginRight: theme.spacing(5),
    marginLeft: theme.spacing(5),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  avatar: {
    margin: theme.spacing(1),
    paddingTop: theme.spacing(5),
    position: "absolute",
    // backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(10),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: "#B66FD3",
  },
  formBody: {
    backgroundColor: "white",
  },
  facebook: {
    // paddingTop: theme.spacing(5),
  },
  small: {
    width: 29,
    height: 30,
  },
  main: {
    backgroundColor: "white",
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(2),
  },
  inputField: {
    paddingTop: theme.spacing(1),
  },
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "90vh",
    alignItems: "center",
    // alignself: "center",
    justifyContent: "center",
    paddingTop: 70,
    // justifyItems: "center",
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: "auto",
    backgroundColor: "#B66FD3",
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
  // useEffect(() => {
  //   document.body.style.backgroundColor = "#B670D3";
  // }, []);
  constructor(props) {
    super(props);

    this.state = {
      user: {
        firstName: "",
        lastName: "",
        username: "",
        password: "",
      },
      submitted: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    document.body.style.backgroundColor = "#B670D3";
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
    if (user.firstName && user.lastName && user.username && user.password) {
      this.props.register(user);
    }
  }

  render() {
    const { classes } = this.props;
    return (
      // <Container className={classes.Container} component="main" maxWidth="xl">
      <React.Fragment>
        <div className={classes.root}>
          <div
            style={{
              // display: "flex",
              position: "absolute",
              alignItems: "center",
              // alignContent: "center",
              justifyItems: "center",
              // justifyContent: "center",
              // backgroundColor: "black",
            }}
          >
            <div
              className={classes.logo}
              style={{
                position: "absolute",
                paddingLeft: "25%",
                minHeight: "20vh",
              }}
            >
              <Avatar
                alt="Remy Sharp"
                src={naironLogo}
                variant="square"
                style={{ width: 220, minHeight: "10" }}
              ></Avatar>
            </div>
            <Container className={classes.main} component="main" maxWidth="xs">
              <CssBaseline />
              <div className={classes.paper}>
                <Typography
                  className={classes.avatar}
                  component="h1"
                  variant="h5"
                >
                  Log in to your Account
                </Typography>

                {/* <Typography component="h1" variant="h4">
                Log in to your Account
              </Typography> */}
                <form className={classes.form} noValidate>
                  {/* <Button
                    variant="outlined"
                    color="default"
                    className={classes.button}
                    startIcon={<CloudUploadIcon />}
                  >
                    Log in with Google
                  </Button> */}
                  <div>
                    <div
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
                    </div>

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
                    <div
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
                    </div>
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
                        style={{ backgroundColor: "#fff", padding: "0 10px" }}
                      >
                        OR
                      </span>
                    </p>
                  </div>
                  <label
                    style={{
                      position: "absolute",
                      paddingTop: 7,
                    }}
                  >
                    Email
                  </label>
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    // label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                    className={classes.inputField}
                    // style={{
                    //   borderColor: "#444444",
                    //   border: 1,
                    //   borderStyle: "solid",
                    // }}
                  />

                  <div style={{ position: "absolute" }}>
                    <label style={{ paddingTop: 7 }}>Password</label>
                  </div>
                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    // label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    className={classes.inputField}
                  />

                  {/* <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="black"
                    // backgroundColor="#B66FD3"
                    className={classes.submit}
                  >
                    log in
                  </Button> */}
                  <div style={{ paddingTop: 20 }}>
                    <BootstrapButton
                      type="submit"
                      variant="outlined"
                      color="black"
                      fullWidth
                      style={{
                        backgroundColor: "#B670D3",
                        border: "none",
                        color: "white",
                      }}
                      // startIcon={<naironlogo />}
                    >
                      Log in{" "}
                    </BootstrapButton>
                  </div>
                  <Grid container direction="column">
                    <Grid item xs>
                      <Link href="#" variant="body2">
                        Forgot password?
                      </Link>
                    </Grid>
                    <Grid item>
                      <Typography component="label" variant="p">
                        New to ProjectNairon?{" "}
                        <Link href="#" variant="body2">
                          {" "}
                          {"Sign Up"}
                        </Link>
                      </Typography>
                    </Grid>
                  </Grid>
                </form>
              </div>
              {/* <Box mt={8}>
                <Copyright />
              </Box> */}
            </Container>
          </div>
        </div>

        <footer className={classes.footer}>
          {/* i have figured out a way to fix the responsiveness problem i will adjust 
the col span with the size of the screen */}
          <div className="row">
            <div className="col-10"></div>

            <div className="col" style={{ paddingTop: 10 }}>
              {/* <h4 style={{ float: "right" }}>Privacy Policy</h4> */}
              <Typography style={{ float: "right" }}>
                <a href="#">
                  <h6 style={{ color: "white" }}>Privacy Policy</h6>
                </a>
              </Typography>
            </div>
            <div className="col">
              <DropdownExampleSearchDropdown></DropdownExampleSearchDropdown>
            </div>
          </div>
        </footer>
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
export default withStyles(style, { withTheme: true })(connectedRegisterPage);

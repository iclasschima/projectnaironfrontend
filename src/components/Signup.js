//  This class has been refactored by Gideon

// import React from "react";
// import Button from "@material-ui/core/Button";
// import CssBaseline from "@material-ui/core/CssBaseline";
// import TextField from "@material-ui/core/TextField";
// import Typography from "@material-ui/core/Typography";
// import Container from "@material-ui/core/Container";
// import { withStyles } from "@material-ui/core/styles";
// import naironLogo from "../img/NAIRON.png";
// import { Avatar } from "@material-ui/core";
// import DropdownExampleSearchDropdown from "./dropdown";
// // import "../Design/SignIn.css";

// import { connect } from "react-redux";
// import ReactPhoneInput from "react-phone-input-2";
// // import "react-phone-input-2/lib/material.css";
// import "react-phone-input-2/lib/bootstrap.css";

// import { userActions } from "../_actions";

// const styles = (theme) => ({
//   paper: {
//     marginTop: theme.spacing(8),
//     // marginBottom: theme.spacing(10),
//     paddingBottom: theme.spacing(6),
//     marginRight: theme.spacing(5),
//     marginLeft: theme.spacing(5),
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//   },
//   avatar: {
//     margin: theme.spacing(1),
//     paddingTop: theme.spacing(5),
//     position: "absolute",
//     // backgroundColor: theme.palette.secondary.main,
//   },
//   avatar2: {
//     margin: theme.spacing(1),
//     paddingTop: theme.spacing(9),
//     position: "absolute",
//     // backgroundColor: theme.palette.secondary.main,
//   },

//   form: {
//     width: "100%", // Fix IE 11 issue.
//     marginTop: theme.spacing(15),
//     // height: "100%",
//     // paddingBottom: theme.spacing(0),
//     // backgroundColor: "red",
//   },
//   submit: {
//     margin: theme.spacing(3, 0, 2),
//     backgroundColor: "#B66FD3",
//   },
//   formBody: {
//     backgroundColor: "white",
//     alignself: "center",
//     width: "100%",
//     // color: "red",
//     // height: 500,
//   },

//   footer: {
//     padding: theme.spacing(3, 2),
//     marginTop: "auto",
//     backgroundColor: "#B66FD3",
//   },
//   root: {
//     display: "flex",
//     flexDirection: "column",
//     minHeight: "90vh",
//     // maxHeight: "100",
//     alignItems: "center",
//     // alignself: "center",
//     justifyContent: "center",
//     paddingTop: 70,
//     // justifyItems: "center",
//   },
//   main: {
//     backgroundColor: "white",
//     marginTop: theme.spacing(8),
//     marginBottom: theme.spacing(2),
//   },
//   inputField: {
//     paddingTop: theme.spacing(3),
//   },
// });

// const BootstrapButton = withStyles({
//   root: {
//     // width: 50,
//     boxShadow: "none",
//     textTransform: "none",
//     fontSize: 16,
//     padding: "6px 12px",
//     border: "1px solid",
//     // lineHeight: 5,
//     backgroundColor: "#B66FD3",
//     borderColor: "#B66FD3",
//     fontFamily: [
//       "-apple-system",
//       "BlinkMacSystemFont",
//       '"Segoe UI"',
//       "Roboto",
//       '"Helvetica Neue"',
//       "Arial",
//       "sans-serif",
//       '"Apple Color Emoji"',
//       '"Segoe UI Emoji"',
//       '"Segoe UI Symbol"',
//     ].join(","),
//     "&:hover": {
//       backgroundColor: "#B66FD3",
//       borderColor: "#B66FD3",
//       boxShadow: "none",
//     },
//     "&:active": {
//       boxShadow: "none",
//       backgroundColor: "#B66FD3",
//       borderColor: "#B66FD3",
//     },
//     "&:focus": {
//       boxShadow: "0#B66FD3",
//     },
//   },
// })(Button);

// class SignUp extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       user: {
//         email: "",
//         password: "",
//         phoneNumber: "",
//       },
//       submitted: false,
//     };
//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }
//   componentDidMount() {
//     document.body.style.backgroundColor = "#B670D3";
//   }
//   handleChange(event) {
//     const { name, value } = event.target;
//     const { user } = this.state;
//     this.setState({
//       user: {
//         ...user,
//         [name]: value,
//       },
//     });
//   }

//   handleSubmit(event) {
//     event.preventDefault();

//     this.setState({ submitted: true });
//     const { user } = this.state;
//     if (user.email && user.password && user.phoneNumber) {
//       this.props.register(user);
//     }
//   }

//   render() {
//     const { classes } = this.props;
//     const { registering } = this.props;
//     const { user, submitted } = this.state;

//     console.log(this.state);
//     return (
//       <React.Fragment>
//         <Container component="main" maxWidth="xl">
//           <div className={classes.root} id="root">
//             <div
//               style={{
//                 // display: "flex",
//                 position: "absolute",
//                 alignItems: "center",
//                 // alignContent: "center",
//                 justifyItems: "center",
//                 // justifyContent: "center",
//                 // backgroundColor: "black",
//               }}
//             >
//               <div
//                 className={classes.logo}
//                 id="logo"
//                 style={{
//                   position: "absolute",
//                   // paddingLeft: "25%",
//                   minHeight: "20vh",
//                 }}
//               >
//                 <Avatar
//                   alt="Remy Sharp"
//                   src={naironLogo}
//                   variant="square"
//                   style={{ width: 220, minHeight: "10" }}
//                 ></Avatar>
//               </div>
//               <Container
//                 className={classes.main}
//                 component="main"
//                 maxWidth="xs"
//               >
//                 <CssBaseline />
//                 <div className={classes.paper}>
//                   {/* <Avatar className={classes.avatar}>
//           {/* <LockOutlinedIcon /> src = ""
//         </Avatar> */}
//                   <Typography
//                     className={classes.avatar}
//                     component="h1"
//                     variant="h5"
//                   >
//                     Create your account
//                   </Typography>
//                   <Typography
//                     className={classes.avatar2}
//                     component="label"
//                     variant="p"
//                   >
//                     All your advertising needs met in one place
//                   </Typography>
//                   <form
//                     className={classes.form}
//                     noValidate
//                     onSubmit={this.handleSubmit}
//                   >
//                     <div>
//                       <label style={{ position: "absolute", paddingTop: 20 }}>
//                         Email
//                       </label>

//                       <TextField
//                         className={classes.inputField}
//                         variant="outlined"
//                         email
//                         margin="normal"
//                         required
//                         fullWidth
//                         id="emaill"
//                         // label="clark@kent.com"
//                         name="email"
//                         autoComplete="email"
//                         autoFocus
//                         value={user.email}
//                         onChange={this.handleChange}
//                       />
//                       {submitted && !user.email && (
//                         <div className="help-block" style={{ color: "red" }}>
//                           Email Name is required
//                         </div>
//                       )}
//                     </div>

//                     <label style={{ position: "absolute", paddingTop: 7 }}>
//                       Phone Number
//                     </label>

//                     <div style={{ paddingTop: 28 }}>
//                       <ReactPhoneInput
//                         country={"ng"}
//                         name="phoneNumber"
//                         value={user.phoneNumber}
//                         containerStyle={{ height: 60 }}
//                         inputStyle={{ width: "100%", height: "100%" }}
//                         // onChange={(phone) => this.setState({ phoneNumber })}
//                         // onChange={this.handleChange}
//                         onChange={(event) =>
//                           (this.state.user.phoneNumber = event)
//                         }
//                       />
//                     </div>
//                     {submitted && !user.phoneNumber && (
//                       <div className="help-block" style={{ color: "red" }}>
//                         Phone Number is required
//                       </div>
//                     )}

//                     <label style={{ position: "absolute", paddingTop: 20 }}>
//                       Password
//                     </label>
//                     <TextField
//                       className={classes.inputField}
//                       variant="outlined"
//                       margin="normal"
//                       required
//                       fullWidth
//                       name="password"
//                       // label="Password"
//                       type="password"
//                       id="password"
//                       value={user.password}
//                       onChange={this.handleChange}
//                       autoComplete="current-password"
//                     />
//                     {submitted && !user.password && (
//                       <div className="help-block" style={{ color: "red" }}>
//                         Password is required
//                       </div>
//                     )}
//                     <div style={{ paddingTop: 20 }}>
//                       <BootstrapButton
//                         type="submit"
//                         variant="contained"
//                         color="primary"
//                         fullWidth
//                       >
//                         Get started.{" "}
//                       </BootstrapButton>
//                       {registering && (
//                         <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
//                       )}
//                     </div>
//                     <div style={{}}>
//                       <div
//                         className={classes.inputField}
//                         style={{
//                           width: "110%",
//                         }}
//                       >
//                         {/* <p> By signing up, you agree to ProjectNairon's</p>*/}
//                         <Typography
//                           component="label"
//                           variant="p"
//                           style={{ fontSize: 12 }}
//                         >
//                           By signing up, you agree to ProjectNairon's
//                           <a id="link" href="#" variant="p">
//                             {" "}
//                             Terms of Service and
//                           </a>
//                         </Typography>
//                       </div>

//                       <div
//                         className={classes.inputField}
//                         style={{ width: "110%" }}
//                       >
//                         <Typography
//                           component="label"
//                           variant="p"
//                           style={{ fontSize: 12 }}
//                         >
//                           Already signed Up?
//                           <a id="link" href="#" variant="p">
//                             {" "}
//                             Log In
//                           </a>
//                         </Typography>
//                       </div>
//                     </div>
//                   </form>
//                 </div>
//                 {/* <Box mt={8}>
//             <Copyright />
//           </Box> */}
//               </Container>
//             </div>
//           </div>

//           <footer className={classes.footer}>
//             {/* i have figured out a way to fix the responsiveness problem i will adjust
//         the col span with the size of the screen */}
//             <div className="row">
//               <div className="col-10"></div>

//               <div className="col">
//                 {/* <h4 style={{ float: "right" }}>Privacy Policy</h4> */}
//                 <Typography style={{ float: "right" }}>
//                   <a href="#">
//                     <h6 style={{ color: "white" }}>Privacy Policy</h6>
//                   </a>
//                 </Typography>
//               </div>
//               <div className="col">
//                 <DropdownExampleSearchDropdown></DropdownExampleSearchDropdown>
//               </div>
//             </div>
//           </footer>
//         </Container>
//       </React.Fragment>
//     );
//   }
// }
// // export default withStyles(styles, { withTheme: true })(SignUp);
// function mapState(state) {
//   const { registering } = state.registration;
//   return { registering };
// }

// const actionCreators = {
//   register: userActions.register,
// };

// const connectedRegisterPage = connect(mapState, actionCreators)(SignUp);
// export default withStyles(styles, { withTheme: true })(connectedRegisterPage);

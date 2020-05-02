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
// import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { userActions } from "../_actions";

// import React from "react";
// import CssBaseline from "@material-ui/core/CssBaseline";
// import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
// import Container from "@material-ui/core/Container";
// import Link from "@material-ui/core/Link";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: "auto",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[200]
        : theme.palette.grey[800],
  },
}));

function SignIn() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Container component="main" className={classes.main} maxWidth="sm">
        <Typography variant="h2" component="h1" gutterBottom>
          Sticky footer
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          {"Pin a footer to the bottom of the viewport."}
          {"The footer will move as the main element of the page grows."}
        </Typography>
        <Typography variant="body1">Sticky footer placeholder.</Typography>
      </Container>
      <footer className={classes.footer}>
        <Container maxWidth="sm">
          <Typography variant="body1">
            My sticky footer can be found here.
          </Typography>
          <Copyright />
        </Container>
      </footer>
    </div>
  );
}
// function Copyright() {
//   return (
//     <Typography variant="body2" color="textSecondary" align="center">
//       {"Copyright © "}
//       <Link color="inherit" href="https://material-ui.com/">
//         Your Website
//       </Link>{" "}
//       {new Date().getFullYear()}
//       {"."}
//     </Typography>
//   );
// }

// const styles = (theme) => ({
//   paper: {
//     marginTop: theme.spacing(8),
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//   },
//   avatar: {
//     margin: theme.spacing(1),
//     backgroundColor: theme.palette.secondary.main,
//   },
//   form: {
//     width: "100%", // Fix IE 11 issue.
//     marginTop: theme.spacing(1),
//   },
//   submit: {
//     margin: theme.spacing(3, 0, 2),
//     backgroundColor: "#B66FD3",
//   },
//   formBody: {
//     backgroundColor: "white",
//   },
// });

// class SignIn extends React.Component {
//   // useEffect(() => {
//   //   document.body.style.backgroundColor = "#B670D3";
//   // }, []);
//   constructor(props) {
//     super(props);

//     this.state = {
//       user: {
//         firstName: "",
//         lastName: "",
//         username: "",
//         password: "",
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
//     if (user.firstName && user.lastName && user.username && user.password) {
//       this.props.register(user);
//     }
//   }

//   render() {
//     const { classes } = this.props;
//     return (
//       // <Container className={classes.Container} component="main" maxWidth="xl">
//       <Container className={classes.formBody} component="main" maxWidth="xs">
//         <CssBaseline />
//         <div className={classes.paper}>
//           {/* <Avatar className={classes.avatar}>
//           <LockOutlinedIcon />
//         </Avatar> */}
//           <Typography component="h1" variant="h4">
//             Nairon
//           </Typography>
//           <form className={classes.form} noValidate>
//             <TextField
//               variant="outlined"
//               margin="normal"
//               required
//               fullWidth
//               id="email"
//               label="Email Address"
//               name="email"
//               autoComplete="email"
//               autoFocus
//             />
//             <TextField
//               variant="outlined"
//               margin="normal"
//               required
//               fullWidth
//               name="password"
//               label="Password"
//               type="password"
//               id="password"
//               autoComplete="current-password"
//             />
//             <FormControlLabel
//               control={<Checkbox value="remember" color="primary" />}
//               label="Remember me"
//             />
//             <Button
//               type="submit"
//               fullWidth
//               variant="contained"
//               color="black"
//               // backgroundColor="#B66FD3"
//               className={classes.submit}
//             >
//               log in
//             </Button>
//             <Grid container direction="column">
//               <Grid item xs>
//                 <Link href="#" variant="body2">
//                   Forgot password?
//                 </Link>
//               </Grid>
//               <Grid item>
//                 <Typography component="label" variant="p">
//                   New to ProjectNairon?{" "}
//                   <Link href="#" variant="body2">
//                     {" "}
//                     {"Sign Up"}
//                   </Link>
//                 </Typography>
//               </Grid>
//             </Grid>
//           </form>
//         </div>
//         <Box mt={8}>
//           <Copyright />
//         </Box>
//       </Container>
//       // </Container>
//     );
//   }
// }
// export default withStyles(styles, { withTheme: true })(SignUp);
function mapState(state) {
  const { registering } = state.registration;
  return { registering };
}

const actionCreators = {
  register: userActions.register,
};

const connectedRegisterPage = connect(mapState, actionCreators)(SignIn);
export default connectedRegisterPage;

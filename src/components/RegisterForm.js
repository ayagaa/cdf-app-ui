import React, { Component } from "react";
import { useHistory, useLocation } from "react-router-dom";

import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

import "./styles/CDFImage.css";

import { registerUser } from "../store/epic/applicationEpic";

const initialFormData = Object.freeze({
  firstName: "",
  lastName: "",
  userEmail: "",
  userPassword: "",
});

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        nyatike.cdf.go.ke
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function RegisterForm(props) {
  let history = useHistory();
  let location = useLocation();
  const classes = useStyles();

  const [formData, updateFormData] = React.useState(initialFormData);

  let { from } = location.state || { from: { pathname: "/" } };

  const handleChange = (e) => {
    updateFormData({
      ...formData,

      // Trimming any whitespace
      [e.target.name]: e.target.value.trim(),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);
    // ... submit to API
    const [apiCall, apiDispatch] = window.store.application;
    registerUser(formData.userEmail, formData.userPassword, apiDispatch).then(
      (result) => {
        const [application] = window.store.application;

        if(application.appUser && application.appUser.isSuccessfull) {
          history.push("/");
        } else if(application.appUser && !application.appUser.isSuccessfull) {
          alert(application.appUser.message);
        } else {
          alert("Oops! Something went wrong. Please try again.");
        }
      }
    );
  };

  const handleClick = (e) => {
    history.push("/");
    window.location.reload(false);
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <div className="cdf-image"></div>
        <Typography component="h1" variant="h7">
          Nyatike Bursary
        </Typography>
        <Typography component="h1" variant="h5">
          Register
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="firstName"
            label="First Name"
            name="firstName"
            autoComplete="firstName"
            autoFocus
            onChange={handleChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="lastName"
            label="Last Name"
            name="lastName"
            autoComplete="lastName"
            onChange={handleChange}
            //autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="userEmail"
            label="Email Address"
            name="userEmail"
            autoComplete="email"
            onChange={handleChange}
            //autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="userPassword"
            label="Password"
            type="password"
            id="userPassword"
            autoComplete="current-password"
            onChange={handleChange}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleSubmit}
          >
            Register
          </Button>
          <Grid container>
            <Grid item>
              <Link href="#" variant="body2" onClick={handleClick}>
                {"Already have an account? Sign in"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}

export default RegisterForm;

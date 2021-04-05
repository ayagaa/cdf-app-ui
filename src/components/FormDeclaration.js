import React, { Component } from "react";
import { useHistory, useLocation } from "react-router-dom";

import { FormControl, Button, Select, TextField } from "@material-ui/core";

import InputLabel from "@material-ui/core/InputLabel";
import Typography from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";

function FormDeclaration (props) {

  let history = useHistory();
  let location = useLocation();

  let { from } = location.state || { from: { pathname: "/application-form" } };

  const submit = (e) => {
    e.preventDefault();
    history.push("/");
  };

  const goback = (e) => {
    e.preventDefault();
    props.previousStep();
  };

  const { values, stepLabel, handleChange } = props;
  return (
    <React.Fragment>
      <Container component="main" maxWidth="lg">
        <CssBaseline />
        <Typography component="h1" variant="h5">
          {stepLabel}
        </Typography>
        <br />
        <br />
        <Typography component="h3" variant="h7" align="left">
          We (student and parents/ guardian) declare that we have read this form / this form has been read to us
          and we hereby confirm that the information given herein is true to
          the best of our knowledge and belief; We understand that any false
          information provided shall lead to the student's automatic disqualification by
          the committee.
        </Typography>
        <br />
        <br />
        <Button
          variant="contained"
          color="primary"
          style={styles.backButton}
          onClick={goback}
        >
          Back
        </Button>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          style={styles.button}
          onClick={submit}
        >
          Submit Application
        </Button>
      </Container>
    </React.Fragment>
  );
}

const styles = {
  button: {
    margin: 15,
  },
};

export default FormDeclaration;

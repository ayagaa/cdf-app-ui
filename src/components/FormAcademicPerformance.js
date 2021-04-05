import React, { Component } from "react";

import { FormControl, Button, Select, TextField } from "@material-ui/core";

import "date-fns";
import MomentUtils from "@date-io/moment";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import Grid from "@material-ui/core/Grid";
import InputLabel from "@material-ui/core/InputLabel";
import Typography from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";

// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import TextField from 'material-ui/TextField';
// import RaisedButton from 'material-ui/RaisedButton';

export class FormAcademicPerformance extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  goback = (e) => {
    e.preventDefault();
    this.props.previousStep();
  };

  absentismDetails = (values, handleChange) => {
    switch (values.hasAbsenceRecord) {
      case "2":
        return (
          <div>
            <TextField
              label="Please provide reasons for your absence"
              onChange={(event) => handleChange("absenceReason", event)}
              defaultValue={values.absenceReason}
              variant="outlined"
            />
            <br />
            <br />
            <TextField
              label="Specify number of weeks you stayed away from school"
              type="number"
              onChange={(event) => handleChange("absenceDuration", event)}
              defaultValue={values.absenceDuration}
              variant="outlined"
            />
            <br />
            <br />
          </div>
        );
      default:
        return <div></div>;
    }
  };

  render() {
    const { values, stepLabel, handleChange } = this.props;

    const showAbsentismDetails = this.absentismDetails(values, handleChange);
    return (
      <React.Fragment>
        <Container component="main" maxWidth="lg">
          <CssBaseline />
          <Typography component="h1" variant="h5">
            {stepLabel}
          </Typography>
          <form>
            <br />
            <br />
            <Typography component="h1" variant="h6">
              i. Applicant's Academic Performance
            </Typography>
            <br />
            <FormControl variant="outlined">
              <InputLabel htmlFor="outlined-age-native-simple">
                What is your average academic performance?
              </InputLabel>
              <Select
                label="What is your average academic performance?"
                value={values.averageAcademicPerformance}
                onChange={(event) =>
                  handleChange("averageAcademicPerformance", event)
                }
              >
                <option value={"1"}>Excellent</option>
                <option value={"2"}>Very Good</option>
                <option value={"3"}>Good</option>
                <option value={"4"}>Fair</option>
                <option value={"5"}>Poor</option>
              </Select>
            </FormControl>
            <br />
            <br />
            <FormControl variant="outlined">
              <InputLabel htmlFor="outlined-age-native-simple">
                Have you been sent away from school?
              </InputLabel>
              <Select
                label="Have you been sent away from school?"
                value={values.hasAbsenceRecord}
                onChange={(event) => handleChange("hasAbsenceRecord", event)}
              >
                <option value={"1"}>No</option>
                <option value={"2"}>Yes</option>
              </Select>
            </FormControl>
            <br />
            <br />
            {showAbsentismDetails}
            <br />
            <Typography component="h1" variant="h6">
              ii. Applicant's Fees Information
            </Typography>
            <br />
            <TextField
              label="Annual fees as per fees structure Kshs"
              type="number"
              onChange={(event) => handleChange("totalAnnualFees", event)}
              defaultValue={values.totalAnnualFees}
              variant="outlined"
            />
            <br />
            <br />
            <TextField
              label="Last semester's /term's fee balance Kshs"
              type="number"
              onChange={(event) => handleChange("lastSemesterBalance", event)}
              defaultValue={values.lastSemesterBalance}
              variant="outlined"
            />
            <br />
            <br />
            <TextField
              label="This semester's /term's fee balance Kshs"
              type="number"
              onChange={(event) => handleChange("currentSemesterBalance", event)}
              defaultValue={values.currentSemesterBalance}
              variant="outlined"
            />
            <br />
            <br />
            <TextField
              label="Next semester's /term's fee balance Kshs"
              type="number"
              onChange={(event) => handleChange("nextSemesterBalance", event)}
              defaultValue={values.nextSemesterBalance}
              variant="outlined"
            />
            <br />
            <br />
            <TextField
              label="Loan from HELB (where applicable) Kshs"
              type="number"
              onChange={(event) => handleChange("helbLoanReceived", event)}
              defaultValue={values.helbLoanReceived}
              variant="outlined"
            />
            <br />
            <br />
            <Button
              // type="submit"
              // fullWidth
              variant="contained"
              color="primary"
              style={styles.backButton}
              onClick={this.goback}
              // className={classes.submit}
            >
              Back
            </Button>
            <Button
              type="submit"
              // fullWidth
              variant="contained"
              color="primary"
              style={styles.button}
              onClick={this.continue}
              // className={classes.submit}
            >
              Save and Continue
            </Button>
          </form>
        </Container>
      </React.Fragment>
    );
  }
}

const styles = {
  button: {
    margin: 15,
  },
};

export default FormAcademicPerformance;

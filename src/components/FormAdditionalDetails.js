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

export class FormAdditionalDetails extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  goback = (e) => {
    e.preventDefault();
    this.props.previousStep();
  };

  handleDateChange = (date) => {
    const { handleChange } = this.props;
    handleChange("previousBursaryDate", date);
  };

  previousBursaryDetails = (values, handleChange) => {
    switch (values.hasPreviousBursary) {
      case "2":
        return (
          <div>
            <br />
            <TextField
              label="Specify how much you received in last bursary"
              type="number"
              onChange={(event) => handleChange("previousBursaryAmount", event)}
              defaultValue={values.previousBursaryAmount}
              variant="outlined"
            />
            <br />
            <br />
            <MuiPickersUtilsProvider utils={MomentUtils}>
              <Grid container justify="space-around">
                <KeyboardDatePicker
                  label="When did you last receive the last bursary"
                  keyboard
                  placeholder="DD/MM/YYYY"
                  format={"DD/MM/YYYY"}
                  mask={(value) =>
                    value
                      ? [
                          /\d/,
                          /\d/,
                          "/",
                          /\d/,
                          /\d/,
                          "/",
                          /\d/,
                          /\d/,
                          /\d/,
                          /\d/,
                        ]
                      : []
                  }
                  value={values.previousBursaryDate}
                  onChange={this.handleDateChange}
                  disableOpenOnEnter
                  animateYearScrolling={false}
                  autoOk={true}
                  clearable
                  variant="outlined"
                />
              </Grid>
            </MuiPickersUtilsProvider>
          </div>
        );
      default:
        return <div></div>;
    }
  };

  previousFinancialSupportDetails = (values, handleChange) => {
    switch (values.previousFinancialSupport) {
      case "2":
        return (
          <div>
            <TextField
              label="Please provide details of the financial support"
              onChange={(event) =>
                handleChange("previousFinancialSupportDetails", event)
              }
              defaultValue={values.previousFinancialSupportDetails}
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

  physicalImpairmentDetails = (values, handleChange) => {
    switch (values.hasPhysicalImpairment) {
      case "2":
        return (
          <div>
            <TextField
              label="Please provide details of physical impairement"
              onChange={(event) =>
                handleChange("physicalImpairmentDetails", event)
              }
              defaultValue={values.physicalImpairmentDetails}
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

  chronicIllnessDetails = (values, handleChange) => {
    switch (values.hasChronicIllness) {
      case "2":
        return (
          <div>
            <TextField
              label="Please provide details of chronic illness"
              onChange={(event) => handleChange("chronicIllnessDetails", event)}
              defaultValue={values.chronicIllnessDetails}
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

  parentDisabilityDetails = (values, handleChange) => {
    switch (values.hasDisabledParent) {
      case "2":
        return (
          <div>
            <TextField
              label="Please describe the disability"
              onChange={(event) => handleChange("disableParentDetails", event)}
              defaultValue={values.disableParentDetails}
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

  parentChronicIllnessDetails = (values, handleChange) => {
    switch (values.hasParentChronicIllness) {
      case "2":
        return (
          <div>
            <TextField
              label="Please provide details of parents/ guardians chronic illness"
              onChange={(event) =>
                handleChange("parentChronicIllnessDetails", event)
              }
              defaultValue={values.parentChronicIllnessDetails}
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

    const showPreviousBursaryDetails = this.previousBursaryDetails(
      values,
      handleChange
    );

    const showPreviousFinancialSupportDetails = this.previousFinancialSupportDetails(
      values,
      handleChange
    );

    const showPhysicalImpairmentDetails = this.physicalImpairmentDetails(
      values,
      handleChange
    );

    const showChronicIllnessDetails = this.chronicIllnessDetails(
      values,
      handleChange
    );

    const showParentDisabilityDetails = this.parentDisabilityDetails(
      values,
      handleChange
    );

    const showParentChronicIllnessDetails = this.parentChronicIllnessDetails(
      values,
      handleChange
    );

    return (
      <React.Fragment>
        <Container component="main" maxWidth="lg">
          <CssBaseline />
          <Typography component="h1" variant="h5">
            {stepLabel}
          </Typography>
          <br />
          <br />
          <Typography component="h1" variant="h6">
            i. Applicant's Additional Information
          </Typography>
          <br />
          <form>
            <TextField
              autoFocus
              label="Why are you applying for bursary assistance?"
              onChange={(event) => handleChange("applicationReason", event)}
              defaultValue={values.applicationReason}
              variant="outlined"
            />
            <br />
            <br />
            <FormControl variant="outlined">
              <InputLabel htmlFor="outlined-age-native-simple">
                Any previous financial support/ bursaries from NG-CDF?
              </InputLabel>
              <Select
                label="Any previous financial support/ bursaries from NG-CDF?"
                value={values.hasPreviousBursary}
                onChange={(event) => handleChange("hasPreviousBursary", event)}
              >
                <option value={"1"}>No</option>
                <option value={"2"}>Yes</option>
              </Select>
            </FormControl>
            <br />
            {showPreviousBursaryDetails}
            <br />
            <br />
            <FormControl variant="outlined">
              <InputLabel htmlFor="outlined-age-native-simple">
                Any previous financial support from other oganizations?
              </InputLabel>
              <Select
                label="Any previous financial support from other organizations?"
                value={values.previousFinancialSupport}
                onChange={(event) =>
                  handleChange("previousFinancialSupport", event)
                }
              >
                <option value={"1"}>No</option>
                <option value={"2"}>Yes</option>
              </Select>
            </FormControl>
            <br />
            {showPreviousFinancialSupportDetails}
            <br />
            <br />
            <Typography component="h1" variant="h6">
              ii. Applicant's and Parents/ Guardian Health Information
            </Typography>
            <br />
            <br />
            <FormControl variant="outlined">
              <InputLabel htmlFor="outlined-age-native-simple">
                Do you suffer from any physical impairment?
              </InputLabel>
              <Select
                label="Do you suffer from any physical impairment?"
                value={values.hasPhysicalImpairment}
                onChange={(event) =>
                  handleChange("hasPhysicalImpairment", event)
                }
              >
                <option value={"1"}>No</option>
                <option value={"2"}>Yes</option>
              </Select>
            </FormControl>
            <br />
            <br />
            {showPhysicalImpairmentDetails}
            <br />
            <FormControl variant="outlined">
              <InputLabel htmlFor="outlined-age-native-simple">
                Do you suffer from any chronic illness?
              </InputLabel>
              <Select
                label="Do you suffer from any chronic illness?"
                value={values.hasChronicIllness}
                onChange={(event) => handleChange("hasChronicIllness", event)}
              >
                <option value={"1"}>No</option>
                <option value={"2"}>Yes</option>
              </Select>
            </FormControl>
            <br />
            <br />
            {showChronicIllnessDetails}
            <br />
            <br />
            <FormControl variant="outlined">
              <InputLabel htmlFor="outlined-age-native-simple">
                Do your parents/ guardians have any form of disability?
              </InputLabel>
              <Select
                label="Do your parents/ guardians have any form of disability?"
                value={values.hasDisabledParent}
                onChange={(event) => handleChange("hasDisabledParent", event)}
              >
                <option value={"1"}>No</option>
                <option value={"2"}>Yes</option>
              </Select>
            </FormControl>
            <br />
            <br />
            {showParentDisabilityDetails}
            <br />
            <FormControl variant="outlined">
              <InputLabel htmlFor="outlined-age-native-simple">
                Do your parents/ guardians suffer from any chronic illness?
              </InputLabel>
              <Select
                label="Do your parents/ guardians suffer from any chronic illness?"
                value={values.hasParentChronicIllness}
                onChange={(event) =>
                  handleChange("hasParentChronicIllness", event)
                }
              >
                <option value={"1"}>No</option>
                <option value={"2"}>Yes</option>
              </Select>
            </FormControl>
            <br />
            <br />
            {showParentChronicIllnessDetails}
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

export default FormAdditionalDetails;

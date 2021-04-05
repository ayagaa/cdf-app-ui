import React, { Component } from "react";

import "date-fns";
import MomentUtils from "@date-io/moment";
import DateFnsUtils from "@date-io/date-fns";

import {
  Box,
  FormControl,
  FormHelperText,
  Button,
  Select,
  TextField,
} from "@material-ui/core";

import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";

import Grid from "@material-ui/core/Grid";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Typography from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";

export class FormPersonalDetails extends Component {
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
    handleChange("dateOfBirth", date);
  };

  render() {
    const { values, stepLabel, handleChange } = this.props;
    const genderItems = ["Female", "Male"];
    return (
      <React.Fragment>
        <Container component="main" maxWidth="lg">
          <CssBaseline />
          <Typography component="h1" variant="h5">
            {stepLabel}
          </Typography>
          <br />
          <Typography component="h1" variant="h6">
            i. Personal, Institutional and Other Details
          </Typography>
          <br />
          <form>
            <Box>
              <TextField
                label="Applicants Official Name"
                onChange={(event) => handleChange("name", event)}
                defaultValue={values.name}
                variant="outlined"
                autoFocus
              />
            </Box>
            <br />
            <br />
            <FormControl variant="outlined">
              <InputLabel htmlFor="outlined-age-native-simple">Gender</InputLabel>
              <Select
                label="Gender"
                value={values.gender}
                onChange={(event) => handleChange("gender", event)}
                inputProps={{
                  name: "familyStatus",
                  id: 'outlined-age-native-simple'
                }}
              >
                <option value={"Female"}>Female</option>
                <option value={"Male"}>Male</option>
              </Select>
            </FormControl>
            <br />
            <br />
            <MuiPickersUtilsProvider utils={MomentUtils}>
              <Grid container justify="space-around">
                <KeyboardDatePicker
                  label="Date of birth"
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
                  value={values.dateOfBirth}
                  onChange={this.handleDateChange}
                  disableOpenOnEnter
                  animateYearScrolling={false}
                  autoOk={true}
                  clearable
                  variant="outlined"
                />
              </Grid>
            </MuiPickersUtilsProvider>
            <br />
            <TextField
              label="ID No./ Passport No."
              onChange={(event) => handleChange("idNo", event)}
              defaultValue={values.idNo}
              variant="outlined"
            />
            <br />
            <br />
            <TextField
              label="School/ College/ University"
              onChange={(event) => handleChange("institutionName", event)}
              defaultValue={values.institutionName}
              variant="outlined"
            />
            <br />
            <br />
            <TextField
              label="Admission/ Registration No."
              onChange={(event) => handleChange("admissionNumber", event)}
              defaultValue={values.admissionNumber}
              variant="outlined"
            />
            <br />
            <br />
            <TextField
              label="Campus/ Branch"
              onChange={(event) => handleChange("institutionBranch", event)}
              defaultValue={values.institutionBranch}
              variant="outlined"
            />
            <br />
            <br />
            <TextField
              label="Faculty/ Department"
              onChange={(event) => handleChange("department", event)}
              defaultValue={values.department}
              variant="outlined"
            />
            <br />
            <br />
            <TextField
              label="School/ College/ University"
              onChange={(event) => handleChange("institutionName", event)}
              defaultValue={values.institutionName}
              variant="outlined"
            />
            <br />
            <br />
            <Typography component="h1" variant="h6">
              ii. Polling Station, Addresses and Amount Details
            </Typography>
            <br />
            <br />
            <TextField
              label="Ward"
              onChange={(event) => handleChange("ward", event)}
              defaultValue={values.ward}
              variant="outlined"
            />
            <br />
            <br />
            <TextField
              label="Location"
              onChange={(event) => handleChange("location", event)}
              defaultValue={values.location}
              variant="outlined"
            />
            <br />
            <br />
            <TextField
              label="Sub-Location"
              onChange={(event) => handleChange("subLocation", event)}
              defaultValue={values.subLocation}
              variant="outlined"
            />
            <br />
            <br />
            <TextField
              label="Physical Address"
              onChange={(event) => handleChange("physicalAddress", event)}
              defaultValue={values.physicalAddress}
              variant="outlined"
            />
            <br />
            <br />
            <TextField
              label="Permanent Address"
              onChange={(event) => handleChange("permanentAddress", event)}
              defaultValue={values.permanentAddress}
              variant="outlined"
            />
            <br />
            <br />
            <TextField
              label="Institution Postal Address"
              onChange={(event) => handleChange("institutionAddress", event)}
              defaultValue={values.institutionAddress}
              variant="outlined"
            />
            <br />
            <br />
            <TextField
              label="Institution Telephone Number"
              onChange={(event) => handleChange("institionPhoneNumber", event)}
              defaultValue={values.institutionPhoneNumber}
              variant="outlined"
            />
            <br />
            <br />
            <TextField
              label="Amount Applied for Kshs."
              type="number"
              onChange={(event) => handleChange("amountApplied", event)}
              defaultValue={values.amountApplied}
              variant="outlined"
            />
            <br />
            <br />
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
    width: 200,
  },
};

export default FormPersonalDetails;

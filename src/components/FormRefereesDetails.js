import React, { Component } from "react";

import { FormControl, Button, Select, TextField } from "@material-ui/core";

import Grid from "@material-ui/core/Grid";
import InputLabel from "@material-ui/core/InputLabel";
import Typography from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";

// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import TextField from 'material-ui/TextField';
// import RaisedButton from 'material-ui/RaisedButton';

export class FormRefereesDetails extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  goback = (e) => {
    e.preventDefault();
    this.props.previousStep();
  };

  otherReligionDetails = (values, handleChange) => {
    switch (values.religiousLeaderReligionType) {
      case "4":
        return (
          <div>
            <TextField
              label="Other religion details"
              onChange={(event) => handleChange("otherReligionDetials", event)}
              defaultValue={values.otherReligionDetials}
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

    const showOtherReligionDetails = this.otherReligionDetails(
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
          <form>
            <br />
            <Typography component="h1" variant="h6">
              i. The student /parent /guardian should provide the names and
              telephone contacts of atleast two referees who know the family
              well.
            </Typography>
            <br />
            <Typography component="h2" variant="h6">
              1. First Refereee Details
            </Typography>
            <br />
            <br />
            <TextField
              autoFocus
              label="Name"
              onChange={(event) => handleChange("referee1Name", event)}
              defaultValue={values.referee1Name}
              variant="outlined"
            />
            <br />
            <br />
            <TextField
              label="Address"
              onChange={(event) => handleChange("referee1Address", event)}
              defaultValue={values.referee1Address}
              variant="outlined"
            />
            <br />
            <br />
            <TextField
              label="Telephone Number"
              onChange={(event) => handleChange("referee1PhoneNumber", event)}
              defaultValue={values.referee1PhoneNumber}
              variant="outlined"
            />
            <br />
            <br />
            <Typography component="h2" variant="h6">
              2. Second Refereee Details
            </Typography>
            <br />
            <br />
            <TextField
              label="Name"
              onChange={(event) => handleChange("referee2Name", event)}
              defaultValue={values.referee2Name}
              variant="outlined"
            />
            <br />
            <br />
            <TextField
              label="Address"
              onChange={(event) => handleChange("referee2Address", event)}
              defaultValue={values.referee2Address}
              variant="outlined"
            />
            <br />
            <br />
            <TextField
              label="Telephone Number"
              onChange={(event) => handleChange("referee2PhoneNumber", event)}
              defaultValue={values.referee2PhoneNumber}
              variant="outlined"
            />
            <br />
            <br />
            <Typography component="h1" variant="h6">
              ii. The student /parent /guardian should provide the names and
              contacts of religious leader and area chief/ sub-chief
            </Typography>
            <br />
            <Typography component="h2" variant="h6">
              1. Religious Leader Details
            </Typography>
            <br />
            <br />
            <TextField
              label="Name of Religions Leader"
              onChange={(event) => handleChange("religiousLeaderName", event)}
              defaultValue={values.religiousLeaderName}
              variant="outlined"
            />
            <br />
            <br />
            <TextField
              label="Name of religion"
              onChange={(event) =>
                handleChange("religiousLeaderReligionName", event)
              }
              defaultValue={values.religiousLeaderReligionName}
              variant="outlined"
            />
            <br />
            <br />
            <FormControl variant="outlined">
              <InputLabel htmlFor="outlined-age-native-simple">
                Type of religion
              </InputLabel>
              <Select
                label="Type of religion"
                value={values.religiousLeaderReligionType}
                onChange={(event) =>
                  handleChange("religiousLeaderReligionType", event)
                }
              >
                <option value={"1"}>Christian</option>
                <option value={"2"}>Muslim</option>
                <option value={"3"}>Hindu</option>
                <option value={"4"}>Any other</option>
              </Select>
            </FormControl>
            <br />
            {showOtherReligionDetails}
            <br />
            <TextField
              label="Email Address"
              type="email"
              onChange={(event) => handleChange("religiousLeaderEmail", event)}
              defaultValue={values.religiousLeaderEmail}
              variant="outlined"
            />
            <br />
            <br />
            <TextField
              label="Telephone Number"
              onChange={(event) => handleChange("religiousLeaderPhone", event)}
              defaultValue={values.religiousLeaderPhone}
              variant="outlined"
            />
            <br />
            <br />
            <Typography component="h2" variant="h6">
              2. Chief / Sub-chief Details
            </Typography>
            <br />
            <br />
            <TextField
              label="Name of Chief/ Sub-chief"
              onChange={(event) => handleChange("chiefName", event)}
              defaultValue={values.chiefName}
              variant="outlined"
            />
            <br />
            <br />
            <TextField
              label="Location/ Sub-location"
              onChange={(event) => handleChange("chiefLocation", event)}
              defaultValue={values.chiefLocation}
              variant="outlined"
            />
            <br />
            <br />
            <TextField
              label="Email Address"
              onChange={(event) => handleChange("chiefLocation", event)}
              defaultValue={values.chiefLocation}
              variant="outlined"
            />
            <br />
            <br />
            <TextField
              label="Telephone Number"
              onChange={(event) => handleChange("chiefPhone", event)}
              defaultValue={values.chiefPhone}
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

export default FormRefereesDetails;

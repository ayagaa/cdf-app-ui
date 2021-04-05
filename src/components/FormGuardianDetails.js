import React, { Component } from "react";

import {
  Box,
  FormControl,
  FormHelperText,
  Button,
  Select,
  TextField,
} from "@material-ui/core";

import InputLabel from "@material-ui/core/InputLabel";
import Typography from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";

export class FormGuardianDetails extends Component {
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

  otherFamilyStatus = (values, handleChange) => {
    switch (values.familyStatus) {
      case "5":
        return (
          <div>
            <TextField
              label="Other Family Status"
              onChange={(event) => handleChange("otherFamilyStatus", event)}
              defaultValue={values.otherFamilyStatus}
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

  occupationInformation = (values, handleChange) => {
    switch (values.familyStatus) {
      case "1":
        return (
          <div>
            <Typography component="h1" variant="h6">
              ii. Parents/ Guardian Occupation and Income Details
            </Typography>
            <h2>Guardian</h2>
            <TextField
              label="Full Name"
              onChange={(event) => handleChange("guardianName", event)}
              defaultValue={values.guardianName}
              variant="outlined"
            />
            <br />
            <br />
            <TextField
              label="Address"
              onChange={(event) => handleChange("guardianAddress", event)}
              defaultValue={values.guardianAddress}
              variant="outlined"
            />
            <br />
            <br />
            <TextField
              label="Telephone"
              onChange={(event) => handleChange("guardianTelephone", event)}
              defaultValue={values.guardianTelephone}
              variant="outlined"
            />
            <br />
            <br />
            <TextField
              label="Occupation"
              onChange={(event) => handleChange("guardianOccupation", event)}
              defaultValue={values.guardianOccupation}
              variant="outlined"
            />
            <br />
            <br />
            <FormControl variant="outlined">
              <InputLabel htmlFor="outlined-age-native-simple">
                Type of Employment
              </InputLabel>
              <Select
                label="Type of Employment"
                value={values.guardianEmployment}
                onChange={(event) => handleChange("guradianEmployment", event)}
                inputProps={{
                  name: "guradianEmployment",
                  id: "outlined-age-native-simple",
                }}
                // onChange={(event) => console.log(event)}
              >
                <option value={"1"}>Permanent</option>
                <option value={"2"}>Contractual</option>
                <option value={"3"}>Casual</option>
                <option value={"4"}>Retired</option>
                <option value={"5"}>Self Employed</option>
                <option value={"6"}>None</option>
              </Select>
            </FormControl>
            <br />
            <br />
            <TextField
              label="Main Source of Income"
              onChange={(event) =>
                handleChange("guardianMainIncomeSource", event)
              }
              defaultValue={values.guardianMainIncomeSource}
              variant="outlined"
            />
            <br />
            <br />
          </div>
        );
      case "2":
        return (
          <div>
            <Typography component="h1" variant="h6">
              ii. Parents/ Guardian Occupation and Income Details
            </Typography>
            <br />
            <br />
            <FormControl variant="outlined">
              <InputLabel htmlFor="outlined-age-native-simple">
                Select Living Parent
              </InputLabel>
              <Select
                label="Select Living Parent"
                value={values.livingParent}
                onChange={(event) => handleChange("livingParent", event)}
                inputProps={{
                  name: "livingParent",
                  id: "outlined-age-native-simple",
                }}
                // onChange={(event) => console.log(event)}
              >
                <option value={"1"}>Father</option>
                <option value={"2"}>Mother</option>
              </Select>
            </FormControl>
            <br />
            <br />
            <TextField
              label="Full Name"
              onChange={(event) =>
                handleChange(
                  values.livingParent === "1" ? "fatherName" : "motherName",
                  event
                )
              }
              defaultValue={
                values.livingParent === "1"
                  ? values.fatherName
                  : values.motherName
              }
              variant="outlined"
            />
            <br />
            <br />
            <TextField
              label="Address"
              onChange={(event) =>
                handleChange(
                  values.livingParent === "1"
                    ? "fatherAddress"
                    : "motherAddress",
                  event
                )
              }
              defaultValue={
                values.livingParent === "1"
                  ? values.fatherAddress
                  : values.motherAddress
              }
              variant="outlined"
            />
            <br />
            <br />
            <TextField
              label="Telephone"
              onChange={(event) =>
                handleChange(
                  values.livingParent === "1"
                    ? "fatherTelephone"
                    : "motherTelephone",
                  event
                )
              }
              defaultValue={
                values.livingParent === "1"
                  ? values.fatherTelephone
                  : values.motherTelephone
              }
              variant="outlined"
            />
            <br />
            <br />
            <TextField
              label="Occupation"
              onChange={(event) =>
                handleChange(
                  values.livingParent === "1"
                    ? "fatherOccupation"
                    : "motherOccupation",
                  event
                )
              }
              defaultValue={
                values.livingParent === "1"
                  ? values.fatherOccupation
                  : values.motherOccupation
              }
              variant="outlined"
            />
            <br />
            <br />
            <FormControl variant="outlined">
              <InputLabel htmlFor="outlined-age-native-simple">
                Type of Employment
              </InputLabel>
              <Select
                label="Type of Employment"
                value={
                  values.livingParent === "1"
                    ? values.fatherEmployment
                    : values.motherEmployement
                }
                onChange={(event) =>
                  handleChange(
                    values.livingParent === "1"
                      ? "fatherEmployment"
                      : "motherEmployment",
                    event
                  )
                }
                inputProps={{
                  name: "employment",
                  id: "outlined-age-native-simple",
                }}
                // onChange={(event) => console.log(event)}
              >
                <option value={"1"}>Permanent</option>
                <option value={"2"}>Contractual</option>
                <option value={"3"}>Casual</option>
                <option value={"4"}>Retired</option>
                <option value={"5"}>Self Employed</option>
                <option value={"6"}>None</option>
              </Select>
            </FormControl>
            <br />
            <br />
            <TextField
              label="Main Source of Income"
              onChange={(event) =>
                handleChange(
                  values.livingParent === "1"
                    ? "fatherMainIncomeSource"
                    : "motherMainIncomeSource",
                  event
                )
              }
              defaultValue={
                values.livingParent === "1"
                  ? values.fatherMainIncomeSource
                  : values.motherMainIncomeSource
              }
              variant="outlined"
            />
          </div>
        );
      case "3":
        return (
          <div>
            <Typography component="h1" variant="h6">
              ii. Parents/ Guardian Occupation and Income Details
            </Typography>
            <h2>Father</h2>

            <TextField
              label="Full Name"
              onChange={(event) => handleChange("fatherName", event)}
              defaultValue={values.fatherName}
              variant="outlined"
            />
            <br />
            <br />
            <TextField
              label="Address"
              onChange={(event) => handleChange("fatherAddress", event)}
              defaultValue={values.fatherAddress}
              variant="outlined"
            />
            <br />
            <br />
            <TextField
              label="Telephone"
              onChange={(event) => handleChange("fatherTelephone", event)}
              defaultValue={values.fatherTelephone}
              variant="outlined"
            />
            <br />
            <br />
            <TextField
              label="Occupation"
              onChange={(event) => handleChange("fatherOccupation", event)}
              defaultValue={values.fatherOccupation}
              variant="outlined"
            />
            <br />
            <br />
            <FormControl variant="outlined">
              <InputLabel htmlFor="outlined-age-native-simple">
                Type of Employment
              </InputLabel>
              <Select
                label="Type of Employment"
                value={values.fatherEmployment}
                onChange={(event) => handleChange("fatherEmployment", event)}
                inputProps={{
                  name: "fatherEmployment",
                  id: "outlined-age-native-simple",
                }}
                // onChange={(event) => console.log(event)}
              >
                <option value={"1"}>Permanent</option>
                <option value={"2"}>Contractual</option>
                <option value={"3"}>Casual</option>
                <option value={"4"}>Retired</option>
                <option value={"5"}>Self Employed</option>
                <option value={"6"}>None</option>
              </Select>
            </FormControl>
            <br />
            <br />
            <TextField
              label="Main Source of Income"
              onChange={(event) =>
                handleChange("fatherMainIncomeSource", event)
              }
              defaultValue={values.fatherMainIncomeSource}
              variant="outlined"
            />
            <br />
            <br />
            <h2>Mother</h2>

            <TextField
              label="Full Name"
              onChange={(event) => handleChange("motherName", event)}
              defaultValue={values.motherName}
              variant="outlined"
            />
            <br />
            <br />
            <TextField
              label="Address"
              onChange={(event) => handleChange("motherAddress", event)}
              defaultValue={values.motherAddress}
              variant="outlined"
            />
            <br />
            <br />
            <TextField
              label="Telephone"
              onChange={(event) => handleChange("motherTelephone", event)}
              defaultValue={values.motherTelephone}
              variant="outlined"
            />
            <br />
            <br />
            <TextField
              label="Occupation"
              onChange={(event) => handleChange("motherOccupation", event)}
              defaultValue={values.motherOccupation}
              variant="outlined"
            />
            <br />
            <br />
            <FormControl variant="outlined">
              <InputLabel htmlFor="outlined-age-native-simple">
                Type of Employment
              </InputLabel>
              <Select
                label="Type of Employment"
                value={values.motherEmployment}
                onChange={(event) => handleChange("motherEmployment", event)}
                inputProps={{
                  name: "motherEmployment",
                  id: "outlined-age-native-simple",
                }}
                // onChange={(event) => console.log(event)}
              >
                <option value={"1"}>Permanent</option>
                <option value={"2"}>Contractual</option>
                <option value={"3"}>Casual</option>
                <option value={"4"}>Retired</option>
                <option value={"5"}>Self Employed</option>
                <option value={"6"}>None</option>
              </Select>
            </FormControl>
            <br />
            <br />
            <TextField
              label="Main Source of Income"
              onChange={(event) =>
                handleChange("motherMainIncomeSource", event)
              }
              defaultValue={values.motherMainIncomeSource}
              variant="outlined"
            />
            <br />
            <br />
          </div>
        );
      case "4":
        return (
          <div>
            <Typography component="h1" variant="h6">
              ii. Parents/ Guardian Occupation and Income Details
            </Typography>
            <br />
            <br />
            <FormControl variant="outlined">
              <InputLabel htmlFor="outlined-age-native-simple">
                Select Single Parent
              </InputLabel>
              <Select
                label="Select Living Parent"
                value={values.livingParent}
                onChange={(event) => handleChange("livingParent", event)}
                inputProps={{
                  name: "livingParent",
                  id: "outlined-age-native-simple",
                }}
                // onChange={(event) => console.log(event)}
              >
                <option value={"1"}>Father</option>
                <option value={"2"}>Mother</option>
              </Select>
            </FormControl>
            <br />
            <br />
            <TextField
              label="Full Name"
              onChange={(event) =>
                handleChange(
                  values.livingParent === "1" ? "fatherName" : "motherName",
                  event
                )
              }
              defaultValue={
                values.livingParent === "1"
                  ? values.fatherName
                  : values.motherName
              }
              variant="outlined"
            />
            <br />
            <br />
            <TextField
              label="Address"
              onChange={(event) =>
                handleChange(
                  values.livingParent === "1"
                    ? "fatherAddress"
                    : "motherAddress",
                  event
                )
              }
              defaultValue={
                values.livingParent === "1"
                  ? values.fatherAddress
                  : values.motherAddress
              }
              variant="outlined"
            />
            <br />
            <br />
            <TextField
              label="Telephone"
              onChange={(event) =>
                handleChange(
                  values.livingParent === "1"
                    ? "fatherTelephone"
                    : "motherTelephone",
                  event
                )
              }
              defaultValue={
                values.livingParent === "1"
                  ? values.fatherTelephone
                  : values.motherTelephone
              }
              variant="outlined"
            />
            <br />
            <br />
            <TextField
              label="Occupation"
              onChange={(event) =>
                handleChange(
                  values.livingParent === "1"
                    ? "fatherOccupation"
                    : "motherOccupation",
                  event
                )
              }
              defaultValue={
                values.livingParent === "1"
                  ? values.fatherOccupation
                  : values.motherOccupation
              }
              variant="outlined"
            />
            <br />
            <br />
            <FormControl variant="outlined">
              <InputLabel htmlFor="outlined-age-native-simple">
                Type of Employment
              </InputLabel>
              <Select
                label="Type of Employment"
                value={
                  values.livingParent === "1"
                    ? values.fatherEmployment
                    : values.motherEmployment
                }
                onChange={(event) =>
                  handleChange(
                    values.livingParent === "1"
                      ? "fatherEmployment"
                      : "motherEmployment",
                    event
                  )
                }
                inputProps={{
                  name: "fatherEmployment",
                  id: "outlined-age-native-simple",
                }}
                // onChange={(event) => console.log(event)}
              >
                <option value={"1"}>Permanent</option>
                <option value={"2"}>Contractual</option>
                <option value={"3"}>Casual</option>
                <option value={"4"}>Retired</option>
                <option value={"5"}>Self Employed</option>
                <option value={"6"}>None</option>
              </Select>
            </FormControl>
            <br />
            <br />
            <TextField
              label="Main Source of Income"
              onChange={(event) =>
                handleChange(
                  values.livingParent === "1"
                    ? "fatherMainIncomeSource"
                    : "motherMainIncomeSource",
                  event
                )
              }
              defaultValue={
                values.livingParent === "1"
                  ? values.fatherMainIncomeSource
                  : values.motherMainIncomeSource
              }
              variant="outlined"
            />
            <br />
            <br />
          </div>
        );
      case "5":
        return (
          <div>
            <Typography component="h1" variant="h6">
              ii. Parents/ Guardian Occupation and Income Details
            </Typography>
            <h2>Guardian</h2>
            <TextField
              label="Full Name"
              onChange={(event) => handleChange("guardianName", event)}
              defaultValue={values.guardianName}
              variant="outlined"
            />
            <br />
            <br />
            <TextField
              label="Address"
              onChange={(event) => handleChange("guardianAddress", event)}
              defaultValue={values.guardianAddress}
              variant="outlined"
            />
            <br />
            <br />
            <TextField
              label="Telephone"
              onChange={(event) => handleChange("guardianTelephone", event)}
              defaultValue={values.guardianTelephone}
              variant="outlined"
            />
            <br />
            <br />
            <TextField
              label="Occupation"
              onChange={(event) => handleChange("guardianOccupation", event)}
              defaultValue={values.guardianOccupation}
              variant="outlined"
            />
            <br />
            <br />
            <FormControl variant="outlined">
              <InputLabel htmlFor="outlined-age-native-simple">
                Type of Employment
              </InputLabel>
              <Select
                label="Type of Employment"
                value={values.guardianEmployment}
                onChange={(event) => handleChange("guradianEmployment", event)}
                inputProps={{
                  name: "guradianEmployment",
                  id: "outlined-age-native-simple",
                }}
                // onChange={(event) => console.log(event)}
              >
                <option value={"1"}>Permanent</option>
                <option value={"2"}>Contractual</option>
                <option value={"3"}>Casual</option>
                <option value={"4"}>Retired</option>
                <option value={"5"}>Self Employed</option>
                <option value={"6"}>None</option>
              </Select>
            </FormControl>
            <br />
            <br />
            <TextField
              label="Main Source of Income"
              onChange={(event) =>
                handleChange("guardianMainIncomeSource", event)
              }
              defaultValue={values.guardianMainIncomeSource}
              variant="outlined"
            />
            <br />
            <br />
          </div>
        );
    }
  };

  render() {
    const { values, stepLabel, handleChange } = this.props;
    const showOtherFamilyStatus = this.otherFamilyStatus(values, handleChange);
    const showOccupationInfo = this.occupationInformation(values, handleChange);
    return (
      <React.Fragment>
        <Container component="main" maxWidth="lg">
          <CssBaseline />
          <Typography component="h1" variant="h5">
            {stepLabel}
          </Typography>
          <br />
          <Typography component="h1" variant="h6">
            i. Family Background
          </Typography>
          <br />
          <form>
            <FormControl variant="outlined">
              <InputLabel htmlFor="outlined-age-native-simple">
                Family Status
              </InputLabel>
              <Select
                autoFocus
                label="Family Status"
                value={values.familyStatus}
                onChange={(event) => handleChange("familyStatus", event)}
                inputProps={{
                  name: "familyStatus",
                  id: "outlined-age-native-simple",
                }}
                // onChange={(event) => console.log(event)}
              >
                <option value={"1"}>Both Parents Dead</option>
                <option value={"2"}>One Parent Dead</option>
                <option value={"3"}>Both Parents Alive</option>
                <option value={"4"}>Single Parent</option>
                <option value={"5"}>Other</option>
              </Select>
            </FormControl>
            <br />
            <br />
            {showOtherFamilyStatus}
            <TextField
              label="Number Of Siblings (alive)"
              type="number"
              onChange={(event) => handleChange("numberOfSiblings", event)}
              defaultValue={values.numberOfSiblings}
              variant="outlined"
            />
            <br />
            <br />
            <TextField
              label="Estimated Family Income (Annually Kshs.)"
              type="number"
              onChange={(event) => handleChange("estimatedFamilyIncome", event)}
              defaultValue={values.estimatedFamilyIncome}
              variant="outlined"
            />
            <br />
            <br />
            <TextField
              label="Estimated Family Expenses (Annually Kshs.)"
              type="number"
              onChange={(event) =>
                handleChange("estimatedFamilyExpenses", event)
              }
              defaultValue={values.estimatedFamilyExpenses}
              variant="outlined"
            />
            <br />
            <br />
            {showOccupationInfo}
            <Button
              type="submit"
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
    width: 200,
  },
  backButton: {
    margin: 15,
    width: 75,
  },
};

export default FormGuardianDetails;

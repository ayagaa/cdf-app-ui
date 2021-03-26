import React, { Component } from 'react';

import Grid from '@material-ui/core/Grid';
// import 'date-fns';
// import DateFnsUtils from '@date-io/date-fns';
// import {
//   MuiPickersUtilsProvider,
//   KeyboardTimePicker,
//   KeyboardDatePicker,
// } from '@material-ui/pickers';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import DatePicker from 'material-ui/DatePicker';

export class FormPersonalDetails extends Component {
  continue = e => {
    console.log("Continue");
    e.preventDefault();
    this.props.nextStep();
  };

  goback = e => {
    console.log("Go Back");
    e.preventDefault();
    this.props.previousStep();
  };

  render() {
    const { values, stepLabel, handleChange } = this.props;
    const genderItems = ['Female', 'Male'];
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <h2>{stepLabel}</h2>
          <br />
          <h5>i. Personal, Institutional and Other Details</h5>
          <br />
          <TextField
            floatingLabelText="Applicants Official Name"
            onChange={(event) => handleChange('name', event)}
            defaultValue={values.name}
          />
          <br />
          <SelectField
            floatingLabelText="Gender"
            value={values.gender}
            onChange={(event) => handleChange('gender', event)}>
            <MenuItem value={'Female'} primaryText="Female" />
            <MenuItem value={'Male'} primaryText="Male" />
          </SelectField>
          <br />

          <br />
          <RaisedButton
            label="Continue"
            primary={true}
            style={styles.button}
            onClick={this.continue}
          />
        </React.Fragment>
      </MuiThemeProvider>
    )
  }
}

const styles = {
  button: {
    margin: 15
  }
}

export default FormPersonalDetails

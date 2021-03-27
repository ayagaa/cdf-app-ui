import React, { Component } from 'react';


import 'date-fns';
import MomentUtils from "@date-io/moment";
import DateFnsUtils from '@date-io/date-fns';

import {
  MuiPickersUtilsProvider,
  DatePicker,
} from 'material-ui-pickers';

import Grid from '@material-ui/core/Grid';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
//import DatePicker from 'material-ui/DatePicker';

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

  acceptNewDate(date){
    const { handleChange } = this.props;
    handleChange('dateOfBirth', date);
  }

  render() {
    const { values, stepLabel, handleChange } = this.props;
    const genderItems = ['Female', 'Male'];
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <h3>{stepLabel}</h3>
          {/* <br /> */}
          <h5>i. Personal, Institutional and Other Details</h5>
          <TextField
            floatingLabelText="Applicants Official Name"
            onChange={(event) => handleChange('name', event)}
            defaultValue={values.name}
          />
          <br />
          {/* <br /> */}
          <SelectField
            floatingLabelText="Gender"
            value={values.gender}
            onChange={(event) => handleChange('gender', event)}>
            <MenuItem value={'Female'} primaryText="Female" />
            <MenuItem value={'Male'} primaryText="Male" />
          </SelectField>
          <br />
          <br />
          <MuiPickersUtilsProvider utils={MomentUtils}>
            <Grid container justify="space-around">
              <DatePicker
                label="Date of birth"
                keyboard
                placeholder="DD/MM/YYYY"
                format={"DD/MM/YYYY"}
                mask={value =>
                  value
                    ? [/\d/, /\d/, "/", /\d/, /\d/, "/", /\d/, /\d/, /\d/, /\d/]
                    : []
                }
                value={values.dateOfBirth}
                onChange={(date) => this.acceptNewDate(date)}
                disableOpenOnEnter
                animateYearScrolling={false}
                autoOk={true}
                clearable
              />
            </Grid>
          </MuiPickersUtilsProvider>
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

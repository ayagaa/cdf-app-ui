import React, { Component } from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export class FormAcademicPerformance extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  }

  goback = e => {
    e.preventDefault();
    this.props.previousStep();
  }

  render() {
    const { values, stepLabel } = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <h3>{stepLabel}</h3>
          <br />
          <RaisedButton
            label="Back"
            primary={true}
            style={styles.button}
            onClick={this.goback}
          />
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

export default FormAcademicPerformance

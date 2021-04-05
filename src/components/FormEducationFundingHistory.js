import React, { Component } from "react";

import { FormControl, Button, Select, TextField } from "@material-ui/core";

import InputLabel from "@material-ui/core/InputLabel";
import Typography from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";

export class FormEducationFundingHistory extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  goback = (e) => {
    e.preventDefault();
    this.props.previousStep();
  };

  render() {
    const { values, stepLabel, handleChange } = this.props;
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
              i. State the main source of funding for your education in the past
              as below:
            </Typography>
            <br />
            <TextField
              autoFocus
              label="In secondary school"
              onChange={(event) =>
                handleChange("secondaryMainFundingSource", event)
              }
              defaultValue={values.secondaryMainFundingSource}
              variant="outlined"
            />
            <br />
            <br />
            <TextField
              label="In college"
              onChange={(event) =>
                handleChange("collegeMainFundingSource", event)
              }
              defaultValue={values.collegeMainFundingSource}
              variant="outlined"
            />
            <br />
            <br />
            <TextField
              label="In the university"
              onChange={(event) =>
                handleChange("universityMainFundingSource", event)
              }
              defaultValue={values.universityMainFundingSource}
              variant="outlined"
            />
            <br />
            <br />
            <Typography component="h1" variant="h6">
              ii. Indicate other sources of funding if any:
            </Typography>
            <br />
            <TextField
              label="In secondary school"
              onChange={(event) =>
                handleChange("secondaryOtherFundingSource", event)
              }
              defaultValue={values.secondaryOtherFundingSource}
              variant="outlined"
            />
            <br />
            <br />
            <TextField
              label="In college"
              onChange={(event) =>
                handleChange("collegeOtherFundingSource", event)
              }
              defaultValue={values.collegeOtherFundingSource}
              variant="outlined"
            />
            <br />
            <br />
            <TextField
              label="In the university"
              onChange={(event) =>
                handleChange("universityOtherFundingSource", event)
              }
              defaultValue={values.universityOtherFundingSource}
              variant="outlined"
            />
            <br />
            <br />
            <br/>
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

export default FormEducationFundingHistory;

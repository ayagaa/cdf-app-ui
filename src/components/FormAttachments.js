import React, { Component } from "react";

import { FormControl, Button, Select, TextField } from "@material-ui/core";

import Grid from "@material-ui/core/Grid";
import InputLabel from "@material-ui/core/InputLabel";
import Typography from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";

import { DropzoneArea } from "material-ui-dropzone";

export class FormAttachments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      files: [],
    };
  }

  continue = (e) => {
    e.preventDefault();
    const { values } = this.props;
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
          <br />
          <br />
          <Typography component="h3" variant="h7" align="left">
            <ul>
              <li>
                Students' transcript/ Report Form
              </li>
              <li>
                Scan of parents' / guardians National Identity Card
              </li>
              <li>
                Scan of students' National Identity Card (mandatory for post school students)
              </li>
              <li>
                Scan of birth certificate
              </li>
              <li>
                Scan of the secondary/ college/ university ID card (if applicable)
              </li>
              <li style={{display:values.familyStatus === "1" ? "block" : "none"}}>
                Scan of death certificate/ burial permit (mandatory for orphans)
              </li>
              <li>
                Scan of current fees structure (mandatory for all applicants)
              </li>
              <li>
                Scan of admission letters (mandatory for colleges and university)
              </li>
            </ul>
          </Typography>
          <form>
            <DropzoneArea
              initialFiles={values.fileAttachments}
              acceptedFiles={['image/jpeg', 'image/png', 'image/bmp']}
              maxFileSize={5000000}
              onChange={handleChange.bind(this)}
            />
            <br />
            <br />
            <Button
              variant="contained"
              color="primary"
              style={styles.backButton}
              onClick={this.goback}
            >
              Back
            </Button>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              style={styles.button}
              onClick={this.continue}
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

export default FormAttachments;

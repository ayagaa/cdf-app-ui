import React, { Component } from "react";

import {
  FormControl,
  Button,
  Select,
  TextField,
} from "@material-ui/core";

import InputLabel from "@material-ui/core/InputLabel";
import Typography from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

export class FormSiblingDetails extends Component {
  state = {
    id: "",
    name: "",
    institutionType: "",
    feesPayable: null,
  };

  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  goback = (e) => {
    e.preventDefault();
    this.props.previousStep();
  };

  setIdAndName = (inputName) => {
    let { id } = this.state;

    const guid = (
      this.guidPart() +
      this.guidPart() +
      this.guidPart().substr(0, 3) +
      "-" +
      this.guidPart() +
      "-" +
      this.guidPart() +
      this.guidPart() +
      this.guidPart()
    ).toLowerCase();

    this.setState({
      id: guid,
      name: inputName,
    });
  };

  setInstitutionType = (inputType) => {
    this.setState({
      institutionType: inputType,
    });
  };

  setFeesAmount = (inputAmount) => {
    this.setState({
      feesPayable: inputAmount,
    });
  };

  addSibling = () => {
    const { handleChange } = this.props;
    handleChange("siblingsList", this.state);
    const nameField = document.getElementById('nameField');
    const institutionSelect = document.getElementById('institutionSelect');
    const feesField = document.getElementById('feesField');

    nameField.value = '';
    institutionSelect.innerHTML = '';
    feesField.value = null;
  };

  guidPart() {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
  }

  loadDataGrid = () => {
    const { values } = this.props;
    const columns = [
      { field: "id", headerName: "S/No.", width: 90 },
      { field: "name", headerName: "Name", width: 150 },
      { field: "institutionType", headerName: "Institution Type", width: 200 },
      {
        field: "feesPayable",
        headerName: "Annual Fees",
        width: 150,
      },
    ];

    return (
      <div style={{ height: 500, width: "100%" }}>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell width={75}>S/No.</TableCell>
                <TableCell width={200}>Name</TableCell>
                <TableCell>Institution Type</TableCell>
                <TableCell width={100}>Annual Fees (Kshs)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {values.siblingsList.map((row) => (
                <TableRow key={row.id}>
                  <TableCell component="th" scope="row">
                    {row.id}
                  </TableCell>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.institutionType}</TableCell>
                  <TableCell>{row.feesPayable}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    );
  };

  render() {
    const { values, stepLabel, handleChange } = this.props;

    const showDataGrid = this.loadDataGrid();
    return (
      <React.Fragment>
        <Container component="main" maxWidth="lg">
          <CssBaseline />
          <Typography component="h1" variant="h5">
            {stepLabel}
          </Typography>
          <br />
          <br />
          <TextField
            id="nameField"
            label="Name"
            onChange={(event) => this.setIdAndName(event.target.value)}
            defaultValue={this.state.name}
            variant="outlined"
          />
          <br />
          <br />
          <FormControl variant="outlined">
            <InputLabel htmlFor="outlined-age-native-simple">
              Type of Education Institution
            </InputLabel>
            <Select
            id="institutionSelect"
              label="Type of Education Institution"
              value={this.state.institutionType}
              onChange={(event) => this.setInstitutionType(event.target.value)}
            >
              <option value={"School"}>School</option>
              <option value={"College"}>College</option>
              <option value={"University"}>University</option>
            </Select>
          </FormControl>
          <br />
          <br />
          <TextField
          id="feesField"
            label="Annual Fees Payable (Kshs)"
            type="number"
            onChange={(event) => this.setFeesAmount(event.target.value)}
            defaultValue={this.state.feesPayable}
            variant="outlined"
          />
          <br />
          <br />
          <Button
            // type="submit"
            variant="contained"
            color="secondary"
            style={styles.button}
            onClick={this.addSibling}
          >
            Add Sibling
          </Button>
          <br />
          <br />
          {showDataGrid}
          <br />
          <br />
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

export default FormSiblingDetails;

import React, { Component } from "react";

import "./styles/UserForm.css";

import moment from "moment";

// import Stepper from 'material-ui/Stepper/Stepper';
// import Step from 'material-ui/Stepper/Step';
// import StepLabel from 'material-ui/Stepper/StepLabel';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

import FormAcademicPerformance from "./FormAcademicPerformance";
import FormAdditionalDetails from "./FormAdditionalDetails";
import FormAttachments from "./FormAttachments";
import FormDeclaration from "./FormDeclaration";
import FormEducationFundingHistory from "./FormEducationFundingHistory";
import FormGuardianDetails from "./FormGuardianDetails";
import FormPersonalDetails from "./FormPersonalDetails";
import FormPollingStationDetails from "./FormPollingStationDetails";
import FormRefereesDetails from "./FormRefereesDetails";
import FormSiblingDetails from "./FormSiblingDetails";
import FormVerifierDetails from "./FormVerifierDetails";

export class UserForm extends Component {
  state = {
    step: 1,
    //Variables for page 1 Personal details
    name: "",
    gender: "",
    dateOfBirth: null,
    idNo: "",
    institutionName: "",
    admissionNumber: "",
    institutionBranch: "",
    department: "",
    course: "",
    modeOfStudy: "",
    grade: "",
    courseDuration: "",
    yearOfCompletion: 2021,
    phoneNumber: "",
    pollingStation: "",
    ward: "",
    location: "",
    subLocation: "",
    physicalAddress: "",
    permanentAddress: "",
    institutionAddress: "",
    institutionPhoneNumber: "",
    amountApplied: "",
    //Variables for page 2 Parent /guardian
    familyStatus: "",
    otherFamilyStatus: "",
    numberOfSiblings: 0,
    estimateFamilyIncome: 0,
    estimateFamilyExpenses: 0,
    livingParent: "",
    fatherName: "",
    fatherAddress: "",
    fatherTelephone: "",
    fatherOccupation: "",
    fatherEmployment: "",
    fatherMainIncomeSource: "",
    motherName: "",
    motherAddress: "",
    motherTelephone: "",
    motherOccupation: "",
    motherEmployment: "",
    motherMainIncomeSource: "",
    guardianName: "",
    guardianAddress: "",
    guardianTelephone: "",
    guardianOccupation: "",
    guardianEmployment: "",
    guardianMainIncomeSource: "",
    //Variables for page 3 Siblings list
    siblingsList: [],
    //Variables for page 4 Additional info
    applicationReason: "",
    hasPreviousBursary: "",
    previousBursaryAmount: null,
    previousBursaryDate: null,
    previousFinancialSupport: "",
    previousFinancialSupportDetails: "",
    hasPhysicalImpairment: "",
    physicalImpairmentDetails: "",
    hasChronicIllness: "",
    chronicIllnessDetails: "",
    hasDisabledParent: "",
    disableParentDetails: "",
    hasParentChronicIllness: "",
    parentChronicIllnessDetails: "",
    //Variables for page 5 Education funding history
    secondaryMainFundingSource: "",
    collegeMainFundingSource: "",
    universityMainFundingSource: "",
    secondaryOtherFundingSource: "",
    collegeOtherFundingSource: "",
    universityOtherFundingSource: "",
    //Variables for page 6 Academic performance
    averageAcademicPerformance: "",
    hasAbsenceRecord: "",
    absenceReason: "",
    absenceDuration: null,
    totalAnnualFees: null,
    lastSemesterBalance: null,
    currentSemesterBalance: null,
    nextSemesterBalance: null,
    helbLoanReceived: null,
    //Variables for page 7 Referees
    referee1Name: "",
    referee1Address: "",
    referee1PhoneNumber: "",
    referee2Name: "",
    referee2Address: "",
    referee2PhoneNumber: "",
    religiousLeaderName: "",
    religiousLeaderEmail: "",
    religiousLeaderPhone: "",
    religiousLeaderReligionName: "",
    religiousLeaderReligionType: "",
    otherReligionDetials: "",
    chiefName: "",
    chiefEmail: "",
    chiefPhone: "",
    chiefLocation: "",
    chiefSublocation: "",
    //Variables for page 8 Attachments
    studentTranscriptCopy: null,
    guardianIDCopy: null,
    studentIdCopy: null,
    studentBirthCertificate: null,
    institutionIdCopy: null,
    deathCertificatesCopy: null,
    feeStructureCopy: null,
    admissionLetterCopy: null,
    fileAttachments: [],
    //Variables for page 9 guardian and student declaration
    hasStudentVerified: "",
    studentVerifiedDate: null,
    hasGuardianVerified: "",
    guardianVerifiedDate: null,
  };

  getSteps = () => {
    return [
      "Personal",
      "Guardian",
      "Siblings",
      "Other Info",
      "Funding",
      "Academics",
      "Referees",
      "Attachments",
      "Declarations",
    ];
  };

  getStepContent = (step) => {
    //const { step } = this.state;
    switch (step) {
      case 1:
        return "Enter your personal and institution details";
      // case 2:
      //     return 'Enter your polling station details';
      case 2:
        return "Enter you parent/ guardian details";
      case 3:
        return "Enter information on your siblings in school/ college / university this year";
      case 4:
        return "Enter other required information";
      case 5:
        return "Enter information on education funding history";
      case 6:
        return "Enter your academic performance";
      case 7:
        return "Enter information about your referees and verification authorities";
      case 8:
        return "Upload relevant attachments";
      // case 9:
      //     return 'Enter contact information of those who are to verify you details';
      case 9:
        return "Confirm the application details you have entered";
    }
  };

  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1,
    });
  };

  previousStep = () => {
    const { step } = this.state;
    if (step > 1) {
      this.setState({
        step: step - 1,
      });
    }
  };

  handleChange = (input, e) => {
    let inputValue = "";
    if (input && input.length > 0 && !e) {
      this.setState({
        fileAttachments: input,
      });
    } else if (input === "siblingsList" && e && e.id) {
      let { siblingsList } = this.state;
      siblingsList.push(e);
      this.setState({
        siblingsList: siblingsList,
      });
    } else if (input === "dateOfBirth" && moment(e).isValid()) {
      inputValue = e;
      this.setState({ [input]: inputValue });
    } else if (input === "previousBursaryDate" && moment(e).isValid()) {
      inputValue = e;
      this.setState({ [input]: inputValue });
    } else if (e && e.target && e.target.value) {
      inputValue = e.target.value;
      this.setState({ [input]: inputValue });
    } else if (e && e.target && e.target.innerText) {
      inputValue = e.target.innerText;
      this.setState({ [input]: inputValue });
    }
  };

  getPage = (step, values, stepLabel) => {
    switch (step) {
      case 1:
        return (
          <FormPersonalDetails
            nextStep={() => this.nextStep()}
            previousStep={() => this.previousStep()}
            handleChange={(input, e) => this.handleChange(input, e)}
            values={values}
            stepLabel={stepLabel}
          />
        );
      case 2:
        return (
          <FormGuardianDetails
            nextStep={() => this.nextStep()}
            previousStep={() => this.previousStep()}
            handleChange={(input, e) => this.handleChange(input, e)}
            values={values}
            stepLabel={stepLabel}
          />
        );
      case 3:
        return (
          <FormSiblingDetails
            nextStep={() => this.nextStep()}
            previousStep={() => this.previousStep()}
            handleChange={(input, e) => this.handleChange(input, e)}
            values={values}
            stepLabel={stepLabel}
          />
        );
      case 4:
        return (
          <FormAdditionalDetails
            nextStep={() => this.nextStep()}
            previousStep={() => this.previousStep()}
            handleChange={(input, e) => this.handleChange(input, e)}
            values={values}
            stepLabel={stepLabel}
          />
        );
      case 5:
        return (
          <FormEducationFundingHistory
            nextStep={() => this.nextStep()}
            previousStep={() => this.previousStep()}
            handleChange={(input, e) => this.handleChange(input, e)}
            values={values}
            stepLabel={stepLabel}
          />
        );
      case 6:
        return (
          <FormAcademicPerformance
            nextStep={() => this.nextStep()}
            previousStep={() => this.previousStep()}
            handleChange={(input, e) => this.handleChange(input, e)}
            values={values}
            stepLabel={stepLabel}
          />
        );
      case 7:
        return (
          <FormRefereesDetails
            nextStep={() => this.nextStep()}
            previousStep={() => this.previousStep()}
            handleChange={(input, e) => this.handleChange(input, e)}
            values={values}
            stepLabel={stepLabel}
          />
        );
      case 8:
        return (
          <FormAttachments
            nextStep={() => this.nextStep()}
            previousStep={() => this.previousStep()}
            handleChange={(input, e) => this.handleChange(input, e)}
            values={values}
            stepLabel={stepLabel}
          />
        );
      case 9:
        return (
          <FormDeclaration
            nextStep={() => this.nextStep()}
            previousStep={() => this.previousStep()}
            handleChange={(input, e) => this.handleChange(input, e)}
            values={values}
            stepLabel={stepLabel}
          />
        );
    }
  };

  render() {
    const { step } = this.state;
    const steps = this.getSteps();
    const {
      //Variables for page 1 Personal details
      name,
      gender,
      dateOfBirth,
      idNo,
      institutionName,
      admissionNumber,
      institutionBranch,
      department,
      course,
      modeOfStudy,
      grade,
      courseDuration,
      yearOfCompletion,
      phoneNumber,
      pollingStation,
      ward,
      location,
      subLocation,
      physicalAddress,
      permanentAddress,
      institutionAddress,
      institutionPhoneNumber,
      amountApplied,
      //Variables for page 2 Parent /guardian details
      familyStatus,
      otherFamilyStatus,
      numberOfSiblings,
      estimateFamilyIncome,
      estimateFamilyExpenses,
      livingParent,
      fatherName,
      fatherAddress,
      fatherTelephone,
      fatherOccupation,
      fatherEmployment,
      fatherMainIncomeSource,
      motherName,
      motherAddress,
      motherTelephone,
      motherOccupation,
      motherEmployment,
      motherMainIncomeSource,
      guardianName,
      guardianAddress,
      guardianTelephone,
      guardianOccupation,
      guardianEmployment,
      guardianMainIncomeSource,
      //Variables for page 3 Siblings list
      siblingsList,
      //Variables for page 4 Additional info
      applicationReason,
      hasPreviousBursary,
      previousBursaryAmount,
      previousBursaryDate,
      previousFinancialSupport,
      previousFinancialSupportDetails,
      hasPhysicalImpairment,
      physicalImpairmentDetails,
      hasChronicIllness,
      chronicIllnessDetails,
      hasDisabledParent,
      disableParentDetails,
      hasParentChronicIllness,
      parentChronicIllnessDetails,
      //Variables for page 5 Education funding history
      secondaryMainFundingSource,
      collegeMainFundingSource,
      universityMainFundingSource,
      secondaryOtherFundingSource,
      collegeOtherFundingSource,
      universityOtherFundingSource,
      //Variables for page 6 Academic performance
      averageAcademicPerformance,
      hasAbsenceRecord,
      absenceReason,
      absenceDuration,
      totalAnnualFees,
      lastSemesterBalance,
      currentSemesterBalance,
      nextSemesterBalance,
      helbLoanReceived,
      //Variables for page 7 Referees
      referee1Name,
      referee1Address,
      referee1PhoneNumber,
      referee2Name,
      referee2Address,
      referee2PhoneNumber,
      religiousLeaderName,
      religiousLeaderEmail,
      religiousLeaderPhone,
      religiousLeaderReligionName,
      religiousLeaderReligionType,
      otherReligionDetials,
      chiefName,
      chiefEmail,
      chiefPhone,
      chiefLocation,
      chiefSublocation,
      //Variables for page 8 Attachments
      studentTranscriptCopy,
      guardianIDCopy,
      studentIdCopy,
      studentBirthCertificate,
      institutionIdCopy,
      deathCertificatesCopy,
      feeStructureCopy,
      admissionLetterCopy,
      fileAttachments,
      //Variables for page 9 guardian and student declaration
      hasStudentVerified,
      studentVerifiedDate,
      hasGuardianVerified,
      guardianVerifiedDate,
    } = this.state;

    const values = {
      //Variables for page 1 Personal details
      name,
      gender,
      dateOfBirth,
      idNo,
      institutionName,
      admissionNumber,
      institutionBranch,
      department,
      course,
      modeOfStudy,
      grade,
      courseDuration,
      yearOfCompletion,
      phoneNumber,
      pollingStation,
      ward,
      location,
      subLocation,
      physicalAddress,
      permanentAddress,
      institutionAddress,
      institutionPhoneNumber,
      amountApplied,
      //Variables for page 2 Parent /guardian details
      familyStatus,
      otherFamilyStatus,
      numberOfSiblings,
      estimateFamilyIncome,
      estimateFamilyExpenses,
      livingParent,
      fatherName,
      fatherAddress,
      fatherTelephone,
      fatherOccupation,
      fatherEmployment,
      fatherMainIncomeSource,
      motherName,
      motherAddress,
      motherTelephone,
      motherOccupation,
      motherEmployment,
      motherMainIncomeSource,
      guardianName,
      guardianAddress,
      guardianTelephone,
      guardianOccupation,
      guardianEmployment,
      guardianMainIncomeSource,
      //Variables for page 3 Siblings list
      siblingsList,
      //Variables for page 4 Additional info
      applicationReason,
      hasPreviousBursary,
      previousBursaryAmount,
      previousBursaryDate,
      previousFinancialSupport,
      previousFinancialSupportDetails,
      hasPhysicalImpairment,
      physicalImpairmentDetails,
      hasChronicIllness,
      chronicIllnessDetails,
      hasDisabledParent,
      disableParentDetails,
      hasParentChronicIllness,
      parentChronicIllnessDetails,
      //Variables for page 5 Education funding history
      secondaryMainFundingSource,
      collegeMainFundingSource,
      universityMainFundingSource,
      secondaryOtherFundingSource,
      collegeOtherFundingSource,
      universityOtherFundingSource,
      //Variables for page 6 Academic performance
      averageAcademicPerformance,
      hasAbsenceRecord,
      absenceReason,
      absenceDuration,
      totalAnnualFees,
      lastSemesterBalance,
      currentSemesterBalance,
      nextSemesterBalance,
      helbLoanReceived,
      //Variables for page 7 Referees
      referee1Name,
      referee1Address,
      referee1PhoneNumber,
      referee2Name,
      referee2Address,
      referee2PhoneNumber,
      religiousLeaderName,
      religiousLeaderEmail,
      religiousLeaderPhone,
      religiousLeaderReligionName,
      religiousLeaderReligionType,
      otherReligionDetials,
      chiefName,
      chiefEmail,
      chiefPhone,
      chiefLocation,
      chiefSublocation,
      //Variables for page 8 Attachments
      studentTranscriptCopy,
      guardianIDCopy,
      studentIdCopy,
      studentBirthCertificate,
      institutionIdCopy,
      deathCertificatesCopy,
      feeStructureCopy,
      admissionLetterCopy,
      fileAttachments,
      //Variables for page 10 guardian and student declaration
      hasStudentVerified,
      studentVerifiedDate,
      hasGuardianVerified,
      guardianVerifiedDate,
    };

    let stepLabel = this.getStepContent(step);
    const currentPage = this.getPage(step, values, stepLabel);

    return (
      <div>
        {/* <MuiThemeProvider> */}
        <div className="form-container">
          <div className="form-steps-small"></div>
          <div className="form-steps-large">
            <Stepper activeStep={step - 1}>
              {steps.map((label, index) => {
                return (
                  <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                  </Step>
                );
              })}
            </Stepper>
          </div>
          {/* <br></br> */}
          <div className="form-body">{currentPage}</div>
        </div>
        {/* </MuiThemeProvider> */}
      </div>
    );
  }
}

export default UserForm;

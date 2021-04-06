import React, { Component } from "react";

import "./styles/UserForm.css";

import moment from "moment";

import Typography from "@material-ui/core/Typography";
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

import { applicationPost } from "../store/epic/applicationEpic";

export class UserForm extends Component {
  state = {
    userEmail:"",
    userPassword: "",
    isAuthenticated: false,
    userToken: "",
    step: 1,
    //Variables for page 1 Personal details
    name: "",
    gender: "",
    dateOfBirth: null,
    idNo: "",
    levelOfStudy: "",
    institutionName: "",
    admissionNumber: "",
    institutionBranch: "",
    department: "",
    course: "",
    modeOfStudy: "",
    grade: "",
    courseDuration: "",
    yearOfCompletion: null,
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
    fileAttachments: [],
    //Variables for page 9 guardian and student declaration
    //Approvals
    religiousLeaderApproved: "",
    administratorApproved: "",
    pollingStationApproval: "",
    pollingStationRejectReasons:"",
    cdfCommitteeApproval: "",
    cdfCommitteeRejectReasons:"",
    amountApproved: 0
  };

  componentDidMount = () =>{
      const [application] = window.store.application;
      this.handleLogin(application.authUser);
  }

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

  handleLogin = (loginState) => {
      if(loginState){
          this.setState({
            userEmail: loginState.userEmail,
            userPassword: loginState.userPassword,
            isAuthenticated: loginState.isAuthenticated,
            userToken: loginState.userToken,
            step: loginState.step,
            name: loginState.name,
            gender: loginState.gender,
            dateOfBirth: loginState.dateOfBirth,
            idNo: loginState.idNo,
            levelOfStudy: loginState.levelOfStudy,
            institutionName: loginState.institutionName,
            admissionNumber: loginState.admissionNumber,
            institutionBranch: loginState.institutionBranch,
            department: loginState.department,
            course: loginState.course,
            modeOfStudy: loginState.modeOfStudy,
            grade: loginState.grade,
            courseDuration: loginState.courseDuration,
            yearOfCompletion: loginState.yearOfCompletion,
            phoneNumber: loginState.phoneNumber,
            pollingStation: loginState.pollingStation,
            ward: loginState.ward,
            location: loginState.location,
            subLocation: loginState.subLocation,
            physicalAddress: loginState.physicalAddress,
            permanentAddress: loginState.permanentAddress,
            institutionAddress: loginState.institutionAddress,
            institutionPhoneNumber: loginState.institutionPhoneNumber,
            amountApplied: loginState.amountApplied,
            familyStatus: loginState.familyStatus,
            otherFamilyStatus: loginState.otherFamilyStatus,
            numberOfSiblings: loginState.numberOfSiblings,
            estimateFamilyIncome: loginState.estimateFamilyIncome,
            estimateFamilyExpenses: loginState.estimateFamilyExpenses,
            livingParent: loginState.livingParent,
            fatherName: loginState.fatherName,
            fatherAddress: loginState.fatherAddress,
            fatherTelephone: loginState.fatherTelephone,
            fatherOccupation: loginState.fatherOccupation,
            fatherEmployment: loginState.fatherEmployment,
            fatherMainIncomeSource: loginState.fatherMainIncomeSource,
            motherName: loginState.motherName,
            motherAddress: loginState.motherAddress,
            motherTelephone: loginState.motherTelephone,
            motherOccupation: loginState.motherOccupation,
            motherEmployment: loginState.motherEmployment,
            motherMainIncomeSource: loginState.motherMainIncomeSource,
            guardianName: loginState.guardianName,
            guardianAddress: loginState.guardianAddress,
            guardianTelephone: loginState.guardianTelephone,
            guardianOccupation: loginState.guardianOccupation,
            guardianEmployment: loginState.guardianEmployment,
            guardianMainIncomeSource: loginState.guardianMainIncomeSource,
            siblingsList: loginState.siblingsList,
            applicationReason: loginState.applicationReason,
            hasPreviousBursary: loginState.hasPreviousBursary,
            previousBursaryAmount: loginState.previousBursaryAmount,
            previousBursaryDate: loginState.previousBursaryDate,
            previousFinancialSupport: loginState.previousFinancialSupport,
            previousFinancialSupportDetails: loginState.previousFinancialSupportDetails,
            hasPhysicalImpairment: loginState.hasPhysicalImpairment,
            physicalImpairmentDetails: loginState.physicalImpairmentDetails,
            hasChronicIllness: loginState.hasChronicIllness,
            chronicIllnessDetails: loginState.chronicIllnessDetails,
            hasDisabledParent: loginState.hasDisabledParent,
            disableParentDetails: loginState.disableParentDetails,
            hasParentChronicIllness: loginState.hasParentChronicIllness,
            parentChronicIllnessDetails: loginState.parentChronicIllnessDetails,
            secondaryMainFundingSource: loginState.secondaryMainFundingSource,
            collegeMainFundingSource: loginState.collegeMainFundingSource,
            universityMainFundingSource: loginState.universityMainFundingSource,
            secondaryOtherFundingSource: loginState.secondaryOtherFundingSource,
            collegeOtherFundingSource: loginState.collegeOtherFundingSource,
            universityOtherFundingSource: loginState.universityOtherFundingSource,
            averageAcademicPerformance: loginState.averageAcademicPerformance,
            hasAbsenceRecord: loginState.hasAbsenceRecord,
            absenceReason: loginState.absenceReason,
            absenceDuration: loginState.absenceDuration,
            totalAnnualFees: loginState.totalAnnualFees,
            lastSemesterBalance: loginState.lastSemesterBalance,
            currentSemesterBalance: loginState.currentSemesterBalance,
            nextSemesterBalance: loginState.nextSemesterBalance,
            helbLoanReceived: loginState.helbLoanReceived,
            referee1Name: loginState.referee1Name,
            referee1Address: loginState.referee1Address,
            referee1PhoneNumber: loginState.referee1PhoneNumber,
            referee2Name: loginState.referee2Name,
            referee2Address: loginState.referee2Address,
            referee2PhoneNumber: loginState.referee2PhoneNumber,
            religiousLeaderName: loginState.religiousLeaderName,
            religiousLeaderEmail: loginState.religiousLeaderEmail,
            religiousLeaderPhone: loginState.religiousLeaderPhone,
            religiousLeaderReligionName: loginState.religiousLeaderReligionName,
            religiousLeaderReligionType: loginState.religiousLeaderReligionType,
            otherReligionDetials: loginState.otherReligionDetials,
            chiefName: loginState.chiefName,
            chiefEmail: loginState.chiefEmail,
            chiefPhone: loginState.chiefPhone,
            chiefLocation: loginState.chiefLocation,
            chiefSublocation: loginState.chiefSublocation,
            fileAttachments: loginState.fileAttachments,
            religiousLeaderApproved: loginState.religiousLeaderApproved,
            administratorApproved: loginState.administratorApproved,
            pollingStationApproval: loginState.pollingStationApproval,
            pollingStationRejectReasons: loginState.pollingStationRejectReasons,
            cdfCommitteeApproval: loginState.cdfCommitteeApproval,
            cdfCommitteeRejectReasons: loginState.cdfCommitteeRejectReasons,
            amountApproved: loginState.amountApproved
          });
      }
  } 

  nextStep = () => {
    //const { step } = this.state;
    const {
        userEmail,
        userPassword,
        isAuthenticated,
        userToken,
        step,
        name,
        gender,
        dateOfBirth,
        idNo,
        levelOfStudy,
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
        siblingsList,
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
        secondaryMainFundingSource,
        collegeMainFundingSource,
        universityMainFundingSource,
        secondaryOtherFundingSource,
        collegeOtherFundingSource,
        universityOtherFundingSource,
        averageAcademicPerformance,
        hasAbsenceRecord,
        absenceReason,
        absenceDuration,
        totalAnnualFees,
        lastSemesterBalance,
        currentSemesterBalance,
        nextSemesterBalance,
        helbLoanReceived,
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
        fileAttachments,
        religiousLeaderApproved,
        administratorApproved,
        pollingStationApproval,
        pollingStationRejectReasons,
        cdfCommitteeApproval,
        cdfCommitteeRejectReasons,
        amountApproved
      } = this.state;

      this.setState({
        step: step + 1,
      });

      const applicationDetails = {
        userEmail: userEmail,
        userPassword: userPassword,
        isAuthenticated: isAuthenticated,
        userToken: userToken,
        step: step,
        name: name,
        gender: gender,
        dateOfBirth: dateOfBirth,
        idNo: idNo,
        levelOfStudy: levelOfStudy,
        institutionName: institutionName,
        admissionNumber: admissionNumber,
        institutionBranch: institutionBranch,
        department: department,
        course: course,
        modeOfStudy: modeOfStudy,
        grade: grade,
        courseDuration: courseDuration,
        yearOfCompletion: yearOfCompletion,
        phoneNumber: phoneNumber,
        pollingStation: pollingStation,
        ward: ward,
        location: location,
        subLocation: subLocation,
        physicalAddress: physicalAddress,
        permanentAddress: permanentAddress,
        institutionAddress: institutionAddress,
        institutionPhoneNumber: institutionPhoneNumber,
        amountApplied: amountApplied,
        familyStatus: familyStatus,
        otherFamilyStatus: otherFamilyStatus,
        numberOfSiblings: numberOfSiblings,
        estimateFamilyIncome: estimateFamilyIncome,
        estimateFamilyExpenses: estimateFamilyExpenses,
        livingParent: livingParent,
        fatherName: fatherName,
        fatherAddress: fatherAddress,
        fatherTelephone: fatherTelephone,
        fatherOccupation: fatherOccupation,
        fatherEmployment: fatherEmployment,
        fatherMainIncomeSource: fatherMainIncomeSource,
        motherName: motherName,
        motherAddress: motherAddress,
        motherTelephone: motherTelephone,
        motherOccupation: motherOccupation,
        motherEmployment: motherEmployment,
        motherMainIncomeSource: motherMainIncomeSource,
        guardianName: guardianName,
        guardianAddress: guardianAddress,
        guardianTelephone: guardianTelephone,
        guardianOccupation: guardianOccupation,
        guardianEmployment: guardianEmployment,
        guardianMainIncomeSource: guardianMainIncomeSource,
        siblingsList: siblingsList,
        applicationReason: applicationReason,
        hasPreviousBursary: hasPreviousBursary,
        previousBursaryAmount: previousBursaryAmount,
        previousBursaryDate: previousBursaryDate,
        previousFinancialSupport: previousFinancialSupport,
        previousFinancialSupportDetails: previousFinancialSupportDetails,
        hasPhysicalImpairment: hasPhysicalImpairment,
        physicalImpairmentDetails: physicalImpairmentDetails,
        hasChronicIllness: hasChronicIllness,
        chronicIllnessDetails: chronicIllnessDetails,
        hasDisabledParent: hasDisabledParent,
        disableParentDetails: disableParentDetails,
        hasParentChronicIllness: hasParentChronicIllness,
        parentChronicIllnessDetails: parentChronicIllnessDetails,
        secondaryMainFundingSource: secondaryMainFundingSource,
        collegeMainFundingSource: collegeMainFundingSource,
        universityMainFundingSource: universityMainFundingSource,
        secondaryOtherFundingSource: secondaryOtherFundingSource,
        collegeOtherFundingSource: collegeOtherFundingSource,
        universityOtherFundingSource: universityOtherFundingSource,
        averageAcademicPerformance: averageAcademicPerformance,
        hasAbsenceRecord: hasAbsenceRecord,
        absenceReason: absenceReason,
        absenceDuration: absenceDuration,
        totalAnnualFees: totalAnnualFees,
        lastSemesterBalance: lastSemesterBalance,
        currentSemesterBalance: currentSemesterBalance,
        nextSemesterBalance: nextSemesterBalance,
        helbLoanReceived: helbLoanReceived,
        referee1Name: referee1Name,
        referee1Address: referee1Address,
        referee1PhoneNumber: referee1PhoneNumber,
        referee2Name: referee2Name,
        referee2Address: referee2Address,
        referee2PhoneNumber: referee2PhoneNumber,
        religiousLeaderName: religiousLeaderName,
        religiousLeaderEmail: religiousLeaderEmail,
        religiousLeaderPhone: religiousLeaderPhone,
        religiousLeaderReligionName: religiousLeaderReligionName,
        religiousLeaderReligionType: religiousLeaderReligionType,
        otherReligionDetials: otherReligionDetials,
        chiefName: chiefName,
        chiefEmail: chiefEmail,
        chiefPhone: chiefPhone,
        chiefLocation: chiefLocation,
        chiefSublocation: chiefSublocation,
        fileAttachments: fileAttachments,
        religiousLeaderApproved: religiousLeaderApproved,
        administratorApproved: administratorApproved,
        pollingStationApproval: pollingStationApproval,
        pollingStationRejectReasons: pollingStationRejectReasons,
        cdfCommitteeApproval: cdfCommitteeApproval,
        cdfCommitteeRejectReasons: cdfCommitteeRejectReasons,
        amountApproved: amountApproved
      }

        // ... submit to API
        const [apiCall, apiDispatch] = window.store.application;
        console.log(applicationDetails);
        applicationPost(applicationDetails, apiDispatch)
        .then((result) => {
          const [application] = window.store.application;

          if(application.userApplication){
              console.log(application.userApplication);
          }
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
    } else if (
      input === "dateOfBirth" ||
      input === "yearOfCompletion" ||
      (input === "previousBursaryDate" && moment(e).isValid())
    ) {
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
      levelOfStudy,
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
      fileAttachments,
      //Variables for page 9 guardian and student declaration
      //Approvals
      religiousLeaderApproved,
      administratorApproved,
      pollingStationApproval,
      pollingStationRejectReasons,
      cdfCommitteeApproval,
      cdfCommitteeRejectReasons,
      amountApproved
    } = this.state;

    const values = {
      //Variables for page 1 Personal details
      name,
      gender,
      dateOfBirth,
      idNo,
      levelOfStudy,
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
      fileAttachments,
      //Variables for page 10 guardian and student declaration
      //Approvals
      religiousLeaderApproved,
      administratorApproved,
      pollingStationApproval,
      pollingStationRejectReasons,
      cdfCommitteeApproval,
      cdfCommitteeRejectReasons,
      amountApproved
    };

    let stepLabel = this.getStepContent(step);
    const currentPage = this.getPage(step, values, stepLabel);

    return (
      <div>
        {/* <MuiThemeProvider> */}
        <div className="form-container">
          <div className="menu-bar">
            <div className="logo-container"></div>
            <div className="title-container">
              <Typography component="h1" variant="h3">
                Nyatike Bursary Application
              </Typography>
            </div>
          </div>
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

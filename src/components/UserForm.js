import React, { Component } from "react";

import Stepper from 'material-ui/Stepper/Stepper';
import Step from 'material-ui/Stepper/Step';
import StepLabel from 'material-ui/Stepper/StepLabel';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';



import FormAcademicPerformance from './FormAcademicPerformance';
import FormAdditionalDetails from './FormAdditionalDetails';
import FormAttachments from './FormAttachments';
import FormDeclaration from './FormDeclaration';
import FormEducationFundingHistory from './FormEducationFundingHistory';
import FormGuardianDetails from './FormGuardianDetails';
import FormPersonalDetails from './FormPersonalDetails';
import FormPollingStationDetails from './FormPollingStationDetails';
import FormRefereesDetails from './FormRefereesDetails';
import FormSiblingDetails from './FormSiblingDetails';
import FormVerifierDetails from './FormVerifierDetails';

export class UserForm extends Component {
    state = {
        step: 1,
        //Variables for page 1 Personal details
        name: "",
        gender: "",
        dateOfBirth: "",
        id: "",
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
        numberOfSiblings: 0,
        estimateFamilyIncome: 0,
        estimateFamilyExpenses: 0,
        fatherName: "",
        fatherAddress: "",
        fatherTelephone: "",
        fatherOccupation: "",
        fatherEmploment: "",
        fatherMainIncomeSource: "",
        motherName: "",
        motherAddress: "",
        motherTelephone: "",
        motherOccupation: "",
        motherEmploment: "",
        motherMainIncomeSource: "",
        guardianName: "",
        guardianAddress: "",
        guardianTelephone: "",
        guardianOccupation: "",
        guardianEmploment: "",
        guardianMainIncomeSource: "",
        //Variables for page 3 Siblings list
        siblingsList: [],
        //Variables for page 4 Additional info
        applicationReason: "",
        hasPereviousBursary: false,
        previousBursaryAmount: 0,
        previousFinancialSupport: false,
        previousFinancialSupportDetails: "",
        hasPhysicalImpairment: false,
        physicalImpairmentDetails: "",
        hasChronicIllness: false,
        chronicIllnessDetails: "",
        hasDisabledParent: false,
        disableParentDetails: "",
        hasParentChronicIllness: false,
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
        absenceDuration: 0,
        totalAnnualFees: 0,
        lastSemesterBalance: 0,
        currentSemesterBalance: 0,
        nextSemesterBalance: 0,
        helbLoanReceived: 0,
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
        //Variables for page 9 guardian and student declaration
        hasStudentVerified: false,
        studentVerifiedDate: null,
        hasGuardianVerified: false,
        guardianVerifiedDate: null,
    };

    getSteps = () => {
        return ['Personal', 'Guardian', 'Siblings', 'Other Info', 'Funding', 'Academics', 'Referees', 'Attachments', 'Declarations'];
    }

    getStepContent = (step) => {
        //const { step } = this.state;
        switch (step) {
            case 1:
                return 'Enter your personal and institution details';
            // case 2:
            //     return 'Enter your polling station details';
            case 2:
                return 'Enter you parent/ guardian details';
            case 3:
                return 'Enter information on your siblings';
            case 4:
                return 'Enter other required information';
            case 5:
                return 'Enter information on education funding history';
            case 6:
                return 'Enter your academic performance';
            case 7:
                return 'Enter information about your referees and verification authorities';
            case 8:
                return 'Upload relevant attachments';
            // case 9:
            //     return 'Enter contact information of those who are to verify you details';
            case 9:
                return 'Confirm the application details you have entered';
        }
    }

    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1
        });
    };

    previousStep = () => {
        const { step } = this.state;
        if (step > 1) {
            this.setState({
                step: step - 1
            });
        }
    };

    handleChange = (input) => (e) => {
        this.setState({ [input]: e.target.value });
    };


    render() {
        const { step } = this.state;
        const steps = this.getSteps();
        //console.log(step);
        const {
            //Variables for page 1 Personal details
            name,
            gender,
            dateOfBirth,
            id,
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
            numberOfSiblings,
            estimateFamilyIncome,
            estimateFamilyExpenses,
            fatherName,
            fatherAddress,
            fatherTelephone,
            fatherOccupation,
            fatherEmploment,
            fatherMainIncomeSource,
            motherName,
            motherAddress,
            motherTelephone,
            motherOccupation,
            motherEmploment,
            motherMainIncomeSource,
            guardianName,
            guardianAddress,
            guardianTelephone,
            guardianOccupation,
            guardianEmploment,
            guardianMainIncomeSource,
            //Variables for page 3 Siblings list
            siblingsList,
            //Variables for page 4 Additional info
            applicationReason,
            hasPereviousBursary,
            previousBursaryAmount,
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
            id,
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
            numberOfSiblings,
            estimateFamilyIncome,
            estimateFamilyExpenses,
            fatherName,
            fatherAddress,
            fatherTelephone,
            fatherOccupation,
            fatherEmploment,
            fatherMainIncomeSource,
            motherName,
            motherAddress,
            motherTelephone,
            motherOccupation,
            motherEmploment,
            motherMainIncomeSource,
            guardianName,
            guardianAddress,
            guardianTelephone,
            guardianOccupation,
            guardianEmploment,
            guardianMainIncomeSource,
            //Variables for page 3 Siblings list
            siblingsList,
            //Variables for page 4 Additional info
            applicationReason,
            hasPereviousBursary,
            previousBursaryAmount,
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
            //Variables for page 10 guardian and student declaration
            hasStudentVerified,
            studentVerifiedDate,
            hasGuardianVerified,
            guardianVerifiedDate,
        };

        let stepLabel = this.getStepContent(step);

        switch (step) {
            case 1:
                return (
                    <div>
                        <MuiThemeProvider>
                            <Stepper activeStep={step - 1}>
                                {steps.map((label, index) => {
                                    return (
                                        <Step key={label}>
                                            <StepLabel>{label}</StepLabel>
                                        </Step>
                                    );
                                })}
                            </Stepper>
                            <FormPersonalDetails
                                nextStep={() => this.nextStep()}
                                previousStep={() => this.previousStep()}
                                handleChange={() => this.handleChange()}
                                values={values}
                                stepLabel={stepLabel}
                            />
                        </MuiThemeProvider>

                    </div>
                );
            // case 2:
            //     return (
            //         <div>
            //             <MuiThemeProvider>
            //                 <Stepper activeStep={step - 1}>
            //                     {steps.map((label, index) => {
            //                         return (
            //                             <Step key={label}>
            //                                 <StepLabel>{label}</StepLabel>
            //                             </Step>
            //                         );
            //                     })}
            //                 </Stepper>
            //                 <FormPollingStationDetails
            //                     nextStep={() => this.nextStep()}
            //                     previousStep={() => this.previousStep()}
            //                     handleChange={() => this.handleChange()}
            //                     values={values}
            //                 />
            //             </MuiThemeProvider>
            //         </div>
            //     );
            case 2:
                return (
                    <div>
                        <MuiThemeProvider>
                            <Stepper activeStep={step - 1}>
                                {steps.map((label, index) => {
                                    return (
                                        <Step key={label}>
                                            <StepLabel>{label}</StepLabel>
                                        </Step>
                                    );
                                })}
                            </Stepper>
                            <FormGuardianDetails
                                nextStep={() => this.nextStep()}
                                previousStep={() => this.previousStep()}
                                handleChange={() => this.handleChange()}
                                values={values}
                                stepLabel={stepLabel}
                            />
                        </MuiThemeProvider>
                    </div>
                );
            case 3:
                return (
                    <div>
                        <MuiThemeProvider>
                            <Stepper activeStep={step - 1}>
                                {steps.map((label, index) => {
                                    return (
                                        <Step key={label}>
                                            <StepLabel>{label}</StepLabel>
                                        </Step>
                                    );
                                })}
                            </Stepper>
                            <FormSiblingDetails
                                nextStep={() => this.nextStep()}
                                previousStep={() => this.previousStep()}
                                handleChange={() => this.handleChange()}
                                values={values}
                                stepLabel={stepLabel}
                            />
                        </MuiThemeProvider>
                    </div>
                );
            case 4:
                return (
                    <div>
                        <MuiThemeProvider>
                            <Stepper activeStep={step - 1}>
                                {steps.map((label, index) => {
                                    return (
                                        <Step key={label}>
                                            <StepLabel>{label}</StepLabel>
                                        </Step>
                                    );
                                })}
                            </Stepper>
                            <FormAdditionalDetails
                                nextStep={() => this.nextStep()}
                                previousStep={() => this.previousStep()}
                                handleChange={() => this.handleChange()}
                                values={values}
                                stepLabel={stepLabel}
                            />
                        </MuiThemeProvider>
                    </div>

                );
            case 5:
                return (
                    <div>
                        <MuiThemeProvider>
                            <Stepper activeStep={step - 1}>
                                {steps.map((label, index) => {
                                    return (
                                        <Step key={label}>
                                            <StepLabel>{label}</StepLabel>
                                        </Step>
                                    );
                                })}
                            </Stepper>
                            <FormEducationFundingHistory
                                nextStep={() => this.nextStep()}
                                previousStep={() => this.previousStep()}
                                handleChange={() => this.handleChange()}
                                values={values}
                                stepLabel={stepLabel}
                            />
                        </MuiThemeProvider>
                    </div>
                );
            case 6:
                return (
                    <div>
                        <MuiThemeProvider>
                            <Stepper activeStep={step - 1}>
                                {steps.map((label, index) => {
                                    return (
                                        <Step key={label}>
                                            <StepLabel>{label}</StepLabel>
                                        </Step>
                                    );
                                })}
                            </Stepper>
                            <FormAcademicPerformance
                                nextStep={() => this.nextStep()}
                                previousStep={() => this.previousStep()}
                                handleChange={() => this.handleChange()}
                                values={values}
                                stepLabel={stepLabel}
                            />
                        </MuiThemeProvider>
                    </div>
                );
            case 7:
                return (
                    <div>
                        <MuiThemeProvider>
                            <Stepper activeStep={step - 1}>
                                {steps.map((label, index) => {
                                    return (
                                        <Step key={label}>
                                            <StepLabel>{label}</StepLabel>
                                        </Step>
                                    );
                                })}
                            </Stepper>
                            <FormRefereesDetails
                                nextStep={() => this.nextStep()}
                                previousStep={() => this.previousStep()}
                                handleChange={() => this.handleChange()}
                                values={values}
                                stepLabel={stepLabel}
                            />
                        </MuiThemeProvider>
                    </div>
                );
            case 8:
                return (
                    <div>
                        <MuiThemeProvider>
                            <Stepper activeStep={step - 1}>
                                {steps.map((label, index) => {
                                    return (
                                        <Step key={label}>
                                            <StepLabel>{label}</StepLabel>
                                        </Step>
                                    );
                                })}
                            </Stepper>
                            <FormAttachments
                                nextStep={() => this.nextStep()}
                                previousStep={() => this.previousStep()}
                                handleChange={() => this.handleChange()}
                                values={values}
                                stepLabel={stepLabel}
                            />
                        </MuiThemeProvider>
                    </div>

                );
            // case 9:
            //     return (
            //         <div>
            //             <MuiThemeProvider>
            //                 <Stepper activeStep={step - 1}>
            //                     {steps.map((label, index) => {
            //                         return (
            //                             <Step key={label}>
            //                                 <StepLabel>{label}</StepLabel>
            //                             </Step>
            //                         );
            //                     })}
            //                 </Stepper>
            //                 <FormVerifierDetails
            //                     nextStep={() => this.nextStep()}
            //                     previousStep={() => this.previousStep()}
            //                     handleChange={() => this.handleChange()}
            //                     values={values}
            //                     stepLabel={stepLabel}
            //                 />
            //             </MuiThemeProvider>

            //         </div>

            //     );
            case 9:
                return (
                    <div>
                        <MuiThemeProvider>
                            <Stepper activeStep={step - 1}>
                                {steps.map((label, index) => {
                                    return (
                                        <Step key={label}>
                                            <StepLabel>{label}</StepLabel>
                                        </Step>
                                    );
                                })}
                            </Stepper>
                            <FormDeclaration
                                nextStep={() => this.nextStep()}
                                previousStep={() => this.previousStep()}
                                handleChange={() => this.handleChange()}
                                values={values}
                                stepLabel={stepLabel}
                            />
                        </MuiThemeProvider>
                    </div>

                );
            // default:
            //     console.log(step);
            //     return (
            //         <h1>Error</h1>
            //     )
        }
    }
}

export default UserForm;

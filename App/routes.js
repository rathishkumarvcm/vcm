import { createAppContainer, createStackNavigator } from 'react-navigation';
import LoginComponent from './Screens/Login/';
import RegisterEmail from './Screens/RegisterEmail/RegisterEmailComponent';
import RegisterPassword from './Screens/RegisterPassword/RegisterPasswordComponent';
import RegisterSelf from './Screens/RegisterSelf/RegisterSelfComponent';
import RegisterAddress from './Screens/RegisterAddress/RegisterAddressComponent';
import CommonUIComponent from './Screens/CommonUI/CommonUIComponent';
import ListView from './Screens/ListView';
import Charts from './Screens/Charts';
import WebView from './Screens/Webview';
import PaginationComp from './Screens/Pagination';
import Maps from './Screens/Maps';
import Pdf from './Screens/PdfGen';
import Search from './Screens/Search';
import PdfFeatures from './Screens/PdfFeatures';
import PdfRNFetchblob from './Screens/PdfRNFetchblob';
import PdfLinking from './Screens/PdfLinking';
import PdfRNFetchblobDownload from './Screens/PdfRNFetchblobDownload';
import NativePdf from './Screens/NativePDF';
import AccountInquiry from './Screens/AccountInquiry/AccountInquiryComponent';
import GeneralSettings from './Screens/GeneralSettings/GeneralSettingsComponent';
import ProfileSettings from './Screens/ProfileSettings/';
import DeliverySettings from './Screens/DeliverySettings';
import MarketingandPrivacySettings from './Screens/MarketingandPrivacy/MarketingandPrivacyComponent';
import ChangeLogonCredentialsComponent from './Screens/ChangeLogonCredentials/ChangeLogonCredentialsComponent';
import ResetPasswordComponent from './Screens/ResetPassword/ResetPasswordComponent';
import ResetPINComponent from './Screens/ResetPIN/ResetPINComponent';
import AccountRecoveryPrefComponent from './Screens/AccountRecoveryPref';
import ProfilesAndPreferences from './Screens/ProfilesAndPreferences/';
import SecurityPreference from './Screens/SecurityPreferences/SecurityPreferencesComponent';
import AccountMessagingSettings from './Screens/AccountMessagingSettings/AccountMessagingSettingsComponent';
import AccountMessagingGoals from './Screens/AccountMessagingGoals/AccountMessagingGoalsComponent';
import AccountMessagingAdvice from './Screens/AccountMessagingAdvice/AccountMessagingAdviceComponent';
import AccountMessagingGeneralDocuments from './Screens/AccountMessagingGeneralDocuments/AccountMessagingGeneralDocumentsComponent';
import AccountMessagingSecurityAndFraud from './Screens/AccountMessagingSecurityAndFraud/AccountMessagingSecurityAndFraudComponent';
import AccountMessagingDeviceManagement from './Screens/AccountMessagingDeviceManagement/AccountMessagingDeviceManagementComponent';
//Dashboard


// OTP Authentication

import OtpAuthentication from './Screens/OtpAuthentication/OtpAuthenticationComponent';
import OtpConfirm from './Screens/OtpConfirm/OtpConfirmComponent';
import OtpSeurity from './Screens/OtpSeucrityQuestions/OtpSeucrityQuestionsComponent';
import OtpSecurityConfirm from './Screens/OtpSeucrityConfirm/OtpSeucrityConfirmComponent';
import EmailVerify from './Screens/EmailVerification/EmailVerificationComponent';
import RetrieveOnlineId from './Screens/RetrieveOnlineId/RetrieveOnlineIdComponent';

// Acc Management
import Dashboard from './Screens/Dashboard/DashboardComponent';
import TermsAndConditions from './Screens/TermsAndConditions/TermsAndConditionsComponent';
import DashboardAccounts from './Screens/DashboardAccounts/';
import OpenAccPageOne from './Screens/OpenAccPageOne/';
import OpenAccPageTwo from './Screens/OpenAccPageTwo/';
import OpenAccPageThree from './Screens/OpenAccPageThree/';
import OpenAccPageFour from './Screens/OpenAccPageFour/';
import OpenAccPageFive from './Screens/OpenAccPageFive/OpenAccPageFiveComponent';
import OpenAccPageSix from './Screens/OpenAccPageSix/';
import SpecialtyAccPage from './Screens/SpecialtyAccPage/SpecialtyAccPageComponent';
import SpecialtyAccSubmit from './Screens/SpecialtyAccSubmit/SpecialtyAccSubmitComponent';
import CollegePlanESA from './Screens/CollegePlanESA/CollegePlanESAComponent';
import CollegePlanPartOneTwo from './Screens/CollegePlanPartOneTwo/CollegePlanPartOneTwoComponent';
import CollegePlanPersonal from './Screens/CollegePlanPersonal/CollegePlanPersonalComponent';
import CollegePlanBeneficiary from './Screens/CollegePlanBeneficiary/CollegePlanBeneficiaryComponent';
import InvestmentPlanInfo from './Screens/InvestmentPlanInfo/InvestmentPlanInfoComponent';

// Done By 806048

import EditProfileSettings from './Screens/EditProfileSettings/';
import EditAddressSettings from './Screens/EditAddressInformation/EditAddressInfoComponent';
import EditAddressAddNew from './Screens/EditAddressAddNew/EditAddressAddNewComponent';
import EditPhoneInformation from './Screens/EditPhoneInformations/EditPhoneInfoComponent';
import EditEmailInformation from './Screens/EditEmailInformation/EditEmailInfoComponent';
import EditEmailAddNew from './Screens/EditEmailInfoAddNew/EditEmailAddNewComponent';
import EditAddFinancialInfo from './Screens/EditAddFinancialInformation/EditAddFinancialInfoComponent';
import EditAddPhoneNumber from './Screens/EditAddNewPhoneNumber/EditAddPhoneNumberComponent';
import EditMilitaryInfo from './Screens/EditMilitaryInformation/EditMilitaryInfoComponent';
import EditOccupationInfo from './Screens/EditOccupationInformation/EditOccupationInfoComponent';
import ModifySecurityQues from './Screens/ModifySecurityQues';
import ChangeSignInMethod from './Screens/ChangeSignInMethod/ChangeSignInMethodComponent';
import CSMSoftTokenComponent from './Screens/ChangeSignInMethod/CSMSoftTokenComponent';
import CSMPushNotificationComponent from './Screens/ChangeSignInMethod/CSMPushNotification';
import CSMOtp from './Screens/ChangeSignInMethod';
import ManageIntrestedPartiesComponent from './Screens/ManageIntrestedParties';
import ManageBeneficiariesComponent from './Screens/ManageBeneficiaries';


import EditRelationshipInfo from './Screens/EditRelationshipInformation/';
import EditRegulatoryInfo from './Screens/EditRegulatoryInformations/EditRegulatoryComponent';
import EditFamilyMemberInfo from './Screens/EditFamilyMemberInformation/EditFamilyMemberComponent';
import EditFamilyDetail from './Screens/EditFamilyMemberDetails/';

//Password Recovery
import PasswordRecovery from './Screens/RecoverPassword/';
import PasswordRecoveryOtp from './Screens/RecoverPasswordOtp/';
import PasswordRecoverTemp from './Screens/RecoverTempPassword/';
import PasswordReset from './Screens/RecoverPasswordNew/';
import PasswordSuccess from './Screens/RecoverPasswordSuccess/';

//Systematic Withdrawal plan
import systematicWithdrawal from './Screens/SystematicWithdrawalPlan';
import systematicWithdrawalAdd from './Screens/SystematicWithdrawalPlanAdd';

//Automatic Investment Plan
import automaticInvestment from './Screens/AutomaticInvestmentPlan';
import automaticInvestmentAdd from './Screens/AutomaticInvestmentPlanAdd';

const AppNavigator = createStackNavigator({
        login: {
            screen : LoginComponent,
            navigationOptions: {
                header: null,
              }
        },
        Common: {
            screen : CommonUIComponent,
            navigationOptions: {
                header: null,
              }
        },
        listView:{
            screen : ListView,
            navigationOptions: {
                header: null,
              }
        },
        charts:{
            screen : Charts,
            navigationOptions: {
                header: null,
              }
        },
         webView:{
            screen : WebView,
            navigationOptions: {
                header: null,
              }
        }, 
        pagination:{
            screen : PaginationComp,
            navigationOptions: {
                header: null,
              }
        },
        maps:{
            screen : Maps,
            navigationOptions: {
                header: null,
              }
        },
        pdf:{
            screen : Pdf,
            navigationOptions: {
                header: null,
              }
        },
        search:{
            screen : Search,
            navigationOptions: {
                header: null,
              }
        },
        registerEmail:{
            screen : RegisterEmail,
            navigationOptions: {
                header: null,
              }
        },
        registerPassword:{
            screen : RegisterPassword,
            navigationOptions: {
                header: null,
              }
        },
        registerSelf:{
            screen : RegisterSelf,
            navigationOptions: {
                header: null,
              }
        },
        registerAddress:{
            screen : RegisterAddress,
            navigationOptions: {
                header: null,
              }
        },
        pdfFeatures:{
            screen : PdfFeatures,
            navigationOptions: {
                header: null,
              }
        },
        PdfRNFetchblob:{
            screen : PdfRNFetchblob,
            navigationOptions: {
                header: null,
              }
        },
        pdfLinking:{
            screen : PdfLinking,
            navigationOptions: {
                header: null,
            }
        },
        PdfRNFetchblobDownload:{
            screen : PdfRNFetchblobDownload,
            navigationOptions: {
                header: null,
            }
        },
        nativePdf:{
            screen : NativePdf,
            navigationOptions: {
                header: null,
            }
        },
        accountInquiry:{
            screen : AccountInquiry,
            navigationOptions: {
                header: null,
            }
        },
        dashboard:{
            screen : Dashboard,
            navigationOptions: {
                header: null,
              }
        },
        termsAndConditions:{
            screen : TermsAndConditions,
            navigationOptions: {
                header: null,
              }
        },
        dashboardAccounts:{
            screen : DashboardAccounts,
            navigationOptions: {
                header: null,
              }
        },
        openAccPageOne:{
            screen : OpenAccPageOne,
            navigationOptions: {
                header: null,
              }
        },
        openAccPageTwo:{
            screen : OpenAccPageTwo,
            navigationOptions: {
                header: null,
              }
        },
        openAccPageThree:{
            screen : OpenAccPageThree,
            navigationOptions: {
                header: null,
              }
        },
        investmentPlanInfo:{
            screen : InvestmentPlanInfo,
            navigationOptions: {
                header: null,
              }
        },
        openAccPageFour:{
            screen : OpenAccPageFour,
            navigationOptions: {
                header: null,
              }
        },
        openAccPageFive:{
            screen : OpenAccPageFive,
            navigationOptions: {
                header: null,
              }
        },
        openAccPageSix:{
            screen : OpenAccPageSix,
            navigationOptions: {
                header: null,
              }
        },
        specialtyAccPage:{
            screen : SpecialtyAccPage,
            navigationOptions: {
                header: null,
              }
        },
        specialtyAccSubmit:{
            screen : SpecialtyAccSubmit,
            navigationOptions: {
                header: null,
              }
        },
        collegePlanESA:{
            screen : CollegePlanESA,
            navigationOptions: {
                header: null,
              }
        },
        collegePlanPartOneTwo:{
            screen : CollegePlanPartOneTwo,
            navigationOptions: {
                header: null,
              }
        },
        collegePlanPersonal:{
            screen : CollegePlanPersonal,
            navigationOptions: {
                header: null,
              }
        },
        collegePlanBeneficiary:{
            screen : CollegePlanBeneficiary,
            navigationOptions: {
                header: null,
              }
        },
        profileSettings:{
            screen : ProfileSettings,
            navigationOptions: {
                header: null,
              }
        },
        generalSettings:{
            screen : GeneralSettings,
            navigationOptions: {
                header: null,
              }
        },
        deliverySettings:{
            screen : DeliverySettings,
            navigationOptions: {
                header: null,
              }
        },
        marketingandPrivacySettings:{
            screen : MarketingandPrivacySettings,
            navigationOptions: {
                header: null,
              }
        },
        otpAuth:{
            screen : OtpAuthentication,
            navigationOptions: {
                header: null,
              }
        },
        otpConfirm:{
            screen : OtpConfirm,
            navigationOptions: {
                header: null,
              }
        },
        OtpSeurity: {
            screen : OtpSeurity,
            navigationOptions: {
                header: null,
              }
        },
        otpSecurityConfirm:{
            screen : OtpSecurityConfirm,
            navigationOptions: {
                header: null,
              }
        },
        emailVerify:{
            screen : EmailVerify,
            navigationOptions: {
                header: null,
              }
        },
        editProfileSettings:{
            screen : EditProfileSettings,
            navigationOptions: {
                header: null,
              }
        },
        editAddressSettings:{
            screen : EditAddressSettings,
            navigationOptions: {
                header: null,
              }
        },
        editAddressAddNew:{
            screen : EditAddressAddNew,
            navigationOptions: {
                header: null,
              }
        },
        editPhoneInformation:{
            screen : EditPhoneInformation,
            navigationOptions: {
                header: null,
              }
        },
        editEmailInformation: {
            screen : EditEmailInformation,
            navigationOptions: {
                header: null,
              }
        }, 
        editEmailAddNew: {
            screen : EditEmailAddNew,
            navigationOptions: {
                header: null,
              }
        }, 
        editAddFinancialInfo: {
            screen : EditAddFinancialInfo,
            navigationOptions: {
                header: null,
              }
        },
        editAddPhoneNumber: {
            screen : EditAddPhoneNumber,
            navigationOptions: {
                header: null,
              }
        },
        editMilitaryInfo: {
            screen : EditMilitaryInfo,
            navigationOptions: {
                header: null,
              }
        },
        editOccupationInfo: {
            screen : EditOccupationInfo,
            navigationOptions: {
                header: null,
              }
        },
        retrieveOnlineId:{
            screen : RetrieveOnlineId,
            navigationOptions: {
                header: null,
              }
        },
        modifySecurityQues:{
            screen : ModifySecurityQues,
            navigationOptions: {
                header: null,
              }
        },
        ChangeSignInMethod:{
            screen : ChangeSignInMethod,
            navigationOptions: {
                header: null,
              }
        },
        CSMSoftTokenComponent:{
            screen : CSMSoftTokenComponent,
            navigationOptions: {
                header: null,
              }
        },
        CSMPushNotificationComponent:
        {
            screen : CSMPushNotificationComponent,
            navigationOptions: {
                header: null,  
            }
        },
        CSMOtp:
        {
            screen : CSMOtp,
            navigationOptions: {
                header: null,  
            }
        },
        profilePreference:
        {
            screen: ProfilesAndPreferences,
            navigationOptions: {
                header: null,
            }
        },
        securityPreference:
        {
            screen: SecurityPreference,
            navigationOptions: {
                header: null,
            }
        },
        changeLogonCredentials: {
            screen: ChangeLogonCredentialsComponent,
            navigationOptions: {
                header: null,
            }
        },
        resetPassword: {
            screen: ResetPasswordComponent,
            navigationOptions: {
                header: null,
            }
        },
        resetPIN: {
            screen: ResetPINComponent,
            navigationOptions: {
                header: null,
            }
        },
        accountRecoveryPref: {
            screen: AccountRecoveryPrefComponent,
            navigationOptions: {
                header: null,
            }
        },
        manageIntrestedParties:{
            screen: ManageIntrestedPartiesComponent,
            navigationOptions: {
                header: null,
            }
        },
       accountMessagingSettings:{
            screen:AccountMessagingSettings,
            navigationOptions:{
                header: null
            }
        },
        accountMessagingGoals:{
            screen:AccountMessagingGoals,
            navigationOptions:{
                header: null
            }
        },
        accountMessagingAdvice:{
            screen:AccountMessagingAdvice,
            navigationOptions:{
                header: null
            }
        },
        accountMessagingGeneralDocuments:{
            screen:AccountMessagingGeneralDocuments,
            navigationOptions:{
                header: null
            }
        },
        AccountMessagingSecurityAndFraud:{
            screen:AccountMessagingSecurityAndFraud,
            navigationOptions:{
                header: null
            }
        },
        accountMessagingDeviceManagement:{
            screen:AccountMessagingDeviceManagement,
            navigationOptions:{
                header: null
            }
        },
        manageBeneficiaries:{
            screen:ManageBeneficiariesComponent,
            navigationOptions:{
                header: null
            }
        },
        editRelationshipInfo: {
            screen: EditRelationshipInfo,
            navigationOptions: {
                header: null
            }
        },
        editRegulatoryInfo: {
            screen: EditRegulatoryInfo,
            navigationOptions: {
                header: null
            }
        },
        editFamilyMemberInfo: {
            screen: EditFamilyMemberInfo,
            navigationOptions: {
                header: null
            }
        },
        editFamilyDetail: {
            screen: EditFamilyDetail,
            navigationOptions: {
                header: null
            }
        },passwordRecovery:{
            screen:PasswordRecovery,
            navigationOptions:{
                header:null,
            }
        },
        passwordRecoveryOtp:{
            screen:PasswordRecoveryOtp,
            navigationOptions:{
                header:null,
            }
        },
        passwordReset:{
            screen:PasswordReset,
            navigationOptions:{
                header:null,
            }
        },
        passwordSuccess:{
            screen:PasswordSuccess,
            navigationOptions:{
                header:null,
            }
        },
        passwordRecoverTemp:{
            screen:PasswordRecoverTemp,
            navigationOptions:{
                header:null,
            }  
        },
        automaticInvestment:{
            screen:automaticInvestment,
            navigationOptions:{
                header:null,
            }
        },
        automaticInvestmentAdd:{
            screen:automaticInvestmentAdd,
            navigationOptions:{
                header:null,
            }  
        },
        systematicWithdrawal:{
            screen:systematicWithdrawal,
            navigationOptions:{
                header:null,
            }
        },
        systematicWithdrawalAdd:{
            screen:systematicWithdrawalAdd,
            navigationOptions:{
                header:null,
            }  
        } 
    },{
        initialRouteName: 'login'
    });

export default createAppContainer(AppNavigator);
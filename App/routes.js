import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator, createMaterialTopTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';
import React from 'react';
import { GIcon } from './CommonComponents/GIcon';

import LoginComponent from "./Screens/Login";
import RegisterEmail from './Screens/RegisterEmail/RegisterEmailComponent';
import RegisterPassword from './Screens/RegisterPassword/RegisterPasswordComponent';
import RegisterSelf from './Screens/RegisterSelf';
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
import GeneralSettings from "./Screens/GeneralSettings";
import ProfileSettings from "./Screens/ProfileSettings";
import DeliverySettings from './Screens/DeliverySettings';
import MarketingandPrivacySettings from "./Screens/MarketingandPrivacy";
import ChangeLogonCredentialsComponent from './Screens/ChangeLogonCredentials/ChangeLogonCredentialsComponent';
import CurrentPasswordComponent from './Screens/CurrentPassword';
import ResetPasswordComponent from './Screens/ResetPassword';
import CurrentPINComponent from './Screens/CurrentPIN';
import ResetPINComponent from './Screens/ResetPIN';
import AccountRecoveryPrefComponent from './Screens/AccountRecoveryPref';
import ProfilesAndPreferences from './Screens/ProfilesAndPreferences';
import SecurityPreference from './Screens/SecurityPreferences';
import AccountMessagingSettings from './Screens/AccountMessagingSettings/AccountMessagingSettingsComponent';
import AccountMessagingGoals from './Screens/AccountMessagingGoals/AccountMessagingGoalsComponent';
import AccountMessagingAdvice from "./Screens/AccountMessagingAdvice";
import AccountMessagingGeneralDocuments from "./Screens/AccountMessagingGeneralDocuments";
import AccountMessagingSecurityAndFraud from './Screens/AccountMessagingSecurityAndFraud/AccountMessagingSecurityAndFraudComponent';
import AccountMessagingDeviceManagement from "./Screens/AccountMessagingDeviceManagement";
// Dashboard


//  OTP Authentication

import OtpAuthentication from './Screens/OtpAuthentication';
import OtpConfirm from './Screens/OtpConfirm/OtpConfirmComponent';
import OtpSeurity from './Screens/OtpSeucrityQuestions/OtpSeucrityQuestionsComponent';
import OtpSecurityConfirm from './Screens/OtpSeucrityConfirm';
import EmailVerify from './Screens/EmailVerification/EmailVerificationComponent';
import RetrieveOnlineId from './Screens/RetrieveOnlineId/RetrieveOnlineIdComponent';
import OnlineIDVerification from './Screens/OnlineIDVerification/OnlineIDVerificationComponent';

//  Acc Management
import Dashboard from './Screens/Dashboard/DashboardComponent';
import TermsAndConditions from './Screens/TermsAndConditions/TermsAndConditionsComponent';
import DashboardAccounts from './Screens/DashboardAccounts';
import OpenAccPageOne from './Screens/OpenAccPageOne';
import OpenAccPageTwo from './Screens/OpenAccPageTwo';
import OpenAccPageThree from './Screens/OpenAccPageThree';
import OpenAccPageFour from './Screens/OpenAccPageFour';
import OpenAccPageFive from './Screens/OpenAccPageFive';
import OpenAccPageSix from './Screens/OpenAccPageSix';
import SpecialtyAccPage from './Screens/SpecialtyAccPage/SpecialtyAccPageComponent';
import SpecialtyAccSubmit from './Screens/SpecialtyAccSubmit';
import CollegePlanESA from './Screens/CollegePlanESA/CollegePlanESAComponent';
import CollegePlanPartOneTwo from './Screens/CollegePlanPartOneTwo/CollegePlanPartOneTwoComponent';
import CollegePlanPersonal from './Screens/CollegePlanPersonal/CollegePlanPersonalComponent';
import CollegePlanBeneficiary from './Screens/CollegePlanBeneficiary/CollegePlanBeneficiaryComponent';
import InvestmentPlanInfo from './Screens/InvestmentPlanInfo';
import LiquidationPageOneComponent from './Screens/LiquidationPageOne';
import LiquidationPageTwoComponent from './Screens/LiquidationPageTwo';
import LiquidationPageThreeComponent from './Screens/LiquidationPageThree';
import LiquidationFinishComponent from './Screens/LiquidationFinish';
import LiquidationPageFourComponent from './Screens/LiquidationPageFour';
import CompareFunds from './Screens/CompareFunds';
//  Done By 806048

import EditProfileSettings from "./Screens/EditProfileSettings";
import EditAddressSettings from "./Screens/EditAddressInformation";
import EditAddressAddNew from "./Screens/EditAddressAddNew";
import EditPhoneInformation from "./Screens/EditPhoneInformations";
import EditEmailInformation from "./Screens/EditEmailInformation";
import EditEmailAddNew from "./Screens/EditEmailInfoAddNew";
import EditAddFinancialInfo from "./Screens/EditAddFinancialInformation";
import EditAddPhoneNumber from "./Screens/EditAddNewPhoneNumber";
import EditMilitaryInfo from "./Screens/EditMilitaryInformation";
import EditOccupationInfo from "./Screens/EditOccupationInformation";
import ModifySecurityQues from './Screens/ModifySecurityQues';
import ChangeSignInMethod from './Screens/ChangeSignInMethod';
import CSMSoftTokenComponent from './Screens/CSMSoftToken';
import CSMPushNotificationComponent from './Screens/CSMPushNotification';
import CSMOtp from './Screens/CSMOtp';
import QuickSigninComponent from './Screens/QuickSignIn';


import ManageIntrestedPartiesComponent from './Screens/ManageIntrestedParties';
import AddNewIntrestedPartiesComponent from './Screens/AddNewIntrestedParties';
import VerifyIntrestedPartiesComponent from './Screens/VerifyIntrestedParties';
import EditManageIntrestedPartiesComponent from './Screens/EditManageIntrestedParties';
import ManageBeneficiariesComponent from './Screens/ManageBeneficiaries';
import AddNewBeneficiaryComponent from './Screens/AddNewBeneficiary';
import EditManageBeneficiariesComponent from './Screens/EditManageBeneficiaries';
import VerifyManageBenificiariesComponent from './Screens/VerifyManageBeneficiaries';
import PhysicalWayManageBeneficiaryComponent from './Screens/PhysicalWayManageBeneficiary';

import PurchaseScreenOneComponent from './Screens/PurchaseScreenOne';
import PurchaseScreenTwoComponent from './Screens/PurchaseScreenTwo';
import PurchaseScreenThreeComponent from './Screens/PurchaseScreenThree';
import PurchaseScreenFourComponent from './Screens/PurchaseScreenFour';
import PurchaseFinishComponent from './Screens/PurchaseFinish';

import ExchangeScreenOneComponent from './Screens/ExchangeScreenOne';
import ExchangeScreenTwoComponent from './Screens/ExchangeScreenTwo';
import ExchangeScreenThreeComponent from './Screens/ExchangeScreenThree';
import ExchangeScreenFourComponent from './Screens/ExchangeScreenFour';

import EditRelationshipInfo from "./Screens/EditRelationshipInformation";
import EditRegulatoryInfo from './Screens/EditRegulatoryInformations/EditRegulatoryComponent';
import EditFamilyMemberInfo from "./Screens/EditFamilyMemberInformation";
import EditFamilyDetail from "./Screens/EditFamilyMemberDetails";

// Password Recovery
import PasswordRecovery from "./Screens/RecoverPassword";
import PasswordRecoveryOtp from "./Screens/RecoverPasswordOtp";
import PasswordRecoverTemp from "./Screens/RecoverTempPassword";
import PasswordReset from "./Screens/RecoverPasswordNew";
import PasswordSuccess from "./Screens/RecoverPasswordSuccess";

// Transactions  
import TAmmendComponent from "./Screens/TAmmend";
import FundSelectionComponent from './Screens/TAmmendFundSelection';
import FundWithdrawlComponent from './Screens/TAmmendFundWithdrawl';
import ReviewConfirmComponent from './Screens/TAmmendReviewAndConfirm';


// Account Services
import AccountServicesComponent from './Screens/AccountServices';
import DividentsAndCapitalGainsPrefComponent from './Screens/Dividents';
import CheckBookComponent from './Screens/OrderCheckBook';
import BankAccountsComponent from './Screens/BankAccounts';
import AddBankAccountComponent from './Screens/AddBankAccount';
import AddOtherBankAccountComponent from './Screens/AddOtherBankAccount';
import CheckBookPlaceOrder from './Screens/CheckBookPlaceOrder';
import DividentsForAccount from './Screens/DividentsForAccount';

// Systematic Withdrawal plan
import systematicWithdrawal from './Screens/SystematicWithdrawalPlan';
import systematicWithdrawalAdd from './Screens/SystematicWithdrawalPlanAdd';
import systematicWithdrawalSchedule from './Screens/SystematicWithdrawalPlanSchedule';
import systematicWithdrawalVerify from './Screens/SystematicWithdrawalPlanVerify';
import systematicWithdrawalEsign from './Screens/SystematicWithdrawalPlanEsign';
import systematicWithdrawalAccount from './Screens/SystematicWithdrawalPlanAccount';


// Automatic Investment Plan
import automaticInvestment from './Screens/AutomaticInvestmentPlan';
import automaticInvestmentAdd from './Screens/AutomaticInvestmentPlanAdd';
import automaticInvestmentSchedule from './Screens/AutomaticInvestmentPlanSchedule';
import automaticInvestmentVerify from './Screens/AutomaticInvestmentPlanVerify';
import automaticInvestmentEsign from './Screens/AutomaticInvestmentPlanEsign';
import automaticInvestmentAccount from './Screens/AutomaticInvestmentPlanAccount';

import ImageUpload from './Screens/First';

//  Special MFA Requirements
import VerifySSNComponent from './Screens/VerifySSN/VerifySSNComponent';
import VerifyMobileComponent from './Screens/VerifyMobile/VerifyMobileComponent';
// Menu
import DrawerComponent from './Screens/Menu/DrawerComponent';
import TabMoreComponent from './Screens/Menu/TabMoreComponent';
import Screen1Component from './Screens/NotificationTab/Screen1';
import Screen2Component from './Screens/NotificationTab/Screen2';
import MoreModalComponent from './Screens/Menu/MoreModalComponent';

// Notification Tabs
const NotificationTabNavigator = createMaterialTopTabNavigator(
    {
        'Message Center': { screen: Screen1Component },
        Notification: { screen: Screen2Component },
    },
    {
        tabBarPosition: 'top',
        swipeEnabled: true,
        animationEnabled: true,
        navigationOptions: {
            headerStyle: {
                backgroundColor: '#633689',
            },
            headerTintColor: '#FFFFFF',
            title: 'TabExample',
        },
        tabBarOptions: {
            // activeTintColor: '#FFFFFF',
            // inactiveTintColor: '#F8F8F8',
            style: {
                // backgroundColor: '#633689',
            },
            labelStyle: {
                textAlign: 'center',
            },
            indicatorStyle: {
                borderBottomColor: 'white',
                borderBottomWidth: 2,
            },
        },
    }
);
//  Bottom Tabs
const BottomTabNavigator = createBottomTabNavigator({
    myVCM: {
        screen: AccountServicesComponent,
        navigationOptions: {
            tabBarLabel: 'MyVCM',
        },
    },
    portfolio: {
        screen: TermsAndConditions,
        navigationOptions: {
            tabBarLabel: 'Portfolio',
        },
    },
    invest: {
        screen: AccountServicesComponent,
        navigationOptions: {
            tabBarLabel: 'Invest',
        },
    },
    learn: {
        screen: ListView,
        navigationOptions: {
            tabBarLabel: 'Learn',
        },
    },
    more: {
        screen: () => TermsAndConditions,
        navigationOptions: {
            tabBarLabel: 'More',
        },
    },
},
    {
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, horizontal, tintColor }) => {
                const { routeName } = navigation.state;
                let iconName;
                if (routeName === 'myVCM') {
                    iconName = 'home';
                } else if (routeName === 'portfolio') {
                    iconName = 'note';
                } else if (routeName === 'invest') {
                    iconName = 'insert-chart';
                }
                else if (routeName === 'learn') {
                    iconName = 'library-books';
                } else {
                    iconName = 'more';
                }
                return (
                    <GIcon
                        name={iconName}
                        type="material"
                        size={20}
                        color={tintColor}
                    />
                );
            },
            tabBarOnPress: ({ defaultHandler }) => {
                const { routeName } = navigation.state;
                if (routeName === 'more') {
                    console.warn('onPress:', navigation);
                    navigation.goBack();
                    navigation.navigate('learn');
                } else {
                    defaultHandler();
                }

                if (navigation && navigation.isFocused()) {
                    //  console.warn('isFocused:', navigation.state);
                }

            }
        }),

    }
);

const DrawerNavigator = createDrawerNavigator({
    Home: BottomTabNavigator,
    editMilitaryInfo: {
        screen: EditMilitaryInfo,
    },
    NotificationTabs: NotificationTabNavigator,
}, {
    initialRouteName: 'Home',
    contentComponent: DrawerComponent,
    drawerWidth: 250
});
const AppNavigator = createStackNavigator({
    login: {
        screen: LoginComponent,
        navigationOptions: {
            header: null,
        }
    },
    dashboardScreen: {
        screen: DrawerNavigator,
        navigationOptions: {
            header: null,
        }
    },
    draweriOS: {
        screen: DrawerComponent,
    },
    moreModal: {
        screen: MoreModalComponent,
    },
    Common: {
        screen: CommonUIComponent,
        navigationOptions: {
            header: null,
        }
    },
    listView: {
        screen: ListView,
        navigationOptions: {
            header: null,
        }
    },
    charts: {
        screen: Charts,
        navigationOptions: {
            header: null,
        }
    },
    webView: {
        screen: WebView,
        navigationOptions: {
            header: null,
        }
    },
    pagination: {
        screen: PaginationComp,
        navigationOptions: {
            header: null,
        }
    },
    maps: {
        screen: Maps,
        navigationOptions: {
            header: null,
        }
    },
    pdf: {
        screen: Pdf,
        navigationOptions: {
            header: null,
        }
    },
    search: {
        screen: Search,
        navigationOptions: {
            header: null,
        }
    },
    registerEmail: {
        screen: RegisterEmail,
        navigationOptions: {
            header: null,
        }
    },
    registerPassword: {
        screen: RegisterPassword,
        navigationOptions: {
            header: null,
        }
    },
    registerSelf: {
        screen: RegisterSelf,
        navigationOptions: {
            header: null,
        }
    },
    registerAddress: {
        screen: RegisterAddress,
        navigationOptions: {
            header: null,
        }
    },
    pdfFeatures: {
        screen: PdfFeatures,
        navigationOptions: {
            header: null,
        }
    },
    PdfRNFetchblob: {
        screen: PdfRNFetchblob,
        navigationOptions: {
            header: null,
        }
    },
    pdfLinking: {
        screen: PdfLinking,
        navigationOptions: {
            header: null,
        }
    },
    PdfRNFetchblobDownload: {
        screen: PdfRNFetchblobDownload,
        navigationOptions: {
            header: null,
        }
    },
    nativePdf: {
        screen: NativePdf,
        navigationOptions: {
            header: null,
        }
    },
    accountInquiry: {
        screen: AccountInquiry,
        navigationOptions: {
            header: null,
        }
    },
    dashboard: {
        screen: Dashboard,
        navigationOptions: {
            header: null,
        }
    },
    termsAndConditions: {
        screen: TermsAndConditions,
        navigationOptions: {
            header: null,
        }
    },
    dashboardAccounts: {
        screen: DashboardAccounts,
        navigationOptions: {
            header: null,
        }
    },
    openAccPageOne: {
        screen: OpenAccPageOne,
        navigationOptions: {
            header: null,
        }
    },
    openAccPageTwo: {
        screen: OpenAccPageTwo,
        navigationOptions: {
            header: null,
        }
    },
    openAccPageThree: {
        screen: OpenAccPageThree,
        navigationOptions: {
            header: null,
        }
    },
    investmentPlanInfo: {
        screen: InvestmentPlanInfo,
        navigationOptions: {
            header: null,
        }
    },
    openAccPageFour: {
        screen: OpenAccPageFour,
        navigationOptions: {
            header: null,
        }
    },
    openAccPageFive: {
        screen: OpenAccPageFive,
        navigationOptions: {
            header: null,
        }
    },
    openAccPageSix: {
        screen: OpenAccPageSix,
        navigationOptions: {
            header: null,
        }
    },
    specialtyAccPage: {
        screen: SpecialtyAccPage,
        navigationOptions: {
            header: null,
        }
    },
    specialtyAccSubmit: {
        screen: SpecialtyAccSubmit,
        navigationOptions: {
            header: null,
        }
    },
    collegePlanESA: {
        screen: CollegePlanESA,
        navigationOptions: {
            header: null,
        }
    },
    collegePlanPartOneTwo: {
        screen: CollegePlanPartOneTwo,
        navigationOptions: {
            header: null,
        }
    },
    collegePlanPersonal: {
        screen: CollegePlanPersonal,
        navigationOptions: {
            header: null,
        }
    },
    collegePlanBeneficiary: {
        screen: CollegePlanBeneficiary,
        navigationOptions: {
            header: null,
        }
    },
    profileSettings: {
        screen: ProfileSettings,
        navigationOptions: {
            header: null,
        }
    },
    generalSettings: {
        screen: GeneralSettings,
        navigationOptions: {
            header: null,
        }
    },
    deliverySettings: {
        screen: DeliverySettings,
        navigationOptions: {
            header: null,
        }
    },
    marketingandPrivacySettings: {
        screen: MarketingandPrivacySettings,
        navigationOptions: {
            header: null,
        }
    },
    otpAuth: {
        screen: OtpAuthentication,
        navigationOptions: {
            header: null,
        }
    },
    otpConfirm: {
        screen: OtpConfirm,
        navigationOptions: {
            header: null,
        }
    },
    OtpSeurity: {
        screen: OtpSeurity,
        navigationOptions: {
            header: null,
        }
    },
    otpSecurityConfirm: {
        screen: OtpSecurityConfirm,
        navigationOptions: {
            header: null,
        }
    },
    emailVerify: {
        screen: EmailVerify,
        navigationOptions: {
            header: null,
        }
    },
    editProfileSettings: {
        screen: EditProfileSettings,
        navigationOptions: {
            header: null,
        }
    },
    editAddressSettings: {
        screen: EditAddressSettings,
        navigationOptions: {
            header: null,
        }
    },
    editAddressAddNew: {
        screen: EditAddressAddNew,
        navigationOptions: {
            header: null,
        }
    },
    editPhoneInformation: {
        screen: EditPhoneInformation,
        navigationOptions: {
            header: null,
        }
    },
    editEmailInformation: {
        screen: EditEmailInformation,
        navigationOptions: {
            header: null,
        }
    },
    editEmailAddNew: {
        screen: EditEmailAddNew,
        navigationOptions: {
            header: null,
        }
    },
    editAddFinancialInfo: {
        screen: EditAddFinancialInfo,
        navigationOptions: {
            header: null,
        }
    },
    editAddPhoneNumber: {
        screen: EditAddPhoneNumber,
        navigationOptions: {
            header: null,
        }
    },
    editMilitaryInfo: {
        screen: EditMilitaryInfo,
        navigationOptions: {
            header: null,
        }
    },
    editOccupationInfo: {
        screen: EditOccupationInfo,
        navigationOptions: {
            header: null,
        }
    },
    retrieveOnlineId: {
        screen: RetrieveOnlineId,
        navigationOptions: {
            header: null,
        }
    },
    modifySecurityQues: {
        screen: ModifySecurityQues,
        navigationOptions: {
            header: null,
        }
    },
    ChangeSignInMethod: {
        screen: ChangeSignInMethod,
        navigationOptions: {
            header: null,
        }
    },
    CSMSoftTokenComponent: {
        screen: CSMSoftTokenComponent,
        navigationOptions: {
            header: null,
        }
    },
    CSMPushNotificationComponent:
    {
        screen: CSMPushNotificationComponent,
        navigationOptions: {
            header: null,
        }
    },
    CSMOtp:
    {
        screen: CSMOtp,
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
    currentPassword: {
        screen: CurrentPasswordComponent,
        navigationOptions: {
            header: null,
        }
    },
    currentPIN: {
        screen: CurrentPINComponent,
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
    manageIntrestedParties: {
        screen: ManageIntrestedPartiesComponent,
        navigationOptions: {
            header: null,
        }
    },
    accountMessagingSettings: {
        screen: AccountMessagingSettings,
        navigationOptions: {
            header: null
        }
    },
    accountMessagingGoals: {
        screen: AccountMessagingGoals,
        navigationOptions: {
            header: null
        }
    },
    accountMessagingAdvice: {
        screen: AccountMessagingAdvice,
        navigationOptions: {
            header: null
        }
    },
    accountMessagingGeneralDocuments: {
        screen: AccountMessagingGeneralDocuments,
        navigationOptions: {
            header: null
        }
    },
    AccountMessagingSecurityAndFraud: {
        screen: AccountMessagingSecurityAndFraud,
        navigationOptions: {
            header: null
        }
    },
    accountMessagingDeviceManagement: {
        screen: AccountMessagingDeviceManagement,
        navigationOptions: {
            header: null
        }
    },
    manageBeneficiaries: {
        screen: ManageBeneficiariesComponent,
        navigationOptions: {
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
    },
    passwordRecovery: {
        screen: PasswordRecovery,
        navigationOptions: {
            header: null,
        }
    },
    passwordRecoveryOtp: {
        screen: PasswordRecoveryOtp,
        navigationOptions: {
            header: null,
        }
    },
    passwordReset: {
        screen: PasswordReset,
        navigationOptions: {
            header: null,
        }
    },
    passwordSuccess: {
        screen: PasswordSuccess,
        navigationOptions: {
            header: null,
        }
    },
    passwordRecoverTemp: {
        screen: PasswordRecoverTemp,
        navigationOptions: {
            header: null,
        }
    },
    tAmmendComponent: {
        screen: TAmmendComponent,
        navigationOptions: {
            header: null,
        }
    },
    accountService: {
        screen: AccountServicesComponent,
        navigationOptions: {
            header: null,
        }
    },
    dividentsAndCapitalGainsPref: {
        screen: DividentsAndCapitalGainsPrefComponent,
        navigationOptions: {
            header: null,
        }
    },
    orderCheckBook: {
        screen: CheckBookComponent,
        navigationOptions: {
            header: null,
        }
    },
    automaticInvestment: {
        screen: automaticInvestment,
        navigationOptions: {
            header: null,
        }
    },
    automaticInvestmentAdd: {
        screen: automaticInvestmentAdd,
        navigationOptions: {
            header: null,
        }
    },
    automaticInvestmentVerify: {
        screen: automaticInvestmentVerify,
        navigationOptions: {
            header: null,
        }
    },
    automaticInvestmentEsign: {
        screen: automaticInvestmentEsign,
        navigationOptions: {
            header: null,
        }
    },
    automaticInvestmentSchedule: {
        screen: automaticInvestmentSchedule,
        navigationOptions: {
            header: null,
        }
    },
    automaticInvestmentAccount: {
        screen: automaticInvestmentAccount,
        navigationOptions: {
            header: null,
        }
    },
    systematicWithdrawal: {
        screen: systematicWithdrawal,
        navigationOptions: {
            header: null,
        }
    },
    systematicWithdrawalAdd: {
        screen: systematicWithdrawalAdd,
        navigationOptions: {
            header: null,
        }
    },
    systematicWithdrawalVerify: {
        screen: systematicWithdrawalVerify,
        navigationOptions: {
            header: null,
        }
    },
    systematicWithdrawalSchedule: {
        screen: systematicWithdrawalSchedule,
        navigationOptions: {
            header: null,
        }
    },
    systematicWithdrawalEsign: {
        screen: systematicWithdrawalEsign,
        navigationOptions: {
            header: null,
        }
    },
    systematicWithdrawalAccount: {
        screen: systematicWithdrawalAccount,
        navigationOptions: {
            header: null,
        }
    },
    bankAccount: {
        screen: BankAccountsComponent,
        navigationOptions: {
            header: null,
        }
    },
    addBankAccount: {
        screen: AddBankAccountComponent,
        navigationOptions: {
            header: null,
        }
    },
    imageUpload: {
        screen: ImageUpload,
        navigationOptions: {
            header: null,
        }
    },
    LiquidationPageOne: {
        screen: LiquidationPageOneComponent,
        navigationOptions: {
            header: null,
        }
    },
    LiquidationPageTwo: {
        screen: LiquidationPageTwoComponent,
        navigationOptions: {
            header: null,
        }
    },
    LiquidationPageThree: {
        screen: LiquidationPageThreeComponent,
        navigationOptions: {
            header: null,
        }
    },
    LiquidationPageFour: {
        screen: LiquidationPageFourComponent,
        navigationOptions: {
            header: null,
        }
    },
    LiquidationFinish: {
        screen: LiquidationFinishComponent,
        navigationOptions: {
            header: null,
        }
    },
    FundSelectionComponent: {
        screen: FundSelectionComponent,
        navigationOptions: {
            header: null,
        }
    },
    compareFunds: {
        screen: CompareFunds,
        navigationOptions: {
            header: null,
        }
    },
    QuickSigninComponent: {
        screen: QuickSigninComponent,
        navigationOptions: {
            header: null,
        }
    },
    onlineIDVerification: {
        screen: OnlineIDVerification,
        navigationOptions: {
            header: null,
        }
    },
    addManageBeneficiaries: {
        screen: AddNewBeneficiaryComponent,
        navigationOptions: {
            header: null
        }
    },
    editManageBeneficiaries: {
        screen: EditManageBeneficiariesComponent,
        navigationOptions: {
            header: null
        }
    },
    verifyManageBeneficiaries: {
        screen: VerifyManageBenificiariesComponent,
        navigationOptions: {
            header: null
        }
    },
    verifySSN: {
        screen: VerifySSNComponent,
        navigationOptions: {
            header: null,
        }
    },
    verifyMobileNumber: {
        screen: VerifyMobileComponent,
        navigationOptions: {
            header: null,
        }
    },
    FundWithdrawlComponent: {
        screen: FundWithdrawlComponent,
        navigationOptions: {
            header: null,
        }
    },
    ReviewConfirmComponent: {
        screen: ReviewConfirmComponent,
        navigationOptions: {
            header: null,
        }
    },
    addIntrestedParties: {
        screen: AddNewIntrestedPartiesComponent,
        navigationOptions: {
            header: null,
        }
    },
    addOtherBankAccountComponent: {
        screen: AddOtherBankAccountComponent,
        navigationOptions: {
            header: null,
        }
    },
    verifyIntrestedParties: {
        screen: VerifyIntrestedPartiesComponent,
        navigationOptions: {
            header: null,
        }
    },
    editIntrestedParty: {
        screen: EditManageIntrestedPartiesComponent,
        navigationOptions: {
            header: null,
        }
    },
    checkBookPlaceOrder: {
        screen: CheckBookPlaceOrder,
        navigationOptions: {
            header: null,
        }
    },
    purchaseScreenOne: {
        screen: PurchaseScreenOneComponent,
        navigationOptions: {
            header: null,
        }
    },
    purchaseScreenTwo: {
        screen: PurchaseScreenTwoComponent,
        navigationOptions: {
            header: null,
        }
    },
    purchaseScreenThree: {
        screen: PurchaseScreenThreeComponent,
        navigationOptions: {
            header: null,
        }
    },
    purchaseScreenFour: {
        screen: PurchaseScreenFourComponent,
        navigationOptions: {
            header: null,
        }
    },
    purchaseFinish: {
        screen: PurchaseFinishComponent,
        navigationOptions: {
            header: null,
        }
    },
    dividentsForAccount: {
        screen: DividentsForAccount,
        navigationOptions: {
            header: null,
        }
    },
    exchangeScreenOne: {
        screen: ExchangeScreenOneComponent,
        navigationOptions: {
            header: null,
        }
    },
    exchangeScreenTwo: {
        screen: ExchangeScreenTwoComponent,
        navigationOptions: {
            header: null,
        }
    },
    exchangeScreenThree: {
        screen: ExchangeScreenThreeComponent,
        navigationOptions: {
            header: null,
        }
    },
    exchangeScreenFour: {
        screen: ExchangeScreenFourComponent,
        navigationOptions: {
            header: null,
        }
    },
    physicalWayManageBeneficiary: {
        screen: PhysicalWayManageBeneficiaryComponent,
        navigationOptions: {
            header: null,
        }
    }
},
    {
        initialRouteName: "login"
    });

export default createAppContainer(AppNavigator);
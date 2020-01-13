import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
// User Management
import LoginComponent from '../Screens/Login/';
import RegisterEmail from '../Screens/RegisterEmail/RegisterEmailComponent';
import RegisterPassword from '../Screens/RegisterPassword/RegisterPasswordComponent';
import RegisterSelf from '../Screens/RegisterSelf/RegisterSelfComponent';
import RegisterAddress from '../Screens/RegisterAddress/RegisterAddressComponent';
import ChangeLogonCredentialsComponent from '../Screens/ChangeLogonCredentials/ChangeLogonCredentialsComponent';
import CurrentPasswordComponent from '../Screens/CurrentPassword';
import ResetPasswordComponent from '../Screens/ResetPassword';
import CurrentPINComponent from '../Screens/CurrentPIN';
import ResetPINComponent from '../Screens/ResetPIN';

import OtpAuthentication from '../Screens/OtpAuthentication';
import OtpConfirm from '../Screens/OtpConfirm/OtpConfirmComponent';
import OtpSeurity from '../Screens/OtpSeucrityQuestions/OtpSeucrityQuestionsComponent';
import OtpSecurityConfirm from '../Screens/OtpSeucrityConfirm';
import EmailVerify from '../Screens/EmailVerification/EmailVerificationComponent';
import RetrieveOnlineId from '../Screens/RetrieveOnlineId/RetrieveOnlineIdComponent';
import OnlineIDVerification from '../Screens/OnlineIDVerification/OnlineIDVerificationComponent';
import ModifySecurityQues from '../Screens/ModifySecurityQues';
import ChangeSignInMethod from '../Screens/ChangeSignInMethod';
import CSMSoftTokenComponent from '../Screens/CSMSoftToken';
import CSMPushNotificationComponent from '../Screens/CSMPushNotification';
import CSMOtp from '../Screens/CSMOtp';
import QuickSigninComponent from '../Screens/QuickSignIn';
import PasswordRecovery from '../Screens/RecoverPassword/';
import PasswordRecoveryOtp from '../Screens/RecoverPasswordOtp/';
import PasswordRecoverTemp from '../Screens/RecoverTempPassword/';
import PasswordReset from '../Screens/RecoverPasswordNew/';
import PasswordSuccess from '../Screens/RecoverPasswordSuccess/';

import VerifySSNComponent from '../Screens/VerifySSN/VerifySSNComponent';
import VerifyMobileComponent from '../Screens/VerifyMobile/VerifyMobileComponent';


import DashboardStack from '../Navigation/stacks';

const AuthenticationStack = createStackNavigator({
    login: {
        screen: LoginComponent,
        navigationOptions: {
            header: null
        }
    },
    registerEmail: {
        screen: RegisterEmail,
        navigationOptions: {
            header: null
        }
    },
    passwordRecovery: {
        screen: PasswordRecovery,
        navigationOptions: {
            header: null
        }
    },
    retrieveOnlineId: {
        screen: RetrieveOnlineId,
        navigationOptions: ({ navigation }) => ({
            // header: props => <GHeaderComponent navigation={navigation} {...props} register={false} headerText="My VCM" isBackAvailable={false} />,
            header: null
        })
    },
    registerSelf: {
        screen: RegisterSelf,
        navigationOptions: {
            header: null
        }
    },
    registerPassword: {
        screen: RegisterPassword,
        navigationOptions: {
            header: null
        }
    },
    registerAddress: {
        screen: RegisterAddress,
        navigationOptions: {
            header: null
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
            header: null
        }
    },
    resetPassword: {
        screen: ResetPasswordComponent,
        navigationOptions: {
            header: null
        }
    },
    resetPIN: {
        screen: ResetPINComponent,
        navigationOptions: {
            header: null
        }
    },
    currentPIN: {
        screen: CurrentPINComponent,
        navigationOptions: {
            header: null
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
            header: null
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
    onlineIDVerification: {
        screen: OnlineIDVerification,
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
            header: null
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
    QuickSigninComponent: {
        screen: QuickSigninComponent,
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
            header: null
        }
    },
    passwordRecoverTemp: {
        screen: PasswordRecoverTemp,
        navigationOptions: {
            header: null,
        }
    },
    verifySSN: {
        screen: VerifySSNComponent,
        navigationOptions: {
            header: null
        }
    },
    verifyMobileNumber: {
        screen: VerifyMobileComponent,
        navigationOptions: {
            header: null,
        }
    },
},
    { initialRouteName: 'login' }
);

const AppStackNavigator = createSwitchNavigator(
    {
        AUTH: {
            screen: AuthenticationStack,
        },
        MAIN: {
            screen: DashboardStack,
        },
    },
    { initialRouteName: 'AUTH' },
);

export default createAppContainer(AppStackNavigator);
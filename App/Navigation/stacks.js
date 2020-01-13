import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator, createMaterialTopTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';
import React from 'react';
import { GIcon } from '../CommonComponents/GIcon';
import ListView from '../Screens/ListView';

// Drawer
import ProfileSettings from '../Screens/ProfileSettings/';
import EditPhoneInformation from '../Screens/EditPhoneInformations/';
import EditOccupationInfo from '../Screens/EditOccupationInformation/';
import EditMilitaryInfo from '../Screens/EditMilitaryInformation/';
import EditRelationshipInfo from '../Screens/EditRelationshipInformation/';

// Drawer User Management Componenet
 import MarketingandPrivacySettings from '../Screens/MarketingandPrivacy/';
 import EditProfileSettings from '../Screens/EditProfileSettings/';
 import EditAddressSettings from '../Screens/EditAddressInformation/';
 import EditAddressAddNew from '../Screens/EditAddressAddNew/';
 import EditAddPhoneNumber from '../Screens/EditAddNewPhoneNumber/';
 import EditEmailInformation from '../Screens/EditEmailInformation/';
 import EditEmailAddNew from '../Screens/EditEmailInfoAddNew/';
 import EditAddFinancialInfo from '../Screens/EditAddFinancialInformation/';
 import EditFamilyMemberInfo from '../Screens/EditFamilyMemberInformation/';
 import EditFamilyDetail from '../Screens/EditFamilyMemberDetails/';

 // Account Manangement 
 import Dashboard from '../Screens/Dashboard/DashboardComponent';
 import TermsAndConditions from '../Screens/TermsAndConditions/TermsAndConditionsComponent';
 import DashboardAccounts from '../Screens/DashboardAccounts/';
 import OpenAccPageOne from '../Screens/OpenAccPageOne/';
 import OpenAccPageTwo from '../Screens/OpenAccPageTwo/';
 import OpenAccPageThree from '../Screens/OpenAccPageThree/';
 import OpenAccPageFour from '../Screens/OpenAccPageFour/';
 import OpenAccPageFive from '../Screens/OpenAccPageFive/';
 import OpenAccPageSix from '../Screens/OpenAccPageSix/';
 import SpecialtyAccPage from '../Screens/SpecialtyAccPage/SpecialtyAccPageComponent';
 import SpecialtyAccSubmit from '../Screens/SpecialtyAccSubmit/';
 import CollegePlanESA from '../Screens/CollegePlanESA/CollegePlanESAComponent';
 import CollegePlanPartOneTwo from '../Screens/CollegePlanPartOneTwo/CollegePlanPartOneTwoComponent';
 import CollegePlanPersonal from '../Screens/CollegePlanPersonal/CollegePlanPersonalComponent';
 import CollegePlanBeneficiary from '../Screens/CollegePlanBeneficiary/CollegePlanBeneficiaryComponent';

 // Others
 import InvestmentPlanInfo from '../Screens/InvestmentPlanInfo';

// Menu
import AccountServicesComponent from '../Screens/AccountServices';
import DrawerComponent from '../Screens/Menu/DrawerComponent';
import TabMoreComponent from '../Screens/Menu/TabMoreComponent';
import Screen1Component from '../Screens/NotificationTab/Screen1';
import Screen2Component from '../Screens/NotificationTab/Screen2';
import MoreModalComponent from '../Screens/Menu/MoreModalComponent';
import { GHeaderComponent } from '../CommonComponents';

// Notification Tabs
const NotificationTabNavigator = createMaterialTopTabNavigator(
    {
        'Message Center': {
            screen: Screen1Component,
        },
        Notification: {
            screen: Screen2Component,
        },
    },
    {
        tabBarPosition: 'top',
        swipeEnabled: true,
        animationEnabled: true,
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
        navigationOptions:{
            header:null
        },
    }
);

const AccountStack=createStackNavigator({
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
    investmentPlanInfo: {
        screen: InvestmentPlanInfo,
        navigationOptions: {
            header: null,
        }
    },
});

//  Bottom Tabs
const BottomTabNavigator = createBottomTabNavigator({
    myVCM: {
        screen: AccountStack,
        navigationOptions:{
            tabBarLabel: 'MyVCM',
        },
    },
    portfolio: {
        screen: AccountServicesComponent,
        navigationOptions: {
            tabBarLabel: 'Portfolio',
        },
    },
    invest: {
        screen: InvestmentPlanInfo,
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
        screen:TermsAndConditions,
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
                const { routeName, key } = navigation.state;
                if (routeName === 'more') {
                   // console.warn('onPress:', navigation);
                    navigation.goBack();
                }
                defaultHandler();

                if (navigation && navigation.isFocused()) {
                    //  console.warn('isFocused:', navigation.state);
                }

            }
        }),
    }
);
const DrawerNavigator = createDrawerNavigator({
    Home: BottomTabNavigator,
    profileSettings: {
        screen: ProfileSettings,
        navigationOptions: {
            title: "Personal Info",
        }
    },
    editPhoneInformation: {
        screen: EditPhoneInformation,
        navigationOptions: {
            title: "Contact Info",
        }
    },
    editOccupationInfo: {
        screen: EditOccupationInfo,
        navigationOptions: {
            title: "Employee Info",
        }
    },
    editMilitaryInfo: {
        screen: EditMilitaryInfo,
        navigationOptions: {
            title: "Military Info",
        }
    },
    editRelationshipInfo: {
        screen: EditRelationshipInfo,
        navigationOptions: {
            title: "Relationship Info"
        }
    },
    // child screens of drawer menu
    editAddPhoneNumber: {
        screen: EditAddPhoneNumber,
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
    // Account Management screens

}, {
    navigationOptions:{
        header:null
    },
    initialRouteName: 'Home',
    contentComponent: DrawerComponent,
    drawerWidth: 250
});
const DashboardStack = createStackNavigator({
    dashboardScreen: DrawerNavigator,
    notificationTabs: NotificationTabNavigator,
    draweriOS: {
        screen: DrawerComponent,
    },
    moreModal: {
        screen: MoreModalComponent,
    },
    listView: {
        screen: ListView,
        navigationOptions: {
            header: null,
        }
    },
}, {

});
export default DashboardStack;


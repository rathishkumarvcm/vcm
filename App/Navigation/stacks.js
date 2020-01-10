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
// import MarketingandPrivacySettings from './Screens/MarketingandPrivacy/'; —> marketingandPrivacySettings
// import EditProfileSettings from './Screens/EditProfileSettings/'; —> editProfileSettings
// import EditAddressSettings from './Screens/EditAddressInformation/'; —> editAddressSettings
// import EditAddressAddNew from './Screens/EditAddressAddNew/'; —> editAddressAddNew
// import EditPhoneInformation from './Screens/EditPhoneInformations/'; —> editPhoneInformation
// import EditAddPhoneNumber from './Screens/EditAddNewPhoneNumber/'; —> editAddPhoneNumber
// import EditEmailInformation from './Screens/EditEmailInformation/'; —> editEmailInformation
// import EditEmailAddNew from './Screens/EditEmailInfoAddNew/'; —> editEmailAddNew
// import EditAddFinancialInfo from './Screens/EditAddFinancialInformation/'; —> editAddFinancialInfo
// import EditOccupationInfo from './Screens/EditOccupationInformation/'; —> editOccupationInfo
// import EditMilitaryInfo from './Screens/EditMilitaryInformation/'; —> editMilitaryInfo
// import EditRelationshipInfo from './Screens/EditRelationshipInformation/'; —> editRelationshipInfo
// import EditFamilyMemberInfo from './Screens/EditFamilyMemberInformation/'; —> editFamilyMemberInfo
// import EditFamilyDetail from './Screens/EditFamilyMemberDetails/'; —> editFamilyDetail

// Menu
import TermsAndConditions from '../Screens/TermsAndConditions/TermsAndConditionsComponent';
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
//  Bottom Tabs
const BottomTabNavigator = createBottomTabNavigator({
    myVCM: {
        screen: AccountServicesComponent,
        navigationOptions:{
            tabBarLabel: 'MyVCM',
        },
    },
    portfolio: {
        screen: TermsAndConditions,
        navigationOptions: {
            title: 'Port',
            tabBarLabel: 'Portfolio',
        },
    },
    invest: {
        screen: AccountServicesComponent,
        navigationOptions: {
            title: 'Ivesting',
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
                return <GIcon
                    name={iconName}
                    type="material"
                    size={20}
                    color={tintColor}
                />
            },
            tabBarOnPress: ({ defaultHandler }) => {
                const { routeName, key } = navigation.state;
                if (routeName === 'more') {
                    console.warn('onPress:', navigation);
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


import React, { Component } from 'react';
import { Text, View, Image, ScrollView, TouchableOpacity, FlatList, Switch } from 'react-native';
import { styles } from './styles';
import { GButtonComponent, GHeaderComponent, GIcon, GInputComponent, GRadioButtonComponent } from '../../CommonComponents';
import { scaledHeight } from '../../Utils/Resolution';
import PropTypes from "prop-types";
import globalString from '../../Constants/GlobalStrings';

let editDeleteMenuOption = [
    {
        name: 'Edit',
        id: '1'
    },
    {
        name: 'Delete',
        id: '2'
    },
];

const UserEmailInformation = (props) => {
    return (
        <View style={styles.editEmailHolder}>
            <View style={[styles.profileDivideIcon]}>
                <View style={styles.profileDivideIconOne}>
                    <Text style={styles.editEmailType}>
                        {props.emailType}
                    </Text>
                    <Text style={styles.editEmailId}>
                        {props.emailId}
                    </Text>
                </View>

                <View style={styles.profileDivideIconTwo}>
                    <TouchableOpacity
                        onPress={props.onMenuOptionClicked}>
                        <Image style={styles.imageWidthHeight}
                            source={require("../../Images/menu_icon.png")} />
                    </TouchableOpacity>
                </View>
            </View>

            {props.selectedMenuIndex == 1 ?
                (<FlatList style={styles.editFlatList}
                    data={editDeleteMenuOption}
                    renderItem={({ item, index }) =>
                        (<TouchableOpacity style={styles.editDropdown}>
                            <Text style={styles.editDropdownText}>
                                {item.name}
                            </Text>
                        </TouchableOpacity>)}
                    keyExtractor={item => item.id} />)
                : null}

            <View style={styles.editEmailBorder} />

            <View style={styles.editAddressView}>
                <Text style={styles.editAddressLabel}>
                    {globalString.profileSettingsPage.profileMailPrimaryLabel}
                </Text>

                <View style={styles.editSwitchButton}>
                    <Switch trackColor={{ flase: '#DBDBDB', true: '#444444' }}
                        onValueChange={props.onEmailToggle}
                        value={props.isPrimaryEmail} />
                </View>
            </View>
        </View>
    );
};

UserEmailInformation.propTypes = {
    emailType: PropTypes.string,
    emailId: PropTypes.string,
    isPrimaryEmail: PropTypes.bool,
    onEmailToggle: PropTypes.func,
    onMenuOptionClicked: PropTypes.func,
    selectedMenuIndex: PropTypes.any
};

class editEmailInfoComponent extends Component {
    constructor(props) {
        super(props);
        //set true to isLoading if data for this screen yet to be received and wanted to show loader.
        this.state = {
            isLoading: false,
            enableBiometric: false,
            faceIdEnrolled: false,
            touchIdEnrolled: false,

            selectedIndex: -1,
            isEmailRefreshed: false,
            profilePrimayMail: '',
            profileEmailData: []
        };
    }

    componentDidMount() {
        if (this.props && this.props.initialState && this.props.initialState.email) {
            this.setState({
                profilePrimayMail: this.props.initialState.email
            });
        }

        if (this.props &&
            this.props.profileState &&
            this.props.profileState.profileUserMailInformation) {
            this.setState({
                profileEmailData: this.props.profileState.profileUserMailInformation,
                isEmailRefreshed: !this.state.isEmailRefreshed
            });
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props != prevProps) {
            if (this.props &&
                this.props.profileState &&
                this.props.profileState.profileUserMailInformation) {
                this.setState({
                    profileEmailData: this.props.profileState.profileUserMailInformation,
                    isEmailRefreshed: !this.state.isEmailRefreshed
                });
            }
        }
    }

    onEmailToggle = (item, index) => () => {
        var array = [...this.state.profileEmailData];
        if (index !== -1) {
            let switchVal = array[index].isPrimaryEmail;
            array[index].isPrimaryEmail = !switchVal;
            this.setState({
                profileEmailData: array,
                isEmailRefreshed: !this.state.isEmailRefreshed
            });
        }
    }

    // Email Informations 

    onMenuOptionClicked = (item, index) => () => {
        var array = [...this.state.profileEmailData];
        array[index].selectedMenuIndex = index;
        this.setState({
            profileEmailData: array,
            isEmailRefreshed: !this.state.isMobileRefreshed,
            selectedIndex: index
        });
    }

    renderEmailInformation = () => ({ item, index }) => {
        return (<UserEmailInformation
            emailType={item.emailType}
            emailId={item.emailId}
            isPrimaryEmail={item.isPrimaryEmail}
            onMobileToggle={this.onEmailToggle(item, index)}
            onMenuOptionClicked={this.onMenuOptionClicked(item, index)}
            selectedMenuIndex={index == this.state.selectedIndex ? 1 : 0} />
        )
    };

    emailAddNew = () => this.props.navigation.navigate('editEmailAddNew');

    emailAddNewOnCancel = () => this.props.navigation.navigate('profileSettings');

    render() {
        return (
            <View style={styles.container}>
                <GHeaderComponent
                    navigation={this.props.navigation} />

                <ScrollView style={{ flex: 0.85 }}>

                    <View style={styles.settingsView}>
                        <Text style={styles.settingsInfo}>
                            {globalString.editProfilePageValue.editAddressInfoHead}
                        </Text>
                        <Text style={[styles.settingsInfo, styles.editLabelBold]}>
                            {globalString.editEmailInformations.editEmailTitle}
                        </Text>
                    </View>

                    <View style={[styles.settingsView]}>
                        <Text style={styles.profileSettingViewOne}>
                            {globalString.editEmailInformations.editEmailTitle}
                        </Text>

                        <Text style={styles.profileSettingViewTwo}
                            onPress={this.emailAddNew}>
                            {globalString.editPhoneInformations.phoneAddNew}
                        </Text>
                    </View>

                    <View style={styles.settingsBorder} />

                    <FlatList
                        data={this.state.profileEmailData}
                        extraData={this.state.isEmailRefreshed}
                        keyExtractor={this.generateKeyExtractor}
                        renderItem={this.renderEmailInformation()} />

                    <View style={styles.editFlexDirectionColumn}>
                        <GButtonComponent
                            buttonStyle={styles.cancelButtonStyle}
                            buttonText={globalString.common.back}
                            textStyle={styles.cancelButtonText}
                            onPress={this.emailAddNewOnCancel} />
                    </View>

                    <View style={styles.newVictorySection}>
                        <Text style={styles.termsofuseText1}>
                            {globalString.editEmailInformations.editEmailTerms}
                        </Text>
                        <Text style={[styles.openInvestment, lineHeight = 30]}>
                            {globalString.editEmailInformations.editEmailInvestment}
                        </Text>
                    </View>

                    <View style={styles.connectWithUs}>
                        <Image
                            source={require("../../Images/logo.png")} />
                    </View>

                    <View style={styles.whiteBackground}>
                        <Text style={styles.editLabelInputMedium}>
                            {globalString.common.connectWithUs}
                        </Text>
                    </View>

                    <View style={styles.whiteBackground}>
                        <Image style={styles.imageWidthHeight}
                            source={require("../../Images/twitterlogo.png")} />
                        <Image style={styles.imageWidthHeight}
                            source={require("../../Images/linkedinlogo.png")} />
                    </View>

                    <View style={styles.privacyAgreement}>
                        <Text style={styles.privacyText}>
                            {globalString.common.privacyPolicy}
                        </Text>

                        <Text style={styles.privacyText}>
                            {globalString.common.fundDocuments}
                        </Text>
                    </View>

                    <View style={styles.privacyAgreement}>
                        <Text style={styles.privacyText}>
                            {globalString.common.userAgreement}
                        </Text>

                        <Text style={styles.privacyText}>
                            {globalString.common.support}
                        </Text>
                    </View>

                    <View style={styles.copyRightSection}>
                        <Text style={styles.copyRightText}>
                            {globalString.common.copyRights}
                        </Text>
                    </View>

                </ScrollView>
            </View>
        );
    }
}

export default editEmailInfoComponent;
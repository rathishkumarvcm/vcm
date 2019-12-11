import React, { Component } from 'react';
import { Text, View, Image, ScrollView, TouchableOpacity, FlatList, Switch } from 'react-native';
import { styles } from './styles';
import { GButtonComponent, GHeaderComponent, GIcon, GInputComponent, GRadioButtonComponent } from '../../CommonComponents';
import { scaledHeight } from '../../Utils/Resolution';
import globalString from '../../Constants/GlobalStrings';
import PropTypes from "prop-types";

const tempUserMobile = [
    {
        "mobileNumberType": 'Primary Mobile',
        "mobileNumber": '+1(xxx) xxx-7890',
        "mobilePreferredTime": 'Morning',
        "isPrimaryMobile": true
    }
];

const tempUserHome = [
    {
        "mobileNumberType": 'Primary Mobile',
        "mobileNumber": '+1(xxx) xxx-7890',
        "mobilePreferredTime": 'Morning',
        "isPrimaryMobile": true
    }
];

const tempUserWork = [
    {
        "mobileNumberType": 'Primary Mobile',
        "mobileNumber": '+1(xxx) xxx-7890',
        "mobilePreferredTime": 'Morning',
        "isPrimaryMobile": true
    }
];

const UserPhoneInformation = (props) => {
    return (
        <View style={styles.editEmailHolder}>

            <View style={[styles.profileDivideIcon]}>
                <View style={styles.profileDivideIconOne}>
                    <Text style={styles.editEmailType}>
                        {props.mobileNumberType}
                    </Text>
                    <Text style={styles.editEmailId}>
                        {props.mobileNumber}
                    </Text>
                    <Text style={styles.editEmailId}>
                        {props.mobilePreferredTime}
                    </Text>
                </View>

                <View style={styles.profileDivideIconTwo}>
                    <Image style={styles.imageWidthHeight}
                        source={require("../../Images/menu_icon.png")} />
                </View>
            </View>

            <View style={styles.editEmailBorder} />

            <View style={styles.editAddressView}>
                <Text style={styles.editAddressLabel}>
                    {globalString.profileSettingsPage.profileMailPrimaryLabel}
                </Text>

                <View style={styles.editSwitchButton}>
                    <Switch trackColor={{ flase: '#DBDBDB', true: '#444444' }}
                        onValueChange={this.toggleSwitchMailing}
                        value={props.isPrimaryMobile} />
                </View>
            </View>

        </View>
    );
};

UserPhoneInformation.propTypes = {
    mobileNumberType: PropTypes.string,
    mobileNumber: PropTypes.string,
    mobilePreferredTime: PropTypes.string,
    isPrimaryMobile: PropTypes.bool
};

class editPhoneInfoComponent extends Component {
    constructor(props) {
        super(props);
        //set true to isLoading if data for this screen yet to be received and wanted to show loader.
        this.state = {
            isLoading: false,
            enableBiometric: false,
            faceIdEnrolled: false,
            touchIdEnrolled: false
        };
    }

    renderPhoneInformation = (dataLength) => ({ item, index }) =>
        (<UserPhoneInformation
            mobileNumberType={item.mobileNumberType}
            mobileNumber={item.mobileNumber}
            mobilePreferredTime={item.mobilePreferredTime}
            isPrimaryMobile={item.isPrimaryMobile} />);

    toggleSwitchMailing = (value) => {
        this.props.isMailingAddress = value
    }

    componentDidMount() { }

    phoneInformationOnAdd = () => this.props.navigation.navigate('editAddPhoneNumber');

    phoneInformationOnCancel = () => this.props.navigation.navigate('profileSettings');

    render() {

        let userMobileNumber = tempUserMobile;
        let userHomeNumber = tempUserHome;
        let userWorkNumber = tempUserWork;

        if (this.props &&
            this.props.profileState &&
            this.props.profileState.profileUserMobileNumber) {
            userMobileNumber = this.props.profileState.profileUserMobileNumber;
        }

        if (this.props &&
            this.props.profileState &&
            this.props.profileState.profileUserHomeNumber) {
            userHomeNumber = this.props.profileState.profileUserHomeNumber;
        }

        if (this.props &&
            this.props.profileState &&
            this.props.profileState.profileUserWorkNumber) {
            userWorkNumber = this.props.profileState.profileUserWorkNumber;
        }

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
                            {globalString.editPhoneInformations.phoneInfoTitle}
                        </Text>
                    </View>

                    <View style={[styles.settingsView]}>
                        <Text style={styles.profileSettingViewOne}>
                            {globalString.editPhoneInformations.phoneLabel}
                        </Text>

                        <Text style={styles.profileSettingViewTwo}
                            onPress={this.phoneInformationOnAdd}>
                            {globalString.editPhoneInformations.phoneAddNew}
                        </Text>
                    </View>

                    <View style={styles.settingsBorder} />

                    <View>
                        <View style={styles.settingsView}>
                            <Text style={styles.phoneMobileView}>
                                {globalString.editPhoneInformations.phoneMobileLabel}
                            </Text>
                        </View>

                        <FlatList
                            data={userMobileNumber}
                            keyExtractor={this.generateKeyExtractor}
                            renderItem={this.renderPhoneInformation(userMobileNumber.length)} />

                    </View>

                    <View>
                        <View style={styles.settingsView}>
                            <Text style={styles.phoneMobileView}>{"Home"}</Text>
                        </View>

                        <FlatList
                            data={userHomeNumber}
                            keyExtractor={this.generateKeyExtractor}
                            renderItem={this.renderPhoneInformation(userHomeNumber.length)} />

                    </View>

                    <View>
                        <View style={styles.settingsView}>
                            <Text style={styles.phoneMobileView}>{"Work"}</Text>
                        </View>

                        <FlatList
                            data={userWorkNumber}
                            keyExtractor={this.generateKeyExtractor}
                            renderItem={this.renderPhoneInformation(userWorkNumber.length)} />
                    </View>

                    <View style={styles.settingsView}>
                        <Text style={styles.phoneAddFaxLabel}>
                            {globalString.editPhoneInformations.phoneFax}
                        </Text>
                    </View>

                    <View style={styles.phoneFaxView}>
                        <GInputComponent
                            placeholder={globalString.editPhoneInformations.phoneFaxLabel} />
                    </View>

                    <View style={styles.editFlexDirectionColumn}>
                        <GButtonComponent
                            buttonStyle={styles.cancelButtonStyle}
                            buttonText={globalString.common.cancel}
                            textStyle={styles.cancelButtonText}
                            onPress={this.phoneInformationOnCancel} />
                    </View>

                    <View style={styles.newVictorySection}>
                        <Text style={styles.termsofuseText1}>
                            {globalString.editPhoneInformations.phoneTerms}
                        </Text>
                        <Text style={styles.openInvestment}>
                            {globalString.editPhoneInformations.phoneInvestment}
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

export default editPhoneInfoComponent;
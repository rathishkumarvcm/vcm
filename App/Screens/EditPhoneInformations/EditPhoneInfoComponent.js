import React, { Component } from 'react';
import { Text, View, Image, ScrollView, TouchableOpacity, FlatList } from 'react-native';
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
    },
    {
        "mobileNumberType": 'Secondary Mobile',
        "mobileNumber": '+1(xxx) xxx-7890',
        "mobilePreferredTime": 'Morning',
        "isPrimaryMobile": false
    },
    {
        "mobileNumberType": 'Teritary Mobile',
        "mobileNumber": '+1(xxx) xxx-7890',
        "mobilePreferredTime": 'Morning',
        "isPrimaryMobile": false
    }
];

const tempUserHome = [
    {
        "mobileNumberType": 'Primary Mobile',
        "mobileNumber": '+1(xxx) xxx-7890',
        "mobilePreferredTime": 'Morning',
        "isPrimaryMobile": true
    },
    {
        "mobileNumberType": 'Secondary Mobile',
        "mobileNumber": '+1(xxx) xxx-7890',
        "mobilePreferredTime": 'Morning',
        "isPrimaryMobile": false
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
            <Text style={styles.editEmailType}>
                {props.mobileNumberType}
            </Text>

            <Text style={styles.editEmailId}>
                {props.mobileNumber}
            </Text>

            <Text style={styles.editEmailId}>
                {props.mobilePreferredTime}
            </Text>

            <View style={styles.editEmailBorder} />

            <View style={styles.editEmailPrimaryContent}>
                <Text style={styles.editEmailId}>
                    {globalString.profileSettingsPage.profileMailPrimaryLabel}
                </Text>
            </View>
        </View>
    );
};

UserPhoneInformation.propTypes = {
    mobileNumberType: PropTypes.string,
    mobileNumber: PropTypes.string,
    mobilePreferredTime: PropTypes.string
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
        />);

    componentDidMount() { }

    phoneInformationOnAdd = () => this.props.navigation.navigate('editAddPhoneNumber');

    phoneInformationOnCancel = () => this.props.navigation.navigate('profileSettings');

    render() {
        return (
            <View style={styles.container}>
                <GHeaderComponent
                    navigation={this.props.navigation}
                />

                <ScrollView style={{ flex: 0.85 }}>

                    <View style={styles.settingsView}>
                        <Text style={styles.settingsInfo}>
                            {globalString.editProfilePageValue.editAddressInfoHead}
                        </Text>
                        <Text style={[styles.settingsInfo, styles.editLabelBold]}>
                            {globalString.editPhoneInformations.phoneInfoTitle}
                        </Text>
                    </View>

                    <View style={styles.settingsView}>
                        <Text style={styles.phoneInfoLabel}>
                            {globalString.editPhoneInformations.phoneLabel}
                        </Text>
                        <Text style={styles.phoneInfoAddNewLabel}
                            onPress={this.phoneInformationOnAdd}
                        >
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
                            data={tempUserMobile}
                            keyExtractor={this.generateKeyExtractor}
                            renderItem={this.renderPhoneInformation(tempUserMobile.length)}
                        />

                    </View>

                    <View>
                        <View style={styles.settingsView}>
                            <Text style={styles.phoneMobileView}>{"Home"}</Text>
                        </View>

                        <FlatList
                            data={tempUserHome}
                            keyExtractor={this.generateKeyExtractor}
                            renderItem={this.renderPhoneInformation(tempUserHome.length)}
                        />

                    </View>

                    <View>
                        <View style={styles.settingsView}>
                            <Text style={styles.phoneMobileView}>{"Work"}</Text>
                        </View>

                        <FlatList
                            data={tempUserWork}
                            keyExtractor={this.generateKeyExtractor}
                            renderItem={this.renderPhoneInformation(tempUserWork.length)}
                        />

                    </View>

                    <View style={styles.settingsView}>
                        <Text style={styles.phoneAddFaxLabel}>
                            {globalString.editPhoneInformations.phoneFax}
                        </Text>
                        <Text style={styles.phoneFaxAddNewLabel}>
                            {globalString.editPhoneInformations.phoneAddNew}
                        </Text>
                    </View>

                    <View style={styles.settingsBorder} />

                    <View style={styles.phoneFaxView}>
                        <GInputComponent
                            placeholder={globalString.editPhoneInformations.phoneFaxLabel}
                        />
                    </View>

                    <View style={styles.editFlexDirectionColumn}>
                        <GButtonComponent
                            buttonStyle={styles.cancelButtonStyle}
                            buttonText={globalString.common.cancel}
                            textStyle={styles.cancelButtonText}
                            onPress={this.phoneInformationOnCancel}
                        />
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
                            source={require("../../Images/logo.png")}
                        />
                    </View>

                    <View style={styles.whiteBackground}>
                        <Text style={styles.editLabelInputMedium}>
                            {globalString.common.connectWithUs}
                        </Text>
                    </View>

                    <View style={styles.whiteBackground}>
                        <Image style={styles.imageWidthHeight}
                            source={require("../../Images/twitterlogo.png")}
                        />
                        <Image style={styles.imageWidthHeight}
                            source={require("../../Images/linkedinlogo.png")}
                        />
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
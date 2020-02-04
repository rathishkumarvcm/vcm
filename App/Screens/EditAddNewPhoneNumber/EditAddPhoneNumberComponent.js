import React, { Component } from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import PropTypes from "prop-types";
import styles from './styles';
import { GButtonComponent, GHeaderComponent, GInputComponent, GDropDownComponent } from '../../CommonComponents';
import globalString from '../../Constants/GlobalStrings';
import ImagesLoad from '../../Images/ImageIndex';

const phoneTypeData = [
    {
        "key": "home",
        "value": "Home"
    },
    {
        "key": "mobile",
        "value": "Mobile"
    },
    {
        "key": "work",
        "value": "Work"
    }
];

const contactTimeData = [
    {
        "key": "day",
        "value": "Daytime"
    },
    {
        "key": "evening",
        "value": "Evening"
    },
    {
        "key": "any",
        "value": "Anytime"
    }
];

class EditAddPhoneNumberComponent extends Component {
    constructor(props) {
        super(props);
        // set true to isLoading if data for this screen yet to be received and wanted to show loader.
        this.state = {
            contactNumber: '',

            dropDownPhoneState: false,
            dropDownPhoneValue: '',
            dropDownPhoneFlag: false,
            dropDownPhoneMsg: '',

            dropDownCodeState: false,
            dropDownCodeValue: '',
            dropDownCodeFlag: false,
            dropDownCodeMsg: '',

            dropDownContactState: false,
            dropDownContactValue: '',
            dropDownContactFlag: '',
            dropDownContactMsg: ''
        };
    }

    componentDidMount() { }

    dropDownPhoneClick = () => {
        const { dropDownPhoneState } = this.state;
        this.setState({
            dropDownPhoneState: !dropDownPhoneState
        });
    }

    dropDownPhoneSelect = (value, index, data) => {
        this.setState({
            dropDownPhoneValue: data[parseInt(index, 10)].value,
            dropDownPhoneState: false,
            dropDownPhoneFlag: false
        });
    }

    dropDownCodeClick = () => {
        const { dropDownCodeState } = this.state;
        this.setState({
            dropDownCodeState: !dropDownCodeState
        });
    }

    dropDownCodeSelect = (value, index, data) => {
        this.setState({
            dropDownCodeValue: data[parseInt(index, 10)].value,
            dropDownCodeState: false,
            dropDownCodeFlag: false
        });
    }

    dropDownContactClick = () => {
        const { dropDownContactState } = this.state;
        this.setState({
            dropDownContactState: !dropDownContactState
        });
    }

    dropDownContactSelect = (value, index, data) => {
        this.setState({
            dropDownContactValue: data[parseInt(index, 10)].value,
            dropDownContactState: false,
            dropDownContactFlag: false
        });
    }

    setContactNumber = (text) => {
        this.setState({
            contactNumber: text
        });
    }

    phoneAddNewNumberOnCancel = () => {
        const { navigation } = this.props;
        navigation.navigate('editPhoneInformation');
    }

    managePhoneInformations = () => {
        const { saveProfileData, navigation } = this.props;
        const payloadData = this.getPhonePayloadData();
        saveProfileData("editPhoneInformation", payloadData);
        navigation.navigate('editPhoneInformation');
    }

    getPhonePayloadData = () => {
        const { profileState } = this.props;
        const { dropDownPhoneValue, contactNumber, dropDownContactValue } = this.state;
        let phonePayload = {};
        let payloadUserPhone = [];
        if (this.props && profileState) {
            const newPhoneInformation = {
                "mobileNumberType": dropDownPhoneValue,
                "mobileNumber": `${'+1 '}${contactNumber}`,
                "mobilePreferredTime": dropDownContactValue,
                "isPrimaryMobile": false
            };

            if (dropDownPhoneValue === 'Home') {
                payloadUserPhone = profileState.profileUserHomeNumber;
                payloadUserPhone.push(newPhoneInformation);
                phonePayload = {
                    ...profileState,
                    profileUserHomeNumber: payloadUserPhone,
                };
            }

            if (dropDownPhoneValue === 'Mobile') {
                payloadUserPhone = profileState.profileUserMobileNumber;
                payloadUserPhone.push(newPhoneInformation);
                phonePayload = {
                    ...profileState,
                    profileUserMobileNumber: payloadUserPhone,
                };
            }

            if (dropDownPhoneValue === 'Work') {
                payloadUserPhone = profileState.profileUserWorkNumber;
                payloadUserPhone.push(newPhoneInformation);
                phonePayload = {
                    ...profileState,
                    profileUserWorkNumber: payloadUserPhone,
                };
            }
        }
        return phonePayload;
    }

    render() {

        const { navigation } = this.props;
        const { dropDownPhoneState, dropDownPhoneValue, dropDownPhoneFlag, dropDownPhoneMsg,
            dropDownCodeState, dropDownCodeValue, dropDownCodeFlag, dropDownCodeMsg,
            dropDownContactState, dropDownContactValue, dropDownContactFlag, dropDownContactMsg } = this.state;
        const userPhoneType = phoneTypeData;

        return (

            <View style={styles.container}>
                <GHeaderComponent
                    navigation={navigation}
                />

                <ScrollView style={styles.addPhoneNumberFlex}>
                    <View style={styles.settingsView}>
                        <Text style={styles.settingsInfo}>
                            {globalString.editProfilePageValue.editAddressInfoHead}
                        </Text>
                        <Text style={styles.addPhoneNumberTitle}>
                            {globalString.addPhoneNumber.addPhoneTitle}
                        </Text>
                    </View>

                    <View style={styles.settingsView}>
                        <Text style={styles.addPhoneNumberHeader}>
                            {globalString.addPhoneNumber.addPhoneTitle}
                        </Text>
                    </View>

                    <View style={styles.settingsBorder} />

                    <GDropDownComponent
                        dropDownTextName={styles.phoneTypeLabel}
                        dropDownName={globalString.addPhoneNumber.phoneType}
                        data={userPhoneType}
                        changeState={this.dropDownPhoneClick}
                        showDropDown={dropDownPhoneState}
                        dropDownValue={dropDownPhoneValue}
                        selectedDropDownValue={this.dropDownPhoneSelect}
                        itemToDisplay="value"
                        errorFlag={dropDownPhoneFlag}
                        errorText={dropDownPhoneMsg}
                    />

                    <GDropDownComponent
                        dropDownTextName={styles.phoneTypeLabel}
                        dropDownName={globalString.addPhoneNumber.phoneNumber}
                        data={contactTimeData}
                        changeState={this.dropDownCodeClick}
                        showDropDown={dropDownCodeState}
                        dropDownValue={dropDownCodeValue}
                        selectedDropDownValue={this.dropDownCodeSelect}
                        itemToDisplay="value"
                        errorFlag={dropDownCodeFlag}
                        errorText={dropDownCodeMsg}
                    />

                    <View style={styles.editFlexDirectionColumn}>
                        <GInputComponent
                            propInputStyle={styles.editAddressInput}
                            placeholder=""
                            onChangeText={this.setContactNumber}
                            maxLength={10}
                        />
                    </View>

                    <GDropDownComponent
                        dropDownTextName={styles.phoneTypeLabel}
                        dropDownName={globalString.addPhoneNumber.callTimePreference}
                        data={contactTimeData}
                        changeState={this.dropDownContactClick}
                        showDropDown={dropDownContactState}
                        dropDownValue={dropDownContactValue}
                        selectedDropDownValue={this.dropDownContactSelect}
                        itemToDisplay="value"
                        errorFlag={dropDownContactFlag}
                        errorText={dropDownContactMsg}
                    />

                    <View style={styles.editFlexDirectionColumn}>
                        <GButtonComponent
                            buttonStyle={styles.cancelButtonStyle}
                            buttonText={globalString.common.cancel}
                            textStyle={styles.cancelButtonText}
                            onPress={this.phoneAddNewNumberOnCancel}
                        />
                    </View>

                    <View style={styles.editFlexDirectionColumn}>
                        <GButtonComponent
                            buttonStyle={styles.saveButtonStyle}
                            buttonText={globalString.common.save}
                            textStyle={styles.saveButtonText}
                            onPress={this.managePhoneInformations}
                        />
                    </View>

                    <View style={styles.newVictorySection}>
                        <Text style={styles.termsofuseText1}>
                            {globalString.addPhoneNumber.phoneInvesting}
                        </Text>
                        <Text style={styles.openInvestment}>
                            {globalString.addPhoneNumber.phoneInvestments}
                        </Text>
                    </View>

                    <View style={styles.connectWithUs}>
                        <Image
                            source={ImagesLoad.applicationLogo}
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

EditAddPhoneNumberComponent.propTypes = {
    navigation: PropTypes.instanceOf(Object),
    profileState: PropTypes.instanceOf(Object),
    saveProfileData: PropTypes.func
};

EditAddPhoneNumberComponent.defaultProps = {
    navigation: {},
    profileState: {},
    saveProfileData: null
};

export default EditAddPhoneNumberComponent;
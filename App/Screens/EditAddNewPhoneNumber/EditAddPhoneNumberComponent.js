import React, { Component } from 'react';
import { Text, View, Image, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import { styles } from './styles';
import { GButtonComponent, GHeaderComponent, GIcon, GInputComponent, GRadioButtonComponent, GDropDownComponent } from '../../CommonComponents';
import { scaledHeight } from '../../Utils/Resolution';
import globalString from '../../Constants/GlobalStrings';

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
        //set true to isLoading if data for this screen yet to be received and wanted to show loader.
        this.state = {
            isLoading: false,
            enableBiometric: false,
            faceIdEnrolled: false,
            touchIdEnrolled: false,
            contactNumber: '',
            isValidContact: false,

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

    dropDownPhoneClick = () => {
        this.setState({
            dropDownPhoneState: !this.state.dropDownPhoneState
        });
    }

    dropDownPhoneSelect = (valuePhoneType) => {
        this.setState({
            dropDownPhoneValue: valuePhoneType.value,
            dropDownPhoneState: false,
            dropDownPhoneFlag: false
        });
    }

    dropDownCodeClick = () => {
        this.setState({
            dropDownCodeState: !this.state.dropDownCodeState
        });
    }

    dropDownCodeSelect = (valueCode) => {
        this.setState({
            dropDownCodeValue: valueCode.value,
            dropDownCodeState: false,
            dropDownCodeFlag: false
        });
    }

    dropDownContactClick = () => {
        this.setState({
            dropDownContactState: !this.state.dropDownContactState
        });
    }

    dropDownContactSelect = (valueContactTime) => {
        this.setState({
            dropDownContactValue: valueContactTime.value,
            dropDownContactState: false,
            dropDownContactFlag: false
        });
    }

    setContactNumber = (text) => {
        this.setState({
            contactNumber: text
        })
    }

    componentDidMount() { }

    phoneAddNewNumberOnCancel = () => this.props.navigation.navigate('editPhoneInformation');

    managePhoneInformations = () => {
        const payloadData = this.getPhonePayloadData();
        this.props.saveProfileData("editPhoneInformation", payloadData);
        this.props.navigation.navigate('editPhoneInformation');
    }

    getPhonePayloadData = () => {
        let phonePayload = {};
        let payloadUserPhone = [];
        if (this.props && this.props.profileState) {
            const newPhoneInformation = {
                "mobileNumberType": this.state.dropDownPhoneValue,
                "mobileNumber": '+1' + ' ' + this.state.contactNumber,
                "mobilePreferredTime": this.state.dropDownContactValue,
                "isPrimaryMobile": false
            };

            console.log("@@@@@@@@@@@@@@@@ Type", this.state.dropDownPhoneValue);

            if (this.state.dropDownPhoneValue === 'Home') {
                payloadUserPhone = this.props.profileState.profileUserHomeNumber;
                payloadUserPhone.push(newPhoneInformation);
                phonePayload = {
                    ...this.props.profileState,
                    profileUserHomeNumber: payloadUserPhone,
                };
                console.log("############# Home", phonePayload);
            }

            if (this.state.dropDownPhoneValue === 'Mobile') {
                payloadUserPhone = this.props.profileState.profileUserMobileNumber;
                payloadUserPhone.push(newPhoneInformation);
                phonePayload = {
                    ...this.props.profileState,
                    profileUserMobileNumber: payloadUserPhone,
                };
                console.log("$$$$$$$$$$$$$$ Mobile", phonePayload);
            }

            if (this.state.dropDownPhoneValue === 'Work') {
                payloadUserPhone = this.props.profileState.profileUserWorkNumber;
                payloadUserPhone.push(newPhoneInformation);
                phonePayload = {
                    ...this.props.profileState,
                    profileUserWorkNumber: payloadUserPhone,
                };
                console.log("%%%%%%%%%%%%%% Work", phonePayload);
            }
        }
        return phonePayload;
    }

    render() {

        let userPhoneType = phoneTypeData;

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
                            {globalString.addPhoneNumber.addPhoneTitle}
                        </Text>
                    </View>

                    <View style={styles.settingsView}>
                        <Text style={[styles.settingsHeadline, styles.editTitleBold]}>
                            {globalString.addPhoneNumber.addPhoneTitle}
                        </Text>
                    </View>

                    <View style={styles.settingsBorder} />

                    <GDropDownComponent
                        dropDownTextName={styles.phoneTypeLabel}
                        dropDownName={globalString.addPhoneNumber.phoneType}
                        data={userPhoneType}
                        changeState={this.dropDownPhoneClick}
                        showDropDown={this.state.dropDownPhoneState}
                        dropDownValue={this.state.dropDownPhoneValue}
                        selectedDropDownValue={this.dropDownPhoneSelect}
                        itemToDisplay={"value"}
                        errorFlag={this.state.dropDownPhoneFlag}
                        errorText={this.dropDownPhoneMsg}
                        dropDownPostition={{ position: 'absolute', right: 0, top: scaledHeight(190) }} />

                    <GDropDownComponent
                        dropDownTextName={styles.phoneTypeLabel}
                        dropDownName={globalString.addPhoneNumber.phoneNumber}
                        data={contactTimeData}
                        changeState={this.dropDownCodeClick}
                        showDropDown={this.state.dropDownCodeState}
                        dropDownValue={this.state.dropDownCodeValue}
                        selectedDropDownValue={this.dropDownCodeSelect}
                        itemToDisplay={"value"}
                        errorFlag={this.state.dropDownCodeFlag}
                        errorText={this.dropDownCodeMsg}
                        dropDownPostition={{ position: 'absolute', right: 0, top: scaledHeight(290) }} />

                    <View style={styles.editFlexDirectionColumn}>
                        <GInputComponent
                            propInputStyle={styles.editAddressInput}
                            placeholder={""}
                            onChangeText={this.setContactNumber}
                            maxLength={10} />
                    </View>

                    <GDropDownComponent
                        dropDownTextName={styles.phoneTypeLabel}
                        dropDownName={globalString.addPhoneNumber.callTimePreference}
                        data={contactTimeData}
                        changeState={this.dropDownContactClick}
                        showDropDown={this.state.dropDownContactState}
                        dropDownValue={this.state.dropDownContactValue}
                        selectedDropDownValue={this.dropDownContactSelect}
                        itemToDisplay={"value"}
                        errorFlag={this.state.dropDownContactFlag}
                        errorText={this.dropDownContactMsg}
                        dropDownPostition={{ position: 'absolute', right: 0, top: scaledHeight(460) }} />

                    <View style={styles.editFlexDirectionColumn}>
                        <GButtonComponent
                            buttonStyle={styles.cancelButtonStyle}
                            buttonText={globalString.common.cancel}
                            textStyle={styles.cancelButtonText}
                            onPress={this.phoneAddNewNumberOnCancel} />
                    </View>

                    <View style={styles.editFlexDirectionColumn}>
                        <GButtonComponent
                            buttonStyle={styles.saveButtonStyle}
                            buttonText={globalString.common.save}
                            textStyle={styles.saveButtonText}
                            onPress={this.managePhoneInformations} />
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
                            source={require("../../Images/logo.png")}
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

export default EditAddPhoneNumberComponent;
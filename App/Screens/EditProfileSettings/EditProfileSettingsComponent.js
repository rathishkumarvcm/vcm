import React, { Component } from 'react';
import { Text, View, Image, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import { styles } from './styles';
import { GButtonComponent, GHeaderComponent, GIcon, GInputComponent, GRadioButtonComponent, GDropDownComponent } from '../../CommonComponents';
import { scaledHeight } from '../../Utils/Resolution';
import globalString from '../../Constants/GlobalStrings';
import { JS } from 'aws-amplify';

const profileSettingsCitizenship = [
    { index1: 0, question: "U.S" },
    { index2: 1, question: "Non U.S" },
];

const profileSettingsTempData = [
    {
        key: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        value: 'First State',
    },
    {
        key: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        value: 'Second State',
    },
    {
        key: '58694a0f-3da1-471f-bd96-145571e29d72',
        value: 'Third State',
    },
];

class editProfileSettingsComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            enableBiometric: false,
            faceIdEnrolled: false,
            touchIdEnrolled: false,
            countryNonUS: false,
            isValidPin: true,
            validPin: '',

            profileName: '',
            profileMobile: '',
            profileVcm: '',
            profileSsn: '',
            profileDob: '',
            profilePrefix: '',
            profileSuffix: '',
            profileGender: '',
            profileMaritalStatus: '',
            profileCitizenShip: '',
            profileCountryValue: '',

            radioButton: false,
            radioButtonIndex: 0,

            dropDownState: false,
            dropDownValue: '',
            dropDownPrefixFlag: false,
            dropDownPrefixMsg: '',

            dropDownSuffixState: false,
            dropDownSuffixValue: '',
            dropDownSuffixFlag: false,
            dropDownSuffixMsg: '',

            dropDownGenderState: false,
            dropDownGenderValue: '',
            dropDownGenderFlag: false,
            dropDownGenderMsg: '',

            dropDownStatusState: false,
            dropDownStatusValue: '',
            dropDownStatusFlag: false,
            dropDownStatusMsg: '',

            dropDownCountryState: false,
            dropDownCountryValue: '',
            dropDownCountryFlag: false,
            dropDownCountryMsg: ''
        };
    }

    ShowHideComponent = () => {
        if (this.state.countryNonUS == true) {
            this.setState({ countryNonUS: false });
        } else {
            this.setState({ countryNonUS: true });
        }
    };

    setValidPin = (text) => {
        this.setState({
            validPin: text,
            isValidPin: true
        });
    }

    radioButtonClicked = (index) => {
        if (index !== this.state.radioButtonIndex) {
            this.setState({
                radioButtonIndex: index,
                radioButton: false
            });
        }
        else {
            this.setState({
                radioButton: false
            });
        }

        if (index == 1) {
            this.setState({
                countryNonUS: true
            });
        } else {
            this.setState({
                countryNonUS: false
            });
        }
    }

    navigationSuccess = () => {
        if (this.state.validPin === "") {
            this.setState({
                isValidPin: false
            });
        }

        if (this.state.dropDownValue === '') {
            this.setState({
                dropDownPrefixFlag: true,
                dropDownPrefixMsg: globalString.profileValidationMessages.validatePrefix
            });
        }

        if (this.state.dropDownSuffixValue === '') {
            this.setState({
                dropDownSuffixFlag: true,
                dropDownSuffixMsg: globalString.profileValidationMessages.validateSuffix
            });
        }

        if (this.state.dropDownGenderValue === '') {
            this.setState({
                dropDownGenderFlag: true,
                dropDownGenderMsg: globalString.profileValidationMessages.validateGender
            });
        }

        if (this.state.dropDownStatusValue === '') {
            this.setState({
                dropDownStatusFlag: true,
                dropDownStatusMsg: globalString.profileValidationMessages.validateStatus
            });
        }

        if (this.state.dropDownValue != "" &&
            this.state.dropDownSuffixValue != "" &&
            this.state.dropDownGenderValue != "" &&
            this.state.dropDownStatusValue != "") {
            this.manageProfileInformations();
        }
    }

    dropDownOnClick = () => {
        this.setState({
            dropDownState: !this.state.dropDownState
        });
    }

    dropDownOnSelect = (valuePrefix) => {
        this.setState({
            dropDownValue: valuePrefix.value,
            dropDownState: false,
            dropDownPrefixFlag: false
        });
    }

    dropDownSuffixClick = () => {
        this.setState({
            dropDownSuffixState: !this.state.dropDownSuffixState
        });
    }

    dropDownSuffixSelect = (valueSuffix) => {
        this.setState({
            dropDownSuffixValue: valueSuffix.value,
            dropDownSuffixState: false,
            dropDownSuffixFlag: false
        });
    }

    dropDownGenderClick = () => {
        this.setState({
            dropDownGenderState: !this.state.dropDownGenderState
        });
    }

    dropDownGenderSelect = (valueGender) => {
        this.setState({
            dropDownGenderValue: valueGender.value,
            dropDownGenderState: false,
            dropDownGenderFlag: false
        });
    }

    dropDownStatusClick = () => {
        this.setState({
            dropDownStatusState: !this.state.dropDownStatusState
        });
    }

    dropDownStatusSelect = (valueStatus) => {
        this.setState({
            dropDownStatusValue: valueStatus.value,
            dropDownStatusState: false,
            dropDownStatusFlag: false
        });
    }

    dropDownCountryClick = () => {
        this.setState({
            dropDownCountryState: !this.state.dropDownCountryState
        });
    }

    dropDownCountrySelect = (valueCountry) => {
        this.setState({
            dropDownCountryValue: valueCountry.value,
            dropDownCountryState: false,
            dropDownCountryFlag: false
        });
    }

    componentDidMount() {
        if (this.props && this.props.initialstate && this.props.initialstate.firstName) {
            this.setState({
                profileName: this.props.initialstate.firstName
            });
        }

        if (this.props && this.props.profileState && this.props.profileState.profileVcmID) {
            this.setState({
                profileVcm: this.props.profileState.profileVcmID
            });
        }

        if (this.props && this.props.profileState && this.props.profileState.profileSsnNumber) {
            this.setState({
                profileSsn: this.props.profileState.profileSsnNumber
            });
        }

        if (this.props && this.props.profileState && this.props.profileState.profileDob) {
            this.setState({
                profileDob: this.props.profileState.profileDob
            });
        }

        if (this.props && this.props.profileState && this.props.profileState.profilePrefix) {
            this.setState({
                profilePrefix: this.props.profileState.profilePrefix
            });
        }

        if (this.props && this.props.profileState && this.props.profileState.profileSuffix) {
            this.setState({
                profileSuffix: this.props.profileState.profileSuffix
            });
        }

        if (this.props && this.props.profileState && this.props.profileState.profileGender) {
            this.setState({
                profileGender: this.props.profileState.profileGender
            });
        }

        if (this.props && this.props.profileState && this.props.profileState.profileMaritalStatus) {
            this.setState({
                profileMaritalStatus: this.props.profileState.profileMaritalStatus
            });
        }

        let payload = [];

        const compositePayloadData = [
            "prefix",
            "suffix",
            "gender",
            "marital_status"
        ];

        for (let i = 0; i < compositePayloadData.length; i++) {
            let tempkey = compositePayloadData[i];
            if (this.props && this.props.profileSettingsLookup && !this.props.profileSettingsLookup[tempkey]) {
                payload.push(tempkey);
            }
        }

        this.props.getProfileCompositeData(payload);
    }

    manageProfileInformations = () => {
        const payloadData = this.getProfilePayloadData();
        this.props.saveProfileData("editProfileManage", payloadData);
        this.props.navigation.goBack();
    }

    getProfilePayloadData = () => {
        let profilePayload = {};
        if (this.props && this.props.profileState) {
            profilePayload = {
                ...this.props.profileState,
                "profilePrefix": this.state.dropDownValue,
                "profileSuffix": this.state.dropDownSuffixValue,
                "profileGender": this.state.dropDownGenderValue,
                "profileMaritalStatus": this.state.dropDownStatusValue
            };
        }
        return profilePayload;
    }

    editProfileBack = () => { this.props.navigation.navigate('profileSettings'); };

    editProfileOnCancel = () => { this.props.navigation.navigate('profileSettings'); }

    render() {

        let profilePrefixData = profileSettingsTempData;
        let profileSuffixData = profileSettingsTempData;
        let profileGenderData = profileSettingsTempData;
        let profileStatusData = profileSettingsTempData;

        if (this.props && this.props.profileSettingsLookup &&
            this.props.profileSettingsLookup.prefix &&
            this.props.profileSettingsLookup.prefix.value) {
            profilePrefixData = this.props.profileSettingsLookup.prefix.value;
        }

        if (this.props && this.props.profileSettingsLookup &&
            this.props.profileSettingsLookup.suffix &&
            this.props.profileSettingsLookup.suffix.value) {
            profileSuffixData = this.props.profileSettingsLookup.suffix.value;
        }

        if (this.props && this.props.profileSettingsLookup &&
            this.props.profileSettingsLookup.gender &&
            this.props.profileSettingsLookup.gender.value) {
            profileGenderData = this.props.profileSettingsLookup.gender.value;
        }

        if (this.props && this.props.profileSettingsLookup &&
            this.props.profileSettingsLookup.marital_status &&
            this.props.profileSettingsLookup.marital_status.value) {
            profileStatusData = this.props.profileSettingsLookup.marital_status.value;
        }

        return (
            <View style={styles.container}>
                <GHeaderComponent
                    navigation={this.props.navigation}
                />

                <ScrollView style={{ flex: 0.85 }}>

                    {/* Header Section - Tree Structure */}

                    <View style={styles.settingsView}>
                        <Text style={styles.editProfileHeadOne}>
                            {"Pro.."}
                        </Text>

                        <Text style={styles.editProfileHeadTwo}>
                            {"  >  "}
                        </Text>

                        <Text style={styles.editProfileHeadOne}
                            onPress={this.editProfileBack}
                        >
                            {"Bas.."}
                        </Text>

                        <Text style={styles.editProfileHeadTwo}>
                            {"  >  "}
                        </Text>

                        <Text style={{ color: '#56565A', fontSize: scaledHeight(14), fontWeight: 'bold' }}>
                            {"Manage Personal Information"}
                        </Text>
                    </View>

                    {/* Manage Personal Informations */}

                    <View>
                        <View style={styles.settingsView}>
                            <Text style={styles.editProfileManage}>
                                {globalString.editProfilePageValue.editProfileManage}
                            </Text>
                        </View>

                        <View style={styles.settingsBorder} />

                        <View style={styles.settingsView}>
                            <Text style={styles.editProfileChosen}>
                                {globalString.editProfilePageValue.editProfileChosenLabel}
                            </Text>
                        </View>

                        <View style={styles.editFlexDirectionColumn}>
                            <Text style={styles.editProfileLabel}>
                                {globalString.profileSettingsPage.profileNameLabel}
                            </Text>

                            <Text style={styles.editProfileNameLabel}>
                                {this.state.profileName}
                            </Text>
                        </View>

                        <View style={styles.editFlexDirectionColumn}>
                            <Text style={styles.editProfileLabel}>
                                {globalString.profileSettingsPage.profileVcmLabel}
                            </Text>

                            <Text style={styles.editProfileValueView}>
                                {this.state.profileVcm}
                            </Text>
                        </View>

                        <View style={styles.editFlexDirectionColumn}>
                            <Text style={styles.editProfileLabel}>
                                {globalString.profileSettingsPage.profileSsnLabel}
                            </Text>

                            <Text style={styles.editProfileValueView}>
                                {this.state.profileSsn}
                            </Text>
                        </View>

                        <View style={styles.editFlexDirectionColumn}>
                            <Text style={styles.editProfileLabel}>
                                {globalString.profileSettingsPage.profileDobLabel}
                            </Text>

                            <Text style={styles.editProfileValueView}>
                                {this.state.profileDob}
                            </Text>
                        </View>

                        {/* Prefix Data */}

                        <GDropDownComponent
                            placeholder={this.state.profilePrefix}
                            dropDownTextName={styles.editProfileLabel}
                            dropDownName={globalString.profileSettingsPage.profilePrefixLabel}
                            data={profilePrefixData}
                            changeState={this.dropDownOnClick}
                            showDropDown={this.state.dropDownState}
                            dropDownValue={this.state.dropDownValue}
                            selectedDropDownValue={this.dropDownOnSelect}
                            itemToDisplay={"value"}
                            errorFlag={this.state.dropDownPrefixFlag}
                            errorText={this.dropDownPrefixMsg}
                            dropDownPostition={{ position: 'absolute', right: 0, top: scaledHeight(492) }}
                        />

                        {/* Suffix Data */}

                        <GDropDownComponent
                            placeholder={this.state.profileSuffix}
                            dropDownTextName={styles.editProfileLabel}
                            dropDownName={globalString.profileSettingsPage.profileSuffixLabel}
                            data={profileSuffixData}
                            changeState={this.dropDownSuffixClick}
                            showDropDown={this.state.dropDownSuffixState}
                            dropDownValue={this.state.dropDownSuffixValue}
                            selectedDropDownValue={this.dropDownSuffixSelect}
                            itemToDisplay={"value"}
                            errorFlag={this.state.dropDownSuffixFlag}
                            errorText={this.dropDownSuffixMsg}
                            dropDownPostition={{ position: 'absolute', right: 0, top: scaledHeight(581) }} />

                        {/* Gender Data */}

                        <GDropDownComponent
                            placeholder={this.state.profileGender}
                            dropDownTextName={styles.editProfileLabel}
                            dropDownName={globalString.profileSettingsPage.profileGenderLabel}
                            data={profileGenderData}
                            changeState={this.dropDownGenderClick}
                            showDropDown={this.state.dropDownGenderState}
                            dropDownValue={this.state.dropDownGenderValue}
                            selectedDropDownValue={this.dropDownGenderSelect}
                            itemToDisplay={"value"}
                            errorFlag={this.state.dropDownGenderFlag}
                            errorText={this.dropDownGenderMsg}
                            dropDownPostition={{ position: 'absolute', right: 0, top: scaledHeight(670) }}
                        />

                        {/* Marital Status Data */}

                        <GDropDownComponent
                            placeholder={this.state.profileMaritalStatus}
                            dropDownTextName={styles.editProfileLabel}
                            dropDownName={globalString.profileSettingsPage.profileStatusLabel}
                            data={profileStatusData}
                            changeState={this.dropDownStatusClick}
                            showDropDown={this.state.dropDownStatusState}
                            dropDownValue={this.state.dropDownStatusValue}
                            selectedDropDownValue={this.dropDownStatusSelect}
                            itemToDisplay={"value"}
                            errorFlag={this.state.dropDownStatusFlag}
                            errorText={this.dropDownStatusMsg}
                            dropDownPostition={{ position: 'absolute', right: 0, top: scaledHeight(760) }}
                        />

                        {/* Citizenship */}

                        <View style={styles.editFlexDirectionColumn}>
                            <Text style={styles.editProfileLabel}>
                                {globalString.profileSettingsPage.profileCitizenLabel}
                            </Text>

                            <View style={styles.editRadioView}>
                                {profileSettingsCitizenship.map((item, index) =>
                                    index == this.state.radioButtonIndex ?
                                        <GRadioButtonComponent
                                            onPress={() => this.radioButtonClicked(index)}
                                            selected
                                            questions={item.question}
                                        />
                                        :
                                        <GRadioButtonComponent
                                            onPress={() => this.radioButtonClicked(index)}
                                            selected={false}
                                            questions={item.question}
                                        />
                                )}
                            </View>
                        </View>

                        {this.state.countryNonUS ? (
                            <GDropDownComponent
                                placeholder={this.state.profileCountryValue}
                                dropDownTextName={styles.editProfileLabel}
                                dropDownName={globalString.profileSettingsPage.profileCountryLabel}
                                data={profileSettingsTempData}
                                changeState={this.dropDownCountryClick}
                                showDropDown={this.state.dropDownCountryState}
                                dropDownValue={this.state.dropDownCountryValue}
                                selectedDropDownValue={this.dropDownCountrySelect}
                                itemToDisplay={"value"}
                                errorFlag={this.state.dropDownCountryFlag}
                                errorText={this.dropDownCountryMsg}
                                dropDownPostition={{ position: 'absolute', right: 0, top: scaledHeight(950) }}
                            />) : null}

                        <View style={styles.editFlexDirectionColumn}>
                            <GButtonComponent
                                buttonStyle={styles.cancelButtonStyle}
                                buttonText={globalString.common.cancel}
                                textStyle={styles.cancelButtonText}
                                onPress={this.editProfileOnCancel}
                            />
                        </View>

                        <View style={styles.editFlexDirectionColumn}>
                            <GButtonComponent
                                buttonStyle={styles.saveButtonStyle}
                                buttonText={globalString.common.save}
                                onPress={this.navigationSuccess}
                                textStyle={styles.saveButtonText}
                            />
                        </View>

                    </View>

                    {/* Footer Section - User and Agreements */}

                    <View>
                        <View style={styles.editFlexDirectionColumn}>
                            <Text style={styles.editSecurityView}>
                                {globalString.profileSettingsPage.profileSecurity}
                            </Text>
                        </View>

                        <View style={styles.newVictorySection}>
                            <Text style={styles.openInvestment}>
                                {globalString.profileSettingsPage.profileInvest}
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
                    </View>

                </ScrollView>

            </View>
        );
    }
}

export default editProfileSettingsComponent;
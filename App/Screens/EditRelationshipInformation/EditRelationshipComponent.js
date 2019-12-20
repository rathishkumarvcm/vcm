import React, { Component } from 'react';
import { Text, View, Image, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import { styles } from './styles';
import { GButtonComponent, GHeaderComponent, GIcon, GInputComponent, GRadioButtonComponent, GDropDownComponent, GDateComponent } from '../../CommonComponents';
import { scaledHeight } from '../../Utils/Resolution';
import globalString from '../../Constants/GlobalStrings';

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

class editRelationshipComponent extends Component {
    constructor(props) {
        super(props);
        //set true to isLoading if data for this screen yet to be received and wanted to show loader.
        this.state = {
            isLoading: false,
            enableBiometric: false,
            faceIdEnrolled: false,
            touchIdEnrolled: false,

            dateOfBirthValue: '',
            isValidDateOfBirth: false,
            dateOfBirthFlag: false,
            dateOfBirthMsg: '',

            relationFirstNameValue: '',
            isValidRelationFirstName: false,
            relationFirstNameFlag: false,
            relationFirstNameMsg: '',

            relationSecurityValue: '',
            isValidRelationSecurity: false,
            relationSecurityFlag: false,
            relationSecurityMsg: '',

            dropDownRelationState: false,
            dropDownRelationValue: '',
            dropDownRelationFlag: false,
            dropDownRelationMsg: '',

            dropDownState: false,
            dropDownValue: '',
            dropDownFlag: false,
            dropDownMsg: '',

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
        };
    }

    componentDidMount() {
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

    dropDownRelationOnClick = () => {
        this.setState({
            dropDownRelationState: !this.state.dropDownRelationState
        });
    }

    dropDownRelationOnSelect = (valueRelation) => {
        this.setState({
            dropDownRelationValue: valueRelation.value,
            dropDownRelationState: false,
            dropDownRelationFlag: false
        });
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
            dropDownFlag: false
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

    onChangeDateValue = (date) => {
        this.setState({
            dateOfBirthValue: date,
            isValidDateOfBirth: false,
            dateOfBirthFlag: false
        });
    }

    setRelationshipFirstName = (text) => {
        this.setState({
            relationFirstNameValue: text,
            isValidRelationFirstName: false,
            relationFirstNameFlag: false
        });
    }

    setRelationSecurity = (text) => {
        this.setState({
            relationSecurityValue: text,
            isValidRelationSecurity: false,
            relationSecurityFlag: false
        })
    }

    relationCancelOnClick = () => this.props.navigation.navigate('profileSettings');

    relationShipOnSave = () => {
        if (this.state.dropDownRelationValue === '') {
            this.setState({
                dropDownRelationFlag: !this.state.dropDownRelationFlag,
                dropDownRelationMsg: globalString.editRelationShipInformation.validRelationType
            });
        }

        if (this.state.relationFirstNameValue === '') {
            this.setState({
                relationFirstNameFlag: !this.state.relationFirstNameFlag,
                relationFirstNameMsg: globalString.editRelationShipInformation.validRelationFirstName
            })
        }

        if (this.state.dropDownValue === '') {
            this.setState({
                dropDownFlag: !this.state.dropDownFlag,
                dropDownMsg: globalString.editRelationShipInformation.validRelationPrefix
            })
        }

        if (this.state.dropDownSuffixValue === '') {
            this.setState({
                dropDownSuffixFlag: !this.state.dropDownSuffixFlag,
                dropDownSuffixMsg: globalString.editRelationShipInformation.validRelationSuffix
            })
        }

        if (this.state.dropDownGenderValue === '') {
            this.setState({
                dropDownGenderFlag: !this.state.dropDownGenderFlag,
                dropDownGenderMsg: globalString.editRelationShipInformation.validRelationGender
            })
        }

        if (this.state.dropDownStatusValue === '') {
            this.setState({
                dropDownStatusFlag: !this.state.dropDownStatusFlag,
                dropDownStatusMsg: globalString.editRelationShipInformation.validRelationMarital
            })
        }

        if (this.state.dateOfBirthValue === '') {
            this.setState({
                dateOfBirthFlag: !this.state.dateOfBirthFlag,
                dateOfBirthMsg: globalString.editRelationShipInformation.validRelationDOB
            })
        }

        if (this.state.relationSecurityValue === '') {
            this.setState({
                relationSecurityFlag: !this.state.relationSecurityFlag,
                relationSecurityMsg: globalString.editRelationShipInformation.validRelationSecurity
            })
        }

        if (this.state.dropDownRelationValue != '' &&
            this.state.relationFirstNameValue != '' &&
            this.state.dropDownValue != '' &&
            this.state.dropDownSuffixValue != '' &&
            this.state.dropDownGenderValue != '' &&
            this.state.dropDownStatusValue != '' &&
            this.state.dateOfBirthValue != '' &&
            this.state.relationSecurityValue != '') {
            this.addNewRelationShipDetails();
        }
    }

    addNewRelationShipDetails = () => {
        const payloadData = this.getRelationShipPayload();
        this.props.saveProfileData("addRelationShipInformation", payloadData);
        this.props.navigation.navigate('profileSettings');
    }

    getRelationShipPayload = () => {
        let relationShipPayload = {};
        let relationShipDetails = [];
        if (this.props && this.props.profileState) {
            const addRelationShipDetails = {
                "relationShipName": this.state.relationFirstNameValue,
                "relationShipType": this.state.dropDownRelationValue,
                "relationShipGender": this.state.dropDownGenderValue,
                "relationShipEmail": '',
                "relationShipStatus": this.state.dropDownStatusValue,
                "relationSecurityNumber": this.state.relationSecurityValue,
                "relationPrefix": this.state.dropDownValue,
                "relationSuffix": this.state.dropDownSuffixValue,
                "relationDob": this.state.dateOfBirthValue,
                "relationCitizenship": '',
                "relationAddress": [],
                "relationPhoneNumber": [],
                "relationEmailId": []
            };
            relationShipDetails = this.props.profileState.profileRelationShipDetails;
            relationShipDetails.push(addRelationShipDetails);
            relationShipPayload = {
                ...this.props.profileState,
                profileRelationShipDetails: relationShipDetails,
            };
        }
        return relationShipPayload;
    }

    render() {

        const date = new Date().getDate(); //Current Date
        const month = new Date().getMonth() + 1; //Current Month
        const year = new Date().getFullYear(); //Current Year
        const currentdate = month + "-" + date + "-" + year;

        let profileRelationData = profileSettingsTempData;
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
                    navigation={this.props.navigation} />

                <ScrollView style={{ flex: 0.85 }}>

                    {/* Header Section - Tree Structure */}

                    <View style={styles.settingsView}>
                        <Text style={styles.relationHeadView}>
                            {"Pro.."}
                        </Text>

                        <Text style={styles.relationHeadOne}>
                            {"  >  "}
                        </Text>

                        <Text style={styles.relationHeadView}>
                            {"Bas.."}
                        </Text>

                        <Text style={styles.relationHeadOne}>
                            {"  >  "}
                        </Text>

                        <Text style={styles.relationHeadView}>
                            {"Man.."}
                        </Text>

                        <Text style={styles.relationHeadOne}>
                            {"  >  "}
                        </Text>

                        <Text style={styles.relationHeadTwo}>
                            {"Manage Relationship In.."}
                        </Text>
                    </View>

                    {/* Manage Relationship Section */}

                    <View>

                        <View style={styles.settingsView}>
                            <Text style={styles.relationHeadLabel}>
                                {globalString.editRelationShipInformation.relationShipHeadLabel}
                            </Text>
                        </View>

                        <View style={styles.settingsBorder} />

                        <View>
                            <GDropDownComponent
                                dropDownTextName={styles.occupationEmploymentLabel}
                                dropDownName={globalString.editRelationShipInformation.relationShipFamilyLabel}
                                data={profileRelationData}
                                changeState={this.dropDownRelationOnClick}
                                showDropDown={this.state.dropDownRelationState}
                                dropDownValue={this.state.dropDownRelationValue}
                                selectedDropDownValue={this.dropDownRelationOnSelect}
                                itemToDisplay={"value"}
                                errorFlag={this.state.dropDownRelationFlag}
                                errorText={this.state.dropDownRelationMsg}
                                dropDownPostition={{ position: 'absolute', right: 0, top: scaledHeight(90) }} />

                            {/* First Name */}

                            <View style={styles.editFlexDirectionColumn}>
                                <Text style={styles.relationLabels}>
                                    {globalString.editRelationShipInformation.relationFirstName}
                                </Text>

                                <GInputComponent
                                    propInputStyle={styles.editAddressInput}
                                    placeholder=""
                                    onChangeText={this.setRelationshipFirstName}
                                    maxLength={50}
                                    value={this.state.relationFirstNameValue}
                                    errorFlag={this.state.relationFirstNameFlag}
                                    errorText={this.state.relationFirstNameMsg} />
                            </View>

                            {/* Prefix */}

                            <GDropDownComponent
                                dropDownTextName={styles.occupationEmploymentLabel}
                                dropDownName={globalString.editRelationShipInformation.relationPrefix}
                                data={profilePrefixData}
                                changeState={this.dropDownOnClick}
                                showDropDown={this.state.dropDownState}
                                dropDownValue={this.state.dropDownValue}
                                selectedDropDownValue={this.dropDownOnSelect}
                                itemToDisplay={"value"}
                                errorFlag={this.state.dropDownFlag}
                                errorText={this.state.dropDownMsg}
                                dropDownPostition={{ position: 'absolute', right: 0, top: scaledHeight(310) }} />

                            {/* Suffix */}

                            <GDropDownComponent
                                dropDownTextName={styles.occupationEmploymentLabel}
                                dropDownName={globalString.editRelationShipInformation.relationSuffix}
                                data={profileSuffixData}
                                changeState={this.dropDownSuffixClick}
                                showDropDown={this.state.dropDownSuffixState}
                                dropDownValue={this.state.dropDownSuffixValue}
                                selectedDropDownValue={this.dropDownSuffixSelect}
                                itemToDisplay={"value"}
                                errorFlag={this.state.dropDownSuffixFlag}
                                errorText={this.state.dropDownSuffixMsg}
                                dropDownPostition={{ position: 'absolute', right: 0, top: scaledHeight(400) }} />

                            {/* Date of Birth */}

                            <View style={styles.editFlexDirectionColumn}>
                                <Text style={styles.relationLabels}>
                                    {globalString.editRelationShipInformation.relationDob}
                                </Text>

                                <GDateComponent
                                    minDate={currentdate}
                                    placeholder="MM/DD/YYYY"
                                    date={this.state.dateOfBirthValue}
                                    onDateChange={this.onChangeDateValue}
                                    errorFlag={this.state.dateOfBirthFlag}
                                    errorMsg={this.state.dateOfBirthMsg} />
                            </View>

                            {/* Gender */}

                            <GDropDownComponent
                                dropDownTextName={styles.occupationEmploymentLabel}
                                dropDownName={globalString.editRelationShipInformation.relationGender}
                                data={profileGenderData}
                                changeState={this.dropDownGenderClick}
                                showDropDown={this.state.dropDownGenderState}
                                dropDownValue={this.state.dropDownGenderValue}
                                selectedDropDownValue={this.dropDownGenderSelect}
                                itemToDisplay={"value"}
                                errorFlag={this.state.dropDownGenderFlag}
                                errorText={this.state.dropDownGenderMsg}
                                dropDownPostition={{ position: 'absolute', right: 0, top: scaledHeight(620) }} />

                            {/* Marital Status */}

                            <GDropDownComponent
                                dropDownTextName={styles.occupationEmploymentLabel}
                                dropDownName={globalString.editRelationShipInformation.relationStatus}
                                data={profileStatusData}
                                changeState={this.dropDownStatusClick}
                                showDropDown={this.state.dropDownStatusState}
                                dropDownValue={this.state.dropDownStatusValue}
                                selectedDropDownValue={this.dropDownStatusSelect}
                                itemToDisplay={"value"}
                                errorFlag={this.state.dropDownStatusFlag}
                                errorText={this.state.dropDownStatusMsg}
                                dropDownPostition={{ position: 'absolute', right: 0, top: scaledHeight(710) }} />

                            {/* Social Security Number */}

                            <View style={styles.editFlexDirectionColumn}>
                                <Text style={styles.relationLabels}>
                                    {globalString.editRelationShipInformation.relationSocialSecurity}
                                </Text>

                                <GInputComponent
                                    propInputStyle={styles.editAddressInput}
                                    placeholder=""
                                    onChangeText={this.setRelationSecurity}
                                    value={this.state.relationSecurityValue}
                                    maxLength={10}
                                    errorFlag={this.state.relationSecurityFlag}
                                    errorText={this.state.relationSecurityMsg} />
                            </View>

                            <View style={styles.editFlexDirectionColumn}>
                                <GButtonComponent
                                    buttonStyle={styles.cancelButtonStyle}
                                    buttonText={globalString.common.cancel}
                                    textStyle={styles.cancelButtonText}
                                    onPress={this.relationCancelOnClick} />
                            </View>

                            <View style={styles.editFlexDirectionColumn}>
                                <GButtonComponent
                                    buttonStyle={styles.saveButtonStyle}
                                    buttonText={globalString.common.save}
                                    textStyle={styles.saveButtonText}
                                    onPress={this.relationShipOnSave} />
                            </View>
                        </View>
                    </View>

                    {/* Footer Section - Security and Privacy Policy */}

                    <View>
                        <View style={styles.editFlexDirectionColumn}>
                            <Text style={styles.editAddressSecurity}>
                                {globalString.editAddressInfo.editAddressSecurity}
                            </Text>
                        </View>

                        <View style={styles.relationInstructionView}>
                            <Text style={styles.relationInstructionLabel}>
                                {globalString.editRelationShipInformation.relationInst}
                            </Text>

                            <View style={styles.relationInstDivider} />

                            <View style={styles.column}>
                                <View style={styles.row}>
                                    <Text style={styles.bullet}>
                                        {"" + '\u2022' + ""}
                                    </Text>
                                    <Text style={styles.bulletText}>
                                        {globalString.editRelationShipInformation.relationInstOne}
                                    </Text>
                                </View>

                                <View style={styles.row}>
                                    <Text style={styles.bullet}>
                                        {"" + '\u2022' + ""}
                                    </Text>
                                    <Text style={styles.bulletText}>
                                        {globalString.editRelationShipInformation.relationInstTwo}
                                    </Text>
                                </View>

                                <View style={styles.row}>
                                    <Text style={styles.bullet}>
                                        {"" + '\u2022' + ""}
                                    </Text>
                                    <Text style={styles.bulletText}>
                                        {globalString.editRelationShipInformation.relationInstThree}
                                    </Text>
                                </View>
                            </View>

                            <Text style={styles.relationInstContent}>
                                {globalString.editRelationShipInformation.relationInstContent}
                            </Text>
                        </View>

                        <View style={styles.newVictorySection}>
                            <Text style={styles.termsofuseText1}>
                                {globalString.editAddressInfo.editAddressTerms}
                            </Text>
                            <Text style={styles.openInvestment}>
                                {globalString.editAddressInfo.editAddressInvestments}
                            </Text>
                        </View>

                        <View style={styles.connectWithUs}>
                            <Image
                                source={require("../../Images/logo.png")} />
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

export default editRelationshipComponent;
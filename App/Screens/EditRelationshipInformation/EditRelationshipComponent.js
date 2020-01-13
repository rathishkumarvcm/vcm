import React, { Component } from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import PropTypes from "prop-types";
import { GButtonComponent, GHeaderComponent, GInputComponent, GDropDownComponent, GDateComponent } from '../../CommonComponents';
import globalString from '../../Constants/GlobalStrings';
import styles from './styles';
import ImagesLoad from '../../Images/ImageIndex';

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

class EditRelationshipComponent extends Component {
    constructor(props) {
        super(props);
        // set true to isLoading if data for this screen yet to be received and wanted to show loader.
        this.state = {
            relationShipInfoData: {
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
            }
        };
    }

    componentDidMount() {
        this.relationShipInfoMount();
    }

    relationShipInfoMount = () => {
        const { getProfileCompositeData, profileSettingsLookup } = this.props;
        const payload = [];

        const compositePayloadData = [
            "prefix",
            "suffix",
            "gender",
            "marital_status"
        ];

        for (let i = 0; i < compositePayloadData.length; i += 1) {
            const tempkey = compositePayloadData[Number(i)];
            if (this.props && profileSettingsLookup && !profileSettingsLookup[tempkey]) {
                payload.push(tempkey);
            }
        }

        getProfileCompositeData(payload);
    }

    dropDownRelationOnClick = () => {
        const { relationShipInfoData } = this.state;
        this.setState({
            relationShipInfoData: {
                ...relationShipInfoData,
                dropDownRelationState: !relationShipInfoData.dropDownRelationState
            }
        });
    }

    dropDownRelationOnSelect = (value, index, data) => {
        const { relationShipInfoData } = this.state;
        this.setState({
            relationShipInfoData: {
                ...relationShipInfoData,
                dropDownRelationValue: data[index].value,
                dropDownRelationState: false,
                dropDownRelationFlag: false
            }
        });
    }

    dropDownOnClick = () => {
        const { relationShipInfoData } = this.state;
        this.setState({
            relationShipInfoData: {
                ...relationShipInfoData,
                dropDownState: !relationShipInfoData.dropDownState
            }
        });
    }

    dropDownOnSelect = (value, index, data) => {
        const { relationShipInfoData } = this.state;
        this.setState({
            relationShipInfoData: {
                ...relationShipInfoData,
                dropDownValue: data[index].value,
                dropDownState: false,
                dropDownFlag: false
            }
        });
    }

    dropDownSuffixClick = () => {
        const { relationShipInfoData } = this.state;
        this.setState({
            relationShipInfoData: {
                ...relationShipInfoData,
                dropDownSuffixState: !relationShipInfoData.dropDownSuffixState
            }
        });
    }

    dropDownSuffixSelect = (value, index, data) => {
        const { relationShipInfoData } = this.state;
        this.setState({
            relationShipInfoData: {
                ...relationShipInfoData,
                dropDownSuffixValue: data[index].value,
                dropDownSuffixState: false,
                dropDownSuffixFlag: false
            }
        });
    }

    dropDownGenderClick = () => {
        const { relationShipInfoData } = this.state;
        this.setState({
            relationShipInfoData: {
                ...relationShipInfoData,
                dropDownGenderState: !relationShipInfoData.dropDownGenderState
            }
        });
    }

    dropDownGenderSelect = (value, index, data) => {
        const { relationShipInfoData } = this.state;
        this.setState({
            relationShipInfoData: {
                ...relationShipInfoData,
                dropDownGenderValue: data[index].value,
                dropDownGenderState: false,
                dropDownGenderFlag: false
            }
        });
    }

    dropDownStatusClick = () => {
        const { relationShipInfoData } = this.state;
        this.setState({
            relationShipInfoData: {
                ...relationShipInfoData,
                dropDownStatusState: !relationShipInfoData.dropDownStatusState
            }
        });
    }

    dropDownStatusSelect = (value, index, data) => {
        const { relationShipInfoData } = this.state;
        this.setState({
            relationShipInfoData: {
                ...relationShipInfoData,
                dropDownStatusValue: data[index].value,
                dropDownStatusState: false,
                dropDownStatusFlag: false
            }
        });
    }

    onChangeDateValue = (date) => {
        const { relationShipInfoData } = this.state;
        this.setState({
            relationShipInfoData: {
                ...relationShipInfoData,
                dateOfBirthValue: date,
                isValidDateOfBirth: false,
                dateOfBirthFlag: false
            }
        });
    }

    setRelationshipFirstName = (text) => {
        const { relationShipInfoData } = this.state;
        this.setState({
            relationShipInfoData: {
                ...relationShipInfoData,
                relationFirstNameValue: text,
                isValidRelationFirstName: false,
                relationFirstNameFlag: false
            }
        });
    }

    setRelationSecurity = (text) => {
        const { relationShipInfoData } = this.state;
        this.setState({
            relationShipInfoData: {
                ...relationShipInfoData,
                relationSecurityValue: text,
                isValidRelationSecurity: false,
                relationSecurityFlag: false
            }
        });
    }

    relationCancelOnClick = () => {
        const { navigation } = this.props;
        navigation.navigate('profileSettings');
    }

    relationShipOnSave = () => {
        const { relationShipInfoData } = this.state;
        if (relationShipInfoData.dropDownRelationValue === '') {
            this.setState({
                relationShipInfoData: {
                    ...relationShipInfoData,
                    dropDownRelationFlag: !relationShipInfoData.dropDownRelationFlag,
                    dropDownRelationMsg: globalString.editRelationShipInformation.validRelationType
                }
            });
        }

        if (relationShipInfoData.relationFirstNameValue === '') {
            this.setState({
                relationShipInfoData: {
                    ...relationShipInfoData,
                    relationFirstNameFlag: !relationShipInfoData.relationFirstNameFlag,
                    relationFirstNameMsg: globalString.editRelationShipInformation.validRelationFirstName
                }
            });
        }

        if (relationShipInfoData.dropDownValue === '') {
            this.setState({
                relationShipInfoData: {
                    ...relationShipInfoData,
                    dropDownFlag: !relationShipInfoData.dropDownFlag,
                    dropDownMsg: globalString.editRelationShipInformation.validRelationPrefix
                }
            });
        }

        if (relationShipInfoData.dropDownSuffixValue === '') {
            this.setState({
                relationShipInfoData: {
                    ...relationShipInfoData,
                    dropDownSuffixFlag: !relationShipInfoData.dropDownSuffixFlag,
                    dropDownSuffixMsg: globalString.editRelationShipInformation.validRelationSuffix
                }
            });
        }

        if (relationShipInfoData.dropDownGenderValue === '') {
            this.setState({
                relationShipInfoData: {
                    ...relationShipInfoData,
                    dropDownGenderFlag: !relationShipInfoData.dropDownGenderFlag,
                    dropDownGenderMsg: globalString.editRelationShipInformation.validRelationGender
                }
            });
        }

        if (relationShipInfoData.dropDownStatusValue === '') {
            this.setState({
                relationShipInfoData: {
                    ...relationShipInfoData,
                    dropDownStatusFlag: !relationShipInfoData.dropDownStatusFlag,
                    dropDownStatusMsg: globalString.editRelationShipInformation.validRelationMarital
                }
            });
        }

        if (relationShipInfoData.dateOfBirthValue === '') {
            this.setState({
                relationShipInfoData: {
                    ...relationShipInfoData,
                    dateOfBirthFlag: !relationShipInfoData.dateOfBirthFlag,
                    dateOfBirthMsg: globalString.editRelationShipInformation.validRelationDOB
                }
            });
        }

        if (relationShipInfoData.relationSecurityValue === '') {
            this.setState({
                relationShipInfoData: {
                    ...relationShipInfoData,
                    relationSecurityFlag: !relationShipInfoData.relationSecurityFlag,
                    relationSecurityMsg: globalString.editRelationShipInformation.validRelationSecurity
                }
            });
        }

        if (relationShipInfoData.dropDownRelationValue !== '' &&
            relationShipInfoData.relationFirstNameValue !== '' &&
            relationShipInfoData.dropDownValue !== '' &&
            relationShipInfoData.dropDownSuffixValue !== '' &&
            relationShipInfoData.dropDownGenderValue !== '' &&
            relationShipInfoData.dropDownStatusValue !== '' &&
            relationShipInfoData.dateOfBirthValue !== '' &&
            relationShipInfoData.relationSecurityValue !== '') {
            this.addNewRelationShipDetails();
        }
    }

    addNewRelationShipDetails = () => {
        const { saveProfileData, navigation } = this.props;
        const payloadData = this.getRelationShipPayload();
        saveProfileData("addRelationShipInformation", payloadData);
        navigation.navigate('profileSettings');
    }

    getRelationShipPayload = () => {
        const { profileState } = this.props;
        const { relationShipInfoData } = this.state;
        let relationShipPayload = {};
        let relationShipDetails = [];
        if (this.props && profileState) {
            const addRelationShipDetails = {
                "relationShipName": relationShipInfoData.relationFirstNameValue,
                "relationShipType": relationShipInfoData.dropDownRelationValue,
                "relationShipGender": relationShipInfoData.dropDownGenderValue,
                "relationShipEmail": '',
                "relationShipStatus": relationShipInfoData.dropDownStatusValue,
                "relationSecurityNumber": relationShipInfoData.relationSecurityValue,
                "relationPrefix": relationShipInfoData.dropDownValue,
                "relationSuffix": relationShipInfoData.dropDownSuffixValue,
                "relationDob": relationShipInfoData.dateOfBirthValue,
                "relationCitizenship": '',
                "relationAddress": [],
                "relationPhoneNumber": [],
                "relationEmailId": []
            };
            relationShipDetails = profileState.profileRelationShipDetails;
            relationShipDetails.push(addRelationShipDetails);
            relationShipPayload = {
                ...profileState,
                profileRelationShipDetails: relationShipDetails,
            };
        }
        return relationShipPayload;
    }

    render() {

        const date = new Date().getDate(); // Current Date
        const month = new Date().getMonth() + 1; // Current Month
        const year = new Date().getFullYear(); // Current Year
        const currentdate = `${month }-${ date }-${ year}`;

        const { navigation, profileSettingsLookup } = this.props;
        const { relationShipInfoData } = this.state;
        const profileRelationData = profileSettingsTempData;

        let profilePrefixData = profileSettingsTempData;
        let profileSuffixData = profileSettingsTempData;
        let profileGenderData = profileSettingsTempData;
        let profileStatusData = profileSettingsTempData;

        const tempPrefixData = 'prefix';
        const tempSuffixData = 'suffix';
        const tempGenderData = 'gender';
        const tempStatusData = 'marital_status';

        if (this.props && profileSettingsLookup &&
            profileSettingsLookup[tempPrefixData] &&
            profileSettingsLookup[tempPrefixData].value) {
            profilePrefixData = profileSettingsLookup[tempPrefixData].value;
        }

        if (this.props && profileSettingsLookup &&
            profileSettingsLookup[tempSuffixData] &&
            profileSettingsLookup[tempSuffixData].value) {
            profileSuffixData = profileSettingsLookup[tempSuffixData].value;
        }

        if (this.props && profileSettingsLookup &&
            profileSettingsLookup[tempGenderData] &&
            profileSettingsLookup[tempGenderData].value) {
            profileGenderData = profileSettingsLookup[tempGenderData].value;
        }

        if (this.props && profileSettingsLookup &&
            profileSettingsLookup[tempStatusData] &&
            profileSettingsLookup[tempStatusData].value) {
            profileStatusData = profileSettingsLookup[tempStatusData].value;
        }

        return (
            <View style={styles.container}>
                <GHeaderComponent
                    navigation={navigation}
                />

                <ScrollView style={styles.relationshipInfoFlex}>

                    {/* Header Section - Tree Structure */}

                    <View style={styles.settingsView}>
                        <Text style={styles.relationHeadView}>
                            Pro..
                        </Text>

                        <Text style={styles.relationHeadOne}>
                            {"  >  "}
                        </Text>

                        <Text style={styles.relationHeadView}>
                            Bas..
                        </Text>

                        <Text style={styles.relationHeadOne}>
                            {"  >  "}
                        </Text>

                        <Text style={styles.relationHeadView}>
                            Man..
                        </Text>

                        <Text style={styles.relationHeadOne}>
                            {"  >  "}
                        </Text>

                        <Text style={styles.relationHeadTwo}>
                            Manage Relationship In..
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
                                showDropDown={relationShipInfoData.dropDownRelationState}
                                dropDownValue={relationShipInfoData.dropDownRelationValue}
                                selectedDropDownValue={this.dropDownRelationOnSelect}
                                itemToDisplay="value"
                                errorFlag={relationShipInfoData.dropDownRelationFlag}
                                errorText={relationShipInfoData.dropDownRelationMsg}
                            />

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
                                    value={relationShipInfoData.relationFirstNameValue}
                                    errorFlag={relationShipInfoData.relationFirstNameFlag}
                                    errorText={relationShipInfoData.relationFirstNameMsg}
                                />
                            </View>

                            {/* Prefix */}

                            <GDropDownComponent
                                dropDownTextName={styles.occupationEmploymentLabel}
                                dropDownName={globalString.editRelationShipInformation.relationPrefix}
                                data={profilePrefixData}
                                changeState={this.dropDownOnClick}
                                showDropDown={relationShipInfoData.dropDownState}
                                dropDownValue={relationShipInfoData.dropDownValue}
                                selectedDropDownValue={this.dropDownOnSelect}
                                itemToDisplay="value"
                                errorFlag={relationShipInfoData.dropDownFlag}
                                errorText={relationShipInfoData.dropDownMsg}
                            />

                            {/* Suffix */}

                            <GDropDownComponent
                                dropDownTextName={styles.occupationEmploymentLabel}
                                dropDownName={globalString.editRelationShipInformation.relationSuffix}
                                data={profileSuffixData}
                                changeState={this.dropDownSuffixClick}
                                showDropDown={relationShipInfoData.dropDownSuffixState}
                                dropDownValue={relationShipInfoData.dropDownSuffixValue}
                                selectedDropDownValue={this.dropDownSuffixSelect}
                                itemToDisplay="value"
                                errorFlag={relationShipInfoData.dropDownSuffixFlag}
                                errorText={relationShipInfoData.dropDownSuffixMsg}
                            />

                            {/* Date of Birth */}

                            <View style={styles.editFlexDirectionColumn}>
                                <Text style={styles.relationLabels}>
                                    {globalString.editRelationShipInformation.relationDob}
                                </Text>

                                <GDateComponent
                                    minDate={currentdate}
                                    placeholder="MM/DD/YYYY"
                                    date={relationShipInfoData.dateOfBirthValue}
                                    onDateChange={this.onChangeDateValue}
                                    errorFlag={relationShipInfoData.dateOfBirthFlag}
                                    errorMsg={relationShipInfoData.dateOfBirthMsg}
                                />
                            </View>

                            {/* Gender */}

                            <GDropDownComponent
                                dropDownTextName={styles.occupationEmploymentLabel}
                                dropDownName={globalString.editRelationShipInformation.relationGender}
                                data={profileGenderData}
                                changeState={this.dropDownGenderClick}
                                showDropDown={relationShipInfoData.dropDownGenderState}
                                dropDownValue={relationShipInfoData.dropDownGenderValue}
                                selectedDropDownValue={this.dropDownGenderSelect}
                                itemToDisplay="value"
                                errorFlag={relationShipInfoData.dropDownGenderFlag}
                                errorText={relationShipInfoData.dropDownGenderMsg}
                            />

                            {/* Marital Status */}

                            <GDropDownComponent
                                dropDownTextName={styles.occupationEmploymentLabel}
                                dropDownName={globalString.editRelationShipInformation.relationStatus}
                                data={profileStatusData}
                                changeState={this.dropDownStatusClick}
                                showDropDown={relationShipInfoData.dropDownStatusState}
                                dropDownValue={relationShipInfoData.dropDownStatusValue}
                                selectedDropDownValue={this.dropDownStatusSelect}
                                itemToDisplay="value"
                                errorFlag={relationShipInfoData.dropDownStatusFlag}
                                errorText={relationShipInfoData.dropDownStatusMsg}
                            />

                            {/* Social Security Number */}

                            <View style={styles.editFlexDirectionColumn}>
                                <Text style={styles.relationLabels}>
                                    {globalString.editRelationShipInformation.relationSocialSecurity}
                                </Text>

                                <GInputComponent
                                    propInputStyle={styles.editAddressInput}
                                    placeholder=""
                                    onChangeText={this.setRelationSecurity}
                                    value={relationShipInfoData.relationSecurityValue}
                                    maxLength={10}
                                    errorFlag={relationShipInfoData.relationSecurityFlag}
                                    errorText={relationShipInfoData.relationSecurityMsg}
                                />
                            </View>

                            <View style={styles.editFlexDirectionColumn}>
                                <GButtonComponent
                                    buttonStyle={styles.cancelButtonStyle}
                                    buttonText={globalString.common.cancel}
                                    textStyle={styles.cancelButtonText}
                                    onPress={this.relationCancelOnClick}
                                />
                            </View>

                            <View style={styles.editFlexDirectionColumn}>
                                <GButtonComponent
                                    buttonStyle={styles.saveButtonStyle}
                                    buttonText={globalString.common.save}
                                    textStyle={styles.saveButtonText}
                                    onPress={this.relationShipOnSave}
                                />
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
                                        {'\u2022'}
                                    </Text>
                                    <Text style={styles.bulletText}>
                                        {globalString.editRelationShipInformation.relationInstOne}
                                    </Text>
                                </View>

                                <View style={styles.row}>
                                    <Text style={styles.bullet}>
                                        {'\u2022'}
                                    </Text>
                                    <Text style={styles.bulletText}>
                                        {globalString.editRelationShipInformation.relationInstTwo}
                                    </Text>
                                </View>

                                <View style={styles.row}>
                                    <Text style={styles.bullet}>
                                        {'\u2022'}
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
                    </View>

                </ScrollView>
            </View>
        );
    }
}

EditRelationshipComponent.propTypes = {
    navigation: PropTypes.instanceOf(Object).isRequired,
    profileState: PropTypes.instanceOf(Object),
    profileSettingsLookup: PropTypes.instanceOf(Object),
    getProfileCompositeData: PropTypes.func,
    saveProfileData: PropTypes.func
};

EditRelationshipComponent.defaultProps = {
    profileState: {},
    profileSettingsLookup: {},
    getProfileCompositeData: null,
    saveProfileData: null
};

export default EditRelationshipComponent;
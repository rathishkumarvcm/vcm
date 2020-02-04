import React, { Component } from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import { GButtonComponent, GHeaderComponent, GRadioButtonComponent, GDropDownComponent } from '../../CommonComponents';
import globalString from '../../Constants/GlobalStrings';
import ImagesLoad from '../../Images/ImageIndex';

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

class EditProfileSettingsComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            countryNonUS: false,
            radioButtonIndex: 0,
            editProfileSettingsData: {
                profileName: '',
                profileVcm: '',
                profileSsn: '',
                profileDob: '',
                profilePrefix: '',
                profileSuffix: '',
                profileGender: '',
                profileMaritalStatus: '',

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
            }
        };
    }

    componentDidMount() {
        this.profileInformationDidMount();
    }

    profileInformationDidMount = () => {
        const payload = [];
        const { profileSettingsLookup, getProfileCompositeData, profileState } = this.props;
        const { editProfileSettingsData} = this.state;
        
        if(profileState) {
            this.setState({
                editProfileSettingsData: {
                    ...editProfileSettingsData,
                    profileName: profileState.firstName,
                    profileVcm: profileState.profileVcmID,
                    profileSsn: profileState.profileSsnNumber,
                    profileDob: profileState.profileDob,
                    profilePrefix: profileState.profilePrefix,
                    profileSuffix: profileState.profileSuffix,
                    profileGender: profileState.profileGender,
                    profileMaritalStatus: profileState.profileMaritalStatus,
                }
            });
        }

        const compositePayloadData = [
            "prefix",
            "suffix",
            "gender",
            "marital_status"
        ];

        for (let i = 0; i < compositePayloadData.length; i += 1) {
            const tempkey = compositePayloadData[parseInt(i, 10)];
            if (this.props && profileSettingsLookup && !profileSettingsLookup[`${tempkey}`]) {
                payload.push(tempkey);
            }
        }

        getProfileCompositeData(payload);
    }

    ShowHideComponent = () => {
        const { countryNonUS } = this.state;
        if (countryNonUS === true) {
            this.setState({ countryNonUS: false });
        } else {
            this.setState({ countryNonUS: true });
        }
    };

    radioButtonClicked = (index) => () => {
        const { radioButtonIndex } = this.state;
        if (index !== radioButtonIndex) {
            this.setState({
                radioButtonIndex: index
            });
        }

        if (index === 1) {
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
        const { editProfileSettingsData } = this.state;

        if (editProfileSettingsData.dropDownValue === '') {
            this.setState({
                editProfileSettingsData: {
                    ...editProfileSettingsData,
                    dropDownPrefixFlag: true,
                    dropDownPrefixMsg: globalString.profileValidationMessages.validatePrefix
                }
            });
        }

        if (editProfileSettingsData.dropDownSuffixValue === '') {
            this.setState({
                editProfileSettingsData: {
                    ...editProfileSettingsData,
                    dropDownSuffixFlag: true,
                    dropDownSuffixMsg: globalString.profileValidationMessages.validateSuffix
                }
            });
        }

        if (editProfileSettingsData.dropDownGenderValue === '') {
            this.setState({
                editProfileSettingsData: {
                    ...editProfileSettingsData,
                    dropDownGenderFlag: true,
                    dropDownGenderMsg: globalString.profileValidationMessages.validateGender
                }
            });
        }

        if (editProfileSettingsData.dropDownStatusValue === '') {
            this.setState({
                editProfileSettingsData: {
                    ...editProfileSettingsData,
                    dropDownStatusFlag: true,
                    dropDownStatusMsg: globalString.profileValidationMessages.validateStatus
                }
            });
        }

        if (editProfileSettingsData.dropDownValue !== "" &&
            editProfileSettingsData.dropDownSuffixValue !== "" &&
            editProfileSettingsData.dropDownGenderValue !== "" &&
            editProfileSettingsData.dropDownStatusValue !== "") {
            this.manageProfileInformations();
        }
    }

    dropDownOnClick = () => {
        const { editProfileSettingsData } = this.state;
        this.setState({
            editProfileSettingsData: {
                ...editProfileSettingsData,
                dropDownState: editProfileSettingsData.dropDownState
            }
        });
    }

    dropDownOnSelect = (value, index, data) => {
        const {editProfileSettingsData } = this.state;
        this.setState({
            editProfileSettingsData: {
                ...editProfileSettingsData,
                dropDownValue: data[parseInt(index, 10)].value,
                dropDownState: false,
                dropDownPrefixFlag: false
            }
        });
    }

    dropDownSuffixClick = () => {
        const { editProfileSettingsData } = this.state;
        this.setState({
            editProfileSettingsData: {
                ...editProfileSettingsData,
                dropDownSuffixState: editProfileSettingsData.dropDownSuffixState
            }
        });
    }

    dropDownSuffixSelect = (value, index, data) => {
        const {editProfileSettingsData } = this.state;
        this.setState({
            editProfileSettingsData: {
                ...editProfileSettingsData,
                dropDownSuffixValue: data[parseInt(index, 10)].value,
                dropDownSuffixState: false,
                dropDownSuffixFlag: false
            }
        });
    }

    dropDownGenderClick = () => {
        const { editProfileSettingsData } = this.state;
        this.setState({
            editProfileSettingsData: {
                ...editProfileSettingsData,
                dropDownGenderState: editProfileSettingsData.dropDownGenderState
            }
        });
    }

    dropDownGenderSelect = (value, index, data) => {
        const {editProfileSettingsData } = this.state;
        this.setState({
            editProfileSettingsData: {
                ...editProfileSettingsData,
                dropDownGenderValue: data[parseInt(index, 10)].value,
                dropDownGenderState: false,
                dropDownGenderFlag: false
            }
        });
    }

    dropDownStatusClick = () => {
        const { editProfileSettingsData } = this.state;
        this.setState({
            editProfileSettingsData: {
                ...editProfileSettingsData,
                dropDownStatusState: editProfileSettingsData.dropDownStatusState
            }
        });
    }

    dropDownStatusSelect = (value, index, data) => {
        const {editProfileSettingsData } = this.state;
        this.setState({
            editProfileSettingsData: {
                ...editProfileSettingsData,
                dropDownStatusValue: data[parseInt(index, 10)].value,
                dropDownStatusState: false,
                dropDownStatusFlag: false
            }
        });
    }

    dropDownCountryClick = () => {
        const { editProfileSettingsData } = this.state;
        this.setState({
            editProfileSettingsData: {
                ...editProfileSettingsData,
                dropDownCountryState: editProfileSettingsData.dropDownCountryState
            }
        });
    }

    dropDownCountrySelect = (value, index, data) => {
        const {editProfileSettingsData } = this.state;
        this.setState({
            editProfileSettingsData: {
                ...editProfileSettingsData,
                dropDownCountryValue: data[parseInt(index, 10)].value,
                dropDownCountryState: false,
                dropDownCountryFlag: false
            }
        });
    }

    manageProfileInformations = () => {
        const { saveProfileData, navigation } = this.props;
        const payloadData = this.getProfilePayloadData();
        saveProfileData("editProfileManage", payloadData);
        navigation.navigate('profileSettings');
    }

    getProfilePayloadData = () => {
        let profilePayload = {};
        const { profileState } = this.props;
        const { editProfileSettingsData, countryNonUS } = this.state;
        if (this.props && profileState) {
            profilePayload = {
                ...profileState,
                "profilePrefix": editProfileSettingsData.dropDownValue,
                "profileSuffix": editProfileSettingsData.dropDownSuffixValue,
                "profileGender": editProfileSettingsData.dropDownGenderValue,
                "profileMaritalStatus": editProfileSettingsData.dropDownStatusValue,
                "profileCitizenship": countryNonUS ? editProfileSettingsData.dropDownCountryValue : "United State"
            };
        }
        return profilePayload;
    }

    editProfileBack = () => {
        const { navigation } = this.props;
        navigation.navigate('profileSettings');
    };

    editProfileOnCancel = () => {
        const { navigation } = this.props;
        navigation.navigate('profileSettings');
    };

    render() {

        const { profileSettingsLookup, navigation } = this.props;
        const { editProfileSettingsData, radioButtonIndex, countryNonUS } = this.state;

        const tempPrefixData = 'prefix';
        const tempSuffixData = 'suffix';
        const tempGenderData = 'gender';
        const tempStatusData = 'marital_status';

        let profilePrefixData = profileSettingsTempData;
        let profileSuffixData = profileSettingsTempData;
        let profileGenderData = profileSettingsTempData;
        let profileStatusData = profileSettingsTempData;

        if (this.props && profileSettingsLookup &&
            profileSettingsLookup[`${tempPrefixData}`] &&
            profileSettingsLookup[`${tempPrefixData}`].value) {
            profilePrefixData = profileSettingsLookup[`${tempPrefixData}`].value;
        }

        if (this.props && profileSettingsLookup &&
            profileSettingsLookup[`${tempSuffixData}`] &&
            profileSettingsLookup[`${tempSuffixData}`].value) {
            profileSuffixData = profileSettingsLookup[`${tempSuffixData}`].value;
        }

        if (this.props && profileSettingsLookup &&
            profileSettingsLookup[`${tempGenderData}`] &&
            profileSettingsLookup[`${tempGenderData}`].value) {
            profileGenderData = profileSettingsLookup[`${tempGenderData}`].value;
        }

        if (this.props && profileSettingsLookup &&
            profileSettingsLookup[`${tempStatusData}`] &&
            profileSettingsLookup[`${tempStatusData}`].value) {
            profileStatusData = profileSettingsLookup[`${tempStatusData}`].value;
        }

        return (
            <View style={styles.container}>
                <GHeaderComponent
                    navigation={navigation}
                />

                <ScrollView style={styles.editProfileFlex}>

                    {/* Header Section - Tree Structure */}

                    <View style={styles.settingsView}>
                        <Text style={styles.editProfileHeadOne}>
                            Pro..
                        </Text>

                        <Text style={styles.editProfileHeadTwo}>
                            {"  >  "}
                        </Text>

                        <Text style={styles.editProfileHeadOne}
                            onPress={this.editProfileBack}
                        >
                            Bas..
                        </Text>

                        <Text style={styles.editProfileHeadTwo}>
                            {"  >  "}
                        </Text>

                        <Text style={styles.editProfileManageLabel}>
                            Manage Personal Information
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
                                {editProfileSettingsData.profileName}
                            </Text>
                        </View>

                        <View style={styles.editFlexDirectionColumn}>
                            <Text style={styles.editProfileLabel}>
                                {globalString.profileSettingsPage.profileVcmLabel}
                            </Text>

                            <Text style={styles.editProfileValueView}>
                                {editProfileSettingsData.profileVcm}
                            </Text>
                        </View>

                        <View style={styles.editFlexDirectionColumn}>
                            <Text style={styles.editProfileLabel}>
                                {globalString.profileSettingsPage.profileSsnLabel}
                            </Text>

                            <Text style={styles.editProfileValueView}>
                                {editProfileSettingsData.profileSsn}
                            </Text>
                        </View>

                        <View style={styles.editFlexDirectionColumn}>
                            <Text style={styles.editProfileLabel}>
                                {globalString.profileSettingsPage.profileDobLabel}
                            </Text>

                            <Text style={styles.editProfileValueView}>
                                {editProfileSettingsData.profileDob}
                            </Text>
                        </View>

                        {/* Prefix Data */}

                        <GDropDownComponent
                            placeholder={editProfileSettingsData.profilePrefix}
                            dropDownTextName={styles.editProfileLabel}
                            dropDownName={globalString.profileSettingsPage.profilePrefixLabel}
                            data={profilePrefixData}
                            changeState={this.dropDownOnClick}
                            showDropDown={editProfileSettingsData.dropDownState}
                            dropDownValue={editProfileSettingsData.dropDownValue}
                            selectedDropDownValue={this.dropDownOnSelect}
                            itemToDisplay="value"
                            errorFlag={editProfileSettingsData.dropDownPrefixFlag}
                            errorText={editProfileSettingsData.dropDownPrefixMsg}
                        //  dropDownPostition={{ position: 'absolute', right: 0, top: scaledHeight(492) }}
                        />

                        {/* Suffix Data */}

                        <GDropDownComponent
                            placeholder={editProfileSettingsData.profileSuffix}
                            dropDownTextName={styles.editProfileLabel}
                            dropDownName={globalString.profileSettingsPage.profileSuffixLabel}
                            data={profileSuffixData}
                            changeState={this.dropDownSuffixClick}
                            showDropDown={editProfileSettingsData.dropDownSuffixState}
                            dropDownValue={editProfileSettingsData.dropDownSuffixValue}
                            selectedDropDownValue={this.dropDownSuffixSelect}
                            itemToDisplay="value"
                            errorFlag={editProfileSettingsData.dropDownSuffixFlag}
                            errorText={editProfileSettingsData.dropDownSuffixMsg}
                        //  dropDownPostition={{ position: 'absolute', right: 0, top: scaledHeight(581) }}
                        />

                        {/* Gender Data */}

                        <GDropDownComponent
                            placeholder={editProfileSettingsData.profileGender}
                            dropDownTextName={styles.editProfileLabel}
                            dropDownName={globalString.profileSettingsPage.profileGenderLabel}
                            data={profileGenderData}
                            changeState={this.dropDownGenderClick}
                            showDropDown={editProfileSettingsData.dropDownGenderState}
                            dropDownValue={editProfileSettingsData.dropDownGenderValue}
                            selectedDropDownValue={this.dropDownGenderSelect}
                            itemToDisplay="value"
                            errorFlag={editProfileSettingsData.dropDownGenderFlag}
                            errorText={editProfileSettingsData.dropDownGenderMsg}
                        //  dropDownPostition={{ position: 'absolute', right: 0, top: scaledHeight(670) }}
                        />

                        {/* Marital Status Data */}

                        <GDropDownComponent
                            placeholder={editProfileSettingsData.profileMaritalStatus}
                            dropDownTextName={styles.editProfileLabel}
                            dropDownName={globalString.profileSettingsPage.profileStatusLabel}
                            data={profileStatusData}
                            changeState={this.dropDownStatusClick}
                            showDropDown={editProfileSettingsData.dropDownStatusState}
                            dropDownValue={editProfileSettingsData.dropDownStatusValue}
                            selectedDropDownValue={this.dropDownStatusSelect}
                            itemToDisplay="value"
                            errorFlag={editProfileSettingsData.dropDownStatusFlag}
                            errorText={editProfileSettingsData.dropDownStatusMsg}
                        //  dropDownPostition={{ position: 'absolute', right: 0, top: scaledHeight(760) }}
                        />

                        {/* Citizenship */}

                        <View style={styles.editFlexDirectionColumn}>
                            <Text style={styles.editProfileLabel}>
                                {globalString.profileSettingsPage.profileCitizenLabel}
                            </Text>

                            <View style={styles.editRadioView}>
                                {profileSettingsCitizenship.map((item, index) =>
                                    index === radioButtonIndex ? (
                                        <GRadioButtonComponent
                                            onPress={this.radioButtonClicked(index)}
                                            selected
                                            questions={item.question}
                                        />
                                    ) : (
                                            <GRadioButtonComponent
                                                onPress={this.radioButtonClicked(index)}
                                                selected={false}
                                                questions={item.question}
                                            />
                                        )
                                )}
                            </View>
                        </View>

                        {countryNonUS ? (
                            <GDropDownComponent
                                dropDownTextName={styles.editProfileLabel}
                                dropDownName={globalString.profileSettingsPage.profileCountryLabel}
                                data={profileSettingsTempData}
                                changeState={this.dropDownCountryClick}
                                showDropDown={editProfileSettingsData.dropDownCountryState}
                                dropDownValue={editProfileSettingsData.dropDownCountryValue}
                                selectedDropDownValue={this.dropDownCountrySelect}
                                itemToDisplay="value"
                                errorFlag={editProfileSettingsData.dropDownCountryFlag}
                                errorText={editProfileSettingsData.dropDownCountryMsg}
                            //  dropDownPostition={{ position: 'absolute', right: 0, top: scaledHeight(950) }}
                            />
                        ) : null}

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
                                source={ImagesLoad.applicationLogo}
                            />
                        </View>

                        <View style={styles.whiteBackground}>
                            <Text style={styles.editLabelInputMedium}>
                                {globalString.common.connectWithUs}
                            </Text>
                        </View>

                        <View style={styles.whiteBackground}>
                            <Image style={styles.imageWidthHeight}
                                source={ImagesLoad.twitterlogo}
                            />
                            <Image style={styles.imageWidthHeight}
                                source={ImagesLoad.linkedinlogo}
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

EditProfileSettingsComponent.propTypes = {
    navigation: PropTypes.instanceOf(Object).isRequired,
    profileState: PropTypes.instanceOf(Object),
    profileSettingsLookup: PropTypes.instanceOf(Object),
    getProfileCompositeData: PropTypes.func,
    saveProfileData: PropTypes.func
};

EditProfileSettingsComponent.defaultProps = {
    profileState: {},
    profileSettingsLookup: {},
    getProfileCompositeData: null,
    saveProfileData: null
};

export default EditProfileSettingsComponent;
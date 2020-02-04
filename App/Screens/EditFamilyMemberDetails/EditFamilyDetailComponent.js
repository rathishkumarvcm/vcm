import React, { Component } from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import { GButtonComponent, GHeaderComponent, GInputComponent, GSwitchComponent, GDropDownComponent } from '../../CommonComponents';
import globalString from '../../Constants/GlobalStrings';
import ImagesLoad from '../../Images/ImageIndex';
import styles from './styles';

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

const profileCountryProofData = [
    {
        key: 'bd7acbea',
        value: 'Permanent Resident Card Passport'
    },
    {
        key: 'bd7acbeb',
        value: 'Passport'
    }
];

class EditFamilyDetailComponent extends Component {
    constructor(props) {
        super(props);
        // set true to isLoading if data for this screen yet to be received and wanted to show loader.
        this.state = {
            familyDetailData: {
                contactPosition: '',
                isRelation: '',
                relationShipDetails: {},

                profileRelationName: '',
                profileName: '',
                profileCountryUS: false,
                profileCountryNonUS: true,
                showCountryNonUs: false,
                profileSocialSecurity: true,
                profileRelationPrefix: '',
                profileRelationSuffix: '',
                profileRelationMarital: '',
                profileRelationResidency: '',

                dropDownState: false,
                dropDownValue: '',
                dropDownFlag: false,
                dropDownMsg: '',

                dropDownPrefixState: false,
                dropDownPrefixValue: '',
                dropDownPrefixFlag: false,
                dropDownPrefixMsg: '',

                dropDownSuffixState: false,
                dropDownSuffixValue: '',
                dropDownSuffixFlag: false,
                dropDownSuffixMsg: '',

                dropDownStatusState: false,
                dropDownStatusValue: '',
                dropDownStatusFlag: false,
                dropDownStatusMsg: '',

                dropDownProofState: false,
                dropDownProofValue: '',
                dropDownProofFlag: false,
                dropDownProofMsg: ''
            }
        };
    }

    componentDidMount() {
        this.familyDetailMount();
    }

    familyDetailMount = () => {
        const { familyDetailData } = this.state;
        const { profileState, profileSettingsLookup, getProfileCompositeData, navigation } = this.props;
        if (this.props) {
            this.setState({
                familyDetailData: {
                    ...familyDetailData,
                    contactPosition: navigation.getParam('contactPosition'),
                    isRelation: navigation.getParam('isRelation'),
                }
            });
        }

        if (familyDetailData.isRelation) {
            let familyMembersData = [];
            if (this.props &&
                profileState &&
                profileState.profileRelationShipDetails) {
                familyMembersData = [...profileState.profileRelationShipDetails];
                this.setState({
                    familyDetailData: {
                        ...familyDetailData,
                        relationShipDetails: familyMembersData[Number(familyDetailData.contactPosition)]
                    }
                });
            }
        }

        const payload = [];

        const compositePayloadData = [
            "prefix",
            "suffix",
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

    dropDownOnClick = () => {
        const { familyDetailData } = this.state;
        this.setState({
            familyDetailData: {
                ...familyDetailData,
                dropDownState: !familyDetailData.dropDownState
            }
        });
    }

    dropDownOnSelect = (value, index, data) => {
        const { familyDetailData } = this.state;
        this.setState({
            familyDetailData: {
                ...familyDetailData,
                dropDownValue: data[parseInt(index, 10)].value,
                dropDownState: false
            }
        });
    }

    dropDownPrefixClick = () => {
        const { familyDetailData } = this.state;
        this.setState({
            familyDetailData: {
                ...familyDetailData,
                dropDownPrefixState: !familyDetailData.dropDownPrefixState
            }
        });
    }

    dropDownPrefixSelect = (value, index, data) => {
        const { familyDetailData } = this.state;
        this.setState({
            familyDetailData: {
                ...familyDetailData,
                dropDownPrefixValue: data[parseInt(index, 10)].value,
                dropDownPrefixState: false
            }
        });
    }

    dropDownSuffixClick = () => {
        const { familyDetailData } = this.state;
        this.setState({
            familyDetailData: {
                ...familyDetailData,
                dropDownSuffixState: !familyDetailData.dropDownSuffixState
            }
        });
    }

    dropDownSuffixSelect = (value, index, data) => {
        const { familyDetailData } = this.state;
        this.setState({
            familyDetailData: {
                ...familyDetailData,
                dropDownSuffixValue: data[parseInt(index, 10)].value,
                dropDownSuffixState: false
            }
        });
    }

    dropDownStatusClick = () => {
        const { familyDetailData } = this.state;
        this.setState({
            familyDetailData: {
                ...familyDetailData,
                dropDownStatusState: !familyDetailData.dropDownStatusState
            }
        });
    }

    dropDownStatusSelect = (value, index, data) => {
        const { familyDetailData } = this.state;
        this.setState({
            familyDetailData: {
                ...familyDetailData,
                dropDownStatusValue: data[parseInt(index, 10)].value,
                dropDownStatusState: false
            }
        });
    }

    dropDownProofClick = () => {
        const { familyDetailData } = this.state;
        this.setState({
            familyDetailData: {
                ...familyDetailData,
                dropDownProofState: !familyDetailData.dropDownProofState
            }
        });
    }

    dropDownProofSelect = (value, index, data) => {
        const { familyDetailData } = this.state;
        this.setState({
            familyDetailData: {
                ...familyDetailData,
                dropDownProofValue: data[parseInt(index, 10)].value,
                dropDownProofState: false
            }
        });
    }

    switchOnOffStateUpdates = (fromView, flag) => () => {
        const { familyDetailData } = this.state;
        switch (fromView) {
            case 'profileCountry':
                if (flag) {
                    this.setState({
                        familyDetailData: {
                            ...familyDetailData,
                            profileCountryUS: true,
                            profileCountryNonUS: false
                        }
                    });
                    this.setState({
                        familyDetailData: {
                            ...familyDetailData,
                            showCountryNonUs: true,
                            profileSocialSecurity: false
                        }
                    });
                } else {
                    this.setState({
                        familyDetailData: {
                            ...familyDetailData,
                            profileCountryUS: false,
                            profileCountryNonUS: true
                        }
                    });
                    this.setState({
                        familyDetailData: {
                            ...familyDetailData,
                            showCountryNonUs: false,
                            profileSocialSecurity: true
                        }
                    });
                }
                break;

            default:
                break;
        }
    }

    editFamilyOnCancel = () => {
        const { navigation } = this.props;
        navigation.navigate('editFamilyMemberInfo');
    }

    render() {

        let profilePrefixData = profileSettingsTempData;
        let profileSuffixData = profileSettingsTempData;
        let profileStatusData = profileSettingsTempData;
        const profileProofData = profileCountryProofData;

        const tempPrefixData = 'prefix';
        const tempSuffixData = 'suffix';
        const tempStatusData = 'marital_status';

        const { profileSettingsLookup, navigation } = this.props;
        const { familyDetailData } = this.state;

        if (this.props &&
            profileSettingsLookup &&
            profileSettingsLookup[`${tempPrefixData}`] &&
            profileSettingsLookup[`${tempPrefixData}`].value) {
            profilePrefixData = profileSettingsLookup[`${tempPrefixData}`].value;
        }

        if (this.props &&
            profileSettingsLookup &&
            profileSettingsLookup[`${tempSuffixData}`] &&
            profileSettingsLookup[`${tempSuffixData}`].value) {
            profileSuffixData = profileSettingsLookup[`${tempSuffixData}`].value;
        }

        if (this.props &&
            profileSettingsLookup &&
            profileSettingsLookup[`${tempStatusData}`] &&
            profileSettingsLookup[`${tempStatusData}`].value) {
            profileStatusData = profileSettingsLookup[`${tempStatusData}`].value;
        }

        return (

            <View style={styles.container}>
                <GHeaderComponent
                    navigation={navigation}
                />

                <ScrollView style={styles.familyDetailFlex}>

                    {/* Header Section - Tree Structure */}

                    <View style={styles.settingsView}>
                        <Text style={styles.editFamilyDetailView}>
                            Pro..
                        </Text>

                        <Text style={styles.familyDetailHeader}>
                            {"  >  "}
                        </Text>

                        <Text style={styles.editFamilyDetailView}>
                            Bas..
                        </Text>

                        <Text style={styles.familyDetailHeader}>
                            {"  >  "}
                        </Text>

                        <Text style={styles.editFamilyDetailView}>
                            Man..
                        </Text>

                        <Text style={styles.familyDetailHeader}>
                            {"  >  "}
                        </Text>

                        <Text style={styles.editFamilyDetailTwo}>
                            Manage Relationship In..
                        </Text>
                    </View>

                    {/* Manage Relationship Section */}

                    <View>

                        <View style={styles.settingsView}>
                            <Text style={styles.editFamilyHeadView}>
                                {globalString.editRelationShipInformation.relationShipHeadLabel}
                            </Text>
                        </View>

                        <View style={styles.settingsBorder} />

                        {/* Family Relationship Type */}

                        <GDropDownComponent
                            placeholder={familyDetailData.profileRelationName}
                            dropDownTextName={styles.editProfileLabel}
                            dropDownName={globalString.editRelationShipInformation.relationShipFamilyLabel}
                            data={profileSettingsTempData}
                            changeState={this.dropDownOnClick}
                            showDropDown={familyDetailData.dropDownState}
                            dropDownValue={familyDetailData.dropDownValue || familyDetailData.relationShipDetails.relationShipType}
                            selectedDropDownValue={this.dropDownOnSelect}
                            itemToDisplay="value"
                            errorFlag={familyDetailData.dropDownFlag}
                            errorText={familyDetailData.dropDownMsg}
                        />

                        {/* Relationship Name */}

                        <View style={styles.editFlexDirectionColumn}>
                            <Text style={styles.editFamilyDetailValueLabel}>
                                {globalString.editRelationShipInformation.relationFirstName}
                            </Text>

                            <Text style={styles.profileSettingsNameView}>
                                {familyDetailData.relationShipDetails.relationShipName}
                            </Text>
                        </View>

                        {/* Relationship Prefix */}

                        <GDropDownComponent
                            placeholder={familyDetailData.profileRelationPrefix}
                            dropDownTextName={styles.editProfileLabel}
                            dropDownName={globalString.editRelationShipInformation.relationPrefix}
                            data={profilePrefixData}
                            changeState={this.dropDownPrefixClick}
                            showDropDown={familyDetailData.dropDownPrefixState}
                            dropDownValue={familyDetailData.dropDownPrefixValue || familyDetailData.relationShipDetails.relationPrefix}
                            selectedDropDownValue={this.dropDownPrefixSelect}
                            itemToDisplay="value"
                            errorFlag={familyDetailData.dropDownPrefixFlag}
                            errorText={familyDetailData.dropDownPrefixMsg}
                        />

                        {/* Relationship Suffix */}

                        <GDropDownComponent
                            placeholder={familyDetailData.profileRelationSuffix}
                            dropDownTextName={styles.editProfileLabel}
                            dropDownName={globalString.editRelationShipInformation.relationSuffix}
                            data={profileSuffixData}
                            changeState={this.dropDownSuffixClick}
                            showDropDown={familyDetailData.dropDownSuffixState}
                            dropDownValue={familyDetailData.dropDownSuffixValue || familyDetailData.relationShipDetails.relationSuffix}
                            selectedDropDownValue={this.dropDownSuffixSelect}
                            itemToDisplay="value"
                            errorFlag={familyDetailData.dropDownSuffixFlag}
                            errorText={familyDetailData.dropDownSuffixMsg}
                        />

                        {/* Relationship Date of Birth */}

                        <View style={styles.editFlexDirectionColumn}>
                            <Text style={styles.editFamilyDetailValueLabel}>
                                {globalString.profileSettingsPage.profileDobLabel}
                            </Text>

                            <Text style={styles.editProfileValueView}>
                                {familyDetailData.relationShipDetails.relationDob}
                            </Text>
                        </View>

                        {/* Relationship Gender */}

                        <View style={styles.editFlexDirectionColumn}>
                            <Text style={styles.editFamilyDetailValueLabel}>
                                {globalString.profileSettingsPage.profileGenderLabel}
                            </Text>

                            <Text style={styles.editProfileValueView}>
                                {familyDetailData.relationShipDetails.relationShipGender}
                            </Text>
                        </View>

                        {/* Relationship Marital Status */}

                        <GDropDownComponent
                            placeholder={familyDetailData.profileRelationMarital}
                            dropDownTextName={styles.editProfileLabel}
                            dropDownName={globalString.editRelationShipInformation.relationStatus}
                            data={profileStatusData}
                            changeState={this.dropDownStatusClick}
                            showDropDown={familyDetailData.dropDownStatusState}
                            dropDownValue={familyDetailData.dropDownStatusValue || familyDetailData.relationShipDetails.relationShipStatus}
                            selectedDropDownValue={this.dropDownStatusSelect}
                            itemToDisplay="value"
                            errorFlag={familyDetailData.dropDownStatusFlag}
                            errorText={familyDetailData.dropDownStatusMsg}
                        />

                        {/* Relationship Citizenship */}

                        <View>
                            <View style={styles.editFlexDirectionColumn}>
                                <Text style={styles.editFamilyDetailValueLabel}>
                                    {globalString.profileSettingsPage.profileUSCitizenLabel}
                                </Text>

                                <View style={styles.switchContainer}>
                                    <GSwitchComponent
                                        switchOnMethod={this.switchOnOffStateUpdates('profileCountry', false)}
                                        switchOffMethod={this.switchOnOffStateUpdates('profileCountry', true)}
                                        switchOn={familyDetailData.profileCountryNonUS}
                                        switchOff={familyDetailData.profileCountryUS}
                                        switchOnText={globalString.common.no}
                                        switchOffText={globalString.common.yes}
                                    />
                                </View>
                            </View>

                            {familyDetailData.showCountryNonUs ? (
                                <View>
                                    <View style={styles.editFlexDirectionColumn}>
                                        <Text style={styles.editFamilyDetailValueLabel}>
                                            {globalString.profileSettingsPage.profileCountryOfCitizen}
                                        </Text>

                                        <GInputComponent style={styles.editFamilyDetailDropDown} />
                                    </View>

                                    <GDropDownComponent
                                        placeholder={familyDetailData.profileRelationResidency}
                                        dropDownTextName={styles.editProfileLabel}
                                        dropDownName={globalString.profileSettingsPage.profileCitizenProof}
                                        data={profileProofData}
                                        changeState={this.dropDownProofClick}
                                        showDropDown={familyDetailData.dropDownProofState}
                                        dropDownValue={familyDetailData.dropDownProofValue || familyDetailData.relationShipDetails.relationCitizenship}
                                        selectedDropDownValue={this.dropDownProofSelect}
                                        itemToDisplay="value"
                                        errorFlag={familyDetailData.dropDownProofFlag}
                                        errorText={familyDetailData.dropDownProofMsg}
                                    />
                                </View>
                            ) : null}

                            {familyDetailData.profileSocialSecurity ? (
                                <View style={styles.editFlexDirectionColumn}>
                                    <Text style={styles.editFamilyDetailValueLabel}>
                                        {globalString.profileSettingsPage.profileSsnLabel}
                                    </Text>

                                    <GInputComponent style={styles.editFamilyDetailMargin}
                                        placeholder={familyDetailData.relationShipDetails.relationSecurityNumber}
                                        editable={false}
                                    />
                                </View>
                            ) : null}
                        </View>

                        <View style={styles.editFlexDirectionColumn}>
                            <GButtonComponent
                                buttonStyle={styles.cancelButtonStyle}
                                buttonText={globalString.common.cancel}
                                textStyle={styles.cancelButtonText}
                                onPress={this.editFamilyOnCancel}
                            />
                        </View>

                        <View style={styles.editFlexDirectionColumn}>
                            <GButtonComponent
                                buttonStyle={styles.saveButtonStyle}
                                buttonText={globalString.common.save}
                                textStyle={styles.saveButtonText}
                            />
                        </View>

                    </View>

                    {/* Footer Section - Security and Privacy Policy */}

                    <View>
                        <View style={styles.editFlexDirectionColumn}>
                            <Text style={styles.editAddressSecurity}>
                                {globalString.editAddressInfo.editAddressSecurity}
                            </Text>
                        </View>

                        <View style={styles.editFamilyInstBackground}>
                            <Text style={styles.editFamilyInstLabel}>
                                {globalString.editRelationShipInformation.relationInst}
                            </Text>

                            <View style={styles.editFamilyInstDivider} />

                            <Text style={styles.editFamilyInstContent}>
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

EditFamilyDetailComponent.propTypes = {
    navigation: PropTypes.instanceOf(Object).isRequired,
    profileState: PropTypes.instanceOf(Object),
    profileSettingsLookup: PropTypes.instanceOf(Object),
    getProfileCompositeData: PropTypes.func
};

EditFamilyDetailComponent.defaultProps = {
    profileState: {},
    profileSettingsLookup: {},
    getProfileCompositeData: null
};

export default EditFamilyDetailComponent;
import React, { Component } from 'react';
import { Text, View, Image, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import { styles } from './styles';
import { GButtonComponent, GHeaderComponent, GIcon, GInputComponent, GRadioButtonComponent, GSwitchComponent, GDropDownComponent } from '../../CommonComponents';
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

class editFamilyDetailComponent extends Component {
    constructor(props) {
        super(props);
        //set true to isLoading if data for this screen yet to be received and wanted to show loader.
        this.state = {
            isLoading: false,
            enableBiometric: false,
            faceIdEnrolled: false,
            touchIdEnrolled: false,

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
        };
    }

    dropDownOnClick = () => {
        this.setState({
            dropDownState: !this.state.dropDownState
        });
    }

    dropDownOnSelect = (valueRelation) => {
        this.setState({
            dropDownValue: valueRelation.value,
            dropDownState: false
        });
    }

    dropDownPrefixClick = () => {
        this.setState({
            dropDownPrefixState: !this.state.dropDownPrefixState
        });
    }

    dropDownPrefixSelect = (valuePrefix) => {
        this.setState({
            dropDownPrefixValue: valuePrefix.value,
            dropDownPrefixState: false
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
            dropDownSuffixState: false
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
            dropDownStatusState: false
        });
    }

    dropDownProofClick = () => {
        this.setState({
            dropDownProofState: !this.state.dropDownProofState
        });
    }

    dropDownProofSelect = (valueProof) => {
        this.setState({
            dropDownProofValue: valueProof.value,
            dropDownProofState: false
        });
    }

    switchOnOffStateUpdates = (fromView, flag) => {
        switch (fromView) {
            case 'profileCountry':
                if (flag) {
                    this.setState({ profileCountryUS: true, profileCountryNonUS: false });
                    this.setState({
                        showCountryNonUs: true,
                        profileSocialSecurity: false
                    });
                } else {
                    this.setState({ profileCountryUS: false, profileCountryNonUS: true });
                    this.setState({
                        showCountryNonUs: false,
                        profileSocialSecurity: true
                    });
                }
                break;
        }
    }

    componentDidMount() {
        if (this.props && this.props.initialState && this.props.initialState.firstName) {
            this.setState({
                profileName: this.props.initialState.firstName
            });
        }

        let payload = [];

        const compositePayloadData = [
            "prefix",
            "suffix",
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

    editFamilyOnCancel = () => this.props.navigation.navigate('editFamilyMemberInfo');

    render() {

        let profilePrefixData = profileSettingsTempData;
        let profileSuffixData = profileSettingsTempData;
        let profileStatusData = profileSettingsTempData;
        let profileProofData = profileCountryProofData;

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
                        <Text style={styles.editFamilyDetailView}>
                            {"Pro.."}
                        </Text>

                        <Text style={{ color: '#56565A', fontSize: scaledHeight(14) }}>
                            {"  >  "}
                        </Text>

                        <Text style={styles.editFamilyDetailView}>
                            {"Bas.."}
                        </Text>

                        <Text style={{ color: '#56565A', fontSize: scaledHeight(14) }}>
                            {"  >  "}
                        </Text>

                        <Text style={styles.editFamilyDetailView}>
                            {"Man.."}
                        </Text>

                        <Text style={{ color: '#56565A', fontSize: scaledHeight(14) }}>
                            {"  >  "}
                        </Text>

                        <Text style={styles.editFamilyDetailTwo}>
                            {"Manage Relationship In.."}
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
                            placeholder={this.state.profileRelationName}
                            dropDownTextName={styles.editProfileLabel}
                            dropDownName={globalString.editRelationShipInformation.relationShipFamilyLabel}
                            data={profileSettingsTempData}
                            changeState={this.dropDownOnClick}
                            showDropDown={this.state.dropDownState}
                            dropDownValue={this.state.dropDownValue}
                            selectedDropDownValue={this.dropDownOnSelect}
                            itemToDisplay={"value"}
                            errorFlag={this.state.dropDownFlag}
                            errorText={this.dropDownMsg}
                            dropDownPostition={{ position: 'absolute', right: 0, top: scaledHeight(90) }} />

                        {/* Relationship Name */}

                        <View style={styles.editFlexDirectionColumn}>
                            <Text style={styles.editFamilyDetailValueLabel}>
                                {globalString.editRelationShipInformation.relationFirstName}
                            </Text>

                            <Text style={styles.profileSettingsNameView}>
                                {this.state.profileName}
                            </Text>
                        </View>

                        {/* Relationship Prefix */}

                        <GDropDownComponent
                            placeholder={this.state.profileRelationPrefix}
                            dropDownTextName={styles.editProfileLabel}
                            dropDownName={globalString.editRelationShipInformation.relationPrefix}
                            data={profilePrefixData}
                            changeState={this.dropDownPrefixClick}
                            showDropDown={this.state.dropDownPrefixState}
                            dropDownValue={this.state.dropDownPrefixValue}
                            selectedDropDownValue={this.dropDownPrefixSelect}
                            itemToDisplay={"value"}
                            errorFlag={this.state.dropDownPrefixFlag}
                            errorText={this.dropDownPrefixMsg}
                            dropDownPostition={{ position: 'absolute', right: 0, top: scaledHeight(265) }} />

                        {/* Relationship Suffix */}

                        <GDropDownComponent
                            placeholder={this.state.profileRelationSuffix}
                            dropDownTextName={styles.editProfileLabel}
                            dropDownName={globalString.editRelationShipInformation.relationSuffix}
                            data={profileSuffixData}
                            changeState={this.dropDownSuffixClick}
                            showDropDown={this.state.dropDownSuffixState}
                            dropDownValue={this.state.dropDownSuffixValue}
                            selectedDropDownValue={this.dropDownSuffixSelect}
                            itemToDisplay={"value"}
                            errorFlag={this.state.dropDownSuffixFlag}
                            errorText={this.dropDownSuffixMsg}
                            dropDownPostition={{ position: 'absolute', right: 0, top: scaledHeight(345) }} />

                        {/* Relationship Date of Birth */}

                        <View style={styles.editFlexDirectionColumn}>
                            <Text style={styles.editFamilyDetailValueLabel}>
                                {globalString.profileSettingsPage.profileDobLabel}
                            </Text>

                            <Text style={styles.editProfileValueView}>
                                {"MM-DD-YY"}
                            </Text>
                        </View>

                        {/* Relationship Gender */}

                        <View style={styles.editFlexDirectionColumn}>
                            <Text style={styles.editFamilyDetailValueLabel}>
                                {globalString.profileSettingsPage.profileGenderLabel}
                            </Text>

                            <Text style={styles.editProfileValueView}>
                                {"Male"}
                            </Text>
                        </View>

                        {/* Relationship Marital Status */}

                        <GDropDownComponent
                            placeholder={this.state.profileRelationMarital}
                            dropDownTextName={styles.editProfileLabel}
                            dropDownName={globalString.editRelationShipInformation.relationStatus}
                            data={profileStatusData}
                            changeState={this.dropDownStatusClick}
                            showDropDown={this.state.dropDownStatusState}
                            dropDownValue={this.state.dropDownStatusValue}
                            selectedDropDownValue={this.dropDownStatusSelect}
                            itemToDisplay={"value"}
                            errorFlag={this.state.dropDownStatusFlag}
                            errorText={this.dropDownStatusMsg}
                            dropDownPostition={{ position: 'absolute', right: 0, top: scaledHeight(620) }} />

                        {/* Relationship Citizenship */}

                        <View>
                            <View style={styles.editFlexDirectionColumn}>
                                <Text style={styles.editFamilyDetailValueLabel}>
                                    {globalString.profileSettingsPage.profileUSCitizenLabel}
                                </Text>

                                <View style={styles.switchContainer}>
                                    <GSwitchComponent
                                        switchOnMethod={() => this.switchOnOffStateUpdates('profileCountry', false)}
                                        switchOffMethod={() => this.switchOnOffStateUpdates('profileCountry', true)}
                                        switchOn={this.state.profileCountryNonUS}
                                        switchOff={this.state.profileCountryUS}
                                        switchOnText={globalString.common.no}
                                        switchOffText={globalString.common.yes} />
                                </View>
                            </View>

                            {this.state.showCountryNonUs ? (
                                <View>
                                    <View style={styles.editFlexDirectionColumn}>
                                        <Text style={styles.editFamilyDetailValueLabel}>
                                            {globalString.profileSettingsPage.profileCountryOfCitizen}
                                        </Text>

                                        <GInputComponent style={styles.editFamilyDetailDropDown} />
                                    </View>

                                    <GDropDownComponent
                                        placeholder={this.state.profileRelationResidency}
                                        dropDownTextName={styles.editProfileLabel}
                                        dropDownName={globalString.profileSettingsPage.profileCitizenProof}
                                        data={profileProofData}
                                        changeState={this.dropDownProofClick}
                                        showDropDown={this.state.dropDownProofState}
                                        dropDownValue={this.state.dropDownProofValue}
                                        selectedDropDownValue={this.dropDownProofSelect}
                                        itemToDisplay={"value"}
                                        errorFlag={this.state.dropDownProofFlag}
                                        errorText={this.dropDownProofMsg}
                                        dropDownPostition={{ position: 'absolute', right: 0, top: scaledHeight(620) }} />
                                </View>) : null}

                            {this.state.profileSocialSecurity ? (
                                <View style={styles.editFlexDirectionColumn}>
                                    <Text style={styles.editFamilyDetailValueLabel}>
                                        {globalString.profileSettingsPage.profileSsnLabel}
                                    </Text>

                                    <GInputComponent style={styles.editFamilyDetailMargin}
                                        placeholder="" />
                                </View>) : null}
                        </View>

                        <View style={styles.editFlexDirectionColumn}>
                            <GButtonComponent
                                buttonStyle={styles.cancelButtonStyle}
                                buttonText={globalString.common.cancel}
                                textStyle={styles.cancelButtonText}
                                onPress={this.editFamilyOnCancel} />
                        </View>

                        <View style={styles.editFlexDirectionColumn}>
                            <GButtonComponent
                                buttonStyle={styles.saveButtonStyle}
                                buttonText={globalString.common.save}
                                textStyle={styles.saveButtonText} />
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
                    </View>

                </ScrollView>

            </View>
        );
    }
}

export default editFamilyDetailComponent;
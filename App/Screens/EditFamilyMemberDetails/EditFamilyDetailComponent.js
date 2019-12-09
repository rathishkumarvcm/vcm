import React, { Component } from 'react';
import { Text, View, Image, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import { styles } from './styles';
import { GButtonComponent, GHeaderComponent, GIcon, GInputComponent, GRadioButtonComponent, GSwitchComponent } from '../../CommonComponents';
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
            profileName: '',
            profileCountryUS: false,
            profileCountryNonUS: true,
            showCountryNonUs: false,
            profileSocialSecurity: true,
            dropDownState: false,
            dropDownValue: '',
            dropDownSuffixState: false,
            dropDownSuffixValue: '',
            dropDownStatusState: false,
            dropDownStatusValue: '',
            dropDownProofState: false,
            dropDownProofValue: ''
        };
    }

    dropDownOnClick = () => {
        this.setState({
            dropDownState: !this.state.dropDownState
        });
    }

    dropDownOnSelect = (value) => {
        this.setState({
            dropDownValue: value,
            dropDownState: false
        });
    }

    dropDownSuffixClick = () => {
        this.setState({
            dropDownSuffixState: !this.state.dropDownSuffixState
        });
    }

    dropDownSuffixSelect = (valueSuffix) => {
        this.setState({
            dropDownSuffixValue: valueSuffix,
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
            dropDownStatusValue: valueStatus,
            dropDownStatusState: false
        });
    }

    dropDownProofClick = () => {
        this.setState({
            dropDownProofState: !this.state.dropDownProofState
        });
    }

    dropDownProofSelect = (valueStatus) => {
        this.setState({
            dropDownProofValue: valueStatus,
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
                    navigation={this.props.navigation}
                />

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
                                {"Manage Relationship Information"}
                            </Text>
                        </View>

                        <View style={styles.settingsBorder} />

                        <View style={styles.editFamilyDetailHeader}>
                            <View>
                                <Text style={styles.editFamilyDetailLabel}>
                                    {"Family Member's relationship to you"}
                                </Text>

                                <TouchableOpacity style={styles.editFamilyDetailDropDown} onPress={this.selectTheState}>
                                    <GInputComponent
                                        propInputStyle={styles.userIDTextBox1}
                                        placeholder={""}
                                        editable={false}
                                        value={this.state.valueDropDown}
                                    />

                                    <TouchableOpacity style={styles.editFamilyDetailDropIcon} onPress={this.selectTheState}>
                                        <GIcon
                                            name="md-arrow-dropdown"
                                            type="ionicon"
                                            size={20}
                                            color="black"
                                        />
                                    </TouchableOpacity>
                                </TouchableOpacity>
                            </View>

                            <View>
                                <Text style={styles.editFamilyDetailValueLabel}>
                                    {globalString.editRelationShipInformation.relationFirstName}
                                </Text>

                                <Text style={styles.profileSettingsNameView}>
                                    {this.state.profileName}
                                </Text>
                            </View>

                            <View>
                                <Text style={styles.editFamilyDetailValueLabel}>
                                    {globalString.profileSettingsPage.profilePrefixLabel}
                                </Text>

                                <TouchableOpacity style={styles.editFamilyDetailDropDown}
                                    onPress={this.dropDownOnClick}
                                >
                                    <GInputComponent
                                        propInputStyle={styles.userIDTextBox1}
                                        placeholder={""}
                                        editable={false}
                                        value={this.state.dropDownValue}
                                    />

                                    <TouchableOpacity style={styles.editFamilyDetailDropIcon}
                                        onPress={this.dropDownOnClick}
                                    >
                                        <GIcon
                                            name="md-arrow-dropdown"
                                            type="ionicon"
                                            size={20}
                                            color="black"
                                        />
                                    </TouchableOpacity>
                                </TouchableOpacity>

                                {this.state.dropDownState &&
                                    <View style={styles.editDropDownSelect} >
                                        <FlatList
                                            data={profilePrefixData}
                                            renderItem={({ item }) =>
                                                (<TouchableOpacity style={{ height: 33 }}
                                                    onPress={() => this.dropDownOnSelect(item.value)}
                                                >
                                                    <Text style={{ fontSize: scaledHeight(16) }}> {item.value} </Text>
                                                 </TouchableOpacity>)
                                            }
                                            keyExtractor={item => item.key}
                                        />
                                    </View>}
                            </View>

                            <View>
                                <Text style={styles.editFamilyDetailValueLabel}>
                                    {globalString.profileSettingsPage.profileSuffixLabel}
                                </Text>

                                <TouchableOpacity style={styles.editFamilyDetailDropDown}
                                    onPress={this.dropDownSuffixClick}
                                >
                                    <GInputComponent
                                        propInputStyle={styles.userIDTextBox1}
                                        placeholder={""}
                                        editable={false}
                                        value={this.state.dropDownSuffixValue}
                                    />

                                    <TouchableOpacity style={styles.editFamilyDetailDropIcon}
                                        onPress={this.dropDownSuffixClick}
                                    >
                                        <GIcon
                                            name="md-arrow-dropdown"
                                            type="ionicon"
                                            size={20}
                                            color="black"
                                        />
                                    </TouchableOpacity>
                                </TouchableOpacity>

                                {this.state.dropDownSuffixState &&
                                    <View style={styles.editDropDownSelect} >
                                        <FlatList
                                            data={profileSuffixData}
                                            renderItem={({ item }) =>
                                                (<TouchableOpacity style={{ height: 33 }}
                                                    onPress={() => this.dropDownSuffixSelect(item.value)}
                                                >
                                                    <Text style={{ fontSize: scaledHeight(16) }}> {item.value} </Text>
                                                 </TouchableOpacity>)
                                            }
                                            keyExtractor={item => item.key}
                                        />
                                    </View>}
                            </View>

                            <View>
                                <Text style={styles.editFamilyDetailValueLabel}>
                                    {globalString.profileSettingsPage.profileDobLabel}
                                </Text>

                                <Text style={styles.editProfileValueView}>
                                    {"MM-DD-YY"}
                                </Text>
                            </View>

                            <View>
                                <Text style={styles.editFamilyDetailValueLabel}>
                                    {globalString.profileSettingsPage.profileGenderLabel}
                                </Text>

                                <Text style={styles.editProfileValueView}>
                                    {"Male"}
                                </Text>
                            </View>

                            <View>
                                <Text style={styles.editFamilyDetailValueLabel}>
                                    {globalString.profileSettingsPage.profileStatusLabel}
                                </Text>

                                <TouchableOpacity style={styles.editFamilyDetailDropDown}
                                    onPress={this.dropDownStatusClick}
                                >
                                    <GInputComponent
                                        propInputStyle={styles.userIDTextBox1}
                                        placeholder={""}
                                        editable={false}
                                        value={this.state.dropDownStatusValue}
                                    />

                                    <TouchableOpacity style={styles.editFamilyDetailDropIcon}
                                        onPress={this.dropDownStatusClick}
                                    >
                                        <GIcon
                                            name="md-arrow-dropdown"
                                            type="ionicon"
                                            size={20}
                                            color="black"
                                        />
                                    </TouchableOpacity>
                                </TouchableOpacity>

                                {this.state.dropDownStatusState &&
                                    <View style={styles.editDropDownSelect} >
                                        <FlatList
                                            data={profileStatusData}
                                            renderItem={({ item }) =>
                                                (<TouchableOpacity style={{ height: 33 }}
                                                    onPress={() => this.dropDownStatusSelect(item.value)}
                                                >
                                                    <Text style={{ fontSize: scaledHeight(16) }}> {item.value} </Text>
                                                 </TouchableOpacity>)
                                            }
                                            keyExtractor={item => item.key}
                                        />
                                    </View>}
                            </View>

                            <View>
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
                                        switchOffText={globalString.common.yes}
                                    />
                                </View>

                                {this.state.showCountryNonUs ? (
                                    <View>
                                        <Text style={styles.editFamilyDetailValueLabel}>
                                            {globalString.profileSettingsPage.profileCountryOfCitizen}
                                        </Text>

                                        <GInputComponent style={styles.editFamilyDetailDropDown} />

                                        <Text style={styles.editFamilyDetailValueLabel}>
                                            {globalString.profileSettingsPage.profileCitizenProof}
                                        </Text>

                                        <TouchableOpacity style={styles.editFamilyDetailDropDown}
                                            onPress={this.dropDownProofClick}
                                        >
                                            <GInputComponent
                                                propInputStyle={styles.userIDTextBox1}
                                                placeholder={""}
                                                editable={false}
                                                value={this.state.dropDownProofValue}
                                            />

                                            <TouchableOpacity style={styles.editFamilyDetailDropIcon}
                                                onPress={this.dropDownProofClick}
                                            >
                                                <GIcon
                                                    name="md-arrow-dropdown"
                                                    type="ionicon"
                                                    size={20}
                                                    color="black"
                                                />
                                            </TouchableOpacity>
                                        </TouchableOpacity>

                                        {this.state.dropDownProofState &&
                                            <View style={styles.editDropDownSelect} >
                                                <FlatList
                                                    data={profileProofData}
                                                    renderItem={({ item }) =>
                                                        (<TouchableOpacity style={{ height: 33 }}
                                                            onPress={() => this.dropDownProofSelect(item.value)}
                                                        >
                                                            <Text style={{ fontSize: scaledHeight(16) }}> {item.value} </Text>
                                                         </TouchableOpacity>)
                                                    }
                                                    keyExtractor={item => item.key}
                                                />
                                            </View>}
                                    </View>
                                ) : null}
                            </View>

                            {this.state.profileSocialSecurity ? (
                                <View>
                                    <Text style={styles.editFamilyDetailValueLabel}>
                                        {globalString.profileSettingsPage.profileSsnLabel}
                                    </Text>

                                    <GInputComponent style={styles.editFamilyDetailMargin}
                                        placeholder=""
                                    />
                                </View>
                            ) : null}

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
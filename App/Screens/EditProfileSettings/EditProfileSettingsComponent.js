import React, { Component } from 'react';
import { Text, View, Image, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import { styles } from './styles';
import { GButtonComponent, GHeaderComponent, GIcon, GInputComponent, GRadioButtonComponent } from '../../CommonComponents';
import { scaledHeight } from '../../Utils/Resolution';
import globalString from '../../Constants/GlobalStrings';

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
            errorPin: '',
            profileName: '',
            profileMobile: '',
            radioButton: false,
            radioButtonIndex: 0,
            dropDownState: false,
            dropDownValue: '',
            dropDownSuffixState: false,
            dropDownSuffixValue: '',
            dropDownGenderState: false,
            dropDownGenderValue: '',
            dropDownStatusState: false,
            dropDownStatusValue: ''
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
            validPin: text
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
        this.setState({
            isValidPin: this.state.validPin != "" ? true : false,
            errorPin: this.state.validPin != "" ? "" : globalString.common.validPincode
        });

        if (this.state.validPin != "") {
            console.log('Valid Pin');
        }
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

    dropDownGenderClick = () => {
        this.setState({
            dropDownGenderState: !this.state.dropDownGenderState
        });
    }

    dropDownGenderSelect = (valueGender) => {
        this.setState({
            dropDownGenderValue: valueGender,
            dropDownGenderState: false
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

    componentDidMount() {
        if (this.props && this.props.initialstate && this.props.initialstate.firstName) {
            this.setState({
                profileName: this.props.initialstate.firstName
            })
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
                payload.push(tempkey)
            }
        }

        this.props.getProfileCompositeData(payload);
    }

    editProfileOnCancel = () => { this.props.navigation.navigate('profileSettings') }

    render() {

        let profilePrefixData = profileSettingsTempData;
        let profileSuffixData = profileSettingsTempData;
        let profileGenderData = profileSettingsTempData;
        let profileStatusData = profileSettingsTempData;

        if (this.props && this.props.profileSettingsLookup &&
            this.props.profileSettingsLookup.prefix &&
            this.props.profileSettingsLookup.prefix.value) {
            profilePrefixData = this.props.profileSettingsLookup.prefix.value
        }

        if (this.props && this.props.profileSettingsLookup &&
            this.props.profileSettingsLookup.suffix &&
            this.props.profileSettingsLookup.suffix.value) {
            profileSuffixData = this.props.profileSettingsLookup.suffix.value
        }

        if (this.props && this.props.profileSettingsLookup &&
            this.props.profileSettingsLookup.gender &&
            this.props.profileSettingsLookup.gender.value) {
            profileGenderData = this.props.profileSettingsLookup.gender.value
        }

        if (this.props && this.props.profileSettingsLookup &&
            this.props.profileSettingsLookup.marital_status &&
            this.props.profileSettingsLookup.marital_status.value) {
            profileStatusData = this.props.profileSettingsLookup.marital_status.value
        }

        return (
            <View style={styles.container}>
                <GHeaderComponent
                    navigation={this.props.navigation} />

                <ScrollView style={{ flex: 0.85 }}>

                    {/* Header Section - Tree Structure */}

                    <View style={styles.settingsView}>
                        <Text style={{ color: '#0000FF', fontSize: scaledHeight(14) }}>
                            {"Pro.."}
                        </Text>

                        <Text style={{ color: '#56565A', fontSize: scaledHeight(14) }}>
                            {"  >  "}
                        </Text>

                        <Text style={{ color: '#0000FF', fontSize: scaledHeight(14) }}
                            onPress={() => this.props.navigation.navigate('profileSettings')}>
                            {"Bas.."}
                        </Text>

                        <Text style={{ color: '#56565A', fontSize: scaledHeight(14) }}>
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

                        <View style={styles.settingsBorder}></View>

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
                                {"YYMM999999"}
                            </Text>
                        </View>

                        <View style={styles.editFlexDirectionColumn}>
                            <Text style={styles.editProfileLabel}>
                                {globalString.profileSettingsPage.profileSsnLabel}
                            </Text>

                            <Text style={styles.editProfileValueView}>
                                {"12345-67***"}
                            </Text>
                        </View>

                        <View style={styles.editFlexDirectionColumn}>
                            <Text style={styles.editProfileLabel}>
                                {globalString.profileSettingsPage.profileDobLabel}
                            </Text>

                            <Text style={styles.editProfileValueView}>
                                {"MM-DD-YY"}
                            </Text>
                        </View>

                        {/* Prefix Data */}

                        <View style={styles.editFlexDirectionColumn}>
                            <Text style={styles.editProfileLabel}>
                                {globalString.profileSettingsPage.profilePrefixLabel}
                            </Text>

                            <TouchableOpacity style={styles.editDropDownView}
                                onPress={this.dropDownOnClick}>
                                <GInputComponent
                                    propInputStyle={styles.userIDTextBox1}
                                    placeholder={""}
                                    editable={false}
                                    value={this.state.dropDownValue} />

                                <TouchableOpacity style={styles.editDropDownIcon}
                                    onPress={this.dropDownOnClick}>
                                    <GIcon
                                        name="md-arrow-dropdown"
                                        type="ionicon"
                                        size={20}
                                        color="black" />
                                </TouchableOpacity>
                            </TouchableOpacity>

                            {this.state.dropDownState &&
                                <View style={styles.editDropDownSelect} >
                                    <FlatList
                                        data={profilePrefixData}
                                        renderItem={({ item }) =>
                                            (<TouchableOpacity style={{ height: 33 }}
                                                onPress={() => this.dropDownOnSelect(item.value)}>
                                                <Text style={{ fontSize: scaledHeight(16) }}> {item.value} </Text>
                                            </TouchableOpacity>)
                                        }
                                        keyExtractor={item => item.key}
                                    />
                                </View>}
                        </View>

                        {/* Suffix Data */}

                        <View style={styles.editFlexDirectionColumn}>
                            <Text style={styles.editProfileLabel}>
                                {globalString.profileSettingsPage.profileSuffixLabel}
                            </Text>

                            <TouchableOpacity style={styles.editDropDownView}
                                onPress={this.dropDownSuffixClick}>
                                <GInputComponent
                                    propInputStyle={styles.userIDTextBox1}
                                    placeholder={""}
                                    editable={false}
                                    value={this.state.dropDownSuffixValue} />

                                <TouchableOpacity style={styles.editDropDownIcon}
                                    onPress={this.dropDownSuffixClick}>
                                    <GIcon
                                        name="md-arrow-dropdown"
                                        type="ionicon"
                                        size={20}
                                        color="black" />
                                </TouchableOpacity>
                            </TouchableOpacity>

                            {this.state.dropDownSuffixState &&
                                <View style={styles.editDropDownSelect} >
                                    <FlatList
                                        data={profileSuffixData}
                                        renderItem={({ item }) =>
                                            (<TouchableOpacity style={{ height: 33 }}
                                                onPress={() => this.dropDownSuffixSelect(item.value)}>
                                                <Text style={{ fontSize: scaledHeight(16) }}> {item.value} </Text>
                                            </TouchableOpacity>)
                                        }
                                        keyExtractor={item => item.key}
                                    />
                                </View>}
                        </View>

                        <View style={styles.editFlexDirectionColumn}>
                            <Text style={styles.editProfileLabel}>
                                {globalString.editProfilePageValue.editProfilePin}
                            </Text>

                            <GInputComponent
                                propInputStyle={this.state.isValidPin ? styles.userIDTextBox : styles.userIDTextBoxError}
                                placeholder=""
                                onChangeText={this.setValidPin}
                                value={this.state.validPin}
                                keyboardType={'numeric'} />

                            <Text style={styles.errorMessage}>{this.state.errorPin}</Text>

                        </View>

                        {/* Gender Data */}

                        <View style={styles.editFlexDirectionColumn}>

                            <Text style={styles.editProfileLabel}>
                                {globalString.profileSettingsPage.profileGenderLabel}
                            </Text>

                            <TouchableOpacity style={styles.editDropDownView}
                                onPress={this.dropDownGenderClick}>
                                <GInputComponent
                                    propInputStyle={styles.userIDTextBox1}
                                    placeholder={""}
                                    editable={false}
                                    value={this.state.dropDownGenderValue} />

                                <TouchableOpacity style={styles.editDropDownIcon}
                                    onPress={this.dropDownGenderClick}>
                                    <GIcon
                                        name="md-arrow-dropdown"
                                        type="ionicon"
                                        size={20}
                                        color="black" />
                                </TouchableOpacity>
                            </TouchableOpacity>

                            {this.state.dropDownGenderState &&
                                <View style={styles.editDropDownSelect} >
                                    <FlatList
                                        data={profileGenderData}
                                        renderItem={({ item }) =>
                                            (<TouchableOpacity style={{ height: 33 }}
                                                onPress={() => this.dropDownGenderSelect(item.value)}>
                                                <Text style={{ fontSize: scaledHeight(16) }}> {item.value} </Text>
                                            </TouchableOpacity>)
                                        }
                                        keyExtractor={item => item.key}
                                    />
                                </View>}
                        </View>

                        {/* Marital Status Data */}

                        <View style={styles.editFlexDirectionColumn}>
                            <Text style={styles.editProfileLabel}>
                                {globalString.profileSettingsPage.profileStatusLabel}
                            </Text>

                            <TouchableOpacity style={styles.editDropDownView}
                                onPress={this.dropDownStatusClick}>
                                <GInputComponent
                                    propInputStyle={styles.userIDTextBox1}
                                    placeholder={""}
                                    editable={false}
                                    value={this.state.dropDownStatusValue} />

                                <TouchableOpacity style={styles.editDropDownIcon}
                                    onPress={this.dropDownStatusClick}>
                                    <GIcon
                                        name="md-arrow-dropdown"
                                        type="ionicon"
                                        size={20}
                                        color="black" />
                                </TouchableOpacity>
                            </TouchableOpacity>

                            {this.state.dropDownStatusState &&
                                <View style={styles.editDropDownSelect} >
                                    <FlatList
                                        data={profileStatusData}
                                        renderItem={({ item }) =>
                                            (<TouchableOpacity style={{ height: 33 }}
                                                onPress={() => this.dropDownStatusSelect(item.value)}>
                                                <Text style={{ fontSize: scaledHeight(16) }}> {item.value} </Text>
                                            </TouchableOpacity>)
                                        }
                                        keyExtractor={item => item.key}
                                    />
                                </View>}
                        </View>

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
                                            questions={item.question} />
                                        :
                                        <GRadioButtonComponent
                                            onPress={() => this.radioButtonClicked(index)}
                                            selected={false}
                                            questions={item.question} />
                                )}
                            </View>
                        </View>

                        <View style={styles.editFlexDirectionColumn}>
                            {this.state.countryNonUS ? (<View>
                                <Text style={styles.editProfileLabel}>
                                    {globalString.profileSettingsPage.profileCountryLabel}
                                </Text>

                                <TouchableOpacity style={styles.editDropDownView} onPress={this.selectTheState}>
                                    <GInputComponent
                                        propInputStyle={styles.userIDTextBox1}
                                        placeholder={""}
                                        editable={false}
                                        value={this.state.valueDropDown} />

                                    <TouchableOpacity style={styles.editDropDownIcon} onPress={this.selectTheState}>
                                        <GIcon
                                            name="md-arrow-dropdown"
                                            type="ionicon"
                                            size={20}
                                            color="black" />
                                    </TouchableOpacity>

                                </TouchableOpacity></View>) : null}
                        </View>

                        <View style={styles.editFlexDirectionColumn}>
                            <GButtonComponent
                                buttonStyle={styles.cancelButtonStyle}
                                buttonText={globalString.common.cancel}
                                textStyle={styles.cancelButtonText}
                                onPress={this.editProfileOnCancel} />
                        </View>

                        <View style={styles.editFlexDirectionColumn}>
                            <GButtonComponent
                                buttonStyle={styles.saveButtonStyle}
                                buttonText={globalString.common.save}
                                onPress={this.navigationSuccess}
                                textStyle={styles.saveButtonText} />
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
                            <Text style={styles.termsofuseText1}>
                                {globalString.editProfilePageValue.editProfileInvesting}
                            </Text>
                            <Text style={styles.openInvestment}>
                                {globalString.profileSettingsPage.profileInvest}
                            </Text>
                        </View>

                        <View style={styles.connectWithUs}>
                            <Image
                                source={require("../../Images/logo.png")} />
                        </View>

                        <View style={styles.whiteBackground}>
                            <Text style={styles.editLabelInputMedium}>
                                {globalString.common.connectWithUs}
                            </Text>
                        </View>

                        <View style={styles.whiteBackground}>
                            <Image style={styles.imageWidthHeight}
                                source={require("../../Images/twitterlogo.png")} />
                            <Image style={styles.imageWidthHeight}
                                source={require("../../Images/linkedinlogo.png")} />
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
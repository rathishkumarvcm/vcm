import React, { Component } from 'react';
import { Text, View, Image, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import { styles } from './styles';
import { GButtonComponent, GHeaderComponent, GIcon, GInputComponent, GRadioButtonComponent } from '../../CommonComponents';
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

    relationCancelOnClick = () => this.props.navigation.navigate('profileSettings');

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

                        <View style={styles.relationFamilyLabel}>
                            <Text style={styles.relationFamilyLabelView}>
                                {globalString.editRelationShipInformation.relationShipFamilyLabel}
                            </Text>

                            <TouchableOpacity style={styles.relationSpinnerView} onPress={this.selectTheState}>
                                <GInputComponent
                                    propInputStyle={styles.userIDTextBox1}
                                    placeholder={""}
                                    editable={false}
                                    value={this.state.valueDropDown}
                                />

                                <TouchableOpacity style={styles.relationSpinnerBackground} onPress={this.selectTheState}>
                                    <GIcon
                                        name="md-arrow-dropdown"
                                        type="ionicon"
                                        size={20}
                                        color="black"
                                    />
                                </TouchableOpacity>
                            </TouchableOpacity>

                            <Text style={styles.relationLabels}>
                                {globalString.editRelationShipInformation.relationFirstName}
                            </Text>

                            <GInputComponent style={styles.relationMarginFour}
                                placeholder=""
                            />

                            <View>
                                <Text style={styles.relationLabels}>
                                    {globalString.editRelationShipInformation.relationPrefix}
                                </Text>

                                <TouchableOpacity style={styles.relationSpinnerView}
                                    onPress={this.dropDownOnClick}
                                >
                                    <GInputComponent
                                        propInputStyle={styles.userIDTextBox1}
                                        placeholder={""}
                                        editable={false}
                                        value={this.state.dropDownValue}
                                    />

                                    <TouchableOpacity style={styles.relationSpinnerBackground}
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
                                <Text style={styles.relationLabels}>
                                    {globalString.editRelationShipInformation.relationSuffix}
                                </Text>

                                <TouchableOpacity style={styles.relationSpinnerView}
                                    onPress={this.dropDownSuffixClick}
                                >
                                    <GInputComponent
                                        propInputStyle={styles.userIDTextBox1}
                                        placeholder={""}
                                        editable={false}
                                        value={this.state.dropDownSuffixValue}
                                    />

                                    <TouchableOpacity style={styles.relationSpinnerBackground}
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

                            <Text style={styles.relationLabels}>
                                {globalString.editRelationShipInformation.relationDob}
                            </Text>

                            <GInputComponent style={styles.relationMarginFour}
                                placeholder="MM/DD/YYYY"
                            />

                            <View>
                                <Text style={styles.relationLabels}>
                                    {globalString.editRelationShipInformation.relationGender}
                                </Text>

                                <TouchableOpacity style={styles.relationSpinnerView}
                                    onPress={this.dropDownGenderClick}
                                >
                                    <GInputComponent
                                        propInputStyle={styles.userIDTextBox1}
                                        placeholder={""}
                                        editable={false}
                                        value={this.state.dropDownGenderValue}
                                    />

                                    <TouchableOpacity style={styles.relationSpinnerBackground}
                                        onPress={this.dropDownGenderClick}
                                    >
                                        <GIcon
                                            name="md-arrow-dropdown"
                                            type="ionicon"
                                            size={20}
                                            color="black"
                                        />
                                    </TouchableOpacity>
                                </TouchableOpacity>

                                {this.state.dropDownGenderState &&
                                    <View style={styles.editDropDownSelect} >
                                        <FlatList
                                            data={profileGenderData}
                                            renderItem={({ item }) =>
                                                (<TouchableOpacity style={{ height: 33 }}
                                                    onPress={() => this.dropDownGenderSelect(item.value)}
                                                >
                                                    <Text style={{ fontSize: scaledHeight(16) }}> {item.value} </Text>
                                                 </TouchableOpacity>)
                                            }
                                            keyExtractor={item => item.key}
                                        />
                                    </View>}
                            </View>

                            <View>
                                <Text style={styles.relationLabels}>
                                    {globalString.editRelationShipInformation.relationStatus}
                                </Text>

                                <TouchableOpacity style={styles.relationSpinnerView}
                                    onPress={this.dropDownStatusClick}
                                >
                                    <GInputComponent
                                        propInputStyle={styles.userIDTextBox1}
                                        placeholder={""}
                                        editable={false}
                                        value={this.state.dropDownStatusValue}
                                    />

                                    <TouchableOpacity style={styles.relationSpinnerBackground}
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

                            <Text style={styles.relationLabels}>
                                {globalString.editRelationShipInformation.relationSocialSecurity}
                            </Text>

                            <GInputComponent style={styles.relationMarginFour}
                                placeholder=""
                            />

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

export default editRelationshipComponent;
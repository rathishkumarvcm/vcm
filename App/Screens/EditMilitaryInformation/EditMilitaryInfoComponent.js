import React, { Component } from 'react';
import { Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { GButtonComponent, GHeaderComponent, GIcon, GInputComponent, GRadioButtonComponent, GDropDownComponent, GDateComponent, GLoadingSpinner, GSwitchComponent } from '../../CommonComponents';
import { scaledHeight } from '../../Utils/Resolution';
import globalString from '../../Constants/GlobalStrings';

let profileMilitaryService = [
    { index1: 0, question: "Yes" },
    { index2: 1, question: "No" },
];

let tempMilitaryStatusData = [
    {
        key: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        value: 'Retired from Active Duty',
    },
    {
        key: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        value: 'Active Duty Military',
    },
    {
        key: '58694a0f-3da1-471f-bd96-145571e29d72',
        value: 'Separated Military',
    }
];

let payloadMilitaryRank;

class editMilitaryInfoComponent extends Component {
    constructor(props) {
        super(props);
        // set true to isLoading if data for this screen yet to be received and wanted to show loader.
        this.state = {
            isLoading: false,
            enableBiometric: false,
            faceIdEnrolled: false,
            touchIdEnrolled: false,
            radioButton: false,
            radioButtonIndex: 1,
            isMilitaryService: false,
            dropDownRank: '',
            dummyMilitaryStatusData: [],

            dateFromValue: '',
            dateToValue: '',

            militaryFromDate: '',
            militaryToDate: '',

            isValidFromDate: false,
            isValidToDate: false,

            dropDownMilitaryState: false,
            dropDownMilitaryValue: '',
            dropDownMilitaryFlag: false,
            dropDownMilitaryMsg: '',

            dropDownBranchState: false,
            dropDownBranchValue: '',
            dropDownBranchFlag: false,
            dropDownBranchMsg: '',

            dropDownMarineState: false,
            dropDownMarineValue: '',
            dropDownMarineFlag: false,
            dropDownMarineMsg: '',

            militaryCommissionValue: '',
            isMilitaryCommissionFlag: true,
            militaryCommissionMsg: ''
        };
    }

    componentDidMount() {
        if (this.props && this.props.profileState && this.props.profileState.profileServingMilitary) {
            this.setState({
                isMilitaryService: this.props.profileState.profileServingMilitary
            });
        }

        let payload = [];

        const compositePayloadData = [
            "mil_status",
            "mil_serv_branch"
        ];

        for (let i = 0; i < compositePayloadData.length; i++) {
            let tempkey = compositePayloadData[i];
            if (this.props && this.props.profileSettingsLookup && !this.props.profileSettingsLookup[tempkey]) {
                payload.push(tempkey);
            }
        }

        this.props.getProfileCompositeData(payload);

        if (this.state.isMilitaryService) {
            this.setState({
                radioButtonIndex: 0
            });
        } else {
            this.setState({
                radioButtonIndex: 1
            });
        }
    }

    radioButtonClicked = (index) => {
        if (index !== this.state.radioButtonIndex) {
            this.setState({
                radioButtonIndex: index,
                radioButton: false
            });
        } else {
            this.setState({
                radioButton: false
            });
        }

        if (index === 0) {
            this.setState({
                isMilitaryService: true,
                radioButtonIndex: 0
            });
        } else {
            this.setState({
                isMilitaryService: false,
                radioButtonIndex: 1
            });
        }
    }

    dropDownMilitaryOnClick = () => {
        this.setState({
            dropDownMilitaryState: !this.state.dropDownMilitaryState
        });
    }

    dropDownMilitaryOnSelect = (value, index, data) => {
        this.setState({
            dropDownMilitaryValue: data[index].value,
            dropDownMilitaryState: false,
            dropDownMilitaryMsg: ''
        });
    }

    dropDownBranchOnClick = () => {
        this.setState({
            dropDownBranchState: !this.state.dropDownBranchState
        });
    }

    dropDownBranchOnSelect = (value, index, data) => {
        this.setState({
            dropDownBranchValue: data[index].value,
            dropDownBranchState: false,
            dropDownBranchMsg: '',
            dummyMilitaryStatusData: [],
            dropDownMarineState: false,
            dropDownMarineValue: ''
        });

        payloadMilitaryRank = `mil_rank_${data[index].key}`;

        if (this.props && this.props.profileSettingsLookup && !this.props.profileSettingsLookup[payloadMilitaryRank]) {
            this.props.getRankData(payloadMilitaryRank);
        }
    }

    dropDownMarineOnClick = () => {
        this.setState({
            dropDownMarineState: !this.state.dropDownMarineState
        });
    }

    dropDownMarineOnSelect = (value, index, data) => {
        this.setState({
            dropDownMarineValue: data[index].value,
            dropDownMarineState: false,
            dropDownMarineMsg: ''
        });
    }

    onChangeFromDateValue = (date) => {
        this.setState({
            dateFromValue: date
        });
    }

    onChangeToDateValue = (date) => {
        this.setState({
            dateToValue: date
        });
    }

    editMilitaryOnCancel = () => this.props.navigation.navigate('profileSettings');

    saveMilitaryInformations = () => {
        if (this.state.isMilitaryService) {
            if (this.state.dropDownMilitaryValue === '') {
                this.setState({
                    dropDownMilitaryFlag: false,
                    dropDownMilitaryMsg: 'Select valid military status'
                });
            }

            if (this.state.dropDownBranchValue === '') {
                this.setState({
                    dropDownBranchFlag: false,
                    dropDownBranchMsg: 'Select valid military branch'
                });
            }

            if (this.state.dropDownMarineValue === '') {
                this.setState({
                    dropDownMarineFlag: false,
                    dropDownMarineMsg: 'Select valid military rank'
                });
            }

            if (this.state.dropDownMilitaryValue != '' &&
                this.state.dropDownBranchValue != '' &&
                this.state.dropDownMarineValue != '') {
                this.manageMilitaryInformations();
            }
        } else {
            this.manageMilitaryInformations();
        }
    }

    manageMilitaryInformations = () => {
        const payloadData = this.getMilitaryData();
        this.props.saveProfileData("addMilitaryInformation", payloadData);
        this.props.navigation.navigate('profileSettings');
    }

    getMilitaryData = () => {
        let profileMilitaryData = {};
        if (this.props && this.props.profileState) {
            profileMilitaryData = {
                ...this.props.profileState,
                "profileServingMilitary": this.state.isMilitaryService,
                "profileMilitaryInformation": {
                    profileMilitaryStatus: this.state.dropDownMilitaryValue,
                    profileMilitaryBranch: this.state.dropDownBranchValue,
                    profileMilitaryRank: this.state.dropDownMarineValue,
                    profileMilitaryFromDate: '',
                    profileMilitaryToDate: '',
                    profileMilitrayCommission: ''
                }
            };
        }
        return profileMilitaryData;
    }

    renderRankDropDown = () => {

        if (this.props && this.props.profileSettingsLookup &&
            this.props.profileSettingsLookup[payloadMilitaryRank] &&
            this.props.profileSettingsLookup[payloadMilitaryRank].value) {
            this.state.dummyMilitaryStatusData = this.props.profileSettingsLookup[payloadMilitaryRank].value;
        }

        return (
            <GDropDownComponent
                dropDownTextName={styles.editProfileLabel}
                dropDownName={globalString.militaryInformationLabel.militaryRank}
                data={this.state.dummyMilitaryStatusData}
                changeState={this.dropDownMarineOnClick}
                showDropDown={this.state.dropDownMarineState}
                dropDownValue={this.state.dropDownMarineValue}
                selectedDropDownValue={this.dropDownMarineOnSelect}
                itemToDisplay={"value"}
                errorFlag={this.state.dropDownMarineFlag}
                errorText={this.state.dropDownMarineMsg}
                dropDownPostition={{ position: 'absolute', right: 0, top: scaledHeight(270) }} />
        );
    }

    setValidMilitaryCommission = (text) => {
        this.setState({
            militaryCommissionValue: text,
            isMilitaryCommissionFlag: true
        });

        if (this.state.militaryCommissionValue.length.toString() === "29") {
            this.setState({
                isMilitaryCommissionFlag: false,
                militaryCommissionMsg: 'Max. character length exceeded'
            })
        }
    }

    render() {

        const date = new Date().getDate(); // Current Date
        const month = new Date().getMonth() + 1; // Current Month
        const year = new Date().getFullYear(); // Current Year
        const currentdate = month + "-" + date + "-" + year;

        let userMilitaryStatus = tempMilitaryStatusData;
        let userBranchOfService = tempMilitaryStatusData;

        if (this.props && this.props.profileSettingsLookup &&
            this.props.profileSettingsLookup.mil_status &&
            this.props.profileSettingsLookup.mil_status.value) {
            userMilitaryStatus = this.props.profileSettingsLookup.mil_status.value;
        }

        if (this.props && this.props.profileSettingsLookup &&
            this.props.profileSettingsLookup.mil_serv_branch &&
            this.props.profileSettingsLookup.mil_serv_branch.value) {
            userBranchOfService = this.props.profileSettingsLookup.mil_serv_branch.value;
        }

        return (

            <View style={styles.container}>
                {
                    (this.props.accOpeningData.isLoading || this.props.profileSettingsLookup.isLoading) && <GLoadingSpinner />
                }
                <GHeaderComponent
                    navigation={this.props.navigation} />

                <ScrollView style={{ flex: 0.85 }}>

                    <View style={styles.settingsView}>
                        <Text style={styles.settingsInfo}>
                            {globalString.editProfilePageValue.editAddressInfoHead}
                        </Text>
                        <Text style={[styles.settingsInfo, styles.editLabelBold]}>
                            {globalString.editMilitaryInfo.militaryInfoTitle}
                        </Text>
                    </View>

                    <View style={styles.settingsView}>
                        <Text style={[styles.settingsHeadline, styles.editTitleBold]}>
                            {globalString.editMilitaryInfo.militaryInfoTitle}
                        </Text>
                    </View>

                    <View style={styles.settingsBorder} />

                    <View style={styles.editFlexDirectionColumn}>
                        <Text style={styles.editMilitaryInfo}>
                            {globalString.editMilitaryInfo.militaryInformations}
                        </Text>
                    </View>

                    <View style={styles.editFlexDirectionColumn}>
                        <Text style={styles.editMilitaryServing}>
                            {globalString.editMilitaryInfo.militaryServing}
                        </Text>
                    </View>

                    {/* <View style={styles.editFlexDirectionColumn}>
                        <View style={styles.switchContainer}>
                            <GSwitchComponent
                                switchOffText={"No"}
                                switchOnText={"Yes"}
                                switchOff={this.state.isMilitaryService}
                                switchOn={this.state.isMilitaryService}
                                switchOnMethod={this.state.isMilitaryService === true ? this.radioButtonClicked(0) : this.radioButtonClicked(1)}
                                switchOffMethod={this.state.isMilitaryService === false ? this.radioButtonClicked(1) : this.radioButtonClicked(0)}
                                onStyle={styles.onButtonStyle}
                                offStyle={styles.offButtonStyle}
                                onStyleDisabled={styles.onButtonStyleDisable}
                                offStyleDisabled={styles.offButtonStyleDisable}
                                textOnStyle={styles.TextOnStyle}
                                textOffStyle={this.state.isMilitaryService ? styles.TextOffStyle : styles.TextOffStyleBold} />
                        </View>
                    </View> */}

                    <View style={styles.editFlexDirectionColumn}>
                        <View style={styles.editMilitaryServingRadio}>
                            {profileMilitaryService.map((item, index) =>
                                index == this.state.radioButtonIndex ?
                                    <GRadioButtonComponent
                                        onPress={() => this.radioButtonClicked(index)}
                                        selected
                                        questions={item.question} />
                                    :
                                    <GRadioButtonComponent
                                        onPress={() => this.radioButtonClicked(index)}
                                        selected={false}
                                        questions={item.question} />)}
                        </View>
                    </View>

                    {this.state.isMilitaryService ? (
                        <View>
                            <GDropDownComponent
                                dropDownTextName={styles.editProfileLabel}
                                dropDownName={globalString.militaryInformationLabel.militaryStatus}
                                data={userMilitaryStatus}
                                changeState={this.dropDownMilitaryOnClick}
                                showDropDown={this.state.dropDownMilitaryState}
                                dropDownValue={this.state.dropDownMilitaryValue}
                                selectedDropDownValue={this.dropDownMilitaryOnSelect}
                                itemToDisplay={"value"}
                                errorFlag={this.state.dropDownMilitaryFlag}
                                errorText={this.state.dropDownMilitaryMsg}
                                dropDownPostition={{ position: 'absolute', right: 0, top: scaledHeight(90) }} />

                            <GDropDownComponent
                                dropDownTextName={styles.editProfileLabel}
                                dropDownName={globalString.militaryInformationLabel.militaryBranchService}
                                data={userBranchOfService}
                                changeState={this.dropDownBranchOnClick}
                                showDropDown={this.state.dropDownBranchState}
                                dropDownValue={this.state.dropDownBranchValue}
                                selectedDropDownValue={this.dropDownBranchOnSelect}
                                itemToDisplay={"value"}
                                errorFlag={this.state.dropDownBranchFlag}
                                errorText={this.state.dropDownBranchMsg}
                                dropDownPostition={{ position: 'absolute', right: 0, top: scaledHeight(180) }} />

                            {/* <GDropDownComponent
                                dropDownTextName={styles.editProfileLabel}
                                dropDownName={globalString.militaryInformationLabel.militaryRank}
                                data={tempMilitaryStatusData}
                                changeState={this.dropDownMarineOnClick}
                                showDropDown={this.state.dropDownMarineState}
                                dropDownValue={this.state.dropDownMarineValue}
                                selectedDropDownValue={this.dropDownMarineOnSelect}
                                itemToDisplay={"value"}
                                errorFlag={this.state.dropDownMarineFlag}
                                errorText={this.dropDownMarineMsg}
                                dropDownPostition={{ position: 'absolute', right: 0, top: scaledHeight(270) }} /> */}

                            {this.renderRankDropDown()}

                            <View style={styles.editFlexDirectionColumn}>
                                <Text style={styles.editProfileLabel}>
                                    {globalString.militaryInformationLabel.militaryDateService}
                                </Text>
                            </View>

                            <View style={styles.editFlexDirectionColumn}>
                                <Text style={styles.editProfileLabel}>
                                    {globalString.militaryInformationLabel.militaryDateFrom}
                                </Text>

                                <GDateComponent
                                    minDate={currentdate}
                                    placeholder="MM/DD/YYYY"
                                    date={this.state.dateFromValue}
                                    onDateChange={this.onChangeFromDateValue} />
                            </View>

                            <View style={styles.editFlexDirectionColumn}>
                                <Text style={styles.editProfileLabel}>
                                    {globalString.militaryInformationLabel.militaryDateTo}
                                </Text>

                                <GDateComponent
                                    minDate={currentdate}
                                    placeholder="MM/DD/YYYY"
                                    date={this.state.dateToValue}
                                    onDateChange={this.onChangeToDateValue} />
                            </View>

                            <View style={styles.editFlexDirectionColumn}>
                                <Text style={styles.editProfileLabel}>
                                    {globalString.militaryInformationLabel.militaryCommissionSource}
                                </Text>
                                <GInputComponent
                                    propInputStyle={styles.editAddressInput}
                                    placeholder={""}
                                    onChangeText={this.setValidMilitaryCommission}
                                    value={this.state.militaryCommissionValue}
                                    maxLength={30}
                                    errorFlag={!this.state.isMilitaryCommissionFlag}
                                    errorText={this.state.militaryCommissionMsg} />
                            </View>

                        </View>
                    ) : null}

                    <View style={styles.editFlexDirectionColumn}>
                        <GButtonComponent
                            buttonStyle={styles.cancelButtonStyle}
                            buttonText={globalString.common.cancel}
                            textStyle={styles.cancelButtonText}
                            onPress={this.editMilitaryOnCancel} />
                    </View>

                    <View style={styles.editFlexDirectionColumn}>
                        <GButtonComponent
                            buttonStyle={styles.saveButtonStyle}
                            buttonText={globalString.common.save}
                            textStyle={styles.saveButtonText}
                            onPress={this.saveMilitaryInformations} />
                    </View>

                    <View style={styles.newVictorySection}>
                        <Text style={styles.termsofuseText1}>
                            {globalString.editEmailInformations.editEmailTerms}
                        </Text>
                        <Text style={styles.openInvestment}>
                            {globalString.editEmailInformations.editEmailInvestment}
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

                </ScrollView>
            </View>
        );
    }
}

export default editMilitaryInfoComponent;
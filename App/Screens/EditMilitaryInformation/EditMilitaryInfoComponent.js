import React, { Component } from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import PropTypes from "prop-types";
import { GButtonComponent, GHeaderComponent, GInputComponent, GRadioButtonComponent, GDropDownComponent, GDateComponent, GLoadingSpinner } from '../../CommonComponents';
import globalString from '../../Constants/GlobalStrings';
import ImagesLoad from '../../Images/ImageIndex';
import styles from './styles';

const profileMilitaryService = [
    { index1: 0, question: "Yes" },
    { index2: 1, question: "No" },
];

const tempMilitaryStatusData = [
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

class EditMilitaryInfoComponent extends Component {
    constructor(props) {
        super(props);
        // set true to isLoading if data for this screen yet to be received and wanted to show loader.
        this.state = {
            militaryInfoData: {
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
            }
        };
    }

    componentDidMount() {
        this.militaryDidMount();
    }

    militaryDidMount = () => {
        const { profileState, profileSettingsLookup, getProfileCompositeData } = this.props;
        const { militaryInfoData } = this.state;
        
        if (this.props && profileState && profileState.profileServingMilitary) {
            this.setState({
                militaryInfoData: {
                    ...militaryInfoData,
                    isMilitaryService: profileState.profileServingMilitary
                }
            });
        }

        const payload = [];

        const compositePayloadData = [
            "mil_status",
            "mil_serv_branch"
        ];

        for (let i = 0; i < compositePayloadData.length; i +=1) {
            const tempkey = compositePayloadData[Number(i)];
            if (this.props && profileSettingsLookup && !profileSettingsLookup[tempkey]) {
                payload.push(tempkey);
            }
        }

        getProfileCompositeData(payload);

        if (militaryInfoData.isMilitaryService) {
            this.setState({
                militaryInfoData: {
                    ...militaryInfoData,
                    radioButtonIndex: 0
                }
            });
        } else {
            this.setState({
                militaryInfoData: {
                    ...militaryInfoData,
                    radioButtonIndex: 1
                }
            });
        }
    }

    radioButtonClicked = (index) => () => {
        const { militaryInfoData } = this.state;
        if (index !== militaryInfoData.radioButtonIndex) {
            this.setState({
                militaryInfoData: {
                    ...militaryInfoData,
                    radioButtonIndex: index,
                    radioButton: false
                }
            });
        } else {
            this.setState({
                militaryInfoData: {
                    ...militaryInfoData,
                    radioButton: false
                }
            });
        }

        if (index === 0) {
            this.setState({
                militaryInfoData: {
                    ...militaryInfoData,
                    isMilitaryService: true,
                    radioButtonIndex: 0
                }
            });
        } else {
            this.setState({
                militaryInfoData: {
                    ...militaryInfoData,
                    isMilitaryService: false,
                    radioButtonIndex: 1
                }
            });
        }
    }

    dropDownMilitaryOnClick = () => {
        const { militaryInfoData } = this.state;
        this.setState({
            militaryInfoData: {
                ...militaryInfoData,
                dropDownMilitaryState: !militaryInfoData.dropDownMilitaryState
            }
        });
    }

    dropDownMilitaryOnSelect = (value, index, data) => {
        const { militaryInfoData } = this.state;
        this.setState({
            militaryInfoData: {
                ...militaryInfoData,
                dropDownMilitaryValue: data[index].value,
                dropDownMilitaryState: false,
                dropDownMilitaryMsg: ''
            }
        });
    }

    dropDownBranchOnClick = () => {
        const { militaryInfoData } = this.state;
        this.setState({
            militaryInfoData: {
                ...militaryInfoData,
                dropDownBranchState: !militaryInfoData.dropDownBranchState
            }
        });
    }

    dropDownBranchOnSelect = (value, index, data) => {
        const { militaryInfoData } = this.state;
        const { profileSettingsLookup, getRankData } = this.props;
        this.setState({
            militaryInfoData: {
                ...militaryInfoData,
                dropDownBranchValue: data[index].value,
                dropDownBranchState: false,
                dropDownBranchMsg: '',
                dummyMilitaryStatusData: [],
                dropDownMarineState: false,
                dropDownMarineValue: ''
            }
        });

        payloadMilitaryRank = `mil_rank_${data[index].key}`;

        if (this.props && profileSettingsLookup && !profileSettingsLookup[payloadMilitaryRank]) {
            getRankData(payloadMilitaryRank);
        }
    }

    dropDownMarineOnClick = () => {
        const { militaryInfoData } = this.state;
        this.setState({
            militaryInfoData: {
                ...militaryInfoData,
                dropDownMarineState: !militaryInfoData.dropDownMarineState
            }
        });
    }

    dropDownMarineOnSelect = (value, index, data) => {
        const { militaryInfoData } = this.state;
        this.setState({
            militaryInfoData: {
                ...militaryInfoData,
                dropDownMarineValue: data[index].value,
                dropDownMarineState: false,
                dropDownMarineMsg: ''
            }
        });
    }

    onChangeFromDateValue = (date) => {
        const { militaryInfoData } = this.state;
        this.setState({
            militaryInfoData: {
                ...militaryInfoData,
                dateFromValue: date
            }
        });
    }

    onChangeToDateValue = (date) => {
        const { militaryInfoData } = this.state;
        this.setState({
            militaryInfoData: {
                ...militaryInfoData,
                dateToValue: date
            }
        });
    }

    editMilitaryOnCancel = () => {
        const { navigation } = this.props;
        navigation.navigate('profileSettings');
    }

    saveMilitaryInformations = () => {
        const { militaryInfoData } = this.state;
        if (militaryInfoData.isMilitaryService) {
            if (militaryInfoData.dropDownMilitaryValue === '') {
                this.setState({
                    militaryInfoData: {
                        ...militaryInfoData,
                        dropDownMilitaryFlag: false,
                        dropDownMilitaryMsg: 'Select valid military status'
                    }
                });
            }

            if (militaryInfoData.dropDownBranchValue === '') {
                this.setState({
                    militaryInfoData: {
                        ...militaryInfoData,
                        dropDownBranchFlag: false,
                        dropDownBranchMsg: 'Select valid military branch'
                    }
                });
            }

            if (militaryInfoData.dropDownMarineValue === '') {
                this.setState({
                    militaryInfoData: {
                        ...militaryInfoData,
                        dropDownMarineFlag: false,
                        dropDownMarineMsg: 'Select valid military rank'
                    }
                });
            }

            if (militaryInfoData.dropDownMilitaryValue !== '' &&
                militaryInfoData.dropDownBranchValue !== '' &&
                militaryInfoData.dropDownMarineValue !== '') {
                this.manageMilitaryInformations();
            }
        } else {
            this.manageMilitaryInformations();
        }
    }

    manageMilitaryInformations = () => {
        const { saveProfileData, navigation } = this.props;
        const payloadData = this.getMilitaryData();
        saveProfileData("addMilitaryInformation", payloadData);
        navigation.navigate('profileSettings');
    }

    getMilitaryData = () => {
        const { militaryInfoData } = this.state;
        const { profileState } = this.props;
        let profileMilitaryData = {};
        if (this.props && profileState) {
            profileMilitaryData = {
                ...profileState,
                "profileServingMilitary": militaryInfoData.isMilitaryService,
                "profileMilitaryInformation": {
                    profileMilitaryStatus: militaryInfoData.dropDownMilitaryValue,
                    profileMilitaryBranch: militaryInfoData.dropDownBranchValue,
                    profileMilitaryRank: militaryInfoData.dropDownMarineValue,
                    profileMilitaryFromDate: '',
                    profileMilitaryToDate: '',
                    profileMilitrayCommission: ''
                }
            };
        }
        return profileMilitaryData;
    }

    renderRankDropDown = () => {

        const { profileSettingsLookup } = this.props;
        const { militaryInfoData } = this.state;

        if (this.props && profileSettingsLookup &&
            profileSettingsLookup[payloadMilitaryRank] &&
            profileSettingsLookup[payloadMilitaryRank].value) {
            militaryInfoData.dummyMilitaryStatusData = profileSettingsLookup[payloadMilitaryRank].value;
        }

        return (
            <GDropDownComponent
                dropDownTextName={styles.editProfileLabel}
                dropDownName={globalString.militaryInformationLabel.militaryRank}
                data={militaryInfoData.dummyMilitaryStatusData}
                changeState={this.dropDownMarineOnClick}
                showDropDown={militaryInfoData.dropDownMarineState}
                dropDownValue={militaryInfoData.dropDownMarineValue}
                selectedDropDownValue={this.dropDownMarineOnSelect}
                itemToDisplay="value"
                errorFlag={militaryInfoData.dropDownMarineFlag}
                errorText={militaryInfoData.dropDownMarineMsg}
            />
        );
    }

    setValidMilitaryCommission = (text) => {
        const { militaryInfoData } = this.state;
        this.setState({
            militaryInfoData: {
                ...militaryInfoData,
                militaryCommissionValue: text,
                isMilitaryCommissionFlag: true
            }
        });

        if (militaryInfoData.militaryCommissionValue.length.toString() === "29") {
            this.setState({
                militaryInfoData: {
                    ...militaryInfoData,
                    isMilitaryCommissionFlag: false,
                    militaryCommissionMsg: 'Max. character length exceeded'
                }
            });
        }
    }

    render() {

        const date = new Date().getDate(); // Current Date
        const month = new Date().getMonth() + 1; // Current Month
        const year = new Date().getFullYear(); // Current Year
        const currentdate = `${month}-${date}-${year}`;

        let userMilitaryStatus = tempMilitaryStatusData;
        let userBranchOfService = tempMilitaryStatusData;

        const { profileSettingsLookup, accOpeningData, navigation } = this.props;
        const { militaryInfoData } = this.state;

        const tempMilitaryStatus = 'mil_status';
        const tempMilitaryService = 'mil_serv_branch';

        if (this.props && profileSettingsLookup &&
            profileSettingsLookup[tempMilitaryStatus] &&
            profileSettingsLookup[tempMilitaryStatus].value) {
            userMilitaryStatus = profileSettingsLookup[tempMilitaryStatus].value;
        }

        if (this.props && profileSettingsLookup &&
            profileSettingsLookup[tempMilitaryService] &&
            profileSettingsLookup[tempMilitaryService].value) {
            userBranchOfService = profileSettingsLookup[tempMilitaryService].value;
        }

        return (

            <View style={styles.container}>
                {
                    (accOpeningData.isLoading || profileSettingsLookup.isLoading) && <GLoadingSpinner />
                }
                <GHeaderComponent
                    navigation={navigation}
                />

                <ScrollView style={styles.militaryInfoFlex}>

                    <View style={styles.settingsView}>
                        <Text style={styles.settingsInfo}>
                            {globalString.editProfilePageValue.editAddressInfoHead}
                        </Text>
                        <Text style={styles.militaryInfoTitle}>
                            {globalString.editMilitaryInfo.militaryInfoTitle}
                        </Text>
                    </View>

                    <View style={styles.settingsView}>
                        <Text style={styles.settingsHeadline}>
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
                                index === militaryInfoData.radioButtonIndex ? (
                                    <GRadioButtonComponent
                                        onPress={this.radioButtonClicked(index)}
                                        selected
                                        questions={item.question}
                                    />
                                )
                                    : (
                                        <GRadioButtonComponent
                                            onPress={this.radioButtonClicked(index)}
                                            selected={false}
                                            questions={item.question}
                                        />
                                    ))}
                        </View>
                    </View>

                    {militaryInfoData.isMilitaryService ? (
                        <View>
                            <GDropDownComponent
                                dropDownTextName={styles.editProfileLabel}
                                dropDownName={globalString.militaryInformationLabel.militaryStatus}
                                data={userMilitaryStatus}
                                changeState={this.dropDownMilitaryOnClick}
                                showDropDown={militaryInfoData.dropDownMilitaryState}
                                dropDownValue={militaryInfoData.dropDownMilitaryValue}
                                selectedDropDownValue={this.dropDownMilitaryOnSelect}
                                itemToDisplay="value"
                                errorFlag={militaryInfoData.dropDownMilitaryFlag}
                                errorText={militaryInfoData.dropDownMilitaryMsg}
                            />

                            <GDropDownComponent
                                dropDownTextName={styles.editProfileLabel}
                                dropDownName={globalString.militaryInformationLabel.militaryBranchService}
                                data={userBranchOfService}
                                changeState={this.dropDownBranchOnClick}
                                showDropDown={militaryInfoData.dropDownBranchState}
                                dropDownValue={militaryInfoData.dropDownBranchValue}
                                selectedDropDownValue={this.dropDownBranchOnSelect}
                                itemToDisplay="value"
                                errorFlag={militaryInfoData.dropDownBranchFlag}
                                errorText={militaryInfoData.dropDownBranchMsg}
                            />

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
                                    date={militaryInfoData.dateFromValue}
                                    onDateChange={this.onChangeFromDateValue}
                                />
                            </View>

                            <View style={styles.editFlexDirectionColumn}>
                                <Text style={styles.editProfileLabel}>
                                    {globalString.militaryInformationLabel.militaryDateTo}
                                </Text>

                                <GDateComponent
                                    minDate={currentdate}
                                    placeholder="MM/DD/YYYY"
                                    date={militaryInfoData.dateToValue}
                                    onDateChange={this.onChangeToDateValue}
                                />
                            </View>

                            <View style={styles.editFlexDirectionColumn}>
                                <Text style={styles.editProfileLabel}>
                                    {globalString.militaryInformationLabel.militaryCommissionSource}
                                </Text>
                                <GInputComponent
                                    propInputStyle={styles.editAddressInput}
                                    placeholder=""
                                    onChangeText={this.setValidMilitaryCommission}
                                    value={militaryInfoData.militaryCommissionValue}
                                    maxLength={30}
                                    errorFlag={!militaryInfoData.isMilitaryCommissionFlag}
                                    errorText={militaryInfoData.militaryCommissionMsg}
                                />
                            </View>

                        </View>
                    ) : null}

                    <View style={styles.editFlexDirectionColumn}>
                        <GButtonComponent
                            buttonStyle={styles.cancelButtonStyle}
                            buttonText={globalString.common.cancel}
                            textStyle={styles.cancelButtonText}
                            onPress={this.editMilitaryOnCancel}
                        />
                    </View>

                    <View style={styles.editFlexDirectionColumn}>
                        <GButtonComponent
                            buttonStyle={styles.saveButtonStyle}
                            buttonText={globalString.common.save}
                            textStyle={styles.saveButtonText}
                            onPress={this.saveMilitaryInformations}
                        />
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

                </ScrollView>
            </View>
        );
    }
}

EditMilitaryInfoComponent.propTypes = {
    navigation: PropTypes.instanceOf(Object).isRequired,
    profileState: PropTypes.instanceOf(Object),
    accOpeningData: PropTypes.instanceOf(Object),
    profileSettingsLookup: PropTypes.instanceOf(Object),
    getProfileCompositeData: PropTypes.func,
    getRankData: PropTypes.func,
    saveProfileData: PropTypes.func
};

EditMilitaryInfoComponent.defaultProps = {
    profileState: {},
    accOpeningData: {},
    profileSettingsLookup: {},
    getProfileCompositeData: null,
    getRankData: null,
    saveProfileData: null
};

export default EditMilitaryInfoComponent;
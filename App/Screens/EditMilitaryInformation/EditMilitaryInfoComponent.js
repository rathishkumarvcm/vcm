import React, { Component } from 'react';
import { Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { GButtonComponent, GHeaderComponent, GIcon, GInputComponent, GRadioButtonComponent, GDropDownComponent, GDateComponent } from '../../CommonComponents';
import { scaledHeight } from '../../Utils/Resolution';
import globalString from '../../Constants/GlobalStrings';

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

class editMilitaryInfoComponent extends Component {
    constructor(props) {
        super(props);
        //set true to isLoading if data for this screen yet to be received and wanted to show loader.
        this.state = {
            isLoading: false,
            enableBiometric: false,
            faceIdEnrolled: false,
            touchIdEnrolled: false,
            radioButton: false,
            radioButtonIndex: 1,
            isMilitaryService: false,

            militaryFromDate: '',
            militaryToDate: '',
            militaryCommissionSource: '',

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
            dropDownMarineMsg: ''
        };
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

        if (index == 0) {
            this.setState({
                isMilitaryService: true
            })
        } else {
            this.setState({
                isMilitaryService: false
            })
        }
    }

    dropDownMilitaryOnClick = () => {
        this.setState({
            dropDownMilitaryState: !this.state.dropDownMilitaryState
        });
    }

    dropDownMilitaryOnSelect = (valueMilitaryStatus) => {
        this.setState({
            dropDownMilitaryValue: valueMilitaryStatus.value,
            dropDownMilitaryState: false,
            dropDownMilitaryMsg: ''
        });
    }

    dropDownBranchOnClick = () => {
        this.setState({
            dropDownBranchState: !this.state.dropDownBranchState
        });
    }

    dropDownBranchOnSelect = (valueBranch) => {
        this.setState({
            dropDownBranchValue: valueBranch.value,
            dropDownBranchFlag: false,
            dropDownBranchMsg: ''
        });
    }

    dropDownMarineOnClick = () => {
        this.setState({
            dropDownMarineState: !this.state.dropDownMarineState
        });
    }

    dropDownMarineOnSelect = (valueMarine) => {
        this.setState({
            dropDownMarineValue: valueMarine.value,
            dropDownMarineFlag: false,
            dropDownMarineMsg: ''
        });
    }

    componentDidMount() { }

    editMilitaryOnCancel = () => this.props.navigation.navigate('profileSettings');

    render() {

        const date = new Date().getDate(); //Current Date
        const month = new Date().getMonth() + 1; //Current Month
        const year = new Date().getFullYear(); //Current Year
        const currentdate = month + "-" + date + "-" + year;

        return (

            <View style={styles.container}>
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
                                data={tempMilitaryStatusData}
                                changeState={this.dropDownMilitaryOnClick}
                                showDropDown={this.state.dropDownMilitaryState}
                                dropDownValue={this.state.dropDownMilitaryValue}
                                selectedDropDownValue={this.dropDownMilitaryOnSelect}
                                itemToDisplay={"value"}
                                errorFlag={this.state.dropDownMilitaryFlag}
                                errorText={this.dropDownMilitaryMsg}
                                dropDownPostition={{ position: 'absolute', right: 0, top: scaledHeight(90) }} />

                            <GDropDownComponent
                                dropDownTextName={styles.editProfileLabel}
                                dropDownName={globalString.militaryInformationLabel.militaryBranchService}
                                data={tempMilitaryStatusData}
                                changeState={this.dropDownBranchOnClick}
                                showDropDown={this.state.dropDownBranchState}
                                dropDownValue={this.state.dropDownBranchValue}
                                selectedDropDownValue={this.dropDownBranchOnSelect}
                                itemToDisplay={"value"}
                                errorFlag={this.state.dropDownBranchFlag}
                                errorText={this.dropDownBranchMsg}
                                dropDownPostition={{ position: 'absolute', right: 0, top: scaledHeight(180) }} />

                            <GDropDownComponent
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
                                dropDownPostition={{ position: 'absolute', right: 0, top: scaledHeight(270) }} />

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
                                    placeholder="MM/DD/YYYY" />
                            </View>

                            <View style={styles.editFlexDirectionColumn}>
                                <Text style={styles.editProfileLabel}>
                                    {globalString.militaryInformationLabel.militaryDateTo}
                                </Text>

                                <GDateComponent
                                    minDate={currentdate}
                                    placeholder="MM/DD/YYYY" />
                            </View>

                            <View style={styles.editFlexDirectionColumn}>
                                <Text style={styles.editProfileLabel}>
                                    {globalString.militaryInformationLabel.militaryCommissionSource}
                                </Text>
                                <GInputComponent
                                propInputStyle={styles.editAddressInput}
                                    placeholder={""} />
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
                            textStyle={styles.saveButtonText} />
                    </View>

                    <View style={styles.editFlexDirectionColumn}>
                        <Text style={styles.editMilitarySecurity}>
                            {globalString.editEmailInformations.editEmailSecurity}
                        </Text>
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
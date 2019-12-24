import React, { Component } from 'react';
import { Text, View, Image, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import { styles } from './styles';
import { GButtonComponent, GHeaderComponent, GIcon, GInputComponent, GRadioButtonComponent, GDropDownComponent } from '../../CommonComponents';
import { scaledHeight } from '../../Utils/Resolution';
import globalStrings from '../../Constants/GlobalStrings';

const annualIncomeData = [
    {
        "key": "O",
        "value": "9700 and below",
        "taxbracket": "10"
    },
    {
        "key": "9701",
        "value": "9701-39475",
        "taxbracket": "12"
    },
    {
        "key": "39476",
        "value": "39476-84200",
        "taxbracket": "22"
    }
];

const netWorthData = [
    {
        "key": "349",
        "value": "34999 and below"
    },
    {
        "key": "35-49",
        "value": "35000-49999"
    },
    {
        "key": "50-249",
        "value": "50000-249999"
    }
];

const taxFillingStatusData = [
    {
        "key": "sing",
        "value": "Single individual"
    },
    {
        "key": "mar_joi",
        "value": "Married person fillingjointly or surviving spouse"
    },
    {
        "key": "mar_sep",
        "value": "Married person fillingseperately"
    }
];

const newData = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'First State',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Second State',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third State',
    },
];

class editAddFinancialInfoComponent extends Component {
    constructor(props) {
        super(props);
        //set true to isLoading if data for this screen yet to be received and wanted to show loader.
        this.state = {
            isLoading: false,
            enableBiometric: false,
            faceIdEnrolled: false,
            touchIdEnrolled: false,
            taxBracketValue: '',

            dropDownFinancialState: false,
            dropDownFinancialValue: '',
            dropDownFinancialFlag: false,
            dropDownFinancialMsg: '',

            dropDownNetState: false,
            dropDownNetValue: '',
            dropDownNetFlag: false,
            dropDownNetMsg: '',

            dropDownTaxFillState: false,
            dropDownTaxFillValue: '',
            dropDownTaxFillFlag: false,
            dropDownTaxFillMsg: '',
        };
    }

    dropDownFinancialClick = () => {
        this.setState({
            dropDownFinancialState: !this.state.dropDownFinancialState
        });
    }

    dropDownFinancialSelect = (value, index, data) => {
        let item = data[index];
        this.setState({
            dropDownFinancialValue: item.key,
            dropDownFinancialState: false,
            taxBracketValue: item.taxbracket,
            dropDownFinancialFlag: false
        });
        console.log('@@@@@@ Financial Values ::', this.state.dropDownFinancialValue + ' ' + this.state.taxBracketValue);
    }

    dropDownNetClick = () => {
        this.setState({
            dropDownNetState: !this.state.dropDownNetState
        });
    }

    dropDownNetSelect = (value, index, data) => {
        this.setState({
            dropDownNetValue: data[index].value,
            dropDownNetState: false,
            dropDownNetFlag: false
        });
        console.log('@@@@@@ Financial Values ::', this.state.dropDownNetValue);
    }

    dropDownTaxFillClick = () => {
        this.setState({
            dropDownTaxFillState: !this.state.dropDownTaxFillState
        });
    }

    dropDownTaxFillSelect = (value, index, data) => {
        this.setState({
            dropDownTaxFillValue: data[index].value,
            dropDownTaxFillState: false,
            dropDownTaxFillFlag: false
        });
        console.log('@@@@@@ Financial Values ::', this.state.dropDownTaxFillValue);
    }

    componentDidMount() {

        // Financial Informations 

        if (this.props && this.props.profileState && this.props.profileState.financialInformations && this.props.profileState.financialInformations.profileAnnualIncome) {
            this.setState({
                dropDownFinancialValue: this.props.profileState.financialInformations.profileAnnualIncome
            });
        }

        if (this.props && this.props.profileState && this.props.profileState.financialInformations && this.props.profileState.financialInformations.profileTaxBracket) {
            this.setState({
                taxBracketValue: this.props.profileState.financialInformations.profileTaxBracket
            });
        }

        if (this.props && this.props.profileState && this.props.profileState.financialInformations && this.props.profileState.financialInformations.profileNetWorth) {
            this.setState({
                dropDownNetValue: this.props.profileState.financialInformations.profileNetWorth
            });
        }

        if (this.props && this.props.profileState && this.props.profileState.financialInformations && this.props.profileState.financialInformations.profileTaxFilling) {
            this.setState({
                dropDownTaxFillValue: this.props.profileState.financialInformations.profileTaxFilling
            });
        }

        let payload = [];

        const compositePayloadData = [
            "annual_income",
            "net_worth",
            "tax_filling_status"
        ];

        for (let i = 0; i < compositePayloadData.length; i++) {
            let tempkey = compositePayloadData[i];
            if (this.props && this.props.profileSettingsLookup && !this.props.profileSettingsLookup[tempkey]) {
                payload.push(tempkey);
            }
        }

        this.props.getProfileCompositeData(payload);
    }

    navigationSuccess = () => {

        if (this.state.dropDownFinancialValue === '') {
            this.setState({
                dropDownFinancialFlag: true,
                dropDownFinancialMsg: globalString.profileValidationMessages.validateFinancialInformation
            });
        }

        if (this.state.dropDownNetValue === '') {
            this.setState({
                dropDownNetFlag: true,
                dropDownNetMsg: globalStrings.profileValidationMessages.validateNetWorth
            });
        }

        if (this.state.dropDownTaxFillValue === '') {
            this.setState({
                dropDownTaxFillFlag: true,
                dropDownTaxFillMsg: globalStrings.profileValidationMessages.validateTaxFilling
            });
        }

        if (this.state.dropDownFinancialValue != ''
            && this.state.dropDownNetValue != ''
            && this.state.dropDownTaxFillValue != '') {
                this.manageFinancialInformations();
        }
    }

    manageFinancialInformations = () => {
        const payloadData = this.getProfilePayloadData();
        console.log("&&&&&&&&&&&&&&&&&&&& Financial Manage ::: ", payloadData);
        this.props.saveProfileData("editFinancialInformations", payloadData);
        this.props.navigation.navigate('profileSettings');
    }

    getProfilePayloadData = () => {
        let profilePayload = {};
        if (this.props && this.props.profileState) {
            profilePayload = {
                ...this.props.profileState,
                "financialInformations": {
                    profileAnnualIncome: this.state.dropDownFinancialValue,
                    profileTaxBracket: this.state.taxBracketValue,
                    profileNetWorth: this.state.dropDownNetValue,
                    profileTaxFilling: this.state.dropDownTaxFillValue
                }
            };
        }
        return profilePayload;
    }

    addFinancialOnCancel = () => this.props.navigation.navigate('profileSettings');

    render() {

        console.log("Financial Data", JSON.stringify(this.props.profileSettingsLookup));

        let userAnnualIncome = annualIncomeData;
        let userNetWorth = netWorthData;
        let userTaxFilling = taxFillingStatusData;

        if (this.props && this.props.profileSettingsLookup &&
            this.props.profileSettingsLookup.annual_income &&
            this.props.profileSettingsLookup.annual_income.value) {
            userAnnualIncome = this.props.profileSettingsLookup.annual_income.value;
        }

        if (this.props && this.props.profileSettingsLookup &&
            this.props.profileSettingsLookup.net_worth &&
            this.props.profileSettingsLookup.net_worth.value) {
            userNetWorth = this.props.profileSettingsLookup.net_worth.value;
        }

        if (this.props && this.props.profileSettingsLookup &&
            this.props.profileSettingsLookup.tax_filling_status &&
            this.props.profileSettingsLookup.tax_filling_status.value) {
            userTaxFilling = this.props.profileSettingsLookup.tax_filling_status.value;
        }

        return (
            <View style={styles.container}>
                <GHeaderComponent
                    navigation={this.props.navigation} />

                <ScrollView style={{ flex: 0.85 }}>

                    <View style={styles.settingsView}>
                        <Text style={styles.settingsInfo}>
                            {globalStrings.editProfilePageValue.editAddressInfoHead}
                        </Text>
                        <Text style={[styles.settingsInfo, styles.editLabelBold]}>
                            {globalStrings.addFinancialInformations.addFinancialTitle}
                        </Text>
                    </View>

                    <View style={styles.settingsView}>
                        <Text style={styles.financialInfoLabel}>
                            {globalStrings.addFinancialInformations.addFinancialTitle}
                        </Text>
                    </View>

                    <View style={styles.settingsBorder} />

                    <GDropDownComponent
                        dropDownTextName={styles.financialTextLabel}
                        dropDownName={globalStrings.addFinancialInformations.annualIncome}
                        data={userAnnualIncome}
                        changeState={this.dropDownFinancialClick}
                        showDropDown={this.state.dropDownFinancialState}
                        dropDownValue={this.state.dropDownFinancialValue}
                        selectedDropDownValue={this.dropDownFinancialSelect}
                        itemToDisplay={"value"}
                        errorFlag={this.state.dropDownFinancialFlag}
                        errorText={this.dropDownFinancialMsg}
                        dropDownPostition={{ position: 'absolute', right: 0, top: scaledHeight(200) }} />

                    <View style={styles.financialViewNormal}>
                        <Text style={styles.financialTextLabel}>
                            {globalStrings.addFinancialInformations.taxBracket}
                        </Text>
                        <Text style={styles.financialValueLabel}>
                            {this.state.taxBracketValue + '%'}
                        </Text>
                    </View>

                    <GDropDownComponent
                        dropDownTextName={styles.financialTextLabel}
                        dropDownName={globalStrings.addFinancialInformations.netWorth}
                        data={userNetWorth}
                        changeState={this.dropDownNetClick}
                        showDropDown={this.state.dropDownNetState}
                        dropDownValue={this.state.dropDownNetValue}
                        selectedDropDownValue={this.dropDownNetSelect}
                        itemToDisplay={"value"}
                        errorFlag={this.state.dropDownNetFlag}
                        errorText={this.dropDownNetMsg}
                        dropDownPostition={{ position: 'absolute', right: 0, top: scaledHeight(380) }} />
 
                    <GDropDownComponent
                        dropDownTextName={styles.financialTextLabel}
                        dropDownName={globalStrings.addFinancialInformations.taxFillingStatus}
                        data={userTaxFilling}
                        changeState={this.dropDownTaxFillClick}
                        showDropDown={this.state.dropDownTaxFillState}
                        dropDownValue={this.state.dropDownTaxFillValue}
                        selectedDropDownValue={this.dropDownTaxFillSelect}
                        itemToDisplay={"value"}
                        errorFlag={this.state.dropDownTaxFillFlag}
                        errorText={this.dropDownTaxFillMsg}
                        dropDownPostition={{ position: 'absolute', right: 0, top: scaledHeight(500) }} />

                    <View style={styles.editFlexDirectionColumn}>
                        <GButtonComponent
                            buttonStyle={styles.cancelButtonStyle}
                            buttonText={globalStrings.common.cancel}
                            textStyle={styles.cancelButtonText}
                            onPress={this.addFinancialOnCancel}
                        />
                    </View>

                    <View style={styles.editFlexDirectionColumn}>
                        <GButtonComponent
                            buttonStyle={styles.saveButtonStyle}
                            buttonText={globalStrings.common.save}
                            onPress={this.navigationSuccess}
                            textStyle={styles.saveButtonText} />
                    </View>

                    <View style={styles.editFlexDirectionColumn}>
                        <Text style={[styles.openInvestment, lineHeight = 40]}>
                            {globalStrings.addFinancialInformations.financialSecurity}
                        </Text>
                    </View>

                    <View style={styles.newVictorySection}>
                        <Text style={styles.termsofuseText1}>
                            {globalStrings.addFinancialInformations.financialInvesting}
                        </Text>
                        <Text style={[styles.openInvestment, lineHeight = 30]}>
                            {globalStrings.addFinancialInformations.financialOpenInvestment}
                        </Text>
                    </View>

                    <View style={styles.connectWithUs}>
                        <Image
                            source={require("../../Images/logo.png")} />
                    </View>

                    <View style={styles.whiteBackground}>
                        <Text style={styles.editLabelInputMedium}>
                            {globalStrings.common.connectWithUs}
                        </Text>
                    </View>

                    <View style={styles.whiteBackground}>
                        <Image style={styles.imageWidthHeight}
                            source={require("../../Images/twitterlogo.png")}
                        />
                        <Image style={styles.imageWidthHeight}
                            source={require("../../Images/linkedinlogo.png")}
                        />
                    </View>

                    <View style={styles.privacyAgreement}>
                        <Text style={styles.privacyText}>
                            {globalStrings.common.privacyPolicy}
                        </Text>

                        <Text style={styles.privacyText}>
                            {globalStrings.common.fundDocuments}
                        </Text>
                    </View>

                    <View style={styles.privacyAgreement}>
                        <Text style={styles.privacyText}>
                            {globalStrings.common.userAgreement}
                        </Text>

                        <Text style={styles.privacyText}>
                            {globalStrings.common.support}
                        </Text>
                    </View>

                    <View style={styles.copyRightSection}>
                        <Text style={styles.copyRightText}>
                            {globalStrings.common.copyRights}
                        </Text>
                    </View>

                </ScrollView>
            </View>

        );
    }
}

export default editAddFinancialInfoComponent;
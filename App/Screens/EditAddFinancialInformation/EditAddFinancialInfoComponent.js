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

    dropDownFinancialSelect = (valueFinancial) => {
        this.setState({
            dropDownFinancialValue: valueFinancial.value,
            dropDownFinancialState: false,
            taxBracketValue: valueFinancial.taxbracket + '%',
            dropDownFinancialFlag: false
        });
    }

    dropDownNetClick = () => {
        this.setState({
            dropDownNetState: !this.state.dropDownNetState
        });
    }

    dropDownNetSelect = (valueNetWorth) => {
        this.setState({
            dropDownNetValue: valueNetWorth.value,
            dropDownNetState: false,
            dropDownNetFlag: false
        });
    }

    dropDownTaxFillClick = () => {
        this.setState({
            dropDownTaxFillState: !this.state.dropDownTaxFillState
        });
    }

    dropDownTaxFillSelect = (valueTaxFilling) => {
        this.setState({
            dropDownTaxFillValue: valueTaxFilling.value,
            dropDownTaxFillState: false,
            dropDownTaxFillFlag: false
        })
    }

    componentDidMount() {
        let payload = [];

        const compositePayloadData = [
            "annual_income",
            "net_worth",
            "tax_filling_status"
        ];

        for (let i = 0; i < compositePayloadData.length; i++) {
            let tempkey = compositePayloadData[i];
            if (this.props && this.props.profileSettingsLookup && !this.props.profileSettingsLookup[tempkey]) {
                payload.push(tempkey)
            }
        }

        this.props.getProfileCompositeData(payload);
    }

    addFinancialOnCalcel = () => this.props.navigation.navigate('profileSettings');

    render() {

        console.log("Financial Data", JSON.stringify(this.props.profileSettingsLookup));

        let userAnnualIncome = annualIncomeData;
        let userNetWorth = netWorthData;
        let userTaxFilling = taxFillingStatusData;

        if (this.props && this.props.profileSettingsLookup &&
            this.props.profileSettingsLookup.annual_income &&
            this.props.profileSettingsLookup.annual_income.value) {
            userAnnualIncome = this.props.profileSettingsLookup.annual_income.value
        }

        if (this.props && this.props.profileSettingsLookup &&
            this.props.profileSettingsLookup.net_worth &&
            this.props.profileSettingsLookup.net_worth.value) {
            userNetWorth = this.props.profileSettingsLookup.net_worth.value
        }

        if (this.props && this.props.profileSettingsLookup &&
            this.props.profileSettingsLookup.tax_filling_status &&
            this.props.profileSettingsLookup.tax_filling_status.value) {
            userTaxFilling = this.props.profileSettingsLookup.tax_filling_status.value
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

                    <View style={styles.settingsBorder}></View>

                    <GDropDownComponent
                        dropDownTextName={styles.financialTextLabel}
                        dropDownName={globalStrings.addFinancialInformations.annualIncome}
                        data={userAnnualIncome}
                        changeState={this.dropDownFinancialClick}
                        showDropDown={this.state.dropDownFinancialState}
                        dropDownValue={this.state.dropDownFinancialValue}
                        selectedDropDownValue={this.dropDownFinancialSelect}
                        itemToDisplay={"value"}
                        dropDownPostition={{ position: 'absolute', right: 0, top: scaledHeight(200) }} />

                    <View style={styles.financialViewNormal}>
                        <Text style={styles.financialTextLabel}>
                            {globalStrings.addFinancialInformations.taxBracket}
                        </Text>
                        <Text style={styles.financialValueLabel}>
                            {this.state.taxBracketValue}
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
                        dropDownPostition={{ position: 'absolute', right: 0, top: scaledHeight(500) }} />

                    <View style={styles.editFlexDirectionColumn}>
                        <GButtonComponent
                            buttonStyle={styles.cancelButtonStyle}
                            buttonText={globalStrings.common.cancel}
                            textStyle={styles.cancelButtonText}
                            onPress={this.addFinancialOnCalcel} />
                    </View>

                    <View style={styles.editFlexDirectionColumn}>
                        <GButtonComponent
                            buttonStyle={styles.saveButtonStyle}
                            buttonText={globalStrings.common.save}
                            textStyle={styles.saveButtonText} />
                    </View>

                    <View style={styles.editFlexDirectionColumn}>
                        <Text style={styles.financialSecurityLabel}>
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
                            source={require("../../Images/twitterlogo.png")} />
                        <Image style={styles.imageWidthHeight}
                            source={require("../../Images/linkedinlogo.png")} />
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
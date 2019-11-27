import React, { Component } from 'react';
import { Text, View, Image, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import { styles } from './styles';
import { GButtonComponent, GHeaderComponent, GIcon, GInputComponent, GRadioButtonComponent } from '../../CommonComponents';
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

class editAddFinancialInfoComponent extends Component {
    constructor(props) {
        super(props);
        //set true to isLoading if data for this screen yet to be received and wanted to show loader.
        this.state = {
            isLoading: false,
            enableBiometric: false,
            faceIdEnrolled: false,
            touchIdEnrolled: false,
            dropDownFinancialState: false,
            dropDownFinancialValue: '',
            dropDownNetState: false,
            dropDownNetValue: '',
            dropDownTaxFillState: false,
            dropDownTaxFillValue: '',
            taxBracketValue: ''
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
            taxBracketValue: valueFinancial.taxbracket + '%'
        });
    }

    dropDownNetClick = () => {
        this.setState({
            dropDownNetState: !this.state.dropDownNetState
        });
    }

    dropDownNetSelect = (valueNetWorth) => {
        this.setState({
            dropDownNetValue: valueNetWorth,
            dropDownNetState: false
        });
    }

    dropDownTaxFillClick = () => {
        this.setState({
            dropDownTaxFillState: !this.state.dropDownTaxFillState
        });
    }

    dropDownTaxFillSelect = (valueTaxFilling) => {
        this.setState({
            dropDownTaxFillValue: valueTaxFilling,
            dropDownTaxFillState: false
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

                    <View style={styles.financialView}>
                        <View>
                            <Text style={styles.financialTextLabel}>
                                {globalStrings.addFinancialInformations.annualIncome}
                            </Text>

                            <TouchableOpacity style={styles.financialFlexRow}
                                onPress={this.dropDownFinancialClick}>
                                <GInputComponent
                                    propInputStyle={styles.userIDTextBox1}
                                    placeholder={""}
                                    editable={false}
                                    value={this.state.dropDownFinancialValue} />

                                <TouchableOpacity style={styles.financialDropDown}
                                    onPress={this.dropDownFinancialClick}>
                                    <GIcon
                                        name="md-arrow-dropdown"
                                        type="ionicon"
                                        size={20}
                                        color="black" />
                                </TouchableOpacity>
                            </TouchableOpacity>

                            {this.state.dropDownFinancialState &&
                                <View style={styles.editDropDownSelect} >
                                    <FlatList
                                        data={userAnnualIncome}
                                        renderItem={({ item }) =>
                                            (<TouchableOpacity style={{ height: 33 }}
                                                onPress={() => this.dropDownFinancialSelect(item)}>
                                                <Text style={{ fontSize: scaledHeight(16) }}> {item.value} </Text>
                                            </TouchableOpacity>)
                                        }
                                        keyExtractor={item => item.key}
                                    />
                                </View>}
                        </View>
                    </View>

                    <View style={styles.financialViewNormal}>
                        <Text style={styles.financialTextLabel}>
                            {globalStrings.addFinancialInformations.taxBracket}
                        </Text>
                        <Text style={styles.financialValueLabel}>
                            {this.state.taxBracketValue}
                        </Text>
                    </View>

                    <View style={styles.financialView}>
                        <View>
                            <Text style={styles.financialTextLabel}>
                                {globalStrings.addFinancialInformations.netWorth}
                            </Text>

                            <TouchableOpacity style={styles.financialFlexRow}
                                onPress={this.dropDownNetClick}>
                                <GInputComponent
                                    propInputStyle={styles.userIDTextBox1}
                                    placeholder={""}
                                    editable={false}
                                    value={this.state.dropDownNetValue} />

                                <TouchableOpacity style={styles.financialDropDown}
                                    onPress={this.dropDownNetClick}>
                                    <GIcon
                                        name="md-arrow-dropdown"
                                        type="ionicon"
                                        size={20}
                                        color="black" />
                                </TouchableOpacity>
                            </TouchableOpacity>

                            {this.state.dropDownNetState &&
                                <View style={styles.editDropDownSelect} >
                                    <FlatList
                                        data={userNetWorth}
                                        renderItem={({ item }) =>
                                            (<TouchableOpacity style={{ height: 33 }}
                                                onPress={() => this.dropDownNetSelect(item.value)}>
                                                <Text style={{ fontSize: scaledHeight(16) }}> {item.value} </Text>
                                            </TouchableOpacity>)
                                        }
                                        keyExtractor={item => item.key}
                                    />
                                </View>}
                        </View>
                    </View>

                    <View style={styles.financialView}>
                        <View>
                            <Text style={styles.financialTextLabel}>
                                {globalStrings.addFinancialInformations.taxFillingStatus}
                            </Text>

                            <TouchableOpacity style={styles.financialFlexRow}
                                onPress={this.dropDownTaxFillClick}>
                                <GInputComponent
                                    propInputStyle={styles.userIDTextBox1}
                                    placeholder={""}
                                    editable={false}
                                    value={this.state.dropDownTaxFillValue} />

                                <TouchableOpacity style={styles.financialDropDown}
                                    onPress={this.dropDownTaxFillClick}>
                                    <GIcon
                                        name="md-arrow-dropdown"
                                        type="ionicon"
                                        size={20}
                                        color="black" />
                                </TouchableOpacity>
                            </TouchableOpacity>

                            {this.state.dropDownTaxFillState &&
                                <View style={styles.editDropDownSelect} >
                                    <FlatList
                                        data={userTaxFilling}
                                        renderItem={({ item }) =>
                                            (<TouchableOpacity style={{ height: 33 }}
                                                onPress={() => this.dropDownTaxFillSelect(item.value)}>
                                                <Text style={{ fontSize: scaledHeight(16) }}> {item.value} </Text>
                                            </TouchableOpacity>)
                                        }
                                        keyExtractor={item => item.key}
                                    />
                                </View>}
                        </View>
                    </View>

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
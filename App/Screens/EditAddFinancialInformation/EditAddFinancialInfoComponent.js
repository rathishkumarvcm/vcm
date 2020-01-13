import React, { Component } from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import PropTypes from "prop-types";
import styles from './styles';
import { GButtonComponent, GHeaderComponent, GDropDownComponent } from '../../CommonComponents';
import globalStrings from '../../Constants/GlobalStrings';
import ImagesLoad from '../../Images/ImageIndex';

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

class EditAddFinancialInfoComponent extends Component {
    constructor(props) {
        super(props);
        // set true to isLoading if data for this screen yet to be received and wanted to show loader.
        this.state = {
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
        const { dropDownFinancialState } = this.state;
        this.setState({
            dropDownFinancialState: !dropDownFinancialState
        });
    }

    dropDownFinancialSelect = (value, index, data) => {
        const item = data[index];
        this.setState({
            dropDownFinancialValue: item.key,
            dropDownFinancialState: false,
            taxBracketValue: item.taxbracket,
            dropDownFinancialFlag: false
        });
    }

    dropDownNetClick = () => {
        const { dropDownNetState } = this.state;
        this.setState({
            dropDownNetState: !dropDownNetState
        });
    }

    dropDownNetSelect = (value, index, data) => {
        this.setState({
            dropDownNetValue: data[index].value,
            dropDownNetState: false,
            dropDownNetFlag: false
        });
    }

    dropDownTaxFillClick = () => {
        const { dropDownTaxFillState } = this.state;
        this.setState({
            dropDownTaxFillState: !dropDownTaxFillState
        });
    }

    dropDownTaxFillSelect = (value, index, data) => {
        this.setState({
            dropDownTaxFillValue: data[index].value,
            dropDownTaxFillState: false,
            dropDownTaxFillFlag: false
        });
    }

    componentDidMount() {
        this.financialDidMount();
    }

    financialDidMount = () => {
        const { getProfileCompositeData, profileSettingsLookup, profileState } = this.props;

        //  Financial Informations 

        if (this.props && profileState && profileState.financialInformations && profileState.financialInformations.profileAnnualIncome) {
            this.setState({
                dropDownFinancialValue: profileState.financialInformations.profileAnnualIncome
            });
        }

        if (this.props && profileState && profileState.financialInformations && profileState.financialInformations.profileTaxBracket) {
            this.setState({
                taxBracketValue: profileState.financialInformations.profileTaxBracket
            });
        }

        if (this.props && profileState && profileState.financialInformations && profileState.financialInformations.profileNetWorth) {
            this.setState({
                dropDownNetValue: profileState.financialInformations.profileNetWorth
            });
        }

        if (this.props && profileState && profileState.financialInformations && profileState.financialInformations.profileTaxFilling) {
            this.setState({
                dropDownTaxFillValue: profileState.financialInformations.profileTaxFilling
            });
        }

        const payload = [];

        const compositePayloadData = [
            "annual_income",
            "net_worth",
            "tax_filling_status"
        ];

        for (let i = 0; i < compositePayloadData.length; i += 1) {
            const tempkey = compositePayloadData[i];
            if (this.props && profileSettingsLookup && !profileSettingsLookup[tempkey]) {
                payload.push(tempkey);
            }
        }

        getProfileCompositeData(payload);
    }

    navigationSuccess = () => {

        const { dropDownFinancialValue, dropDownNetValue, dropDownTaxFillValue } = this.state;

        if (dropDownFinancialValue === '') {
            this.setState({
                dropDownFinancialFlag: true,
                dropDownFinancialMsg: globalStrings.profileValidationMessages.validateFinancialInformation
            });
        }

        if (dropDownNetValue === '') {
            this.setState({
                dropDownNetFlag: true,
                dropDownNetMsg: globalStrings.profileValidationMessages.validateNetWorth
            });
        }

        if (dropDownTaxFillValue === '') {
            this.setState({
                dropDownTaxFillFlag: true,
                dropDownTaxFillMsg: globalStrings.profileValidationMessages.validateTaxFilling
            });
        }

        if (dropDownFinancialValue !== '' && dropDownNetValue !== '' && dropDownTaxFillValue !== '') {
            this.manageFinancialInformations();
        }
    }

    manageFinancialInformations = () => {
        const { saveProfileData, navigation } = this.props;
        const payloadData = this.getProfilePayloadData();
        saveProfileData("editFinancialInformations", payloadData);
        navigation.navigate('profileSettings');
    }

    getProfilePayloadData = () => {
        const { profileState } = this.props;
        const { dropDownFinancialValue, taxBracketValue, dropDownNetValue, dropDownTaxFillValue } = this.state;
        let profilePayload = {};
        if (this.props && profileState) {
            profilePayload = {
                ...profileState,
                "financialInformations": {
                    profileAnnualIncome: dropDownFinancialValue,
                    profileTaxBracket: taxBracketValue,
                    profileNetWorth: dropDownNetValue,
                    profileTaxFilling: dropDownTaxFillValue
                }
            };
        }
        return profilePayload;
    }

    addFinancialOnCancel = () => {
        const { navigation } = this.props;
        navigation.navigate('profileSettings');
    }

    render() {

        let userAnnualIncome = annualIncomeData;
        let userNetWorth = netWorthData;
        let userTaxFilling = taxFillingStatusData;

        const tempAnnualIncome = 'annual_income';
        const tempNetWorth = 'net_worth';
        const tempTaxFilling = 'tax_filling_status';

        const { profileSettingsLookup } = this.props;

        if (this.props && profileSettingsLookup &&
            profileSettingsLookup[tempAnnualIncome] &&
            profileSettingsLookup[tempAnnualIncome].value) {
            userAnnualIncome = profileSettingsLookup[tempAnnualIncome].value;
        }

        if (this.props && profileSettingsLookup &&
            profileSettingsLookup[tempNetWorth] &&
            profileSettingsLookup[tempNetWorth].value) {
            userNetWorth = profileSettingsLookup[tempNetWorth].value;
        }

        if (this.props && profileSettingsLookup &&
            profileSettingsLookup[tempTaxFilling] &&
            profileSettingsLookup[tempTaxFilling].value) {
            userTaxFilling = profileSettingsLookup[tempTaxFilling].value;
        }

        const { navigation } = this.props;
        const { dropDownFinancialState, dropDownFinancialValue, dropDownFinancialFlag, dropDownFinancialMsg,
            dropDownNetState, dropDownNetValue, dropDownNetFlag, dropDownNetMsg, dropDownTaxFillState,
            dropDownTaxFillValue, dropDownTaxFillFlag, dropDownTaxFillMsg, taxBracketValue } = this.state;

        return (
            <View style={styles.container}>
                <GHeaderComponent
                    navigation={navigation}
                />

                <ScrollView style={styles.addFinancialFlexDirection}>

                    <View style={styles.settingsView}>
                        <Text style={styles.settingsInfo}>
                            {globalStrings.editProfilePageValue.editAddressInfoHead}
                        </Text>
                        <Text style={styles.addFinancialTitle}>
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
                        showDropDown={dropDownFinancialState}
                        dropDownValue={dropDownFinancialValue}
                        selectedDropDownValue={this.dropDownFinancialSelect}
                        itemToDisplay="value"
                        errorFlag={dropDownFinancialFlag}
                        errorText={dropDownFinancialMsg}
                    />

                    <View style={styles.financialViewNormal}>
                        <Text style={styles.financialTextLabel}>
                            {globalStrings.addFinancialInformations.taxBracket}
                        </Text>
                        <Text style={styles.financialValueLabel}>
                            {`${taxBracketValue}%`}
                        </Text>
                    </View>

                    <GDropDownComponent
                        dropDownTextName={styles.financialTextLabel}
                        dropDownName={globalStrings.addFinancialInformations.netWorth}
                        data={userNetWorth}
                        changeState={this.dropDownNetClick}
                        showDropDown={dropDownNetState}
                        dropDownValue={dropDownNetValue}
                        selectedDropDownValue={this.dropDownNetSelect}
                        itemToDisplay="value"
                        errorFlag={dropDownNetFlag}
                        errorText={dropDownNetMsg}
                    />

                    <GDropDownComponent
                        dropDownTextName={styles.financialTextLabel}
                        dropDownName={globalStrings.addFinancialInformations.taxFillingStatus}
                        data={userTaxFilling}
                        changeState={this.dropDownTaxFillClick}
                        showDropDown={dropDownTaxFillState}
                        dropDownValue={dropDownTaxFillValue}
                        selectedDropDownValue={this.dropDownTaxFillSelect}
                        itemToDisplay="value"
                        errorFlag={dropDownTaxFillFlag}
                        errorText={dropDownTaxFillMsg}
                    />

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
                            textStyle={styles.saveButtonText}
                        />
                    </View>

                    <View style={styles.editFlexDirectionColumn}>
                        <Text style={styles.openInvestmentLarge}>
                            {globalStrings.addFinancialInformations.financialSecurity}
                        </Text>
                    </View>

                    <View style={styles.newVictorySection}>
                        <Text style={styles.termsofuseText1}>
                            {globalStrings.addFinancialInformations.financialInvesting}
                        </Text>
                        <Text style={styles.openInvestmentNormal}>
                            {globalStrings.addFinancialInformations.financialOpenInvestment}
                        </Text>
                    </View>

                    <View style={styles.connectWithUs}>
                        <Image
                            source={ImagesLoad.applicationLogo}
                        />
                    </View>

                    <View style={styles.whiteBackground}>
                        <Text style={styles.editLabelInputMedium}>
                            {globalStrings.common.connectWithUs}
                        </Text>
                    </View>

                    <View style={styles.whiteBackground}>
                        <Image style={styles.imageWidthHeight}
                            source={ImagesLoad.twitterlogo}
                        />
                        <Image style={styles.imageWidthHeight}
                            source={ImagesLoad.linkedinlogo}
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

EditAddFinancialInfoComponent.propTypes = {
    navigation: PropTypes.instanceOf(Object).isRequired,
    profileState: PropTypes.instanceOf(Object),
    profileSettingsLookup: PropTypes.instanceOf(Object),
    getProfileCompositeData: PropTypes.func,
    saveProfileData: PropTypes.func
};

EditAddFinancialInfoComponent.defaultProps = {
    profileState: {},
    profileSettingsLookup: {},
    getProfileCompositeData: null,
    saveProfileData: null
};

export default EditAddFinancialInfoComponent;
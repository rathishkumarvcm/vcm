import React, { Component } from 'react';
import { Text, View, ScrollView, Switch } from 'react-native';
import PropTypes from "prop-types";
import styles from './styles';
import { GHeaderComponent, GFooterSettingsComponent, GButtonComponent, GDropDownComponent, GDateComponent, GIcon } from '../../CommonComponents';
import { CustomCheckBox } from '../../AppComponents';
import globalString from '../../Constants/GlobalStrings';
import AppUtils from '../../Utils/AppUtils';

const switchTrackColor = { flase: '#DBDBDB', true: '#444444' };

const tempTimeZone = [
    {
        "key": "central",
        "value": "Central"
    },
    {
        "key": "eastern",
        "value": "Eastern"
    },
    {
        "key": "general",
        "value": "General"
    },
    {
        "key": "pacific",
        "value": "Pacific"
    }
];

const tempPreferenceData = [
    { key: 'morning', value: 'Morning (8am - 10am)' },
    { key: 'midday', value: 'Mid-Day (10am - 4pm)' },
    { key: 'earlyevening', value: 'Early Evening (4am - 6pm)' },
    { key: 'night', value: 'Night (6am - 9pm)' }
];

class MarketingandPrivacyComponent extends Component {
    constructor(props) {
        super(props);
        // set true to isLoading if data for this screen yet to be received and wanted to show loader.
        this.state = {
            // isLoading: false,
            // enableBiometric: false,
            // faceIdEnrolled: false,
            // touchIdEnrolled: false,        

            mobileNumberData: [],
            emailData: [],
            addressData: [],

            dropDownPreferenceValue: 'Central',
            dropDownQuietTimeValue: 'Central',
            dropDownTimeFlag: false,
            dropDownTimeMsg: '',

            PreferenceData: [...tempPreferenceData.map(v => ({ ...v, isActive: false }))],
            switchValue: false,
            errMsg: "",
            quietTime: {
                startTime: "",
                endTime: "",
                startTimeValidation: true,
                endTimeValidation: true,
                startTimeValiMsg: "",
                endTimeValiMsg: ""
            },
        };
    }

    componentDidMount() {
    }

    componentDidUpdate() {
    }

    static getDerivedStateFromProps(props, prevState) {
        // initialize state variable and return. If no changes required for state
        // variable then return empty object. return {}
        const { profileState } = props;
        const { mobileNumberData, emailData, addressData } = prevState;

        if (profileState && mobileNumberData.length === 0 || emailData.length === 0 || addressData.length === 0) {
            return {
                mobileNumberData: profileState.profileUserMobileNumber,
                emailData: profileState.profileUserMailInformation,
                addressData: profileState.profileUserAddressInformation
            };
        }
        return {
            mobileNumberData: prevState.mobileNumberData,
            emailData: prevState.emailData,
            addressData: prevState.addressData
        };
    }

    //  Mobile Toggle and Information 
    onMobileToggle = (item, index) => () => {
        const { mobileNumberData } = this.state;
        const array = [...mobileNumberData];
        if (index !== -1) {
            const switchVal = array[parseInt(index, 10)].isMarketingOffersEnabled;
            array[parseInt(index, 10)].isMarketingOffersEnabled = !switchVal;
            this.setState({
                mobileNumberData: array
            });
        }
    }

    //  Email Toggle and Information
    onEmailToggle = (item, index) => () => {
        const { emailData } = this.state;
        const array = [...emailData];
        if (index !== -1) {
            const switchVal = array[parseInt(index, 10)].isMarketingOffersEnabled;
            array[parseInt(index, 10)].isMarketingOffersEnabled = !switchVal;
            this.setState({
                emailData: array
            });
        }
    }

    //  Address Toggle and Information
    onAddressToggle = (item, index) => () => {
        const { addressData } = this.state;
        const array = [...addressData];

        if (index !== -1) {
            const switchVal = array[parseInt(index, 10)].isMarketingOffersEnabled;
            array[parseInt(index, 10)].isMarketingOffersEnabled = !switchVal;
            this.setState({
                addressData: array
            });
        }
    }

    goBack = () => {
        const { navigation } = this.props;
        navigation.goBack();
    }

    generateKeyExtractor = (item) => item.id;

    navigateEditSection = (fromsection) => () => {
        const { navigation } = this.props;
        switch (fromsection) {
            case 'Phone':
                navigation.navigate('editPhoneInformation');
                break;
            case 'Email':
                navigation.navigate('editEmailInformation');
                break;
            case 'Address':
                navigation.navigate('editAddressSettings');
                break;
            default:
                break;
        }
    }

    // Checkbox selection on Clicking Filters 
    onCheckboxSelect = (item, index) => () => {
        AppUtils.debugLog(`Index :  ${index}`);
        AppUtils.debugLog(`Checkbox Selected : ${item.key} ${item.value} ${item.isActive}`);
        let newItm = [];
        const {
            PreferenceData,
        } = this.state;
        newItm = [...PreferenceData];
        newItm[+index].isActive = !newItm[+index].isActive;
        this.setState({ PreferenceData: newItm });

        AppUtils.debugLog(`New Item:${JSON.stringify(newItm)}`);
    }

    dropDownPreferenceSelect = (value, index, data) => {
        AppUtils.debugLog(`DropDown Preference Selected : Value : ${value} Index : ${index} Data : ${JSON.stringify(data)}`);
    }

    dropDownQuietTimeSelect = (value, index, data) => {
        AppUtils.debugLog(`DropDown QuietTime Selected : Value : ${value} Index : ${index} Data : ${JSON.stringify(data)}`);
    }

    toggleSwitch = (value) => {
        this.setState({ switchValue: value });
    }

    setInputRef = (inputComp) => (ref) => {
        this[`${inputComp}`] = ref;
    }

    onChangeText = (stateKey, keyName) => text => {
        AppUtils.debugLog(`onChangeText:::>${text}`);

        this.setState(prevState => ({
            [stateKey]: {
                ...prevState[`${stateKey}`],
                [keyName]: text,
                [`${keyName}Validation`]: true,
            }
        }));
    }

    isEmpty = (str) => {
        if (str === "" || str === undefined || str === null || str === "null" || str === "undefined" || str.replace(/^\s+|\s+$/gm, '') === "") {
            return true;
        }
        return false;
    }

    validateInfoFields = () => {
        const { quietTime } = this.state;

        let errMsg = "";
        let isValidationSuccess = false;
        let input = "";

        const currentDate = new Date();
        const d1 = new Date(`${currentDate.toDateString()} ${quietTime.startTime}`);
        const d2 = new Date(`${currentDate.toDateString()} ${quietTime.endTime}`);
        const duration = d2.getTime() - d1.getTime();
        let hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

        hours = (hours < 10) ? hours : hours;

        AppUtils.debugLog(`Difference Time:::>${hours}`);

        if (this.isEmpty(quietTime.startTime)) {
            errMsg = globalString.settingsDeliveryPreference.emptyStartTime;
            input = 'startTime';
        } else if (this.isEmpty(quietTime.endTime)) {
            errMsg = globalString.settingsDeliveryPreference.emptyEndTime;
            input = 'endTime';
        } else if (hours < 0) {
            errMsg = globalString.settingsDeliveryPreference.validEndTime;
            input = 'endTime';
        } else {
            isValidationSuccess = true;
        }

        if (!isValidationSuccess) {
            AppUtils.debugLog(`quietTime Info errMsg:: ${errMsg}`);

            this.setState(prevState => ({
                quietTime: {
                    ...prevState.quietTime,
                    [`${input}Validation`]: false,
                },
                isValidationSuccess,
                errMsg: isValidationSuccess === false ? errMsg : ""
            }));

            if (input !== "" && input !== null && input !== undefined) {
                if (this[`${input}`] !== null && this[`${input}`] !== undefined) {
                    if (typeof this[`${input}`].focus === 'function') {
                        this[`${input}`].focus();
                    }
                }
            }
        }
        return isValidationSuccess;
    }

    saveButtonAction = () => {
        const {
            switchValue
        } = this.state;

        const { navigation } = this.props;
        if (switchValue) {
            if (this.validateInfoFields()) {
                AppUtils.debugLog(`Quiet Time Off::: Saved Success>`);
                // saveData(payloadData);
                navigation.goBack();
            }
        } else {
            AppUtils.debugLog(`Quiet Time Off:::>`);
            // saveData(payloadData);
            navigation.goBack();
        }
    }

    render() {
        const { navigation } = this.props;
        const { mobileNumberData, emailData,
            addressData, dropDownPreferenceValue, dropDownQuietTimeValue, dropDownTimeFlag, dropDownTimeMsg, PreferenceData, switchValue, quietTime, errMsg, } = this.state;
        return (
            <View style={styles.container}>
                <GHeaderComponent navigation={navigation} />

                <ScrollView style={styles.scrollContainer}>

                    <View style={styles.settingsView}>
                        <Text style={styles.settingsInfo}>
                            {globalString.marketingPrivacyLabel.marketingHeadingLabel}
                        </Text>
                    </View>

                    <View style={styles.settingsView}>
                        <Text style={styles.settingsHeadline}>
                            {globalString.marketingPrivacyLabel.marketingPrivacyTitle}
                        </Text>
                    </View>

                    <View style={styles.settingsBorder} />

                    <View style={styles.marketingHeadQues}>
                        <Text style={styles.marketingHeadLabel}>
                            {globalString.marketingPrivacyLabel.marketingOfferLabel}
                        </Text>
                    </View>

                    <View style={styles.marketingHeadQues}>
                        <Text style={styles.marketingHeadLabel}>
                            {globalString.marketingPrivacyLabel.marketingMeetLabel}
                        </Text>
                    </View>

                    {/*  Address Data */}
                    {
                        addressData.map((item, index) => {
                            return (
                                (item.isMailingAddress) ? (
                                    <View style={styles.marketingContainer}>
                                        <View style={styles.marketingTitleContainer}>
                                            <View style={styles.marketingTitleContainer}>
                                                <Text style={styles.marketingTitleText}>
                                                    {globalString.marketingPrivacyLabel.marketingMailingLabel}
                                                </Text>
                                            </View>
                                            <View>
                                                <Switch trackColor={switchTrackColor}
                                                    onValueChange={this.onAddressToggle(item, index)}
                                                    value={item.isMarketingOffersEnabled}
                                                />
                                            </View>
                                        </View>
                                        <View style={styles.marketingDescContainer}>
                                            <Text style={styles.marketingDescTextContainer}>
                                                {item.addressType}
                                            </Text>
                                            <Text style={styles.marketingDescTextContainer}>
                                                {item.addressLineOne}
                                            </Text>
                                            <Text style={styles.marketingDescTextContainer}>
                                                {item.addressCity}
                                            </Text>
                                            <Text style={styles.marketingDescTextContainer}>
                                                {item.addressState}
                                            </Text>
                                            <Text style={styles.editTextStyle} onPress={this.navigateEditSection('Address')}>
                                                {globalString.common.edit}
                                            </Text>
                                        </View>
                                    </View>
                                )
                                    : null
                            );
                        })
                    }

                    {/*  Email Data */}
                    {
                        emailData.map((item, index) => {
                            return (
                                (item.isPrimaryEmail) ? (
                                    <View style={styles.marketingContainer}>
                                        <View style={styles.marketingTitleContainer}>
                                            <View style={styles.marketingTitleContainer}>
                                                <Text style={styles.marketingTitleText}>
                                                    {globalString.accManagement.emailAddress}
                                                </Text>
                                            </View>
                                            <View>
                                                <Switch trackColor={switchTrackColor}
                                                    onValueChange={this.onEmailToggle(item, index)}
                                                    value={item.isMarketingOffersEnabled}
                                                />
                                            </View>
                                        </View>
                                        <View style={styles.marketingDescContainer}>
                                            <Text style={styles.marketingDescTextContainer}>
                                                {item.emailId}
                                            </Text>
                                            <Text style={styles.editTextStyle} onPress={this.navigateEditSection('Email')}>
                                                {globalString.common.edit}
                                            </Text>
                                        </View>
                                    </View>
                                )
                                    : null
                            );
                        })
                    }

                    {/*  Mobile Data */}
                    {
                        mobileNumberData.map((item, index) => {
                            return (
                                (item.isPrimaryMobile) ? (
                                    <View style={styles.marketingContainer}>
                                        <View style={styles.marketingTitleContainer}>
                                            <View style={styles.marketingTitleContainer}>
                                                <Text style={styles.marketingTitleText}>
                                                    {globalString.profileSettingsPage.profilePrimaryMobileLabel}
                                                </Text>
                                            </View>
                                            <View>
                                                <Switch trackColor={switchTrackColor}
                                                    onValueChange={this.onMobileToggle(item, index)}
                                                    value={item.isMarketingOffersEnabled}
                                                />
                                            </View>
                                        </View>
                                        <View style={styles.marketingDescContainer}>
                                            <Text style={styles.marketingDescTextContainer}>
                                                {item.mobileNumber}
                                            </Text>
                                            <Text style={styles.editTextStyle} onPress={this.navigateEditSection('Phone')}>
                                                {globalString.common.edit}
                                            </Text>
                                        </View>

                                        {/*  Call Preference Section */}

                                        {
                                            (item.isMarketingOffersEnabled) ? (
                                                <View>
                                                    <View style={styles.callPreferenceContainer}>

                                                        <Text style={styles.callPreferenceTitle}>
                                                            {globalString.settingsDeliveryPreference.deliveryPreferenceCall}
                                                        </Text>
                                                        <Text style={styles.callPreferenceTitleDesc}>
                                                            {globalString.settingsDeliveryPreference.deliveryPreferenceAvailability}
                                                            <Text style={styles.callPreferenceTitleDescOpt}>
                                                                {globalString.settingsDeliveryPreference.deliveryPreferenceAvailabilityDesc}
                                                            </Text>
                                                        </Text>
                                                        <Text style={styles.callPreferenceTitleDescOpt}>
                                                            {globalString.settingsDeliveryPreference.deliveryPreferenceAvailabilityDescPref}
                                                        </Text>

                                                        <GDropDownComponent
                                                            dropDownLayout={styles.dropDownLayoutStyle}
                                                            dropDownTextName={styles.lblTxtDropDown}
                                                            dropDownName="Time Zone"
                                                            data={tempTimeZone}
                                                            dropDownValue={dropDownPreferenceValue}
                                                            selectedDropDownValue={this.dropDownPreferenceSelect}
                                                            itemToDisplay="value"
                                                            errorFlag={dropDownTimeFlag}
                                                            errorText={dropDownTimeMsg}
                                                        />
                                                        {
                                                            PreferenceData.map((prefitem, prefindex) => {
                                                                return (
                                                                    <View key={item.key} style={styles.preferenceSectionGrp}>
                                                                        <CustomCheckBox
                                                                            size={20}
                                                                            itemBottom={0}
                                                                            itemTop={0}
                                                                            outerCicleColor="#DEDEDF"
                                                                            innerCicleColor="#61285F"
                                                                            labelStyle={styles.preferenceSectionTxt}
                                                                            label={prefitem.value}
                                                                            selected={prefitem.isActive}
                                                                            onPress={this.onCheckboxSelect(prefitem, prefindex)}
                                                                        />
                                                                    </View>
                                                                );
                                                            })
                                                        }
                                                    </View>

                                                    {/* Quiet Time Preference Section */}
                                                    <View style={styles.quietTimeContainer}>

                                                        <View style={styles.quietTimeflexContainer}>

                                                            <View style={styles.quietTimeTitleFlex}>
                                                                <GIcon
                                                                    name="volume-off"
                                                                    type="material-community"
                                                                    size={30}
                                                                    color="black"
                                                                />
                                                                <Text style={styles.quietTimeText}>
                                                                    {globalString.settingsDeliveryPreference.deliveryPreferenceQuietTime}
                                                                </Text>
                                                            </View>

                                                            <View style={styles.quietTimeflexDirection}>
                                                                <Switch trackColor={switchTrackColor}
                                                                    onValueChange={this.toggleSwitch}
                                                                    value={switchValue}
                                                                />
                                                            </View>
                                                        </View>

                                                        <Text style={styles.quietTimeTextDelay}>
                                                            {globalString.settingsDeliveryPreference.deliveryPreferenceQuietTimeDelay}
                                                        </Text>
                                                        <Text style={styles.quietTimeTextDelay}>
                                                            {globalString.settingsDeliveryPreference.deliveryPreferenceQuietTimeDelayDesc}
                                                        </Text>

                                                        {
                                                            (switchValue) ? (
                                                                <View>
                                                                    <GDropDownComponent
                                                                        dropDownLayout={styles.dropDownLayoutStyle}
                                                                        dropDownTextName={styles.lblTxtDropDown}
                                                                        dropDownName="Time Zone"
                                                                        data={tempTimeZone}
                                                                        dropDownValue={dropDownQuietTimeValue}
                                                                        selectedDropDownValue={this.dropDownQuietTimeSelect}
                                                                        itemToDisplay="value"
                                                                        errorFlag={dropDownTimeFlag}
                                                                        errorText={dropDownTimeMsg}
                                                                    />

                                                                    <View style={styles.dateContainer}>
                                                                        <Text style={styles.lblTxt}>
                                                                            {globalString.settingsDeliveryPreference.startTime}
                                                                        </Text>
                                                                        <GDateComponent
                                                                            inputref={this.setInputRef("startTime")}
                                                                            date={quietTime.startTime}
                                                                            placeholder="HH:MM"
                                                                            dateTextLayout={styles.dateTextLayout}
                                                                            componentStyle={styles.dateStyle}
                                                                            errorFlag={!quietTime.startTimeValidation}
                                                                            errorMsg={errMsg}
                                                                            format="HH:mm"
                                                                            mode="time"
                                                                            onDateChange={this.onChangeText("quietTime", "startTime")}
                                                                        />

                                                                        <Text style={styles.lblTxt}>
                                                                            {globalString.settingsDeliveryPreference.endTime}
                                                                        </Text>
                                                                        <GDateComponent
                                                                            inputref={this.setInputRef("endTime")}
                                                                            date={quietTime.endTime}
                                                                            placeholder="HH:MM"
                                                                            dateTextLayout={styles.dateTextLayout}
                                                                            componentStyle={styles.dateStyle}
                                                                            errorFlag={!quietTime.endTimeValidation}
                                                                            errorMsg={errMsg}
                                                                            format="HH:mm"
                                                                            mode="time"
                                                                            onDateChange={this.onChangeText("quietTime", "endTime")}
                                                                        />
                                                                    </View>
                                                                </View>

                                                            ) : null
                                                        }

                                                    </View>

                                                </View>

                                            ) : null
                                        }
                                    </View>
                                )
                                : null
                            );
                        })
                    }

                    <GButtonComponent
                        buttonStyle={styles.cancelButton}
                        buttonText={globalString.common.cancel}
                        textStyle={styles.cancelButtonText}
                        onPress={this.goBack}
                    />
                    <GButtonComponent
                        buttonStyle={styles.saveButton}
                        buttonText={globalString.common.submit}
                        textStyle={styles.saveButtonText}
                        onPress={this.saveButtonAction}
                    />

                    <GFooterSettingsComponent />
                </ScrollView>
            </View>
        );
    }
}

MarketingandPrivacyComponent.propTypes = {
    navigation: PropTypes.instanceOf(Object),
    profileState: PropTypes.instanceOf(Object)
};

MarketingandPrivacyComponent.defaultProps = {
    navigation: {},
    profileState: {}
};

export default MarketingandPrivacyComponent;
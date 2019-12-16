import React, { Component } from 'react';
import { Text, View, ScrollView, Switch, FlatList, Image } from 'react-native';
import { styles } from './styles';
import { GHeaderComponent, GIcon, GRadioButtonComponent } from '../../CommonComponents';
import { scaledHeight } from '../../Utils/Resolution';
import PropTypes from "prop-types";
import globalString from '../../Constants/GlobalStrings';

const UserPhoneInformation = (props) => {
    return (
        <View style={styles.editEmailHolder}>
            <View style={[styles.profileDivideIcon]}>
                <View style={styles.profileDivideIconOne}>
                    <Text style={styles.editEmailType}>
                        {props.mobileNumberType}
                    </Text>
                    <Text style={styles.editEmailId}>
                        {props.mobileNumber}
                    </Text>
                    <Text style={styles.editEmailId}>
                        {props.mobilePreferredTime}
                    </Text>
                </View>
                <View style={styles.profileDivideIconTwo}>
                    <Image style={styles.imageWidthHeight}
                        source={require("../../Images/menu_icon.png")} />
                </View>
            </View>

            <View style={styles.editEmailBorder} />

            <View style={styles.editAddressView}>
                <Text style={styles.editAddressLabel}>
                    {globalString.marketingPrivacyLabel.marketingContactLabel}
                </Text>
                <View style={styles.editSwitchButton}>
                    <Switch trackColor={{ flase: '#DBDBDB', true: '#444444' }}
                        onValueChange={props.onMobileToggle}
                        value={props.isPrimaryMobile} />
                </View>
            </View>
        </View>
    );
};

UserPhoneInformation.propTypes = {
    mobileNumberType: PropTypes.string,
    mobileNumber: PropTypes.string,
    mobilePreferredTime: PropTypes.string,
    isPrimaryMobile: PropTypes.bool,
    onMobileToggle: PropTypes.func
};

// Email Information's Data

const UserEmailInformation = (props) => {
    return (
        <View style={styles.editEmailHolder}>
            <View style={[styles.profileDivideIcon]}>
                <View style={styles.profileDivideIconOne}>
                    <Text style={styles.editEmailType}>
                        {props.emailType}
                    </Text>
                    <Text style={styles.editEmailId}>
                        {props.emailId}
                    </Text>
                </View>

                <View style={styles.profileDivideIconTwo}>
                    <Image style={styles.imageWidthHeight}
                        source={require("../../Images/menu_icon.png")} />
                </View>
            </View>

            <View style={styles.editEmailBorder} />

            <View style={styles.editAddressView}>
                <Text style={styles.editAddressLabel}>
                    {globalString.marketingPrivacyLabel.marketingContactLabel}
                </Text>

                <View style={styles.editSwitchButton}>
                    <Switch trackColor={{ flase: '#DBDBDB', true: '#444444' }}
                        onValueChange={props.onEmailToggle}
                        value={props.isPrimaryEmail} />
                </View>
            </View>
        </View>
    );
};

UserEmailInformation.propTypes = {
    emailType: PropTypes.string,
    emailId: PropTypes.string,
    isPrimaryEmail: PropTypes.bool,
    onEmailToggle: PropTypes.func
};

// Address Informations Data

const UserAddressInformation = (props) => {
    return (
        <View style={styles.editEmailHolder}>
            <View style={[styles.profileDivideIcon]}>
                <View style={styles.profileDivideIconOne}>
                    <Text style={styles.editEmailType}>
                        {props.addressType}
                    </Text>
                    <Text style={styles.editEmailId}>
                        {props.addressLineOne}
                    </Text>
                    <Text style={styles.editEmailId}>
                        {props.addressCity}
                    </Text>
                    <Text style={styles.editEmailId}>
                        {props.addressState}
                    </Text>
                </View>

                <View style={styles.profileDivideIconTwo}>
                    <Image style={styles.imageWidthHeight}
                        source={require("../../Images/menu_icon.png")} />
                </View>
            </View>

            <View style={styles.editEmailBorder} />

            <View style={styles.editAddressView}>
                <Text style={styles.editAddressLabel}>
                    {globalString.marketingPrivacyLabel.marketingContactLabel}
                </Text>

                <View style={styles.editSwitchButton}>
                    <Switch trackColor={{ flase: '#DBDBDB', true: '#444444' }}
                        onValueChange={this.toggleSwitchMailing}
                        value={props.isMailingAddress} />
                </View>
            </View>
        </View>
    );
};

UserAddressInformation.propTypes = {
    addressType: PropTypes.string,
    addressLineOne: PropTypes.string,
    addressCity: PropTypes.string,
    addressState: PropTypes.string,
    addressZipcode: PropTypes.string,
    isMailingAddress: PropTypes.bool,
    isPhysicalAddress: PropTypes.bool
};

class MarketingandPrivacyComponent extends Component {
    constructor(props) {
        super(props);
        //set true to isLoading if data for this screen yet to be received and wanted to show loader.
        this.state = {
            isLoading: false,
            enableBiometric: false,
            faceIdEnrolled: false,
            touchIdEnrolled: false,

            isMobileRefreshed: false,
            isEmailRefreshed: false,
            isAddressRefreshed: false,

            mobileNumberData: [],
            emailData: [],
            addressData: []
        };
    }

    componentDidMount() {
        if (this.props &&
            this.props.profileState &&
            this.props.profileState.profileUserMobileNumber) {
            this.setState({
                mobileNumberData: this.props.profileState.profileUserMobileNumber,
                isMobileRefreshed: !this.state.isMobileRefreshed
            });
        }

        if (this.props &&
            this.props.profileState &&
            this.props.profileState.profileUserMailInformation) {
            this.setState({
                emailData: this.props.profileState.profileUserMailInformation,
                isEmailRefreshed: !this.state.isEmailRefreshed
            });
        }

        if (this.props &&
            this.props.profileState &&
            this.props.profileState.profileUserAddressInformation) {
            this.setState({
                addressData: this.props.profileState.profileUserAddressInformation,
                isAddressRefreshed: !this.state.isAddressRefreshed
            });
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props != prevProps) {
            if (this.props &&
                this.props.profileState &&
                this.props.profileState.profileUserMobileNumber) {
                this.setState({
                    mobileNumberData: this.props.profileState.profileUserMobileNumber,
                    isMobileRefreshed: !this.state.isMobileRefreshed
                });
            }

            if (this.props &&
                this.props.profileState &&
                this.props.profileState.profileUserMailInformation) {
                this.setState({
                    emailData: this.props.profileState.profileUserMailInformation,
                    isEmailRefreshed: !this.state.isEmailRefreshed
                });
            }

            if (this.props &&
                this.props.profileState &&
                this.props.profileState.profileUserAddressInformation) {
                this.setState({
                    addressData: this.props.profileState.profileUserAddressInformation,
                    isAddressRefreshed: !this.state.isAddressRefreshed
                });
            }
        }
    }

    // Mobile Toggle and Information 

    onMobileToggle = (item, index) => () => {
        var array = [...this.state.mobileNumberData];
        if (index !== -1) {
            let switchVal = array[index].isPrimaryMobile;
            array[index].isPrimaryMobile = !switchVal;
            this.setState({
                mobileNumberData: array,
                isMobileRefreshed: !this.state.isMobileRefreshed
            });
        }
    }

    renderPhoneInformation = () => ({ item, index }) => {
        return (<UserPhoneInformation
            mobileNumberType={item.mobileNumberType}
            mobileNumber={item.mobileNumber}
            mobilePreferredTime={item.mobilePreferredTime}
            isPrimaryMobile={item.isPrimaryMobile}
            onMobileToggle={this.onMobileToggle(item, index)} />)
    };

    // Email Toggle and Information

    onEmailToggle = (item, index) => () => {
        var array = [...this.state.emailData];
        if (index !== -1) {
            let switchVal = array[index].isPrimaryEmail;
            array[index].isPrimaryEmail = !switchVal;
            this.setState({
                emailData: array,
                isEmailRefreshed: !this.state.isEmailRefreshed
            });
        }
    }

    renderEmailInformation = () => ({ item, index }) => {
        return (<UserEmailInformation
            emailType={item.emailType}
            emailId={item.emailId}
            isPrimaryEmail={item.isPrimaryEmail}
            onEmailToggle={this.onEmailToggle(item, index)} />)
    };

    // Address Toggle and Information

    onAddressToggle = (item, index) => () => {
        var array = [...this.state.addressData];
        if (index !== -1) {
            let switchVal = array[index].isMailingAddress;
            array[index].isMailingAddress = !switchVal;
            this.setState({
                addressData: array,
                isAddressRefreshed: !this.state.isAddressRefreshed
            });
        }
    }

    renderAddressInformation = () => ({ item, index }) => {
        return (<UserAddressInformation
            addressType={item.addressType}
            addressLineOne={item.addressLineOne}
            addressCity={item.addressCity}
            addressState={item.addressState + ' ' + item.addressZipcode}
            isMailingAddress={item.isMailingAddress}
            onAddressToggle={this.onAddressToggle(item, index)} />)
    };

    render() {
        return (
            <View style={styles.container}>
                <GHeaderComponent navigation={this.props.navigation} />

                <ScrollView style={{ flex: 0.85 }}>

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

                    {/* Mobile Data */}

                    <View style={styles.marketingContentHolder}>
                        <View style={styles.marketingHeaderBackground}>
                            <Text style={styles.marketingHeaderLabel}>
                                {globalString.marketingPrivacyLabel.marketingMobileLabel}
                            </Text>
                        </View>

                        <FlatList
                            data={this.state.mobileNumberData}
                            keyExtractor={this.generateKeyExtractor}
                            extraData={this.state.isMobileRefreshed}
                            renderItem={this.renderPhoneInformation()} />
                    </View>

                    {/* Home Data */}

                    <View style={styles.marketingContentHolder}>
                        <View style={styles.marketingHeaderBackground}>
                            <Text style={styles.marketingHeaderLabel}>
                                {globalString.marketingPrivacyLabel.marketingHomeLabel}
                            </Text>
                        </View>

                        <View style={[styles.editEmailHolder, styles.marketingPadding]}>
                            <Text style={styles.marketingHomeBold}>
                                {globalString.marketingPrivacyLabel.marketingNoneLabel}
                            </Text>
                            <Text style={styles.marketingHomeNormal}>
                                {globalString.marketingPrivacyLabel.marketingNoneMessageLabel}
                            </Text>
                        </View>
                    </View>

                    {/* Email Data */}

                    <View style={styles.marketingContentHolder}>
                        <View style={styles.marketingHeaderBackground}>
                            <Text style={styles.marketingHeaderLabel}>
                                {globalString.marketingPrivacyLabel.marketingEmailLabel}
                            </Text>
                        </View>

                        <FlatList
                            data={this.state.emailData}
                            keyExtractor={this.generateKeyExtractor}
                            extraData={this.state.isEmailRefreshed}
                            renderItem={this.renderEmailInformation()} />
                    </View>

                    {/* Address Data */}

                    <View style={styles.marketingContentHolder}>
                        <View style={styles.marketingHeaderBackground}>
                            <Text style={styles.marketingHeaderLabel}>
                                {globalString.marketingPrivacyLabel.marketingAddressLabel}
                            </Text>
                        </View>

                        <FlatList
                            data={this.state.addressData}
                            keyExtractor={this.generateKeyExtractor}
                            extraData={this.state.isAddressRefreshed}
                            renderItem={this.renderAddressInformation()} />
                    </View>

                    {/* Marketing Note Section */}

                    <View style={styles.editFlexDirectionColumn}>
                        <Text style={styles.marketingNotes}>
                            {globalString.marketingPrivacyLabel.marketingNoteOne}
                        </Text>

                        <Text style={styles.marketingNotesLink}>
                            {globalString.marketingPrivacyLabel.marketingContactUsLabel}
                        </Text>

                        <Text style={styles.marketingNotes}>
                            {globalString.marketingPrivacyLabel.marketingNoteTwo}
                        </Text>

                    </View>

                    {/* <View>
                        <View style={styles.listContainer}>
                            <View style={styles.settingsMobile}>
                                <View style={{ width: '15%' }}>
                                    <GIcon
                                        name="ios-square-outline"
                                        type="ionicon"
                                        size={40}
                                        color="black"
                                    />
                                </View>

                                <Text style={{ width: '80%', color: '#56565A', alignItems: 'center', fontSize: scaledHeight(16), fontWeight: 'bold' }}>
                                    {"Mobile Phone"}
                                </Text>

                                <Text style={{ color: '#5D83AE', fontSize: scaledHeight(16), fontWeight: 'bold', marginTop: scaledHeight(3) }}>
                                    {"Edit"}
                                </Text>
                            </View>

                            <View style={styles.settingsMobileText}>
                                <Text style={{ width: '15%' }}>
                                    {""}
                                </Text>
                                <Text style={{ color: '#56565A', fontSize: scaledHeight(14), marginTop: scaledHeight(3) }}>
                                    {"+1 (123) 456 - 7890"}
                                </Text>
                            </View>

                            <View style={styles.settingsMobile}>
                                <View style={{ width: '15%' }}>
                                    <Text style={{ fontSize: scaledHeight(16), color: '#56565A' }}>
                                        {"NA"}
                                    </Text>
                                </View>

                                <Text style={{ width: '80%', color: '#56565A', alignItems: 'center', fontSize: scaledHeight(16), fontWeight: 'bold' }}>
                                    {"Home Phone"}
                                </Text>

                                <Text style={{ color: '#5D83AE', fontSize: scaledHeight(16), fontWeight: 'bold', marginTop: scaledHeight(3) }}>
                                    {"Edit"}
                                </Text>
                            </View>

                            <View style={styles.settingsMobileText}>
                                <Text style={{ width: '15%' }}>
                                    {""}
                                </Text>
                                <Text style={{ color: '#56565A', fontSize: scaledHeight(14), marginTop: scaledHeight(3) }}>
                                    {"None On File"}
                                </Text>
                            </View>

                            <View style={styles.settingsMobile}>
                                <View style={{ width: '15%' }}>
                                    <GIcon
                                        name="ios-square-outline"
                                        type="ionicon"
                                        size={40}
                                        color="black"
                                    />
                                </View>

                                <Text style={{ width: '80%', color: '#56565A', alignItems: 'center', fontSize: scaledHeight(16), fontWeight: 'bold' }}>
                                    {"Primary Email"}
                                </Text>

                                <Text style={{ color: '#5D83AE', fontSize: scaledHeight(16), fontWeight: 'bold', marginTop: scaledHeight(3) }}>
                                    {"Edit"}
                                </Text>
                            </View>

                            <View style={styles.settingsMobileText}>
                                <Text style={{ width: '15%' }}>
                                    {""}
                                </Text>
                                <Text style={{ color: '#56565A', fontSize: scaledHeight(14), marginTop: scaledHeight(3) }}>
                                    {"abcd@gmail.com"}
                                </Text>
                            </View>


                            <View style={styles.settingsMobile}>
                                <View style={{ width: '15%' }}>
                                    <Text style={{ fontSize: scaledHeight(16), color: '#56565A' }}>
                                        {"NA"}
                                    </Text>
                                </View>

                                <Text style={{ width: '80%', color: '#56565A', alignItems: 'center', fontSize: scaledHeight(16), fontWeight: 'bold' }}>
                                    {"Secondary Email"}
                                </Text>

                                <Text style={{ color: '#5D83AE', fontSize: scaledHeight(16), fontWeight: 'bold', marginTop: scaledHeight(3) }}>
                                    {"Edit"}
                                </Text>
                            </View>

                            <View style={styles.settingsMobileText}>
                                <Text style={{ width: '15%' }}>
                                    {""}
                                </Text>
                                <Text style={{ color: '#56565A', fontSize: scaledHeight(14), marginTop: scaledHeight(3) }}>
                                    {"None On File"}
                                </Text>
                            </View>


                            <View style={styles.settingsMobile}>
                                <View style={{ width: '15%' }}>
                                    <GIcon
                                        name="ios-square-outline"
                                        type="ionicon"
                                        size={40}
                                        color="black"
                                    />
                                </View>

                                <Text style={{ width: '80%', color: '#56565A', alignItems: 'center', fontSize: scaledHeight(16), fontWeight: 'bold' }}>
                                    {"Mailing Address"}
                                </Text>

                                <Text style={{ color: '#5D83AE', fontSize: scaledHeight(16), fontWeight: 'bold', marginTop: scaledHeight(3) }}>
                                    {"Edit"}
                                </Text>
                            </View>

                            <View style={styles.settingsMobileText}>
                                <Text style={{ width: '15%' }}>
                                    {""}
                                </Text>
                                <Text style={{ color: '#56565A', fontSize: scaledHeight(14), marginTop: scaledHeight(3) }}>
                                    {"Address 1 Address 2 City State Zip"}
                                </Text>
                            </View>
                        </View>

                        <View style={{ flexDirection: 'row', paddingLeft: '4%', paddingRight: '4%', width: '92%', marginTop: scaledHeight(15) }}>
                            <Text style={{ fontSize: scaledHeight(16), color: '#56565A' }}>
                                {"We show you gave VCM permission to make marketing calls to you using an automated dialing system or pre recorded voice message. If you want to change you preference."}
                                <Text style={{ fontSize: scaledHeight(16), color: '#5D83AE', fontWeight: 'bold' }}>
                                    {"Contact us"}
                                </Text>
                            </Text>
                        </View>

                        <View style={{ paddingLeft: '4%', paddingRight: '4%', width: '92%', marginTop: scaledHeight(15) }}>
                            <Text style={{ fontSize: scaledHeight(16), color: '#56565A' }}>
                                {"What Types of Offers Are You Interested in?"}
                            </Text>
                        </View>

                        <View style={{ paddingLeft: '4%', paddingRight: '4%', width: '92%', marginTop: scaledHeight(15) }}>
                            <Text style={{ fontSize: scaledHeight(16), color: '#56565A' }}>
                                {"You can tailor the VCM offers you receive and how you like to get them"}
                            </Text>
                        </View>

                        <View style={{ flexDirection: 'row', height: scaledHeight(160), paddingLeft: '4%', paddingRight: '4%', width: '92%', marginTop: scaledHeight(15) }}>
                            <Text style={{ fontSize: scaledHeight(16), color: '#56565A' }}>
                                {"Please note that your selections do not apply to pre-screened offers of credit. To opt-out of pre-screened offers of credit please visit"}
                                <Text style={{ color: '#5D83AE', fontSize: scaledHeight(16), fontWeight: 'bold' }}>
                                    {" https://www.optoutprescreen.com"}
                                </Text>
                                <Text>
                                    {" or call to free"}
                                </Text>

                                <Text style={{ color: '#5D83AE', fontSize: scaledHeight(16), fontWeight: 'bold' }}>
                                    {" Phone Number"}
                                </Text>
                                <Text>
                                    {". The phone number and website are operated by the major consumer reporting companies"}
                                </Text>
                            </Text>
                        </View>

                        <View style={styles.settingsMobile}>
                            <Text style={{ width: '80%', color: '#56565A', alignItems: 'center', fontSize: scaledHeight(22), fontWeight: 'bold' }}>
                                {"Products & Services"}
                            </Text>

                            <Text style={{ color: '#5D83AE', fontSize: scaledHeight(16), fontWeight: 'bold', marginTop: scaledHeight(3) }}>
                                {"Expand All"}
                            </Text>
                        </View>

                        <View style={styles.listContainerb}>
                            <View style={styles.settingsMobile}>
                                <Text style={{ width: '90%', color: '#56565A', alignItems: 'center', fontSize: scaledHeight(16), fontWeight: 'bold' }}>
                                    {"Mobile Phone"}
                                </Text>

                                <View style={{ width: '5%' }}>
                                    <GIcon
                                        name="ios-square-outline"
                                        type="ionicon"
                                        size={40}
                                        color="black" />
                                </View>
                            </View>

                            <View style={styles.settingsMobile}>
                                <Text style={{ width: '90%', color: '#56565A', alignItems: 'center', fontSize: scaledHeight(16), fontWeight: 'bold' }}>
                                    {"Home Phone"}
                                </Text>

                                <View style={{ width: '5%' }}>
                                    <GIcon
                                        name="ios-square-outline"
                                        type="ionicon"
                                        size={40}
                                        color="black"
                                    />
                                </View>
                            </View>

                            <View style={styles.settingsMobile}>
                                <Text style={{ width: '90%', color: '#56565A', alignItems: 'center', fontSize: scaledHeight(16), fontWeight: 'bold' }}>
                                    {"Primary Email"}
                                </Text>

                                <View style={{ width: '5%' }}>
                                    <GIcon
                                        name="ios-square-outline"
                                        type="ionicon"
                                        size={40}
                                        color="black"
                                    />
                                </View>
                            </View>

                            <View style={styles.settingsMobile}>
                                <Text style={{ width: '90%', color: '#56565A', alignItems: 'center', fontSize: scaledHeight(16), fontWeight: 'bold' }}>
                                    {"Secondary Email"}
                                </Text>

                                <View style={{ width: '5%' }}>
                                    <GIcon
                                        name="ios-square-outline"
                                        type="ionicon"
                                        size={40}
                                        color="black"
                                    />
                                </View>
                            </View>

                            <View style={styles.settingsMobile}>
                                <Text style={{ width: '90%', color: '#56565A', alignItems: 'center', fontSize: scaledHeight(16), fontWeight: 'bold' }}>
                                    {"Mailing Address"}
                                </Text>

                                <View style={{ width: '5%' }}>
                                    <GIcon
                                        name="ios-square-outline"
                                        type="ionicon"
                                        size={40}
                                        color="black"
                                    />
                                </View>
                            </View>
                        </View>

                        <View style={{ paddingLeft: '4%', paddingRight: '4%', width: '92%', marginTop: scaledHeight(15) }}>
                            <Text style={{ fontSize: scaledHeight(16), color: '#56565A' }}>
                                {"Your marketing and privacy preferences will also apply to your spouse and children."}
                            </Text>
                        </View>

                        <View style={{ paddingLeft: '4%', paddingRight: '4%', width: '92%', marginTop: scaledHeight(15) }}>
                            <Text style={{ fontSize: scaledHeight(20), color: '#56565A' }}>
                                {"Can We Share Your Information Inside VCM?"}
                            </Text>
                        </View>

                        <View style={{ paddingLeft: '4%', paddingRight: '4%', width: '92%', marginTop: scaledHeight(15) }}>
                            <Text style={{ fontSize: scaledHeight(16), color: '#56565A' }}>
                                {"There are times we want to share your personal information inside the VCM family of companies so that we can provide you with the best customer service possible. At the same time, you have the following choices about how wee share and use your information inside VCM."}
                            </Text>
                        </View>

                        <View style={styles.completeBorder}>

                            <View style={styles.radioSection}>
                                <Text style={{ marginTop: scaledHeight(20), paddingLeft: '2%', paddingRight: '2%', fontSize: scaledHeight(16), color: '#333333DE', fontWeight: 'bold', opacity: 100 }}>
                                    {"Can we share your credit and insurance information inside VCM?"}
                                </Text>

                                <View style={{ flexDirection: 'row', marginLeft: '2%' }}>
                                    <GRadioButtonComponent radioButtonStyle={{ width: '40%' }} selected questions={"Yes"} />

                                    <GRadioButtonComponent radioButtonStyle={{ width: '40%' }} questions={"No"} />
                                </View>

                                <Text style={{ paddingLeft: '2%', paddingRight: '2%', fontSize: scaledHeight(14) }}>
                                    {"This will help us serve you better and provide you with the most efficient service."}
                                </Text>

                            </View>

                            <View style={styles.radioSection}>
                                <Text style={{ paddingLeft: '2%', paddingRight: '2%', fontSize: scaledHeight(16), color: '#333333DE', fontWeight: 'bold', opacity: 100 }}>
                                    {"Can we also share your personal information to market other VCM products to you?"}
                                </Text>

                                <View style={{ flexDirection: 'row', marginLeft: '4%' }}>
                                    <GRadioButtonComponent selected radioButtonStyle={{ width: '40%' }} questions={"Yes"} />

                                    <GRadioButtonComponent radioButtonStyle={{ width: '40%' }} questions={"No"} />
                                </View>
                                <Text style={{ paddingLeft: '2%', paddingRight: '2%', fontSize: scaledHeight(14) }}>
                                    {"This will help us serve you better and provide you with the most efficient service."}
                                </Text>
                            </View>

                        </View>

                        <View style={{ paddingLeft: '4%', paddingRight: '4%', width: '92%', marginTop: scaledHeight(15) }}>
                            <Text style={{ fontSize: scaledHeight(16), color: '#56565A' }}>
                                {"Your privacy preferences will also apply to everyone on your account. Find out more information in our Privacy Promise and Online Information Practices."}
                            </Text>
                        </View>

                        <View style={styles.newVictorySection}>
                            <Text style={styles.termsofuseText1}>
                                {"Investing involves risk including loss of principal."}
                            </Text>
                            <Text style={styles.openInvestment}>
                                {"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam imperdiet dictum orci et faucibus. Suspendisse non malesuada enim. Aliquam fringilla lectus ut massa convallis."}
                            </Text>
                        </View>

                        <View style={styles.privacyAgreement}>
                            <Text style={styles.privacyText}>
                                {"Privacy Policy"}
                            </Text>

                            <Text style={styles.privacyText}>
                                {"User Agreements"}
                            </Text>
                        </View>

                        <View style={styles.fundAgreement}>
                            <Text style={styles.privacyText}>
                                {"Fund Documents"}
                            </Text>

                            <Text style={styles.privacyText}>
                                {"Support"}
                            </Text>
                        </View>

                        <View style={styles.copyRightSection}>
                            <Text style={styles.copyRightText}>
                                {"Copyright Victory Capital Management Inc. ©2020"}
                            </Text>
                        </View>
                    </View> */}

                </ScrollView>
            </View>
        );
    }
}

MarketingandPrivacyComponent.propTypes = {
    navigation: PropTypes.instanceOf(Object)
};

MarketingandPrivacyComponent.defaultProps = {};

export default MarketingandPrivacyComponent;
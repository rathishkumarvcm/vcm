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
                {/* <View style={styles.profileDivideIconTwo}>
                    <Image style={styles.imageWidthHeight}
                        source={require("../../Images/menu_icon.png")} />
                </View> */}
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

//  Email Information's Data

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

                {/* <View style={styles.profileDivideIconTwo}>
                    <Image style={styles.imageWidthHeight}
                        source={require("../../Images/menu_icon.png")} />
                </View> */}
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

//  Address Informations Data

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

                {/* <View style={styles.profileDivideIconTwo}>
                    <Image style={styles.imageWidthHeight}
                        source={require("../../Images/menu_icon.png")} />
                </View> */}
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
        // set true to isLoading if data for this screen yet to be received and wanted to show loader.
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
            addressData: [],

            productMobileToggle: false,
            productHomeToggle: false,
            productMailingToggle: false
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

    //  Mobile Toggle and Information 

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

    //  Email Toggle and Information

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

    //  Address Toggle and Information

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

    onProductMobileToggle = () => {
        this.setState({
            productMobileToggle: !this.state.productMobileToggle
        });
    }

    onProductHomeToggle = () => {
        this.setState({
            productHomeToggle: !this.state.productHomeToggle
        });
    }

    onProductMailingToggle = () => {
        this.setState({
            productMailingToggle: !this.state.productMailingToggle
        })
    }

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

                        <Text style={styles.marketingNotes}>
                            {globalString.marketingPrivacyLabel.marketingNoteThree}
                        </Text>

                        <Text style={styles.marketingNotes}>
                            {globalString.marketingPrivacyLabel.marketingNoteFour}
                        </Text>

                    </View>

                    {/* Products and Services */}

                    <View>
                        <View style={[styles.settingsView, styles.profileSettingView]}>
                            <Text style={styles.profileSettingViewOne}>
                                {globalString.marketingPrivacyLabel.marketingProductLabl}
                            </Text>

                            <Text style={styles.profileSettingViewTwo}>
                                {globalString.marketingPrivacyLabel.marketingExpandAll}
                            </Text>
                        </View>

                        {/* Product and Services content */}

                        <View style={styles.marketingContentHolder}>
                            <Text style={[styles.profileSettingViewOne, styles.editFlexDirectionColumn]}>
                                {globalString.marketingPrivacyLabel.marketingInvestments}
                            </Text>

                            <Text style={[styles.profileSettingViewOne, styles.editFlexDirectionColumn]}>
                                {globalString.marketingPrivacyLabel.marketingFinancialLabel}
                            </Text>

                            <View style={styles.editAddressView}>
                                <Text style={styles.editAddressLabel}>
                                    {globalString.marketingPrivacyLabel.marketingMobilePhoneLabel}
                                </Text>
                                <View style={styles.editSwitchButton}>
                                    <Switch trackColor={{ flase: '#DBDBDB', true: '#444444' }}
                                        onValueChange={this.onProductMobileToggle}
                                        value={this.state.productMobileToggle} />
                                </View>
                            </View>

                            <View style={styles.editAddressView}>
                                <Text style={styles.editAddressLabel}>
                                    {globalString.marketingPrivacyLabel.marketingHomePhoneLabel}
                                </Text>
                                <View style={styles.editSwitchButton}>
                                    <Switch trackColor={{ flase: '#DBDBDB', true: '#444444' }}
                                        onValueChange={this.onProductHomeToggle} 
                                        value={this.state.productHomeToggle}/>
                                </View>
                            </View>

                            <View style={styles.editAddressView}>
                                <Text style={styles.editAddressLabel}>
                                    {globalString.marketingPrivacyLabel.marketingProductEmail}
                                </Text>
                                <View style={styles.editSwitchButton}>
                                    <Text style={styles.editAddressLabel}>
                                        {"N/A"}
                                    </Text>
                                </View>
                            </View>

                            <View style={styles.editAddressView}>
                                <Text style={styles.editAddressLabel}>
                                    {globalString.marketingPrivacyLabel.marketingMailingLabel}
                                </Text>
                                <View style={styles.editSwitchButton}>
                                    <Switch trackColor={{ flase: '#DBDBDB', true: '#444444' }}
                                        onValueChange={this.onProductMailingToggle}
                                        value={this.state.productMailingToggle} />
                                </View>
                            </View>
                        </View>

                        <Text style={[styles.marketingNotes, styles.editFlexDirectionColumn]}>
                            {globalString.marketingPrivacyLabel.marketingPrivacyOne}
                        </Text>

                    </View>

                    {/* Footer Section - Privacy and User Agreements */}

                    <View>
                        <View style={styles.settingsFooter}>
                            <Text style={styles.profileSettingInvestLabel}>
                                {globalString.profileSettingsPage.profileInvest}
                            </Text>

                            <Image style={styles.profileSettingSocialIcon}
                                source={require("../../Images/logo.png")} />

                            <Text style={styles.profileSettingConnectLabel}>
                                {globalString.common.connectWithUs}
                            </Text>

                            <View style={styles.whiteBackground}>
                                <Image style={styles.imageWidthHeight}
                                    source={require("../../Images/twitterlogo.png")} />
                                <Image style={styles.imageWidthHeight}
                                    source={require("../../Images/linkedinlogo.png")} />
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

MarketingandPrivacyComponent.propTypes = {
    navigation: PropTypes.instanceOf(Object)
};

MarketingandPrivacyComponent.defaultProps = {};

export default MarketingandPrivacyComponent;
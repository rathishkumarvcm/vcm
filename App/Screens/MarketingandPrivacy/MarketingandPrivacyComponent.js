import React, { Component } from 'react';
import { Text, View, ScrollView, Switch, FlatList, Image } from 'react-native';
import PropTypes from "prop-types";
import styles from './styles';
import { GHeaderComponent} from '../../CommonComponents';
import globalString from '../../Constants/GlobalStrings';
import UserPhoneInformation from './UserPhoneInformation';
import UserEmailInformation from './UserEmailInformation';
import UserAddressInformation from './UserAddressInformation';

const switchTrackColor = { flase: '#DBDBDB', true: '#444444' };

class MarketingandPrivacyComponent extends Component {
    constructor(props) {
        super(props);
        // set true to isLoading if data for this screen yet to be received and wanted to show loader.
        this.state = {
            // isLoading: false,
            // enableBiometric: false,
            // faceIdEnrolled: false,
            // touchIdEnrolled: false,

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
        const {profileState } = this.props;
        const {isMobileRefreshed,isEmailRefreshed,isAddressRefreshed} = this.state;

        if (profileState && profileState.profileUserMobileNumber) {
            this.setState({
                mobileNumberData: profileState.profileUserMobileNumber,
                isMobileRefreshed: !isMobileRefreshed
            });
        }

        if (profileState && profileState.profileUserMailInformation) {
            this.setState({
                emailData: profileState.profileUserMailInformation,
                isEmailRefreshed: !isEmailRefreshed
            });
        }

        if (profileState && profileState.profileUserAddressInformation) {
            this.setState({
                addressData: profileState.profileUserAddressInformation,
                isAddressRefreshed: !isAddressRefreshed
            });
        }
    }

    componentDidUpdate(prevProps, prevState) {

        const {profileState } = this.props;
        const {isMobileRefreshed,isEmailRefreshed,isAddressRefreshed} = this.state;

        if (this.props !== prevProps) {
            if (profileState && profileState.profileUserMobileNumber) {
                this.setState({
                    mobileNumberData: profileState.profileUserMobileNumber,
                    isMobileRefreshed: !isMobileRefreshed
                });
            }

            if (profileState && profileState.profileUserMailInformation) {
                this.setState({
                    emailData: profileState.profileUserMailInformation,
                    isEmailRefreshed: !isEmailRefreshed
                });
            }

            if (profileState && profileState.profileUserAddressInformation) {
                this.setState({
                    addressData: profileState.profileUserAddressInformation,
                    isAddressRefreshed: !isAddressRefreshed
                });
            }
        }
    }

    //  Mobile Toggle and Information 

    onMobileToggle = (item, index) => () => {
        const {mobileNumberData,isMobileRefreshed} = this.state;
        const array = [...mobileNumberData];
        if (index !== -1) {
            const switchVal = array[parseInt(index,10)].isPrimaryMobile;
            array[parseInt(index,10)].isPrimaryMobile = !switchVal;
            this.setState({
                mobileNumberData: array,
                isMobileRefreshed: !isMobileRefreshed
            });
        }
    }

    renderPhoneInformation = () => ({ item, index }) => {
        return (
<UserPhoneInformation
            mobileNumberType={item.mobileNumberType}
            mobileNumber={item.mobileNumber}
            mobilePreferredTime={item.mobilePreferredTime}
            isPrimaryMobile={item.isPrimaryMobile}
            onMobileToggle={this.onMobileToggle(item, index)}
/>
);
    };

    //  Email Toggle and Information

    onEmailToggle = (item, index) => () => {
        const {emailData,isEmailRefreshed} = this.state;
        const array = [...emailData];
        if (index !== -1) {
            const switchVal = array[parseInt(index,10)].isPrimaryEmail;
            array[parseInt(index,10)].isPrimaryEmail = !switchVal;
            this.setState({
                emailData: array,
                isEmailRefreshed: !isEmailRefreshed
            });
        }
    }

    renderEmailInformation = () => ({ item, index }) => {
        return (
<UserEmailInformation
            emailType={item.emailType}
            emailId={item.emailId}
            isPrimaryEmail={item.isPrimaryEmail}
            onEmailToggle={this.onEmailToggle(item, index)}
/>
);
    };

    //  Address Toggle and Information

    onAddressToggle = (item, index) => () => {
        const {addressData,isAddressRefreshed} = this.state;
        const array = [...addressData];
        if (index !== -1) {
            const switchVal = array[parseInt(index,10)].isMailingAddress;
            array[parseInt(index,10)].isMailingAddress = !switchVal;
            this.setState({
                addressData: array,
                isAddressRefreshed: !isAddressRefreshed
            });
        }
    }

    renderAddressInformation = () => ({ item, index }) => {
        return (
<UserAddressInformation
            addressType={item.addressType}
            addressLineOne={item.addressLineOne}
            addressCity={item.addressCity}
            addressState={`${item.addressState } ${ item.addressZipcode}`}
            isMailingAddress={item.isMailingAddress}
            onAddressToggle={this.onAddressToggle(item, index)}
/>
);
    };

    onProductMobileToggle = () => {
        const {productMobileToggle} = this.state;
        this.setState({
            productMobileToggle: !productMobileToggle
        });
    }

    onProductHomeToggle = () => {
        const {productHomeToggle} = this.state;
        this.setState({
            productHomeToggle: !productHomeToggle
        });
    }

    onProductMailingToggle = () => {
        const {productMailingToggle} = this.state;
        this.setState({
            productMailingToggle: !productMailingToggle
        });
    }

    render() {
        const {navigation} = this.props;
        const {mobileNumberData,isMobileRefreshed,emailData,isEmailRefreshed,
            addressData,isAddressRefreshed,productMobileToggle,productHomeToggle,
            productMailingToggle} = this.state;
        return (
            <View style={styles.container}>
                <GHeaderComponent navigation={navigation} />

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
                            data={mobileNumberData}
                            keyExtractor={this.generateKeyExtractor}
                            extraData={isMobileRefreshed}
                            renderItem={this.renderPhoneInformation()}
                        />
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
                            data={emailData}
                            keyExtractor={this.generateKeyExtractor}
                            extraData={isEmailRefreshed}
                            renderItem={this.renderEmailInformation()}
                        />
                    </View>

                    {/* Address Data */}

                    <View style={styles.marketingContentHolder}>
                        <View style={styles.marketingHeaderBackground}>
                            <Text style={styles.marketingHeaderLabel}>
                                {globalString.marketingPrivacyLabel.marketingAddressLabel}
                            </Text>
                        </View>

                        <FlatList
                            data={addressData}
                            keyExtractor={this.generateKeyExtractor}
                            extraData={isAddressRefreshed}
                            renderItem={this.renderAddressInformation()}
                        />
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
                                    <Switch trackColor={switchTrackColor}
                                        onValueChange={this.onProductMobileToggle}
                                        value={productMobileToggle}
                                    />
                                </View>
                            </View>

                            <View style={styles.editAddressView}>
                                <Text style={styles.editAddressLabel}>
                                    {globalString.marketingPrivacyLabel.marketingHomePhoneLabel}
                                </Text>
                                <View style={styles.editSwitchButton}>
                                    <Switch trackColor={switchTrackColor}
                                        onValueChange={this.onProductHomeToggle} 
                                        value={productHomeToggle}
                                    />
                                </View>
                            </View>

                            <View style={styles.editAddressView}>
                                <Text style={styles.editAddressLabel}>
                                    {globalString.marketingPrivacyLabel.marketingProductEmail}
                                </Text>
                                <View style={styles.editSwitchButton}>
                                    <Text style={styles.editAddressLabel}>
                                        N/A
                                    </Text>
                                </View>
                            </View>

                            <View style={styles.editAddressView}>
                                <Text style={styles.editAddressLabel}>
                                    {globalString.marketingPrivacyLabel.marketingMailingLabel}
                                </Text>
                                <View style={styles.editSwitchButton}>
                                    <Switch trackColor={switchTrackColor}
                                        onValueChange={this.onProductMailingToggle}
                                        value={productMailingToggle}
                                    />
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
                                source="../../Images/logo.png"
                            />

                            <Text style={styles.profileSettingConnectLabel}>
                                {globalString.common.connectWithUs}
                            </Text>

                            <View style={styles.whiteBackground}>
                                <Image style={styles.imageWidthHeight}
                                    source="../../Images/twitterlogo.png"
                                />
                                <Image style={styles.imageWidthHeight}
                                    source="../../Images/linkedinlogo.png"
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
    navigation: PropTypes.instanceOf(Object),
    profileState :  PropTypes.instanceOf(Object)
};

MarketingandPrivacyComponent.defaultProps = {
    navigation:{},
    profileState : {}
};

export default MarketingandPrivacyComponent;
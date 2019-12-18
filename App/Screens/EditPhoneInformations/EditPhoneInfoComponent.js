import React, { Component } from 'react';
import { Text, View, Image, ScrollView, TouchableOpacity, FlatList, Switch } from 'react-native';
import { styles } from './styles';
import { GButtonComponent, GHeaderComponent, GIcon, GInputComponent, GRadioButtonComponent } from '../../CommonComponents';
import { scaledHeight } from '../../Utils/Resolution';
import globalString from '../../Constants/GlobalStrings';
import PropTypes from "prop-types";

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
                    {globalString.profileSettingsPage.profileMailPrimaryLabel}
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

class editPhoneInfoComponent extends Component {
    constructor(props) {
        super(props);
        //set true to isLoading if data for this screen yet to be received and wanted to show loader.
        this.state = {
            isLoading: false,
            enableBiometric: false,
            faceIdEnrolled: false,
            touchIdEnrolled: false,

            isMobileRefreshed: false,

            userMobileNumber: [],
            userHomeNumber: [],
            userWorkNumber: [],

            contactPosition: this.props.navigation.getParam('contactPosition'),
            isRelation: this.props.navigation.getParam('isRelation'),
            relationPhoneInfo: {}
        };
    }

    componentDidMount() {
        if (!this.state.isRelation) {
            if (this.props &&
                this.props.profileState &&
                this.props.profileState.profileUserMobileNumber) {
                this.setState({
                    userMobileNumber: this.props.profileState.profileUserMobileNumber,
                    isMobileRefreshed: !this.state.isMobileRefreshed
                });
            }

            if (this.props &&
                this.props.profileState &&
                this.props.profileState.profileUserHomeNumber) {
                this.setState({
                    userHomeNumber: this.props.profileState.profileUserHomeNumber,
                    isMobileRefreshed: !this.state.isMobileRefreshed
                });
            }

            if (this.props &&
                this.props.profileState &&
                this.props.profileState.profileUserWorkNumber) {
                this.setState({
                    userWorkNumber: this.props.profileState.profileUserWorkNumber,
                    isMobileRefreshed: !this.state.isMobileRefreshed
                });
            }
        } else {
            let relationshipContacts = [];
            if (this.props &&
                this.props.profileState &&
                this.props.profileState.profileRelationShipDetails) {
                relationshipContacts = [...this.props.profileState.profileRelationShipDetails];
                this.setState({
                    relationPhoneInfo: relationshipContacts[this.state.contactPosition],
                    userMobileNumber: relationshipContacts[this.state.contactPosition].relationPhoneNumber,
                    isMobileRefreshed: !this.state.isMobileRefreshed
                });
            }
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (!this.state.isRelation) {
            if (this.props != prevProps) {
                if (this.props &&
                    this.props.profileState &&
                    this.props.profileState.profileUserMobileNumber) {
                    this.setState({
                        userMobileNumber: this.props.profileState.profileUserMobileNumber,
                        isMobileRefreshed: !this.state.isMobileRefreshed
                    });
                }
    
                if (this.props &&
                    this.props.profileState &&
                    this.props.profileState.profileUserHomeNumber) {
                    this.setState({
                        userHomeNumber: this.props.profileState.profileUserHomeNumber,
                        isMobileRefreshed: !this.state.isMobileRefreshed
                    });
                }
    
                if (this.props &&
                    this.props.profileState &&
                    this.props.profileState.profileUserWorkNumber) {
                    this.setState({
                        userWorkNumber: this.props.profileState.profileUserWorkNumber,
                        isMobileRefreshed: !this.state.isMobileRefreshed
                    });
                }
            }
        }
    }

    onMobileToggle = (item, index) => () => {
        var array = [...this.state.userMobileNumber];
        if (index !== -1) {
            let switchVal = array[index].isPrimaryMobile;
            array[index].isPrimaryMobile = !switchVal;
            this.setState({
                userMobileNumber: array,
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

    renderHomeNumberInformation = () => ({ item, index }) => {
        return (<UserPhoneInformation
            mobileNumberType={item.mobileNumberType}
            mobileNumber={item.mobileNumber}
            mobilePreferredTime={item.mobilePreferredTime}
            isPrimaryMobile={item.isPrimaryMobile}
            onMobileToggle={this.onMobileToggle(item, index)} />)
    };

    renderWorkNumberInformation = () => ({ item, index }) => {
        return (<UserPhoneInformation
            mobileNumberType={item.mobileNumberType}
            mobileNumber={item.mobileNumber}
            mobilePreferredTime={item.mobilePreferredTime}
            isPrimaryMobile={item.isPrimaryMobile}
            onMobileToggle={this.onMobileToggle(item, index)} />)
    };

    phoneInformationOnAdd = () => this.props.navigation.navigate('editAddPhoneNumber');

    phoneInformationOnCancel = () => {
        if (!this.state.isRelation) {
            this.props.navigation.navigate('profileSettings');
        } else {
            this.props.navigation.navigate('editFamilyMemberInfo');
        }
    };

    render() {
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
                            {globalString.editPhoneInformations.phoneInfoTitle}
                        </Text>
                    </View>

                    <View style={[styles.settingsView]}>
                        <Text style={styles.profileSettingViewOne}>
                            {globalString.editPhoneInformations.phoneLabel}
                        </Text>

                        <Text style={styles.profileSettingViewTwo}
                            onPress={this.phoneInformationOnAdd}>
                            {globalString.editPhoneInformations.phoneAddNew}
                        </Text>
                    </View>

                    <View style={styles.settingsBorder} />

                    {!this.state.isRelation ? (<View>

                        {/* User Mobile Number */}

                        <View>
                            <View style={styles.settingsView}>
                                <Text style={styles.phoneMobileView}>
                                    {globalString.editPhoneInformations.phoneMobileLabel}
                                </Text>
                            </View>

                            <FlatList
                                data={this.state.userMobileNumber}
                                keyExtractor={this.generateKeyExtractor}
                                extraData={this.state.isMobileRefreshed}
                                renderItem={this.renderPhoneInformation()} />

                        </View>

                        {/* User Home Number */}

                        <View>
                            <View style={styles.settingsView}>
                                <Text style={styles.phoneMobileView}>{"Home"}</Text>
                            </View>

                            <FlatList
                                data={this.state.userHomeNumber}
                                keyExtractor={this.generateKeyExtractor}
                                extraData={this.state.isMobileRefreshed}
                                renderItem={this.renderHomeNumberInformation()} />

                        </View>

                        {/* User Work Number */}

                        <View>
                            <View style={styles.settingsView}>
                                <Text style={styles.phoneMobileView}>{"Work"}</Text>
                            </View>

                            <FlatList
                                data={this.state.userWorkNumber}
                                keyExtractor={this.generateKeyExtractor}
                                extraData={this.state.isMobileRefreshed}
                                renderItem={this.renderWorkNumberInformation()} />
                        </View>

                        {/* User Fax Number */}

                        <View style={styles.settingsView}>
                            <Text style={styles.phoneAddFaxLabel}>
                                {globalString.editPhoneInformations.phoneFax}
                            </Text>
                        </View>

                        <View style={styles.phoneFaxView}>
                            <GInputComponent
                                placeholder={globalString.editPhoneInformations.phoneFaxLabel} />
                        </View>

                    </View>) : null}

                    {this.state.isRelation ? (
                        <View>
                            <View>
                                <View style={styles.settingsView}>
                                    <Text style={styles.phoneMobileView}>
                                        {globalString.editPhoneInformations.phoneMobileLabel}
                                    </Text>
                                </View>

                                <FlatList
                                    data={this.state.userMobileNumber}
                                    keyExtractor={this.generateKeyExtractor}
                                    extraData={this.state.isMobileRefreshed}
                                    renderItem={this.renderPhoneInformation()} />

                            </View>
                        </View>
                    ) : null}

                    <View style={styles.editFlexDirectionColumn}>
                        <GButtonComponent
                            buttonStyle={styles.cancelButtonStyle}
                            buttonText={globalString.common.cancel}
                            textStyle={styles.cancelButtonText}
                            onPress={this.phoneInformationOnCancel} />
                    </View>

                    <View style={styles.newVictorySection}>
                        <Text style={styles.termsofuseText1}>
                            {globalString.editPhoneInformations.phoneTerms}
                        </Text>
                        <Text style={styles.openInvestment}>
                            {globalString.editPhoneInformations.phoneInvestment}
                        </Text>
                    </View>

                    <View style={styles.connectWithUs}>
                        <Image
                            source={require("../../Images/logo.png")} />
                    </View>

                    <View style={styles.whiteBackground}>
                        <Text style={styles.editLabelInputMedium}>
                            {globalString.common.connectWithUs}
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

export default editPhoneInfoComponent;
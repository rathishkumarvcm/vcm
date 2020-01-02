import React, { Component } from 'react';
import { Text, View, Image, ScrollView, TouchableOpacity, FlatList, Switch } from 'react-native';
import { styles } from './styles';
import { GButtonComponent, GHeaderComponent, GIcon, GInputComponent, GRadioButtonComponent } from '../../CommonComponents';
import { scaledHeight } from '../../Utils/Resolution';
import globalString from '../../Constants/GlobalStrings';
import PropTypes from "prop-types";

let editDeleteMenuOption = [
    {
        name: 'Edit',
        id: '1'
    },
    {
        name: 'Delete',
        id: '2'
    },
];

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
                    <TouchableOpacity
                        onPress={props.onMenuOptionClicked}>
                        <Image style={styles.imageWidthHeight}
                            source={require("../../Images/menu_icon.png")} />
                    </TouchableOpacity>
                </View>
            </View>

            {props.selectedMenuIndex == 1 ?
                (<FlatList style={styles.editFlatList}
                    data={editDeleteMenuOption}
                    renderItem={({ item, index }) =>
                        (<TouchableOpacity style={styles.editDropdown}>
                            <Text style={styles.editDropdownText}
                                onPress={this.onEditAndDeleteItem(index)}>
                                {item.name}
                            </Text>
                        </TouchableOpacity>)}
                    keyExtractor={item => item.id} />)
                : null}

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
    )
};

UserPhoneInformation.propTypes = {
    mobileNumberType: PropTypes.string,
    mobileNumber: PropTypes.string,
    mobilePreferredTime: PropTypes.string,
    isPrimaryMobile: PropTypes.bool,
    onMobileToggle: PropTypes.func,
    onMenuOptionClicked: PropTypes.func,
    selectedMenuIndex: PropTypes.any,
    onMenuItemClicked: PropTypes.any
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

            selectedIndex: -1,
            isMobileRefreshed: false,
            isWorkRefreshed: false,
            isHomeRefreshed: false,

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
                    isHomeRefreshed: !this.state.isHomeRefreshed
                });
            }

            if (this.props &&
                this.props.profileState &&
                this.props.profileState.profileUserWorkNumber) {
                this.setState({
                    userWorkNumber: this.props.profileState.profileUserWorkNumber,
                    isWorkRefreshed: !this.state.isWorkRefreshed
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
                        isHomeRefreshed: !this.state.isHomeRefreshed
                    });
                }

                if (this.props &&
                    this.props.profileState &&
                    this.props.profileState.profileUserWorkNumber) {
                    this.setState({
                        userWorkNumber: this.props.profileState.profileUserWorkNumber,
                        isWorkRefreshed: !this.state.isWorkRefreshed
                    });
                }
            }
        }
    }

    renderPhoneInformation = () => ({ item, index }) =>
        (<View style={styles.editEmailHolder}>
            <View style={[styles.profileDivideIcon]}>
                <View style={styles.profileDivideIconOne}>
                    <Text style={styles.editEmailType}>
                        {item.mobileNumberType}
                    </Text>
                    <Text style={styles.editEmailId}>
                        {item.mobileNumber}
                    </Text>
                    <Text style={styles.editEmailId}>
                        {item.mobilePreferredTime}
                    </Text>
                </View>

                <View style={styles.profileDivideIconTwo}>
                    <TouchableOpacity
                        onPress={this.onMenuOptionClickedMobile(index)}>
                        <Image style={styles.imageWidthHeight}
                            source={require("../../Images/menu_icon.png")} />
                    </TouchableOpacity>
                </View>
            </View>

            {index === this.state.selectedIndex ?
                (<FlatList style={styles.editFlatList}
                    data={editDeleteMenuOption}
                    renderItem={({ item, index }) =>
                        (<TouchableOpacity style={styles.editDropdown}>
                            <Text style={styles.editDropdownText}>
                                {item.name}
                            </Text>
                        </TouchableOpacity>)}
                    keyExtractor={item => item.id} />)
                : null}

            <View style={styles.editEmailBorder} />

            <View style={styles.editAddressView}>
                <Text style={styles.editAddressLabel}>
                    {globalString.profileSettingsPage.profileMailPrimaryLabel}
                </Text>

                <View style={styles.editSwitchButton}>
                    <Switch trackColor={{ flase: '#DBDBDB', true: '#444444' }}
                        onValueChange={this.onMobileToggle(item, index, 'mobile')}
                        value={item.isPrimaryMobile} />
                </View>
            </View>
        </View>
        );

    onMenuOptionClickedMobile = (index) => () => {
        index === this.state.selectedIndex ?
            this.setState({
                isMobileRefreshed: !this.state.isMobileRefreshed,
                selectedIndex: -1
            }) :
            this.setState({
                isMobileRefreshed: !this.state.isMobileRefreshed,
                selectedIndex: index
            });
    }

    onMobileToggle = (item, index, toggleState) => () => {
        let array = [];
        switch (toggleState) {
            case 'mobile':
                array = [...this.state.userMobileNumber];
                if (index !== -1) {
                    for (let input = 0; input < array.length; input++) {
                        if (input === index) {
                            let switchVal = array[input].isPrimaryMobile;
                            array[input].isPrimaryMobile = !switchVal;
                        } else {
                            array[input].isPrimaryMobile = false;
                        }
                    }
                    this.setState({
                        userMobileNumber: array,
                        isMobileRefreshed: !this.state.isMobileRefreshed,
                    });
                }
                this.updatePrimaryMobile();
                break;

            case 'home':
                array = [...this.state.userHomeNumber];
                if (index !== -1) {
                    let switchVal = array[index].isPrimaryMobile;
                    array[index].isPrimaryMobile = !switchVal;
                    this.setState({
                        userHomeNumber: array,
                        isHomeRefreshed: !this.state.isHomeRefreshed
                    });
                }
                break;

            case 'work':
                array = [...this.state.userWorkNumber];
                if (index !== -1) {
                    let switchVal = array[index].isPrimaryMobile;
                    array[index].isPrimaryMobile = !switchVal;
                    this.setState({
                        userWorkNumber: array,
                        isWorkRefreshed: !this.state.isWorkRefreshed
                    });
                }
                break
        }
    }

    // Home Informations

    onMenuOptionClickedHome = (item, index) => () => {
        var array = [...this.state.userHomeNumber];
        array[index].selectedMenuIndex = index;
        this.setState({
            userHomeNumber: array,
            isHomeRefreshed: !this.state.isHomeRefreshed,
            selectedIndex: index
        });
    }

    renderHomeNumberInformation = () => ({ item, index }) => {
        return (<UserPhoneInformation
            mobileNumberType={item.mobileNumberType}
            mobileNumber={item.mobileNumber}
            mobilePreferredTime={item.mobilePreferredTime}
            isPrimaryMobile={item.isPrimaryMobile}
            onMobileToggle={this.onMobileToggle(item, index, 'home')}
            onMenuOptionClicked={this.onMenuOptionClickedHome(item, index)}
            selectedMenuIndex={index == this.state.selectedIndex ? 1 : 0} />)
    };

    // Work Informations

    onMenuOptionClickedWork = (item, index) => () => {
        var array = [...this.state.userWorkNumber];
        array[index].selectedMenuIndex = index;
        this.setState({
            userWorkNumber: array,
            isWorkRefreshed: !this.state.isWorkRefreshed,
            selectedIndex: index
        });
    }

    renderWorkNumberInformation = () => ({ item, index }) => {
        return (<UserPhoneInformation
            mobileNumberType={item.mobileNumberType}
            mobileNumber={item.mobileNumber}
            mobilePreferredTime={item.mobilePreferredTime}
            isPrimaryMobile={item.isPrimaryMobile}
            onMobileToggle={this.onMobileToggle(item, index, 'work')}
            onMenuOptionClicked={this.onMenuOptionClickedWork(item, index)}
            selectedMenuIndex={index == this.state.selectedIndex ? 1 : 0} />)
    };

    updatePrimaryMobile = () => {
        const updateMobileNumber = this.getUpdateMobile();
        this.props.saveProfileData("updatePrimaryMobile", updateMobileNumber);
        this.props.navigation.navigate('profileSettings');
    }

    getUpdateMobile = () => {
        let updatedMobileNumber = {};
        if (this.props && this.props.profileState) {
            updatedMobileNumber = {
                ...this.props.profileState
            };
        }
        return updatedMobileNumber;
    }

    phoneInformationOnAdd = () => {
        this.props.navigation.navigate('editAddPhoneNumber')
    };

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
                                extraData={this.state.isHomeRefreshed}
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
                                extraData={this.state.isWorkRefreshed}
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
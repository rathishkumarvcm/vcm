import React, { Component } from 'react';
import { Text, View, Image, ScrollView, TouchableOpacity, FlatList, Switch } from 'react-native';
import { styles } from './styles';
import { GButtonComponent, GHeaderComponent, GInputComponent, showAlertWithCancelButton } from '../../CommonComponents';
import globalString from '../../Constants/GlobalStrings';
import PropTypes from "prop-types";
import ImagesLoad from '../../Images/ImageIndex';

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

class EditPhoneInfoComponent extends Component {
    constructor(props) {
        super(props);
        // set true to isLoading if data for this screen yet to be received and wanted to show loader.
        this.state = {
            isLoading: false,
            enableBiometric: false,
            faceIdEnrolled: false,
            touchIdEnrolled: false,

            selectedMobileIndex: -1,
            selectedHomeIndex: -1,
            selectedWorkIndex: -1,

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

    componentDidUpdate(prevProps) {
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

    //  Render Mobile Phone List with Menu Option - Edit and Delete

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
                            source={ImagesLoad.menuIcon} />
                    </TouchableOpacity>
                </View>
            </View>

            {index === this.state.selectedMobileIndex ?
                (<FlatList style={styles.editFlatList}
                    data={editDeleteMenuOption}
                    renderItem={this.renderMobileMenuOptions()} />)
                : null}

            <View style={styles.editEmailBorder} />

            <View style={styles.editAddressView}>
                <Text style={styles.editAddressLabel}>
                    {globalString.profileSettingsPage.profileMailPrimaryLabel}
                </Text>

                <View style={styles.editSwitchButton}>
                    <Switch trackColor={{ flase: '#DBDBDB', true: '#444444' }}
                        onValueChange={this.onMobileToggle(index, 'mobile')}
                        value={item.isPrimaryMobile} />
                </View>
            </View>
        </View>
        );

    onMenuOptionClickedMobile = (index) => () => {
        index === this.state.selectedMobileIndex ?
            this.setState({
                isMobileRefreshed: !this.state.isMobileRefreshed,
                selectedMobileIndex: -1
            }) :
            this.setState({
                isMobileRefreshed: !this.state.isMobileRefreshed,
                selectedMobileIndex: index
            });
    }

    renderMobileMenuOptions = () => ({ item, index }) =>
        (<TouchableOpacity style={styles.editDropdown}>
            <Text style={styles.editDropdownText}
                onPress={this.onMobileMenuItemClicked(index)}>
                {item.name}
            </Text>
        </TouchableOpacity>);

    onMobileMenuItemClicked = (index) => () => {
        switch (index) {
            case 0:
                this.setState({
                    isMobileRefreshed: !this.state.isMobileRefreshed,
                    selectedMobileIndex: -1
                });
                break;

            case 1:
                showAlertWithCancelButton(globalString.common.vcmMemberService,
                    globalString.common.deleteAlertMsg,
                    globalString.common.cancel,
                    globalString.common.delete,
                    () => {
                        this.setState({
                            isMobileRefreshed: !this.state.isMobileRefreshed,
                            selectedMobileIndex: -1
                        });
                    },
                    () => {
                        var array = [...this.state.userMobileNumber];
                        var indexDelete = this.state.selectedMobileIndex
                        if (indexDelete !== -1) {
                            array.splice(indexDelete, 1);
                            this.setState({
                                userMobileNumber: array,
                                isMobileRefreshed: !this.state.isMobileRefreshed,
                                selectedMobileIndex: -1
                            });
                        }
                    });
                break;

            default:
                break;
        }
    }

    //  Render Home Number List with Menu Option - Edit and Delete

    renderHomeNumberInformation = () => ({ item, index }) =>
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
                        onPress={this.onMenuOptionClickedHome(index)}>
                        <Image style={styles.imageWidthHeight}
                            source={ImagesLoad.menuIcon} />
                    </TouchableOpacity>
                </View>
            </View>

            {index === this.state.selectedHomeIndex ?
                (<FlatList style={styles.editFlatList}
                    data={editDeleteMenuOption}
                    renderItem={this.renderHomeMenuOptions()} />)
                : null}

            <View style={styles.editEmailBorder} />

            <View style={styles.editAddressView}>
                <Text style={styles.editAddressLabel}>
                    {globalString.profileSettingsPage.profileMailPrimaryLabel}
                </Text>

                <View style={styles.editSwitchButton}>
                    <Switch trackColor={{ flase: '#DBDBDB', true: '#444444' }}
                        onValueChange={this.onMobileToggle(index, 'home')}
                        value={item.isPrimaryMobile} />
                </View>
            </View>
        </View>
        );

    onMenuOptionClickedHome = (index) => () => {
        index === this.state.selectedHomeIndex ?
            this.setState({
                isHomeRefreshed: !this.state.isHomeRefreshed,
                selectedHomeIndex: -1
            }) :
            this.setState({
                isHomeRefreshed: !this.state.isHomeRefreshed,
                selectedHomeIndex: index
            });
    }

    renderHomeMenuOptions = () => ({ item, index }) =>
        (<TouchableOpacity style={styles.editDropdown}>
            <Text style={styles.editDropdownText}
                onPress={this.onHomeMenuItemClicked(index)}>
                {item.name}
            </Text>
        </TouchableOpacity>);

    onHomeMenuItemClicked = (index) => () => {
        switch (index) {
            case 0:
                this.setState({
                    isHomeRefreshed: !this.state.isHomeRefreshed,
                    selectedHomeIndex: -1
                });
                break;

            case 1:
                showAlertWithCancelButton(globalString.common.vcmMemberService,
                    globalString.common.deleteAlertMsg,
                    globalString.common.cancel,
                    globalString.common.delete,
                    () => {
                        this.setState({
                            isHomeRefreshed: !this.state.isHomeRefreshed,
                            selectedHomeIndex: -1
                        });
                    },
                    () => {
                        var array = [...this.state.userHomeNumber];
                        var indexDelete = this.state.selectedHomeIndex
                        if (indexDelete !== -1) {
                            array.splice(indexDelete, 1);
                            this.setState({
                                userHomeNumber: array,
                                isHomeRefreshed: !this.state.isHomeRefreshed,
                                selectedHomeIndex: -1
                            });
                        }
                    });
                break;

            default:
                break;
        }
    }

    renderWorkNumberInformation = () => ({ item, index }) =>
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
                        onPress={this.onMenuOptionClickedWork(index)}>
                        <Image style={styles.imageWidthHeight}
                            source={ImagesLoad.menuIcon} />
                    </TouchableOpacity>
                </View>
            </View>

            {index === this.state.selectedWorkIndex ?
                (<FlatList style={styles.editFlatList}
                    data={editDeleteMenuOption}
                    renderItem={this.renderWorkMenuOptions()} />)
                : null}

            <View style={styles.editEmailBorder} />

            <View style={styles.editAddressView}>
                <Text style={styles.editAddressLabel}>
                    {globalString.profileSettingsPage.profileMailPrimaryLabel}
                </Text>

                <View style={styles.editSwitchButton}>
                    <Switch trackColor={{ flase: '#DBDBDB', true: '#444444' }}
                        onValueChange={this.onMobileToggle(index, 'work')}
                        value={item.isPrimaryMobile} />
                </View>
            </View>
        </View>
        );

    onMenuOptionClickedWork = (index) => () => {
        index === this.state.selectedWorkIndex ?
            this.setState({
                isWorkRefreshed: !this.state.isWorkRefreshed,
                selectedWorkIndex: -1
            }) :
            this.setState({
                isWorkRefreshed: !this.state.isWorkRefreshed,
                selectedWorkIndex: index
            });
    }

    renderWorkMenuOptions = () => ({ item, index }) =>
        (<TouchableOpacity style={styles.editDropdown}>
            <Text style={styles.editDropdownText}
                onPress={this.onWorkMenuItemClicked(index)}>
                {item.name}
            </Text>
        </TouchableOpacity>);

    onWorkMenuItemClicked = (index) => () => {
        switch (index) {
            case 0:
                this.setState({
                    isWorkRefreshed: !this.state.isWorkRefreshed,
                    selectedWorkIndex: -1
                });
                break;

            case 1:
                showAlertWithCancelButton(globalString.common.vcmMemberService,
                    globalString.common.deleteAlertMsg,
                    globalString.common.cancel,
                    globalString.common.delete,
                    () => {
                        this.setState({
                            isWorkRefreshed: !this.state.isWorkRefreshed,
                            selectedWorkIndex: -1
                        });
                    },
                    () => {
                        var array = [...this.state.userWorkNumber];
                        var indexDelete = this.state.selectedWorkIndex
                        if (indexDelete !== -1) {
                            array.splice(indexDelete, 1);
                            this.setState({
                                userWorkNumber: array,
                                isWorkRefreshed: !this.state.isWorkRefreshed,
                                selectedWorkIndex: -1
                            });
                        }
                    });
                break;

            default:
                break;
        }
    }

    onMobileToggle = (index, toggleState) => () => {
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
                    this.updatePrimaryMobile();
                }
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

                            {this.state.userMobileNumber.length === 0 ?
                                (<View style={[styles.editEmailHolderNoFile, styles.marketingPadding]}>
                                    <Text style={styles.marketingHomeBold}>
                                        {globalString.marketingPrivacyLabel.marketingNoneLabel}
                                    </Text>
                                    <Text style={styles.marketingHomeNormal}>
                                        {globalString.marketingPrivacyLabel.marketingNoneMessageLabel}
                                    </Text>
                                </View>)
                                :
                                (<FlatList
                                    data={this.state.userMobileNumber}
                                    keyExtractor={this.generateKeyExtractor}
                                    extraData={this.state.isMobileRefreshed}
                                    renderItem={this.renderPhoneInformation()} />)}
                        </View>

                        {/* User Home Number */}

                        <View>
                            <View style={styles.settingsView}>
                                <Text style={styles.phoneMobileView}>{"Home"}</Text>
                            </View>

                            {this.state.userHomeNumber.length === 0 ?
                                (<View style={[styles.editEmailHolderNoFile, styles.marketingPadding]}>
                                    <Text style={styles.marketingHomeBold}>
                                        {globalString.marketingPrivacyLabel.marketingNoneLabel}
                                    </Text>
                                    <Text style={styles.marketingHomeNormal}>
                                        {globalString.marketingPrivacyLabel.marketingNoneMessageLabel}
                                    </Text>
                                </View>)
                                :
                                (<FlatList
                                    data={this.state.userHomeNumber}
                                    keyExtractor={this.generateKeyExtractor}
                                    extraData={this.state.isHomeRefreshed}
                                    renderItem={this.renderHomeNumberInformation()} />)}
                        </View>

                        {/* User Work Number */}

                        <View>
                            <View style={styles.settingsView}>
                                <Text style={styles.phoneMobileView}>{"Work"}</Text>
                            </View>

                            {this.state.userWorkNumber.length === 0 ?
                                (<View style={[styles.editEmailHolderNoFile, styles.marketingPadding]}>
                                    <Text style={styles.marketingHomeBold}>
                                        {globalString.marketingPrivacyLabel.marketingNoneLabel}
                                    </Text>
                                    <Text style={styles.marketingHomeNormal}>
                                        {globalString.marketingPrivacyLabel.marketingNoneMessageLabel}
                                    </Text>
                                </View>)
                                :
                                (<FlatList
                                    data={this.state.userWorkNumber}
                                    keyExtractor={this.generateKeyExtractor}
                                    extraData={this.state.isWorkRefreshed}
                                    renderItem={this.renderWorkNumberInformation()} />)}
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

                                {this.state.userMobileNumber.length === 0 ?
                                    (<View style={[styles.editEmailHolderNoFile, styles.marketingPadding]}>
                                        <Text style={styles.marketingHomeBold}>
                                            {globalString.marketingPrivacyLabel.marketingNoneLabel}
                                        </Text>
                                        <Text style={styles.marketingHomeNormal}>
                                            {globalString.marketingPrivacyLabel.marketingNoneMessageLabel}
                                        </Text>
                                    </View>)
                                    :
                                    (<FlatList
                                        data={this.state.userMobileNumber}
                                        keyExtractor={this.generateKeyExtractor}
                                        extraData={this.state.isMobileRefreshed}
                                        renderItem={this.renderPhoneInformation()} />)}
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
                            source={ImagesLoad.applicationLogo} />
                    </View>

                    <View style={styles.whiteBackground}>
                        <Text style={styles.editLabelInputMedium}>
                            {globalString.common.connectWithUs}
                        </Text>
                    </View>

                    <View style={styles.whiteBackground}>
                        <Image style={styles.imageWidthHeight}
                            source={ImagesLoad.twitterlogo} />
                        <Image style={styles.imageWidthHeight}
                            source={ImagesLoad.linkedinlogo} />
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

export default EditPhoneInfoComponent;
import React, { Component } from 'react';
import { Text, View, Image, ScrollView, TouchableOpacity, FlatList, Switch } from 'react-native';
import PropTypes from "prop-types";
import styles from './styles';
import { GButtonComponent, GHeaderComponent, GInputComponent, showAlertWithCancelButton } from '../../CommonComponents';
import globalString from '../../Constants/GlobalStrings';
import ImagesLoad from '../../Images/ImageIndex';

const editDeleteMenuOption = [
    {
        name: 'Edit',
        id: '1'
    },
    {
        name: 'Delete',
        id: '2'
    },
];

const swithcStyle = { flase: '#DBDBDB', true: '#444444' };

class EditPhoneInfoComponent extends Component {
    constructor(props) {
        super(props);
        // set true to isLoading if data for this screen yet to be received and wanted to show loader.
        this.state = {
            selectedMobileIndex: -1,
            selectedHomeIndex: -1,
            selectedWorkIndex: -1,

            isMobileRefreshed: false,
            isWorkRefreshed: false,
            isHomeRefreshed: false,

            userMobileNumber: [],
            userHomeNumber: [],
            userWorkNumber: [],

            contactPosition: '',
            isRelation: ''
        };
    }

    componentDidMount() {
        this.phoneInformationMount();
    }

    componentDidUpdate(prevProps) {
        this.phoneInformationUpdate(prevProps);
    }

    phoneInformationMount = () => {
        const { isRelation, isMobileRefreshed, isHomeRefreshed, isWorkRefreshed, contactPosition } = this.state;
        const { profileState, navigation } = this.props;

        if (this.props) {
            this.setState({
                contactPosition: navigation.getParam('contactPosition'),
                isRelation: navigation.getParam('isRelation')
            });
        }

        if (!isRelation) {
            if (this.props &&
                profileState &&
                profileState.profileUserMobileNumber) {
                this.setState({
                    userMobileNumber: profileState.profileUserMobileNumber,
                    isMobileRefreshed: !isMobileRefreshed
                });
            }

            if (this.props &&
                profileState &&
                profileState.profileUserHomeNumber) {
                this.setState({
                    userHomeNumber: profileState.profileUserHomeNumber,
                    isHomeRefreshed: !isHomeRefreshed
                });
            }

            if (this.props &&
                profileState &&
                profileState.profileUserWorkNumber) {
                this.setState({
                    userWorkNumber: profileState.profileUserWorkNumber,
                    isWorkRefreshed: !isWorkRefreshed
                });
            }
        } else {
            let relationshipContacts = [];
            if (this.props &&
                profileState &&
                profileState.profileRelationShipDetails) {
                relationshipContacts = [...profileState.profileRelationShipDetails];
                this.setState({
                    userMobileNumber: relationshipContacts[contactPosition].relationPhoneNumber,
                    isMobileRefreshed: !isMobileRefreshed
                });
            }
        }
    }

    phoneInformationUpdate = (prevProps) => {
        const { isRelation, isMobileRefreshed, isHomeRefreshed, isWorkRefreshed } = this.state;
        const { profileState } = this.props;
        if (!isRelation) {
            if (this.props !== prevProps) {
                if (this.props &&
                    profileState &&
                    profileState.profileUserMobileNumber) {
                    this.setState({
                        userMobileNumber: profileState.profileUserMobileNumber,
                        isMobileRefreshed: !isMobileRefreshed
                    });
                }

                if (this.props &&
                    profileState &&
                    profileState.profileUserHomeNumber) {
                    this.setState({
                        userHomeNumber: profileState.profileUserHomeNumber,
                        isHomeRefreshed: !isHomeRefreshed
                    });
                }

                if (this.props &&
                    profileState &&
                    profileState.profileUserWorkNumber) {
                    this.setState({
                        userWorkNumber: profileState.profileUserWorkNumber,
                        isWorkRefreshed: !isWorkRefreshed
                    });
                }
            }
        }
    }

    //  Render Mobile Phone List with Menu Option - Edit and Delete

    renderPhoneInformation = () => ({ item, index }) => {
        const { selectedMobileIndex } = this.state;
        return (
            <View style={styles.editEmailHolder}>
                <View style={styles.profileDivideIcon}>
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
                            onPress={this.onMenuOptionClickedMobile(index)}
                        >
                            <Image style={styles.imageWidthHeight}
                                source={ImagesLoad.menuIcon}
                            />
                        </TouchableOpacity>
                    </View>
                </View>

                {index === selectedMobileIndex ?
                    (
                        <FlatList style={styles.editFlatList}
                            data={editDeleteMenuOption}
                            renderItem={this.renderMobileMenuOptions()}
                        />
                    )
                    : null}

                <View style={styles.editEmailBorder} />

                <View style={styles.editAddressView}>
                    <Text style={styles.editAddressLabel}>
                        {globalString.profileSettingsPage.profileMailPrimaryLabel}
                    </Text>

                    <View style={styles.editSwitchButton}>
                        <Switch trackColor={swithcStyle}
                            onValueChange={this.onMobileToggle(index, 'mobile')}
                            value={item.isPrimaryMobile}
                        />
                    </View>
                </View>
            </View>
        );
    }

    onMenuOptionClickedMobile = (index) => () => {
        const { selectedMobileIndex, isMobileRefreshed } = this.state;
        if (index === selectedMobileIndex) {
            this.setState({
                isMobileRefreshed: !isMobileRefreshed,
                selectedMobileIndex: -1
            });
        } else {
            this.setState({
                isMobileRefreshed: !isMobileRefreshed,
                selectedMobileIndex: index
            });
        }
        // index === this.state.selectedMobileIndex ?
        //     this.setState({
        //         isMobileRefreshed: !this.state.isMobileRefreshed,
        //         selectedMobileIndex: -1
        //     }) :
        //     this.setState({
        //         isMobileRefreshed: !this.state.isMobileRefreshed,
        //         selectedMobileIndex: index
        //     });
    }

    renderMobileMenuOptions = () => ({ item, index }) =>
        (
            <TouchableOpacity style={styles.editDropdown}>
                <Text style={styles.editDropdownText}
                    onPress={this.onMobileMenuItemClicked(index)}
                >
                    {item.name}
                </Text>
            </TouchableOpacity>
        );

    onMobileMenuItemClicked = (index) => () => {
        const { isMobileRefreshed, userMobileNumber, selectedMobileIndex } = this.state;
        switch (index) {
            case 0:
                this.setState({
                    isMobileRefreshed: !isMobileRefreshed,
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
                            isMobileRefreshed: !isMobileRefreshed,
                            selectedMobileIndex: -1
                        });
                    },
                    () => {
                        const array = [...userMobileNumber];
                        const indexDelete = selectedMobileIndex;
                        if (indexDelete !== -1) {
                            array.splice(indexDelete, 1);
                            this.setState({
                                userMobileNumber: array,
                                isMobileRefreshed: !isMobileRefreshed,
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

    renderHomeNumberInformation = () => ({ item, index }) => {
        const { selectedHomeIndex } = this.state;
        return (
            <View style={styles.editEmailHolder}>
                <View style={styles.profileDivideIcon}>
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
                            onPress={this.onMenuOptionClickedHome(index)}
                        >
                            <Image style={styles.imageWidthHeight}
                                source={ImagesLoad.menuIcon}
                            />
                        </TouchableOpacity>
                    </View>
                </View>

                {index === selectedHomeIndex ?
                    (
                        <FlatList style={styles.editFlatList}
                            data={editDeleteMenuOption}
                            renderItem={this.renderHomeMenuOptions()}
                        />
                    )
                    : null}

                <View style={styles.editEmailBorder} />

                <View style={styles.editAddressView}>
                    <Text style={styles.editAddressLabel}>
                        {globalString.profileSettingsPage.profileMailPrimaryLabel}
                    </Text>

                    <View style={styles.editSwitchButton}>
                        <Switch trackColor={swithcStyle}
                            onValueChange={this.onMobileToggle(index, 'home')}
                            value={item.isPrimaryMobile}
                        />
                    </View>
                </View>
            </View>
        );
    }

    onMenuOptionClickedHome = (index) => () => {
        const { selectedHomeIndex, isHomeRefreshed } = this.state;
        if (index === selectedHomeIndex) {
            this.setState({
                isHomeRefreshed: !isHomeRefreshed,
                selectedHomeIndex: -1
            });
        } else {
            this.setState({
                isHomeRefreshed: !isHomeRefreshed,
                selectedHomeIndex: index
            });
        }
        // index === this.state.selectedHomeIndex ?
        //     this.setState({
        //         isHomeRefreshed: !this.state.isHomeRefreshed,
        //         selectedHomeIndex: -1
        //     }) :
        //     this.setState({
        //         isHomeRefreshed: !this.state.isHomeRefreshed,
        //         selectedHomeIndex: index
        //     });
    }

    renderHomeMenuOptions = () => ({ item, index }) =>
        (
            <TouchableOpacity style={styles.editDropdown}>
                <Text style={styles.editDropdownText}
                    onPress={this.onHomeMenuItemClicked(index)}
                >
                    {item.name}
                </Text>
            </TouchableOpacity>
        );

    onHomeMenuItemClicked = (index) => () => {
        const { isHomeRefreshed, userHomeNumber, selectedHomeIndex } = this.state;
        switch (index) {
            case 0:
                this.setState({
                    isHomeRefreshed: !isHomeRefreshed,
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
                            isHomeRefreshed: !isHomeRefreshed,
                            selectedHomeIndex: -1
                        });
                    },
                    () => {
                        const array = [...userHomeNumber];
                        const indexDelete = selectedHomeIndex;
                        if (indexDelete !== -1) {
                            array.splice(indexDelete, 1);
                            this.setState({
                                userHomeNumber: array,
                                isHomeRefreshed: !isHomeRefreshed,
                                selectedHomeIndex: -1
                            });
                        }
                    });
                break;

            default:
                break;
        }
    }

    renderWorkNumberInformation = () => ({ item, index }) => {
        const { selectedWorkIndex } = this.state;
        return (
            <View style={styles.editEmailHolder}>
                <View style={styles.profileDivideIcon}>
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
                            onPress={this.onMenuOptionClickedWork(index)}
                        >
                            <Image style={styles.imageWidthHeight}
                                source={ImagesLoad.menuIcon}
                            />
                        </TouchableOpacity>
                    </View>
                </View>

                {index === selectedWorkIndex ?
                    (
                        <FlatList style={styles.editFlatList}
                            data={editDeleteMenuOption}
                            renderItem={this.renderWorkMenuOptions()}
                        />
                    )
                    : null}

                <View style={styles.editEmailBorder} />

                <View style={styles.editAddressView}>
                    <Text style={styles.editAddressLabel}>
                        {globalString.profileSettingsPage.profileMailPrimaryLabel}
                    </Text>

                    <View style={styles.editSwitchButton}>
                        <Switch trackColor={swithcStyle}
                            onValueChange={this.onMobileToggle(index, 'work')}
                            value={item.isPrimaryMobile}
                        />
                    </View>
                </View>
            </View>
        );
    }

    onMenuOptionClickedWork = (index) => () => {
        const { selectedWorkIndex, isWorkRefreshed } = this.state;
        if (index === selectedWorkIndex) {
            this.setState({
                isWorkRefreshed: !isWorkRefreshed,
                selectedWorkIndex: -1
            });
        } else {
            this.setState({
                isWorkRefreshed: !isWorkRefreshed,
                selectedWorkIndex: index
            });
        }
        // index === this.state.selectedWorkIndex ?
        //     this.setState({
        //         isWorkRefreshed: !this.state.isWorkRefreshed,
        //         selectedWorkIndex: -1
        //     }) :
        //     this.setState({
        //         isWorkRefreshed: !this.state.isWorkRefreshed,
        //         selectedWorkIndex: index
        //     });
    }

    renderWorkMenuOptions = () => ({ item, index }) =>
        (
            <TouchableOpacity style={styles.editDropdown}>
                <Text style={styles.editDropdownText}
                    onPress={this.onWorkMenuItemClicked(index)}
                >
                    {item.name}
                </Text>
            </TouchableOpacity>
        );

    onWorkMenuItemClicked = (index) => () => {
        const { isWorkRefreshed, userWorkNumber, selectedWorkIndex } = this.state;
        switch (index) {
            case 0:
                this.setState({
                    isWorkRefreshed: !isWorkRefreshed,
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
                            isWorkRefreshed: !isWorkRefreshed,
                            selectedWorkIndex: -1
                        });
                    },
                    () => {
                        const array = [...userWorkNumber];
                        const indexDelete = selectedWorkIndex;
                        if (indexDelete !== -1) {
                            array.splice(indexDelete, 1);
                            this.setState({
                                userWorkNumber: array,
                                isWorkRefreshed: !isWorkRefreshed,
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
        const { userMobileNumber, isMobileRefreshed, userHomeNumber, isHomeRefreshed, userWorkNumber, isWorkRefreshed } = this.state;
        let array = [];
        switch (toggleState) {
            case 'mobile':
                array = [...userMobileNumber];
                if (index !== -1) {
                    for (let input = 0; input < array.length; input += 1) {
                        if (input === index) {
                            const switchVal = array[input].isPrimaryMobile;
                            array[input].isPrimaryMobile = !switchVal;
                        } else {
                            array[input].isPrimaryMobile = false;
                        }
                    }
                    this.setState({
                        userMobileNumber: array,
                        isMobileRefreshed: !isMobileRefreshed,
                    });
                    this.updatePrimaryMobile();
                }
                break;

            case 'home':
                array = [...userHomeNumber];
                if (index !== -1) {
                    const switchVal = array[index].isPrimaryMobile;
                    array[index].isPrimaryMobile = !switchVal;
                    this.setState({
                        userHomeNumber: array,
                        isHomeRefreshed: !isHomeRefreshed
                    });
                }
                break;

            case 'work':
                array = [...userWorkNumber];
                if (index !== -1) {
                    const switchVal = array[index].isPrimaryMobile;
                    array[index].isPrimaryMobile = !switchVal;
                    this.setState({
                        userWorkNumber: array,
                        isWorkRefreshed: !isWorkRefreshed
                    });
                }
                break;

            default:
                break;
        }
    }

    updatePrimaryMobile = () => {
        const { saveProfileData, navigation } = this.props;
        const updateMobileNumber = this.getUpdateMobile();
        saveProfileData("updatePrimaryMobile", updateMobileNumber);
        navigation.navigate('profileSettings');
    }

    getUpdateMobile = () => {
        const { profileState } = this.props;
        let updatedMobileNumber = {};
        if (this.props && profileState) {
            updatedMobileNumber = {
                ...profileState
            };
        }
        return updatedMobileNumber;
    }

    phoneInformationOnAdd = () => {
        const { navigation } = this.props;
        navigation.navigate('editAddPhoneNumber');
    };

    phoneInformationOnCancel = () => {
        const { isRelation } = this.state;
        const { navigation } = this.props;
        if (!isRelation) {
            navigation.navigate('profileSettings');
        } else {
            navigation.navigate('editFamilyMemberInfo');
        }
    };

    render() {
        const { navigation } = this.props;
        const { isRelation, userMobileNumber, isMobileRefreshed, userHomeNumber, isHomeRefreshed,
            userWorkNumber, isWorkRefreshed } = this.state;
        return (
            <View style={styles.container}>
                <GHeaderComponent
                    navigation={navigation}
                />

                <ScrollView style={styles.phoneInfoFlex}>

                    <View style={styles.settingsView}>
                        <Text style={styles.settingsInfo}>
                            {globalString.editProfilePageValue.editAddressInfoHead}
                        </Text>
                        <Text style={styles.phoneInfoTitle}>
                            {globalString.editPhoneInformations.phoneInfoTitle}
                        </Text>
                    </View>

                    <View style={styles.settingsView}>
                        <Text style={styles.profileSettingViewOne}>
                            {globalString.editPhoneInformations.phoneLabel}
                        </Text>

                        <Text style={styles.profileSettingViewTwo}
                            onPress={this.phoneInformationOnAdd}
                        >
                            {globalString.editPhoneInformations.phoneAddNew}
                        </Text>
                    </View>

                    <View style={styles.settingsBorder} />

                    {!isRelation ? (
                        <View>

                            {/* User Mobile Number */}

                            <View>
                                <View style={styles.settingsView}>
                                    <Text style={styles.phoneMobileView}>
                                        {globalString.editPhoneInformations.phoneMobileLabel}
                                    </Text>
                                </View>

                                {userMobileNumber.length === 0 ?
                                    (
                                        <View style={styles.editEmailHolderNoFile}>
                                            <Text style={styles.marketingHomeBold}>
                                                {globalString.marketingPrivacyLabel.marketingNoneLabel}
                                            </Text>
                                            <Text style={styles.marketingHomeNormal}>
                                                {globalString.marketingPrivacyLabel.marketingNoneMessageLabel}
                                            </Text>
                                        </View>
                                    )
                                    :
                                    (
                                        <FlatList
                                            data={userMobileNumber}
                                            keyExtractor={this.generateKeyExtractor}
                                            extraData={isMobileRefreshed}
                                            renderItem={this.renderPhoneInformation()}
                                        />
                                    )}
                            </View>

                            {/* User Home Number */}

                            <View>
                                <View style={styles.settingsView}>
                                    <Text style={styles.phoneMobileView}>Home</Text>
                                </View>

                                {userHomeNumber.length === 0 ?
                                    (
                                        <View style={styles.editEmailHolderNoFile}>
                                            <Text style={styles.marketingHomeBold}>
                                                {globalString.marketingPrivacyLabel.marketingNoneLabel}
                                            </Text>
                                            <Text style={styles.marketingHomeNormal}>
                                                {globalString.marketingPrivacyLabel.marketingNoneMessageLabel}
                                            </Text>
                                        </View>
                                    )
                                    :
                                    (
                                        <FlatList
                                            data={userHomeNumber}
                                            keyExtractor={this.generateKeyExtractor}
                                            extraData={isHomeRefreshed}
                                            renderItem={this.renderHomeNumberInformation()}
                                        />
                                    )}
                            </View>

                            {/* User Work Number */}

                            <View>
                                <View style={styles.settingsView}>
                                    <Text style={styles.phoneMobileView}>Work</Text>
                                </View>

                                {userWorkNumber.length === 0 ?
                                    (
                                        <View style={styles.editEmailHolderNoFile}>
                                            <Text style={styles.marketingHomeBold}>
                                                {globalString.marketingPrivacyLabel.marketingNoneLabel}
                                            </Text>
                                            <Text style={styles.marketingHomeNormal}>
                                                {globalString.marketingPrivacyLabel.marketingNoneMessageLabel}
                                            </Text>
                                        </View>
                                    )
                                    :
                                    (
                                        <FlatList
                                            data={userWorkNumber}
                                            keyExtractor={this.generateKeyExtractor}
                                            extraData={isWorkRefreshed}
                                            renderItem={this.renderWorkNumberInformation()}
                                        />
                                    )}
                            </View>

                            {/* User Fax Number */}

                            <View style={styles.settingsView}>
                                <Text style={styles.phoneAddFaxLabel}>
                                    {globalString.editPhoneInformations.phoneFax}
                                </Text>
                            </View>

                            <View style={styles.phoneFaxView}>
                                <GInputComponent
                                    placeholder={globalString.editPhoneInformations.phoneFaxLabel}
                                />
                            </View>

                        </View>
                    ) : null}

                    {isRelation ? (
                        <View>
                            <View>
                                <View style={styles.settingsView}>
                                    <Text style={styles.phoneMobileView}>
                                        {globalString.editPhoneInformations.phoneMobileLabel}
                                    </Text>
                                </View>

                                {userMobileNumber.length === 0 ?
                                    (
                                        <View style={styles.editEmailHolderNoFile}>
                                            <Text style={styles.marketingHomeBold}>
                                                {globalString.marketingPrivacyLabel.marketingNoneLabel}
                                            </Text>
                                            <Text style={styles.marketingHomeNormal}>
                                                {globalString.marketingPrivacyLabel.marketingNoneMessageLabel}
                                            </Text>
                                        </View>
                                    )
                                    :
                                    (
                                        <FlatList
                                            data={userMobileNumber}
                                            keyExtractor={this.generateKeyExtractor}
                                            extraData={isMobileRefreshed}
                                            renderItem={this.renderPhoneInformation()}
                                        />
                                    )}
                            </View>
                        </View>
                    ) : null}

                    <View style={styles.editFlexDirectionColumn}>
                        <GButtonComponent
                            buttonStyle={styles.cancelButtonStyle}
                            buttonText={globalString.common.cancel}
                            textStyle={styles.cancelButtonText}
                            onPress={this.phoneInformationOnCancel}
                        />
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
                            source={ImagesLoad.applicationLogo}
                        />
                    </View>

                    <View style={styles.whiteBackground}>
                        <Text style={styles.editLabelInputMedium}>
                            {globalString.common.connectWithUs}
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

EditPhoneInfoComponent.propTypes = {
    navigation: PropTypes.instanceOf(Object),
    profileState: PropTypes.instanceOf(Object),
    saveProfileData: PropTypes.func
};

EditPhoneInfoComponent.defaultProps = {
    navigation: {},
    profileState: {},
    saveProfileData: null
};

export default EditPhoneInfoComponent;
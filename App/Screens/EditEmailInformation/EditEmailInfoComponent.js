import React, { Component } from 'react';
import { Text, View, Image, ScrollView, TouchableOpacity, FlatList, Switch } from 'react-native';
import PropTypes from "prop-types";
import styles from './styles';
import { GButtonComponent, GHeaderComponent, showAlertWithCancelButton } from '../../CommonComponents';
import globalString from '../../Constants/GlobalStrings';
import ImagesLoad from '../../Images/ImageIndex';

const editDeleteMenuOption = [
    {
        menuName: 'Edit',
        menuId: '1'
    },
    {
        menuName: 'Delete',
        menuId: '2'
    },
];

const switchStyle = { flase: '#DBDBDB', true: '#444444' };

class EditEmailInfoComponent extends Component {
    constructor(props) {
        super(props);
        // set true to isLoading if data for this screen yet to be received and wanted to show loader.
        this.state = {
            selectedIndex: -1,
            isEmailRefreshed: false,
            profileEmailData: []
        };
    }

    componentDidMount() {
        this.emailInformationMount();
    }

    componentDidUpdate(prevProps) {
        this.emailInformationUpdate(prevProps);
    }

    emailInformationMount = () => {
        const { profileState } = this.props;
        const { isEmailRefreshed } = this.state;

        if (this.props &&
            profileState &&
            profileState.profileUserMailInformation) {
            this.setState({
                profileEmailData: profileState.profileUserMailInformation,
                isEmailRefreshed: !isEmailRefreshed
            });
        }
    }

    emailInformationUpdate = (prevProps) => {
        const { profileState } = this.props;
        const { isEmailRefreshed } = this.state;
        if (this.props !== prevProps) {
            if (this.props &&
                profileState &&
                profileState.profileUserMailInformation) {
                this.setState({
                    profileEmailData: profileState.profileUserMailInformation,
                    isEmailRefreshed: !isEmailRefreshed
                });
            }
        }
    }

    //  Render Email Informations

    renderEmailInformation = () => ({ item, index }) => {
        const { selectedIndex } = this.state;
        return (
            <View style={styles.editEmailHolder}>
                <View style={styles.profileDivideIcon}>
                    <View style={styles.profileDivideIconOne}>
                        <Text style={styles.editEmailType}>
                            {item.emailType}
                        </Text>
                        <Text style={styles.editEmailId}>
                            {item.emailId}
                        </Text>
                    </View>

                    <View style={styles.profileDivideIconTwo}>
                        <TouchableOpacity
                            onPress={this.onMenuOptionClicked(index)}
                        >
                            <Image style={styles.imageWidthHeight}
                                source={ImagesLoad.menuIcon}
                            />
                        </TouchableOpacity>
                    </View>
                </View>

                {index === selectedIndex ?
                    (
                        <FlatList style={styles.editFlatList}
                            data={editDeleteMenuOption}
                            renderItem={this.renderMenuOption()}
                        />
                    )
                    : null}

                <View style={styles.editEmailBorder} />

                <View style={styles.editAddressView}>
                    <Text style={styles.editAddressLabel}>
                        {globalString.profileSettingsPage.profileMailPrimaryLabel}
                    </Text>

                    <View style={styles.editSwitchButton}>
                        <Switch trackColor={switchStyle}
                            onValueChange={this.onEmailToggle(index)}
                            value={item.isPrimaryEmail}
                        />
                    </View>
                </View>
            </View>
        );
    }

    onEmailToggle = (index) => () => {
        const { profileEmailData, isEmailRefreshed } = this.state;
        const array = [...profileEmailData];
        if (index !== -1) {
            const switchVal = array[index].isPrimaryEmail;
            array[index].isPrimaryEmail = !switchVal;
            this.setState({
                profileEmailData: array,
                isEmailRefreshed: !isEmailRefreshed
            });
        }
    }

    onMenuOptionClicked = (index) => () => {
        const { selectedIndex, isEmailRefreshed } = this.state;
        if (index === selectedIndex) {
            this.setState({
                isEmailRefreshed: !isEmailRefreshed,
                selectedIndex: -1
            });
        } else {
            this.setState({
                isEmailRefreshed: !isEmailRefreshed,
                selectedIndex: index
            });
        }
        // index === this.state.selectedIndex ?
        //     this.setState({
        //         isEmailRefreshed: !this.state.isEmailRefreshed,
        //         selectedIndex: -1
        //     }) :
        //     this.setState({
        //         isEmailRefreshed: !this.state.isEmailRefreshed,
        //         selectedIndex: index
        //     });
    }

    renderMenuOption = () => ({ item, index }) =>
        (
            <TouchableOpacity style={styles.editDropdown}>
                <Text style={styles.editDropdownText}
                    onPress={this.onMenuItemClicked(index)}
                >
                    {item.menuName}
                </Text>
            </TouchableOpacity>
        );

    onMenuItemClicked = (index) => () => {
        const { isEmailRefreshed, profileEmailData, selectedIndex } = this.state;
        switch (index) {
            case 0:
                this.setState({
                    isEmailRefreshed: !isEmailRefreshed,
                    selectedIndex: -1
                });
                break;

            case 1:
                showAlertWithCancelButton(globalString.common.vcmMemberService,
                    globalString.common.deleteAlertMsg,
                    globalString.common.cancel,
                    globalString.common.delete,
                    () => {
                        this.setState({
                            isEmailRefreshed: !isEmailRefreshed,
                            selectedIndex: -1
                        });
                    },
                    () => {
                        const array = [...profileEmailData];
                        const indexDelete = selectedIndex;
                        if (indexDelete !== -1) {
                            array.splice(indexDelete, 1);
                            this.setState({
                                profileEmailData: array,
                                isEmailRefreshed: !isEmailRefreshed,
                                selectedIndex: -1
                            });
                        }
                    });
                break;

            default:
                break;
        }
    }

    emailAddNew = () => {
        const { navigation } = this.props;
        navigation.navigate('editEmailAddNew');
    }

    emailAddNewOnCancel = () => {
        const { navigation } = this.props;
        navigation.navigate('profileSettings');
    }

    render() {
        const { navigation } = this.props;
        const { profileEmailData, isEmailRefreshed } = this.state;
        return (
            <View style={styles.container}>
                <GHeaderComponent
                    navigation={navigation}
                />

                <ScrollView style={styles.emailInformationFlex}>

                    <View style={styles.settingsView}>
                        <Text style={styles.settingsInfo}>
                            {globalString.editProfilePageValue.editAddressInfoHead}
                        </Text>
                        <Text style={styles.emailInformationTitle}>
                            {globalString.editEmailInformations.editEmailTitle}
                        </Text>
                    </View>

                    <View style={styles.settingsView}>
                        <Text style={styles.profileSettingViewOne}>
                            {globalString.editEmailInformations.editEmailTitle}
                        </Text>

                        <Text style={styles.profileSettingViewTwo}
                            onPress={this.emailAddNew}
                        >
                            {globalString.editPhoneInformations.phoneAddNew}
                        </Text>
                    </View>

                    <View style={styles.settingsBorder} />

                    <View>
                        {profileEmailData.length === 0 ?
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
                                    data={profileEmailData}
                                    extraData={isEmailRefreshed}
                                    keyExtractor={this.generateKeyExtractor}
                                    renderItem={this.renderEmailInformation()}
                                />
                            )}
                    </View>

                    <View style={styles.editFlexDirectionColumn}>
                        <GButtonComponent
                            buttonStyle={styles.cancelButtonStyle}
                            buttonText={globalString.common.back}
                            textStyle={styles.cancelButtonText}
                            onPress={this.emailAddNewOnCancel}
                        />
                    </View>

                    <View style={styles.newVictorySection}>
                        <Text style={styles.termsofuseText1}>
                            {globalString.editEmailInformations.editEmailTerms}
                        </Text>
                        <Text style={styles.openInvestment}>
                            {globalString.editEmailInformations.editEmailInvestment}
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

EditEmailInfoComponent.propTypes = {
    navigation: PropTypes.instanceOf(Object).isRequired,
    profileState: PropTypes.instanceOf(Object)
};

EditEmailInfoComponent.defaultProps = {
    profileState: {}
};

export default EditEmailInfoComponent;
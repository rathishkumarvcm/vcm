import React, { Component } from 'react';
import { Text, View, Image, ScrollView, TouchableOpacity, FlatList, Switch } from 'react-native';
import { styles } from './styles';
import { GButtonComponent, GHeaderComponent, showAlertWithCancelButton } from '../../CommonComponents';
import globalString from '../../Constants/GlobalStrings';
import ImagesLoad from '../../Images/ImageIndex';

let editDeleteMenuOption = [
    {
        menuName: 'Edit',
        menuId: '1'
    },
    {
        menuName: 'Delete',
        menuId: '2'
    },
];

class EditEmailInfoComponent extends Component {
    constructor(props) {
        super(props);
        // set true to isLoading if data for this screen yet to be received and wanted to show loader.
        this.state = {
            isLoading: false,
            enableBiometric: false,
            faceIdEnrolled: false,
            touchIdEnrolled: false,

            selectedIndex: -1,
            isEmailRefreshed: false,
            profilePrimayMail: '',
            profileEmailData: []
        };
    }

    componentDidMount() {
        if (this.props && this.props.initialState && this.props.initialState.email) {
            this.setState({
                profilePrimayMail: this.props.initialState.email
            });
        }

        if (this.props &&
            this.props.profileState &&
            this.props.profileState.profileUserMailInformation) {
            this.setState({
                profileEmailData: this.props.profileState.profileUserMailInformation,
                isEmailRefreshed: !this.state.isEmailRefreshed
            });
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props != prevProps) {
            if (this.props &&
                this.props.profileState &&
                this.props.profileState.profileUserMailInformation) {
                this.setState({
                    profileEmailData: this.props.profileState.profileUserMailInformation,
                    isEmailRefreshed: !this.state.isEmailRefreshed
                });
            }
        }
    }

    //  Render Email Informations

    renderEmailInformation = () => ({ item, index }) =>
        (<View style={styles.editEmailHolder}>
            <View style={[styles.profileDivideIcon]}>
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
                        onPress={this.onMenuOptionClicked(index)}>
                        <Image style={styles.imageWidthHeight}
                            source={ImagesLoad.menuIcon} />
                    </TouchableOpacity>
                </View>
            </View>

            {index === this.state.selectedIndex ?
                (<FlatList style={styles.editFlatList}
                    data={editDeleteMenuOption}
                    renderItem={this.renderMenuOption()} />)
                : null}

            <View style={styles.editEmailBorder} />

            <View style={styles.editAddressView}>
                <Text style={styles.editAddressLabel}>
                    {globalString.profileSettingsPage.profileMailPrimaryLabel}
                </Text>

                <View style={styles.editSwitchButton}>
                    <Switch trackColor={{ flase: '#DBDBDB', true: '#444444' }}
                        onValueChange={this.onEmailToggle(index)}
                        value={item.isPrimaryEmail} />
                </View>
            </View>
        </View>
        );

    onEmailToggle = (index) => () => {
        var array = [...this.state.profileEmailData];
        if (index !== -1) {
            let switchVal = array[index].isPrimaryEmail;
            array[index].isPrimaryEmail = !switchVal;
            this.setState({
                profileEmailData: array,
                isEmailRefreshed: !this.state.isEmailRefreshed
            });
        }
    }

    onMenuOptionClicked = (index) => () => {
        index === this.state.selectedIndex ?
            this.setState({
                isEmailRefreshed: !this.state.isEmailRefreshed,
                selectedIndex: -1
            }) :
            this.setState({
                isEmailRefreshed: !this.state.isEmailRefreshed,
                selectedIndex: index
            });
    }

    renderMenuOption = () => ({ item, index }) =>
        (<TouchableOpacity style={styles.editDropdown}>
            <Text style={styles.editDropdownText}
                onPress={this.onMenuItemClicked(index)}>
                {item.menuName}
            </Text>
        </TouchableOpacity>);

    onMenuItemClicked = (index) => () => {
        switch (index) {
            case 0:
                this.setState({
                    isEmailRefreshed: !this.state.isEmailRefreshed,
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
                            isEmailRefreshed: !this.state.isEmailRefreshed,
                            selectedIndex: -1
                        });
                    },
                    () => {
                        var array = [...this.state.profileEmailData];
                        var indexDelete = this.state.selectedIndex
                        if (indexDelete !== -1) {
                            array.splice(indexDelete, 1);
                            this.setState({
                                profileEmailData: array,
                                isEmailRefreshed: !this.state.isEmailRefreshed,
                                selectedIndex: -1
                            });
                        }
                    });
                break;
        }
    }

    emailAddNew = () => this.props.navigation.navigate('editEmailAddNew');

    emailAddNewOnCancel = () => this.props.navigation.navigate('profileSettings');

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
                            {globalString.editEmailInformations.editEmailTitle}
                        </Text>
                    </View>

                    <View style={[styles.settingsView]}>
                        <Text style={styles.profileSettingViewOne}>
                            {globalString.editEmailInformations.editEmailTitle}
                        </Text>

                        <Text style={styles.profileSettingViewTwo}
                            onPress={this.emailAddNew}>
                            {globalString.editPhoneInformations.phoneAddNew}
                        </Text>
                    </View>

                    <View style={styles.settingsBorder} />

                    <View>
                        {this.state.profileEmailData.length === 0 ?
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
                                data={this.state.profileEmailData}
                                extraData={this.state.isEmailRefreshed}
                                keyExtractor={this.generateKeyExtractor}
                                renderItem={this.renderEmailInformation()} />)}
                    </View>

                    <View style={styles.editFlexDirectionColumn}>
                        <GButtonComponent
                            buttonStyle={styles.cancelButtonStyle}
                            buttonText={globalString.common.back}
                            textStyle={styles.cancelButtonText}
                            onPress={this.emailAddNewOnCancel} />
                    </View>

                    <View style={styles.newVictorySection}>
                        <Text style={styles.termsofuseText1}>
                            {globalString.editEmailInformations.editEmailTerms}
                        </Text>
                        <Text style={[styles.openInvestment, lineHeight = 30]}>
                            {globalString.editEmailInformations.editEmailInvestment}
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

export default EditEmailInfoComponent;
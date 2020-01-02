import React, { Component } from 'react';
import { Text, View, Image, ScrollView, TouchableOpacity, FlatList, Switch } from 'react-native';
import { styles } from './styles';
import { GButtonComponent, GHeaderComponent, GIcon, GInputComponent, GRadioButtonComponent } from '../../CommonComponents';
import { scaledHeight } from '../../Utils/Resolution';
import globalString from '../../Constants/GlobalStrings';

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

class editEmailInfoComponent extends Component {
    constructor(props) {
        super(props);
        //set true to isLoading if data for this screen yet to be received and wanted to show loader.
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

    componentDidUpdate(prevProps, prevState) {
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

    // Render Email Informations

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
                            source={require("../../Images/menu_icon.png")} />
                    </TouchableOpacity>
                </View>
            </View>

            {index === this.state.selectedIndex ?
                (<FlatList style={styles.editFlatList}
                    data={editDeleteMenuOption}
                    renderItem={({ item, index }) =>
                        (<TouchableOpacity style={styles.editDropdown}>
                            <Text style={styles.editDropdownText}
                                onPress={this.onMenuItemClicked(index)}>
                                {item.menuName}
                            </Text>
                        </TouchableOpacity>)}
                    keyExtractor={item => item.menuId} />)
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

    onMenuItemClicked = (index) => () => {
        switch (index) {
            case 0:
                this.setState({
                    isEmailRefreshed: !this.state.isEmailRefreshed,
                    selectedIndex: -1
                });
                break;

            case 1:
                this.setState({
                    isEmailRefreshed: !this.state.isEmailRefreshed,
                    selectedIndex: -1
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

                    <FlatList
                        data={this.state.profileEmailData}
                        extraData={this.state.isEmailRefreshed}
                        keyExtractor={this.generateKeyExtractor}
                        renderItem={this.renderEmailInformation()} />

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

export default editEmailInfoComponent;
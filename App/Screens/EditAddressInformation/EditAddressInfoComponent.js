import React, { Component } from 'react';
import { Text, View, Image, ScrollView, TouchableOpacity, FlatList, Switch } from 'react-native';
import { styles } from './styles';
import { GButtonComponent, GHeaderComponent, GIcon, GInputComponent, GRadioButtonComponent } from '../../CommonComponents';
import { scaledHeight } from '../../Utils/Resolution';
import globalString from '../../Constants/GlobalStrings';
import PropTypes from "prop-types";

const tempUserAddress = [
    {
        "addressType": 'Diplomatic Post Office',
        "addressLineOne": '5400 N Black Lake Oak Rd',
        "addressCity": 'San Diego',
        "addressState": 'California',
        "addressZipcode": '90001',
        "isMailingAddress": true,
        "isPhysicalAddress": false
    }
];

let profileAddressData = [];

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
                    {globalString.editAddressInfo.editAddressSetMailing}
                </Text>

                <View style={styles.editSwitchButton}>
                    <Switch trackColor={{ flase: '#DBDBDB', true: '#444444' }}
                        onValueChange={this.toggleSwitchMailing}
                        value={props.isMailingAddress} />
                </View>
            </View>

            <View style={styles.editAddressView}>
                <Text style={styles.editAddressLabel}>
                    {globalString.editAddressInfo.editAddressSetPhysical}
                </Text>
                <View style={styles.editSwitchButton}>
                    <Switch trackColor={{ flase: '#DBDBDB', true: '#444444' }}
                        onValueChange={this.toggleSwitchPhysical}
                        value={props.isPhysicalAddress} />
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

class editAddressInfoComponent extends Component {
    constructor(props) {
        super(props);
        //set true to isLoading if data for this screen yet to be received and wanted to show loader.
        this.state = {
            isLoading: false,
            enableBiometric: false,
            faceIdEnrolled: false,
            touchIdEnrolled: false,

            isAddressTypeMailing: false,
            isAddressTypePhysical: false
        };
    }

    toggleSwitchMailing = (value) => {
        this.props.isMailingAddress = value
    }

    toggleSwitchPhysical = (value) => {
        this.props.isPhysicalAddress = value
    }

    renderAddressInformation = (dataLength) => ({ item, index }) =>
        (<UserAddressInformation
            addressType={item.addressType}
            addressLineOne={item.addressLineOne}
            addressCity={item.addressCity}
            addressState={item.addressState + ' ' + item.addressZipcode}
            isMailingAddress={item.isMailingAddress}
            isPhysicalAddress={item.isPhysicalAddress} />);

    componentDidMount() {
        if (this.props &&
            this.props.profileState &&
            this.props.profileState.profileUserAddressInformation) {
            profileAddressData = this.props.profileState.profileUserAddressInformation;
        }

        console.log("Updated Address Info ::: 001", profileAddressData);
    }

    componentDidUpdate() {
        if (this.props &&
            this.props.profileState &&
            this.props.profileState.profileUserAddressInformation) {
            profileAddressData = this.props.profileState.profileUserAddressInformation;
        }

        console.log("Updated Address Info ::: 002", profileAddressData);
    }

    editAddressInfoAddNew = () => this.props.navigation.navigate('editAddressAddNew');

    editAddressOnCancel = () => this.props.navigation.navigate('profileSettings');

    render() {

        if (this.props &&
            this.props.profileState &&
            this.props.profileState.profileUserAddressInformation) {
            profileAddressData = this.props.profileState.profileUserAddressInformation;
        }

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
                            {globalString.editAddressInfo.editAddressTitle}
                        </Text>
                    </View>

                    <View style={styles.settingsView}>
                        <Text style={[styles.settingsHeadline, styles.editTitleBold]}>
                            {globalString.editAddressInfo.editAddressTitle}
                        </Text>

                        <Text style={styles.addEditTextLabel}
                            onPress={this.editAddressInfoAddNew} >
                            {globalString.editAddressInfo.editAddressAddNew}
                        </Text>
                    </View>

                    <View style={styles.settingsBorder} />

                    <FlatList
                        data={profileAddressData}
                        keyExtractor={this.generateKeyExtractor}
                        renderItem={this.renderAddressInformation(profileAddressData.length)} />

                    <View style={styles.editFlexDirectionColumn}>
                        <GButtonComponent
                            buttonStyle={styles.cancelButtonStyle}
                            buttonText={globalString.common.back}
                            textStyle={styles.cancelButtonText}
                            onPress={this.editAddressOnCancel} />
                    </View>

                    <View style={styles.newVictorySection}>
                        <Text style={styles.termsofuseText1}>
                            {globalString.editAddressInfo.editAddressTerms}
                        </Text>
                        <Text style={styles.openInvestment}>
                            {globalString.editAddressInfo.editAddressInvestments}
                        </Text>
                    </View>

                    <View style={styles.connectWithUs}>
                        <Image
                            source={require("../../Images/logo.png")} />
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

export default editAddressInfoComponent;
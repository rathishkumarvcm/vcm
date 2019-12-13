import React, { Component } from 'react';
import { Text, View, Image, ScrollView, TouchableOpacity, FlatList, Switch } from 'react-native';
import { styles } from './styles';
import { GButtonComponent, GHeaderComponent, GIcon, GInputComponent, GRadioButtonComponent } from '../../CommonComponents';
import { scaledHeight } from '../../Utils/Resolution';
import globalString from '../../Constants/GlobalStrings';
import PropTypes from "prop-types";
import * as ActionTypes from "../../Shared/ReduxConstants/ServiceActionConstants";

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
                        onValueChange={props.onMailingSwitchToggle}
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
    isPhysicalAddress: PropTypes.bool,
    onMailingSwitchToggle: PropTypes.func
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
            refreshAddressData: false,
            profileUserAddressValue: [],

            isAddressTypeMailing: false,
            isAddressTypePhysical: false,
        };
    }

    onMailingSwitchToggle = (item, index) => () => {
        var array = [...this.state.profileUserAddressValue];
        if (index !== -1) {
            let switchVal = array[index].isMailingAddress;
            array[index].isMailingAddress = !switchVal;
            this.setState({
                profileUserAddressValue: array,
                refreshAddressData: !this.state.refreshAddressData
            });
        }
    }

    toggleSwitchPhysical = (value) => {
        this.props.isPhysicalAddress = value
    }

    renderAddressInformation = () => ({ item, index }) => {
        return (<UserAddressInformation
            addressType={item.addressType}
            addressLineOne={item.addressLineOne}
            addressCity={item.addressCity}
            addressState={item.addressState + ' ' + item.addressZipcode}
            isMailingAddress={item.isMailingAddress}
            isPhysicalAddress={item.isPhysicalAddress}
            onMailingSwitchToggle={this.onMailingSwitchToggle(item, index)} />);
    }

    componentDidMount() {
        if (this.props &&
            this.props.profileState &&
            this.props.profileState.profileUserAddressInformation) {
            this.setState({
                profileUserAddressValue: this.props.profileState.profileUserAddressInformation,
                refreshAddressData: !this.state.refreshAddressData
            });
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props != prevProps) {
            if (this.props &&
                this.props.profileState &&
                this.props.profileState.profileUserAddressInformation) {
                this.setState({
                    profileUserAddressValue: this.props.profileState.profileUserAddressInformation,
                    refreshAddressData: !this.state.refreshAddressData
                });
                console.log("@@@@@@@@@@@@@@ Dip Update", this.state.profileUserAddressValue);
            }
        }
    }

    editAddressInfoAddNew = () => this.props.navigation.navigate('editAddressAddNew');

    editAddressOnCancel = () => this.props.navigation.navigate('profileSettings');

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
                        data={this.state.profileUserAddressValue}
                        keyExtractor={this.generateKeyExtractor}
                        extraData={this.state.refreshAddressData}
                        renderItem={this.renderAddressInformation()} />

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
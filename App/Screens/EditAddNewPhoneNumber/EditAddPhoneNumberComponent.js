import React, { Component } from 'react';
import { Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { GButtonComponent, GHeaderComponent, GIcon, GInputComponent, GRadioButtonComponent } from '../../CommonComponents';
import { scaledHeight } from '../../Utils/Resolution';
import globalString from '../../Constants/GlobalStrings';

class editAddPhoneNumberComponent extends Component {
    constructor(props) {
        super(props);
        //set true to isLoading if data for this screen yet to be received and wanted to show loader.
        this.state = {
            isLoading: false,
            enableBiometric: false,
            faceIdEnrolled: false,
            touchIdEnrolled: false
        };
    }

    componentDidMount() { }

    phoneAddNewNumberOnCancel = () => this.props.navigation.navigate('editPhoneInformation');

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
                            {globalString.addPhoneNumber.addPhoneTitle}
                        </Text>
                    </View>

                    <View style={styles.settingsView}>
                        <Text style={[styles.settingsHeadline, styles.editTitleBold]}>
                            {globalString.addPhoneNumber.addPhoneTitle}
                        </Text>
                    </View>

                    <View style={styles.settingsBorder}></View>

                    <View style={styles.editPhoneNumType}>
                        <Text style={styles.phoneTypeLabel}>
                            {globalString.addPhoneNumber.phoneType}
                        </Text>
                    </View>

                    <View style={styles.editFlexDirectionColumn}>
                        <TouchableOpacity style={styles.phoneFlexRow} onPress={this.selectTheState}>
                            <GInputComponent
                                propInputStyle={styles.userIDTextBox1}
                                placeholder={""}
                                editable={false}
                                value={this.state.valueDropDown} />

                            <TouchableOpacity style={styles.phoneDropDown} onPress={this.selectTheState}>
                                <GIcon
                                    name="md-arrow-dropdown"
                                    type="ionicon"
                                    size={20}
                                    color="black" />
                            </TouchableOpacity>

                        </TouchableOpacity>
                    </View>

                    <View style={styles.editPhoneNumType}>
                        <Text style={styles.phoneTypeLabel}>
                            {globalString.addPhoneNumber.phoneNumber}
                        </Text>
                    </View>

                    <View style={styles.editFlexDirectionColumn}>
                        <TouchableOpacity style={styles.phoneFlexRow} onPress={this.selectTheState}>
                            <GInputComponent
                                propInputStyle={styles.userIDTextBox1}
                                placeholder={""}
                                editable={false}
                                value={this.state.valueDropDown} />

                            <TouchableOpacity style={styles.phoneDropDown} onPress={this.selectTheState}>
                                <GIcon
                                    name="md-arrow-dropdown"
                                    type="ionicon"
                                    size={20}
                                    color="black" />
                            </TouchableOpacity>

                        </TouchableOpacity>
                    </View>

                    <View style={styles.editFlexDirectionColumn}>
                        <GInputComponent
                            propInputStyle={styles.userIDTextBox1}
                            placeholder={""}
                            editable={false} />
                    </View>

                    <View style={styles.editPhoneNumType}>
                        <Text style={styles.phoneTypeLabel}>
                            {globalString.addPhoneNumber.callTimePreference}
                        </Text>
                    </View>

                    <View style={styles.editFlexDirectionColumn}>
                        <TouchableOpacity style={styles.phoneFlexRow} onPress={this.selectTheState}>
                            <GInputComponent
                                propInputStyle={styles.userIDTextBox1}
                                placeholder={""}
                                editable={false}
                                value={this.state.valueDropDown} />

                            <TouchableOpacity style={styles.phoneDropDown} onPress={this.selectTheState}>
                                <GIcon
                                    name="md-arrow-dropdown"
                                    type="ionicon"
                                    size={20}
                                    color="black" />
                            </TouchableOpacity>

                        </TouchableOpacity>
                    </View>

                    <View style={styles.settingsMobile}>
                        <View style={{ width: '15%' }}>
                            <GIcon
                                name="ios-square-outline"
                                type="ionicon"
                                size={40}
                                color="#ACACAC" />
                        </View>

                        <Text style={styles.phonePreferredLabel}>
                            {globalString.addPhoneNumber.setPreferred}
                        </Text>
                    </View>

                    <View style={styles.editFlexDirectionColumn}>
                        <GButtonComponent
                            buttonStyle={styles.cancelButtonStyle}
                            buttonText={globalString.common.cancel}
                            textStyle={styles.cancelButtonText}
                            onPress={this.phoneAddNewNumberOnCancel} />
                    </View>

                    <View style={styles.editFlexDirectionColumn}>
                        <GButtonComponent
                            buttonStyle={styles.saveButtonStyle}
                            buttonText={globalString.common.save}
                            textStyle={styles.saveButtonText} />
                    </View>

                    <View style={styles.editFlexDirectionColumn}>
                        <Text style={styles.phoneSecurityLabel}>
                            {globalString.addPhoneNumber.phoneSecurity}
                        </Text>
                    </View>

                    <View style={styles.newVictorySection}>
                        <Text style={styles.termsofuseText1}>
                            {globalString.addPhoneNumber.phoneInvesting}
                        </Text>
                        <Text style={styles.openInvestment}>
                            {globalString.addPhoneNumber.phoneInvestments}
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

export default editAddPhoneNumberComponent;
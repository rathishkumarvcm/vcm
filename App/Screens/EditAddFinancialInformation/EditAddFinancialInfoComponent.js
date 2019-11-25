import React, { Component } from 'react';
import { Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { GButtonComponent, GHeaderComponent, GIcon, GInputComponent, GRadioButtonComponent } from '../../CommonComponents';
import { scaledHeight } from '../../Utils/Resolution';
import globalStrings from '../../Constants/GlobalStrings';

class EditAddFinancialInfoComponent extends Component {
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

    render() {
        return (
            <View style={styles.container}>
                <GHeaderComponent
                    navigation={this.props.navigation} />

                <ScrollView style={{ flex: 0.85 }}>

                    <View style={styles.settingsView}>
                        <Text style={styles.settingsInfo}>
                            {"Settings > Profile > "}
                        </Text>
                        <Text style={[styles.settingsInfo, styles.editLabelBold]}>
                            {globalStrings.addFinancialInformations.addFinancialTitle}
                        </Text>
                    </View>

                    <View style={styles.settingsView}>
                        <Text style={styles.financialInfoLabel}>
                            {globalStrings.addFinancialInformations.addFinancialTitle}
                        </Text>
                    </View>

                    <View style={styles.settingsBorder}></View>

                    <View style={styles.financialView}>
                        <View>
                            <Text style={styles.financialTextLabel}>
                                {globalStrings.addFinancialInformations.annualIncome}
                            </Text>
                        </View>

                        <View>
                            <TouchableOpacity style={styles.financialFlexRow} onPress={this.selectTheState}>
                                <GInputComponent
                                    propInputStyle={styles.userIDTextBox1}
                                    placeholder={""}
                                    editable={false}
                                    value={this.state.valueDropDown} />

                                <TouchableOpacity style={styles.financialDropDown} onPress={this.selectTheState}>
                                    <GIcon
                                        name="md-arrow-dropdown"
                                        type="ionicon"
                                        size={20}
                                        color="black" />
                                </TouchableOpacity>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.financialViewNormal}>
                        <Text style={styles.financialTextLabel}>
                            {globalStrings.addFinancialInformations.taxBracket}
                        </Text>
                        <Text style={styles.financialValueLabel}>
                            {"10%"}
                        </Text>
                    </View>

                    <View style={styles.financialView}>
                        <View>
                            <Text style={styles.financialTextLabel}>
                                {globalStrings.addFinancialInformations.netWorth}
                            </Text>
                        </View>

                        <View>
                            <TouchableOpacity style={styles.financialFlexRow} onPress={this.selectTheState}>
                                <GInputComponent
                                    propInputStyle={styles.userIDTextBox1}
                                    placeholder={""}
                                    editable={false}
                                    value={this.state.valueDropDown} />

                                <TouchableOpacity style={styles.financialDropDown} onPress={this.selectTheState}>
                                    <GIcon
                                        name="md-arrow-dropdown"
                                        type="ionicon"
                                        size={20}
                                        color="black" />
                                </TouchableOpacity>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View>
                        <Text style={styles.financialTextLabel}>
                            {globalStrings.addFinancialInformations.taxFillingStatus}
                        </Text>
                    </View>

                    <View style={styles.financialView}>

                        <View>
                            <TouchableOpacity style={styles.financialFlexRow} onPress={this.selectTheState}>
                                <GInputComponent
                                    propInputStyle={styles.userIDTextBox1}
                                    placeholder={""}
                                    editable={false}
                                    value={this.state.valueDropDown} />

                                <TouchableOpacity style={styles.valueDropDown} onPress={this.selectTheState}>
                                    <GIcon
                                        name="md-arrow-dropdown"
                                        type="ionicon"
                                        size={20}
                                        color="black" />
                                </TouchableOpacity>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.editFlexDirectionColumn}>
                        <GButtonComponent
                            buttonStyle={styles.cancelButtonStyle}
                            buttonText={globalStrings.common.cancel}
                            textStyle={styles.cancelButtonText}
                            onPress={() => this.props.navigation.navigate('profileSettings')} />
                    </View>

                    <View style={styles.editFlexDirectionColumn}>
                        <GButtonComponent
                            buttonStyle={styles.saveButtonStyle}
                            buttonText={globalStrings.common.save}
                            textStyle={styles.saveButtonText} />
                    </View>

                    <View style={styles.editFlexDirectionColumn}>
                        <Text style={styles.financialSecurityLabel}>
                            {globalStrings.addFinancialInformations.financialSecurity}
                        </Text>
                    </View>

                    <View style={styles.newVictorySection}>
                        <Text style={styles.termsofuseText1}>
                            {globalStrings.addFinancialInformations.financialInvesting}
                        </Text>
                        <Text style={[styles.openInvestment, lineHeight = 30]}>
                            {globalStrings.addFinancialInformations.financialOpenInvestment}
                        </Text>
                    </View>

                    <View style={styles.connectWithUs}>
                        <Image
                            source={require("../../Images/logo.png")} />
                    </View>

                    <View style={styles.whiteBackground}>
                        <Text style={styles.editLabelInputMedium}>
                            {globalStrings.common.connectWithUs}
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
                            {globalStrings.common.privacyPolicy}
                        </Text>

                        <Text style={styles.privacyText}>
                            {globalStrings.common.fundDocuments}
                        </Text>
                    </View>

                    <View style={styles.privacyAgreement}>
                        <Text style={styles.privacyText}>
                            {globalStrings.common.userAgreement}
                        </Text>

                        <Text style={styles.privacyText}>
                            {globalStrings.common.support}
                        </Text>
                    </View>

                    <View style={styles.copyRightSection}>
                        <Text style={styles.copyRightText}>
                            {globalStrings.common.copyRights}
                        </Text>
                    </View>

                </ScrollView>
            </View>

        );
    }
}

export default EditAddFinancialInfoComponent;
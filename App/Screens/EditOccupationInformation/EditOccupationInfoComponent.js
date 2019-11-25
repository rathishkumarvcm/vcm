import React, { Component } from 'react';
import { Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { GButtonComponent, GHeaderComponent, GIcon, GInputComponent, GRadioButtonComponent } from '../../CommonComponents';
import { scaledHeight } from '../../Utils/Resolution';
import globalString from '../../Constants/GlobalStrings';

class EditOccupationInfoComponent extends Component {
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
                            {globalString.editOccupationInfo.occupationTitle}
                        </Text>
                    </View>

                    <View style={styles.settingsView}>
                        <Text style={[styles.editTitleBold, styles.editTitleBold]}>
                            {globalString.editOccupationInfo.occupationTitle}
                        </Text>
                    </View>

                    <View style={styles.settingsBorder}></View>

                    <View style={styles.editFlexDirectionColumn}>
                        <Text style={styles.occupationIndustryChoose}>
                            {globalString.editOccupationInfo.occupationIndustryChoose}
                        </Text>
                    </View>

                    <View style={styles.editFlexDirectionColumn}>
                        <Text style={styles.occupationEmploymentLabel}>
                            {globalString.editOccupationInfo.occupationEmployment}
                        </Text>
                    </View>

                    <View style={styles.occupationEmploymentView}>
                        <View>
                            <TouchableOpacity style={styles.occupationFlexRow} onPress={this.selectTheState}>
                                <GInputComponent
                                    propInputStyle={styles.userIDTextBox1}
                                    placeholder={""}
                                    editable={false}
                                    value={this.state.valueDropDown} />

                                <TouchableOpacity style={styles.occupationEmploymentDropDown}
                                    onPress={this.selectTheState}>
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
                        <Text style={styles.occupationIndustryLabel}>
                            {globalString.editOccupationInfo.occupationIndustry}
                        </Text>
                    </View>

                    <View style={styles.occupationEmploymentView}>
                        <View>
                            <TouchableOpacity style={styles.occupationFlexRow} onPress={this.selectTheState}>
                                <GInputComponent
                                    propInputStyle={styles.userIDTextBox1}
                                    placeholder={""}
                                    editable={false}
                                    value={this.state.valueDropDown} />

                                <TouchableOpacity style={styles.occupationEmploymentDropDown}
                                    onPress={this.selectTheState}>
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
                        <Text style={styles.occupationIndustryLabel}>
                            {globalString.editOccupationInfo.occupationLabel}
                        </Text>

                        <View style={styles.occupationMarginTop}>
                            <GInputComponent
                                placeholder="" />
                        </View>
                    </View>

                    <View style={styles.editFlexDirectionColumn}>
                        <Text style={styles.occupationIndustryLabel}>
                            {globalString.editOccupationInfo.occupationEmployerName}
                        </Text>

                        <View style={styles.occupationMarginTop}>
                            <GInputComponent
                                placeholder="" />
                        </View>
                    </View>

                    <View style={styles.editFlexDirectionColumn}>
                        <Text style={styles.occupationIndustryLabel}>
                            {globalString.editOccupationInfo.occupationEmployerOne}
                        </Text>

                        <View style={styles.occupationMarginTop}>
                            <GInputComponent
                                placeholder="" />
                        </View>
                    </View>

                    <View style={styles.occupationEmployeeView}>
                        <View style={[styles.occupationEmployeeDetail]}>
                            <Text style={styles.occupationEmployeeOne}>
                                {globalString.editOccupationInfo.occupationEmployerTwo}
                            </Text>

                            <Text style={styles.occupationEmployeeTwo}>
                                {globalString.editOccupationInfo.occupationOptional}
                            </Text>
                        </View>

                        <View style={styles.occupationMarginTop}>
                            <GInputComponent
                                placeholder="" />
                        </View>
                    </View>

                    <View style={styles.editFlexDirectionColumn}>
                        <Text style={styles.occupationIndustryLabel}>
                            {globalString.editOccupationInfo.occupationZipcode}
                        </Text>

                        <View style={styles.occupationMarginTop}>
                            <GInputComponent
                                placeholder="" />
                        </View>
                    </View>

                    <View style={styles.editFlexDirectionColumn}>
                        <Text style={styles.occupationIndustryLabel}>
                            {globalString.editOccupationInfo.occupationCity}
                        </Text>

                        <Text style={styles.occupationCityStateLabel}>
                            {'San Diego'}
                        </Text>
                    </View>

                    <View style={styles.editFlexDirectionColumn}>
                        <Text style={styles.occupationIndustryLabel}>
                            {globalString.editOccupationInfo.occupationState}
                        </Text>

                        <Text style={styles.occupationCityStateLabel}>
                            {'California'}
                        </Text>
                    </View>

                    <View style={styles.editFlexDirectionColumn}>
                        <Text style={styles.occupationHint}>
                            {globalString.editOccupationInfo.occupationHint}
                        </Text>
                    </View>

                    <View style={styles.editFlexDirectionColumn}>
                        <GButtonComponent
                            buttonStyle={styles.cancelButtonStyle}
                            buttonText={globalString.common.cancel}
                            textStyle={styles.cancelButtonText}
                            onPress={() => this.props.navigation.navigate('profileSettings')} />
                    </View>

                    <View style={styles.editFlexDirectionColumn}>
                        <GButtonComponent
                            buttonStyle={styles.saveButtonStyle}
                            buttonText={globalString.common.save}
                            textStyle={styles.saveButtonText} />
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

export default EditOccupationInfoComponent;
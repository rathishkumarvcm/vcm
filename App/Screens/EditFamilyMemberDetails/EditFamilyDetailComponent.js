import React, { Component } from 'react';
import { Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { GButtonComponent, GHeaderComponent, GIcon, GInputComponent, GRadioButtonComponent } from '../../CommonComponents';
import { scaledHeight } from '../../Utils/Resolution';
import globalString from '../../Constants/GlobalStrings';

class EditFamilyDetailComponent extends Component {
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

                    {/* Header Section - Tree Structure */}

                    <View style={styles.settingsView}>
                        <Text style={{ color: '#0000FF', fontSize: scaledHeight(14) }}>
                            {"Pro.."}
                        </Text>

                        <Text style={{ color: '#56565A', fontSize: scaledHeight(14) }}>
                            {"  >  "}
                        </Text>

                        <Text style={{ color: '#0000FF', fontSize: scaledHeight(14) }}>
                            {"Bas.."}
                        </Text>

                        <Text style={{ color: '#56565A', fontSize: scaledHeight(14) }}>
                            {"  >  "}
                        </Text>

                        <Text style={{ color: '#0000FF', fontSize: scaledHeight(14) }}>
                            {"Man.."}
                        </Text>

                        <Text style={{ color: '#56565A', fontSize: scaledHeight(14) }}>
                            {"  >  "}
                        </Text>

                        <Text numberOfLines={1} style={{ color: '#56565A', fontSize: scaledHeight(14), fontWeight: 'bold' }}>
                            {"Manage Relationship In.."}
                        </Text>
                    </View>

                    {/* Manage Relationship Section */}

                    <View>

                        <View style={styles.settingsView}>
                            <Text style={{ width: '100%', color: '#56565A', fontSize: scaledHeight(18), fontWeight: 'bold' }}>
                                {"Manage Relationship Information"}
                            </Text>
                        </View>

                        <View style={styles.settingsBorder}></View>

                        <View style={{ flexDirection: 'column', width: '90%', margin: '4%', alignSelf: 'center' }}>
                            <Text style={{ color: '#333333DE', fontSize: scaledHeight(14), fontWeight: 'bold', marginBottom: '4%' }}>
                                {"Family Member's relationship to you"}
                            </Text>

                            <TouchableOpacity style={{ flexDirection: 'row', marginTop: scaledHeight(3) }} onPress={this.selectTheState}>
                                <GInputComponent
                                    propInputStyle={styles.userIDTextBox1}
                                    placeholder={"Select"}
                                    editable={false}
                                    value={this.state.valueDropDown} />

                                <TouchableOpacity style={{ position: 'absolute', right: 20, top: 14 }} onPress={this.selectTheState}>
                                    <GIcon
                                        name="md-arrow-dropdown"
                                        type="ionicon"
                                        size={20}
                                        color="black" />
                                </TouchableOpacity>
                            </TouchableOpacity>

                            <Text style={{ color: '#333333DE', fontSize: scaledHeight(16), fontWeight: 'bold', marginTop: '3%', marginBottom: '4%' }}>
                                {"First Name"}
                            </Text>

                            <GInputComponent style={{ marginTop: '4%' }}
                                placeholder="" />

                            <Text style={{ color: '#333333DE', fontSize: scaledHeight(16), fontWeight: 'bold', marginTop: '3%', marginBottom: '4%' }}>
                                {"Prefix"}
                            </Text>

                            <TouchableOpacity style={{ flexDirection: 'row', marginTop: scaledHeight(3) }} onPress={this.selectTheState}>
                                <GInputComponent
                                    propInputStyle={styles.userIDTextBox1}
                                    placeholder={"Select"}
                                    editable={false}
                                    value={this.state.valueDropDown} />

                                <TouchableOpacity style={{ position: 'absolute', right: 20, top: 14 }} onPress={this.selectTheState}>
                                    <GIcon
                                        name="md-arrow-dropdown"
                                        type="ionicon"
                                        size={20}
                                        color="black" />
                                </TouchableOpacity>
                            </TouchableOpacity>

                            <Text style={{ color: '#333333DE', fontSize: scaledHeight(16), fontWeight: 'bold', marginTop: '3%', marginBottom: '4%' }}>
                                {"Suffix"}
                            </Text>

                            <TouchableOpacity style={{ flexDirection: 'row', marginTop: scaledHeight(3) }} onPress={this.selectTheState}>
                                <GInputComponent
                                    propInputStyle={styles.userIDTextBox1}
                                    placeholder={"Select"}
                                    editable={false}
                                    value={this.state.valueDropDown} />

                                <TouchableOpacity style={{ position: 'absolute', right: 20, top: 14 }} onPress={this.selectTheState}>
                                    <GIcon
                                        name="md-arrow-dropdown"
                                        type="ionicon"
                                        size={20}
                                        color="black" />
                                </TouchableOpacity>
                            </TouchableOpacity>

                            <Text style={{ color: '#333333DE', fontSize: scaledHeight(16), fontWeight: 'bold', marginTop: '3%', marginBottom: '4%' }}>
                                {"Date of Birth"}
                            </Text>

                            <GInputComponent style={{ marginTop: '4%' }}
                                placeholder="MM/DD/YYYY" />

                            <Text style={{ color: '#333333DE', fontSize: scaledHeight(16), fontWeight: 'bold', marginTop: '3%', marginBottom: '4%' }}>
                                {"Gender"}
                            </Text>

                            <TouchableOpacity style={{ flexDirection: 'row', marginTop: scaledHeight(3) }} onPress={this.selectTheState}>
                                <GInputComponent
                                    propInputStyle={styles.userIDTextBox1}
                                    placeholder={"Select"}
                                    editable={false}
                                    value={this.state.valueDropDown} />

                                <TouchableOpacity style={{ position: 'absolute', right: 20, top: 14 }} onPress={this.selectTheState}>
                                    <GIcon
                                        name="md-arrow-dropdown"
                                        type="ionicon"
                                        size={20}
                                        color="black" />
                                </TouchableOpacity>
                            </TouchableOpacity>

                            <Text style={{ color: '#333333DE', fontSize: scaledHeight(16), fontWeight: 'bold', marginTop: '3%', marginBottom: '4%' }}>
                                {"Marital Status"}
                            </Text>

                            <TouchableOpacity style={{ flexDirection: 'row', marginTop: scaledHeight(3) }} onPress={this.selectTheState}>
                                <GInputComponent
                                    propInputStyle={styles.userIDTextBox1}
                                    placeholder={"Select"}
                                    editable={false}
                                    value={this.state.valueDropDown} />

                                <TouchableOpacity style={{ position: 'absolute', right: 20, top: 14 }} onPress={this.selectTheState}>
                                    <GIcon
                                        name="md-arrow-dropdown"
                                        type="ionicon"
                                        size={20}
                                        color="black" />
                                </TouchableOpacity>
                            </TouchableOpacity>

                            <Text style={{ color: '#333333DE', fontSize: scaledHeight(16), fontWeight: 'bold', marginTop: '3%', marginBottom: '4%' }}>
                                {"Social Security number"}
                            </Text>

                            <GInputComponent style={{ marginTop: '4%' }}
                                placeholder="" />

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

                        </View>

                    </View>

                    {/* Footer Section - Security and Privacy Policy */}

                    <View>
                        <View style={styles.editFlexDirectionColumn}>
                            <Text style={styles.editAddressSecurity}>
                                {globalString.editAddressInfo.editAddressSecurity}
                            </Text>
                        </View>

                        <View style={{ flexDirection: 'column', width: '92%', marginTop: '4%', marginLeft: '4%', marginRight: '4%', backgroundColor: '#F1F1F2' }}>
                            <Text style={{ color: '#56565A', fontSize: scaledHeight(16), fontWeight: 'bold', margin: '3%' }}>
                                {"Instructions"}
                            </Text>

                            <View style={{ borderBottomWidth: 1, borderColor: '#B2B2B2', marginBottom: '4%', marginTop: '4%' }}></View>

                            <Text style={{ color: '#56565A', fontSize: scaledHeight(18), textAlign: 'justify', margin: '3%', lineHeight: 30 }}>
                                {"To help the government fight the funding of terrorism and money laundering activities, federal law requires all financai institutions to obtain, verify and record information that identifies each person who open an account. what this means for you: when open an account, we will ask for your name, address, date of birth and other information that will allow us to identify you. We may also ask to see your driver's license or other identifying documents."}
                            </Text>
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
                    </View>

                </ScrollView>
            </View>
        );
    }
}

export default EditFamilyDetailComponent;
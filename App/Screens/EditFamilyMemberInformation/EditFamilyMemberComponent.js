import React, { Component } from 'react';
import { Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { GButtonComponent, GHeaderComponent, GIcon, GInputComponent, GRadioButtonComponent } from '../../CommonComponents';
import { scaledHeight } from '../../Utils/Resolution';
import globalString from '../../Constants/GlobalStrings';

class EditFamilyMemberComponent extends Component {
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

                        <Text style={{ color: '#56565A', fontSize: scaledHeight(14), fontWeight: 'bold' }}>
                            {"Relationship Information"}
                        </Text>
                    </View>

                    {/* Manage Regulagtory Section */}

                    <View>
                        <View style={[styles.settingsView, { justifyContent: 'center', alignItems: 'center' }]}>
                            <Text style={{ width: '70%', color: '#56565A', fontSize: scaledHeight(18), fontWeight: 'bold' }}>
                                {"Relationship Information"}
                            </Text>

                            <Text style={{ width: '30%', color: '#0000FF', fontSize: scaledHeight(14), textAlign: 'right' }}
                                onPress={() => this.props.navigation.navigate('editFamilyDetail')}>
                                {"Manage"}
                            </Text>
                        </View>

                        <View style={styles.settingsBorder}></View>

                        <View>
                            <View style={{
                                borderWidth: 1,
                                borderColor: '#D4D4D4',
                                backgroundColor: '#FFFFFF',
                                marginTop: scaledHeight(20),
                                width: '92%',
                                marginLeft: '4%',
                                marginRight: '4%'
                            }}>
                                <View style={styles.settingsView1}>
                                    <Text style={{ color: '#333333DE', fontSize: scaledHeight(16), fontWeight: 'bold' }}>
                                        {"Name"}
                                    </Text>
                                </View>

                                <View style={styles.signInView}>
                                    <Text style={{ color: '#0000FF', fontSize: scaledHeight(16), marginTop: scaledHeight(3), marginBottom: '2%' }}>
                                        {"John Doe"}
                                    </Text>
                                </View>

                                <View style={styles.settingsView1}>
                                    <Text style={{ color: '#333333DE', fontSize: scaledHeight(16), fontWeight: 'bold' }}>
                                        {"Prefix"}
                                    </Text>
                                </View>

                                <View style={styles.signInView}>
                                    <Text style={{ color: '#56565A', fontSize: scaledHeight(16), marginTop: scaledHeight(3), marginBottom: '2%' }}>
                                        {"1LT"}
                                    </Text>
                                </View>

                                <View style={styles.settingsView1}>
                                    <Text style={{ color: '#333333DE', fontSize: scaledHeight(16), fontWeight: 'bold' }}>
                                        {"Suffix"}
                                    </Text>
                                </View>

                                <View style={styles.signInView}>
                                    <Text style={{ color: '#56565A', fontSize: scaledHeight(16), marginTop: scaledHeight(3), marginBottom: '2%' }}>
                                        {"Sr."}
                                    </Text>
                                </View>

                                <View style={styles.settingsView1}>
                                    <Text style={{ color: '#333333DE', fontSize: scaledHeight(16), fontWeight: 'bold' }}>
                                        {"Relationship"}
                                    </Text>
                                </View>

                                <View style={styles.signInView}>
                                    <Text style={{ color: '#56565A', fontSize: scaledHeight(16), marginTop: scaledHeight(3), marginBottom: '2%' }}>
                                        {"Brother/Sister"}
                                    </Text>
                                </View>

                                <View style={styles.settingsView1}>
                                    <Text style={{ color: '#333333DE', fontSize: scaledHeight(16), fontWeight: 'bold' }}>
                                        {"Social Security Number"}
                                    </Text>
                                </View>

                                <View style={styles.signInView}>
                                    <Text style={{ color: '#56565A', fontSize: scaledHeight(16), marginTop: scaledHeight(3), marginBottom: '2%' }}>
                                        {"123-45-****"}
                                    </Text>
                                </View>

                                <View style={styles.settingsView1}>
                                    <Text style={{ color: '#333333DE', fontSize: scaledHeight(16), fontWeight: 'bold' }}>
                                        {"Date of birth"}
                                    </Text>
                                </View>

                                <View style={styles.signInView}>
                                    <Text style={{ color: '#56565A', fontSize: scaledHeight(16), marginTop: scaledHeight(3), marginBottom: '2%' }}>
                                        {"MM-DD-YYYY"}
                                    </Text>
                                </View>

                                <View style={styles.settingsView1}>
                                    <Text style={{ color: '#333333DE', fontSize: scaledHeight(16), fontWeight: 'bold' }}>
                                        {"Gender"}
                                    </Text>
                                </View>

                                <View style={styles.signInView}>
                                    <Text style={{ color: '#56565A', fontSize: scaledHeight(16), marginTop: scaledHeight(3), marginBottom: '2%' }}>
                                        {"Male"}
                                    </Text>
                                </View>

                                <View style={styles.settingsView1}>
                                    <Text style={{ color: '#333333DE', fontSize: scaledHeight(16), fontWeight: 'bold' }}>
                                        {"Marital Status"}
                                    </Text>
                                </View>

                                <View style={styles.signInView}>
                                    <Text style={{ color: '#56565A', fontSize: scaledHeight(16), marginTop: scaledHeight(3), marginBottom: '2%' }}>
                                        {"Married"}
                                    </Text>
                                </View>

                                <View style={styles.settingsView1}>
                                    <Text style={{ color: '#333333DE', fontSize: scaledHeight(16), fontWeight: 'bold' }}>
                                        {"Citizenship"}
                                    </Text>
                                </View>

                                <View style={styles.signInView}>
                                    <Text style={{ color: '#56565A', fontSize: scaledHeight(16), marginTop: scaledHeight(3), marginBottom: '2%' }}>
                                        {"United States"}
                                    </Text>
                                </View>
                            </View>
                        </View>

                        {/* Contact Information with Manage Options */}

                        <View>
                            <View style={[styles.settingsView, { justifyContent: 'center', alignItems: 'center' }]}>
                                <Text style={{ width: '70%', color: '#56565A', fontSize: scaledHeight(18), fontWeight: 'bold' }}>
                                    {"Contact Information"}
                                </Text>

                                <Text style={{ width: '30%', color: '#0000FF', fontSize: scaledHeight(14), textAlign: 'right' }}
                                    onPress={() => this.props.navigation.navigate('')}>
                                    {"Manage"}
                                </Text>
                            </View>

                            <View style={styles.settingsBorder}></View>

                            <View style={styles.settingsAddress}>
                                <View style={styles.settingsView1}>
                                    <Text style={{ color: '#333333DE', fontSize: scaledHeight(16), fontWeight: 'bold' }}>
                                        {"Mailing Address"}
                                    </Text>
                                </View>

                                <View style={styles.signInView}>
                                    <Text style={{ color: '#56565A', fontSize: scaledHeight(16), marginTop: scaledHeight(3), marginBottom: '2%' }}>
                                        {"5400 N Black Oak Lake Rd"}
                                    </Text>
                                </View>

                                <View style={styles.settingsView1}>
                                    <Text style={{ color: '#333333DE', fontSize: scaledHeight(16), fontWeight: 'bold' }}>
                                        {"Physical Address"}
                                    </Text>
                                </View>

                                <View style={styles.signInView}>
                                    <Text style={{ color: '#56565A', fontSize: scaledHeight(16), marginTop: scaledHeight(3), marginBottom: '2%' }}>
                                        {"Same as mailing"}
                                    </Text>
                                </View>
                            </View>
                        </View>

                        {/* Phone Information with Manage Options */}

                        <View>
                            <View style={[styles.settingsView, { justifyContent: 'center', alignItems: 'center' }]}>
                                <Text style={{ width: '70%', color: '#56565A', fontSize: scaledHeight(18), fontWeight: 'bold' }}>
                                    {"Phone Information"}
                                </Text>

                                <Text style={{ width: '30%', color: '#0000FF', fontSize: scaledHeight(14), textAlign: 'right' }}
                                    onPress={() => this.props.navigation.navigate('')}>
                                    {"Manage"}
                                </Text>
                            </View>

                            <View style={styles.settingsBorder}></View>

                            <View style={styles.settingsPhone}>
                                <View style={styles.settingsView1}>
                                    <Text style={{ color: '#333333DE', fontSize: scaledHeight(16), fontWeight: 'bold' }}>
                                        {"Primary Mobile"}
                                    </Text>
                                </View>

                                <View style={styles.signInView}>
                                    <Text style={{ color: '#56565A', fontSize: scaledHeight(16), marginTop: scaledHeight(3), marginBottom: '2%' }}>
                                        {"+1(xxx) xxx - 7890"}
                                    </Text>
                                </View>
                            </View>
                        </View>

                        {/* Email Information with Manage Options */}

                        <View>
                            <View style={[styles.settingsView, { justifyContent: 'center', alignItems: 'center' }]}>
                                <Text style={{ width: '70%', color: '#56565A', fontSize: scaledHeight(18), fontWeight: 'bold' }}>
                                    {"Email Information"}
                                </Text>

                                <Text style={{ width: '30%', color: '#0000FF', fontSize: scaledHeight(14), textAlign: 'right' }}
                                    onPress={() => this.props.navigation.navigate('')}>
                                    {"Manage"}
                                </Text>
                            </View>

                            <View style={styles.settingsBorder}></View>

                            <View style={styles.settingsPhone}>
                                <View style={styles.settingsView1}>
                                    <Text style={{ color: '#333333DE', fontSize: scaledHeight(16), fontWeight: 'bold' }}>
                                        {"Primary"}
                                    </Text>
                                </View>

                                <View style={styles.signInView}>
                                    <Text style={{ color: '#56565A', fontSize: scaledHeight(16), marginTop: scaledHeight(3), marginBottom: '2%' }}>
                                        {"paxxxxx@example.com"}
                                    </Text>
                                </View>
                            </View>
                        </View>

                    </View>

                    <View style={styles.editFlexDirectionColumn}>
                        <GButtonComponent
                            buttonStyle={styles.cancelButtonStyle}
                            buttonText={globalString.common.back}
                            textStyle={styles.cancelButtonText}
                            onPress={() => this.props.navigation.navigate('profileSettings')} />
                    </View>

                    <View style={styles.editFlexDirectionColumn}>
                        <Text style={styles.editAddressSecurity}>
                            {globalString.editAddressInfo.editAddressSecurity}
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

                </ScrollView>
            </View>
        );
    }
}

export default EditFamilyMemberComponent;
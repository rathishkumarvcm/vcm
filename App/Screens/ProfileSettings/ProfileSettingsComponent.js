import React, { Component } from 'react';
import { Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { GButtonComponent, GHeaderComponent, GIcon } from '../../CommonComponents';
import { scaledHeight } from '../../Utils/Resolution';

class ProfileSettingsComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            enableBiometric: false,
            faceIdEnrolled: false,
            touchIdEnrolled: false,
            show: false,
            profileName: ''
        };
    }

    ShowHideComponent = () => {
        if (this.state.show == true) {
            this.setState({ show: false });
        } else {
            this.setState({ show: true });
        }
    };

    componentDidMount() {
        if (this.props && this.props.initialState && this.props.initialState.firstName) {
            this.setState({
                profileName: this.props.initialState.firstName
            })
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <GHeaderComponent
                    navigation={this.props.navigation} />

                <ScrollView style={{ flex: 0.85 }}>

                    {/* Header Section - Tree Structure */}

                    <View style={styles.settingsView}>
                        <Text style={{ color: '#0000FF', fontSize: scaledHeight(14) }}>
                            {"Profile"}
                        </Text>

                        <Text style={{ color: '#56565A', fontSize: scaledHeight(14) }}>
                            {"  >  "}
                        </Text>

                        <Text style={{ color: '#56565A', fontSize: scaledHeight(14), fontWeight: 'bold' }}>
                            {"Basic Information"}
                        </Text>
                    </View>

                    {/* Personal Information with Manage Options */}

                    <View>
                        <View style={[styles.settingsView, { justifyContent: 'center', alignItems: 'center' }]}>
                            <Text style={{ width: '70%', color: '#56565A', fontSize: scaledHeight(18), fontWeight: 'bold' }}>
                                {"Personal Information"}
                            </Text>

                            <Text style={{ width: '30%', color: '#0000FF', fontSize: scaledHeight(14), textAlign: 'right' }}
                                onPress={() => this.props.navigation.navigate('editProfileSettings')}>
                                {"Manage"}
                            </Text>
                        </View>

                        <View style={styles.settingsBorder}></View>

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
                                <Text style={{ color: '#0000FF', fontSize: scaledHeight(16), marginTop: scaledHeight(3), marginBottom: '2%' }}
                                    onPress={this.ShowHideComponent}>
                                    {this.state.profileName}
                                </Text>
                            </View>

                            <View style={{ backgroundColor: '#F3F3F3', marginLeft: '3%', marginRight: '3%' }}>
                                {this.state.show ? (
                                    <Text style={{ color: '#000000', fontSize: scaledHeight(16), lineHeight: 30, margin: '2%' }}>
                                        {"If you need to change your name, please call us at <Phone Number>. Depending on the product and services you currently have, documentation may be required in order to make your update"}
                                    </Text>
                                ) : null}
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
                                    {"VCM ID"}
                                </Text>
                            </View>

                            <View style={styles.signInView}>
                                <Text style={{ color: '#56565A', fontSize: scaledHeight(16), marginTop: scaledHeight(3), marginBottom: '2%' }}>
                                    {"YYMM9999999"}
                                </Text>
                            </View>

                            <View style={styles.settingsView1}>
                                <Text style={{ color: '#333333DE', fontSize: scaledHeight(16), fontWeight: 'bold' }}>
                                    {"Social Security Number"}
                                </Text>
                            </View>

                            <View style={styles.signInView}>
                                <Text style={{ color: '#56565A', fontSize: scaledHeight(16), marginTop: scaledHeight(3), marginBottom: '2%' }}>
                                    {"xxx-xx-1234"}
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
                                onPress={() => this.props.navigation.navigate('editAddressSettings')}>
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
                                onPress={() => this.props.navigation.navigate('editPhoneInformation')}>
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
                                onPress={() => this.props.navigation.navigate('editEmailInformation')}>
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

                    {/* Financial Information with Manage Options */}

                    <View>
                        <View style={[styles.settingsView, { justifyContent: 'center', alignItems: 'center' }]}>
                            <Text style={{ width: '70%', color: '#56565A', fontSize: scaledHeight(18), fontWeight: 'bold' }}>
                                {"Financial Information"}
                            </Text>

                            <Text style={{ width: '30%', color: '#0000FF', fontSize: scaledHeight(14), textAlign: 'right' }}
                                onPress={() => this.props.navigation.navigate('editAddFinancialInfo')}>
                                {"Manage"}
                            </Text>
                        </View>

                        <View style={styles.settingsBorder}></View>

                        <View style={styles.settingsFinancial}>
                            <View style={styles.settingsView1}>
                                <Text style={{ color: '#333333DE', fontSize: scaledHeight(16), fontWeight: 'bold' }}>
                                    {"Annual Income"}
                                </Text>
                            </View>

                            <View style={styles.signInView}>
                                <Text style={{ color: '#56565A', fontSize: scaledHeight(16), marginTop: scaledHeight(3), marginBottom: '2%' }}>
                                    {"$ 100,000"}
                                </Text>
                            </View>

                            <View style={styles.settingsView1}>
                                <Text style={{ color: '#333333DE', fontSize: scaledHeight(16), fontWeight: 'bold' }}>
                                    {"Tax Bracket"}
                                </Text>
                            </View>

                            <View style={styles.signInView}>
                                <Text style={{ color: '#56565A', fontSize: scaledHeight(16), marginTop: scaledHeight(3), marginBottom: '2%' }}>
                                    {"10%"}
                                </Text>
                            </View>

                            <View style={styles.settingsView1}>
                                <Text style={{ color: '#333333DE', fontSize: scaledHeight(16), fontWeight: 'bold' }}>
                                    {"Net Worth"}
                                </Text>
                            </View>

                            <View style={styles.signInView}>
                                <Text style={{ color: '#56565A', fontSize: scaledHeight(16), marginTop: scaledHeight(3), marginBottom: '2%' }}>
                                    {"$ 100,000,000"}
                                </Text>
                            </View>

                            <View style={styles.settingsView1}>
                                <Text style={{ color: '#333333DE', fontSize: scaledHeight(16), fontWeight: 'bold' }}>
                                    {"Tax Filing Status"}
                                </Text>
                            </View>

                            <View style={styles.signInView}>
                                <Text style={{ color: '#56565A', fontSize: scaledHeight(16), marginTop: scaledHeight(3), marginBottom: '2%' }}>
                                    {"Single individual"}
                                </Text>
                            </View>

                        </View>
                    </View>

                    {/* Employment Information with Manage Options */}

                    <View>
                        <View style={[styles.settingsView, { justifyContent: 'center', alignItems: 'center' }]}>
                            <Text style={{ width: '70%', color: '#56565A', fontSize: scaledHeight(18), fontWeight: 'bold' }}>
                                {"Employment Information"}
                            </Text>

                            <Text style={{ width: '30%', color: '#0000FF', fontSize: scaledHeight(14), textAlign: 'right' }}
                                onPress={() => this.props.navigation.navigate('editOccupationInfo')}>
                                {"Manage"}
                            </Text>
                        </View>

                        <View style={styles.settingsBorder}></View>

                        <View style={styles.settingsFinancial}>
                            <View style={styles.settingsView1}>
                                <Text style={{ color: '#333333DE', fontSize: scaledHeight(16), fontWeight: 'bold' }}>
                                    {"Employment Status"}
                                </Text>
                            </View>

                            <View style={styles.signInView}>
                                <Text style={{ color: '#56565A', fontSize: scaledHeight(16), marginTop: scaledHeight(3), marginBottom: '2%' }}>
                                    {"None on file"}
                                </Text>
                            </View>

                            <View style={styles.settingsView1}>
                                <Text style={{ color: '#333333DE', fontSize: scaledHeight(16), fontWeight: 'bold' }}>
                                    {"Primary Industry"}
                                </Text>
                            </View>

                            <View style={styles.signInView}>
                                <Text style={{ color: '#56565A', fontSize: scaledHeight(16), marginTop: scaledHeight(3), marginBottom: '2%' }}>
                                    {"None on file"}
                                </Text>
                            </View>

                            <View style={styles.settingsView1}>
                                <Text style={{ color: '#333333DE', fontSize: scaledHeight(16), fontWeight: 'bold' }}>
                                    {"Primary Occupation"}
                                </Text>
                            </View>

                            <View style={styles.signInView}>
                                <Text style={{ color: '#56565A', fontSize: scaledHeight(16), marginTop: scaledHeight(3), marginBottom: '2%' }}>
                                    {"None on file"}
                                </Text>
                            </View>

                            <View style={styles.settingsView1}>
                                <Text style={{ color: '#333333DE', fontSize: scaledHeight(16), fontWeight: 'bold' }}>
                                    {"Primary Employer"}
                                </Text>
                            </View>

                            <View style={styles.signInView}>
                                <Text style={{ color: '#56565A', fontSize: scaledHeight(16), marginTop: scaledHeight(3), marginBottom: '2%' }}>
                                    {"None on file"}
                                </Text>
                            </View>
                        </View>
                    </View>

                    {/* Military Information with Manage Options */}

                    <View>
                        <View style={[styles.settingsView, { justifyContent: 'center', alignItems: 'center' }]}>
                            <Text style={{ width: '70%', color: '#56565A', fontSize: scaledHeight(18), fontWeight: 'bold' }}>
                                {"Military information (Optional)"}
                            </Text>

                            <Text style={{ width: '30%', color: '#0000FF', fontSize: scaledHeight(14), textAlign: 'right' }}
                                onPress={() => this.props.navigation.navigate('editMilitaryInfo')}>
                                {"Manage"}
                            </Text>
                        </View>

                        <View style={styles.settingsBorder}></View>

                        <View style={styles.settingsMilitary}>
                            <View style={styles.settingsView1}>
                                <Text style={{ color: '#333333DE', fontSize: scaledHeight(16), marginTop: scaledHeight(3), marginBottom: '2%' }}>
                                    {"Providing your current military information"}
                                </Text>
                            </View>
                        </View>
                    </View>

                    {/* Regulatory Information with Manage Options */}

                    <View>
                        <View style={[styles.settingsView, { justifyContent: 'center', alignItems: 'center' }]}>
                            <Text style={{ width: '70%', color: '#56565A', fontSize: scaledHeight(18), fontWeight: 'bold' }}>
                                {"Regulatory questions"}
                            </Text>

                            <Text style={{ width: '30%', color: '#0000FF', fontSize: scaledHeight(14), textAlign: 'right' }}
                                onPress={() => this.props.navigation.navigate('editRegulatoryInfo')}>
                                {"Manage"}
                            </Text>
                        </View>

                        <View style={styles.settingsBorder}></View>

                        <View style={styles.settingsMilitary}>
                            <View style={styles.settingsView1}>
                                <Text style={{ color: '#333333DE', fontSize: scaledHeight(16), marginTop: scaledHeight(3), marginBottom: '2%' }}>
                                    {"You are not a senior foreign political figure"}
                                </Text>
                            </View>
                        </View>
                    </View>

                    {/* Manage Relationship with Add Options */}

                    <View>
                        <View style={[styles.settingsView, { justifyContent: 'center', alignItems: 'center' }]}>
                            <Text style={{ width: '70%', color: '#56565A', fontSize: scaledHeight(18), fontWeight: 'bold' }}>
                                {"Manage relationship"}
                            </Text>

                            <Text style={{ width: '30%', color: '#0000FF', fontSize: scaledHeight(14), textAlign: 'right' }}
                                onPress={() => this.props.navigation.navigate('editRelationshipInfo')}>
                                {"Add"}
                            </Text>
                        </View>

                        <View style={styles.settingsBorder}></View>

                        <View style={styles.settingsRelationShip}
                            onPress={() => this.props.navigation.navigate('editFamilyMemberInfo')}>
                            <View style={styles.settingsBorderGap}>
                                <Text style={{ color: '#333333DE', fontSize: scaledHeight(16), fontWeight: 'bold' }}
                                    onPress={() => this.props.navigation.navigate('editFamilyMemberInfo')}>
                                    {"Family Member Name"}
                                </Text>
                                <Text style={{ color: '#56565A', fontSize: scaledHeight(16), marginTop: scaledHeight(3), marginBottom: '2%' }}>
                                    {"Wife"}
                                </Text>
                            </View>
                        </View>

                        <View style={styles.settingsRelationShip}>
                            <View style={styles.settingsBorderGap}>
                                <Text style={{ color: '#333333DE', fontSize: scaledHeight(16), fontWeight: 'bold' }}>
                                    {"Family Member Name"}
                                </Text>
                                <Text style={{ color: '#56565A', fontSize: scaledHeight(16), marginTop: scaledHeight(3), marginBottom: '2%' }}>
                                    {"Daughter"}
                                </Text>
                            </View>
                        </View>
                    </View>

                    {/* Social Media Informations */}

                    <View>
                        <View style={[styles.settingsView]}>
                            <Text style={{ width: '70%', color: '#707070', fontSize: scaledHeight(18), fontWeight: 'bold' }}>
                                {"Social Media Information"}
                            </Text>
                        </View>

                        <View style={styles.settingsBorder}></View>

                        <View style={styles.settingsSocialContainer}>

                            <View style={styles.settingsSocial}>

                                <Image style={styles.imageWidthHeight}
                                    source={require("../../Images/twitterlogo.png")} />

                                <Text style={{ color: '#0000FF', fontSize: scaledHeight(16), marginTop: scaledHeight(3) }}>
                                    {"Sign in to Facebook"}
                                </Text>
                            </View>

                            <View style={styles.settingsSocial}>

                                <Image style={styles.imageWidthHeight}
                                    source={require("../../Images/linkedinlogo.png")} />

                                <Text style={{ color: '#0000FF', fontSize: scaledHeight(16), marginTop: scaledHeight(3) }}>
                                    {"Sign in to Twitter"}
                                </Text>
                            </View>
                        </View>

                    </View>

                    {/* Footer Section - Privacy and User Agreements */}

                    <View>
                        <View style={{ flexDirection: 'column', width: '92%', margin: '4%' }}>
                            <Text style={{ color: '#56565A', fontSize: scaledHeight(16), lineHeight: 24, textAlign: 'justify' }}>
                                {"By Sharing and connecting your social media information with VCM., our team can streamline your experience on VCM's social presences such as Twitter and Facebook, and provide you with personalized tips, tools and support. All social media information collected by VCM is used and protected according to the VCM Private Promise and Online Information Practices"}
                            </Text>

                            <Text style={{ color: '#56565A', lineHeight: 24, textAlign: 'justify', fontSize: scaledHeight(16), marginTop: '4%' }}>
                                {"For security reasons, not all information can be uploaded online. Please call us if you need assistance. Phone Number"}
                            </Text>
                        </View>

                        <View style={styles.settingsFooter}>
                            <Text style={{ flexWrap: 'wrap', color: '#56565A', fontSize: scaledHeight(16), lineHeight: 24, textAlign: 'justify', marginBottom: '3%' }}>
                                {"Investing involves risk including loss of principal.\n\nVictory Mutual Funds and USAA Mutual Funds are distributed by Victory Capital Advisers, Inc. (VCA). VictoryShares ETFs and VictoryShares USAA ETFs are distributed by Foreside Fund Services, LLC (Foreside). VCA and Foreside are members of FINRA and SIPC. Victory Capital Management Inc. (VCM) is the investment adviser to the Victory Mutual Funds, USAA Mutual Funds, VictoryShares ETFs and VictoryShares USAA ETFs. VCA and VCM are not affiliated with Foreside. USAA is not affiliated with Foreside, VCM, or VCA. USAA and the USAA logos are registered trademarks and the USAA Mutual Funds and USAA Investments logos are trademarks of United Services Automobile Association and are being used by Victory Capital and its affiliates under license. Victory Capital means Victory Capital Management Inc., the investment manager of the USAA 529 College Savings Plan (Plan). The Plan is distributed by Victory Capital Advisers, Inc., a broker dealer registered with FINRA and an affiliate of Victory Capital. Victory Capital and its affiliates are not affiliated with United Services Automobile Association or its affiliates. USAA and the USAA logo are registered trademarks and the USAA 529 College Savings Plan logo is a trademark of United Services Automobile Association and are being used by Victory Capital and its affiliates under license."}
                            </Text>

                            <Image style={{ marginTop: '4%', paddingLeft: '4%', paddingRight: '4%' }}
                                source={require("../../Images/logo.png")} />

                            <Text style={{ color: '#56565A', fontSize: scaledHeight(18), marginTop: '4%' }}>
                                {"Connect with Us"}
                            </Text>

                            <View style={styles.whiteBackground}>
                                <Image style={styles.imageWidthHeight}
                                    source={require("../../Images/twitterlogo.png")} />
                                <Image style={styles.imageWidthHeight}
                                    source={require("../../Images/linkedinlogo.png")} />
                            </View>

                            <View style={styles.privacyAgreement}>
                                <Text style={styles.privacyText}>
                                    {"Privacy Policy"}
                                </Text>

                                <Text style={styles.privacyText}>
                                    {"Fund Documents"}
                                </Text>
                            </View>

                            <View style={styles.privacyAgreement}>
                                <Text style={styles.privacyText}>
                                    {"User Agreement"}
                                </Text>

                                <Text style={styles.privacyText}>
                                    {"Support"}
                                </Text>
                            </View>
                        </View>

                        <View style={styles.copyRightSection}>
                            <Text style={styles.copyRightText}>
                                {"Copyright Victory Capital Management Inc. ©2020"}
                            </Text>
                        </View>
                    </View>

                </ScrollView>

            </View>
        );
    }
}

export default ProfileSettingsComponent;
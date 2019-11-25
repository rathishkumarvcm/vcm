import React, { Component } from 'react';
import { Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { GButtonComponent, GHeaderComponent, GIcon, GInputComponent, GRadioButtonComponent } from '../../CommonComponents';
import { scaledHeight } from '../../Utils/Resolution';
import globalString from '../../Constants/GlobalStrings';

const profileSettingsCitizenship = [
    { index1: 0, question: "U.S" },
    { index2: 1, question: "Non U.S" },
];

class EditProfileSettingsComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            enableBiometric: false,
            faceIdEnrolled: false,
            touchIdEnrolled: false,
            countryNonUS: false,
            isValidPin: true,
            validPin: '',
            errorPin: '',
            profileName: '',
            profileMobile: '',
            radioButton: false,
            radioButtonIndex: 0
        };
    }

    ShowHideComponent = () => {
        if (this.state.countryNonUS == true) {
            this.setState({ countryNonUS: false });
        } else {
            this.setState({ countryNonUS: true });
        }
    };

    setValidPin = (text) => {
        this.setState({
            validPin: text
        });
    }

    radioButtonClicked = (index) => {
        if (index !== this.state.radioButtonIndex) {
            this.setState({
                radioButtonIndex: index,
                radioButton: false
            });
        }
        else {
            this.setState({
                radioButton: false
            });
        }

        if (index == 1) {
            this.setState({
                countryNonUS: true
            });
        } else {
            this.setState({
                countryNonUS: false
            });
        }
    }

    navigationSuccess = () => {
        this.setState({
            isValidPin: this.state.validPin != "" ? true : false,
            errorPin: this.state.validPin != "" ? "" : globalString.common.validPincode
        });

        if (this.state.validPin != "") {
            console.log('Valid Pin');
        }
    }

    componentDidMount() {
        if (this.props && this.props.initialstate && this.props.initialstate.firstName) {
            this.setState({
                profileName: this.props.initialstate.firstName
            })
        }

        if (this.props && this.props.profileSettingsLookup && this.props.profileSettingsLookup) {
            this.setState({})
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
                            {"Pro.."}
                        </Text>

                        <Text style={{ color: '#56565A', fontSize: scaledHeight(14) }}>
                            {"  >  "}
                        </Text>

                        <Text style={{ color: '#0000FF', fontSize: scaledHeight(14) }}
                            onPress={() => this.props.navigation.navigate('profileSettings')}>
                            {"Bas.."}
                        </Text>

                        <Text style={{ color: '#56565A', fontSize: scaledHeight(14) }}>
                            {"  >  "}
                        </Text>

                        <Text style={{ color: '#56565A', fontSize: scaledHeight(14), fontWeight: 'bold' }}>
                            {"Manage Personal Information"}
                        </Text>
                    </View>

                    {/* Manage Personal Informations */}

                    <View>
                        <View style={styles.settingsView}>
                            <Text style={{ width: '100%', color: '#56565A', fontSize: scaledHeight(18), fontWeight: 'bold' }}>
                                {"Manage Personal Information"}
                            </Text>
                        </View>

                        <View style={styles.settingsBorder}></View>

                        <View style={styles.settingsView}>
                            <Text style={{ color: '#56565A', fontSize: scaledHeight(16), lineHeight: 26 }}>
                                {"You have chosen to update your personal information on record with VCM."}
                            </Text>
                        </View>

                        <View style={styles.editFlexDirectionColumn}>
                            <Text style={{ color: '#333333DE', fontSize: scaledHeight(16), fontWeight: 'bold', marginBottom: scaledHeight(3) }}>
                                {"Name"}
                            </Text>

                            <Text style={{ color: '#0000FF', fontSize: scaledHeight(16), marginTop: scaledHeight(3), marginBottom: '2%' }}>
                                {this.state.profileName}
                            </Text>
                        </View>

                        <View style={styles.editFlexDirectionColumn}>
                            <Text style={{ color: '#333333DE', fontSize: scaledHeight(16), fontWeight: 'bold', marginBottom: scaledHeight(3) }}>
                                {"VCM ID"}
                            </Text>

                            <Text style={{ color: '#56565A', fontSize: scaledHeight(16), marginTop: scaledHeight(3), marginBottom: '2%' }}>
                                {"YYMM999999"}
                            </Text>
                        </View>

                        <View style={styles.editFlexDirectionColumn}>
                            <Text style={{ color: '#333333DE', fontSize: scaledHeight(16), fontWeight: 'bold', marginBottom: scaledHeight(3) }}>
                                {"Social Security Number"}
                            </Text>

                            <Text style={{ color: '#56565A', fontSize: scaledHeight(16), marginTop: scaledHeight(3), marginBottom: '2%' }}>
                                {"12345-67***"}
                            </Text>
                        </View>

                        <View style={styles.editFlexDirectionColumn}>
                            <Text style={{ color: '#333333DE', fontSize: scaledHeight(16), fontWeight: 'bold', marginBottom: scaledHeight(3) }}>
                                {"Date of birth"}
                            </Text>

                            <Text style={{ color: '#56565A', fontSize: scaledHeight(16), marginTop: scaledHeight(3), marginBottom: '2%' }}>
                                {"MM-DD-YY"}
                            </Text>
                        </View>

                        <View style={styles.editFlexDirectionColumn}>
                            <Text style={{ color: '#333333DE', fontSize: scaledHeight(16), fontWeight: 'bold', marginBottom: scaledHeight(3) }}>
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
                        </View>

                        <View style={styles.editFlexDirectionColumn}>
                            <Text style={{ color: '#333333DE', fontSize: scaledHeight(16), fontWeight: 'bold', marginBottom: scaledHeight(3) }}>
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
                        </View>

                        <View style={styles.editFlexDirectionColumn}>
                            <Text style={{ color: '#333333DE', fontSize: scaledHeight(16), fontWeight: 'bold', marginBottom: scaledHeight(3) }}>
                                {"Pin"}
                            </Text>

                            <GInputComponent
                                propInputStyle={this.state.isValidPin ? styles.userIDTextBox : styles.userIDTextBoxError}
                                placeholder=""
                                onChangeText={this.setValidPin}
                                value={this.state.validPin}
                                keyboardType={'numeric'} />

                            <Text style={styles.errorMessage}>{this.state.errorPin}</Text>

                        </View>

                        <View style={styles.editFlexDirectionColumn}>

                            <Text style={{ color: '#333333DE', fontSize: scaledHeight(16), fontWeight: 'bold', marginBottom: scaledHeight(3) }}>
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
                        </View>

                        <View style={styles.editFlexDirectionColumn}>
                            <Text style={{ color: '#333333DE', fontSize: scaledHeight(16), fontWeight: 'bold', marginBottom: scaledHeight(3) }}>
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
                        </View>

                        <View style={styles.editFlexDirectionColumn}>
                            <Text style={{ color: '#333333DE', fontSize: scaledHeight(16), fontWeight: 'bold', marginBottom: scaledHeight(3) }}>
                                {"Citizenship"}
                            </Text>

                            <View style={{ flexDirection: 'row', marginLeft: '2%', marginTop: scaledHeight(3), width: '40%' }}>
                                {profileSettingsCitizenship.map((item, index) =>
                                    index == this.state.radioButtonIndex ?
                                        <GRadioButtonComponent
                                            onPress={() => this.radioButtonClicked(index)}
                                            selected
                                            questions={item.question} />
                                        :
                                        <GRadioButtonComponent
                                            onPress={() => this.radioButtonClicked(index)}
                                            selected={false}
                                            questions={item.question} />
                                )}
                            </View>
                        </View>

                        <View style={styles.editFlexDirectionColumn}>
                            {this.state.countryNonUS ? (<View>
                                <Text style={{ color: '#333333DE', fontSize: scaledHeight(16), fontWeight: 'bold', marginBottom: scaledHeight(3) }}>
                                    {"Country"}
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

                                </TouchableOpacity></View>) : null}
                        </View>

                        <View style={styles.editFlexDirectionColumn}>
                            <GButtonComponent
                                buttonStyle={styles.cancelButtonStyle}
                                buttonText={globalString.common.cancel}
                                textStyle={styles.cancelButtonText}
                                onPress={() => { this.props.navigation.navigate('profileSettings') }} />
                        </View>

                        <View style={styles.editFlexDirectionColumn}>
                            <GButtonComponent
                                buttonStyle={styles.saveButtonStyle}
                                buttonText={globalString.common.save}
                                onPress={this.navigationSuccess}
                                textStyle={styles.saveButtonText} />
                        </View>

                    </View>

                    {/* Footer Section - User and Agreements */}

                    <View style={styles.editFlexDirectionColumn}>
                        <Text style={{ color: '#56565A', fontSize: scaledHeight(18) }}>
                            {"For security reasons, not all information can be uploaded online. Please call us if you need assistance. Phone Number"}
                        </Text>
                    </View>

                    <View style={styles.newVictorySection}>
                        <Text style={styles.termsofuseText1}>
                            {"Investing involves risk including loss of principal."}
                        </Text>
                        <Text style={styles.openInvestment}>
                            {"Victory Mutual Funds and USAA Mutual Funds are distributed by Victory Capital Advisers, Inc. (VCA). VictoryShares ETFs and VictoryShares USAA ETFs are distributed by Foreside Fund Services, LLC (Foreside). VCA and Foreside are members of FINRA and SIPC. Victory Capital Management Inc. (VCM) is the investment adviser to the Victory Mutual Funds, USAA Mutual Funds, VictoryShares ETFs and VictoryShares USAA ETFs. VCA and VCM are not affiliated with Foreside. USAA is not affiliated with Foreside, VCM, or VCA. USAA and the USAA logos are registered trademarks and the USAA Mutual Funds and USAA Investments logos are trademarks of United Services Automobile Association and are being used by Victory Capital and its affiliates under license. Victory Capital means Victory Capital Management Inc., the investment manager of the USAA 529 College Savings Plan (Plan). The Plan is distributed by Victory Capital Advisers, Inc., a broker dealer registered with FINRA and an affiliate of Victory Capital. Victory Capital and its affiliates are not affiliated with United Services Automobile Association or its affiliates. USAA and the USAA logo are registered trademarks and the USAA 529 College Savings Plan logo is a trademark of United Services Automobile Association and are being used by Victory Capital and its affiliates under license."}
                        </Text>
                    </View>

                    <View style={styles.connectWithUs}>
                        <Image
                            source={require("../../Images/logo.png")} />
                    </View>

                    <View style={styles.whiteBackground}>
                        <Text style={styles.editLabelInputMedium}>
                            {"Connect with Us"}
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

                    <View style={styles.copyRightSection}>
                        <Text style={styles.copyRightText}>
                            {"Copyright Victory Capital Management Inc. ©2020"}
                        </Text>
                    </View>

                </ScrollView>
            </View>
        );
    }
}

export default EditProfileSettingsComponent;
import React, { Component } from 'react';
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { GIcon, GHeaderComponent, GFooterComponent } from '../../CommonComponents';
import gblStrings from '../../Constants/GlobalStrings';
import { styles } from './styles';
import PropTypes from 'prop-types';

class AccountRecoveryPrefComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            emailChecked: true,
            mobileNoChecked: false,
            message: '',
            emailId: '',
            mobileNo: '',
        };
    }

    componentDidMount() {
        if (this.props && this.props.initialState && this.props.initialState.email) {
            this.setState({
                emailId: this.props.initialState.email,
                mobileNo: this.props.initialState.phone
            });
        }
    }

    maskMobNo = (mobile) => {
        let maskNo = '';
        if (mobile.substring(0, 3) == "+91") {
            mobile = mobile.substring(4, mobile.length);
        }
        for (var i = 0; i < mobile.length; i++) {
            if (i < 2 || i == mobile.length - 1 || i == mobile.length - 2) {
                maskNo = maskNo + mobile[i].toString();
            } else {
                maskNo = maskNo + "*";
            }
        }
        return maskNo;
    }

    maskEmail = (myEmail) => {
        let prefix = myEmail.substring(0, myEmail.lastIndexOf("@"));
        let postfix = myEmail.substring(myEmail.lastIndexOf("@"));
        let maskid = '';
        for (var i = 0; i < prefix.length; i++) {
            if (i < 3 || i == prefix.length - 1 || i == prefix.length - 2) {
                maskid = maskid + prefix[i].toString();
            }
            else {
                maskid = maskid + "*";
            }
        }
        maskid = maskid + postfix;
        return maskid;
    }

    onCheckEmail = () => {
        this.setState({ emailChecked: !this.state.emailChecked });
    }

    onCheckMobile = () => {
        this.setState({ mobileNoChecked: !this.state.mobileNoChecked });
    }

    onClickSave = () => {
        console.log("------- onClick save account recovery preferences -------");
        if ((this.state.emailChecked) && (this.state.mobileNoChecked)) {
            this.setState({ message: gblStrings.userManagement.accRecPrefEmailText });
        } else if (this.state.mobileNoChecked) {
            this.setState({ message: gblStrings.userManagement.accRecPrefText });
        } else {
            this.setState({ message: gblStrings.userManagement.accRecPrefEmail, emailChecked: true });
        }
        console.log("selected account recovery option ------->", this.state.message);
    }
    navigateToSecurityPref = () => this.props.navigation.navigate('securityPreference');

    render() {
        return (
            <View style={styles.container} >
                <GHeaderComponent navigation={this.props.navigation} />
                <ScrollView style={styles.mainFlex}>
                    <TouchableOpacity >
                        <GIcon
                            name="left"
                            type="antdesign"
                            size={25}
                            color="#707070"
                        />

                    </TouchableOpacity>
                    {this.state.message !== '' ?
                        <View style={styles.messageFlex}>
                            <Text style={styles.messageText}>{this.state.message}</Text>
                        </View>
                        : null}

                    <Text style={styles.accRecPrefText}>{gblStrings.userManagement.accountRecPrefHeading}</Text>
                    <View style={styles.line} />
                    <Text style={styles.chooseAccRecPref}>{gblStrings.userManagement.accountRecPrefSelection}</Text>
                    <Text style={styles.lastUpdateText}>{gblStrings.userManagement.lastUpdate}</Text>


                    <View style={styles.accRecoveryOptionsFlex}>
                        <View style={styles.checkBoxFlex}>
                            <TouchableOpacity onPress={this.onCheckEmail}>
                                {
                                    (this.state.emailChecked) ?
                                        <GIcon
                                            name="checksquareo"
                                            type="antdesign"
                                            size={35}
                                            color="#707070"
                                        /> :
                                        <GIcon
                                            name="square"
                                            type="feather"
                                            size={35}
                                            color="#707070"
                                        />
                                }

                            </TouchableOpacity>

                        </View>
                        <View style={styles.emailIdOption}>
                            <Text style={styles.emailIdText}>{gblStrings.userManagement.emailId}{this.maskEmail(this.state.emailId)}</Text>
                            <Text style={styles.greyText}>{gblStrings.userManagement.emailIdSelection}</Text>
                        </View>
                    </View>

                    <View style={styles.accRecoveryOptionsFlex}>
                        <View style={styles.checkBoxFlex}>
                            <TouchableOpacity onPress={this.onCheckMobile}>
                                {
                                    (this.state.mobileNoChecked) ?
                                        <GIcon
                                            name="checksquareo"
                                            type="antdesign"
                                            size={35}
                                            color="#707070"
                                        /> :
                                        <GIcon
                                            name="square"
                                            type="feather"
                                            size={35}
                                            color="#707070"
                                        />
                                }

                            </TouchableOpacity>
                        </View>
                        <View style={styles.emailIdOption}>
                            <Text style={styles.emailIdText}>{gblStrings.userManagement.textMessageTo}{this.maskMobNo(this.state.mobileNo)}</Text>
                            <Text style={styles.greyText}>{gblStrings.userManagement.mobileNoSelection}</Text>
                        </View>
                    </View>



                    <View style={styles.buttonsFlex}>
                        <TouchableOpacity style={styles.backButtonFlex} onPress={this.navigateToSecurityPref}>
                            <Text style={styles.backButtonText}>{gblStrings.userManagement.back}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.backButtonFlex} onPress={this.navigateToSecurityPref}>
                            <Text style={styles.backButtonText}>{gblStrings.userManagement.cancel}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.saveFlex} onPress={this.onClickSave}>
                            <Text style={styles.saveText}>{gblStrings.userManagement.save}</Text>
                        </TouchableOpacity>
                    </View>


                    <View style={styles.fullLine} />

                    <View style={styles.tNCFlex}>
                        <Text style={styles.tNcHeader}>{gblStrings.userManagement.VCDiscalimerTitle}{"\n"}</Text>
                        <Text style={styles.tNcBody}>{gblStrings.userManagement.VCDiscalimerDesc}{"\n"}{"\n"}{gblStrings.userManagement.VCPrivacyNoticeDesc} </Text>
                    </View>

                    <GFooterComponent />
                </ScrollView>


            </View>

        );
    }
}


AccountRecoveryPrefComponent.propTypes = {
    navigation: PropTypes.instanceOf(Object)
};

AccountRecoveryPrefComponent.defaultProps = {

};
export default AccountRecoveryPrefComponent;


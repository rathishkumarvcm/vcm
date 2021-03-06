import React, {
    Component
} from 'react';
import {
    Text,
    View,
    ScrollView
} from 'react-native';
import PropTypes from 'prop-types';
import {
    GButtonComponent,
    GHeaderComponent,
    GFooterComponent,
    GRadioButtonComponent
} from '../../CommonComponents';
import styles from '../ChangeSignInMethod/styles';
import gblStrings from '../../Constants/GlobalStrings';
import {
    CustomCheckBox
} from '../../AppComponents';
//  import { MaskService } from 'react-native-masked-text';


class CSMOtp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            //  additionaProtection:true,
            //  radioButton: false,
            radioButtonIndex: 0,
            //  mobileNo:"",
            //  email:"",
            signInMethods: [],
            saveCurrentDevice: false,
        };
    }

    componentDidMount() {
        this.getInitialValues();
    }

    componentDidUpdate(prevProps) {
        //  console.log("componentDidUpdate::::> "+prevState);
        if (this.props !== prevProps) {
            this.getUpdatedValues();
        }
    }

    getInitialValues = () => {
        const { initialState, signInMethodsData } = this.props;
        if (this.props && initialState && initialState.email && initialState.phone) {
            this.renderMaskedInput();
        }
        //  console.log("------>mobbbbb",this.state.email,this.state.mobileNo);
        if (this.props && signInMethodsData && signInMethodsData.saveCurrentDevice) {
            this.setState({
                saveCurrentDevice: signInMethodsData.saveCurrentDevice
            });
        }

        if (this.props && signInMethodsData && signInMethodsData.otpMethodType &&
            signInMethodsData.otpMethodType === "Email") {
            this.setState({
                radioButtonIndex: 0
            });
        } else if (this.props && signInMethodsData && signInMethodsData.otpMethodType &&
            signInMethodsData.otpMethodType === "Mobile") {
            this.setState({
                radioButtonIndex: 1
            });
        } else if (this.props && signInMethodsData && signInMethodsData.otpMethodType &&
            signInMethodsData.otpMethodType === "Security") {
            this.setState({
                radioButtonIndex: 2
            });
        }

    }

    getUpdatedValues = () => {
        const { signInMethodsData } = this.props;
        if (this.props && signInMethodsData && signInMethodsData.saveCurrentDevice) {
            this.setState({
                saveCurrentDevice: signInMethodsData.saveCurrentDevice
            });
        }
        if (this.props && signInMethodsData && signInMethodsData.otpMethodType &&
            signInMethodsData.otpMethodType === "Email") {
            this.setState({
                radioButtonIndex: 0
            });
        } else if (this.props && signInMethodsData && signInMethodsData.otpMethodType &&
            signInMethodsData.otpMethodType === "Mobile") {
            this.setState({
                radioButtonIndex: 1
            });
        } else if (this.props && signInMethodsData && signInMethodsData.otpMethodType &&
            signInMethodsData.otpMethodType === "Security") {
            this.setState({
                radioButtonIndex: 2
            });
        }
    }


    renderMaskedInput = () => {
        /* this.setState({
            email : this.props.initialState.email,
            mobileNo : this.props.initialState.phone,
          }); */
        const { initialState } = this.props;
        const strmobile = initialState.phone;
        //  console.log("------>mobbbbbnext", strmobile);
        //  var maskmobile = strmobile.substring(0,2)+strmobile.substring(2,8).replace(/\d/g,"*")+strmobile.substring(8,10)
        const maskmobile = strmobile.substring(4, 6) + strmobile.substring(6, 12).replace(/\d/g, "*") + strmobile.substring(12, 14);
        const myemailId = initialState.email;

        let maskedid = "";
        const index = myemailId.lastIndexOf("@");
        const prefix = myemailId.substring(0, index);
        const postfix = myemailId.substring(index);
        const mask = prefix.split('').map((o, i) => {
            if (i === 0 || i === (index - 1)) {
                return o;
            }
            return '*';

        }).join('');
        maskedid = mask + postfix;
        this.setState({
            signInMethods: [{
                index1: 0,
                question: "One Time Password to EmailID",
                additionalText: maskedid
            },
            {
                index1: 1,
                question: "One Time Password to Mobile",
                additionalText: maskmobile
            },
            {
                index1: 2,
                question: "Answer Security Questions"
            }
            ]
        });
    }

    onCheckBoxCheck = () => {
        this.setState(prevState => ({
            saveCurrentDevice: !prevState.saveCurrentDevice
        }));
    }

    onClickCancel = () => {
        const { navigation } = this.props;
        navigation.navigate('ChangeSignInMethod');
    }

    onClickSave = () => {
        const { radioButtonIndex, saveCurrentDevice } = this.state;
        const { signInMethods, navigation } = this.props;
        let payloadData = {};
        const tempData=saveCurrentDevice;
        const date = new Date().getDate();
        const month = new Date().getMonth() + 1;
        const year = new Date().getFullYear();
        const hours = new Date().getHours();
        const min = new Date().getMinutes();
        const sec = new Date().getSeconds();
        let otpType = '';
        const updatedDate = `${date} / ${month} / ${year} ${hours} : ${min} : ${sec}`;
        if (radioButtonIndex === 0) {
            otpType = 'Email';
        }
        if (radioButtonIndex === 1) {
            otpType = 'Mobile';
        }
        if (radioButtonIndex === 2) {
            otpType = 'Security';
        }
        payloadData = {
            selectedMethod: 'OTP',
            lastUpdatedTime: updatedDate,
            saveCurrentDevice: tempData,
            otpMethodType: otpType
        };
        signInMethods("signInMethodsData", payloadData);
        //  console.log("----signInMethods",payloadData);
        navigation.navigate('ChangeSignInMethod', {
            showAlert: true,
            message: gblStrings.userManagement.otp,
            index: 0
        });
    }

    radioButtonClicked = (index) => () => {
        const { radioButtonIndex } = this.state;
        if (index !== radioButtonIndex) {
            this.setState({
                radioButtonIndex: index,
                //  radioButton: false
            });
            //      if(index == 0)
            //      {
            //          // alert("OTP Selected");
            //          this.setState({alertString:gblStrings.userManagement.otp});
            //      }
            //      else if(index == 1)
            //      {
            //          // alert("Soft Token Selected");
            //          this.setState({alertString:gblStrings.userManagement.softToken,initialSelection:true});
            //      }
            //      else if(index == 2)
            //      {
            //          // alert("Push Notification");
            //          this.setState({alertString:gblStrings.userManagement.pushNotification,initialSelection:true});
            //      }   
            //  }
            //  else {
            //      this.setState({
            //          radioButton: false
            //      });
        }
    }

    render() {
        const { radioButtonIndex, signInMethods, saveCurrentDevice } = this.state;
        const { navigation } = this.props;
        return (
            <View style={styles.container}>
                <GHeaderComponent navigation={navigation} />
                <ScrollView style={styles.scrollViewFlex}>
                    <View style={styles.signInView}>
                        <Text style={styles.signIntext}> {gblStrings.userManagement.changeSignInHeadingOTP}
                        </Text>
                        <Text style={styles.lblLine} />
                        <View style={styles.widthView}>
                            <Text style={styles.lblTxt}> {gblStrings.userManagement.otpSignon} </Text>
                        </View>
                        {
                            signInMethods.map((item, index) =>
                                index === radioButtonIndex ?
                                    (
                                        <GRadioButtonComponent onPress={this.radioButtonClicked(index)}
                                            selected questions={item.question}
                                            additionalText={item.additionalText}
                                        />
                                    )
                                    :
                                    (
                                        <GRadioButtonComponent onPress={this.radioButtonClicked(index)}
                                            selected={false}
                                            questions={item.question}
                                            additionalText={item.additionalText}
                                        />
                                    )
                            )
                        }
                        <Text style={styles.lblTxtSmall}> {gblStrings.userManagement.checkTheOption}
                        </Text>
                        <View style={styles.agreeSectionGrp}>
                            <CustomCheckBox size={24}
                                itemBottom={0}
                                itemTop={0}
                                outerCicleColor="#707070"
                                innerCicleColor="#61285F"
                                labelStyle={styles.agreeTermsTxt}
                                label={gblStrings.userManagement.saveCurrentDevice}
                                selected={saveCurrentDevice}
                                onPress={this.onCheckBoxCheck}
                            />
                        </View>
                        <GButtonComponent
                            buttonStyle={styles.cancelButton}
                            buttonText={gblStrings.common.back}
                            textStyle={styles.cancelButtonText}
                            onPress={this.onClickCancel}
                        />
                        <GButtonComponent
                            buttonStyle={styles.cancelButton}
                            buttonText={gblStrings.common.cancel}
                            textStyle={styles.cancelButtonText}
                            onPress={this.onClickCancel}
                        />
                        <GButtonComponent
                            buttonStyle={styles.saveButton}
                            buttonText={gblStrings.common.save}
                            textStyle={styles.saveButtonText}
                            onPress={this.onClickSave}
                        />
                    </View>

                    <GFooterComponent />
                </ScrollView>
            </View>
        );
    }
}
CSMOtp.propTypes = {
    navigation: PropTypes.instanceOf(Object),
    initialState: PropTypes.instanceOf(Object),
    signInMethodsData: PropTypes.instanceOf(Object),
    signInMethods: PropTypes.func
};
CSMOtp.defaultProps = {
    navigation: {},
    initialState: {},
    signInMethodsData: {},
    signInMethods: () => { }
};

export default CSMOtp;
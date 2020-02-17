import React from 'react';
import { Text, View, TouchableOpacity, TextInput, ScrollView, KeyboardAvoidingView } from 'react-native';
import PropTypes from "prop-types";
import { navigate, navigateBack } from '../../Navigation/navigationService';
import styles from './styles';
import gblStrings from '../../Constants/GlobalStrings';
import AttachmentData from '../MSRServiceRequest/AttachmentData';
import arrayStyles from './arrayStyles';
import { GIcon, GTitleBarComponent, GDropDownComponent, GButtonComponent, GInputComponent } from '../../CommonComponents';

const topicData = [
    { "key": "1", "value": "Investment Advice" },
    { "key": "2", "value": "Account Openning" },
    { "key": "3", "value": "My Profile Information" },
    { "key": "4", "value": "Transactions" },
    { "key": "5", "value": "Account Service" },
    { "key": "6", "value": "Others" },
];

const accounts = [
    { "key": "1", "value": "34XXXXX XX25" },
    { "key": "2", "value": "52XXXXX XX74" },
    { "key": "3", "value": "85XXXXX XXX99" },
    { "key": "4", "value": "10XXXXX XX07" },
    { "key": "5", "value": "97XXXXX XX11" },
    { "key": "6", "value": "11XXXXX XXX24" },
    { "key": "7", "value": "71XXXXX XXX74" },
];

class SecureMessageComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputSubject: "",
            erFlagSubject: false,
            inputMessageBody: "",
            // erFlagMsgBody: false,

            dropDownTopicState: false,
            dropDownTopicValue: '',
            dropDownTopicFlag: false,
            dropDownTopicMsg: '',

            dropDownAccountState: false,
            dropDownAccountValue: '',
            dropDownAccountFlag: false,
            dropDownAccountMsg: '',
        };
    }

    // static getDerivedStateFromProps(props, state) {
    //     // console.warn("*****", state);
    //     return state;
    // }

    // componentDidMount() {
    //     // const { getAccountList } = this.props;
    //     const accountListPayload = {
    //         "companyNumber": "591",
    //         "memberId": "V122221212",
    //         "customerId": "V1234567"
    //     };
    //     // getAccountList(accountListPayload);
    // }

    isEmpty = (str) => {
        if (str === null || str === undefined || str === "null" || str === "" || str === "undefined") {
            return true;
        }
        return false;
    }

    validate = () => {
        const { dropDownTopicValue, dropDownAccountValue, inputSubject, inputMessageBody } = this.state;
        if (this.isEmpty(dropDownTopicValue)) {
            this.setState({
                dropDownTopicFlag: true,
                dropDownTopicMsg: "Please select any Topic!"
            });
            return false;
        }
        if (this.isEmpty(dropDownAccountValue)) {
            this.setState({
                dropDownAccountFlag: true,
                dropDownAccountMsg: "Please select any Account!"
            });
            return false;
        }
        if (this.isEmpty(inputSubject)) {
            this.setState({
                erFlagSubject: true,
            });
            return false;
        }
        if (this.isEmpty(inputMessageBody)) {
            // console.log("optional");
        }
        return true;

    }

    setSubjectText = text => {
        this.setState({
            inputSubject: text
        });
    }

    setMessageBodyText = text => {
        this.setState({
            inputMessageBody: text
        });
    }

    dropDownTopicSelect = (value, index, data) => {
        this.setState({
            dropDownTopicValue: data[+index].value,
            dropDownTopicState: false,
            dropDownTopicFlag: false
        });
    }

    dropDownAccountSelect = (value, index, data) => {
        this.setState({
            dropDownAccountValue: data[+index].value,
            dropDownAccountState: false,
            dropDownAccountFlag: false
        });
    }

    navigateSecureMessage = () => {
        navigate('msrSecureMessage');
    }

    navigateBack = () => navigateBack();

    render() {
        // const { accounts } = this.props;
        const { inputSubject, inputMessageBody, erFlagSubject,
            dropDownTopicValue, dropDownTopicState, dropDownTopicFlag, dropDownTopicMsg,
            dropDownAccountValue, dropDownAccountState, dropDownAccountFlag, dropDownAccountMsg } = this.state;
        return (
            <View style={styles.container}>
                <GTitleBarComponent
                    toolbarTiltle={gblStrings.msrServiceRequest.newSecureMessage}
                    backPress={this.navigationGoBack}
                />
                <ScrollView keyboardShouldPersistTaps="handled">
                    <KeyboardAvoidingView>
                        <View style={styles.columnContainer}>
                            <GDropDownComponent
                                dropDownName={gblStrings.msrServiceRequest.topic}
                                dropDownTextName={styles.lblTxt}
                                textInputStyle={styles.dropdownTextInput}
                                dropDownLayout={styles.dropdownLayout}
                                data={topicData}
                                showDropDown={dropDownTopicState}
                                dropDownValue={dropDownTopicValue}
                                selectedDropDownValue={this.dropDownTopicSelect}
                                itemToDisplay="value"
                                errorFlag={dropDownTopicFlag}
                                errorText={dropDownTopicMsg}
                            />
                            <GDropDownComponent
                                dropDownName={gblStrings.msrServiceRequest.account}
                                dropDownTextName={styles.lblTxt}
                                textInputStyle={styles.dropdownTextInput}
                                dropDownLayout={styles.dropdownLayout}
                                data={accounts}
                                showDropDown={dropDownAccountState}
                                dropDownValue={dropDownAccountValue}
                                selectedDropDownValue={this.dropDownAccountSelect}
                                itemToDisplay="value"
                                errorFlag={dropDownAccountFlag}
                                errorText={dropDownAccountMsg}
                            />
                            <Text style={styles.labelText}>{gblStrings.msrServiceRequest.subject}</Text>
                            <GInputComponent
                                propInputStyle={styles.customTxtBox}
                                placeholder={gblStrings.msrServiceRequest.subject}
                                onChangeText={this.setSubjectText}
                                // onBlur={this.validCode}
                                value={inputSubject}
                                errorFlag={erFlagSubject}
                                errorText={gblStrings.msrServiceRequest.erMsgSubject}
                            />
                            <Text style={styles.labelText}>{gblStrings.msrServiceRequest.messageBody}</Text>
                            <TextInput
                                style={styles.multilineTextBox}
                                onChangeText={this.setMessageBodyText}
                                placeholder={gblStrings.msrServiceRequest.messageBody}
                                value={inputMessageBody}
                                multiline
                                numberOfLines={10}
                                clearButtonMode="while-editing"
                                maxLength={1000}
                            />
                            <AttachmentData limit="10" />
                            <View style={styles.columnContainer}>
                                <GButtonComponent
                                    buttonStyle={styles.normalWhiteBtn}
                                    buttonText={gblStrings.common.cancel}
                                    textStyle={styles.normalWhiteBtnTxt}
                                    onPress={this.navigateBack}
                                />
                                <GButtonComponent
                                    buttonStyle={styles.normalBlackBtn}
                                    buttonText={gblStrings.common.submit}
                                    textStyle={styles.normalBlackBtnTxt}
                                    onPress={this.navigateSecureMessage}
                                // disabled={!this.state.agreeConditions}
                                />
                            </View>
                        </View>
                    </KeyboardAvoidingView>
                </ScrollView>
            </View>

        );
    }
}

SecureMessageComponent.propTypes = {
    // isPageLoading: PropTypes.bool,
    // navigation: PropTypes.instanceOf(Object),
};

SecureMessageComponent.defaultProps = {
    // isPageLoading: true,
    // navigation: {},
};

export default SecureMessageComponent;
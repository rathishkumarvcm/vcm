import React from 'react';
import { Text, View, ScrollView, TextInput, TouchableWithoutFeedback, SafeAreaView, TouchableOpacity, KeyboardAvoidingView, Linking, Platform } from 'react-native';
import Modal from 'react-native-modal';
import PropTypes from "prop-types";
import styles from './style';
import gblStrings from '../../Constants/GlobalStrings';
import { GIcon, GDashBoardContainer, GDropDownComponent, GInputComponent, GButtonComponent, showAlertWithCancelButton } from '../../CommonComponents';
import AttachmentData from './AttachmentData';
import arrayStyles from './arrayStyles';
import * as COLORS from "../../Constants/ColorConstants";

const topicData = [
    { "key": "1", "value": "Investment Advice" },
    { "key": "2", "value": "Account Openning" },
    { "key": "3", "value": "My Profile Information" },
    { "key": "4", "value": "Transactions" },
    { "key": "5", "value": "Account Service" },
    { "key": "6", "value": "Others" },
];

// const accountData = [
//     { "key": "1", "value": "34XXXXX XX25" },
//     { "key": "2", "value": "52XXXXX XX74" },
//     { "key": "3", "value": "85XXXXX XXX99" },
//     { "key": "4", "value": "10XXXXX XX07" },
//     { "key": "5", "value": "97XXXXX XX11" },
//     { "key": "6", "value": "11XXXXX XXX24" },
//     { "key": "7", "value": "71XXXXX XXX74" },
// ];

class FloatingButtonComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isShowModal: false,
            isShowSecureMessageModal: false,
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

    static getDerivedStateFromProps(props, state) {
        // console.warn("*****", state);
        return state;
    }

    componentDidMount() {
        const { getAccountList } = this.props;
        const accountListPayload = {
            "companyNumber": "591",
            "memberId": "V122221212",
            "customerId": "V1234567"
        };
        getAccountList(accountListPayload);
    }


    toggleModal = () => this.setState(prevState => ({
        isShowModal: !prevState.isShowModal,
        isShowSecureMessageModal: false
    }));

    // toggleModal = () => {
    //     const { setModalVisible, setSecureMsgModalVisible, isShowModal } = this.props;
    //     setModalVisible(!isShowModal);
    //     setSecureMsgModalVisible(false);
    // }

    toggleSecureMsgModal = () => this.setState(prevState => ({ isShowSecureMessageModal: !prevState.isShowSecureMessageModal }));

    // toggleSecureMsgModal = () => {
    //     const { setSecureMsgModalVisible } = this.props;
    //     setSecureMsgModalVisible(true);
    // }

    submitToCall = () => {
        if (this.validate) {
            this.toggleModal();
            // console.warn("You can call API!");
        }
    }

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

    openDialPad = () => {
        const phone = gblStrings.msrServiceRequest.vcmCustomerCareNumber;
        let number;
        if (Platform.OS === 'android') {
            showAlertWithCancelButton(gblStrings.common.appName, 'Are you sure want to make a call ?',
                gblStrings.common.ok, gblStrings.common.cancel,
                () => {
                    number = `tel:${phone}`;
                    Linking.openURL(number);
                },
                () => { this.dismiss(); }
            );

        }
        else {
            number = `telprompt:${phone} `;
        }
        Linking.openURL(number);
    };

    onChangeText = (index, keyName, value) => {
        const { newContingentBene } = this.state;
        const newItems = [...newContingentBene];
        newItems[+index][`${keyName}`] = value;
        this.setState({
            newContingentBene: newItems
        });
    }

    render() {

        const { navigation, accounts } = this.props;
        //  const nextBtnstyle = this.state.agreeConditions ? StyleSheet.normalBlackBtn : [StyleSheet.normalBlackBtn, { opacity: .45 }];
        // const { isShowModal, isShowSecureMessageModal } = this.props;
        const { inputSubject, inputMessageBody, erFlagSubject, isShowModal, isShowSecureMessageModal,
            dropDownTopicValue, dropDownTopicState, dropDownTopicFlag, dropDownTopicMsg,
            dropDownAccountValue, dropDownAccountState, dropDownAccountFlag, dropDownAccountMsg } = this.state;
        return (
            <GDashBoardContainer navigation={navigation} title={gblStrings.msrServiceRequest.needAssistent}>
                <View style={styles.container}>
                    <TouchableOpacity onPress={this.toggleModal}>
                        <View style={styles.fabButton}>
                            <GIcon
                                name="assistant"
                                type="material"
                                size={22}
                                color={COLORS.WHITE_COLOR}
                            />
                        </View>
                    </TouchableOpacity>
                    <Modal
                        style={styles.modalStyle}
                        animationIn="zoomInRight"
                        animationOut="zoomOutRight"
                        onRequestClose={this.toggleModal}
                        onBackdropPress={this.toggleModal}
                        backdropOpacity={0.3}
                        useNativeDriver
                        isVisible={isShowModal}
                    >
                        <SafeAreaView style={styles.modalViewStyle}>
                            <View style={styles.columnContainer}>
                                <Text style={styles.grayBoldText}>{gblStrings.msrServiceRequest.needAssistent}</Text>
                                <View style={styles.dividerLine} />
                                <TouchableOpacity onPress={this.openDialPad}>
                                    <View style={styles.rowContainer}>
                                        <GIcon name="phone" type="material" size={25} color="black" />
                                        <Text style={styles.blackText}>{gblStrings.msrServiceRequest.vcmCustomerCareNumber}</Text>
                                    </View>
                                </TouchableOpacity>
                                <View style={styles.transparentGrayContainer}>
                                    <Text style={styles.grayBoldText}>{gblStrings.msrServiceRequest.vcmMemberServices}</Text>
                                    <View style={styles.rowContainer}>
                                        <GIcon name="alarm" type="material" size={20} color="gray" />
                                        <View style={styles.columnContainer}>
                                            <Text style={styles.blackText}>{gblStrings.msrServiceRequest.mondayToFriday}</Text>
                                            <Text style={styles.grayText}>{gblStrings.msrServiceRequest.mondayToFridayTime}</Text>
                                        </View>
                                    </View>
                                    <View style={styles.rowContainer}>
                                        <GIcon name="alarm" type="material" size={20} color="gray" />
                                        <View style={styles.columnContainer}>
                                            <Text style={styles.blackText}>{gblStrings.msrServiceRequest.saturdays}</Text>
                                            <Text style={styles.grayText}>{gblStrings.msrServiceRequest.saturdayTime}</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={styles.transparentGrayContainer}>
                                    <Text style={styles.grayBoldText}>{gblStrings.msrServiceRequest.t_403BServices}</Text>
                                    <View style={styles.rowContainer}>
                                        <GIcon name="alarm" type="material" size={20} color="gray" />
                                        <View style={styles.columnContainer}>
                                            <Text style={styles.blackText}>{gblStrings.msrServiceRequest.weekdays}</Text>
                                            <Text style={styles.grayText}>{gblStrings.msrServiceRequest.weekdayTime}</Text>
                                        </View>
                                    </View>
                                </View>
                                <Text style={styles.alignSelf}>
                                    <Text style={styles.smallGrayText}>{gblStrings.msrServiceRequest.forReferTo}</Text>
                                    <Text style={styles.linkText}>{gblStrings.msrServiceRequest.victoryBusinessCalendar}</Text>
                                </Text>
                                <View style={styles.dividerLine} />
                                <TouchableWithoutFeedback onPress={this.toggleSecureMsgModal}>
                                    <View style={styles.rowContainer}>
                                        <GIcon name="mail" type="material" size={25} color="black" />
                                        <Text style={styles.blackText}>{gblStrings.msrServiceRequest.sendSecureMsg}</Text>
                                    </View>
                                </TouchableWithoutFeedback>
                                <View style={styles.dividerLine} />
                                <View style={styles.rowContainer}>
                                    <GIcon name="chat" type="material" size={25} color="black" />
                                    <Text style={styles.blackText}>{gblStrings.msrServiceRequest.liveChatAgent}</Text>
                                </View>
                            </View>
                            {/* Secure Message Modal */}
                            <Modal
                                style={styles.modalSecureMessage}
                                animationIn="zoomInDown"
                                animationOut="zoomOutUp"
                                onRequestClose={this.toggleModal}
                                onBackdropPress={this.toggleModal}
                                backdropOpacity={0.4}
                                useNativeDriver
                                isVisible={isShowSecureMessageModal}
                            >
                                <SafeAreaView style={styles.modalViewSecureMessage}>
                                    <ScrollView keyboardShouldPersistTaps="handled">
                                        <KeyboardAvoidingView>
                                            <View style={styles.columnContainer}>
                                                <View style={styles.rowContainer}>
                                                    <Text style={arrayStyles({ width: '90%' }).labelText}>New Secure Message</Text>
                                                    <TouchableOpacity onPress={this.toggleSecureMsgModal}>
                                                        <GIcon name="close" type="material" size={25} color="black" />
                                                    </TouchableOpacity>
                                                </View>
                                                <View style={styles.dividerLine} />
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
                                                        onPress={this.toggleSecureMsgModal}
                                                    />
                                                    <GButtonComponent
                                                        buttonStyle={styles.normalBlackBtn}
                                                        buttonText={gblStrings.common.submit}
                                                        textStyle={styles.normalBlackBtnTxt}
                                                        onPress={this.submitToCall}
                                                    // disabled={!this.state.agreeConditions}
                                                    />
                                                </View>
                                            </View>
                                        </KeyboardAvoidingView>
                                    </ScrollView>
                                </SafeAreaView>
                            </Modal>
                        </SafeAreaView>
                    </Modal>

                </View>
            </GDashBoardContainer>
        );
    }
}

FloatingButtonComponent.propTypes = {
    // isPageLoading: PropTypes.bool,
    // isShowModal: PropTypes.bool,
    // isShowSecureMessageModal: PropTypes.bool,
    navigation: PropTypes.instanceOf(Object),
    getAccountList: PropTypes.instanceOf(Object),
    accounts: PropTypes.arrayOf
};

FloatingButtonComponent.defaultProps = {
    // isPageLoading: true,
    // isShowModal: false,
    // isShowSecureMessageModal: false,
    navigation: {},
    getAccountList: {},
    accounts: []
};

export default FloatingButtonComponent;
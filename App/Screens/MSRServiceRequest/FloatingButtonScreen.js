import React from 'react';
import { Text, View, ScrollView, TextInput, TouchableWithoutFeedback, SafeAreaView, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import ActionButton from 'react-native-action-button';
import Modal from 'react-native-modal';
import styles from './style';
import gblStrings from '../../Constants/GlobalStrings';
import { GIcon, GHeaderComponent, GDropDownComponent, GInputComponent, GButtonComponent } from '../../CommonComponents';

const topicData = [
    { "key": "1", "value": "Investment Advice" },
    { "key": "2", "value": "Account Openning" },
    { "key": "3", "value": "My Profile Information" },
    { "key": "4", "value": "Transactions" },
    { "key": "5", "value": "Account Service" },
    { "key": "6", "value": "Others" },
];

class FloatingButtonComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isShowModal: false,
            isShowSecureMessageModal: false,
            inputSubject: "",
            inputMessageBody: "",

            dropDownTopicState: false,
            dropDownTopicValue: '',
            dropDownTopicFlag: false,
            dropDownTopicMsg: '',
        };
    }

    toggleModal = () => this.setState(prevState => ({
        isShowModal: !prevState.isShowModal,
        isShowSecureMessageModal: false
    }));

    toggleSecureMsgModal = () => this.setState(prevState => ({ isShowSecureMessageModal: !prevState.isShowSecureMessageModal }));


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
            dropDownTopicValue: data[index].value,
            dropDownTopicState: false,
            dropDownTopicFlag: false
        });
    }

    renderAttachmentLimit = () => {
        return (
            <View style={styles.columnContainer}>
                <View style={styles.uploadFileContainer}>
                    <Text style={styles.uploadFileTitle}>
                        {gblStrings.accManagement.attachLimit}
                    </Text>
                    <Text style={styles.uploadFileDivider}>
                        {gblStrings.accManagement.attachdivider}
                    </Text>
                    <Text style={styles.uploadFileDesc}>
                        {gblStrings.accManagement.noOfFiles}
                    </Text>
                </View>

                <View style={styles.uploadFileContainer}>
                    <Text style={styles.uploadFileTitle}>
                        {gblStrings.accManagement.sizeLimitPerFile}
                    </Text>
                    <Text style={styles.uploadFileDivider}>
                        {gblStrings.accManagement.attachdivider}
                    </Text>
                    <Text style={styles.uploadFileDesc}>
                        {gblStrings.accManagement.megaBytes}
                    </Text>
                </View>

                <View style={styles.uploadFileContainer}>
                    <Text style={styles.uploadFileTitle}>
                        {gblStrings.accManagement.totalSizeLimit}
                    </Text>
                    <Text style={styles.uploadFileDivider}>
                        {gblStrings.accManagement.attachdivider}
                    </Text>
                    <Text style={styles.uploadFileDesc}>
                        {gblStrings.accManagement.megaBytes}
                    </Text>
                </View>

                <View style={styles.uploadFileContainer}>
                    <Text style={styles.uploadFileTitle}>
                        {gblStrings.accManagement.fileTypesAllow}
                    </Text>
                    <Text style={styles.uploadFileDivider}>
                        {gblStrings.accManagement.attachdivider}
                    </Text>
                    <Text style={styles.uploadFileDesc}>
                        {gblStrings.accManagement.fileFormat}
                    </Text>
                </View>
            </View>
        );
    }

    onChangeText = (index, keyName, value) => {
        const { newContingentBene } = this.state;
        const newItems = [...newContingentBene];
        newItems[index][keyName] = value;
        this.setState({
            newContingentBene: newItems
        });
    }

    render() {

        const { navigation } = this.props;
        //  const nextBtnstyle = this.state.agreeConditions ? StyleSheet.normalBlackBtn : [StyleSheet.normalBlackBtn, { opacity: .45 }];
        const { isShowModal, isShowSecureMessageModal, inputSubject, inputMessageBody,
            dropDownTopicValue, dropDownTopicState, dropDownTopicFlag, dropDownTopicMsg
        } = this.state;

        return (
            <SafeAreaView style={styles.container}>
                <GHeaderComponent navigation={navigation} />
                <View style={styles.container}>
                    <ActionButton buttonColor="skyblue" onPress={this.toggleModal}>
                        <GIcon
                            name="plus"
                            type="material"
                            size={40}
                            color="black"
                        />
                    </ActionButton>
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
                                <View style={styles.rowContainer}>
                                    <GIcon name="phone" type="material" size={25} color="black" />
                                    <Text style={styles.blackText}>{gblStrings.msrServiceRequest.vcmCustomerCareNumber}</Text>
                                </View>
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
                                                    <Text style={[styles.labelText, { width: '90%' }]}>New Secure Message</Text>
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
                                                    changeState={this.dropDownCodeClick}
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
                                                    data={topicData}
                                                    changeState={this.dropDownCodeClick}
                                                    showDropDown={dropDownTopicState}
                                                    dropDownValue={dropDownTopicValue}
                                                    selectedDropDownValue={this.dropDownTopicSelect}
                                                    itemToDisplay="value"
                                                    errorFlag={dropDownTopicFlag}
                                                    errorText={dropDownTopicMsg}
                                                />
                                                <Text style={styles.labelText}>{gblStrings.msrServiceRequest.subject}</Text>
                                                <GInputComponent
                                                    propInputStyle={styles.customTxtBox}
                                                    placeholder={gblStrings.msrServiceRequest.subject}
                                                    onChangeText={this.setSubjectText}
                                                    // onBlur={this.validCode}
                                                    value={inputSubject}
                                                    // errorFlag={true}
                                                    errorText={"error"}
                                                />
                                                <Text style={styles.labelText}>{gblStrings.msrServiceRequest.messageBody}</Text>
                                                <TextInput
                                                    style={styles.multilineTextBox}
                                                    onChangeText={this.setMessageBodyText}
                                                    value={inputMessageBody}
                                                    multiline={true}
                                                    numberOfLines={10}
                                                    clearButtonMode="while-editing"
                                                    maxLength={1000}
                                                    // errorFlag={true}
                                                    errorText={"error"}
                                                />

                                                <View style={styles.grayBorderContainer}>
                                                    <GButtonComponent
                                                        buttonStyle={styles.selectFilesBtn}
                                                        buttonText={gblStrings.accManagement.selectFiles}
                                                        textStyle={styles.selectFilesBtnTxt}
                                                        onPress={this.uploadImage}
                                                    />
                                                    <GIcon
                                                        name="file-upload"
                                                        type="material"
                                                        size={30}
                                                        color="#E9E4E4"
                                                    />
                                                    <TouchableOpacity onPress={this.uploadSelectedFiles}>
                                                        <Text style={styles.uploadText}>
                                                            {gblStrings.common.upload}
                                                        </Text>
                                                    </TouchableOpacity>
                                                </View>
                                                {this.renderAttachmentLimit}
                                                <View style={styles.columnContainer}>
                                                    <GButtonComponent
                                                        buttonStyle={styles.normalWhiteBtn}
                                                        buttonText={gblStrings.common.cancel}
                                                        textStyle={styles.normalWhiteBtnTxt}
                                                        onPress={this.goBack}
                                                    />
                                                    <GButtonComponent
                                                        buttonStyle={styles.normalBlackBtn}
                                                        buttonText={gblStrings.common.next}
                                                        textStyle={styles.normalBlackBtnTxt}
                                                        onPress={this.onClickNext}
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
            </SafeAreaView>
        );
    }
}

export default FloatingButtonComponent;


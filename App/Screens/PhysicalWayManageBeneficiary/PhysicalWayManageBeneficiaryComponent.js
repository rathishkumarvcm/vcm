import React, { Component } from 'react';
import { Text, View, ScrollView, Platform, TouchableOpacity, Alert } from 'react-native';
import PropTypes from 'prop-types';
import DocumentPicker from 'react-native-document-picker';
import * as mime from 'react-native-mime-types';
import styles from './styles';
import { GHeaderComponent, GFooterSettingsComponent, GButtonComponent, GIcon } from '../../CommonComponents';
import gblStrings from '../../Constants/GlobalStrings';
import AppUtils from '../../Utils/AppUtils';

const maxFileLimit = 10; // No. of Files
const maxFileSize = 30; // Maximum file size 30 MB

class PhysicalWayManageBeneficiaryComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            disableNextButton: false,
            isLoading: false,
            multipleFile: [],
            fileSelected: false,
            errorMessage: "",
            selectedItemID: "",
            selectedItemName: "",
            itemID: "",
        };
    }

    /* ---------------------- Component LifeCycle Methods -------------------------- */

    componentDidUpdate() {
        AppUtils.debugLog("==Did Update Called==");
    }

    /* ---------------------- Button Events -------------------------- */

    goBack = () => {
        const { navigation } = this.props;
        navigation.goBack();
    }

    onClickCancel = () => {
        // const {navigation} = this.props;
        // navigation.goBack('termsAndConditions');
    }

    onClickSave = () => {
        // this.validateFields();
    }

    onClickSubmit = () => {
        // this.validateFields();
    }

    onPressCheck = (keyName) => () => this.setState(prevState => ({ [keyName]: !prevState[keyName] }));

    onSelected = (item) => {
        AppUtils.debugLog(`item: ${item.id}`);
        this.setState({ selectedItemID: item.id });
        this.setState({ selectedItemName: item.name });
        //  alert("You selected :: " + item.name)
    }

    /* ---------------------- Document Picker Events -------------------------- */

    uploadSelectedFiles = () => {
        const { multipleFile } = this.state;
        if (multipleFile.length > 0) {
            let size = 0;

            multipleFile.map((item) => (
                size += item.size
            ));

            if ((size / 1024 ** 2) > maxFileSize) {
                this.setState({ fileSelected: true, errorMessage: 'Total Size limit should be less than 30 MB' });
            } else {
                alert(`File uploaded successfully`);
            }
        } else {
            this.setState({ fileSelected: true, errorMessage: 'Please select a file before uploading' });
        }
    }

    async uploadImage() {
        // Opening Document Picker for selection of multiple file
        try {
            let results;
            // Android File formats
            if (Platform.OS === 'android') {
                results = await DocumentPicker.pickMultiple({
                    type: [
                        // DocumentPicker.types.allFiles
                        mime.lookup('docx'),
                        mime.lookup('doc'),
                        mime.lookup('jpg'),
                        mime.lookup('jpeg'),
                        mime.lookup('png'),
                        mime.lookup('xls'),
                        mime.lookup('pdf'),
                        mime.lookup('gif'),
                        mime.lookup('bmp')
                    ]
                });
            }

            // IOS File formats
            if (Platform.OS === 'ios') {
                results = await DocumentPicker.pickMultiple({
                    type: [
                        'org.openxmlformats.wordprocessingml.document',
                        'com.adobe.pdf',
                        'org.openxmlformats.spreadsheetml.sheet',
                        // DocumentPicker.types.images,            
                    ]
                });
            }

            // for (const res of results) {
            //   // Printing the log realted to the file
            //   console.log(`res : ${ JSON.stringify(res)}`);
            //   console.log(`URI : ${ res.uri}`);
            //   console.log(`Type : ${ res.type}`);
            //   console.log(`File Name : ${ res.name}`);
            //   console.log(`File Size : ${ res.size}`);
            // }

            // Setting the state to show multiple file attributes

            if (results.length > maxFileLimit) {
                this.setState({ fileSelected: true, errorMessage: `You can attach only ${maxFileLimit} file` });
            } else {
                this.setState({ multipleFile: results, fileSelected: false });
            }

        } catch (err) {
            // Handling any exception (If any)
            if (DocumentPicker.isCancel(err)) {
                // If user canceled the document selection
                // alert('Canceled from multiple doc picker');
            } else {
                // For Unknown Error
                Alert.alert(`Unknown Error: ${JSON.stringify(err)}`);
                throw err;
            }
        }
    }

    render() {
        const { navigation } = this.props;
        const { disableNextButton, fileSelected, multipleFile, errorMessage } = this.state;
        return (
            <View style={styles.container}>
                <GHeaderComponent navigation={navigation} />
                <ScrollView style={styles.mainFlex}>

                    <View style={styles.paddingHorizontalStyle}>
                        <View style={styles.marginTopStyle}>
                            <Text style={styles.mainHeadingStyles}>Upload/ Mail Supporting Docs</Text>
                        </View>
                        <View style={styles.line} />
                        <View style={styles.downloadContainer}>
                            <Text style={styles.downloadHeadingTxt}>Download the Completed Online Forms</Text>
                            <Text style={styles.downloadDescTxt}>
                                “Mutual Fund Designation of Beneficiary -<Text style={styles.highlightedTextTitle}>Traditional</Text>, <Text style={styles.highlightedTextTitle}>Roth</Text>, <Text style={styles.highlightedTextTitle}>SEP</Text> and <Text style={styles.highlightedTextTitle}>Simple</Text> IRAs” form
                            </Text>
                            <GButtonComponent
                                buttonStyle={styles.downloadPdfBtn}
                                buttonText="Download PDFs"
                                textStyle={styles.downloadPdfBtnTxt}
                            />
                        </View>
                        <View style={styles.marginTopStyle}>
                            <Text style={styles.contentTextStyle}>You may also upload the required docs or mail/fax to the address and number mentioned below</Text>
                        </View>
                        <View style={styles.uploadBtnContainer}>
                            <GButtonComponent
                                buttonStyle={styles.selectBtnStyle}
                                buttonText={gblStrings.accManagement.selectFiles}
                                textStyle={styles.selectFileText}
                                onPress={this.uploadImage.bind(this)}
                            />
                            <TouchableOpacity style={styles.uploadIconBtn} onPress={this.uploadSelectedFiles}>
                                <GIcon name="file-upload" type="material" size={30} color="#E9E4E4" />
                                <Text style={styles.uploadTxt}>{gblStrings.common.upload}</Text>
                            </TouchableOpacity>
                        </View>
                        {/* ----------------- Error Msg ------------------------ */}
                        {
                            fileSelected ?
                                (
                                    <View style={styles.selectedFileDescContainer}>
                                        <Text style={styles.fileDescTextStyleError}>
                                            {errorMessage}
                                        </Text>
                                    </View>
                                )
                                : null
                        }

                        {/* ----------------- Showing the data of selected Multiple files ------------------------ */}
                        {multipleFile.map((item) => (
                            <View style={styles.selectedFileDescContainer} key={item.name}>
                                <Text style={styles.fileDescTextStyle}>
                                    {item.name ? item.name : ''}

                                    {/* {'\n'}
                                    Type: {item.type ? item.type : ''}
                                    {'\n'}
                                    File Size: {item.size ? item.size : ''}
                                    {'\n'}
                                    URI: {item.uri ? item.uri : ''}
                                    {'\n'}                            */}
                                </Text>
                                {
                                    <Text style={styles.fileDescTextStyleError}>
                                        {(item.size / 1024 ** 2) < maxFileSize ? '' : 'Size limit of file should be less than 30 MB'}
                                    </Text>
                                }
                            </View>
                        ))}

                        <View style={styles.detailsContainer}>
                            <View style={styles.contentDetailView}>
                                <Text style={styles.detailTxtTitle}>{gblStrings.accManagement.attachLimit}</Text>
                                <Text style={styles.colonTxt}>{gblStrings.accManagement.attachdivider}</Text>
                                <Text style={styles.detailTxtValue}>{gblStrings.accManagement.noOfFiles}</Text>
                            </View>
                            <View style={styles.contentDetailView}>
                                <Text style={styles.detailTxtTitle}>{gblStrings.accManagement.sizeLimitPerFile}</Text>
                                <Text style={styles.colonTxt}>{gblStrings.accManagement.attachdivider}</Text>
                                <Text style={styles.detailTxtValue}>{gblStrings.accManagement.megaBytes}</Text>
                            </View>
                            <View style={styles.contentDetailView}>
                                <Text style={styles.detailTxtTitle}>{gblStrings.accManagement.totalSizeLimit}</Text>
                                <Text style={styles.colonTxt}>{gblStrings.accManagement.attachdivider}</Text>
                                <Text style={styles.detailTxtValue}>{gblStrings.accManagement.megaBytes}</Text>
                            </View>
                            <View style={styles.contentDetailView}>
                                <Text style={styles.detailTxtTitle}>{gblStrings.accManagement.fileTypesAllow}</Text>
                                <Text style={styles.colonTxt}>{gblStrings.accManagement.attachdivider}</Text>
                                <Text style={styles.detailTxtValue}>{gblStrings.accManagement.fileFormat}</Text>
                            </View>
                        </View>
                        <Text style={styles.orTextStyle}> {gblStrings.accManagement.orText}</Text>
                        <View style={styles.marginTop}>
                            <Text style={styles.mailingTitle}>{gblStrings.accManagement.byMailing}</Text>
                            <View style={styles.marginTopStyle}>
                                <Text style={styles.mailingAddName}>{gblStrings.common.victoryCapital}</Text>
                                <Text style={styles.mailingAddress}>{gblStrings.common.victoryCapitalAddress}</Text>
                            </View>
                        </View>
                        <View style={styles.lastMarginTop}>
                            <Text style={styles.orTextStyle}> {gblStrings.accManagement.orText}</Text>
                            <Text style={styles.normalTextTitle}>{gblStrings.accManagement.youCanAlsoFax} <Text style={styles.highlightedTextTitle}>{gblStrings.common.supportVCMFaxNumber}</Text></Text>
                        </View>
                    </View>

                    {/* ----------------- Button Group -------------------- */}

                    <View style={styles.btnGrp}>
                        <GButtonComponent
                            buttonStyle={styles.normalWhiteBtn}
                            buttonText={gblStrings.common.save}
                            textStyle={styles.normalWhiteBtnTxt}
                        />
                        <GButtonComponent
                            buttonStyle={styles.normalWhiteBtn}
                            buttonText={gblStrings.common.cancel}
                            textStyle={styles.normalWhiteBtnTxt}
                        />
                        <GButtonComponent
                            buttonStyle={styles.normalWhiteBtn}
                            buttonText={gblStrings.common.back}
                            textStyle={styles.normalWhiteBtnTxt}
                        />
                        <GButtonComponent
                            buttonStyle={disableNextButton ? styles.normalBlackDisabledBtn : styles.normalBlackBtn}
                            buttonText={gblStrings.common.submit}
                            textStyle={disableNextButton ? styles.normalBlackBtnTxt : styles.normalBlackBtnDisabledTxt}
                            disabled={disableNextButton}
                        />
                    </View>

                    { /* ----------- Disclaimer ------------------- */}

                    <GFooterSettingsComponent />
                </ScrollView>

            </View>

        );
    }
}


PhysicalWayManageBeneficiaryComponent.propTypes = {
    navigation: PropTypes.instanceOf(Object)
};

PhysicalWayManageBeneficiaryComponent.defaultProps = {
    navigation: {}
};

export default PhysicalWayManageBeneficiaryComponent;
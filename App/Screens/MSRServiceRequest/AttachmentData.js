import React from 'react';
import { Text, View, Platform, TouchableOpacity, ScrollView, Image } from 'react-native';
import PropTypes from 'prop-types';
import * as mime from 'react-native-mime-types';
import DocumentPicker from 'react-native-document-picker';
import { GIcon, GButtonComponent, showAlert } from '../../CommonComponents';
import styles from './style';
import gblStrings from '../../Constants/GlobalStrings';

const maxFileLimit = 10;
const maxFileSize = 30;

class AttachmentData extends React.Component {

    constructor(props) {
        super(props);
        // set true to isLoading if data for this screen yet to be received and wanted to show loader.
        this.state = {
            multipleFiles: [],
            showFileError: false,
            erFileMessage: "Please attach any file!"
        };
    }

    uploadSelectedFiles = () => {
        const { multipleFiles } = this.state;
        let totalSize = 0;
        multipleFiles.map((itm) => {
            totalSize += itm.size;
            return itm;
        });
        if (totalSize > maxFileSize) {
            showAlert(gblStrings.common.appName, 'Please select minimal sized files!', gblStrings.common.ok);
        }
    }

    selectMultipleFile = async () => {
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
                    // There can me more options as well find above
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
            // results.map((item) => {
            //     return (
            //         console.warn(`res : ${JSON.stringify(item)}`),
            //         console.warn(`File Size (MB): ${item.size / 1048576.0}`) // bytes to MB
            //     );
            // });
            // Setting the state to show multiple file attributes
            if (results.length > maxFileLimit) {
                this.setState({ showFileError: true, erFileMessage: `You can attach only ${maxFileLimit} file` });
            } else {
                const temparray = results.map((item) => (
                    { ...item, size: Math.floor(((item.size / 1048576.0) * 100) / 100) }
                )
                );
                this.setState({ multipleFiles: temparray, showFileError: false });
            }
        } catch (err) {
            // Handling any exception (If any)
            if (DocumentPicker.isCancel(err)) {
                // If user canceled the document selection
                showAlert(gblStrings.common.appName, 'Canceled from multiple doc picker', gblStrings.common.ok);
            } else {
                // For Unknown Error
                showAlert(gblStrings.common.appName, `Unknown Error: ${JSON.stringify(err)}`, gblStrings.common.ok);
                throw err;
            }
        }
    }

    // requireImageUri = () => { "uri": item.uri }

    render() {
        const { limit, size, formats } = this.props;
        const { multipleFiles, showFileError, erFileMessage } = this.state;

        return (
            <View style={styles.columnContainer}>
                <View style={styles.grayBorderContainer}>
                    <GButtonComponent
                        buttonStyle={styles.selectFilesBtn}
                        buttonText={gblStrings.accManagement.selectFiles}
                        textStyle={styles.selectFilesBtnTxt}
                        onPress={this.selectMultipleFile}
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
                        <Text style={styles.grayBoldText}>Selected files count {multipleFiles.length}</Text>
                    </TouchableOpacity>

                    {showFileError && (
                        <View style={styles.selectedFileDescContainer}>
                            <Text style={styles.fileDesctextStyleError}>
                                {erFileMessage}
                            </Text>
                        </View>
                    )
                    }
                </View>
                <ScrollView>
                    {/* Showing the data of selected Multiple files */}
                    {multipleFiles.map((item) => (
                        <View style={styles.itemContainer} key={item.name}>
                            <Text style={styles.smallGrayText}>
                                {item.name ? item.name : ''}   Size {item.size} MB
                            </Text>
                            <Image style={styles.previewImage}
                                source={{ "uri": item.uri }}
                            // source={this.requireImageUri}
                            />
                        </View>
                    ))}
                </ScrollView>
                {/* Show File Size limit details */}
                <View style={styles.uploadFileContainer}>
                    <Text style={styles.uploadFileTitle}>
                        {gblStrings.accManagement.attachLimit}
                    </Text>
                    <Text style={styles.uploadFileDivider}>
                        {gblStrings.accManagement.attachdivider}
                    </Text>
                    <Text style={styles.uploadFileDesc}>
                        {limit} file
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
                        {size} MB
                    {/* {gblStrings.accManagement.megaBytes} */}
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
                        {formats}
                        {/* {gblStrings.accManagement.fileFormat} */}
                    </Text>
                </View>
            </View>
        );
    }
};
AttachmentData.propTypes = {
    limit: PropTypes.string,
    size: PropTypes.string,
    formats: PropTypes.string

};
AttachmentData.defaultProps = {
    limit: "1",
    size: "30",
    formats: gblStrings.accManagement.fileFormat
};
export default AttachmentData;
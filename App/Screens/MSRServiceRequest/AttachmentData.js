import React from 'react';
import { Text, View, Platform, TouchableOpacity, ScrollView, Image, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import * as mime from 'react-native-mime-types';
import DocumentPicker from 'react-native-document-picker';
import { GIcon, showAlert } from '../../CommonComponents';
import gblStrings from '../../Constants/GlobalStrings';
import { scaledHeight } from '../../Utils/Resolution';

const maxFileLimit = 10;
const maxFileSize = 30;

const style = StyleSheet.create({
    columnContainer: {
        flexDirection: 'column', flexGrow: 1,
        padding: scaledHeight(12),
    },
    grayBorderContainer: {
        alignItems: 'center',
        borderColor: "#DEDEDF",
        borderRadius: scaledHeight(4),
        borderWidth: 1,
        marginHorizontal: 0,
        marginVertical: scaledHeight(10),
        paddingVertical: scaledHeight(10),
        //  height:"20%",
        width: "100%"
    },
    grayText: {
        color: "gray",
        textAlignVertical: 'center'
    },
    itemContainer: { alignItems: 'center', flexDirection: 'row', justifyContent: 'center' },
    previewImage: {
        flex: 0.3,
        height: scaledHeight(70),
        marginHorizontal: scaledHeight(10),
        marginTop: scaledHeight(20),
        width: scaledHeight(70),
    },
    uploadFileContainer: {
        flexDirection: 'row',
        marginTop: scaledHeight(10),
    },
    uploadFileDesc: {
        color: '#707070',
        flex: 0.8,
        fontSize: scaledHeight(12),
    },
    uploadFileDivider: {
        color: '#707070',
        flex: 0.1,
        fontSize: scaledHeight(12),
    },
    uploadFileTitle: {
        color: '#707070',
        flex: 0.5,
        fontSize: scaledHeight(12),
    },
});

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
                        DocumentPicker.types.images,
                        DocumentPicker.types.pdf
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
            <View style={style.columnContainer}>
                <View style={style.grayBorderContainer}>
                    <TouchableOpacity onPress={this.selectMultipleFile}>
                        <Text>{gblStrings.accManagement.selectFiles}</Text>
                    </TouchableOpacity>
                    <GIcon
                        name="file-upload"
                        type="material"
                        size={30}
                        color="#E9E4E4"
                    />
                    <TouchableOpacity onPress={this.uploadSelectedFiles}>
                        <Text style={style.uploadText}>
                            {gblStrings.common.upload}
                        </Text>
                        <Text style={style.grayText}>Selected files count {multipleFiles.length}</Text>
                    </TouchableOpacity>

                    {showFileError && (
                        <View style={style.selectedFileDescContainer}>
                            <Text style={style.fileDesctextStyleError}>
                                {erFileMessage}
                            </Text>
                        </View>
                    )
                    }
                </View>
                <ScrollView>
                    {/* Showing the data of selected Multiple files */}
                    {multipleFiles.map((item) => {
                        // eslint-disable-next-line react-perf/jsx-no-new-object-as-prop
                        const imageConfig = { "uri": item.uri };
                        return (
                            <View style={style.itemContainer} key={item.name}>
                                <Text style={style.smallGrayText}>
                                    {item.name ? item.name : ''}   Size {item.size} MB
                                </Text>
                                <Image style={style.previewImage}
                                    source={imageConfig}
                                // source={this.requireImageUri}
                                />
                            </View>
                        );
                    })}
                </ScrollView>
                {/* Show File Size limit details */}
                <View style={style.uploadFileContainer}>
                    <Text style={style.uploadFileTitle}>
                        {gblStrings.accManagement.attachLimit}
                    </Text>
                    <Text style={style.uploadFileDivider}>
                        {gblStrings.accManagement.attachdivider}
                    </Text>
                    <Text style={style.uploadFileDesc}>
                        {limit} file
                    </Text>
                </View>
                <View style={style.uploadFileContainer}>
                    <Text style={style.uploadFileTitle}>
                        {gblStrings.accManagement.sizeLimitPerFile}
                    </Text>
                    <Text style={style.uploadFileDivider}>
                        {gblStrings.accManagement.attachdivider}
                    </Text>
                    <Text style={style.uploadFileDesc}>
                        {size} MB
                    {/* {gblStrings.accManagement.megaBytes} */}
                    </Text>
                </View>

                <View style={style.uploadFileContainer}>
                    <Text style={style.uploadFileTitle}>
                        {gblStrings.accManagement.totalSizeLimit}
                    </Text>
                    <Text style={style.uploadFileDivider}>
                        {gblStrings.accManagement.attachdivider}
                    </Text>
                    <Text style={style.uploadFileDesc}>
                        {gblStrings.accManagement.megaBytes}
                    </Text>
                </View>

                <View style={style.uploadFileContainer}>
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
    };
}
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
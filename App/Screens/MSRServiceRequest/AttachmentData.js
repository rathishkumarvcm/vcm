import React from 'react';
import { Text, View} from 'react-native';
import PropTypes from 'prop-types';
import styles from './style';
import gblStrings from '../../Constants/GlobalStrings';

const AttachmentData = props => {

    const {
        limit,
        size,
        formats
    } = props;

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
                    {size}MB
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
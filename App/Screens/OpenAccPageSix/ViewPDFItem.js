import React from 'react';
import { Text, View } from 'react-native';
import PropTypes from "prop-types";
import styles from './styles';


const ViewPDFItem = (props) => {
    const { fileName, fileType } = props;
    return (

        <View style={styles.pdfRowContainer}>
            <Text style={styles.pdfFileNameTxt}>
                {fileName}
            </Text>
            <Text style={styles.pdfFileTxt}>
                {` (${fileType})`}
            </Text>
        </View>
    );
};

ViewPDFItem.propTypes = {
    fileName: PropTypes.string,
    fileType: PropTypes.string
};

ViewPDFItem.defaultProps = {
    fileName: "",
    fileType: ""


};

export default ViewPDFItem;

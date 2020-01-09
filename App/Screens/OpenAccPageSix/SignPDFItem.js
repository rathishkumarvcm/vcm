import React from 'react';
import { Text, View } from 'react-native';
import PropTypes from "prop-types";
import styles from './styles';


const SignPDFItem = (props) => {
    const {fileName,fileType ,fileDesc ,isSeparatorShow} = props;

    return (
        <View style={styles.pdfListContainer}>
            <View style={styles.pdfRowContainer}>
                <Text style={styles.pdfFileNameTxt}>
                    {fileName}
                </Text>
                <Text style={styles.pdfFileTxt}>
                    {` (${fileType})`}
                </Text>
            </View>
            <Text style={styles.pdfFileDescTxt}>
                {fileDesc}
            </Text>
            {isSeparatorShow && <Text style={styles.lblLine} />}
        </View>


    );
};


SignPDFItem.propTypes = {
    fileName: PropTypes.string,
    fileType: PropTypes.string,
    fileDesc: PropTypes.string,
    isSeparatorShow: PropTypes.bool


};
SignPDFItem.defaultProps = {
    fileName:"",
    fileType:"",
    fileDesc:"",
    isSeparatorShow:true
   
};

export default SignPDFItem;

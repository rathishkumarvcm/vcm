import React from 'react';
import PropTypes from "prop-types";
import { Text, View } from 'react-native';
import styles from './styles';
import { GButtonComponent } from '../../CommonComponents';

const PDFListItem = (props) => {
    //   alert("PDFListItem")

    const { 
        PDFName, 
        PDFDesc    
    } = props;

    return (
        <View style={styles.pdfSection}>
            <Text style={styles.pdfTitleTxt}>
                {PDFName}
            </Text>
            {PDFDesc !== "" ? <Text style={styles.pdfDescTxt}>{PDFDesc}</Text> : null}
            <GButtonComponent
                buttonStyle={styles.downloadPDFBtn}
                buttonText="Download PDF"
                textStyle={styles.downloadPDFBtnTxt}
            />
        </View>
    );
};

PDFListItem.propTypes = {
    PDFName: PropTypes.string,
    PDFDesc: PropTypes.string
};
PDFListItem.defaultProps = {
    PDFName : "",
    PDFDesc : ""
};

export default PDFListItem;
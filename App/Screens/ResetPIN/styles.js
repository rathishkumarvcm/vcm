import { StyleSheet } from "react-native";
import { scaledHeight } from '../../Utils/Resolution';


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F7FAFF',
        width: '100%'
    },
    mainFlex:{
        flex: 0.85
    },
    resetYourPINText: {
        marginLeft: "4%",
        marginRight: "4%",
        fontWeight: 'bold',
        color: '#535353',
        fontSize: scaledHeight(20),
        marginTop: '4%'
    },
    line: {
        backgroundColor: '#535353',
        opacity: 0.25,
        height: scaledHeight(1),
        width: "92%",
        marginTop: '4%',
        marginLeft: "4%",
        marginRight: '4%',
    },
    fullLine: {
        backgroundColor: '#7B8288',
        opacity: 0.4,
        height: scaledHeight(1),
        marginTop: scaledHeight(45),
    },
    enterPINFlex: {
        marginTop: scaledHeight(34),
        paddingLeft: '4%',
        paddingRight: '4%',
    },
    enterNewPINFlex: {
        flexDirection: 'row',
        marginTop: scaledHeight(34),
        paddingLeft: '4%',
        paddingRight: '4%',
        justifyContent: 'space-between'
    },
    enterPINText: {
        color: '#333333DE',
        fontSize: scaledHeight(16),
        fontWeight: 'bold',
        marginBottom: scaledHeight(8)
    },
    pinTextBox: {
        marginLeft: "4%",
        marginBottom: scaledHeight(18),
        color: '#56565A'
    },
    pinTextBoxError: {
        marginLeft: "4%",
        marginBottom: scaledHeight(5),
        color: 'red',
        borderColor: 'red'
    },
    errorMsg: {
        fontSize: scaledHeight(12),
        marginLeft: "4%",
        color: 'red',
        textAlignVertical: "top",
    },
    buttonsFlex: {
        flexDirection: 'column',
        marginTop: scaledHeight(20),
        marginLeft: "10%",
        marginRight: "10%",
        width: "80%",
    },
    backButtonFlex: {
        // width: scaledHeight(294),
        height: scaledHeight(50),
        borderColor: '#61285F45',
        borderWidth: scaledHeight(1),
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: scaledHeight(16)
    },
    backButtonText: {
        color: '#544A54',
        fontWeight: 'bold',
        fontSize: scaledHeight(16),
    },
    submitFlex: {
        backgroundColor: '#544A54',
        height: scaledHeight(50),
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: scaledHeight(16)
    },
    submitFlexDisabled:{
        backgroundColor: '#544A54',
        opacity:0.5,
        height: scaledHeight(50),
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: scaledHeight(16)
    },
    submitText: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: scaledHeight(16),
    },

    tNCFlex: {
        marginLeft: "4%",
        marginTop: "4%",
        width: "92%",
    },
    tNcHeader: {
        color: '#56565A',
        fontSize: scaledHeight(16),
        fontWeight: 'bold'
    },
    tNcBody: {
        color: '#56565A',
        fontSize: scaledHeight(16),
    },


});
import { StyleSheet } from "react-native";
import { scaledHeight } from '../../Utils/Resolution';


 const styles = StyleSheet.create({
    backButtonFlex: {
        alignItems: 'center',
        backgroundColor:'#FFFFFF',
        borderColor: '#61285F45',
        borderWidth: scaledHeight(1),
        height: scaledHeight(50),
        justifyContent: 'center',
    },
    backButtonText: {
        color: '#544A54',
        fontSize: scaledHeight(16),
        fontWeight: 'bold',
    },
    container: {
        backgroundColor: '#F7FAFF',
        flex: 1,
        width: '100%'
    },
    enterNewPINFlex: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: scaledHeight(34),
        paddingLeft: '4%',
        paddingRight: '4%'
    },
    enterPINFlex: {
        marginTop: scaledHeight(34),
        paddingLeft: '4%',
        paddingRight: '4%',
    },
    enterPINText: {
        color: '#333333DE',
        fontSize: scaledHeight(16),
        fontWeight: 'bold',
        marginBottom: scaledHeight(8)
    },
    flex6:{
        flexDirection: 'column',
        height:scaledHeight(118),
        marginLeft: "10%",
        marginRight: "10%",
        marginTop:"10%",
    },
    fullLine: {
        backgroundColor: '#7B8288',
        height: scaledHeight(1),
        marginTop: scaledHeight(40),
        opacity: 0.4,
    },
    line: {
        backgroundColor: '#535353',
        height: scaledHeight(1),
        marginLeft: "4%",
        marginRight: '4%',
        marginTop: '4%',
        opacity: 0.25,
        width: "92%",
    },
    mainFlex:{
        flex: 0.85
    },
    pinTextBox: {
        color: '#56565A',
        marginBottom: scaledHeight(18),
        marginLeft: "4%"
    },
    pinTextBoxError: {
        borderColor: 'red',
        color: 'red',
        marginBottom: scaledHeight(5),
        marginLeft: "4%",
    },
    resetYourPINText: {
        color: '#535353',
        fontSize: scaledHeight(20),
        fontWeight: 'bold',
        marginLeft: "4%",
        marginRight: "4%",
        marginTop: '4%'
    },
    submitFlex: {
        alignItems: 'center',
        backgroundColor:'#544A54',
        borderColor: '#61285F45',
        borderWidth: scaledHeight(1),
        height: scaledHeight(50),
        justifyContent: 'center',
        marginTop:scaledHeight(18)
    },
    submitFlexDisabled: {
        alignItems: 'center',
        backgroundColor:'#544A54',
        borderColor: '#61285F45',
        borderWidth: scaledHeight(1),
        height: scaledHeight(50),
        justifyContent: 'center',
        marginTop:scaledHeight(18),
        opacity:0.4
    },
    submitText: {
        color: '#FFFFFF',
        fontSize: scaledHeight(16),
        fontWeight: 'bold',
    },
    tNCFlex: {
        marginLeft: "4%",
        marginTop: scaledHeight(41),
        width: "92%",
    },
    tNcBody: {
        color: '#56565A',
        fontSize: scaledHeight(16),
    },
    tNcHeader: {
        color: '#56565A',
        fontSize: scaledHeight(16),
        fontWeight: 'bold'
    },
});

export default styles;
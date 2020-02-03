import { StyleSheet } from "react-native";
import { scaledHeight, scaledWidth } from '../../Utils/Resolution';


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
    default:{
        backgroundColor:'#544A54',
        height: scaledHeight(3),
    },
    enterNewPasswordFlex: {
        flexDirection: 'row',
        marginTop: scaledHeight(34),
        paddingLeft: '4%',
        paddingRight: '4%',
    },
    enterPasswordFlex: {
        marginTop: scaledHeight(34),
        paddingLeft: '4%',
        paddingRight: '4%',
    },
    enterPasswordText: {
        color: '#333333DE',
        fontSize: scaledHeight(16),
        fontWeight: 'bold',
        marginBottom: scaledHeight(8)
    },
    explainStyle: {
        color: '#333333DE',
        fontSize: scaledHeight(16),
        fontWeight: 'bold',
        marginLeft:"3%",
        textDecorationLine: 'underline'
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
    good: {
        backgroundColor: 'orange',
        height: scaledHeight(3),
    },
    line: {
        backgroundColor: '#535353',
        height: scaledHeight(1),
        marginLeft: "4%",
        marginRight: "4%",
        marginTop: '4%',
        opacity: 0.25,
        width: "92%"
    },
    mainFlex:{
        flex: 0.85
    },
    passwordStrengthFlex: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    passwordStrongFlex: {
        flexDirection: 'column',
        flex: 0.3,
        marginRight: scaledWidth(5)
    },
    passwordTextBox: {
        color: '#56565A',
        marginBottom: scaledHeight(18),
        marginLeft: "4%"
    },
    passwordTextBoxError: {
        borderColor: 'red',
        color: 'red',
        marginBottom: scaledHeight(5),
        marginLeft: "4%"
    },
    resetYourPasswordText: {
        color: '#535353',
        fontSize: scaledHeight(20),
        fontWeight: 'bold',
        marginLeft: "4%",
        marginTop: '4%'
    },
    strong: {
        backgroundColor: 'green',
        height: scaledHeight(3),
    },
    strongText: {
        color: '#56565A',
        fontSize: scaledHeight(12),
        marginTop: scaledHeight(3)
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
    weak: {
        backgroundColor: 'red',
        height: scaledHeight(3),
    },
});

export default styles;
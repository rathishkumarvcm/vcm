import { StyleSheet } from "react-native";
import { scaledHeight, scaledWidth } from '../../Utils/Resolution';


 const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F7FAFF',
        width: '100%'
    },
    mainFlex:{
        flex: 0.85
    },
    resetYourPasswordText: {
        marginLeft: "4%",
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
        marginRight: "4%"
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
    passwordTextBox: {
        marginLeft: "4%",
        marginBottom: scaledHeight(18),
        color: '#56565A'
    },
    passwordTextBoxError: {
        marginLeft: "4%",
        marginBottom: scaledHeight(5),
        borderColor: 'red',
        color: 'red'
    },
    enterNewPasswordFlex: {
        flexDirection: 'row',
        marginTop: scaledHeight(34),
        paddingLeft: '4%',
        paddingRight: '4%',
    },
    explainStyle: {
        color: '#333333DE',
        fontSize: scaledHeight(16),
        fontWeight: 'bold',
        textDecorationLine: 'underline',
        marginLeft:"3%"
    },
    passwordStrengthFlex: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    passwordStrongFlex: {
        flexDirection: 'column',
        flex: 0.3,
        marginRight: scaledWidth(5)
    },
    default:{
        backgroundColor:'#544A54',
        height: scaledHeight(3),
    },
    strong: {
        backgroundColor: 'green',
        height: scaledHeight(3),
    },
    strongText: {
        fontSize: scaledHeight(12),
        color: '#56565A',
        marginTop: scaledHeight(3)
    },
    good: {
        backgroundColor: 'orange',
        height: scaledHeight(3),
    },
    weak: {
        backgroundColor: 'red',
        height: scaledHeight(3),
    },
    flex6:{
        height:scaledHeight(118),
        flexDirection: 'column',
        marginLeft: "10%",
        marginRight: "10%",
        marginTop:"10%",
    },
    backButtonFlex: {
        height: scaledHeight(50),
        borderColor: '#61285F45',
        borderWidth: scaledHeight(1),
        backgroundColor:'#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center',
    },
    backButtonText: {
        color: '#544A54',
        fontWeight: 'bold',
        fontSize: scaledHeight(16),
    },
    submitFlex: {
        height: scaledHeight(50),
        borderColor: '#61285F45',
        borderWidth: scaledHeight(1),
        backgroundColor:'#544A54',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:scaledHeight(18)
    },
    submitFlexDisabled: {
        height: scaledHeight(50),
        borderColor: '#61285F45',
        borderWidth: scaledHeight(1),
        backgroundColor:'#544A54',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:scaledHeight(18),
        opacity:0.4
    },
    submitText: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: scaledHeight(16),
    },
    fullLine: {
        backgroundColor: '#7B8288',
        opacity: 0.4,
        height: scaledHeight(1),
        marginTop: scaledHeight(40),
    },
    tNCFlex: {
        marginLeft: "4%",
        marginTop: scaledHeight(41),
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

export default styles;
import { StyleSheet } from "react-native";
import { scaledHeight } from '../../Utils/Resolution';

const styles = StyleSheet.create({
    accRecPrefText: {
        color: '#535353',
        fontSize: scaledHeight(20),
        fontWeight: 'bold',
        marginLeft: "4%",
        marginRight: "4%",
        marginTop: '4%'
        // fontFamily:'Roboto'
    },
    accRecoveryOptionsFlex: {
        flexDirection: 'row',
        height: scaledHeight(80),
        marginLeft: "4%",
        marginRight: "4%",
        marginTop: scaledHeight(30),
        width: "92%",
    },
    backButtonFlex: {
        alignItems: 'center',
        borderColor: '#61285F45',
        borderWidth: scaledHeight(1),
        height: scaledHeight(50),
        justifyContent: 'center',
        marginTop: scaledHeight(16)
    },
    backButtonText: {
        color: '#544A54',
        fontSize: scaledHeight(16),
        fontWeight: 'bold',
    },
    buttonsFlex: {
        flexDirection: 'column',
        marginLeft: "10%",
        marginRight: "10%",
        marginTop: scaledHeight(20),
        width: "80%"
    },
    checkBoxFlex: {
        alignSelf: 'flex-start',
        marginTop: 6,
        width: "15%"
    },
    chooseAccRecPref: {
        color: '#535353',
        fontSize: scaledHeight(16),
        fontWeight: 'bold',
        marginLeft: "4%",
        marginRight: "4%",
        marginTop: '4%',
        width: "92%"
        // fontFamily:'Roboto'
    },
    container: {
        backgroundColor: '#F7FAFF',
        flex: 1,
        width: '100%'
    },
    emailIdOption: {
        justifyContent: 'space-around',
        width: "77%"
    },
    emailIdText: {
        color: '#333333DE',
        fontSize: scaledHeight(16),
        textAlignVertical: 'center',
    },
    fullLine: {
        backgroundColor: '#7B8288',
        height: scaledHeight(1),
        marginTop: scaledHeight(45),
        opacity: 0.4,
    },
    greyText: {
        color: '#333333DE',
        fontSize: scaledHeight(14),
        opacity: 0.75,
        textAlignVertical: "center",
    },
    lastUpdateText: {
        color: '#333333DE',
        fontSize: scaledHeight(14),
        marginLeft: "4%",
        marginTop: '4%',
        opacity: 0.75,
        textAlignVertical: "center",
    },
    line: {
        backgroundColor: '#535353',
        height: scaledHeight(1),
        marginLeft: "4%",
        marginRight: "4%",
        marginTop: '4%',
        opacity: 0.25,
        width: "92%",
    },
    mainFlex:{ 
        flex: 0.85 
    },
    messageFlex:{
        backgroundColor: '#EEEEEE', 
        borderColor: '#A4A4A4DD', 
        borderRadius: scaledHeight(3), 
        borderWidth: scaledHeight(1),
         marginLeft: "4%", 
         marginRight: "4%", 
         paddingLeft: "2%", 
         width: "92%" 
    },
    messageText:{
        color: '#333333DE', 
        fontSize: scaledHeight(14), 
        padding: "3%",
        textAlignVertical: "center"
    },
    saveFlex: {
        alignItems: 'center',
        backgroundColor: '#544A54',
        height: scaledHeight(50),
        justifyContent: 'center',
        marginTop: scaledHeight(16)
    },
    saveText: {
        color: '#FFFFFF',
        fontSize: scaledHeight(16),
        fontWeight: 'bold',
    },

    tNCFlex: {
        marginLeft: "4%",
        marginTop: "4%",
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
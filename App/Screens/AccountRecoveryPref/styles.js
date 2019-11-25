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
    messageFlex:{
        backgroundColor: '#EEEEEE', 
        borderColor: '#A4A4A4DD', 
        borderWidth: scaledHeight(1), 
        borderRadius: scaledHeight(3),
         width: "92%", 
         marginLeft: "4%", 
         marginRight: "4%", 
         paddingLeft: "2%" 
    },
    messageText:{
        padding: "3%", 
        color: '#333333DE', 
        fontSize: scaledHeight(14),
        textAlignVertical: "center"
    },
    accRecPrefText: {
        marginLeft: "4%",
        marginRight: "4%",
        fontWeight: 'bold',
        color: '#535353',
        fontSize: scaledHeight(20),
        marginTop: '4%'
        //fontFamily:'Roboto'
    },
    chooseAccRecPref: {
        marginLeft: "4%",
        marginRight: "4%",
        width: "92%",
        fontWeight: 'bold',
        color: '#535353',
        fontSize: scaledHeight(16),
        marginTop: '4%'
        //fontFamily:'Roboto'
    },
    line: {
        backgroundColor: '#535353',
        opacity: 0.25,
        height: scaledHeight(1),
        width: "92%",
        marginTop: '4%',
        marginLeft: "4%",
        marginRight: "4%",
    },
    lastUpdateText: {
        color: '#333333DE',
        opacity: 0.75,
        fontSize: scaledHeight(14),
        textAlignVertical: "center",
        marginLeft: "4%",
        marginTop: '4%',
    },
    accRecoveryOptionsFlex: {
        height: scaledHeight(80),
        width: "92%",
        marginLeft: "4%",
        marginRight: "4%",
        marginTop: scaledHeight(30),
        flexDirection: 'row',
    },
    checkBoxFlex: {
        alignSelf: 'flex-start',
        marginTop: 6,
        width: "15%"
    },
    emailIdOption: {
        width: "77%",
        justifyContent: 'space-around'
    },
    emailIdText: {
        color: '#333333DE',
        fontSize: scaledHeight(16),
        textAlignVertical: 'center',
    },
    greyText: {
        color: '#333333DE',
        opacity: 0.75,
        fontSize: scaledHeight(14),
        textAlignVertical: "center",
    },
    fullLine: {
        backgroundColor: '#7B8288',
        opacity: 0.4,
        height: scaledHeight(1),
        marginTop: scaledHeight(45),
    },
    buttonsFlex: {
        flexDirection: 'column',
        marginTop: scaledHeight(20),
        marginLeft: "10%",
        marginRight: "10%",
        width: "80%"
    },
    backButtonFlex: {
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
    saveFlex: {
        backgroundColor: '#544A54',
        height: scaledHeight(50),
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: scaledHeight(16)
    },
    saveText: {
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
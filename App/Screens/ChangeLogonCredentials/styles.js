import { StyleSheet } from "react-native";
import { scaledHeight } from '../../Utils/Resolution';


export const styles = StyleSheet.create({
    backButtonFlex: {
        alignItems: 'center',
        borderColor: '#61285F45',
        borderWidth: scaledHeight(1),
        height: scaledHeight(50),
        justifyContent: 'center',
        marginLeft: "10%",
        marginRight: "10%",
        marginTop: scaledHeight(36),
        width: "80%"
    },
    backButtonText: {
        color: '#544A54',
        fontSize: scaledHeight(16),
        fontWeight: 'bold',
    },
    changeLogonCredentialsText: {
        color: '#535353',
        fontSize: scaledHeight(20),
        fontWeight: 'bold',
        marginLeft: "4%",
        marginTop: '4%'
    },
    container: {
        backgroundColor: '#F7FAFF',
        flex: 1,
        width: '100%'
    },
    fullLine: {
        backgroundColor: '#7B8288',
        height: scaledHeight(1),
        marginTop: scaledHeight(45),
        opacity: 0.4,
    },
    horizontalFlex:{
        flexDirection: 'row'
    },
    line: {
        backgroundColor: '#535353',
        height: scaledHeight(1),
        marginLeft: '4%',
        marginRight: '4%',
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
    resetPasswordFlex: {
        // backgroundColor: '#EEEEEE',
        borderColor: '#A4A4A4DD',
        borderWidth: scaledHeight(1),
        height: scaledHeight(120),
        width: "92%",
        marginLeft: "4%",
        marginRight: "4%",
        marginTop: scaledHeight(30),
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    resetPasswordFlex1: {
        justifyContent: 'space-around',
        marginLeft: "2%"
    },

    resetpasswordText: {
        alignSelf:'center',
        color: '#333333DE',
        fontSize: scaledHeight(16),
        textAlignVertical: 'center'
    },
    selectBelowoptionsText: {
        color: '#535353',
        fontSize: scaledHeight(16),
        fontWeight: 'bold',
        marginLeft: scaledHeight(17),
        marginTop: '4%'
    },
    selectToChangeUrPswd: {
        color: '#333333DE',
        fontSize: scaledHeight(14),
        marginLeft:"2.5%",
        opacity: 0.75,
        textAlignVertical: "center"
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
        fontWeight: 'bold',
    },


});
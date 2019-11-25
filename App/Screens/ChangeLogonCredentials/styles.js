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
    horizontalFlex:{
        flexDirection: 'row'
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
    changeLogonCredentialsText: {
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
        marginLeft: '4%',
        marginRight: '4%',
    },
    selectBelowoptionsText: {
        marginLeft: scaledHeight(17),
        fontWeight: 'bold',
        color: '#535353',
        fontSize: scaledHeight(16),
        marginTop: '4%'
    },
    resetPasswordFlex: {
        //backgroundColor: '#EEEEEE',
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
        marginLeft: "2%",
        justifyContent: 'space-around'
    },
    resetpasswordText: {
        color: '#333333DE',
        fontSize: scaledHeight(16),
        textAlignVertical: 'center',
        alignSelf:'center'
    },
    selectToChangeUrPswd: {
        color: '#333333DE',
        opacity: 0.75,
        fontSize: scaledHeight(14),
        textAlignVertical: "center",
        marginLeft:"2.5%"
    },

    backButtonFlex: {
        marginLeft: "10%",
        marginRight: "10%",
        width: "80%",
        height: scaledHeight(50),
        borderColor: '#61285F45',
        borderWidth: scaledHeight(1),
        marginTop: scaledHeight(36),
        justifyContent: 'center',
        alignItems: 'center'
    },
    backButtonText: {
        color: '#544A54',
        fontSize: scaledHeight(16),
        fontWeight: 'bold',
    },
    fullLine: {
        backgroundColor: '#7B8288',
        opacity: 0.4,
        height: scaledHeight(1),
        marginTop: scaledHeight(45),
    },

    tNCFlex: {
        marginLeft: "4%",
        marginTop: "4%",
        width: "92%",
    },
    tNcHeader: {
        color: '#56565A',
        fontWeight: 'bold',
        fontSize: scaledHeight(16),
    },
    tNcBody: {
        color: '#56565A',
        fontSize: scaledHeight(16),
    },


});
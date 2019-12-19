import { StyleSheet } from "react-native";
import { scaledHeight} from '../../Utils/Resolution';

export const styles = StyleSheet.create({
    callPreferenceContainer: {
        borderColor: '#B7B7B7',
        borderWidth: 0.8,
        marginLeft: '4%',
        marginRight: '4%',
        marginTop: scaledHeight(30),
        paddingBottom: scaledHeight(25),
        paddingLeft: '4%',
        paddingRight: '4%',
    },
    callPreferenceTitle: {
        color: '#56565A',
        fontSize: scaledHeight(20),
        fontWeight: 'bold',
        marginTop: scaledHeight(15),
    },
    callPreferenceTitleDesc: {
        color: '#707070',
        fontSize: scaledHeight(16),
        fontWeight: 'bold',
        lineHeight: scaledHeight(25),
        marginTop: scaledHeight(10)
    },
    callPreferenceTitleDescOpt: {
        color: '#707070',
        fontSize: scaledHeight(16),
        fontWeight: 'normal',
        lineHeight: scaledHeight(25),
        marginTop: scaledHeight(10)
    },
    cancelButton: {
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        borderColor: '#7B8288',
        borderWidth: 1,
        height: scaledHeight(55),
        justifyContent: 'center',
        marginLeft: '10%',
        marginRight: '10%',
        marginTop: scaledHeight(42),
        width: '80%',
    },
    cancelButtonText: {
        color: '#544A54',
        fontSize: scaledHeight(16),
        fontWeight: 'bold'
    },
    container: {
        backgroundColor: '#F7FAFF',
        flex: 1,
        width: '100%'
    },
    emailEditText: {
        color: '#0000FF',
        fontSize: scaledHeight(20),
        marginTop: scaledHeight(3),
        textDecorationLine: 'underline',
    },
    emailPreferenceContainer: {
        backgroundColor: '#FFFFFF',
        marginTop: scaledHeight(5),
        width: '100%',
    },
    emailPreferenceDescTitle: {
        color: '#707070',
        fontSize: scaledHeight(18),
        marginLeft: '6%',
        marginRight: '6%',
        marginTop: scaledHeight(8)
    },
    emailPreferenceUrgentContainer: {
        alignContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        marginLeft: '2%',
        marginTop: scaledHeight(15)
    },
    emailPreferenceUrgentText: {
        color: '#56565A',
        fontSize: scaledHeight(24),
        fontWeight: 'bold',
        marginLeft: '2%',
        width: '64%',
    },
    emailText: {
        color: '#56565A',
        fontSize: scaledHeight(20),
        fontWeight: 'bold',
        marginLeft: '2%',
        marginTop: scaledHeight(3),
        width: '75%'
    },
    explainPushNotification: {
        color: '#707070',
        fontSize: scaledHeight(18),
        marginLeft: '4%',
        marginTop: scaledHeight(8),
    },
    explainTextMessage: {
        color: '#707070',
        fontSize: scaledHeight(16),
        marginLeft: '15%',
        marginTop: scaledHeight(10)
    },
    getNotifiedContainer: {
        marginLeft: '4%',
        marginRight: '4%',
        marginTop: scaledHeight(20)
    },
    getNotifiedText: {
        color: '#56565A',
        fontSize: scaledHeight(20),
        fontWeight: 'bold',
        marginBottom: scaledHeight(20),
        marginTop: scaledHeight(7)
    },
    lineBorder: {
        borderColor: '#DEDEDF',
        borderTopWidth: 1,
        marginBottom: scaledHeight(20),
        marginTop: scaledHeight(40),
    },
    loginHeader: {
        flex: .15,
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
        paddingLeft: '4%',
        paddingRight: '4%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    modalBackgroundView: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        height: '100%',
    },
    modalCloseIcon: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginTop: scaledHeight(60),
    },
    modalCodeSentSuccess: {
        color: '#59B477',
        fontSize: scaledHeight(16),
        marginTop: scaledHeight(10),
    },
    modalContainer: {
        backgroundColor: '#FFFFFF',
        marginLeft: scaledHeight(20),
        marginRight: scaledHeight(20),
        paddingBottom: scaledHeight(15),
        paddingLeft: '4%',
        paddingRight: '4%',
        paddingTop: scaledHeight(15),
    },
    modalDidntReceiveContainer: {
        alignItems: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    modalDidntReceiveText: {
        color: '#707070',
        fontSize: scaledHeight(16),
        lineHeight: 20,
        marginTop: scaledHeight(30),
    },
    modalEnterCode: {
        color: '#DE4F4F',
        fontSize: scaledHeight(16),
        marginTop: scaledHeight(20),
    },
    modalEnterCodeInput: {       
        fontSize: scaledHeight(16),
        width:'100%',        
    },
    modalRegisterCodeText: {
        color: '#544A54',
        fontSize: scaledHeight(16),
        fontWeight: 'bold',
        marginBottom: scaledHeight(10),
        marginTop: scaledHeight(20)
    },
    modalRegisterText: {
        color: '#56565A',
        fontSize: scaledHeight(16),
        lineHeight: 25,
    },
    modalSaveButton: {
        alignItems: 'center',
        backgroundColor: '#56565A',
        borderColor: '#56565A',
        borderWidth: 1,
        height: scaledHeight(55),
        justifyContent: 'center',
        marginBottom: scaledHeight(10),
        marginLeft: '5%',
        marginRight: '5%',
        marginTop: scaledHeight(20),
        width: '90%',
    },
    modalSaveButtonDim: {
        alignItems: 'center',
        backgroundColor: '#B7B7B7',
        borderColor: '#B7B7B7',
        borderWidth: 1,
        height: scaledHeight(55),
        justifyContent: 'center',
        marginBottom: scaledHeight(10),
        marginLeft: '5%',
        marginRight: '5%',
        marginTop: scaledHeight(20),
        width: '90%',
    },
    modalTitleText: {
        color: '#707070',
        fontSize: scaledHeight(22),
        fontWeight: 'bold',
        lineHeight: 30,
        width: '80%',
    },
    modalcancelButton: {
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        borderColor: '#DEDEDF',
        borderWidth: 1,
        height: scaledHeight(55),
        justifyContent: 'center',
        marginLeft: '5%',
        marginRight: '5%',
        marginTop: scaledHeight(20),
        width: '90%',
    },
    modallineBorder: {
        borderColor: 'grey',
        borderTopWidth: 1,
        marginBottom: scaledHeight(20),
        marginTop: scaledHeight(20),
    },
    modalresendCodeText: {
        color: '#0000FF',
        fontSize: scaledHeight(16),
        marginTop: scaledHeight(3),
        textDecorationLine: 'underline',
    },
    preferenceSectionGrp: {
        flexGrow: 1,
        marginLeft: '2%',
        marginTop: scaledHeight(20),
    },
    preferenceSectionTxt: {
        color: '#228AE5',
        fontSize: scaledHeight(14),
        fontWeight: 'bold',
        marginLeft: '4%',
        textAlign: 'left',
    },
    priorityTextContent: {
        color: '#707070',
        fontSize: scaledHeight(16),
        marginLeft: '4%',
        marginRight: '4%',
        marginTop: scaledHeight(20)
    },
    priorityTextContentBold: {
        color: '#404040',
        fontSize: scaledHeight(20),
        fontWeight: 'bold',
        marginLeft: '4%',
        marginRight: '4%',
        marginTop: scaledHeight(20),
        textDecorationLine: 'underline'
    },
    priorityTextContentDataRate: {
        color: '#707070',
        fontSize: scaledHeight(20),
        fontWeight: 'bold',
        marginLeft: '4%',
        marginRight: '4%',
        marginTop: scaledHeight(20),
    },
    priorityTextContentDataRateColor: {
        color: '#404040',
        fontSize: scaledHeight(20),
        fontWeight: 'bold',
        marginLeft: '4%',
        marginRight: '4%',
        marginTop: scaledHeight(20),
    },
    priorityTextContentUnderline: {
        color: '#228AE5',
        fontSize: scaledHeight(16),
        marginLeft: '4%',
        marginRight: '4%',
        marginTop: scaledHeight(20),
        textDecorationLine: 'underline'
    },
    pushNotificationContainer: {
        flexDirection: 'row',
        marginLeft: '2%',
        marginTop: scaledHeight(35),
    },
    pushNotificationDeviceContainer: {
        flexDirection: 'row',
        marginLeft: '2%',
        marginTop: scaledHeight(15),
    },
    pushNotificationDeviceText: {
        color: '#707070',
        fontSize: scaledHeight(20),
        fontWeight: 'bold',
        marginLeft: '2%',
        marginTop: scaledHeight(3),
        width: '86%'
    },
    quietTimeContainer: {
        alignContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        marginLeft: '4%',
        marginTop: scaledHeight(10)
    },
    quietTimeText: {
        color: '#56565A',
        fontSize: scaledHeight(20),
        fontWeight: 'bold',
        marginLeft: '2%',
    },
    quietTimeTextDelay: {
        color: '#707070',
        fontSize: scaledHeight(16),
        marginLeft: '16%',
        marginRight: '10%',
    },
    readMoreText: {
        color: '#228AE5',
        fontSize: scaledHeight(14),
        textDecorationLine: 'underline',
    },
    registerNumberContainer: {
        flexDirection: 'row',
        marginLeft: '14%',
        marginTop: scaledHeight(10),
    },
    registerNumberText: {
        color: '#0000FF',
        fontSize: scaledHeight(16),
        textDecorationLine: 'underline'
    },
    saveButton: {
        alignItems: 'center',
        backgroundColor: '#56565A',
        borderColor: '#56565A',
        borderWidth: 1,
        height: scaledHeight(55),
        justifyContent: 'center',
        marginLeft: '10%',
        marginRight: '10%',
        marginTop: scaledHeight(30),
        width: '80%',
    },
    saveButtonText: {
        color: '#FFFFFF',
        fontSize: scaledHeight(16),
        fontWeight: 'bold'
    },
    scrollViewFlex:{
        flex: 0.85 
    },
    settingsInfo: {
        color: '#B2B2B2',
        fontSize: scaledHeight(14),
        marginRight: '4%',
    },
    settingsInfoCurrent: {
        color: '#707070',
        fontSize: scaledHeight(14),
        fontWeight: 'bold',
    },
    settingsInfoHead: {
        marginTop: scaledHeight(18),
        paddingLeft: '4%',
        paddingRight: '4%',
        width: '100%',
    },
    settingsInfoHeadTilte: {
        color: '#56565A',
        fontSize: scaledHeight(20),
        fontWeight: 'bold',
        paddingBottom: scaledHeight(4)
    },
    settingsSocial: {
        flexDirection: 'row',
        marginLeft: '2%',
        marginTop: scaledHeight(15),
    },
    settingsView: {
        flexDirection: 'row',
        marginTop: scaledHeight(18),
        paddingLeft: '4%',
        paddingRight: '4%',
        width: '100%',
    },
    switchContainer: {
        marginLeft: '2%',
        marginTop: scaledHeight(6)
    },
    textMessageContainer: {
        flexDirection: 'row',
        marginLeft: '2%',
        marginTop: scaledHeight(35),
    },
    touchOpacity: {
        width: '10%'
    },
    userEmailText: {
        color: '#707070',
        fontSize: scaledHeight(20),
        fontWeight: 'bold'
    },
    userEmailTextContainer: {
        marginLeft: '4%',
        marginRight: '4%',
        marginTop: scaledHeight(10)
    },
    userRegisterNumberText: {
        color: '#707070',
        fontSize: scaledHeight(16),
        fontWeight: 'bold',
        marginLeft: '15%',
        marginTop: scaledHeight(10)
    }
});
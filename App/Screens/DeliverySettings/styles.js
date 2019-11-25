import { StyleSheet } from "react-native";
import { scaledHeight} from '../../Utils/Resolution';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F7FAFF',
        width: '100%'
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
    settingsView: {
        flexDirection: 'row',
        width: '100%',
        marginTop: scaledHeight(18),
        paddingLeft: '4%',
        paddingRight: '4%',
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
        width: '100%',
        marginTop: scaledHeight(18),
        paddingLeft: '4%',
        paddingRight: '4%',
    },
    settingsInfoHeadTilte: {
        color: '#56565A',
        fontSize: scaledHeight(20),
        fontWeight: 'bold',
        paddingBottom: scaledHeight(4)
    },
    getNotifiedContainer: {
        marginTop: scaledHeight(20),
        marginLeft: '4%',
        marginRight: '4%'
    },
    getNotifiedText: {
        marginTop: scaledHeight(7),
        marginBottom: scaledHeight(20),
        color: '#56565A',
        fontSize: scaledHeight(20),
        fontWeight: 'bold'
    },
    touchOpacity: {
        width: '10%'
    },
    emailText: {
        width: '75%',
        color: '#56565A',
        fontSize: scaledHeight(20),
        marginTop: scaledHeight(3),
        marginLeft: '2%',
        fontWeight: 'bold'
    },
    emailEditText: {
        color: '#0000FF',
        fontSize: scaledHeight(20),
        marginTop: scaledHeight(3),
        textDecorationLine: 'underline',
    },
    userEmailTextContainer: {
        marginLeft: '4%',
        marginRight: '4%',
        marginTop: scaledHeight(10)
    },
    userEmailText: {
        color: '#707070',
        fontSize: scaledHeight(20),
        fontWeight: 'bold'
    },
    emailPreferenceContainer: {
        width: '100%',
        marginTop: scaledHeight(5),
        backgroundColor: '#FFFFFF',
    },
    emailPreferenceUrgentContainer: {
        flexDirection: 'row',
        marginLeft: '2%',
        marginTop: scaledHeight(15),
        alignContent: 'center',
        alignItems: 'center'
    },
    emailPreferenceUrgentText: {
        width: '64%',
        marginLeft: '2%',
        color: '#56565A',
        fontSize: scaledHeight(24),
        fontWeight: 'bold',
    },
    readMoreText: {
        color: '#228AE5',
        fontSize: scaledHeight(14),
        textDecorationLine: 'underline',
    },
    emailPreferenceDescTitle: {
        color: '#707070',
        fontSize: scaledHeight(18),
        marginLeft: '6%',
        marginRight: '6%',
        marginTop: scaledHeight(8)
    },
    settingsSocial: {
        flexDirection: 'row',
        marginLeft: '2%',
        marginTop: scaledHeight(15),
    },
    textMessageContainer: {
        flexDirection: 'row',
        marginLeft: '2%',
        marginTop: scaledHeight(35),
    },
    switchContainer: {
        marginLeft: '2%',
        marginTop: scaledHeight(6)
    },
    pushNotificationContainer: {
        flexDirection: 'row',
        marginLeft: '2%',
        marginTop: scaledHeight(35),
    },
    pushNotificationDeviceText: {
        width: '86%',
        color: '#707070',
        fontSize: scaledHeight(20),
        marginTop: scaledHeight(3),
        marginLeft: '2%',
        fontWeight: 'bold'
    },
    explainPushNotification: {
        color: '#707070',
        fontSize: scaledHeight(18),
        marginTop: scaledHeight(8),
        marginLeft: '4%',
    },
    pushNotificationDeviceContainer: {
        flexDirection: 'row',
        marginLeft: '2%',
        marginTop: scaledHeight(15),
    },
    cancelButton: {
        borderColor: '#7B8288',
        borderWidth: 1,
        width: '80%',
        marginLeft: '10%',
        marginRight: '10%',
        marginTop: scaledHeight(42),
        height: scaledHeight(55),
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center',
    },
    cancelButtonText: {
        fontSize: scaledHeight(16),
        color: '#544A54',
        fontWeight: 'bold'
    },
    saveButton: {
        borderColor: '#56565A',
        borderWidth: 1,
        width: '80%',
        marginLeft: '10%',
        marginRight: '10%',
        marginTop: scaledHeight(30),
        height: scaledHeight(55),
        backgroundColor: '#56565A',
        alignItems: 'center',
        justifyContent: 'center',
    },
    saveButtonText: {
        fontSize: scaledHeight(16),
        color: '#FFFFFF',
        fontWeight: 'bold'
    },
    userRegisterNumberText: {
        fontSize: scaledHeight(16),
        color: '#707070',
        fontWeight: 'bold',
        marginTop: scaledHeight(10),
        marginLeft: '15%'
    },
    explainTextMessage: {
        fontSize: scaledHeight(16),
        color: '#707070',
        marginTop: scaledHeight(10),
        marginLeft: '15%'
    },
    registerNumberContainer: {
        flexDirection: 'row',
        marginLeft: '14%',
        marginTop: scaledHeight(10),
    },
    registerNumberText: {
        fontSize: scaledHeight(16),
        color: '#0000FF',
        textDecorationLine: 'underline'
    },
    callPreferenceContainer: {
        borderColor: '#B7B7B7',
        borderWidth: 0.8,
        marginLeft: '4%',
        marginRight: '4%',
        paddingLeft: '4%',
        paddingRight: '4%',
        paddingBottom: scaledHeight(25),
        marginTop: scaledHeight(30),
    },
    callPreferenceTitle: {
        fontSize: scaledHeight(20),
        color: '#56565A',
        fontWeight: 'bold',
        marginTop: scaledHeight(15),
    },
    callPreferenceTitleDesc: {
        fontSize: scaledHeight(16),
        color: '#707070',
        marginTop: scaledHeight(10),
        lineHeight: scaledHeight(25),
        fontWeight: 'bold'
    },
    callPreferenceTitleDescOpt: {
        fontSize: scaledHeight(16),
        color: '#707070',
        marginTop: scaledHeight(10),
        lineHeight: scaledHeight(25),
        fontWeight: 'normal'
    },
    preferenceSectionGrp: {
        flexGrow: 1,
        marginLeft: '2%',
        marginTop: scaledHeight(20),
    },
    preferenceSectionTxt: {
        textAlign: 'left',
        fontSize: scaledHeight(14),
        color: '#228AE5',
        fontWeight: 'bold',
        marginLeft: '4%',
    },
    lineBorder: {
        borderTopWidth: 1,
        borderColor: '#DEDEDF',
        marginTop: scaledHeight(40),
        marginBottom: scaledHeight(20),
    },
    quietTimeContainer: {
        flexDirection: 'row',
        marginLeft: '4%',
        marginTop: scaledHeight(10),
        alignContent: 'center',
        alignItems: 'center'
    },
    quietTimeText: {
        marginLeft: '2%',
        color: '#56565A',
        fontSize: scaledHeight(20),
        fontWeight: 'bold',
    },
    quietTimeTextDelay: {
        marginLeft: '16%',
        marginRight: '10%',
        color: '#707070',
        fontSize: scaledHeight(16),
    },
    priorityTextContent: {
        marginLeft: '4%',
        marginRight: '4%',
        color: '#707070',
        fontSize: scaledHeight(16),
        marginTop: scaledHeight(20)
    },
    priorityTextContentUnderline: {
        marginLeft: '4%',
        marginRight: '4%',
        color: '#228AE5',
        fontSize: scaledHeight(16),
        marginTop: scaledHeight(20),
        textDecorationLine: 'underline'
    },
    priorityTextContentDataRate: {
        marginLeft: '4%',
        marginRight: '4%',
        color: '#707070',
        fontSize: scaledHeight(20),
        marginTop: scaledHeight(20),
        fontWeight: 'bold',
    },
    priorityTextContentDataRateColor: {
        marginLeft: '4%',
        marginRight: '4%',
        color: '#404040',
        fontSize: scaledHeight(20),
        marginTop: scaledHeight(20),
        fontWeight: 'bold',
    },
    priorityTextContentBold: {
        marginLeft: '4%',
        marginRight: '4%',
        color: '#404040',
        fontSize: scaledHeight(20),
        marginTop: scaledHeight(20),
        fontWeight: 'bold',
        textDecorationLine: 'underline'
    },
    modalCloseIcon: {
        marginTop: scaledHeight(60),
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    modalBackgroundView: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        height: '100%',
    },
    modalContainer: {
        backgroundColor: '#FFFFFF',
        marginLeft: scaledHeight(20),
        marginRight: scaledHeight(20),
        paddingRight: '4%',
        paddingLeft: '4%',
        paddingTop: scaledHeight(15),
        paddingBottom: scaledHeight(15),
    },
    modalTitleText: {
        color: '#707070',
        fontSize: scaledHeight(22),
        fontWeight: 'bold',
        width: '80%',
        lineHeight: 30,
    },
    modallineBorder: {
        borderTopWidth: 1,
        borderColor: 'grey',
        marginTop: scaledHeight(20),
        marginBottom: scaledHeight(20),
    },
    modalRegisterText: {
        color: '#56565A',
        fontSize: scaledHeight(16),
        lineHeight: 25,
    },
    modalRegisterCodeText: {
        color: '#544A54',
        fontSize: scaledHeight(16),
        marginTop: scaledHeight(20),
        marginBottom: scaledHeight(10),
        fontWeight: 'bold'
    },
    modalDidntReceiveContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap'
    },
    modalDidntReceiveText: {
        color: '#707070',
        fontSize: scaledHeight(16),
        marginTop: scaledHeight(30),
        lineHeight: 20,
    },
    modalSaveButtonDim: {
        borderColor: '#B7B7B7',
        borderWidth: 1,
        width: '90%',
        marginLeft: '5%',
        marginRight: '5%',
        marginTop: scaledHeight(20),
        marginBottom: scaledHeight(10),
        height: scaledHeight(55),
        backgroundColor: '#B7B7B7',
        alignItems: 'center',
        justifyContent: 'center',
    },
    modalSaveButton: {
        borderColor: '#56565A',
        borderWidth: 1,
        width: '90%',
        marginLeft: '5%',
        marginRight: '5%',
        marginTop: scaledHeight(20),
        marginBottom: scaledHeight(10),
        height: scaledHeight(55),
        backgroundColor: '#56565A',
        alignItems: 'center',
        justifyContent: 'center',
    },
    modalcancelButton: {
        borderColor: '#DEDEDF',
        borderWidth: 1,
        width: '90%',
        marginLeft: '5%',
        marginRight: '5%',
        marginTop: scaledHeight(20),
        height: scaledHeight(55),
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center',
    },
    modalresendCodeText: {
        color: '#0000FF',
        fontSize: scaledHeight(16),
        marginTop: scaledHeight(3),
        textDecorationLine: 'underline',
    },
    modalCodeSentSuccess: {
        color: '#59B477',
        fontSize: scaledHeight(16),
        marginTop: scaledHeight(10),
    },
    modalEnterCode: {
        color: '#DE4F4F',
        fontSize: scaledHeight(16),
        marginTop: scaledHeight(20),
    },
    modalEnterCodeInput: {       
        fontSize: scaledHeight(16),
        width:'100%',        
    }
});
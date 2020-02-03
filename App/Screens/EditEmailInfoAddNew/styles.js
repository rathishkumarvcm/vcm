import { StyleSheet, Dimensions } from "react-native";
import { scaledHeight } from '../../Utils/Resolution';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    cancelButtonStyle: {
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        borderColor: '#56565A',
        borderWidth: 1,
        height: scaledHeight(50),
        justifyContent: 'center',
        marginLeft: '4%',
        marginRight: '4%',
        marginTop: scaledHeight(12),
        width: '92%'
    },
    cancelButtonText: {
        color: '#56565A',
        fontSize: scaledHeight(16)
    },
    connectWithUs: {
        backgroundColor: 'white',
        flexDirection: 'column',
        paddingBottom: '5%',
        paddingLeft: '5%'
    },
    container: {
        backgroundColor: '#F7FAFF',
        flex: 1,
        width: '100%'
    },
    copyRightSection: {
        alignItems: 'center',
        backgroundColor: '#56565A',
        height: scaledHeight(50),
        justifyContent: 'center'
    },
    copyRightText: {
        color: '#FFFFFF'
    },
    editEamilMargin: {
        marginLeft: '4%'
    },
    editEmailDeleteLabel: {
        color: '#5D83AE', fontSize: scaledHeight(18), fontWeight: 'bold', width: '32%'
    },
    editEmailInfoLabel: {
        color: '#707070', fontSize: scaledHeight(18), fontWeight: 'bold', marginRight: '4%', width: '70%'
    },
    editEmailInformations: {
        alignSelf: 'baseline', flexDirection: 'row'
    },
    editEmailLabelInfo: {
        color: '#56565A', fontSize: scaledHeight(18), lineHeight: 30, marginBottom: '2%', marginLeft: '4%', marginRight: '4%', marginTop: '4%', width: '92%'
    },
    editEmailPreferred: {
        width: '60%'
    },
    editEmailPrimaryLabel: {
        color: '#333333DE', fontSize: scaledHeight(18), fontWeight: 'bold', margin: '4%'
    },
    editEmailPrimaryPreferred: {
        alignItems: 'center', flexDirection: 'row', justifyContent: 'center', marginLeft: '4%', width: '92%'
    },
    editEmailSecurity: {
        color: '#56565A', fontSize: scaledHeight(18), lineHeight: 30
    },
    editFlexDirectionColumn: {
        flexDirection: 'column',
        marginTop: scaledHeight(20),
        paddingLeft: '4%',
        paddingRight: '4%',
        width: '100%',
    },
    editLabelBold: {
        color: '#B2B2B2',
        fontSize: scaledHeight(16),
        fontWeight: "bold"
    },
    editLabelInput: {
        color: '#5D83AE',
        fontSize: scaledHeight(20),
        fontWeight: 'bold'
    },
    editLabelInputMedium: {
        color: '#56565A',
        fontSize: scaledHeight(18)
    },
    editLabelInputNormal: {
        color: '#56565A',
        fontSize: scaledHeight(20)
    },
    editLabelText: {
        color: '#333333DE',
        fontSize: scaledHeight(20),
        fontWeight: 'bold'
    },
    editTitleBold: {
        color: '#707070',
        fontSize: scaledHeight(20),
        fontWeight: "bold"
    },
    faceIDlogo: {
        alignSelf: 'center',
        marginBottom: '5%',
        marginTop: '5%'
    },
    faceIDtextStyle: {
        alignItems: 'center',
        height: scaledHeight(20)
    },
    forgotLineText: {
        flexDirection: 'row',
        fontSize: scaledHeight(18),
        paddingLeft: '4%',
        paddingRight: '4%'
    },
    forgotLineTextColor: {
        color: '#56565A',
        fontSize: scaledHeight(18),
        fontWeight: 'bold'
    },
    imageWidthHeight: {
        height: 40,
        margin: '4%',
        resizeMode: 'contain',
        width: 40
    },
    inputTextBox: {
        marginLeft: '4%',
        marginRight: '4%',
        marginTop: scaledHeight(20),
        paddingLeft: '4%',
        paddingRight: '4%',
        width: '92%',
    },
    lineBorder: {
        borderTopWidth: 1,
        color: '#707070',
        marginTop: scaledHeight(15)
    },
    listContainer: {
        backgroundColor: '#FFFFFF',
        borderColor: '#D4D4D4',
        borderWidth: 1,
        height: scaledHeight(440),
        marginLeft: '4%',
        marginRight: '4%',
        marginTop: scaledHeight(20),
        width: '92%'
    },
    loginHeader: {
        flex: .15,
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
        paddingLeft: '4%',
        paddingRight: '4%',
        marginBottom: scaledHeight(18)
    },
    newVictory: {
        color: '#486D89',
        fontSize: scaledHeight(20),
        height: scaledHeight(20),
        lineHeight: scaledHeight(20)
    },
    newVictoryButton: {
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        borderColor: '#56565A',
        borderRadius: scaledHeight(25),
        borderWidth: 1,
        height: scaledHeight(50),
        justifyContent: 'center',
        marginTop: scaledHeight(10),
        width: '70%'

    },
    newVictoryButtonText: {
        color: '#56565A',
        fontSize: scaledHeight(16),
        fontWeight: 'bold'
    },
    newVictorySection: {
        backgroundColor: '#FFFFFF',
        marginTop: scaledHeight(24),
        padding: scaledHeight(15),
        width: '100%'
    },
    newVictorySection1: {
        height: scaledHeight(70),
        marginTop: scaledHeight(20),
        paddingLeft: '4%',
        paddingRight: '4%',
        width: '100%'
    },
    openInvestment: {
        color: '#56565A',
        fontSize: scaledHeight(16),
        justifyContent: 'center'
    },
    passwordView: {
        paddingLeft: '4%',
        paddingRight: '4%'
    },
    privacyAgreement: {
        alignItems: 'center',
        backgroundColor: 'white',
        flexDirection: 'row',
        height: scaledHeight(50),
        justifyContent: 'center',
        width: '100%'
    },
    privacyText: {
        color: '#5D83AE',
        fontSize: scaledHeight(16),
        paddingLeft: '4%',
        width: '50%'
    },
    registernowButton: {
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        borderColor: '#56565A',
        borderRadius: scaledHeight(14),
        borderWidth: 1,
        height: scaledHeight(28),
        justifyContent: 'center',
        width: width / 3.3
    },
    registernowButton1: {
        alignSelf: 'center',
        backgroundColor: '#FFFFFF',
        borderColor: '#56565A',
        borderRadius: scaledHeight(24),
        borderWidth: 1,
        height: scaledHeight(48),
        justifyContent: 'center',
        width: width / 2
    },
    registernowText: {
        color: '#56565A',
        fontSize: scaledHeight(10)
    },
    saveButtonStyle: {
        alignItems: 'center',
        backgroundColor: '#56565A',
        borderColor: '#56565A',
        borderWidth: 1,
        height: scaledHeight(50),
        justifyContent: 'center',
        marginLeft: '4%',
        marginRight: '4%',
        marginTop: scaledHeight(12),
        width: '92%'
    },
    saveButtonText: {
        color: '#FFFFFF',
        fontSize: scaledHeight(16)
    },
    scrollViewContainer: {
        flex: 0.85,
    },
    settingsAddress: {
        backgroundColor: '#FFFFFF',
        borderColor: '#D4D4D4',
        borderWidth: 1,
        height: scaledHeight(140),
        marginLeft: '4%',
        marginRight: '4%',
        marginTop: scaledHeight(20),
        width: '92%'
    },
    settingsBorder: {
        borderBottomWidth: 1,
        borderColor: '#B2B2B2',
        marginLeft: '4%',
        marginRight: '4%',
        marginTop: scaledHeight(10)
    },
    settingsHeadIdentity: {
        color: '#707070',
        fontSize: scaledHeight(20),
        width: '50%'
    },
    settingsHeadline: {
        color: '#707070',
        fontSize: scaledHeight(20),
        width: '90%'
    },
    settingsInfo: {
        color: '#B2B2B2',
        fontSize: scaledHeight(16)
    },
    settingsOccupation: {
        backgroundColor: '#FFFFFF',
        borderColor: '#D4D4D4',
        borderWidth: 1,
        height: scaledHeight(210),
        marginLeft: '4%',
        marginRight: '4%',
        marginTop: scaledHeight(20),
        width: '92%'
    },
    settingsPhone: {
        backgroundColor: '#FFFFFF',
        borderColor: '#D4D4D4',
        borderWidth: 1,
        height: scaledHeight(90),
        marginLeft: '4%',
        marginRight: '4%',
        marginTop: scaledHeight(20),
        width: '92%'
    },
    settingsSocial: {
        flexDirection: 'row',
        marginLeft: scaledHeight(10),
        marginTop: scaledHeight(10)
    },
    settingsSocialContainer: {
        backgroundColor: '#FFFFFF',
        borderColor: '#D4D4D4',
        borderWidth: 1,
        height: scaledHeight(100),
        marginLeft: '4%',
        marginRight: '4%',
        marginTop: scaledHeight(20),
        width: '92%'
    },
    settingsView: {
        flexDirection: 'row',
        marginTop: scaledHeight(18),
        paddingLeft: '4%',
        paddingRight: '4%',
        width: '100%',
    },
    settingsView1: {
        marginTop: scaledHeight(18),
        paddingLeft: '4%',
        paddingRight: '4%',
    },
    signInButton: {
        alignItems: 'center',
        backgroundColor: '#56565A',
        borderColor: '#56565A',
        borderRadius: scaledHeight(25),
        borderWidth: 1,
        height: scaledHeight(50),
        justifyContent: 'center',
        marginLeft: '4%',
        marginRight: '4%',
        marginTop: scaledHeight(12),
        width: '92%'
    },
    signInButtonText: {
        color: '#FFFFFF',
        fontSize: scaledHeight(16),
        fontWeight: 'bold'
    }, signInView: {
        marginTop: scaledHeight(2),
        paddingLeft: '4%',
        paddingRight: '4%',
    },
    signIntext: {
        color: '#486D89',
        fontSize: scaledHeight(14)
    },
    stepsInner: {
        backgroundColor: '#4B8D62',
        height: scaledHeight(8),
        width: '20%'
    },
    stepsOuter: {
        backgroundColor: "#E6E6E6",
        height: scaledHeight(8),
        justifyContent: "center",
        marginLeft: '4%',
        marginRight: '4%',
        marginTop: scaledHeight(30),
        width: '92%'
    },
    termsofuse: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: scaledHeight(10),
        paddingLeft: '4%',
        paddingRight: '4%'
    },
    termsofuseText: {
        color: '#56565A',
        fontSize: scaledHeight(18)
    },
    termsofuseText1: {
        color: '#56565A',
        fontSize: scaledHeight(18),
        marginBottom: scaledHeight(5)
    },
    usaaMemberSection: {
        flexDirection: 'row',
        marginTop: scaledHeight(15)
    },
    usaaMembersText: {
        color: '#486D89',
        fontSize: scaledHeight(16),
        height: scaledHeight(50),
        lineHeight: scaledHeight(50)
    },
    userIDText: {
        color: '#000000',
        fontSize: scaledHeight(16),
        fontWeight: 'bold',
        marginBottom: scaledHeight(8)
    },
    userIDTextBox: {
        marginBottom: scaledHeight(18),
        marginLeft: '4%',
        marginRight: '4%'
    },
    whiteBackground: {
        backgroundColor: 'white',
        flexDirection: 'row',
        paddingLeft: '5%',
        paddingRight: '5%'
    }
});

export default styles;
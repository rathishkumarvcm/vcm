import { StyleSheet, Dimensions } from "react-native";
import { scaledHeight } from '../../Utils/Resolution';

const { width } = Dimensions.get('window');

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
        marginBottom: scaledHeight(18)
    },
    editLabelBold: {
        color: '#B2B2B2',
        fontWeight: "bold",
        fontSize: scaledHeight(16)
    },
    editTitleBold: {
        color: '#707070',
        fontWeight: "bold",
        fontSize: scaledHeight(20)
    },
    editLabelText: {
        color: '#333333DE',
        fontWeight: 'bold',
        fontSize: scaledHeight(20)
    },
    editLabelInput: {
        color: '#5D83AE',
        fontWeight: 'bold',
        fontSize: scaledHeight(20)
    },
    editLabelInputNormal: {
        color: '#56565A',
        fontSize: scaledHeight(20)
    },
    editLabelInputMedium: {
        color: '#56565A',
        fontSize: scaledHeight(18)
    },
    editFlexDirectionColumn: {
        flexDirection: 'column',
        width: '100%',
        marginTop: scaledHeight(20),
        paddingLeft: '4%',
        paddingRight: '4%',
    },
    inputTextBox: {
        width: '92%',
        marginTop: scaledHeight(20),
        marginLeft: '4%',
        marginRight: '4%',
        paddingRight: '4%',
        paddingLeft: '4%',
    },
    registernowButton: {
        borderColor: '#56565A',
        borderWidth: 1,
        width: width / 3.3,
        borderRadius: scaledHeight(14),
        height: scaledHeight(28),
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center'
    },
    registernowButton1: {
        borderColor: '#56565A',
        borderWidth: 1,
        width: width / 2,
        borderRadius: scaledHeight(24),
        height: scaledHeight(48),
        backgroundColor: '#FFFFFF',
        alignSelf: 'center',
        justifyContent: 'center'
    },
    registernowText: {
        fontSize: scaledHeight(10),
        color: '#56565A'
    },
    settingsView: {
        flexDirection: 'row',
        width: '100%',
        marginTop: scaledHeight(18),
        paddingLeft: '4%',
        paddingRight: '4%',
    },
    settingsBorder: {
        marginTop: scaledHeight(10),
        marginLeft: '4%',
        marginRight: '4%',
        borderBottomWidth: 1,
        borderColor: '#B2B2B2'
    },
    settingsView1: {
        marginTop: scaledHeight(18),
        paddingLeft: '4%',
        paddingRight: '4%',
    },
    signInView: {
        marginTop: scaledHeight(2),
        paddingLeft: '4%',
        paddingRight: '4%',
    },
    passwordView: {
        paddingLeft: '4%',
        paddingRight: '4%'
    },
    settingsHeadline: {
        width: '90%',
        color: '#707070',
        fontSize: scaledHeight(20)
    },
    settingsInfo: {
        color: '#B2B2B2',
        fontSize: scaledHeight(16)
    },
    settingsHeadIdentity: {
        width: '50%',
        color: '#707070',
        fontSize: scaledHeight(20)
    },
    contentContainer: {
        borderWidth: 1,
        borderColor: '#D4D4D4',
        backgroundColor: '#FFFFFF',
        padding: '2%',
        marginTop: scaledHeight(14),
        width: '92%',
        marginLeft: '4%',
        marginRight: '4%'
    },
    listContainer: {
        borderWidth: 1,
        borderColor: '#D4D4D4',
        backgroundColor: '#FFFFFF',
        marginTop: scaledHeight(20),
        width: '92%',
        height: scaledHeight(440),
        marginLeft: '4%',
        marginRight: '4%'
    },
    settingsPhone: {
        borderWidth: 1,
        borderColor: '#D4D4D4',
        backgroundColor: '#FFFFFF',
        marginTop: scaledHeight(20),
        width: '92%',
        height: scaledHeight(90),
        marginLeft: '4%',
        marginRight: '4%'
    },
    settingsOccupation: {
        borderWidth: 1,
        borderColor: '#D4D4D4',
        backgroundColor: '#FFFFFF',
        marginTop: scaledHeight(20),
        width: '92%',
        height: scaledHeight(210),
        marginLeft: '4%',
        marginRight: '4%'
    },
    settingsAddress: {
        borderWidth: 1,
        borderColor: '#D4D4D4',
        backgroundColor: '#FFFFFF',
        marginTop: scaledHeight(20),
        width: '92%',
        height: scaledHeight(140),
        marginLeft: '4%',
        marginRight: '4%'
    },
    settingsSocialContainer: {
        borderWidth: 1,
        borderColor: '#D4D4D4',
        backgroundColor: '#FFFFFF',
        marginTop: scaledHeight(20),
        width: '92%',
        height: scaledHeight(100),
        marginLeft: '4%',
        marginRight: '4%'
    },
    settingsSocial: {
        flexDirection: 'row',
        marginLeft: scaledHeight(10),
        marginTop: scaledHeight(10)
    },
    signIntext: {
        color: '#486D89',
        fontSize: scaledHeight(14)
    },
    userIDText: {
        color: '#000000',
        fontSize: scaledHeight(16),
        fontWeight: 'bold',
        marginBottom: scaledHeight(8)
    },
    userIDTextBox: {
        marginLeft: '4%',
        marginRight: '4%',
        marginBottom: scaledHeight(18)
    },
    forgotLineText: {
        paddingLeft: '4%',
        paddingRight: '4%',
        flexDirection: 'row',
        fontSize: scaledHeight(18)
    },
    forgotLineTextColor: {
        fontSize: scaledHeight(18),
        color: '#56565A',
        fontWeight: 'bold'
    },
    termsofuse: {
        flexWrap: 'wrap',
        flexDirection: 'row',
        paddingLeft: '4%',
        paddingRight: '4%',
        marginTop: scaledHeight(10)
    },
    termsofuseText: {
        fontSize: scaledHeight(18),
        color: '#56565A'
    },
    termsofuseText1: {
        fontSize: scaledHeight(18),
        color: '#56565A',
        marginBottom: scaledHeight(5)
    },
    signInButton: {
        borderColor: '#56565A',
        borderWidth: 1,
        width: '92%',
        marginLeft: '4%',
        marginRight: '4%',
        marginTop: scaledHeight(12),
        borderRadius: scaledHeight(25),
        height: scaledHeight(50),
        backgroundColor: '#56565A',
        alignItems: 'center',
        justifyContent: 'center'
    },
    signInButtonText: {
        fontSize: scaledHeight(16),
        color: '#FFFFFF',
        fontWeight: 'bold'
    },
    saveButtonStyle: {
        borderColor: '#56565A',
        borderWidth: 1,
        width: '92%',
        marginLeft: '4%',
        marginRight: '4%',
        marginTop: scaledHeight(12),
        height: scaledHeight(50),
        backgroundColor: '#56565A',
        alignItems: 'center',
        justifyContent: 'center'
    },
    saveButtonText: {
        fontSize: scaledHeight(16),
        color: '#FFFFFF'
    },
    cancelButtonStyle: {
        borderColor: '#56565A',
        borderWidth: 1,
        width: '92%',
        marginLeft: '4%',
        marginRight: '4%',
        marginTop: scaledHeight(12),
        height: scaledHeight(50),
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center'
    },
    cancelButtonText: {
        fontSize: scaledHeight(16),
        color: '#56565A'
    },
    newVictoryButton: {
        borderColor: '#56565A',
        borderRadius: scaledHeight(25),
        height: scaledHeight(50),
        borderWidth: 1,
        marginTop: scaledHeight(10),
        width: '70%',
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center'

    },
    newVictoryButtonText: {
        color: '#56565A',
        fontSize: scaledHeight(16),
        fontWeight: 'bold'
    },
    newVictorySection: {
        padding: scaledHeight(15),
        width: '100%',
        backgroundColor: '#FFFFFF',
        marginTop: scaledHeight(24)
    },
    newVictory: {
        height: scaledHeight(20),
        lineHeight: scaledHeight(20),
        fontSize: scaledHeight(20),
        color: '#486D89'
    },
    usaaMembersText: {
        height: scaledHeight(50),
        lineHeight: scaledHeight(50),
        fontSize: scaledHeight(16),
        color: '#486D89'
    },
    openInvestment: {
        fontSize: scaledHeight(16),
        color: '#56565A',
        justifyContent: 'center'
    },
    lineBorder: {
        marginTop: scaledHeight(15),
        borderTopWidth: 1,
        color: '#707070'
    },
    usaaMemberSection: {
        flexDirection: 'row',
        marginTop: scaledHeight(15)
    },
    connectWithUs: {
        backgroundColor: 'white',
        flexDirection: 'column',
        paddingLeft: '5%',
        paddingBottom: '5%'
    },
    whiteBackground: {
        flexDirection: 'row',
        backgroundColor: 'white',
        paddingLeft: '5%',
        paddingRight: '5%'
    },
    imageWidthHeight: {
        width: 40,
        height: 40,
        margin: '4%',
        resizeMode: 'contain'
    },
    privacyAgreement: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        backgroundColor: 'white',
        height: scaledHeight(50),
        flexDirection: 'row'
    },
    privacyText: {
        width: '50%',
        paddingLeft: '4%',
        color: '#5D83AE',
        fontSize: scaledHeight(16)
    },
    copyRightSection: {
        height: scaledHeight(50),
        backgroundColor: '#56565A',
        alignItems: 'center',
        justifyContent: 'center'
    },
    copyRightText: {
        color: '#FFFFFF'
    },
    faceIDlogo: {
        marginTop: '5%',
        marginBottom: '5%',
        alignSelf: 'center'
    },
    faceIDtextStyle: {
        height: scaledHeight(20),
        alignItems: 'center'
    }, stepsOuter: {
        height: scaledHeight(8),
        width: '92%',
        backgroundColor: "#E6E6E6",
        justifyContent: "center",
        marginTop: scaledHeight(30),
        marginLeft: '4%',
        marginRight: '4%'
    },
    stepsInner: {
        height: scaledHeight(8),
        width: '20%',
        backgroundColor: '#4B8D62'
    },
    newVictorySection1: {
        paddingLeft: '4%',
        paddingRight: '4%',
        width: '100%',
        height: scaledHeight(70),
        marginTop: scaledHeight(20)
    },
    editPhoneNumType: {
        width: '100%',
        marginLeft: '4%',
        marginRight: '4%',
        marginTop: '4%'
    },
    settingsMobile: {
        flexDirection: 'row',
        width: '92%',
        alignItems: 'center',
        marginTop: scaledHeight(18),
        paddingLeft: '4%',
        paddingRight: '4%',
    },
    phoneFlexRow: {
        flexDirection: 'row'
    },
    phoneDropDown: {
        position: 'absolute', right: 20, top: 14
    },
    phoneTypeLabel: {
        color: '#333333DE', height: scaledHeight(22), fontSize: scaledHeight(18), fontWeight: 'bold'
    },
    phonePreferredLabel: {
        width: '80%', color: '#56565A', alignItems: 'center', fontSize: scaledHeight(16), fontWeight: 'bold'
    },
    phoneSecurityLabel: {
        color: '#56565A', fontSize: scaledHeight(18)
    },
    editAddressInput: { flexDirection: 'column', width: '100%', paddingLeft: '4%', paddingRight: '4%', marginBottom: '2%', marginTop: '1%' },
    editDropDownSelect: { height: 100, borderWidth: 1, marginRight: '4%', marginTop: '1%', width: '92%', borderColor: "#DEDEDF", backgroundColor: 'white'}
});
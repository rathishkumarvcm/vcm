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
        justifyContent: 'center',
        alignItems: 'center'
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
    settingsBorderGap: {
        marginTop: scaledHeight(12),
        marginBottom: scaledHeight(12),
        flexDirection: 'column',
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
    settingsMilitary: {
        borderWidth: 1,
        borderColor: '#D4D4D4',
        backgroundColor: '#FFFFFF',
        marginTop: scaledHeight(20),
        height: scaledHeight(70),
        width: '92%',
        marginLeft: '4%',
        marginRight: '4%'
    },
    settingsMilitaryServing: {
        borderWidth: 1,
        borderColor: '#D4D4D4',
        backgroundColor: '#FFFFFF',
        marginTop: scaledHeight(20),
        width: '92%',
        marginLeft: '4%',
        marginRight: '4%'
    },
    settingsRelationShip: {
        borderWidth: 1,
        borderColor: '#D4D4D4',
        backgroundColor: '#FFFFFF',
        alignSelf: 'center',
        borderRadius: scaledHeight(14),
        marginTop: scaledHeight(20),
        height: scaledHeight(70),
        width: '70%',
        marginLeft: '4%',
        marginRight: '4%'
    },
    settingsFinancial: {
        borderWidth: 1,
        borderColor: '#D4D4D4',
        backgroundColor: '#FFFFFF',
        marginTop: scaledHeight(20),
        width: '92%',
        paddingBottom: '4%',
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
        marginLeft: '4%',
        marginRight: '4%'
    },
    whiteBackground: {
        flexDirection: 'row',
        backgroundColor: 'white',
        paddingLeft: '5%',
        paddingRight: '5%'
    },
    connectWithUs: {
        backgroundColor: 'white',
        flexDirection: 'column',
        paddingLeft: '5%',
        paddingBottom: '5%'
    },
    editLabelInputMedium: {
        color: '#56565A',
        fontSize: scaledHeight(18)
    },
    imageWidthHeight: {
        width: 40,
        height: 40,
        margin: '4%',
        resizeMode: 'contain'
    },
    settingsSocial: {
        flexDirection: 'row',
        marginLeft: scaledHeight(10),
        marginTop: scaledHeight(10),
        alignItems: 'center'
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
        color: '#486D89',
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
    settingsFooter: {
        flexDirection: 'column',
        width: '100%',
        backgroundColor: '#FFFFFF',
        padding: '4%'
    },
    newVictorySection: {
        marginLeft: '4%',
        marginRight: '4%',
        padding: scaledHeight(15),
        width: '92%',
        height: scaledHeight(190),
        backgroundColor: '#FFFFFF',
        marginTop: scaledHeight(29)
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
        fontSize: scaledHeight(14),
        color: '#56565A'
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
    privacyAgreement: {
        marginTop: scaledHeight(8),
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
    profileSettingHead: { color: '#0000FF', fontSize: scaledHeight(14) },
    profileSettingHeadOne: { color: '#56565A', fontSize: scaledHeight(14) },
    profileSettingHeadTwo: { color: '#56565A', fontSize: scaledHeight(14), fontWeight: 'bold' },
    profileSettingView: { justifyContent: 'center', alignItems: 'center' },
    profileSettingViewOne: { width: '70%', color: '#56565A', fontSize: scaledHeight(18), fontWeight: 'bold' },
    profileSettingViewTwo: { width: '30%', color: '#0000FF', fontSize: scaledHeight(14), textAlign: 'right' },
    profileSettingPersonalBackground: { borderWidth: 1, borderColor: '#D4D4D4', backgroundColor: '#FFFFFF', marginTop: scaledHeight(20), width: '92%', marginLeft: '4%', marginRight: '4%' },
    profileSettingLabel: { color: '#333333DE', fontSize: scaledHeight(16), fontWeight: 'bold' },
    profileSettingNameLabel: { color: '#0000FF', fontSize: scaledHeight(16), marginTop: scaledHeight(3), marginBottom: '2%' },
    profileSettingNameBackground: { backgroundColor: '#F3F3F3', marginLeft: '3%', marginRight: '3%' },
    profileSettingNameDetailLabel: { color: '#000000', fontSize: scaledHeight(16), lineHeight: 30, margin: '2%' },
    profileSettingValueLabel: { color: '#56565A', fontSize: scaledHeight(16), marginTop: scaledHeight(3), marginBottom: '2%' },
    profileSettingViewBack: { color: '#333333DE', fontSize: scaledHeight(16), marginTop: scaledHeight(3), marginBottom: '2%' },
    profileSettingSocialView: { width: '70%', color: '#707070', fontSize: scaledHeight(18), fontWeight: 'bold' },
    profileSettingSocialLabel: { color: '#0000FF', fontSize: scaledHeight(16), marginTop: scaledHeight(3) },
    profileSettingConnectLabel: { color: '#56565A', fontSize: scaledHeight(18), marginTop: '4%' },
    profileSettingSocialIcon: { marginTop: '4%', paddingLeft: '4%', paddingRight: '4%' },
    profileSettingInvestLabel: { flexWrap: 'wrap', color: '#56565A', fontSize: scaledHeight(16), lineHeight: 24, textAlign: 'justify', marginBottom: '3%' },
    profileSettingSecurityLabel: { color: '#56565A', lineHeight: 24, textAlign: 'justify', fontSize: scaledHeight(16), marginTop: '4%' },
    profileSettingShareLabel: { color: '#56565A', fontSize: scaledHeight(16), lineHeight: 24, textAlign: 'justify' },
    profileSettingFooterView: { flexDirection: 'column', width: '92%', margin: '4%' },
    editEmailHolder: {
        width: '92%', marginLeft: '4%', marginRight: '4%', marginTop: '4%', borderColor: '#CCCCCC', borderWidth: 1, backgroundColor: '#fff'
    },
    editEmailType: {
        color: '#56565A', fontSize: scaledHeight(16), fontWeight: 'bold', marginLeft: '3%', marginBottom: '2%', marginTop: '4%'
    },
    editEmailId: {
        color: '#707070', fontSize: scaledHeight(16), marginLeft: '3%', marginBottom: '2%'
    },
    editEmailBorder: { 
        borderBottomWidth: 1, borderColor: '#B2B2B2', marginTop: '4%', marginBottom: '4%' 
    },
    relationLabelTextView: {
        marginTop: scaledHeight(12),
        marginBottom: scaledHeight(12),
        paddingLeft: '4%',
        paddingRight: '4%',
    },
    profileDivideIcon: { width: '100%', margin: '3%', flexDirection: 'row'},
    profileDivideIconOne: { width: '80%', color: '#56565A', fontSize: scaledHeight(18), fontWeight: 'bold' },
    profileDivideIconTwo: { width: '20%', color: '#0000FF', fontSize: scaledHeight(14) }
});
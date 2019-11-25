import { StyleSheet, Dimensions } from "react-native";
import { scaledHeight } from '../../Utils/Resolution';
//import { Colors } from "react-native/Libraries/NewAppScreen";

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
        // borderRadius:scaledHeight(14),
        height: scaledHeight(28),
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center'
    },
    registernowButton1: {
        borderColor: '#56565A',
        borderWidth: 1,
        width: width / 2,
        //borderRadius:scaledHeight(24),
        height: scaledHeight(48),
        backgroundColor: '#FFFFFF',
        alignSelf: 'center',
        justifyContent: 'center'
    },
    registernowText: {
        fontSize: scaledHeight(10),
        color: '#56565A'
    },

    signInUser: {
        marginTop: scaledHeight(34),
        paddingLeft: '4%',
        paddingRight: '4%',
    },
    passwordView: {
        paddingLeft: '4%',
        paddingRight: '4%',
        marginTop: scaledHeight(28)
    },

    userIDText: {
        color: '#333333DE',
        fontSize: scaledHeight(20),
        fontWeight: 'bold',
        marginBottom: scaledHeight(8)
    },

    userIDTextBox: {
        marginLeft: '4%',
        marginRight: '4%',
        marginBottom: scaledHeight(18)
    },
    userIDTextBoxError: {
        marginLeft: '4%',
        marginRight: '4%',
        marginBottom: scaledHeight(18),
        borderColor: 'red'
    },
    forgotLineText: {
        marginTop: scaledHeight(14),
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
        marginTop: scaledHeight(25)
    },
    termsofuseText: {
        fontSize: scaledHeight(18),
        color: '#56565A'
    },

    newVictoryButton: {
        borderColor: '#56565A',
        borderRadius: scaledHeight(25),
        height: scaledHeight(50),
        borderWidth: 1,
        marginTop: scaledHeight(25),
        width: '60%',
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
        marginLeft: '4%',
        marginRight: '4%',
        padding: scaledHeight(15),
        width: '92%',
        height: scaledHeight(450),
        backgroundColor: '#FFFFFF',
        marginTop: scaledHeight(29)
    },
    newVictory: {
        height: scaledHeight(30),
        lineHeight: scaledHeight(30),
        fontSize: scaledHeight(30),
        marginTop: scaledHeight(20),
        color: '#56565A'
    },
    usaaMembersText: {
        height: scaledHeight(50),
        lineHeight: scaledHeight(50),
        fontSize: scaledHeight(16),
        color: '#56565A'
    },
    openInvestment: {
        marginTop: scaledHeight(10),
        fontSize: scaledHeight(20),
        color: '#56565A'
    },
    lineBorder: {
        marginTop: scaledHeight(25),
        borderTopWidth: 1,
        borderColor: '#DEDEDF'
    },
    usaaMemberSection: {
        flexDirection: 'row',
        marginTop: scaledHeight(15)
    },
    privacyAgreement: {
        marginTop: scaledHeight(15),
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
        color: '#56565A',
        fontWeight: 'bold',
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
    },

    /*recovery*/
    cancelButton: {
        borderColor: '#61285F45',
        borderWidth: 1,
        width: '80%',
        marginLeft: '10%',
        marginRight: '10%',
        height: scaledHeight(50),
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: scaledHeight(15)
    },
    cancelButtonText: {
        fontSize: scaledHeight(16),
        color: '#544A54',
        fontWeight: 'bold'
    },
    continueButton: {
        borderColor: '#56565A',
        borderWidth: 1,
        width: '80%',
        marginLeft: '10%',
        marginRight: '10%',
        marginTop: scaledHeight(15),
        height: scaledHeight(50),
        backgroundColor: '#56565A',
        alignItems: 'center',
        justifyContent: 'center'
    },
    continueButtonText: {
        fontSize: scaledHeight(16),
        color: '#FFFFFF',
        fontWeight: 'bold'
    },
    retrievePasswordText: {
        color: '#56565A',
        fontSize: scaledHeight(30)
    },
    securityCheck:
    {
        width: '92%',
        marginLeft: '4%',
        marginRight: '4%',
        height: scaledHeight(70),
        backgroundColor: '#878280'
    },
    refreshSecurity:
    {
        alignSelf: 'flex-end',
        color: 'blue',
        textDecorationLine: "underline",
        fontSize: scaledHeight(16)
    },
    notifOuter: {
        flex: 1,
        height: scaledHeight(100),
        width: '92%',
        backgroundColor: "#E9E9E9",
        justifyContent: "center",
        marginTop: scaledHeight(30),
        marginLeft: '4%',
        marginRight: '4%',
        borderRadius: scaledHeight(25),
        flexDirection: "row",
        alignItems: 'center'
    },
    notifInner: {
        flex: 0.8,
        alignItems: 'center',
        marginLeft:'4%',
    },
    notifInnerText:{
        fontSize: scaledHeight(17),
        color: '#56565A',
        lineHeight:scaledHeight(29),
    },
    notifClose: {
        flex: 0.2,
        fontSize: scaledHeight(25),
        color: '#56565A',       
        alignItems: 'center'
    },
    signInView: {
        marginTop: scaledHeight(50),
        paddingLeft: '4%',
        paddingRight: '4%',
    },
    optTextMsg: {
        color: '#333333DE',
        fontWeight: 'bold',
        marginBottom: scaledHeight(8),
        fontSize: scaledHeight(14)
    },
    enterOpt: {
        color: '#333333DE',
        fontSize: scaledHeight(16),
        fontWeight: 'bold',
        marginBottom: scaledHeight(8)
    },
    refreshOtp:
    {
        color: '#0000FF',
        fontSize: scaledHeight(16),
        fontWeight: '500',
    },
    refreshOtpView: {
        marginTop: scaledHeight(28),
        borderBottomColor: '#0000FF',
        borderBottomWidth: 1,
        alignSelf: 'center',
        marginBottom: scaledHeight(42)
    },
    errorMessage: {
        fontSize: scaledHeight(14),
        color: "red",
        paddingLeft: '4%',
        paddingRight: '4%',
    }

});
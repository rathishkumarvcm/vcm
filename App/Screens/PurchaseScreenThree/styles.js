import { StyleSheet } from "react-native";
import { scaledHeight } from '../../Utils/Resolution';


const styles = StyleSheet.create({
    TextOffStyle: {
        color: '#544A54',
        fontSize: scaledHeight(14),
        fontWeight: 'bold',
        opacity: 0.5,
        paddingLeft: "8%",
        textAlign: 'center'
    },
    TextOffStyleBold: {
        color: '#544A54',
        fontSize: scaledHeight(14),
        fontWeight: 'bold',
        opacity: 0.5,
        paddingLeft: "3%",
        textAlign: 'center'
    },
    TextOnStyle: {
        color: '#56565A',
        fontSize: scaledHeight(14),
        fontWeight: 'bold',
        justifyContent: 'center',
        marginRight: '30%',
        paddingLeft: "10%",
        textAlign: 'center'
    },
    addressText: {
        color: '#707070',
        fontSize: scaledHeight(16),
        lineHeight: scaledHeight(22),
        marginTop: '4%',
        width: '60%'
    },
    bankDisc: {
        color: "#56565A",
        fontSize: scaledHeight(14),
        opacity: 0.5,
        paddingTop: scaledHeight(2)
    },
    bankTitle: {
        color: "#56565A",
        fontSize: scaledHeight(16),
        fontWeight: "bold",
        paddingLeft: '4%'
    },
    boxStyleView: {
        backgroundColor: '#FFFFFF',
        borderColor: '#9DB4CE',
        borderWidth: scaledHeight(1),
        flexDirection: 'row',
        height: scaledHeight(80),
        marginTop: '6%'
    },
    boxStyleViewSelected: {
        backgroundColor: '#FFFFFF',
        borderColor: "#B5E198",
        borderWidth: scaledHeight(4),
        flexDirection: 'row',
        height: scaledHeight(80),
        marginTop: '6%'
    },
    btnGrp: {
        alignContent: 'center',
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center',
        marginHorizontal: scaledHeight(12),
        marginVertical: scaledHeight(50)
    },
    checkOrderStmtView: {
        backgroundColor: '#F8F6DE',
        borderColor: '#61285F45',
        borderWidth: scaledHeight(1),
        marginVertical: '4%',
        paddingBottom: '4%',
        paddingLeft: '4%',
        paddingTop: '4%',
        width: '100%'
    },
    checkOrderText: {
        color: '#333333DE',
        fontSize: scaledHeight(16),
        fontWeight: 'bold',
        lineHeight: scaledHeight(22),
        marginTop: '4%',
        width: '90%',
    },
    checkOrderTitle: {
        color: '#56565A',
        fontSize: scaledHeight(22),
        fontWeight: 'bold',
        lineHeight: scaledHeight(35)
    },
    container: {
        backgroundColor: '#F7FAFF',
        flex: 1,
        width: '100%'
    },
    dropDownLayout: {
        marginLeft: "0%",
        marginRight: "0%",
        width: "100%",
    },
    dropDownPostition: {
        left: 0,
        marginLeft: scaledHeight(20),
        marginRight: scaledHeight(20),
        position: "absolute",
        width: "100%",
    },
    dropDownTextName: {
        color: "rgba(51, 51, 51, 0.87)",
        fontSize: scaledHeight(16),
        fontWeight: "bold",
        marginLeft: "0%",
        marginRight: "0%",
        marginTop: scaledHeight(0),
        paddingLeft: "0%",
        paddingRight: "0%",
        width: "100%",
    },
    dummyTextStyle: {
        color: "#333333DE",
        fontSize: scaledHeight(14),
        fontWeight: "400",
        lineHeight: scaledHeight(20),
        marginTop: '4%'
    },
    flexDirectionStyle: {
        flexDirection: "row",
        marginBottom: "4%"
    },
    headerText: {
        color: "#56565A",
        fontSize: scaledHeight(20),
        fontWeight: "bold",
        marginTop: scaledHeight(15)
    },
    headerTextView: {
        marginLeft: '4%',
        marginRight: '4%'
    },
    iconContainerView: {
        alignItems: 'center',
        backgroundColor: '#E9E9E9',
        height: scaledHeight(66),
        justifyContent: 'center',
        margin: scaledHeight(7),
        width: scaledHeight(76)
    },
    imageStyle: {
        borderColor: "#B5E198",
        borderWidth: scaledHeight(1)
    },
    innerContainerStyle: {
        marginTop: scaledHeight(25),
        paddingLeft: "4%",
        paddingRight: "4%"
    },
    labOR: {
        color: '#333333DE',
        fontSize: scaledHeight(18),
        fontWeight: '600',
        lineHeight: 22,
        marginVertical: scaledHeight(12),
        textAlign: 'center'
    },
    line: {
        backgroundColor: "#535353",
        height: scaledHeight(1),
        marginBottom: "4%",
        marginRight: "4%",
        marginTop: "4%",
        opacity: 0.25,
        width: "100%"
    },
    mainFlex: {
        flex: 0.85
    },
    marginBottomStyle: {
        marginBottom: "4%"
    },
    marginTopStyle: {
        marginTop: "6%"
    },
    normalBlackBtn: {
        alignContent: 'center',
        alignItems: 'center',
        backgroundColor: '#544A54',
        borderColor: "#61285F45",
        borderWidth: 1,
        height: scaledHeight(50),
        justifyContent: 'center',
        marginHorizontal: scaledHeight(37),
        marginVertical: scaledHeight(7.5)
    },
    normalBlackBtnDisabledTxt: {
        color: '#fff',
        fontSize: scaledHeight(16),
        textAlign: 'center',
        width: '100%'
    },
    normalBlackBtnTxt: {
        color: '#fff',
        fontSize: scaledHeight(16),
        textAlign: 'center',
        width: '100%'
    },
    normalBlackDisabledBtn: {
        alignContent: 'center',
        alignItems: 'center',
        backgroundColor: '#544A54',
        borderColor: "#61285F45",
        borderWidth: 1,
        height: scaledHeight(50),
        justifyContent: 'center',
        marginHorizontal: scaledHeight(37),
        marginVertical: scaledHeight(7.5),
        opacity: 0.5,
    },
    normalWhiteBtn: {
        alignContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderColor: "#61285F45",
        borderWidth: 1,
        height: scaledHeight(50),
        justifyContent: 'center',
        marginHorizontal: scaledHeight(37),
        marginVertical: scaledHeight(7.5)
    },
    normalWhiteBtnTxt: {
        color: '#544A54',
        fontSize: scaledHeight(16),
        lineHeight: 22,
        textAlign: 'center',
        width: '100%'
    },
    offButtonStyle: {
        backgroundColor: '#B7B7B7',
        borderColor: '#56565A',
        borderRadius: 30,
        borderWidth: scaledHeight(1),
        height: scaledHeight(60),
        width: "50%",
    },
    offButtonStyleDisable: {
        backgroundColor: '#FFFFFF',
        borderColor: '#56565A',
        borderRadius: 30,
        borderWidth: scaledHeight(1),
        height: scaledHeight(60),
        marginLeft: "0%",
        width: "60%"
    },
    onButtonStyle: {
        backgroundColor: '#B7B7B7',
        borderColor: '#56565A',
        borderRadius: 30,
        borderWidth: scaledHeight(1),
        height: scaledHeight(60),
        marginLeft: "30%",
        width: "40%"
    },
    onButtonStyleDisable: {
        backgroundColor: '#FFFFFF',
        borderColor: '#56565A',
        borderRadius: 30,
        borderWidth: 1,
        height: scaledHeight(60),
        marginLeft: "10%",
        width: "67%"
    },
    stmtBoldTxtStyle: {
        color: "#54565B",
        fontSize: scaledHeight(18),
        fontWeight: 'bold',
        marginTop: '2%',
        width: "92%",
    },
    stmtSmallTextStyle: {
        color: "#54565B",
        fontSize: scaledHeight(15),
        marginTop: '2%',
        width: "92%",
    },
    stmtTxtStyle: {
        color: "#333333DE",
        fontSize: scaledHeight(18),
        marginTop: '2%',
        width: "92%",
    },
    subHeadingTxtStyle: {
        color: "#56565A",
        fontSize: scaledHeight(18),
        fontWeight: "bold",
        lineHeight: scaledHeight(22)
    },
    switchContainer: {
        marginTop: scaledHeight(20),
        width: '90%'
    },
    switchTextStyle: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginHorizontal: '2%',
        marginTop: '2%'
    },
    switchTxt: {
        color: '#54565B',
        fontSize: scaledHeight(13),
        fontWeight: '400'
    },
    textInputStyle: {
        marginLeft: "0%",
        marginRight: "0%",
        marginTop: scaledHeight(0),
        width: "100%"
    },
    titleContainerView: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    titleHeaderTextStyle: {
        color: '#56565A',
        fontSize: scaledHeight(24),
        fontWeight: 'bold'
    },
    titleTxtStyle: {
        color: "#56565A",
        fontSize: scaledHeight(18),
        fontWeight: "bold",
        paddingLeft: '4%'
    },
    topContainer: {
        borderColor: "#9DB4CE",
        borderWidth: scaledHeight(1),
        marginLeft: "4%",
        marginRight: "4%",
        paddingLeft: "4%",
        paddingRight: "4%",
        width: "90%"
    },
    topContainerTxtBold: {
        color: "#54565B",
        fontSize: scaledHeight(18),
        fontWeight: "bold",
        marginTop: "4%"
    },
    verifiedText: {
        color: '#EE3F5D',
        fontSize: scaledHeight(12),
        paddingBottom: scaledHeight(1),
        paddingTop: scaledHeight(1)
    },
    wireTransferTxt: {
        color: '#707070',
        fontSize: scaledHeight(16),
        lineHeight: scaledHeight(22),
        marginTop: '4%',
    },

});

export default styles;
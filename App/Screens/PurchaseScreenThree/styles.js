import { StyleSheet } from "react-native";
import { scaledHeight } from '../../Utils/Resolution';


export default styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F7FAFF',
        width: '100%'
    },
    mainFlex: {
        flex: 0.85
    },
    topContainer: {
        marginLeft: "4%",
        marginRight: "4%",
        width: "90%",
        borderColor: "#9DB4CE",
        borderWidth: scaledHeight(1),
        paddingLeft: "4%",
        paddingRight: "4%"
    },
    topContainerTxtBold: {
        color: "#54565B",
        fontSize: scaledHeight(18),
        fontWeight: "bold",
        marginTop: "4%"
    },
    flexDirectionStyle: {
        flexDirection: "row",
        marginBottom: "4%"
    },
    innerContainerStyle: {
        marginTop: "6%",
        paddingLeft: "4%",
        paddingRight: "4%"
    },
    headerText: {
        color: "#56565A",
        fontSize: scaledHeight(20),
        fontWeight: "bold",
        marginTop: scaledHeight(15)
    },
    marginTopStyle: {
        marginTop: "6%"
    },
    line: {
        backgroundColor: "#535353",
        opacity: 0.25,
        height: scaledHeight(1),
        width: "100%",
        marginTop: "4%",
        marginRight: "4%",
        marginBottom: "4%"
    },
    marginBottomStyle: {
        marginBottom: "4%"
    },
    stmtTxtStyle: {
        color: "#333333DE",
        fontSize: scaledHeight(18),
        width: "92%",
        marginTop: '2%'
    },
    stmtSmallTextStyle: {
        color: "#54565B",
        fontSize: scaledHeight(15),
        width: "92%",
        marginTop: '2%',
    },
    stmtBoldTxtStyle: {
        color: "#54565B",
        fontSize: scaledHeight(18),
        width: "92%",
        marginTop: '2%',
        fontWeight: 'bold'
    },
    dummyTextStyle: {
        color: "#333333DE",
        fontSize: scaledHeight(14),
        fontWeight: "400",
        lineHeight: scaledHeight(20),
        marginTop: '4%'
    },
    subHeadingTxtStyle: {
        color: "#56565A",
        fontSize: scaledHeight(18),
        fontWeight: "bold",
        lineHeight: scaledHeight(22)
    },
    boxStyleView: {
        borderColor: '#9DB4CE',
        borderWidth: scaledHeight(1),
        backgroundColor: '#FFFFFF',
        height: scaledHeight(80),
        marginTop: '6%',
        flexDirection: 'row',
    },
    boxStyleViewSelected: {
        borderColor: "#B5E198",
        borderWidth: scaledHeight(4),
        backgroundColor: '#FFFFFF',
        height: scaledHeight(80),
        marginTop: '6%',
        flexDirection: 'row',
    },
    iconContainerView: {
        backgroundColor: '#E9E9E9',
        width: scaledHeight(76),
        height: scaledHeight(66),
        margin: scaledHeight(7),
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageStyle: {
        borderColor: "#B5E198",
        borderWidth: scaledHeight(1),
    },
    bankTitle: {
        color: "#56565A",
        fontSize: scaledHeight(16),
        fontWeight: "bold",
        paddingLeft: '4%'
    },
    bankDisc: {
        color: "#56565A",
        fontSize: scaledHeight(14),
        paddingTop: scaledHeight(2),
        opacity: 0.5,
    },
    verifiedText: {
        color: '#EE3F5D',
        fontSize: scaledHeight(12),
        paddingTop: scaledHeight(1),
        paddingBottom: scaledHeight(1)
    },
    titleContainerView: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    titleTxtStyle: {
        color: "#56565A",
        fontSize: scaledHeight(18),
        fontWeight: "bold",
        paddingLeft: '4%'
    },
    offButtonStyle: {
        borderColor: '#56565A',
        borderRadius: 30,
        height: scaledHeight(60),
        borderWidth: scaledHeight(1),
        width: "50%",
        backgroundColor: '#B7B7B7',
    },
    onButtonStyleDisable: {
        borderColor: '#56565A',
        borderRadius: 30,
        height: scaledHeight(60),
        borderWidth: 1,
        marginLeft: "10%",
        width: "67%",
        backgroundColor: '#FFFFFF',
    },
    offButtonStyleDisable: {
        borderColor: '#56565A',
        borderRadius: 30,
        height: scaledHeight(60),
        borderWidth: scaledHeight(1),
        width: "60%",
        marginLeft: "0%",
        backgroundColor: '#FFFFFF',
    },
    onButtonStyle: {
        borderColor: '#56565A',
        borderRadius: 30,
        height: scaledHeight(60),
        borderWidth: scaledHeight(1),
        width: "40%",
        marginLeft: "30%",
        backgroundColor: '#B7B7B7',
    },
    TextOnStyle: {
        color: '#56565A',
        fontSize: scaledHeight(14),
        fontWeight: 'bold',
        justifyContent: 'center',
        textAlign: 'center',
        marginRight: '30%',
        paddingLeft: "10%"
    },
    TextOffStyle: {
        color: '#544A54',
        opacity: 0.5,
        fontSize: scaledHeight(14),
        fontWeight: 'bold',
        textAlign: 'center',
        paddingLeft: "8%"
    },
    TextOffStyleBold: {
        color: '#544A54',
        opacity: 0.5,
        fontSize: scaledHeight(14),
        fontWeight: 'bold',
        textAlign: 'center',
        paddingLeft: "3%"
    },
    switchContainer: {
        width: '90%',
        marginTop: scaledHeight(20),
    },
    switchTextStyle: {
        justifyContent: 'space-around',
        marginTop: '2%',
        marginHorizontal: '2%',
        flexDirection: 'row'
    },
    switchTxt: {
        color: '#54565B',
        fontSize: scaledHeight(13),
        fontWeight: '400'
    },
    dropDownLayout: {
        width: "100%",
        marginLeft: "0%",
        marginRight: "0%",
    },
    dropDownTextName: {
        width: "100%",
        paddingLeft: "0%",
        paddingRight: "0%",
        marginLeft: "0%",
        marginRight: "0%",
        color: "rgba(51, 51, 51, 0.87)",
        fontSize: scaledHeight(16),
        fontWeight: "bold",
        marginTop: scaledHeight(0)
    },
    textInputStyle: {
        width: "100%",
        marginLeft: "0%",
        marginRight: "0%",
        marginTop: scaledHeight(0)
    },
    dropDownPostition: {
        width: "100%",
        marginLeft: scaledHeight(20),
        marginRight: scaledHeight(20),
        position: "absolute",
        left: 0
    },
    labOR: {
        marginVertical: scaledHeight(12),
        fontSize: scaledHeight(18),
        color: '#333333DE',
        lineHeight: 22,
        textAlign: 'center',
        fontWeight: '600'
    },
    checkOrderStmtView: {
        backgroundColor: '#F8F6DE',
        borderColor: '#61285F45',
        borderWidth: scaledHeight(1),
        marginVertical: '4%',
        paddingLeft: '4%',
        paddingTop: '4%',
        paddingBottom: '4%',
        width: '100%'
    },
    checkOrderTitle: {
        color: '#56565A',
        fontSize: scaledHeight(22),
        fontWeight: 'bold',
        lineHeight: scaledHeight(35)
    },
    checkOrderText: {
        marginTop: '4%',
        color: '#333333DE',
        fontSize: scaledHeight(16),
        fontWeight: 'bold',
        width: '90%',
        lineHeight: scaledHeight(22)
    },
    wireTransferTxt: {
        color: '#707070',
        fontSize: scaledHeight(16),
        lineHeight: scaledHeight(22),
        marginTop: '4%',
    },
    addressText:{
        color: '#707070',
        fontSize: scaledHeight(16),
        lineHeight: scaledHeight(22),
        marginTop: '4%',
        width:'60%'
    },
    btnGrp: {
        marginHorizontal: scaledHeight(12),
        marginVertical: scaledHeight(50),
        flexGrow: 1,
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    },
    normalWhiteBtn: {
        borderWidth: 1,
        borderColor: "#61285F45",
        height: scaledHeight(50),
        backgroundColor: '#fff',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        marginVertical: scaledHeight(7.5),
        marginHorizontal: scaledHeight(37)

    },
    normalWhiteBtnTxt: {
        fontSize: scaledHeight(16),
        color: '#544A54',
        width: '100%',
        textAlign: 'center',
        lineHeight: 22
    },
    normalBlackBtn: {
        borderWidth: 1,
        borderColor: "#61285F45",
        height: scaledHeight(50),
        backgroundColor: '#544A54',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        marginVertical: scaledHeight(7.5),
        marginHorizontal: scaledHeight(37)


    },
    normalBlackBtnTxt: {
        fontSize: scaledHeight(16),
        color: '#fff',
        width: '100%',
        textAlign: 'center'
    },

    normalBlackDisabledBtn: {
        borderWidth: 1,
        opacity: 0.5,
        borderColor: "#61285F45",
        height: scaledHeight(50),
        backgroundColor: '#544A54',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        marginVertical: scaledHeight(7.5),
        marginHorizontal: scaledHeight(37)
    },
    normalBlackBtnDisabledTxt: {
        fontSize: scaledHeight(16),
        color: '#fff',
        width: '100%',
        textAlign: 'center'
    },
    fullLine: {
        backgroundColor: '#7B8288',
        opacity: 0.4,
        height: scaledHeight(1),
        marginTop: scaledHeight(40),
    },
    tNCFlex: {
        marginLeft: "4%",
        marginTop: scaledHeight(41),
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
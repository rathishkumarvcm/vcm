import { StyleSheet } from "react-native";
import { scaledHeight } from '../../Utils/Resolution';


const styles = StyleSheet.create({
    accountFlex: {
        borderColor: '#9DB4CE',
        borderWidth: scaledHeight(1),
        flexDirection: 'column',
        height: scaledHeight(82),
        marginBottom: "6%"
    },
    accountNumberText: {
        color: '#54565B',
        fontSize: scaledHeight(18),
        fontWeight: 'bold',
        marginLeft: scaledHeight(10),
        marginTop: scaledHeight(10),
    },
    addBankAccountFlex: {
        borderColor: '#5D83AE99',
        borderWidth: scaledHeight(1),
        flexDirection: 'row',
        height: scaledHeight(80),
        marginLeft: '4%',
        marginRight: '4%',
        marginTop: scaledHeight(24)
    },
    addressBox: {
        backgroundColor: '#F1F1F1',
        borderColor: '#DEDEDF',
        borderWidth: scaledHeight(1),
        color: '#56565A',
        fontSize: scaledHeight(16),
        height: scaledHeight(48),
        marginTop: scaledHeight(10),
        opacity: 0.7,
        paddingLeft: "2%",
        width: "100%",
    },
    amountBeforeTaxVal: {
        alignContent: 'center',
        borderColor: '#DEDEDF',
        borderWidth: scaledHeight(1),
        color: '#56565A',
        fontSize: scaledHeight(16),
        height: scaledHeight(48),
        justifyContent: 'center',
        marginLeft: scaledHeight(16),
        opacity: 0.8,
        width: scaledHeight(318),
    },
    amountBeforeTaxesVal: {
        borderColor: '#DEDEDF',
        borderWidth: scaledHeight(1),
        color: '#56565A',
        fontSize: scaledHeight(16),
        height: scaledHeight(48),
        marginLeft: "3%",
        width: "92%",
    },
    backButtonFlex: {
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        borderColor: '#61285F45',
        borderWidth: scaledHeight(1),
        height: scaledHeight(50),
        justifyContent: 'center',
        marginTop: scaledHeight(18)
    },
    backButtonText: {
        color: '#544A54',
        fontSize: scaledHeight(16),
        fontWeight: 'bold',
    },
    bankAccountFlex: {
        borderColor: '#5D83AE99',
        borderWidth: scaledHeight(1),
        flexDirection: 'row',
    },
    bankAccountName: {
        color: '#56565A',
        fontSize: scaledHeight(16),
        fontWeight: 'bold',
        height: scaledHeight(19),
        paddingBottom: scaledHeight(2),
        paddingTop: scaledHeight(1),
    },
    bankAccountNo: {
        color: '#56565A',
        fontSize: scaledHeight(14),
        height: scaledHeight(17),
        paddingBottom: scaledHeight(2),
        paddingTop: scaledHeight(1),
    },
    bankDetailsFlex: {
        alignContent: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        marginLeft: "10%",
    },
    bankIconFlex: {
        alignItems: 'center',
        backgroundColor: '#E9E9E9',
        height: scaledHeight(66),
        justifyContent: 'center',
        margin: scaledHeight(7),
        width: scaledHeight(76),
    },
    bankIconStyle: {
        alignSelf: 'center',
        height: scaledHeight(45),
        width: scaledHeight(43),
    },
    blackTextBold16: {
        color: '#333333DE',
        fontSize: scaledHeight(16),
        fontWeight: 'bold',
        height: scaledHeight(19),
        marginTop: scaledHeight(13)
    },
    blackTextBold16px: {
        color: '#333333DE',
        fontSize: scaledHeight(16),
        fontWeight: 'bold',
        height: scaledHeight(19),
    },
    city: {
        backgroundColor: '#F1F1F1',
        borderColor: '#DEDEDF',
        borderWidth: scaledHeight(1),
        color: '#56565A',
        fontSize: scaledHeight(16),
        height: scaledHeight(48),
        marginTop: scaledHeight(10),
        opacity: 0.7,
        paddingLeft: "2%",
        width: "45%",
    },
    cityHeading: {
        color: '#333333DE',
        fontSize: scaledHeight(16),
        fontWeight: 'bold',
        marginTop: scaledHeight(20)
    },
    container: {
        backgroundColor: '#F7FAFF',
        flex: 1,
        width: '100%'
    },

    dollarSkin: {
        color: '#333333DE',
        fontSize: scaledHeight(16),
        fontWeight: 'bold',
        height: scaledHeight(48),
        paddingTop: scaledHeight(15),
        width: "5%",
    },
    dropDownLayout: {
        marginLeft: "0%",
        marginRight: "0%",
        marginTop: scaledHeight(26),
        paddingLeft: '0%',
        width: "100%",
    },
    dropDownText: {
        marginLeft: "0%",
        paddingLeft: "2%",
        width: "98%",
    },
    emptyFlex: {
        height: scaledHeight(50)
    },
    flex2: {
        marginLeft: "4%",
        marginRight: "4%",
    },
    flex4: {
        height: scaledHeight(951),
        marginLeft: "4%",
        marginRight: "4%",
        marginTop: "4%"
    },
    flex4Hide: {
        height: scaledHeight(180),
        marginLeft: "4%",
        marginRight: "4%",
    },
    flex4a: {
        flexDirection: 'column',
        height: scaledHeight(140),
    },
    flex4b: {
        height: scaledHeight(782),
    },
    flex5: {
        flexDirection: 'column',
        marginLeft: "4%",
        marginRight: "4%",
        marginTop: "4%",
    },
    flex6: {
        flexDirection: 'column',
        height: scaledHeight(205),
        marginLeft: "10%",
        marginRight: "10%",
        marginTop: "12%",
    },
    flexCityNState: {
        flexDirection: 'row',
        justifyContent: "space-between"
    },
    flexGreyBG: {
        backgroundColor: '#F2F2F2',
        borderColor: '#DADBDB',
        borderWidth: scaledHeight(1),
        height: scaledHeight(78),
        marginTop: scaledHeight(10)
    },
    flexTaxAccounting: {
        height: scaledHeight(40),
    },
    fullLine: {
        backgroundColor: '#7B8288',
        height: scaledHeight(1),
        marginTop: scaledHeight(40),
        opacity: 0.4,
    },
    fundSourceContent: {
        color: '#54565B',
        fontSize: scaledHeight(14),
        marginTop: scaledHeight(21),
    },

    greyText14pxRegular: {
        color: '#56565A',
        fontSize: scaledHeight(14),
        padding: "2%"
    },
    greyTextRegular14px: {
        color: '#54565B',
        fontSize: scaledHeight(14),
        marginTop: scaledHeight(13),
    },
    headerFlex: {
        flexDirection: 'row',
        height: scaledHeight(29),
    },
    headerText: {
        color: '#56565A',
        fontSize: scaledHeight(22),
        fontWeight: 'bold',
    },
    horizontalFlex: {
        flexDirection: 'row'
    },
    inputStyle: {
        color: '#56565A',
        fontSize: scaledHeight(16),
        paddingLeft: '1%'
    },
    line: {
        backgroundColor: '#535353',
        height: scaledHeight(1),
        marginTop: '4%',
        opacity: 0.25,
        width: "100%",
    },
    mainFlex: {
        flex: 0.85
    },
    messageFlex: {
        backgroundColor: '#F8F6DE',
        borderColor: '#61285F45',
        borderWidth: scaledHeight(1),
        marginLeft: "4%",
        marginRight: "4%",
        marginTop: scaledHeight(25),
    },
    messageText: {
        color: '#333333DE',
        fontSize: scaledHeight(16),
        fontWeight: 'bold',
        padding: "4%"
    },
    offButtonStyle: {
        backgroundColor: '#B7B7B7',
        borderColor: '#56565A',
        borderRadius: 30,
        borderWidth: scaledHeight(1),
        height: scaledHeight(61),
        position: 'absolute',
        width: "55%",
    },
    offButtonStyleDisable: {
        backgroundColor: '#FFFFFF',
        borderColor: '#56565A',
        borderRadius: 30,
        borderWidth: scaledHeight(1),
        height: scaledHeight(61),
        marginLeft: "0%",
        width: "60%",
    },
    offlineMethodContent: {
        color: '#333333DE',
        fontSize: scaledHeight(14),
        marginTop: "3%",
    },
    offlineMethodFlex: {
        justifyContent: 'space-between',
        marginBottom: "4%"
    },
    onButtonStyle: {
        backgroundColor: '#B7B7B7',
        borderColor: '#56565A',
        borderRadius: 30,
        borderWidth: scaledHeight(1),
        height: scaledHeight(61),
        marginLeft: "30%",
        position: 'absolute',
        width: "40%",
    },
    onButtonStyleDisable: {
        backgroundColor: '#FFFFFF',
        borderColor: '#56565A',
        borderRadius: 30,
        borderWidth: 1,
        height: scaledHeight(61),
        marginLeft: "10%",
        width: "67%",
    },
    onlineMethodFlex: {
        justifyContent: 'space-between',
    },
    or: {
        color: '#333333DE',
        fontSize: scaledHeight(18),
        marginBottom: scaledHeight(15),
        marginTop: scaledHeight(34),
        textAlign: 'center'
    },
    reqAmountTypeStyle: {
        color: '#56565A',
        fontSize: scaledHeight(16),
        width: "100%",
    },
    selectedBankAccountFlex: {
        borderColor: '#B5E198',
        borderWidth: scaledHeight(4),
        height: scaledHeight(89),
        marginTop: scaledHeight(24)
    },
    stateTaxFlex: {
        height: scaledHeight(82),
        marginTop: scaledHeight(26),
    },
    stateTaxVal: {
        backgroundColor: '#FFFFFF',
        borderColor: '#DEDEDF',
        borderWidth: scaledHeight(1),
        color: '#56565A',
        fontSize: scaledHeight(16),
        height: scaledHeight(48),
        marginTop: scaledHeight(15),
        paddingLeft: "4%",
        paddingTop: scaledHeight(15),
        width: "100%",
    },
    stateTaxValFlex: {
        alignContent: 'center',
        borderColor: '#DEDEDF',
        borderWidth: scaledHeight(1),
        height: scaledHeight(48),
        justifyContent: 'center',
        marginTop: scaledHeight(15),
        width: scaledHeight(345),
    },
    statusText: {
        color: '#EE3F5D',
        fontSize: scaledHeight(12),
        paddingBottom: scaledHeight(1),
        paddingTop: scaledHeight(1),
    },
    stateTaxToDollarFlex: {
        flexDirection: 'row',
        marginLeft: "10%",
        marginTop: "4%"
    },
    stateTaxToDollarText: {
        backgroundColor: '#F1F1F1',
        borderColor: '#DEDEDF',
        borderWidth: scaledHeight(1),
        color: '#56565A',
        fontSize: scaledHeight(16),
        height: scaledHeight(48),
        marginLeft: "6%",
        opacity: 0.8,
        paddingLeft: "4%",
        paddingTop: scaledHeight(15),
        width: "58%",
    },
    stateTaxInputStyle: {
        borderColor: '#DEDEDF',
        borderWidth: scaledHeight(1),
        color: '#56565A',
        fontSize: scaledHeight(16),
        height: scaledHeight(48),
        marginTop: scaledHeight(15),
        width: "45%",
    },
    subHeadingText: {
        color: '#56565A',
        fontSize: scaledHeight(18),
        fontWeight: 'bold',
        marginTop: "3%",
    },
    submitFlex: {
        alignItems: 'center',
        backgroundColor: '#544A54',
        borderColor: '#544A54',
        borderWidth: scaledHeight(1),
        height: scaledHeight(50),
        justifyContent: 'center',
        marginTop: scaledHeight(19),
    },
    submitFlexDisabled: {
        alignItems: 'center',
        backgroundColor: '#544A54',
        borderColor: '#544A54',
        borderWidth: scaledHeight(1),
        height: scaledHeight(50),
        justifyContent: 'center',
        marginTop: scaledHeight(19),
        opacity: 0.5
    },
    submitText: {
        color: '#FFFFFF',
        fontSize: scaledHeight(16),
        fontWeight: 'bold',
    },
    switchFlex: {
        height: scaledHeight(60),
    },
    tNCFlex: {
        marginLeft: "4%",
        marginTop: scaledHeight(41),
        width: "92%",
    },
    tNcBody: {
        color: '#56565A',
        fontSize: scaledHeight(16),
    },
    tNcHeader: {
        color: '#56565A',
        fontSize: scaledHeight(16),
        fontWeight: 'bold'
    },
    TextOffStyle: {
        color: '#544A54',
        fontSize: scaledHeight(14),
        fontWeight: 'bold',
        marginLeft: "4%",
        opacity: 0.5,
        textAlign: 'left',
    },
    TextOffStyleWithholdtax: {
        color: '#544A54',
        fontSize: scaledHeight(14),
        fontWeight: 'bold',
        marginLeft: "38%",
        opacity: 0.5,
        textAlign: 'right',
    },
    TextOnStyle: {
        color: '#56565A',
        fontSize: scaledHeight(14),
        fontWeight: 'bold',
        justifyContent: 'flex-start',
        marginLeft: "0%",
        paddingLeft: "10%"
    },
    totalWithdrawalFlex: {
        flexDirection: 'row',
        height: scaledHeight(48),
        marginTop: scaledHeight(15),
    },
    totalWithdrawalVal: {
        backgroundColor: '#F1F1F1',
        borderColor: '#DEDEDF',
        borderWidth: scaledHeight(1),
        color: '#56565A',
        fontSize: scaledHeight(16),
        height: scaledHeight(48),
        marginLeft: "3%",
        opacity: 0.8,
        paddingLeft: "2%",
        paddingTop: scaledHeight(15),
        width: "92%",
    },
    unSelectedBankAccountFlex: {
        borderColor: '#FFFFFF',
        borderWidth: scaledHeight(4),
        height: scaledHeight(89),
        marginTop: scaledHeight(24)
    },
});
export default styles;
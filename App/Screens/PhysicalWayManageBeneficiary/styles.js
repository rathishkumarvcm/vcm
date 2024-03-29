import { StyleSheet } from "react-native";
import { scaledHeight } from '../../Utils/Resolution';


const styles = StyleSheet.create({
    btnGrp: {
        alignContent: 'center',
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center',
        marginHorizontal: scaledHeight(12),
        marginVertical: scaledHeight(50),
    },
    colonTxt: {
        color: '#333333DE',
        fontSize: scaledHeight(12),
        fontWeight: '600',
        lineHeight: 28,
        paddingLeft: '2%',
        paddingRight: '2%'
    },
    container: {
        backgroundColor: '#F7FAFF',
        flex: 1,
        width: '100%'
    },
    contentDetailView: {
        flex: 1,
        flexDirection: 'row',
        marginTop: scaledHeight(5)
    },
    contentTextStyle: {
        color: '#56565A',
        fontSize: scaledHeight(16),
        lineHeight: 22,
        textAlign: 'left'
    },
    detailTxtTitle: {
        color: '#333333DE',
        flex: 0.35,
        fontSize: scaledHeight(12),
        fontWeight: '400',
        lineHeight: 28,
        textAlign: 'left',
    },
    detailTxtValue: {
        color: '#333333DE',
        flex: 0.7,
        fontSize: scaledHeight(12),
        fontWeight: '600',
        lineHeight: 28,
        textAlign: 'left'
    },
    detailsContainer: {
        flex: 1,
        marginTop: scaledHeight(20)
    },
    downloadContainer: {
        borderColor: '#D8D8D8',
        borderWidth: scaledHeight(1),
        marginTop: '4%',
        shadowColor: "#0000000F",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.2,
    },
    downloadDescTxt: {
        color: '#56565A',
        fontSize: scaledHeight(16),
        fontWeight: '400',
        lineHeight: 22,
        marginLeft: '4%',
        marginRight: '4%',
        marginTop: scaledHeight(17),
        textAlign: 'left',
    },
    downloadHeadingTxt: {
        color: '#56565A',
        fontSize: scaledHeight(25),
        fontWeight: "200",
        lineHeight: scaledHeight(35),
        marginHorizontal: scaledHeight(15),
        marginTop: scaledHeight(25)
    },
    downloadPdfBtn: {
        alignContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        borderColor: "#5D83AE",
        borderWidth: 1,
        height: scaledHeight(50),
        justifyContent: 'center',
        marginHorizontal: scaledHeight(15),
        marginVertical: scaledHeight(25),
        width:'50%'
    },
    downloadPdfBtnTxt: {
        color: '#5D83AE',
        fontSize: scaledHeight(16),
        fontWeight: 'bold',
        lineHeight: 20,
        textAlign: 'center'
    },
    fileDescTextStyle: {
        color: '#707070',
        flex: 0.5,
        fontSize: scaledHeight(14),
        marginHorizontal: scaledHeight(20),
        marginLeft: scaledHeight(30)
    },
    fileDescTextStyleError: {
        color: '#de421b',
        flex: 0.5,
        fontSize: scaledHeight(14),
        marginHorizontal: scaledHeight(20),
        marginLeft: scaledHeight(30)
    },
    fullLine: {
        backgroundColor: '#7B8288',
        height: scaledHeight(1),
        marginTop: scaledHeight(40),
        opacity: 0.4,
    },
    highlightedTextTitle: {
        color: '#5D83AE',
        fontSize: scaledHeight(16),
        fontWeight: '400',
        lineHeight: 22,
        textAlign: 'left'
    },
    lastMarginTop: {
        marginBottom: scaledHeight(15),
        marginTop: scaledHeight(40),
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
    mailingAddName: {
        color: '#56565A',
        fontSize: scaledHeight(20),
        fontWeight: 'bold',
        lineHeight: 22,
        marginTop: scaledHeight(20),
        textAlign: 'left'
    },
    mailingAddress: {
        color: '#56565A',
        fontSize: scaledHeight(16),
        fontWeight: '400',
        lineHeight: 22,
        marginTop: scaledHeight(20),
        textAlign: 'left',
        width: scaledHeight(214),
    },
    mailingTitle: {
        color: '#56565A',
        fontSize: scaledHeight(16),
        fontWeight: 'bold',
        lineHeight: 22,
        marginTop: scaledHeight(30),
        textAlign: 'left'
    },
    mainFlex: {
        flex: 0.85
    },
    mainHeadingStyles: {
        color: '#131414',
        fontSize: scaledHeight(22),
        fontWeight: 'bold',
        lineHeight: 25,
        textAlign: 'left'
    },
    marginTopStyle: {
        marginTop: scaledHeight(15)
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
        fontWeight: '600',
        textAlign: 'center',
        width: '100%'
    },
    normalBlackBtnTxt: {
        color: '#fff',
        fontSize: scaledHeight(16),
        fontWeight: '600',
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
        opacity: 0.5
    },
    normalTextTitle: {
        color: '#56565A',
        fontSize: scaledHeight(16),
        fontWeight: '400',
        lineHeight: 22,
        textAlign: 'left'
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
        marginVertical: scaledHeight(7.5),
    },
    normalWhiteBtnTxt: {
        color: '#544A54',
        fontSize: scaledHeight(16),
        fontWeight: '600',
        lineHeight: 22,
        textAlign: 'center',
        width: '100%'
    },
    orTextStyle: {
        color: '#56565A',
        fontSize: scaledHeight(20),
        fontWeight: 'bold',
        lineHeight: 22,
        marginBottom: scaledHeight(25),
        marginTop: scaledHeight(40),
        textAlign: 'left',
    },
    paddingHorizontalStyle: {
        paddingLeft: '4%',
        paddingRight: '4%',
        width: '100%'
    },
    selectBtnStyle: {
        alignContent: 'center',
        alignItems: 'center',
        backgroundColor: '#B2B2B2',
        borderColor: "#B2B2B2",
        borderRadius: scaledHeight(2),
        borderWidth: 1,
        height: scaledHeight(32),
        justifyContent: 'center',
        shadowColor: "#00000029",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.2,
        width: '30%',
    },
    selectFileText: {
        color: '#FFFFFF',
        fontSize: scaledHeight(14),
        lineHeight: 20
    },
    selectedFileDescContainer: {
        backgroundColor: '#FFFFFF',
        flexDirection: 'row',
        paddingVertical: scaledHeight(10),
    },
    tNCFlex: {
        marginLeft: "4%",
        marginTop: scaledHeight(41),
        width: "92%"
    },
    tNcBody: {
        color: '#56565A',
        fontSize: scaledHeight(16)
    },
    tNcHeader: {
        color: '#56565A',
        fontSize: scaledHeight(16),
        fontWeight: 'bold'
    },
    uploadBtnContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: scaledHeight(35)
    },
    uploadIconBtn: {
        alignContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    uploadTxt: {
        color: '#707070',
        fontSize: scaledHeight(20),
        lineHeight: 20,
        marginTop: '2%',
        textDecorationLine: 'underline'
    }
});

export default styles;
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
        marginVertical: scaledHeight(7.5),

    },
    normalBlackBtnTxt: {
        color: '#fff',
        fontSize: scaledHeight(16),
        fontWeight: '600',
        textAlign: 'center',
        width: '100%'
    },
    normalBlackBtnDisabledTxt: {
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
            height: 3
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
        width: scaledHeight(110),
    },
    selectFileText: {
        color: '#FFFFFF',
        fontSize: scaledHeight(14),
        lineHeight: 20
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
    },
    tNCFlex: {
        marginLeft: "4%",
        marginTop: scaledHeight(41),
        width: "92%"
    },
    tNcHeader: {
        color: '#56565A',
        fontSize: scaledHeight(16),
        fontWeight: 'bold'
    },
    tNcBody: {
        color: '#56565A',
        fontSize: scaledHeight(16)
    }
});

export default styles;
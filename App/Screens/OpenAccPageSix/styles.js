import { StyleSheet } from "react-native";
import { scaledHeight } from '../../Utils/Resolution';



const styles = StyleSheet.create({
    IRSConsentContainer: {
        flexGrow: 1,
        marginTop: scaledHeight(22)
    },

    agreeSectionGrp: {
        backgroundColor: '#E8ECEE',
        borderColor: '#7070701A',
        borderWidth: 1,
        flexGrow: 1,
        marginTop: scaledHeight(10),
        paddingHorizontal: scaledHeight(12),
        paddingVertical: scaledHeight(12)

    },

    agreeTermsTxt: {
        color: '#333333DE',
        fontSize: scaledHeight(16),
        lineHeight: scaledHeight(19),
        textAlign: 'left',
        // marginTop:scaledHeight(5)

    },
    btnGrp: {
        alignContent: 'center',
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center',
        marginHorizontal: scaledHeight(12),
        marginVertical: scaledHeight(50)
    },
    container: {
        backgroundColor: '#F7FAFF',
        flex: 1,
        width: '100%'
    },
    disclaimerTitleTxt: { // termsofuseText
        fontSize: scaledHeight(16),
        marginBottom: scaledHeight(10),
        fontWeight: 'bold',
        color: '#56565A',
        lineHeight: 25
    },
    disclaimerTxt: {
        color: '#56565A',
        fontSize: scaledHeight(16),
        lineHeight: 25

    },

    errMsg: {
        color: 'red',
        fontSize: scaledHeight(12),
        marginVertical: scaledHeight(12),

    },


    headings: {
        color: '#000000',
        fontSize: scaledHeight(20),
        fontWeight: 'bold',
        lineHeight: scaledHeight(26),
        textAlign: 'left',
        width: '80%',
    },
    lblLine: {
        //  width:"100%",
        flexGrow: 1,
        marginTop: scaledHeight(9.5),
        height: scaledHeight(1),
        backgroundColor: '#707070',
        opacity: 0.5
    },
    lblLine1: {
        // width:"100%",

        height: scaledHeight(1),
        backgroundColor: '#696069'
    },
    lblRadioBtnTxt: {
        color: '#333333DE',
        fontSize: scaledHeight(16),
        //  lineHeight:22,
        flexWrap: 'wrap'
    },

    lblRadioDescTxt: {
        color: '#56565A',
        flexWrap: 'wrap',
        fontSize: scaledHeight(14),
        lineHeight: 22,
        marginTop: scaledHeight(14),
        opacity: .65
    },
    lblTxt: {
        color: 'rgba(51, 51, 51, 0.87)',
        fontSize: scaledHeight(16),
        fontWeight: 'bold',
        marginTop: scaledHeight(25)

    },
    moreTxt: {
        color: '#61285F',
        fontSize: scaledHeight(16),
        fontWeight: 'bold'
    },
    newVictorySection: {
        //   marginTop: scaledHeight(150),
        padding: scaledHeight(12),
        width: '100%',
        flexGrow: 1,
        backgroundColor: '#FFFFFF',


    },
    normalBlackBtn: {
        //   width: '90%',
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
        //   width: '90%',
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
    normalWhiteBtn: {
        //   width: '90%',
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
        color: '#544A54',
        fontSize: scaledHeight(16),
        lineHeight: 22,
        textAlign: 'center',
        width: '100%'
    },
    pdfFileDescTxt: {
        color: '#333333DE',
        fontSize: scaledHeight(16),
        lineHeight: scaledHeight(19),
        textAlign: 'left',
        // marginTop:scaledHeight(5)
    },
    pdfFileNameTxt: {
        color: '#0D7CB5DE',
        fontSize: scaledHeight(16),
        fontWeight: 'bold',
        lineHeight: scaledHeight(19),
        textAlign: 'left',
    },
    pdfFileTxt: {
        color: '#56565A',
        fontSize: scaledHeight(16),
        lineHeight: scaledHeight(22),
        textAlign: 'left',
    },
    pdfListContainer: {
        flexGrow: 1,
        marginTop: scaledHeight(5)
    },



    pdfRowContainer: {
        flexDirection: 'row',
        flexGrow: 1,
        flexWrap: 'wrap',
        marginVertical: scaledHeight(10.5)
    },
    pdfSectionGrp: {
        backgroundColor: '#FFFFFF',
        borderColor: '#7070701A',
        borderWidth: 1,
        flexGrow: 1,
        marginTop: scaledHeight(26),
        paddingHorizontal: scaledHeight(12),
        paddingVertical: scaledHeight(12)

    },


    radioBtnColGrp: {
        flexGrow: 1,
        marginTop: scaledHeight(19)
    },
    radioBtnGrp: {
        flexDirection: 'row',
        flexGrow: 1,
        marginTop: scaledHeight(19)
    },
    scrollView: {
        flex: .85
    },
    sectionDescTxt: {
        color: '#56565A',
        fontSize: scaledHeight(15),
        lineHeight: 22,
        marginTop: scaledHeight(8)

    },
    sectionGrp: {
        flexGrow: 1,
        marginHorizontal: scaledHeight(12),
        marginTop: scaledHeight(31),
        overflow: 'hidden'
    },
    touchItem: {
        marginTop: scaledHeight(16),
    }





});

export default styles;

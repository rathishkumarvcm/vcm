import { StyleSheet } from "react-native";
import { scaledHeight } from '../../Utils/Resolution';



export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F7FAFF',
        width: '100%'
    },

    sectionGrp: {
        overflow: 'hidden',
        marginHorizontal: scaledHeight(12),
        marginTop: scaledHeight(0),
        flexGrow: 1
    },
    headerGrp: {
        overflow: 'hidden',
        marginHorizontal: scaledHeight(12),
        marginTop: scaledHeight(0),
        flexGrow: 1,
        flexWrap: 'wrap',
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'flex-start'
    },

    headings: {
        textAlign: 'left',
        fontSize: scaledHeight(20),
        fontWeight: 'bold',
        color: '#535353',
        lineHeight: 22,
        flexWrap: 'wrap'

    },
    subHeadings: {
        textAlign: 'left',
        fontSize: scaledHeight(20),
        color: '#535353',
        lineHeight: 22,
        flexWrap: 'wrap'

    },
    headingDescTxt: {
        marginTop: scaledHeight(19.5),
        fontSize: scaledHeight(16),
        color: '#333333DE',
        opacity: .75,
        lineHeight: 22

    },
    titleBoldTxt: {
        fontSize: scaledHeight(16),
        fontWeight: 'bold',
        color: '#333333DE',
        opacity: .75,
        lineHeight: 22

    },
    ESASignGrp: {
        overflow: 'hidden',
        marginHorizontal: scaledHeight(12),
        marginTop: scaledHeight(0),
        flexGrow: 1,
        backgroundColor: '#ECEEEF',
        borderColor: '#CFD1D2',
        borderWidth: 1,
        paddingHorizontal: scaledHeight(20),
        paddingVertical: scaledHeight(26),


    },
    titleDescTxt: {
        marginVertical: scaledHeight(23),

        fontSize: scaledHeight(14),
        color: '#333333DE',
        opacity: .75,
        lineHeight: 22

    },

    printSaveBtn: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginTop: scaledHeight(0)
    },
    printSaveBtnTxt: {
        fontSize: scaledHeight(14),
        color: '#61285FDE',
        textAlign: 'right',
        lineHeight: 17
    },
    lblSep: {
        marginHorizontal: scaledHeight(10),
        width: scaledHeight(1),
        backgroundColor: '#333333DE'
    },

    ESASignContentSection: {
        overflow: 'hidden',
        marginTop: scaledHeight(13),
        flexGrow: 1,
        backgroundColor: '#FFFFFF',
        borderColor: '#C4C4C4',
        borderWidth: 1,
        paddingHorizontal: scaledHeight(23),
        paddingVertical: scaledHeight(23)


    },
    signBlackBtn: {
        width: '75%',
        borderWidth: 1,
        borderColor: "#61285F45",
        borderRadius: scaledHeight(24),
        height: scaledHeight(50),
        backgroundColor: '#544A54',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',



    },
    signBlackBtnTxt: {
        fontSize: scaledHeight(16),
        color: '#fff',
        width: '100%',
        textAlign: 'center'
    },
    agreeTxt: {
        marginBottom: scaledHeight(50),
        width:"100%",
        textAlign:"left",
        fontSize: scaledHeight(14),
        fontWeight: 'bold',
        color: '#333333DE',
        opacity: .75,
        lineHeight: 22

    },

    lblLine: {
        // width:"100%",
        flexGrow: 1,
        marginTop: scaledHeight(9.5),
        height: scaledHeight(1),
        backgroundColor: '#707070',
        opacity: 0.5
    },

    lblTxt: {
        color: 'rgba(51, 51, 51, 0.87)',
        fontSize: scaledHeight(16),
        fontWeight: 'bold',
        marginTop: scaledHeight(25)

    },
    sectionDescTxt: {
        marginTop: scaledHeight(19.5),
        fontSize: scaledHeight(18),
        color: 'rgba(51, 51, 51, 0.87)',
        lineHeight: 22

    },

    touchItem: {
        marginTop: scaledHeight(16),
    },


    downloadPDFBtn: {
        width: '75%',
        borderWidth: 1,
        borderColor: "#61285F",
        borderRadius: scaledHeight(24),
        height: scaledHeight(50),
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        marginTop: scaledHeight(22)
    },
    downloadPDFBtnTxt: {
        fontSize: scaledHeight(16),
        color: '#61285F',
        fontWeight: 'bold',
        width: '100%',
        textAlign: 'center',
        lineHeight: 20

    },



    btnGrp: {
        marginHorizontal: scaledHeight(12),
        marginTop: scaledHeight(25),
        marginBottom: scaledHeight(50),

        flexGrow: 1,
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    },
    normalWhiteBtn: {
        //  width: '90%',
        borderWidth: 1,
        borderColor: "#61285F45",
        borderRadius: scaledHeight(24),
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
        //  width: '90%',
        borderWidth: 1,
        borderColor: "#61285F45",
        borderRadius: scaledHeight(24),
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
        //  width: '90%',
        borderWidth: 1,
        borderColor: "#61285F45",
        borderRadius: scaledHeight(24),
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



    newVictorySection: {
        //  marginTop: scaledHeight(150),
        padding: scaledHeight(12),
        width: '100%',
        flexGrow: 1,
        backgroundColor: '#FFFFFF',


    },
    moreTxt: {
        fontSize: scaledHeight(16),
        color: '#61285F',
        fontWeight: 'bold'
    },



    disclaimerTitleTxt: { //termsofuseText
        fontSize: scaledHeight(16),
        marginBottom: scaledHeight(10),
        fontWeight: 'bold',
        color: '#56565A',
        lineHeight: 25
    },
    disclaimerTxt: {
        fontSize: scaledHeight(16),
        color: '#56565A',
        lineHeight: 25

    },


});
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
        marginTop: scaledHeight(31),
        flexGrow: 1
    },
    sectionDescTxt: {
        marginTop: scaledHeight(19.5),
        fontSize: scaledHeight(18),
        color: 'rgba(51, 51, 51, 0.87)',
        lineHeight: 22

    },
    childSectionGrp: {
        flexGrow: 1,
        marginTop: scaledHeight(33)
    },
    accTypeSelectSection: {
        marginTop: scaledHeight(18),
        flexDirection: 'row',
        justifyContent: 'space-between',
        // marginHorizontal: scaledHeight(12),
        alignItems: "center",
        flexGrow: 1
    },
    headings: {
        width: '80%',
        textAlign: 'left',
        fontSize: scaledHeight(20),
        fontWeight: 'bold',
        color: '#5D83AE',
        lineHeight: 35
    },
    lblLine: {
        // width:"100%",
        flexGrow: 1,
        marginTop: scaledHeight(9.5),
        height: scaledHeight(1),
        backgroundColor: '#707070',
        opacity: .25
    },


    lblTxt: {
        color: 'rgba(51, 51, 51, 0.87)',
        fontSize: scaledHeight(16),
        fontWeight: 'bold',
        marginTop: scaledHeight(25)

    },



    pdfSection: {
        flexGrow: 1,
        marginBottom: scaledHeight(22),
        marginHorizontal: scaledHeight(12),
        padding: scaledHeight(32),
        backgroundColor: "#FFFFFF",
        borderWidth: 1,
        borderColor: "#FFFFFF",
        borderRadius: scaledHeight(5),
        shadowColor: "#56565A",
        shadowOpacity: 0.3,
        shadowOffset: { width: 0, height: 2 }
    },
    pdfTitleTxt: {
        fontSize: scaledHeight(26),
        color: '#486D89',
        lineHeight: 35
    },
    pdfDescTxt: {
        marginTop: scaledHeight(16),
        fontSize: scaledHeight(16),
        color: '#56565A',
        lineHeight: 22
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


    expandCollpaseTxt: {
        color: '#56565A',
        fontSize: scaledHeight(15),
        textAlign: 'center'
    },

    customTxtBox: {
        marginTop: scaledHeight(9),
        width: '100%'
    },
    customRowTxtBox: {
        width: '30%'

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
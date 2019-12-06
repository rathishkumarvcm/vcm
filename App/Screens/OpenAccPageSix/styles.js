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

    headings: {
        width: '80%',
        textAlign: 'left',
        fontSize: scaledHeight(20),
        fontWeight: 'bold',
        color: '#5D83AE',
        lineHeight: scaledHeight(26),
    },
    lblLine: {
        // width:"100%",
        flexGrow: 1,
        marginTop: scaledHeight(9.5),
        height: scaledHeight(1),
        backgroundColor: '#707070',
        opacity: 0.5
    },
    lblLine1: {
        //width:"100%",

        height: scaledHeight(1),
        backgroundColor: '#696069'
    },
    lblTxt: {
        color: 'rgba(51, 51, 51, 0.87)',
        fontSize: scaledHeight(16),
        fontWeight: 'bold',
        marginTop: scaledHeight(25)

    },
    sectionDescTxt: {
        marginTop: scaledHeight(8),
        fontSize: scaledHeight(15),
        color: '#56565A',
        lineHeight: 22

    },

    touchItem: {
        marginTop: scaledHeight(16),
    },


    pdfSectionGrp: {
        flexGrow: 1,
        borderColor: '#7070701A',
        borderWidth: 1,
        backgroundColor: '#FFFFFF',
        marginTop: scaledHeight(26),
        paddingHorizontal: scaledHeight(12),
        paddingVertical: scaledHeight(12)

    },
    errMsg:{
        color:'red',
        fontSize:scaledHeight(12),
        marginVertical: scaledHeight(12),

      },
    radioBtnGrp:{
        flexGrow:1,
        marginTop:scaledHeight(19),
        flexDirection:'row'
    },
    radioBtnColGrp:{
        flexGrow:1,
        marginTop:scaledHeight(19)
    },

    lblRadioBtnTxt: {
        color: '#333333DE',
        fontSize: scaledHeight(16),
        // lineHeight:22,
        flexWrap: 'wrap'
    },
    lblRadioDescTxt: {
        marginTop: scaledHeight(14),
        color: '#56565A',
        fontSize: scaledHeight(14),
        lineHeight: 22,
        flexWrap: 'wrap',
        opacity: .65
    },
    pdfFileNameTxt: {
        textAlign: 'left',
        fontSize: scaledHeight(16),
        fontWeight: 'bold',
        color: '#0D7CB5DE',
        lineHeight: scaledHeight(19),
    },
    pdfFileTxt: {
        textAlign: 'left',
        fontSize: scaledHeight(16),
        color: '#56565A',
        lineHeight: scaledHeight(22),
    },
    pdfFileDescTxt: {
        textAlign: 'left',
        fontSize: scaledHeight(16),
        color: '#333333DE',
        lineHeight: scaledHeight(19),
        //marginTop:scaledHeight(5)
    },
    agreeSectionGrp: {
        flexGrow: 1,
        borderColor: '#7070701A',
        borderWidth: 1,
        backgroundColor: '#E8ECEE',
        marginTop: scaledHeight(10),
        paddingHorizontal: scaledHeight(12),
        paddingVertical: scaledHeight(12)

    },
    agreeTermsTxt: {
        textAlign: 'left',
        fontSize: scaledHeight(16),
        color: '#333333DE',
        lineHeight: scaledHeight(19),
        //marginTop:scaledHeight(5)

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
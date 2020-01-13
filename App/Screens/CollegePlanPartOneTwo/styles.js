import { StyleSheet } from "react-native";
import { scaledHeight } from '../../Utils/Resolution';



const styles = StyleSheet.create({
    agreeTxt: {
        color: '#333333DE',
        fontSize: scaledHeight(14),

        fontWeight: 'bold',
        lineHeight: 22,
        marginBottom: scaledHeight(50),
        opacity: .75,
        textAlign:"left",
        width:"100%"

    },

    appPartContentGrp: {
        backgroundColor: '#ECEEEF',
        borderColor: '#CFD1D2',
        borderWidth: 1,
        flexGrow: 1,
        marginHorizontal: scaledHeight(12),
        marginTop: scaledHeight(35.5),
        overflow: 'hidden',
        paddingHorizontal: scaledHeight(20),
        paddingVertical: scaledHeight(26),


    },
    btnGrp: {
        alignContent: 'center',
        alignItems: 'center',
        flexGrow: 1,

        justifyContent: 'center',
        marginBottom: scaledHeight(50),
        marginHorizontal: scaledHeight(12),
        marginTop: scaledHeight(30)
    },

    commonColView:{
        flexGrow:1
    },
    container: {
        backgroundColor: '#F7FAFF',
        flex: 1,
        width: '100%'
    },
    disclaimerTitleTxt: { 
        color: '#56565A',
        fontSize: scaledHeight(16),
        fontWeight: 'bold',
        lineHeight: 25,
        marginBottom: scaledHeight(10)
    },
    disclaimerTxt: {
        color: '#56565A',
        fontSize: scaledHeight(16),
        lineHeight: 25

    },
    
    downloadPDFBtn: {
        alignContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        borderColor: "#61285F",
        borderRadius: scaledHeight(24),
        borderWidth: 1,
        height: scaledHeight(50),
        justifyContent: 'center',
        marginTop: scaledHeight(22),
        width: '75%'
    },
    downloadPDFBtnTxt: {
        color: '#61285F',
        fontSize: scaledHeight(16),
        fontWeight: 'bold',
        lineHeight: 20,
        textAlign: 'center',
        width: '100%'

    },

    headerGrp: {
        alignContent: 'center',
        flexDirection: 'row',
        flexGrow: 1,
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        marginHorizontal: scaledHeight(12),
        marginTop: scaledHeight(0),
        overflow: 'hidden'
    },

   
    headingDescTxt: {
        color: '#333333DE',
        fontSize: scaledHeight(16),
        lineHeight: 22,
        marginTop: scaledHeight(19.5),
        opacity: .75

    },

    
    headings: {
        color: '#535353',
        flexWrap: 'wrap',
        fontSize: scaledHeight(20),
        fontWeight: 'bold',
        lineHeight: 30,
        textAlign: 'left'

    },
    lblLine: {
        backgroundColor: '#707070',
        flexGrow: 1,
        height: scaledHeight(1),
        marginTop: scaledHeight(9.5),
        opacity: 0.5
    },
    lblSep: {
        backgroundColor: '#333333DE',
        marginHorizontal: scaledHeight(10),
        width: scaledHeight(1)
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
        backgroundColor: '#FFFFFF',
        flexGrow: 1,
        padding: scaledHeight(12),
        width: '100%',


    },

    normalBlackBtn: {
        alignContent: 'center',
        alignItems: 'center',
        backgroundColor: '#544A54',
        borderColor: "#61285F45",
        borderRadius: scaledHeight(24),
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
        borderRadius: scaledHeight(24),
        borderWidth: 1,
        height: scaledHeight(50),
        justifyContent: 'center',
        marginHorizontal: scaledHeight(37),
        marginVertical: scaledHeight(7.5)
    },
    normalWhiteBtn: {
        alignContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderColor: "#61285F45",
        borderRadius: scaledHeight(24),
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
    noteTxt: {
        color: '#333333DE',
        fontSize: scaledHeight(14),
        lineHeight: 22,
        marginBottom:scaledHeight(39),
        opacity: .75,
        textAlign:"left",
        width:"100%"

    },
    questDescTxt: {
        color: '#333333DE',

        fontSize: scaledHeight(14),
        lineHeight: 22,
        marginBottom:scaledHeight(33),
        opacity: .75

    },
    questTxt: {
        color: '#333333DE',
        fontSize: scaledHeight(14),
        fontWeight: 'bold',
        lineHeight: 22,
        marginBottom:scaledHeight(12),
        opacity: .75

    },
    scrollView: {
        flex: .85
    },



    sectionDescTxt: {
        color: 'rgba(51, 51, 51, 0.87)',
        fontSize: scaledHeight(18),
        lineHeight: 22,
        marginTop: scaledHeight(19.5)

    },
    sectionGrp: {
        flexGrow: 1,
        marginHorizontal: scaledHeight(12),
        marginTop: scaledHeight(0),
        overflow: 'hidden'
    },



    signBlackBtn: {
        alignContent: 'center',
        alignItems: 'center',
        backgroundColor: '#544A54',
        borderColor: "#61285F45",
        borderRadius: scaledHeight(24),
        borderWidth: 1,
        height: scaledHeight(50),
        justifyContent: 'center',
        width: '75%',



    },
    signBlackBtnTxt: {
        color: '#fff',
        fontSize: scaledHeight(16),
        textAlign: 'center',
        width: '100%'
    },
    subHeadings: {
        color: '#535353',
        flexWrap: 'wrap',
        fontSize: scaledHeight(20),
        lineHeight: 30,
        textAlign: 'left'

    },
     touchItem: {
        marginTop: scaledHeight(16),
    },

});

export default styles;

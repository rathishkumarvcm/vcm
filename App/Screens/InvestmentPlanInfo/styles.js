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
    summarySectionGrp: {
        overflow: 'hidden',
        marginHorizontal: scaledHeight(12),
        marginTop: scaledHeight(31),
        flexGrow: 1
    },

    childSectionGrp: {
        flexGrow: 1
    },


    accTypeSelectSection: {
        marginTop: scaledHeight(20),
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
        color: '#141516',
        lineHeight: 35
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
    tabBar:{
        flexDirection: 'row', 
        flexGrow: 1,
         marginTop: scaledHeight(24), 
         borderWidth: 1,
         borderColor: "#FFFFFF", 
         borderBottomColor: "#707070" 
    },
    tabItem: {
        height: scaledHeight(40),
       // marginHorizontal: scaledHeight(16),
        borderBottomWidth: 4,
        borderBottomColor: 'transparent',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal:scaledHeight(4),
        marginRight:scaledHeight(38),

    },
    tabItemTxt: {
        fontSize: scaledHeight(18),
        color: '#707070',
    },
    tabItemSelected: {
        height: scaledHeight(40),
        borderBottomWidth: 4,
        borderBottomColor: '#3B64B7',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal:scaledHeight(4),
        marginRight:scaledHeight(38),
    },
    tabItemSelectedTxt: {

        fontSize: scaledHeight(18),
        fontWeight: 'bold',
        color: '#333333DE',


    },
    backToInvestpage: {
        marginTop: scaledHeight(33),
        marginBottom: scaledHeight(33),
        color: '#0D7CB5',
        fontSize: scaledHeight(16),
        fontWeight: '300',
    },
    riskContainer: {
        width: '75%',
        borderWidth: 1,
        borderColor: "#707070",
        flexDirection: 'row',
        padding: scaledHeight(8),
        marginBottom: scaledHeight(27)
    },
    riskLevel: {
        fontWeight: "bold",
        fontSize: scaledHeight(16),
        color: "#333333DE"
    },
    riskLevelValue: {
        fontSize: scaledHeight(16),
        marginLeft: scaledHeight(25),
        color: "#56565A"
    },
    riskDesc: {

        color: '#333333DE',
        fontSize: scaledHeight(16),
        lineHeight: 22,
    },

    headingUnderline: {
        marginTop: scaledHeight(46),
        color: '#56565A',
        fontSize: scaledHeight(20),
        fontWeight: 'bold',
        textDecorationLine: 'underline',
        lineHeight: 35,
    },

    lblNameFirstTxt: {
        color: 'rgba(51, 51, 51, 0.87)',
        fontSize: scaledHeight(16),
        fontWeight: 'bold',

    },
    lblNameTxt: {
        color: 'rgba(51, 51, 51, 0.87)',
        fontSize: scaledHeight(16),
        fontWeight: 'bold',
        marginTop: scaledHeight(30)

    },
    lblSubNameTxt: {
        color: '#56565A',
        fontSize: scaledHeight(13),
        marginVertical: scaledHeight(4),

        opacity:.74,

    },
    lblNameValueTxt: {
        fontSize: scaledHeight(16),
        //  width: '50%',
        color: 'rgba(51, 51, 51, 0.87)',
        marginTop: scaledHeight(12)
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

    table:{
        flexGrow: 1,
        borderColor: "#707070",
        borderWidth: 1,
        padding: scaledHeight(4),
        marginTop:scaledHeight(27),
        marginBottom:scaledHeight(12)

    },
    tableHeading: {
        color: 'rgba(51, 51, 51, 0.87)',
        fontSize: scaledHeight(16),
        fontWeight: 'bold',
        marginTop:scaledHeight(27)

    },
    tableRow:{
        flexGrow: 1, 
       // paddingHorizontal: scaledHeight(4),
        backgroundColor:"#E6E6E6"

    },
    rowContainer: {
        flexGrow: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',

    },
    column1: {
        width:"55%",
        height:scaledHeight(60),
        flexGrow: 1,
        justifyContent: 'center',

        alignItems: 'flex-end',
        backgroundColor:"#E6E6E6",
        paddingRight:scaledHeight(12)

    },
    column2: {
        width:"45%",

        flexGrow: 1,
        height:scaledHeight(60),

        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:"#FFFFFF"

    },
    rowSep: {
        flexGrow: 1,
        height: scaledHeight(1),
        backgroundColor: '#707070',
        opacity: 0.5,
        marginHorizontal:scaledHeight(12)
    },
    column1Txt: {
        color: 'rgba(51, 51, 51, 0.87)',
        fontSize: scaledHeight(16),
        fontWeight: 'bold',
        textAlign:'right',


    },
   
    column2Txt: {
        fontSize: scaledHeight(16),
        color: 'rgba(51, 51, 51, 0.87)',
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
    pdfDisclosureContainer:{ 
        flexGrow: 1, 
        marginTop: scaledHeight(30) 
    },
    pdfDisclosure:{ 
        flexDirection: 'row', 
        flexGrow: 1, 
        flexWrap: 'wrap', 
        marginVertical: scaledHeight(10.5) 
    }

});
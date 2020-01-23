import { StyleSheet } from "react-native";
import { scaledHeight } from '../../Utils/Resolution';

const styles = StyleSheet.create({
    accTypeSelectSection: {
        alignItems: "center",
        flexDirection: 'row',
        flexGrow: 1,       
        justifyContent: 'space-between',
        marginTop: scaledHeight(20)
    },

    backToInvestpage: {
        color: '#0D7CB5',
        fontSize: scaledHeight(16),
        fontWeight: '300',
        marginBottom: scaledHeight(33),
        marginTop: scaledHeight(33),
    },
    btnGrp: {
        alignContent: 'center',
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center',
        marginHorizontal: scaledHeight(12),
        marginVertical: scaledHeight(50)
    },

    childSectionGrp: {
        flexGrow: 1
    },


    column1: {
        alignItems: 'flex-end',
        backgroundColor:"#E6E6E6",
        flexGrow: 1,
        height:scaledHeight(60),

        justifyContent: 'center',
        paddingRight:scaledHeight(12),
        width:"55%"

    },
    column1Txt: {
        color: 'rgba(51, 51, 51, 0.87)',
        fontSize: scaledHeight(16),
        fontWeight: 'bold',
        textAlign:'right',


    },
    column2: {
        alignItems: 'center',

        backgroundColor:"#FFFFFF",
        flexGrow: 1,

        height:scaledHeight(60),
        justifyContent: 'center',
        width:"45%"

    },

    column2Txt: {
        color: 'rgba(51, 51, 51, 0.87)',
        fontSize: scaledHeight(16),
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
    headingUnderline: {
        color: '#56565A',
        fontSize: scaledHeight(20),
        fontWeight: 'bold',
        lineHeight: 35,
        marginTop: scaledHeight(46),
        textDecorationLine: 'underline',
    },

    headings: {
        color: '#141516',
        fontSize: scaledHeight(20),
        fontWeight: 'bold',
        lineHeight: 35,
        textAlign: 'left',
        width: '80%'
    },
    
    horizontalScrollContainer:{ 
        alignContent: 'center', 
        alignItems: 'center', 
        justifyContent: 'center', 
        paddingHorizontal: scaledHeight(12)
     },

    investmentPlanBack: {
         alignItems: 'center',
         flexDirection: 'row', 
         justifyContent: 'flex-start' 
    },

    investmentPlanContainer:{
        alignItems: 'center', 
        flexDirection: 'row',
        justifyContent: 'space-between' 
    },
   
    lblLine: {     
        backgroundColor: '#707070',
        flexGrow: 1,
        height: scaledHeight(1),
        marginTop: scaledHeight(9.5),
        opacity: 0.5
    },
    lblLine1: {      

        backgroundColor: '#696069',
        height: scaledHeight(1)
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

    lblNameValueTxt: {
        color: 'rgba(51, 51, 51, 0.87)',       
        fontSize: scaledHeight(16),
        marginTop: scaledHeight(12)
    },

    lblSubNameTxt: {
        color: '#56565A',
        fontSize: scaledHeight(13),
        marginVertical: scaledHeight(4),

        opacity:.74,

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
    pdfDisclosure:{ 
        flexDirection: 'row', 
        flexGrow: 1, 
        flexWrap: 'wrap', 
        marginVertical: scaledHeight(10.5) 
    },
    pdfDisclosureContainer:{ 
        flexGrow: 1, 
        marginTop: scaledHeight(30) 
    },
    pdfFileDescTxt: {
        color: '#333333DE',
        fontSize: scaledHeight(16),
        lineHeight: scaledHeight(19),
        textAlign: 'left',
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

    ratingContainer:{
        marginTop: scaledHeight(8)
    },
   
    riskContainer: {
        borderColor: "#707070",
        borderWidth: 1,
        flexDirection: 'row',
        marginBottom: scaledHeight(27),
        padding: scaledHeight(8),
        width: '75%'
    },
    riskDesc: {

        color: '#333333DE',
        fontSize: scaledHeight(16),
        lineHeight: 22,
    },
    riskLevel: {
        color: "#333333DE",
        fontSize: scaledHeight(16),
        fontWeight: "bold"
    },


    riskLevelValue: {
        color: "#56565A",
        fontSize: scaledHeight(16),
        marginLeft: scaledHeight(25)
    },
    rowContainer: {
        alignItems: 'center',
        flexDirection: 'row',
        flexGrow: 1,
        justifyContent: 'flex-start',

    },
    rowSep: {
        backgroundColor: '#707070',
        flexGrow: 1,
        height: scaledHeight(1),
        marginHorizontal:scaledHeight(12),
        opacity: 0.5
    },
    scrollViewContainer : {
        flex: .85      
    },
    sectionGrp: {
        flexGrow: 1,
        marginHorizontal: scaledHeight(12),
        marginTop: scaledHeight(31),
        overflow: 'hidden'
    },
    summarySectionGrp: {
        flexGrow: 1,
        marginHorizontal: scaledHeight(12),
        marginTop: scaledHeight(31),
        overflow: 'hidden'
    },

    tabBar:{
        borderBottomColor: "#707070", 
        borderColor: "#FFFFFF",
         borderWidth: 1, 
         flexDirection: 'row',
         flexGrow: 1, 
         marginTop: scaledHeight(24) 
    },
    tabItem: {
        alignContent: 'center',       
        alignItems: 'center',
        borderBottomColor: 'transparent',
        borderBottomWidth: 4,
        height: scaledHeight(40),
        justifyContent: 'center',
        marginRight:scaledHeight(38),
        paddingHorizontal:scaledHeight(4),

    },
    tabItemSelected: {
        alignContent: 'center',
        alignItems: 'center',
        borderBottomColor: '#3B64B7',
        borderBottomWidth: 4,
        height: scaledHeight(40),
        justifyContent: 'center',
        marginRight:scaledHeight(38),
        paddingHorizontal:scaledHeight(4),
    },
    tabItemSelectedTxt: {
        color: '#333333DE',
        fontSize: scaledHeight(18),
        fontWeight: 'bold',
    },


    tabItemTxt: {
        color: '#707070',
        fontSize: scaledHeight(18),
    },
    table:{
        borderColor: "#707070",
        borderWidth: 1,
        flexGrow: 1,
        marginBottom:scaledHeight(12),
        marginTop:scaledHeight(27),
        padding: scaledHeight(4)

    },
    tableHeading: {
        color: 'rgba(51, 51, 51, 0.87)',
        fontSize: scaledHeight(16),
        fontWeight: 'bold',
        marginTop:scaledHeight(27)

    },
    tableRow:{
        backgroundColor:"#E6E6E6",        
        flexGrow: 1

    }

});

export default styles;
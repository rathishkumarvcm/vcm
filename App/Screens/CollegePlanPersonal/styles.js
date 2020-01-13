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

    btnGrp: {
        alignContent: 'center',
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center',
        marginHorizontal: scaledHeight(12),
        marginVertical: scaledHeight(50)
    },

    commonColView:{
        flexGrow:1
    },
    container: {
        backgroundColor: '#F7FAFF',
        flex: 1,
        width: '100%'
    },


    detailsRow: {
        alignItems: 'flex-start',
        flexDirection: 'row',
        flexGrow: 1,
        justifyContent: 'flex-start',
        marginVertical: scaledHeight(12)

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

    editBtn: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginTop: scaledHeight(0)
    },
    editBtnTxt: {
        color: '#61285F',
        fontSize: scaledHeight(16),
        fontWeight: 'bold',
        lineHeight: 20,
        textAlign: 'right',
        width: '100%'
    },

    editDetailsGrp: {
        backgroundColor: '#FFFFFF',
        borderColor: '#7070701A',
        borderWidth: 1,
        flexGrow: 1,
        marginTop: scaledHeight(15),
        paddingHorizontal: scaledHeight(15),
        paddingVertical: scaledHeight(25)

    },
    editSeletedFundsDetailsGrp: {
        backgroundColor: '#FFFFFF',
        borderColor: '#7070701A',
        borderWidth: 1,
        flexGrow: 1,
        paddingBottom: scaledHeight(10),
        paddingHorizontal: scaledHeight(15),
        paddingTop: scaledHeight(16)

    },

    explainDotteBorderTxt: {

        color: '#333333DE',
        fontSize: scaledHeight(18),
        lineHeight: 28,
        marginTop:scaledHeight(10)

    },



    explainDottedBorder:{
        alignItems:"center",
        borderBottomColor:'#56565A',
        borderBottomWidth:1,
        flexDirection:'row',
        justifyContent:"flex-start"
       
    },
    explainTxt:{

        color: '#000000DE',
        fontSize: scaledHeight(18),
        lineHeight: 28,
        marginTop:scaledHeight(10)
    },

    explainUnderline:{
        alignItems:"center",
        borderBottomColor:'#56565A',
        borderBottomWidth:1,
        flexDirection:'row',
        justifyContent:"flex-start"
       
    },
    explainUnderlineTxt: {

        color: '#56565A',
        fontSize: scaledHeight(16),
        lineHeight: 25,
        marginTop:scaledHeight(10)

    },
    lblLeftColTxt: {
        color: 'rgba(51, 51, 51, 0.87)',
        fontSize: scaledHeight(16),
        fontWeight: 'bold',
        width: '50%'
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
    lblRadioBtnTxt:{
        color:'#333333DE',
        flexWrap:'wrap',
        fontSize:scaledHeight(16),
        lineHeight:28
    },
    lblRadioDescTxt:{
        color:'#333333DE',
        flexWrap:'wrap',
        fontSize:scaledHeight(14),
        lineHeight:22,
        marginTop:scaledHeight(14),
        opacity:.75
    },

    lblRightColTxt: {
        color: 'rgba(51, 51, 51, 0.87)',
        fontSize: scaledHeight(16),
        width: '50%'

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
    radioBtnGrp:{
        flexDirection:'row',
        flexGrow:1,
        marginTop:scaledHeight(0)
    },
    radioCol1: {
        marginBottom: scaledHeight(0),
        marginTop: scaledHeight(24),
        width:"30%" 
    },

    radioCol2: {
        marginBottom: scaledHeight(0),
        marginTop: scaledHeight(24)
    },
     regulatoryQuestTxt: {
        color: '#333333DE',
        fontSize: scaledHeight(16),
        fontWeight:'bold',
        lineHeight: 28,
        marginTop:scaledHeight(23)

    },
     scrollView: {
        flex: .85
    },
    sectionGrp: {
        flexGrow: 1,
        marginHorizontal: scaledHeight(12),
        marginTop: scaledHeight(31),
        overflow: 'hidden'
    },
    whyWeedThisTxt:{ 
    color: '#333333DE', 
    fontSize: scaledHeight(16), 
    textAlign: "left",
     textDecorationLine: 'underline' },



});

export default styles;

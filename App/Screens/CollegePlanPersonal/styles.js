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

    editBtn: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginTop: scaledHeight(0)
    },
    editBtnTxt: {
        fontSize: scaledHeight(16),
        color: '#61285F',
        fontWeight: 'bold',
        width: '100%',
        textAlign: 'right',
        lineHeight: 20
    },


    editDetailsGrp: {
        flexGrow: 1,
        borderColor: '#7070701A',
        borderWidth: 1,
        backgroundColor: '#FFFFFF',
        marginTop: scaledHeight(15),
        paddingHorizontal: scaledHeight(15),
        paddingVertical: scaledHeight(25)

    },
    editSeletedFundsDetailsGrp: {
        flexGrow: 1,
        borderColor: '#7070701A',
        borderWidth: 1,
        backgroundColor: '#FFFFFF',
        paddingHorizontal: scaledHeight(15),
        paddingTop: scaledHeight(16),
        paddingBottom: scaledHeight(10)

    },
    detailsRow: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        flexGrow: 1,
        marginVertical: scaledHeight(12)

    },

    lblLeftColTxt: {
        width: '50%',
        color: 'rgba(51, 51, 51, 0.87)',
        fontSize: scaledHeight(16),
        fontWeight: 'bold'
    },
    lblRightColTxt: {
        fontSize: scaledHeight(16),
        width: '50%',
        color: 'rgba(51, 51, 51, 0.87)'

    },

    lblNameTxt: {
        color: 'rgba(51, 51, 51, 0.87)',
        fontSize: scaledHeight(16),
        fontWeight: 'bold',
        marginTop: scaledHeight(30)

    },
    lblNameValueTxt: {
        fontSize: scaledHeight(16),
        //width: '50%',
        color: 'rgba(51, 51, 51, 0.87)',
        marginTop: scaledHeight(12)
    },

    btnGrp: {
        marginHorizontal: scaledHeight(12),
        marginVertical: scaledHeight(50),
        flexGrow: 1,
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    },



    regulatoryQuestTxt: {
        marginTop:scaledHeight(23),
        fontSize: scaledHeight(16),
        fontWeight:'bold',
        color: '#333333DE',
        lineHeight: 28

    },
    explainTxt:{

        marginTop:scaledHeight(10),
        fontSize: scaledHeight(18),
        color: '#000000DE',
        lineHeight: 28
    },

    explainDottedBorder:{
        flexDirection:'row',
        alignItems:"center",
        justifyContent:"flex-start",
        borderBottomWidth:1,
        borderBottomColor:'#56565A'
       
    },
    explainDotteBorderTxt: {

        marginTop:scaledHeight(10),
        fontSize: scaledHeight(18),
        color: '#333333DE',
        lineHeight: 28

    },
    explainUnderline:{
        flexDirection:'row',
        alignItems:"center",
        justifyContent:"flex-start",
        borderBottomWidth:1,
        borderBottomColor:'#56565A'
       
    },
    explainUnderlineTxt: {

        marginTop:scaledHeight(10),
        fontSize: scaledHeight(16),
        color: '#56565A',
        lineHeight: 25

    },
    
    radioBtnGrp:{
        flexGrow:1,
        marginTop:scaledHeight(0),
        flexDirection:'row'
    },
    lblRadioBtnTxt:{
        color:'#333333DE',
        fontSize:scaledHeight(16),
        lineHeight:28,
        flexWrap:'wrap'
    },
    lblRadioDescTxt:{
        marginTop:scaledHeight(14),
        color:'#333333DE',
        fontSize:scaledHeight(14),
        lineHeight:22,
        flexWrap:'wrap',
        opacity:.75
    },

    noteTxt: {
        width:"100%",
        marginBottom:scaledHeight(39),
        fontSize: scaledHeight(14),
        color: '#333333DE',
        opacity: .75,
        lineHeight: 22,
        textAlign:"left"

    },
    agreeTxt: {
        width:"100%",
        textAlign:"left",

        marginBottom: scaledHeight(50),
        fontSize: scaledHeight(14),
        fontWeight: 'bold',
        color: '#333333DE',
        opacity: .75,
        lineHeight: 22

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
    moreTxt: {
        fontSize: scaledHeight(16),
        color: '#61285F',
        fontWeight: 'bold'
    },

});
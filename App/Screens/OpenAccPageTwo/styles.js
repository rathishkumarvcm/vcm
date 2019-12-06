import { StyleSheet } from "react-native";
import {scaledHeight } from '../../Utils/Resolution';


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
        marginTop:scaledHeight(19.5),
        fontSize: scaledHeight(18),
        color: 'rgba(51, 51, 51, 0.87)',
        lineHeight: 22

    },
    childSectionGrp:{
        flexGrow: 1,
        overflow: 'hidden',

    },
    accTypeSelectSection: {
        marginTop:scaledHeight(18),
        flexDirection: 'row',
        justifyContent:'space-between',
       // marginHorizontal: scaledHeight(12),
        alignItems:"center",
        flexGrow: 1
    },
    accSelection:{
        flexGrow: 1, 
        paddingTop: scaledHeight(4), 
        marginTop: scaledHeight(38), 
        marginHorizontal: scaledHeight(12) 
    },
    accSelectionTxt:{
        fontSize: scaledHeight(22), 
        color: "#56565A", 
        fontWeight: 'bold' 
    },
    headings: {
        width: '80%',
        textAlign:'left',
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
        opacity:.25
    },
    
    lblLine1:{
         //width:"100%",
        
         height:scaledHeight(1),
         backgroundColor:'#696069'
     },
     lblTxt:{
        color:'rgba(51, 51, 51, 0.87)',
        fontSize:scaledHeight(16),
        fontWeight:'bold',
        marginTop: scaledHeight(25)
        
    },
    optionalTxt:{
            color:'rgba(51, 51, 51, 0.87)',
            fontSize:scaledHeight(16),
            fontWeight:'normal',
    },
    lblRowTxt:{
        color:'#000000',
        fontSize:scaledHeight(16),
        fontWeight:'bold',
    },
    hintLabelTxt:{
        color:'#000000DE',
        fontSize:scaledHeight(15),
        marginTop: scaledHeight(5),
        lineHeight: 22,
        opacity:.65
    },

    regulatoryNoteTxt:{
        color:'#333333DE',
        fontSize:scaledHeight(18),
        fontWeight:'bold',
        marginTop: scaledHeight(15),
        lineHeight: 22
    },
    regulatoryQuestTxt: {
        marginTop:scaledHeight(23),
        fontSize: scaledHeight(18),
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

    privacySection:{
     flexGrow:1,
     marginBottom:scaledHeight(50),
     marginHorizontal:scaledHeight(12),
     padding:scaledHeight(32),
     backgroundColor:"#FFFFFF",
     borderWidth : 1,
     borderColor : "#FFFFFF",
     borderRadius:scaledHeight(5),
     shadowColor:"#56565A",
     shadowOpacity:0.3,
     shadowOffset:{width:0,height:2}
    },
    privacyNoticeTitleTxt:{
        fontSize: scaledHeight(26),
        color: '#486D89',
        lineHeight:35
    },
    privacyNoticeTxt:{
        marginTop: scaledHeight(16),
        fontSize: scaledHeight(16),
        color: '#56565A',
        lineHeight: 22
    },
    downloadPDFBtn:{
        width: '75%',
        borderWidth : 1,
        borderColor : "#61285F",
        borderRadius: scaledHeight(24),
        height: scaledHeight(50),
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        marginTop:scaledHeight(22)
    },
    downloadPDFBtnTxt:{
        fontSize: scaledHeight(16),
        color:'#61285F',
        fontWeight: 'bold',
        width: '100%',
        textAlign: 'center',
        lineHeight: 20

    },


    expandCollpaseTxt:{
        color:'#56565A',
        fontSize:scaledHeight(15),
        textAlign:'center'
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
    customTxtBoxError:{
        marginTop: scaledHeight(9),
        width : '100%',
        borderColor : 'red'
    },
    customTxtBox:{
        marginTop: scaledHeight(9),
        width : '100%'
    },
    splitDateGrp:{
        flexDirection:'row',
        alignItems:"flex-start",
        justifyContent:"flex-start",
        marginTop: scaledHeight(9)
    },
    suffixTxtBox:{
        marginTop: scaledHeight(9),
        width : '30%'
    },
    customRowTxtBox:{
        width : '30%'
        
    },
    customListTxtBox:{
        width : '100%'
    },
    customListTxtBoxError:{
        width : '100%',
        borderColor : 'red'
    },
   
    btnGrp:{
        marginHorizontal: scaledHeight(12),
        marginVertical: scaledHeight(50),
        flexGrow: 1,
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    },
    normalWhiteBtn: {
      //  width: '90%',
        borderWidth : 1,
        borderColor : "#61285F45",
        borderRadius: scaledHeight(24),
        height: scaledHeight(50),
        backgroundColor: '#fff',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        marginVertical:scaledHeight(7.5),
        marginHorizontal:scaledHeight(37)

    },
    normalWhiteBtnTxt: {
        fontSize: scaledHeight(16),
        color:'#544A54',
        width: '100%',
        textAlign: 'center',
        lineHeight:22
    },
    normalBlackBtn: {
         //  width: '90%',
         borderWidth : 1,
         borderColor : "#61285F45",
         borderRadius: scaledHeight(24),
         height: scaledHeight(50),
         backgroundColor: '#544A54',
         alignItems: 'center',
         alignContent: 'center',
         justifyContent: 'center',
         marginVertical:scaledHeight(7.5),
         marginHorizontal:scaledHeight(37)
        

    },
    normalBlackBtnTxt: {
        fontSize: scaledHeight(16),
        color:'#fff',
        width: '100%',
        textAlign: 'center'
    },

    normalBlackDisabledBtn: {
        //  width: '90%',
        borderWidth : 1,
        borderColor : "#61285F45",
        borderRadius: scaledHeight(24),
        height: scaledHeight(50),
        backgroundColor: '#544A54',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        marginVertical:scaledHeight(7.5),
        marginHorizontal:scaledHeight(37)
        
       

   },
   normalBlackBtnDisabledTxt: {
       fontSize: scaledHeight(16),
       color:'#fff',
       width: '100%',
       textAlign: 'center'
   },

   browseBtn: {
    width : scaledHeight(160),
    borderWidth : scaledHeight(1),
    borderColor : "#61285F45",
    borderRadius: scaledHeight(4),
    height: scaledHeight(50),
    backgroundColor: '#544A54',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    marginVertical:scaledHeight(12),
    marginHorizontal:scaledHeight(0)
   

},


    removeWhiteBtn: {
        width: '45%',
        borderWidth : 1,
        borderColor : "#DEDEDF",
        borderRadius: scaledHeight(24),
        height: scaledHeight(50),
        backgroundColor: '#fff',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        marginVertical:scaledHeight(5)

    },
    removeWhiteBtnTxt: {
        fontSize: scaledHeight(16),
        color:'#000000',
        fontWeight: 'bold',
        width: '100%',
        //height:'100%',
        textAlign: 'center',
        marginTop: scaledHeight(10),

       
    },

    addBeneficiaryBtn:{
        backgroundColor: '#F7FAFF',
        width: '90%',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginTop:scaledHeight(25),
        flexWrap:'wrap',
        height: scaledHeight(50),

    },
    addBeneficiaryBtnTxt:{
        fontSize: scaledHeight(16),
        color:'#784978',
        fontWeight: 'bold',
      
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

    userAvatar:{
        height : scaledHeight(200),
        width: '100%'
    }


});
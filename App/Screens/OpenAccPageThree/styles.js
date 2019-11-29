import { StyleSheet } from "react-native";
import { scaledHeight,scaledWidth } from '../../Utils/Resolution';



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
        marginTop:scaledHeight(12),
        fontSize: scaledHeight(18),
        color: '#56565A',
        lineHeight: 25
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
        opacity:0.5
    },
    
    lblLine1: {
        //width:"100%",

        height: scaledHeight(1),
        backgroundColor: '#696069'
    },
    lblTxt:{
        color:'rgba(51, 51, 51, 0.87)',
        fontSize:scaledHeight(16),
        fontWeight:'bold',
        marginTop: scaledHeight(25)
        
    },
  
    lblSelectedCountTxt: {
        color: '#56565A',
        opacity:.65,
        fontSize: scaledHeight(13),
        //marginTop: scaledHeight(25),
       // marginBottom: scaledHeight(15)
    },
    fundListGrp: {
        flexGrow: 1,
        marginTop:scaledHeight(27)
    },

    rowHeaderItem: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
        flexGrow: 1,
        // borderColor:'#afabb0',
        //  borderWidth:1 ,
        marginTop:scaledHeight(0)
    },
    rowItem: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
        flexGrow: 1,
        // borderColor:'#afabb0',
        //  borderWidth:1 ,
        marginTop:scaledHeight(22)
    },
    colItem: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        flexGrow: 1,
        backgroundColor:'#FFFFFF',
        borderColor:'#70707080',
        borderWidth:1 ,
        padding:scaledHeight(15),
        marginVertical:scaledHeight(15)
    },

    lblRowtitleTxt: {
        width: '90%',
        color: '#56565A',
        fontSize: scaledHeight(22),
        fontWeight: 'bold',
      //  lineHeight:20
    },

    lblLeftColTxt: {
        width: '40%',
        color: '#333333DE',
        fontSize: scaledHeight(16),
        fontWeight: 'bold',
       

    },
    lblRightColTxt: {
        color: '#56565A',
        fontSize: scaledHeight(16),
        width: '40%',

    },
    showPagesTxt: {
        color: '#61285F',
        fontSize: scaledHeight(16),
        fontWeight: 'bold',

      //  marginTop: scaledHeight(25),
        //marginBottom: scaledHeight(7)
    },
    showPagesNosTxt: {
        color: '#584f58',
        fontSize: scaledHeight(15),
     //   marginTop: scaledHeight(25),
        letterSpacing:1
        //marginBottom: scaledHeight(7)
    },

    dropDownLayout: {
        width: '100%',
        justifyContent: "flex-start",
        alignItems: "flex-start",
        paddingLeft: '0%',
        paddingRight: '0%',
        marginLeft: '0%',
        marginRight: '0%',
        marginTop: scaledHeight(25)
    },
    dropDownTextName: {
        width: '100%',
        paddingLeft: '0%',
        paddingRight: '0%',
        marginLeft: '0%',
        marginRight: '0%',
        color: 'rgba(51, 51, 51, 0.87)',
        fontSize: scaledHeight(16),
        fontWeight: 'bold',
        marginTop: scaledHeight(0)

    },
    textInputStyle: {
        width: '100%',
        marginLeft: '0%',
        marginRight: '0%',
        marginTop: scaledHeight(0),
    },
    dropDownPostition:{
         width:"100%",
         marginLeft:scaledHeight(20),
         marginRight:scaledHeight(20),
         position: 'absolute', 
         left: 0
       
    },




    filterFundsBtn: {
        width: scaledWidth(150),
        borderWidth: 1,
        borderColor: "#61285F45",
        borderRadius: scaledHeight(25),
        height: scaledHeight(50),
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        marginTop: scaledHeight(25)
    },
    filterFundsBtnTxt: {
        fontSize: scaledHeight(16),
        color: '#61285F',
        fontWeight: 'bold',
        width: '100%',
        textAlign: 'center'
    },

    compareFundsBtn: {
        width: scaledWidth(250),
        borderWidth: 1,
        borderColor: "#61285F45",
        borderRadius: scaledHeight(25),
        height: scaledHeight(50),
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        marginTop: scaledHeight(15)
    },
    compareFundsBtnTxt: {
        fontSize: scaledHeight(16),
        color: '#61285F',
        fontWeight: 'bold',
        width: '100%',
        textAlign: 'center'
    },
    touchItem: {
        // width:scaledHeight(250),
       //  height:scaledHeight(250),
       marginVertical:scaledHeight(24),
     },
    accountItem: {
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        borderColor:'#5D83AE99',
        borderWidth:1,
        borderStyle:'solid',
        width:'100%',
        height:scaledHeight(60),
    },
    accountItemSelected: {
        backgroundColor: '#dbeafc',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        borderColor:'#5d83ae',
        borderWidth:6,
        borderStyle:'solid',
        width:'100%',
        height:scaledHeight(60),
    },
    accountItemTxt: {
        color: '#56565A',
        fontWeight: 'bold',
        fontSize: scaledHeight(20),
        textAlign:'center',
        lineHeight:scaledHeight(20)
    },

    investmentSection: {
        flexGrow: 1,
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        borderColor: '#70707080',
        paddingHorizontal: scaledHeight(20),
        paddingBottom: scaledHeight(25),
        marginTop: scaledHeight(15)

    },
    investmentSectionFooter: {
        flexGrow: 1,
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        borderTopColor:"#FFFFFF",
        borderColor: '#70707080',
      //  padding: scaledHeight(20)
      
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
    
    customTxtBoxError:{
        marginTop: scaledHeight(9),
        width : '100%',
        borderColor : 'red'
    },
    customTxtBox:{
        marginTop: scaledHeight(9),
        width : '100%'
        
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
    modalBackgroundView: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        height: '100%',
    },
    modalContainer: {
        backgroundColor: '#FFFFFF',
        marginLeft: '5%',
        marginRight: '5%',
        paddingRight: '4%',
        paddingLeft: '4%',
        paddingTop: scaledHeight(15),
        paddingBottom: scaledHeight(15),
    },
    modalTitleView:{
        flexDirection:'row',
    },
    modalTitleText:{
        marginLeft: '2%',
        fontSize: scaledHeight(26),
        marginTop: scaledHeight(8),
        fontWeight: 'bold',
        color: '#56565A',
        width:'85%'
    },
    modalMinInvestTitleText:{
        fontSize: scaledHeight(16),
        marginTop: scaledHeight(18),
        marginBottom: scaledHeight(16),
        fontWeight: 'bold',
        color: '#56565A',       
    },
    modalCheckBoxLabel:{
        fontSize: scaledHeight(16),     
        marginBottom: scaledHeight(18),       
        color: '#56565A',     
       
    },
    modalMinCheckBoxContainer:{
        marginLeft: '4%',
        marginRight: '4%',
        marginTop:scaledHeight(10)
    },
    modalRiskCheckBoxContainer:{
        marginLeft: '4%',
        marginRight: '4%',
        marginTop:scaledHeight(20)
    },
    modalFundCheckBoxContainer:{
        marginLeft: '4%',
        marginRight: '4%',
        marginTop:scaledHeight(20)
    },
    modalActionContainer:{
        flexDirection:'row',
        marginTop:scaledHeight(20),
        marginBottom:scaledHeight(50)
    },
    modalClearFilterBtn: {        
        width: scaledWidth(140),       
        height: scaledHeight(60),
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        marginTop: scaledHeight(25),
        marginLeft:'2%',
        marginRight:'2%',
        paddingLeft:'2%'
    },
    modalApplyFilterBtn: {        
        width: scaledWidth(140),      
        height: scaledHeight(60),
        backgroundColor: '#5D83AE',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        marginTop: scaledHeight(25),
        marginLeft:'2%',       
    },
    modalCancelBtnTxt: {
        fontSize: scaledHeight(18),
        color: '#5D83AE',
        fontWeight: 'bold',
        width: '100%',
        textAlign: 'left'
    },
    modalApplyBtnTxt: {
        fontSize: scaledHeight(18),
        color: '#FFFFFF',
        fontWeight: 'bold',
        width: '100%',
        textAlign: 'center',
        textTransform:'uppercase'
    },
    modalRiskViewContainer:{
        flexDirection:'row',
        width:'80%',
    }
});
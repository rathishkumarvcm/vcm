import { StyleSheet,Dimensions } from "react-native";
import { scaledHeight, scaledWidth} from '../../Utils/Resolution';



export const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#F7FAFF',
        width:'100%'
    },
    loginHeader:{
        flex:.15,
        flexDirection:'row',
        backgroundColor:'#FFFFFF',
        paddingLeft:'4%',
        paddingRight:'4%',
        justifyContent:'center',
        alignItems:'center'
    },
    autoInvestHead:{
        marginTop:scaledHeight(10),
        fontSize:scaledHeight(18),
        fontWeight:'bold',
        marginBottom:scaledWidth(10),
        color:'#56565A',
        marginLeft:'4%',
        marginRight:'4%'
    },
    circle_Completed: {
        width: scaledWidth(35),
        height: scaledHeight(35),
        borderRadius: scaledHeight(35)/2,
        backgroundColor: '#A7E993',
        alignItems:'center',
        justifyContent:'center'
    },
    circle_Inprogress: {
        width: scaledWidth(35),
        height: scaledHeight(35),
        borderRadius: scaledHeight(35)/2,
        backgroundColor: '#CDDBFC',
        borderColor:'#9DB6F1',
        alignItems:'center',
        justifyContent:'center'
    },
    circle_NotStarted: {
        
        width: scaledWidth(35),
        height: scaledHeight(35),
        borderRadius: scaledHeight(35)/2,
        backgroundColor: '#C1C1C1',
        alignItems:'center',
        justifyContent:'center'
        
    },
    circleTextNew:{      
       fontSize:scaledHeight(15),
        fontWeight:'bold'
    },
    circleText:{      
        fontSize:scaledHeight(15)
    },
    circle_connect:{
        borderTopWidth:1,
        borderTopColor:'#C1C1C1',
        width:scaledWidth(40),
        alignSelf:'center'
    },
    circle_view:{
        flexDirection:'row',
        justifyContent:"center",
        marginTop:scaledHeight(30),
    },
    autoInvestCont:
    {
        color:'#56565A',
        fontSize:scaledHeight(16),
        marginTop:scaledHeight(10),
        
    },
    autoInvest_title_view:{
        marginTop:scaledHeight(20),
        height:scaledHeight(40),
        borderWidth:1,
        borderColor:'#D5DEFD',
        backgroundColor:'#E4EBFE',
        justifyContent:"center",
        alignItems:'center'
    },
    autoInvest_title_text:
    {
        fontSize:scaledHeight(20),
        color:'#4D79F6',
        fontWeight:'bold'
    },
    
    autoInvest_sub_title_text:{
        fontSize:scaledHeight(20),
        color:'#56565A',
        fontWeight:'bold',
        marginTop:scaledHeight(20),
        marginBottom:scaledHeight(10)
    },

    sysWith_sub_text:
    {
        color:'#56565A',
        fontSize:scaledHeight(18),
        marginBottom:scaledHeight(10),
        marginTop:scaledHeight(10)
    },
    sysWith_sub_text1:{
        color:'#333333DE',
        fontSize:scaledHeight(16),
        marginTop:scaledHeight(20),
        marginBottom:scaledHeight(10)
    },
    body:
    {
        marginLeft:'4%',
        marginRight:'4%'
    },
    seperator_line:{
        borderTopWidth:1,
        borderTopColor:'#C1C1C1',
       
    },
    auto_invest_to:
    {
        flexDirection: 'column',  
        borderColor: '#DCDCDC', 
        borderWidth: 1,
        backgroundColor:'#EFECEC',
        padding:20,
    },
    auto_invest_to_flat:
    {
        flexDirection: 'column',   
        padding:20,
    },
    auto_invest_flat_min:
    {
        color:'#333333DE',
        fontSize:scaledHeight(13),
        marginTop:scaledHeight(20),
        marginBottom:scaledHeight(20)
    },
    auto_invest_to_top:
    {
        color:'#333333DE',
        fontSize:scaledHeight(16),
        fontWeight:'bold',
        marginBottom:scaledHeight(10),
        marginRight:scaledWidth(15),
    },
    auto_invest_to_top_view:
    {
        flexDirection: 'row',
        height:scaledHeight(45),
        alignItems:'center',
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

    radioBtnGrp1:{
        
        flexDirection:'column'
    },
    lblRadioBtnTxt1:{
        color:'#333333DE',
        fontSize:scaledHeight(16),
        lineHeight:28,
        
    },
    lblRadioDescTxt1:{
        marginTop:scaledHeight(14),
        color:'#333333DE',
        fontSize:scaledHeight(14),
        lineHeight:22,
        opacity:.75
    },
    cancelButton:{
        borderColor:'#61285F45',
        borderWidth:1,
        width:'80%',
        marginLeft:'10%',
        marginRight:'10%',
        marginTop:scaledHeight(15),
       //  borderRadius:scaledHeight(25),
        height:scaledHeight(50),
        backgroundColor:'#FFFFFF',
        alignItems:'center',
        justifyContent:'center'
     },
     cancelButtonText:{
        fontSize:scaledHeight(16),
        color:'#544A54',
        fontWeight:'bold'
    },
    continueButton:{
        borderColor:'#61285F45',
        borderWidth:1,
        width:'80%',
        marginLeft:'10%',
        marginRight:'10%',
        marginTop:scaledHeight(15),
       //  borderRadius:scaledHeight(25),
        height:scaledHeight(50),
        backgroundColor:"rgba(84,74,84,0.5)",
        alignItems:'center',
        justifyContent:'center',
     },
     continueButtonSelected:{
        borderColor:'#61285F45',
        borderWidth:1,
        width:'80%',
        marginLeft:'10%',
        marginRight:'10%',
        marginTop:scaledHeight(15),
        height:scaledHeight(50),
        backgroundColor:'#56565A',
        alignItems:'center',
        justifyContent:'center'
     },
     continueButtonText:{
        fontSize:scaledHeight(16),
        color:'#FFFFFF',
        fontWeight:'bold'
    },
    
    bankView:
    {
        flexDirection:'row',
        borderWidth: 1, 
        borderColor: '#5D83AE99', 
        height:scaledHeight(80),
        marginBottom:scaledHeight(20),
        
    },
    bankViewSelected:
    {
        flexDirection:'row',
        borderWidth: 5, 
        borderColor: '#B5E198', 
        height:scaledHeight(80),
        marginBottom:scaledHeight(20),
        
    },
    financialTextLabel: {
        color: '#333333DE', fontSize: scaledHeight(18), fontWeight: 'bold',  marginBottom: '4%'
    },



    // filter funds
    rowHeaderItem: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
        flexGrow: 1,
        //  borderColor:'#afabb0',
        //   borderWidth:1 ,
        marginTop: scaledHeight(0)
    },
    rowItem: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
        flexGrow: 1,
        //  borderColor:'#afabb0',
        //   borderWidth:1 ,
        marginTop: scaledHeight(22)
    },
    colItem: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        flexGrow: 1,
        backgroundColor: '#FFFFFF',
        borderColor: '#70707080',
        borderWidth: 1,
        padding: scaledHeight(15),
        marginVertical: scaledHeight(15)
    },

    lblRowtitleTxt: {
        width: '90%',
        color: '#0D7CB5',
        fontSize: scaledHeight(22),
        fontWeight: 'bold',
        //   lineHeight:20
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
// bottom section offline 2
    sectionGrp: {
        overflow: 'hidden',
        marginHorizontal: scaledHeight(12),
        marginTop: scaledHeight(31),
        flexGrow: 1
    },
    accTypeSelectSection: {
        marginTop: scaledHeight(20),
        flexDirection: 'row',
        justifyContent: 'space-between',
        //  marginHorizontal: scaledHeight(12),
        alignItems: "center",
        flexGrow: 1
    },
    headings: {
        width: '80%',
        textAlign: 'left',
        fontSize: scaledHeight(20),
        fontWeight: 'bold',
        color: '#000000',
        lineHeight: 35
    },
    expandCollpaseTxt: {
        color: '#56565A',
        fontSize: scaledHeight(15),
        textAlign: 'center'
    },
    lblLine: {
        //  width:"100%",
        flexGrow: 1,
        marginTop: scaledHeight(9.5),
        height: scaledHeight(1),
        backgroundColor: '#707070',
        opacity: 0.5
    },
    childSectionGrp: {
        flexGrow: 1
    },
    sectionDescTxt: {
        marginTop: scaledHeight(12),
        fontSize: scaledHeight(18),
        color: '#56565A',
        lineHeight: 25
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
    lblTxt: {
        color: 'rgba(51, 51, 51, 0.87)',
        fontSize: scaledHeight(16),
        fontWeight: 'bold',
        marginTop: scaledHeight(25)
    },
    
    dropDownLayout: {
        //  alignItems: "flex-start",
        //  justifyContent: "flex-start",
         marginLeft: '0%',
         marginRight: '0%',
         marginTop: scaledHeight(25),
         width: '100%'
     },
     dropDownTextName: {
        color: 'rgba(51, 51, 51, 0.87)',
        fontSize: scaledHeight(16),
        fontWeight: 'bold',
        marginLeft: '0%',
        marginRight: '0%',
        marginBottom: scaledHeight(9),
        paddingLeft: '0%',
        paddingRight: '0%',
        width: '100%',
        borderColor:'blue'

    },
    textInputStyle: {
        width: '100%',
        marginLeft: '0%',
        marginRight: '0%',
        marginTop: scaledHeight(0),
    },
    dropDownPostition: {
        width: "100%",
        marginLeft: scaledHeight(20),
        marginRight: scaledHeight(20),
        position: 'absolute',
        left: 0

    },
    errMsg: {
        color: 'red',
        fontSize: scaledHeight(12),
        marginVertical: scaledHeight(12),

    },
    filterFundsBtn: {
        width: '50%',
        borderWidth: 1,
        borderColor: "#61285F45",        
        height: scaledHeight(60),
        backgroundColor: '#FFFFFF',      
        alignContent: 'center',
        justifyContent: 'center',
        marginTop: scaledHeight(25),
        paddingHorizontal: scaledHeight(25)

    },
    filterFundsBtnTxt: {
        fontSize: scaledHeight(16),
        color: '#5D83AE',
        fontWeight: 'bold',
        // width: '80%',
        textAlign: 'center'
    },
    compareFundsBtn: {
        width: '72%',
        borderWidth: 1,
        borderColor: "#61285F45",       
        height: scaledHeight(60),
        backgroundColor: '#FFFFFF',      
        alignContent: 'center',
        justifyContent: 'center',
        marginTop: scaledHeight(15),
        marginBottom:scaledHeight(5),
        paddingHorizontal: scaledHeight(25)

    },
    compareFundsBtnTxt: {
        fontSize: scaledHeight(16),
        color: '#5D83AE',
        fontWeight: 'bold',
       //  width: '80%',
       textAlign: 'center'
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
        marginTop: scaledHeight(40),
        marginBottom: scaledHeight(40),
    },
    modalTitleView: {
        flexDirection: 'row',
    },
    modalTitleText: {
        marginLeft: '2%',
        fontSize: scaledHeight(26),
        marginTop: scaledHeight(8),
        fontWeight: 'bold',
        color: '#56565A',
        width: '85%'
    },
    modalMinInvestTitleText: {
        fontSize: scaledHeight(16),
        marginTop: scaledHeight(18),
        marginBottom: scaledHeight(16),
        fontWeight: 'bold',
        color: '#56565A',
    },
    modalCheckBoxLabel: {
        fontSize: scaledHeight(16),
        marginBottom: scaledHeight(18),
        color: '#56565A',

    },
    modalMinCheckBoxContainer: {
        marginLeft: '4%',
        marginRight: '4%',
        marginTop: scaledHeight(10)
    },
    modalRiskCheckBoxContainer: {
        marginLeft: '4%',
        marginRight: '4%',
        marginTop: scaledHeight(20)
    },
    modalFundCheckBoxContainer: {
        marginLeft: '4%',
        marginRight: '4%',
        marginTop: scaledHeight(20)
    },
    modalActionContainer: {
        flexDirection: 'row',
        marginTop: scaledHeight(20),
        marginBottom: scaledHeight(50)
    },
    modalClearFilterBtn: {
        width: scaledWidth(140),
        height: scaledHeight(60),
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        marginTop: scaledHeight(25),
        marginLeft: '2%',
        marginRight: '2%',
        paddingLeft: '2%'
    },
    modalApplyFilterBtn: {
        width: scaledWidth(140),
        height: scaledHeight(60),
        backgroundColor: '#5D83AE',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        marginTop: scaledHeight(25),
        marginLeft: '2%',
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
        textTransform: 'uppercase'
    },
    modalRiskViewContainer: {
        flexDirection: 'row',
        width: '80%',
    },

   
});
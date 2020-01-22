import { StyleSheet } from "react-native";
import { scaledHeight, scaledWidth} from '../../Utils/Resolution';


const styles = StyleSheet.create({
    TextOffStyle: {
    color: '#544A54',
    fontSize: scaledHeight(14),
    fontWeight: 'bold',
    marginLeft: "4%",
    opacity: 0.5,
    textAlign: 'left'
},
    TextOffStyleWithholdtax: {
    color: '#544A54',
    fontSize: scaledHeight(14),
    fontWeight: 'bold',
    marginLeft: "38%",
    opacity: 0.5,
    textAlign: 'right'
},
    TextOnStyle: {
    color: '#56565A',
    fontSize: scaledHeight(14),
    fontWeight: 'bold',
    justifyContent: 'flex-start',
    marginLeft: "0%",
    paddingLeft: "10%"
},
    accTypeSelectSection: {
        alignItems: "center",
        flexDirection: 'row',
        flexGrow: 1,
        justifyContent: 'space-between',
        marginTop: scaledHeight(20)
    },
    accountBlock:{ borderColor: '#9DB4CE', borderWidth: 1, flexDirection: 'column', justifyContent: "center", marginTop: scaledHeight(20), padding: scaledHeight(20) },
    accountText:{ color: '#544A54', fontSize: scaledHeight(18), fontWeight: 'bold' },
    addInvestInitial:
    { alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between', marginTop: scaledHeight(7) },
    addInvestInitialText:
    { color: '#56565A', fontSize: scaledHeight(16) },
    addInvestMinText:
    { color: '#56565A', fontSize: scaledHeight(12), marginTop: scaledHeight(12), textAlign: 'right', width: '100%', },
    addInvestmentText:
    { color: '#61285F', fontSize: scaledHeight(16), fontWeight: 'bold', lineHeight: 20, textAlign: 'right', width: '100%' },
    addInvestmentTouch:
    { alignItems: 'center', flexDirection: 'row', justifyContent: 'flex-end', marginTop: scaledHeight(22) },
    addressStyle:
    { flexDirection: 'column', marginLeft: scaledWidth(15), marginTop: scaledHeight(15), width: '100%' },
    addressTwoInput:
    { marginTop: scaledHeight(10) },
    
    amountBeforeTaxesVal: {
    borderColor: '#DEDEDF',
    borderWidth: scaledHeight(1),
    color: '#56565A',
    fontSize: scaledHeight(16),
    height: scaledHeight(48),
    marginLeft: "3%",
    width: "92%"
},

    autoInvestCont:
    {
        color:'#56565A',
        fontSize:scaledHeight(16),
        marginTop:scaledHeight(10),
        
    },
    autoInvestHead:{
        color:'#56565A',
        fontSize:scaledHeight(18),
        fontWeight:'bold',
        marginBottom:scaledWidth(10),
        marginLeft:'4%',
        marginRight:'4%',
        marginTop:scaledHeight(10)
    },
    autoInvest_sub_title_text:{
        color:'#56565A',
        fontSize:scaledHeight(20),
        fontWeight:'bold',
        marginBottom:scaledHeight(10),
        marginTop:scaledHeight(20)
    },
    autoInvest_title_text:
    {
        color:'#4D79F6',
        fontSize:scaledHeight(20),
        fontWeight:'bold'
    },
    autoInvest_title_view:{
        alignItems:'center',
        backgroundColor:'#E4EBFE',
        borderColor:'#D5DEFD',
        borderWidth:1,
        height:scaledHeight(40),
        justifyContent:"center",
        marginTop:scaledHeight(20)
    },
    auto_invest_flat_min:
    {
        color:'#333333DE',
        fontSize:scaledHeight(13),
        marginBottom:scaledHeight(20),
        marginTop:scaledHeight(20)
    },
    auto_invest_to:
    {
        backgroundColor:'#EFECEC',  
        borderColor: '#DCDCDC', 
        borderWidth: 1,
        flexDirection: 'column',
        padding:20,
    },
    auto_invest_to_flat:
    {
        flexDirection: 'column',   
        padding:20,
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
        alignItems:'center',
        flexDirection: 'row',
        height:scaledHeight(45),
    },
    
    bankMidView:{ justifyContent: 'center', marginLeft: scaledWidth(20) },
    bankNameText:{ color: '#56565A', fontSize: scaledHeight(20), fontWeight: 'bold' },

    bankNumberText:{ color: '#56565A', fontSize: scaledHeight(14) },
    bankTopView:{ backgroundColor: '#E9E9E9', margin: scaledWidth(5), width: scaledWidth(66) },
    bankView:
    {
        borderColor: '#5D83AE99',
        borderWidth: 1, 
        flexDirection:'row', 
        height:scaledHeight(80),
        marginBottom:scaledHeight(20),
        
    },
    bankViewSelected:
    {
        borderColor: '#B5E198',
        borderWidth: 5, 
        flexDirection:'row', 
        height:scaledHeight(80),
        marginBottom:scaledHeight(20),
        
    },
     blackTextBold16px: {
    color: '#333333DE',
    fontSize: scaledHeight(16),
    fontWeight: 'bold',
    height: scaledHeight(19),
},
    body:
    {
        marginLeft:'4%',
        marginRight:'4%'
    },
     cancelButton:{
        alignItems:'center',
        backgroundColor:'#FFFFFF',
        borderColor:'#61285F45',
        borderWidth:1,
        height:scaledHeight(50),
        justifyContent:'center',
        marginLeft:'10%',
        marginRight:'10%',
        marginTop:scaledHeight(15),
        width:'80%'
     },
     cancelButtonText:{
        color:'#544A54',
        fontSize:scaledHeight(16),
        fontWeight:'bold'
    },
    
    childSectionGrp: {
        flexGrow: 1
    },
    circleText:{      
        fontSize:scaledHeight(15)
    },
    circleTextNew:{      
       fontSize:scaledHeight(15),
        fontWeight:'bold'
    },
    circle_Completed: {
        alignItems:'center',
        backgroundColor: '#A7E993',
        borderRadius: scaledHeight(35)/2,
        height: scaledHeight(35),
        justifyContent:'center',
        width: scaledWidth(35)
    },
    circle_Inprogress: {
        alignItems:'center',
        backgroundColor: '#CDDBFC',
        borderColor:'#9DB6F1',
        borderRadius: scaledHeight(35)/2,
        height: scaledHeight(35),
        justifyContent:'center',
        width: scaledWidth(35)
    },
    circle_NotStarted: {
        
        alignItems:'center',
        backgroundColor: '#C1C1C1',
        borderRadius: scaledHeight(35)/2,
        height: scaledHeight(35),
        justifyContent:'center',
        width: scaledWidth(35)
        
    },

    circle_connect:{
        alignSelf:'center',
        borderTopColor:'#C1C1C1',
        borderTopWidth:1,
        width:scaledWidth(40)
    },

    circle_view:{
        flexDirection:'row',
        justifyContent:"center",
        marginTop:scaledHeight(30),
    },
    cityStateBlock:
    { flexDirection: 'row', flex: 1, marginBottom: scaledHeight(20) },
    cityStateStyle:
    { flex: 0.5, marginRight: scaledWidth(30) },
    colItem: {
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        borderColor: '#70707080',
        borderWidth: 1,
        flexDirection: 'column',
        flexGrow: 1,
        justifyContent: 'center',
        marginVertical: scaledHeight(15),
        padding: scaledHeight(15)
    },
    compareFundsBtn: {
        alignContent: 'center',
        backgroundColor: '#FFFFFF',
        borderColor: "#61285F45",       
        borderWidth: 1,
        height: scaledHeight(60),      
        justifyContent: 'center',
        marginBottom:scaledHeight(5),
        marginTop: scaledHeight(15),
        paddingHorizontal: scaledHeight(25),
        width: '72%'

    },
    compareFundsBtnTxt: {
        color: '#5D83AE',
        fontSize: scaledHeight(16),
        fontWeight: 'bold',
       textAlign: 'center'
    },
    consumeError:
    {flexDirection:'column',width:'100%'},
    container:{
        backgroundColor:'#F7FAFF',
        flex:1,
        width:'100%'
    },
    continueButton:{
        alignItems:'center',
        backgroundColor:"rgba(84,74,84,0.5)",
        borderColor:'#61285F45',
        borderWidth:1,
        height:scaledHeight(50),
        justifyContent:'center',
        marginLeft:'10%',
        marginRight:'10%',
        marginTop:scaledHeight(15),
        width:'80%',
     },
    continueButtonSelected:{
        alignItems:'center',
        backgroundColor:'#56565A',
        borderColor:'#61285F45',
        borderWidth:1,
        height:scaledHeight(50),
        justifyContent:'center',
        marginLeft:'10%',
        marginRight:'10%',
        marginTop:scaledHeight(15),
        width:'80%'
     },
    continueButtonText:{
        color:'#FFFFFF',
        fontSize:scaledHeight(16),
        fontWeight:'bold'
    },

    dollarSkin: {
    color: '#333333DE',
    fontSize: scaledHeight(16),
    fontWeight: 'bold',
    height: scaledHeight(48),
    paddingTop: scaledHeight(15),
    width: "5%",
},
    dropDownLayout1: {
    marginLeft: "0%",
    marginRight: "0%",
    marginTop: scaledHeight(26),
    paddingLeft: '0%',
    width: "100%",
},
    dropDownPosition:
    {
        backgroundColor: 'white', borderColor: "#DEDEDF", borderWidth: scaledHeight(1), marginLeft: "0%", paddingLeft: "4%", position: 'absolute',
        top: scaledHeight(80), width: "98%", zIndex: 3
    },
    dropDownPosition1:
    { position: 'absolute', right: 0, top: scaledHeight(263) },
    dropDownText:{
    marginLeft: "0%", 
    paddingLeft: "2%", 
    width: "98%"
},
    emptyFlex: {
    height: scaledHeight(50)
},
    errMsg: {
        color: 'red',
        fontSize: scaledHeight(12),
        marginVertical: scaledHeight(12),

    },
    existingFundStyle: {
    borderColor: "#B8B8B8",
    borderRadius: scaledHeight(2),
    borderWidth: scaledHeight(1),
    color: "#656568",
    fontSize: scaledHeight(10),
    fontWeight: "400",
    height: scaledHeight(15),
    marginBottom: "2%",
    marginTop: "4%",
    padding: "2%",
    width: "30%"
  },
    expandCollpaseTxt: {
        color: '#56565A',
        fontSize: scaledHeight(15),
        textAlign: 'center'
    },
    filterFundsBtn: {
        alignContent: 'center',
        backgroundColor: '#FFFFFF',
        borderColor: "#61285F45",        
        borderWidth: 1,
        height: scaledHeight(60),      
        justifyContent: 'center',
        marginTop: scaledHeight(25),
        paddingHorizontal: scaledHeight(25),
        width: '50%'

    },
    filterFundsBtnTxt: {
        color: '#5D83AE',
        fontSize: scaledHeight(16),
        fontWeight: 'bold',
        textAlign: 'center'
    },
    financialTextLabel: {
        color: '#333333DE', fontSize: scaledHeight(18), fontWeight: 'bold', marginBottom: '4%'
    },
    flex2: {
    marginLeft: "4%",
    marginRight: "4%",
},
    fundItemContntView: {
    margin: "4%"
  },
    fundItemHeaderTxt: {
    color: "#54565B",
    fontSize: scaledHeight(18),
    fontWeight: "bold"
  },
    fundItemHeaderView: {
    margin: "4%"
  },
    fundItemStyle: {
    backgroundColor: "#FFFFFF",
    borderColor: "#9DB4CE",
    borderWidth: scaledHeight(1),
    marginBottom: "4%",
    width: "100%"
  },
    fundItemSwitch:
{ alignItems: 'flex-end', flex: 0.3, marginRight: '4%' },
    fundItemTitle:
{ flex: 0.7 },
    fundItemTopView:
  { flexDirection: 'row', flex: 1, justifyContent: "center", alignItems: 'center', borderBottomColor: '#61285F45', borderBottomWidth: 1, padding: scaledHeight(20) },
fundItemValueHeading: {
    color: "#56565A",
    fontSize: scaledHeight(14),
    fontWeight: "bold",
    lineHeight: scaledHeight(19)
  },

fundItemValueTxt: {
    color: "#56565A",
    fontSize: scaledHeight(14),
    fontWeight: "400",
    lineHeight: scaledHeight(17)
  },

fundListHeader:
     { flexDirection: 'row', flex: 1, justifyContent: "center", alignItems: 'center', borderBottomColor: '#61285F45', borderBottomWidth: 1, padding: scaledHeight(20) },
fundListHeaderView:{ flex: 0.7 },
fundListStyle:{ marginTop: scaledHeight(20) },
fundListView:{ borderColor: '#5D83AE99', borderWidth: 1, marginTop: scaledHeight(10) },
fundNameSwitch:
     { alignItems: 'flex-end', flex: 0.3, marginRight: '4%' },
fundNameText:
     { color: '#544A54', fontSize: scaledHeight(13), fontWeight: 'bold' },
fundRemainStyle:{ marginLeft: scaledWidth(10) },
fundSourceContent: {
    color: '#54565B',
    fontSize: scaledHeight(14),
    marginTop: scaledHeight(21),
},
headerFlex: {
    flexDirection: 'row',
    height: scaledHeight(29),
},
headerText: {
    color: '#56565A',
    fontSize: scaledHeight(22),
    fontWeight: 'bold',
},
headings: {
        color: '#000000',
        fontSize: scaledHeight(20),
        fontWeight: 'bold',
        lineHeight: 35,
        textAlign: 'left',
        width: '80%'
    },
horizontalFlex: {
    flexDirection: 'row'
},
initialInvestInput:
    { width: '90%' },
inputError:{flexDirection:'column',width:'100%'},
inputStyle: {
    color: '#56565A',
    fontSize: scaledHeight(16),
    paddingLeft: '1%'
},
investmentSection: {
        backgroundColor: '#FFFFFF',
        borderColor: '#70707080',
        borderWidth: 1,
        flexGrow: 1,
        marginTop: scaledHeight(15),
        paddingBottom: scaledHeight(25),
        paddingHorizontal: scaledHeight(20)

    },
investmentSectionTotalText:
    { color: '#56565A', fontSize: scaledHeight(16), fontWeight: 'bold' },
investmentSectionTotalView:
    { alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between', padding: scaledHeight(20) },
investmentSectionView:
    { flexDirection: 'column'},
lblLeftColTxt: {
        color: '#333333DE',
        fontSize: scaledHeight(16),
        fontWeight: 'bold',
        width: '40%',


    },
lblLine: {
        backgroundColor: '#707070',
        flexGrow: 1,
        height: scaledHeight(1),
        marginTop: scaledHeight(9.5),
        opacity: 0.5
    },
lblRadioBtnTxt:{
        color:'#333333DE',
        flexWrap:'wrap',
        fontSize:scaledHeight(16),
        lineHeight:28
    },
lblRadioBtnTxt1:{
        color:'#333333DE',
        fontSize:scaledHeight(16),
        lineHeight:28,
        
    },
lblRadioDescTxt:{
        color:'#333333DE',
        flexWrap:'wrap',
        fontSize:scaledHeight(14),
        lineHeight:22,
        marginTop:scaledHeight(14),
        opacity:.75
    },
lblRadioDescTxt1:{
        color:'#333333DE',
        fontSize:scaledHeight(14),
        lineHeight:22,
        marginTop:scaledHeight(14),
        opacity:.75
    },
lblRightColTxt: {
        color: '#56565A',
        fontSize: scaledHeight(16),
        width: '40%',

    },
  lblRowtitleTxt: {
        color: '#0D7CB5',
        fontSize: scaledHeight(22),
        fontWeight: 'bold',
        width: '90%',
    },
  lblTxt: {
        color: 'rgba(51, 51, 51, 0.87)',
        fontSize: scaledHeight(16),
        fontWeight: 'bold',
        marginTop: scaledHeight(25)
    },
line: {
    backgroundColor: '#535353',
    height: scaledHeight(1),
    marginTop: '4%',
    opacity: 0.25,
    width: "100%",
},
  lineStyle: {
    backgroundColor: "#9DB4CE",
    height: scaledHeight(1),
    marginBottom: "4%",
    opacity: 1,
    width: "100%"
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
  marginBottomStyle: {
    marginBottom: "4%"
  },
  modalActionContainer: {
        flexDirection: 'row',
        marginBottom: scaledHeight(50),
        marginTop: scaledHeight(20)
    },
  modalApplyBtnTxt: {
        color: '#FFFFFF',
        fontSize: scaledHeight(18),
        fontWeight: 'bold',
        textAlign: 'center',
        textTransform: 'uppercase',
        width: '100%'
    },
  modalApplyFilterBtn: {
        alignContent: 'center',
        alignItems: 'center',
        backgroundColor: '#5D83AE',
        height: scaledHeight(60),
        justifyContent: 'center',
        marginLeft: '2%',
        marginTop: scaledHeight(25),
        width: scaledWidth(140),
    },
  modalBackgroundView: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        height: '100%',
    },
  modalCancelBtnTxt: {
        color: '#5D83AE',
        fontSize: scaledHeight(18),
        fontWeight: 'bold',
        textAlign: 'left',
        width: '100%'
    },
  modalCheckBoxLabel: {
        color: '#56565A',
        fontSize: scaledHeight(16),
        marginBottom: scaledHeight(18),

    },
  modalClearFilterBtn: {
        alignContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        height: scaledHeight(60),
        justifyContent: 'center',
        marginLeft: '2%',
        marginRight: '2%',
        marginTop: scaledHeight(25),
        paddingLeft: '2%',
        width: scaledWidth(140)
    },
    modalContainer: {
        backgroundColor: '#FFFFFF',
        marginBottom: scaledHeight(40),
        marginLeft: '5%',
        marginRight: '5%',
        marginTop: scaledHeight(40),
        paddingBottom: scaledHeight(15),
        paddingLeft: '4%',
        paddingRight: '4%',
        paddingTop: scaledHeight(15),
    },
    modalFundCheckBoxContainer: {
        marginLeft: '4%',
        marginRight: '4%',
        marginTop: scaledHeight(20)
    },
    modalMinCheckBoxContainer: {
        marginLeft: '4%',
        marginRight: '4%',
        marginTop: scaledHeight(10)
    },
     modalMinInvestTitleText: {
        color: '#56565A',
        fontSize: scaledHeight(16),
        fontWeight: 'bold',
        marginBottom: scaledHeight(16),
        marginTop: scaledHeight(18),
    },
     modalRiskCheckBoxContainer: {
        marginLeft: '4%',
        marginRight: '4%',
        marginTop: scaledHeight(20)
    },
     modalRiskViewContainer: {
        flexDirection: 'row',
        width: '80%',
    },
     modalTitleText: {
        color: '#56565A',
        fontSize: scaledHeight(26),
        fontWeight: 'bold',
        marginLeft: '2%',
        marginTop: scaledHeight(8),
        width: '85%'
    },
     modalTitleView: {
        flexDirection: 'row',
    },
    offButtonStyle: {
    backgroundColor: '#B7B7B7',
    borderColor: '#56565A',
    borderRadius: 30,
    borderWidth: scaledHeight(1),
    height: scaledHeight(61),
    position: 'absolute',
    width: "55%"
},
    offButtonStyleDisable: {
    backgroundColor: '#FFFFFF',
    borderColor: '#56565A',
    borderRadius: 30,
    borderWidth: scaledHeight(1),
    height: scaledHeight(61),
    marginLeft: "0%",
    width: "60%",
},
    offlineOptionText:
    { alignItems: 'center', color: '#56565A', fontSize: scaledHeight(20), fontWeight: 'bold', justifyContent: 'center' },
    offlineOptionView:
    { justifyContent: 'center', marginLeft: scaledWidth(20) },
    offlineOptionViewTop:
    { backgroundColor: '#E9E9E9', justifyContent: 'center', margin: scaledWidth(5), width: scaledWidth(66), },
    onButtonStyle: {
    backgroundColor: '#B7B7B7',
    borderColor: '#56565A',
    borderRadius: 30,
    borderWidth: scaledHeight(1),
    height: scaledHeight(61),
    marginLeft: "30%",
    position: 'absolute',
    width: "40%"
},
    onButtonStyleDisable: {
    backgroundColor: '#FFFFFF',
    borderColor: '#56565A',
    borderRadius: 30,
    borderWidth: 1,
    height: scaledHeight(61),
    marginLeft: "10%",
    width: "67%",
},
    orView:
    { alignItems: "center" },
    radioBtnGrp:{
        flexDirection:'row',
        flexGrow:1,
        marginTop:scaledHeight(0)
    },
    radioBtnGrp1:{
        
        flexDirection:'column'
    },
    radioStyle:{ marginBottom: scaledHeight(0), marginTop: scaledHeight(24), width: "30%" },
    rowHeaderItem: {
        alignItems: 'flex-start',
        flexDirection: 'row',
        flexGrow: 1,
        justifyContent: 'flex-end',
        marginTop: scaledHeight(0)
    },
    rowItem: {
        alignItems: 'flex-start',
        flexDirection: 'row',
        flexGrow: 1,
        justifyContent: 'flex-end',
        marginTop: scaledHeight(22)
    },
    scrollView:
     { flex: 0.85 },
    sectionDescTxt: {
        color: '#56565A',
        fontSize: scaledHeight(18),
        lineHeight: 25,
        marginTop: scaledHeight(12)
    },
    sectionGrp: {
        flexGrow: 1,
        marginHorizontal: scaledHeight(12),
        marginTop: scaledHeight(31),
        overflow: 'hidden'
    },
    seperator_line:{
        borderTopColor:'#C1C1C1',
        borderTopWidth:1,
       
    },
    stateTaxFlex: {
    height: scaledHeight(82),
    marginTop: scaledHeight(26),
},
    stateTaxInputStyle: {
    borderColor: '#DEDEDF',
    borderWidth: scaledHeight(1),
    color: '#56565A',
    fontSize: scaledHeight(16),
    height: scaledHeight(48),
    marginTop: scaledHeight(15),
    width: "45%",
},
    stateTaxToDollarFlex: {
    flexDirection: 'row',
    marginLeft: "10%",
    marginTop: "4%"
},
    stateTaxToDollarText: {
    backgroundColor: '#F1F1F1',
    borderColor: '#DEDEDF',
    borderWidth: scaledHeight(1),
    color: '#56565A',
    fontSize: scaledHeight(16),
    height: scaledHeight(48),
    marginLeft: "6%",
    opacity: 0.8,
    paddingLeft: "4%",
    paddingTop: scaledHeight(15),
    width: "58%"
},
    switchFlex: {
    height: scaledHeight(60),
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
        marginBottom:scaledHeight(10),
        marginTop:scaledHeight(20)
    },
    totalWithdrawalFlex: {
    flexDirection: 'row',
    height: scaledHeight(48),
    marginTop: scaledHeight(15)
},
    totalWithdrawalVal: {
    backgroundColor: '#F1F1F1',
    borderColor: '#DEDEDF',
    borderWidth: scaledHeight(1),
    color: '#56565A',
    fontSize: scaledHeight(16),
    height: scaledHeight(48),
    marginLeft: "3%",
    opacity: 0.8,
    paddingLeft: "2%",
    paddingTop: scaledHeight(15),
    width: "92%"
},

});

export default styles;
import { StyleSheet } from "react-native";
import { scaledHeight, scaledWidth } from '../../Utils/Resolution';


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F7FAFF',
        width: '100%'
    },
    mainFlex:{
        flex: 0.85
    },
    horizontalFlex:{
        flexDirection: 'row'
    },
    accountFlex:{
        height:scaledHeight(82),
        flexDirection:'column',
        borderWidth:scaledHeight(1),
        borderColor:'#9DB4CE',
        marginBottom:"6%"
    },
    accountNumberText:{
        color:'#54565B',
        fontSize:scaledHeight(18),
        fontWeight:'bold',
        marginTop:scaledHeight(10),
        marginLeft:scaledHeight(10)
    },
    emptyFlex:{
        height:scaledHeight(50)
    },
    headerFlex:{
        height:scaledHeight(29),
        flexDirection:'row',
    },
    headerText:{
        color:'#56565A',
        fontSize:scaledHeight(22),
        fontWeight:'bold',
    },
    line: {
        backgroundColor: '#535353',
        opacity: 0.25,
        height: scaledHeight(1),
        width: "100%",
        marginTop: '4%',
    },
    fundSourceContent:{
        color:'#54565B',
        fontSize:scaledHeight(14),
        marginTop:scaledHeight(21),
    },
    subHeadingText:{
        color:'#56565A',
        fontWeight:'bold',
        fontSize:scaledHeight(18),
        marginTop:"3%",
    },
    offlineMethodContent:{
        color:'#333333DE',
        fontSize:scaledHeight(14),
        marginTop:"3%",
    },
    selectedBankAccountFlex:{
        borderWidth: scaledHeight(4), 
        borderColor: '#B5E198', 
        height: scaledHeight(89), 
        marginTop: scaledHeight(24) 
    },
    unSelectedBankAccountFlex:{
        borderWidth: scaledHeight(4), 
        borderColor: '#FFFFFF', 
        height: scaledHeight(89), 
        marginTop: scaledHeight(24)
    },
    or:{
        color:'#333333DE',
        fontSize:scaledHeight(18),
        marginTop:scaledHeight(34),
        marginBottom:scaledHeight(15),
        textAlign:'center'
    },
    messageFlex:{
        backgroundColor:'#F8F6DE',
        borderColor:'#61285F45',
        borderWidth:scaledHeight(1),
        marginTop: scaledHeight(25),
        marginLeft: "4%",
        marginRight:"4%",
    },
    messageText:{
        color:'#333333DE',
        fontSize:scaledHeight(16),
        fontWeight:'bold',
        padding:"4%"
    },
    offlineMethodFlex:{
        justifyContent:'space-between',
        marginBottom:"4%"
    },
   
    bankAccountFlex:{
        flexDirection: 'row', 
        borderWidth: scaledHeight(1), 
        borderColor: '#5D83AE99',  
    },
    addBankAccountFlex:{
        flexDirection: 'row', 
        borderWidth: scaledHeight(1), 
        borderColor: '#5D83AE99', 
        marginLeft: '4%', 
        marginRight: '4%', 
        height: scaledHeight(80), 
        marginTop: scaledHeight(24)
    },
    bankIconFlex:{
        justifyContent: 'center', 
        alignItems: 'center', 
        margin: scaledHeight(7), 
        width: scaledHeight(76), 
        height: scaledHeight(66), 
        backgroundColor: '#E9E9E9'
    },
    bankIconStyle:{
        width: scaledHeight(43), 
        height: scaledHeight(45), 
        alignSelf: 'center'
    },
    bankDetailsFlex:{
        flexDirection: 'column', 
        marginLeft: "10%", 
        justifyContent: 'center', 
        alignContent: 'center'
    },
    bankAccountName:{
        color: '#56565A', 
        fontSize: scaledHeight(16), 
        fontWeight: 'bold', 
        height: scaledHeight(19),
        paddingTop:scaledHeight(1),
        paddingBottom:scaledHeight(2)
    },
    bankAccountNo:{
        color: '#56565A', 
        fontSize: scaledHeight(14), 
        height: scaledHeight(17),
        paddingTop:scaledHeight(1),
        paddingBottom:scaledHeight(2)
    },
    statusText:{
        color:'#EE3F5D',
        fontSize: scaledHeight(12), 
        paddingTop:scaledHeight(1),
        paddingBottom:scaledHeight(1)
    },
    switchFlex:{
        height: scaledHeight(54),
    },
    dropDownLayout:{
        marginTop:scaledHeight(18),
        paddingLeft:'0%',
    },
    amountBeforeTaxVal:{
        height: scaledHeight(48), 
        width: scaledHeight(318), 
        borderWidth: scaledHeight(1), 
        borderColor: '#DEDEDF', 
        marginLeft: scaledHeight(16), 
        fontSize: scaledHeight(16), 
        color: '#56565A', 
        opacity: 0.8, 
        justifyContent: 'center', 
        alignContent: 'center' 
    },
    stateTaxValFlex:{
        height: scaledHeight(48),
        marginTop: scaledHeight(15), 
        width: scaledHeight(345), 
        borderWidth: scaledHeight(1), 
        borderColor: '#DEDEDF', 
        justifyContent: 'center', 
        alignContent: 'center' 
    },
    stateTaxVal:{
        fontSize: scaledHeight(16), 
        color: '#56565A', 
        borderWidth: scaledHeight(1), 
        borderColor: '#DEDEDF', 
        backgroundColor:'#FFFFFF',
        width:"100%",
        paddingLeft:"4%",
        height: scaledHeight(48),
        marginTop: scaledHeight(15), 
        paddingTop:scaledHeight(15), 
    },
    stateTaxFlex:{
        marginTop:scaledHeight(26),
        height: scaledHeight(82),
    },
    dollarSkin:{
        height: scaledHeight(48), 
        width: "5%", 
        color: '#333333DE', 
        fontSize: scaledHeight(16), 
        fontWeight: 'bold',
        paddingTop:scaledHeight(15), 
    },
    totalWithdrawalVal:{
        fontSize: scaledHeight(16), 
        color: '#56565A', 
        backgroundColor:'#F1F1F1',
        borderColor:'#DEDEDF',
        borderWidth:scaledHeight(1),
        opacity: 0.8,
        height: scaledHeight(48), 
        width:"92%",
        paddingLeft:"2%",
        paddingTop:scaledHeight(15), 
        marginLeft:"3%"
    },
    stateTaxToDollarFlex:{
        marginLeft: "10%", 
        flexDirection: 'row', 
        marginTop: "4%"
    },
    stateTaxToDollarText:{
        fontSize: scaledHeight(16), 
        color: '#56565A', 
        backgroundColor:'#F1F1F1',
        borderColor:'#DEDEDF',
        borderWidth:scaledHeight(1),
        opacity: 0.8,
        height: scaledHeight(48), 
        width:"58%",
        paddingLeft:"4%",
        paddingTop:scaledHeight(15), 
        marginLeft:"6%"
    },
    amountBeforeTaxesVal:{
        fontSize: scaledHeight(16), 
        color: '#56565A', 
        borderColor:'#DEDEDF',
        borderWidth:scaledHeight(1),
        height: scaledHeight(48), 
        width:"92%",
        marginLeft:"3%"
    },
    stateTaxInputStyle:{
        fontSize: scaledHeight(16), 
        color: '#56565A', 
        borderColor:'#DEDEDF',
        borderWidth:scaledHeight(1),
        height: scaledHeight(48), 
        width:"45%",
        marginTop:scaledHeight(15), 
    },
    inputStyle:{
        color:'#56565A',
        fontSize: scaledHeight(16), 
        paddingLeft:'1%'
    },
    reqAmountTypeStyle:{
        fontSize: scaledHeight(16), 
        color: '#56565A', 
        width:"100%",
    },
    totalWithdrawalFlex:{
        height: scaledHeight(48), 
        marginTop: scaledHeight(15), 
        flexDirection: 'row'
    },
    blackTextBold16px:{
        fontSize: scaledHeight(16), 
        fontWeight: 'bold', 
        color: '#333333DE', 
        height: scaledHeight(19) ,
    },
    onlineMethodFlex:{
        justifyContent:'space-between',
    },
    offButtonStyle: {
        borderColor: '#56565A',
        borderRadius: 30,
        height: scaledHeight(61),
        borderWidth: scaledHeight(1),
       width:"55%",
        backgroundColor: '#B7B7B7',
        position:'absolute'
    },
    onButtonStyleDisable: {
        borderColor: '#56565A',
        borderRadius: 30,
        height: scaledHeight(61),
        borderWidth: 1,
        marginLeft:"10%",
        width:"67%",
        backgroundColor: '#FFFFFF',
    },
    offButtonStyleDisable: {
        borderColor:'#56565A',
        borderRadius: 30,
        height: scaledHeight(61),
        borderWidth: scaledHeight(1),
        width:"60%",
        marginLeft:"0%",
        backgroundColor: '#FFFFFF',
    },
    onButtonStyle: {
        borderColor: '#56565A',
        borderRadius: 30,
        height:scaledHeight(61),
        borderWidth:scaledHeight(1),
        width:"40%",
        marginLeft:"30%",
        backgroundColor: '#B7B7B7',
        position:'absolute'
    },
    TextOnStyle: {
        color:'#56565A',
        fontSize: scaledHeight(14),
        fontWeight: 'bold',
        justifyContent:'flex-start',
        marginLeft:"0%",
        paddingLeft:"10%"
    },
    TextOffStyle: {
        color:'#544A54',
        opacity:0.5,
        fontSize: scaledHeight(14),
        fontWeight: 'bold',
        textAlign:'left',
        marginLeft:"4%"
    },
    TextOffStyleWithholdtax:{
        color:'#544A54',
        opacity:0.5,
        fontSize: scaledHeight(14),
        fontWeight: 'bold',
        textAlign:'right',
        marginLeft:"38%"
    },
    flex2:{
        marginLeft: "4%",
        marginRight:"4%",
    },
    flexTaxAccounting:{
        height: scaledHeight(40),
    },
    flex4:{
        height: scaledHeight(951),
        marginLeft: "4%",
        marginRight:"4%",
        marginTop:"4%"
    },
    flex4Hide:{
        height: scaledHeight(180),
        marginLeft: "4%",
        marginRight:"4%",
    },
    flex4a:{
        height: scaledHeight(140),
        flexDirection:'column',
    },
    flex4b:{
        height: scaledHeight(782),
    },
    flex5:{
        flexDirection:'column',
        marginLeft: "4%",
        marginRight:"4%",
        marginTop:"4%",
    },
    cityHeading:{
        fontSize: scaledHeight(16), 
        fontWeight: 'bold', 
        color: '#333333DE', 
        marginTop:scaledHeight(20)
    },
    greyText14pxRegular:{
       color:'#56565A',
       fontSize:scaledHeight(14),
       padding:"2%"
    },
    flexGreyBG:{
        height: scaledHeight(78),
        backgroundColor:'#F2F2F2',
        borderWidth:scaledHeight(1),
        borderColor:'#DADBDB',
        marginTop:scaledHeight(10)
    },
    addressBox:{
        fontSize: scaledHeight(16), 
        color: '#56565A', 
        backgroundColor:'#F1F1F1',
        borderColor:'#DEDEDF',
        borderWidth:scaledHeight(1),
        opacity: 0.7,
        height: scaledHeight(48), 
        width:"100%",
        paddingLeft:"2%",
        marginTop:scaledHeight(10)
    },
    flexCityNState:{
        flexDirection:'row',
        justifyContent:"space-between"
    },
    city:{
        fontSize: scaledHeight(16), 
        color: '#56565A', 
        backgroundColor:'#F1F1F1',
        borderColor:'#DEDEDF',
        borderWidth:scaledHeight(1),
        opacity: 0.7,
        height: scaledHeight(48), 
        width:"45%",
        paddingLeft:"2%",
        marginTop:scaledHeight(10)
    },
    flex6:{
        height:scaledHeight(205),
        flexDirection: 'column',
        marginLeft: "10%",
        marginRight: "10%",
        marginTop:"12%",
    },
    backButtonFlex: {
        height: scaledHeight(50),
        borderColor: '#61285F45',
        borderWidth: scaledHeight(1),
        backgroundColor:'#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:scaledHeight(18)
    },
    backButtonText: {
        color: '#544A54',
        fontWeight: 'bold',
        fontSize: scaledHeight(16),
    },
    submitFlex: {
        height: scaledHeight(50),
        borderColor: '#61285F45',
        borderWidth: scaledHeight(1),
        backgroundColor:'#544A54',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:scaledHeight(19)
    },
    submitText: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: scaledHeight(16),
    },
    fullLine: {
        backgroundColor: '#7B8288',
        opacity: 0.4,
        height: scaledHeight(1),
        marginTop: scaledHeight(40),
    },
    tNCFlex: {
        marginLeft: "4%",
        marginTop: scaledHeight(41),
        width: "92%",
    },
    tNcHeader: {
        color: '#56565A',
        fontSize: scaledHeight(16),
        fontWeight: 'bold'
    },
    tNcBody: {
        color: '#56565A',
        fontSize: scaledHeight(16),
    },

});
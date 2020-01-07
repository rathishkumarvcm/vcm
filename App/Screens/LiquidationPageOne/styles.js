import { StyleSheet } from "react-native";
import { scaledHeight } from '../../Utils/Resolution';


 const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F7FAFF',
        flex: 1,
        width: '100%'
    },
    headerFlex:{
        flexDirection:'row',
        height:scaledHeight(29),
    },
    mainFlex:{
        flex: 0.85
    },
    headerText:{
        color:'#56565A',
        fontSize:scaledHeight(22),
        fontWeight:'bold',
    },
    toggleOnFlex:{
        backgroundColor: 'white', 
        marginTop: "1%", 
        alignItems: 'flex-start', 
        justifyContent: 'flex-start', 
        width: "15%", 
        flexDirection: 'row', 
        marginRight: "6%" 
    },
    toggleOnGreyBg:{
        backgroundColor: '#444444', 
        borderColor: '#707070', 
        borderWidth: scaledHeight(1), 
        height: scaledHeight(25), 
        width: "100%", 
        borderRadius: 15, 
        marginTop: scaledHeight(2)
    },
    toggleOnCircle:{
        backgroundColor: '#FFFFFF', 
        height: scaledHeight(30), 
        width: scaledHeight(30), 
        borderRadius: scaledHeight(15), 
        borderColor: '#707070', 
        borderWidth: scaledHeight(1), 
        zIndex: 3, 
        marginLeft: scaledHeight(-30)
    },
    toggleOffFlex:{
        backgroundColor: 'white', 
        marginTop: "1%", 
        alignItems: 'flex-start', 
        justifyContent: 'flex-start', 
        width: "15%", 
        flexDirection: 'row', 
        marginRight: "6%"
    },
    toggleOffGreyBg:{
        backgroundColor: '#DBDBDB', 
        borderColor: '#707070', 
        borderWidth: scaledHeight(1), 
        height: scaledHeight(25), 
        width: "100%", 
        borderRadius: 15,
        marginTop: scaledHeight(2)
    },
    toggleOffCircle:{
        height: scaledHeight(30), 
        width: scaledHeight(30), 
        borderRadius: scaledHeight(15), 
        borderColor: '#707070', 
        borderWidth: scaledHeight(1), 
        backgroundColor: '#FFFFFF', 
        position: 'absolute', 
        zIndex: 3
    },
    flex1:{
        marginLeft: "4%",
        marginRight: "4%"
    },
    greyText16px:{
        color:'#56565A',
        fontSize:scaledHeight(16),
    },
    blackTextBold18px:{
        color:'#54565B',
        fontSize:scaledHeight(18),
        fontWeight:'bold'
    },
    currentValueflex:{
        flexDirection:'column',
        width:"50%",
        justifyContent:'space-between'
    },
    blackTextBold14px:{
        color:'#56565A',
        fontSize:scaledHeight(14),
        fontWeight:'bold'
    },
    blackText14px:{
        color:'#56565A',
        fontSize:scaledHeight(14),
    },
    accountTypeFlex:{
        flexDirection:'column',
        height:scaledHeight(45),
        marginTop:scaledHeight(30),
    },
    line: {
        backgroundColor: '#535353',
        opacity: 0.25,
        height: scaledHeight(1),
        marginTop: '4%',
        width: "100%",
    },

    accountDetailsFlex:{
        flexDirection:'column',
        height:"100%",
        borderColor:'#9DB4CE',
        borderWidth:scaledHeight(1),
        backgroundColor:'#FFFFFF',
    },
    accountDetailsFlexSelected:{
        flexDirection:'column',
        height:scaledHeight(246),
        marginTop:scaledHeight(20),
        borderColor:'#B5E198',
        borderWidth:scaledHeight(3),
        backgroundColor:'#FFFFFF',
    },
    accountDetailsFlexUnSelected:{
        flexDirection:'column',
        height:scaledHeight(246),
        marginTop:scaledHeight(20),
        borderColor:'#FFFFFF',
        borderWidth:scaledHeight(3),
        backgroundColor:'#FFFFFF',
    },

    flexAccDetails1:{
        flexDirection:'row',
        height:scaledHeight(73),
        marginLeft: '2%',
        marginRight:"4%",
        marginTop:"4%",
    },
    accountNumberFlex:{
        width:"85%"
    },
    flexAccDetails2:{
        flexDirection:'row',
        height:scaledHeight(44),
        marginTop: scaledHeight(20),
        marginLeft: "4%",
        marginRight: "4%"
    },
    flexAccDetails3:{
        flexDirection:'column',
        height:scaledHeight(44),
        marginTop: scaledHeight(20),
        marginLeft: "4%",
        marginRight: "4%",
        justifyContent:'space-between'
    },
    noRecordsFlex:{
        marginLeft:"8%",
        marginTop:"2%"
    },
    iconStyle:{
        alignItems: 'flex-start',
        justifyContent: 'flex-start', 
        width:"20%"
    },
    flex6:{
        flexDirection: 'column',
        height:scaledHeight(140),
        marginLeft: "10%",
        marginRight: "10%",
        marginTop:"12%",
    },
    backButtonFlex: {
        height: scaledHeight(50),
        borderColor: '#61285F45',
        borderWidth: scaledHeight(1),
        backgroundColor:'#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:scaledHeight(18)
    },
    backButtonText: {
        color: '#544A54',
        fontWeight: 'bold',
        fontSize: scaledHeight(16),
    },
    submitFlex: {
        height: scaledHeight(50),
        borderColor: '#544A54',
        borderWidth: scaledHeight(1),
        backgroundColor:'#544A54',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:scaledHeight(19)
    },
    submitFlexDisabled: {
        height: scaledHeight(50),
        borderColor: '#544A54',
        borderWidth: scaledHeight(1),
        backgroundColor:'#544A54',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:scaledHeight(19),
        opacity:0.5
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

export default styles;
import { StyleSheet } from "react-native";
import { scaledHeight } from '../../Utils/Resolution';


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F7FAFF',
        width: '100%'
    },
    mainFlex:{
         flex: 0.85 
    },
    headerFlex:{
        backgroundColor:'#E4EBFE',
        height:scaledHeight(46),
        justifyContent:'center',
        alignItems:'center'
    },
    signInView:{
        marginTop:scaledHeight(30),
        paddingLeft:'4%',
        paddingRight:'4%',
    },
    signIntext:{
        textAlign: 'left',
        fontSize: scaledHeight(20),
        fontWeight: 'bold',
        color: '#535353',
        flexWrap: 'wrap',
    },
    lblTxtInner:{
        color:'rgba(51, 51, 51, 0.87)',
        fontSize:scaledHeight(14),
        fontWeight:'bold',
        marginTop: scaledHeight(25),
        marginLeft:"3%",
        marginRight:"2%",
        marginTop:"4%"     
    },
lblTxtSmall:{
    fontSize:scaledHeight(14),
    marginTop: scaledHeight(5),
    color:'#333333DE', 
    marginLeft:"2%",  
},
    headerText:{
        color:'#4D79F6',
        fontSize:scaledHeight(20),
        fontWeight:'bold',
    },
    flex1:{
        height:scaledHeight(138),
        marginLeft: "4%",
        marginRight: "4%",
        marginTop:"4%",
    },
    subHeading:{
        color:'#56565A',
        fontSize:scaledHeight(22),
        height:scaledHeight(29),
        fontWeight:'bold',
    },
    line: {
        backgroundColor: '#535353',
        opacity: 0.25,
        height: scaledHeight(1),
        width: "92%",
        marginTop: '4%',
        marginBottom:"4%",
        marginLeft: '4%',
        marginRight: '4%',
    },
    section:{
        marginLeft: '4%',
        marginRight: '4%',
        height:scaledHeight(78),
        flexDirection:'column',
        justifyContent: 'space-evenly'
    },
    greyTextBold16px:{
        color:'#333333DE',
        fontSize:scaledHeight(16),
        fontWeight:'bold',
    },
    greyText16px:{
        color:'#56565A',
        fontSize:scaledHeight(16),
    },
    flex2:{
        height:scaledHeight(244),
        marginLeft: "4%",
        marginRight: "4%",
        marginTop:"10%",
    },
    selectedMutualFunds:{
        height:scaledHeight(60), 
    },
    horizontalFlex:{
        height:scaledHeight(29),
        flexDirection: 'row',
        justifyContent:'space-between',
        marginRight: '4%',
        alignItems:'center'
    },
    edit:{
        color:'#5D83AE',
        fontSize:scaledHeight(15),
    },
    govtSecuritiesFund:{
        height:scaledHeight(184),
    },
    blackTextBold22px:{
        color:'#333333DE',
        fontSize:scaledHeight(22),
        height:scaledHeight(27),
        fontWeight:'bold',
        marginLeft: '4%',
    },
    flex3:{
        height:scaledHeight(202),
        marginLeft: "4%",
        marginRight: "4%",
        marginTop:"10%",
    },
    flex3b:{
        height:scaledHeight(142),
    },
    flex4:{
        //height:scaledHeight(565),
        height:scaledHeight(643),
        marginLeft: "4%",
        marginRight: "4%",
        marginTop:"10%",
        marginBottom:"10%",
    },
    flex4b:{
        height:scaledHeight(504),
    },
    flex5:{
        height:scaledHeight(206),
        marginLeft: "4%",
        marginRight: "4%",
        backgroundColor:'#F8F6DE',
        borderColor:'#61285F45',
        borderWidth:scaledHeight(1),
    },
    text5:{
        color:'#333333DE',
        fontSize:scaledHeight(16),
        fontWeight:'bold',
        margin:"4%"
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
import { StyleSheet } from "react-native";
import { scaledHeight } from '../../Utils/Resolution';


 const styles = StyleSheet.create({
    backgroundFlex:{
        height: scaledHeight(392),
    },
    container: {
        backgroundColor: '#F7FAFF',
        flex: 1,
        width: '100%'
    },
    fullLine: {
        backgroundColor: '#7B8288',
        height: scaledHeight(1),
        marginTop: scaledHeight(40),
        opacity: 0.4,
    },
    mainFlex:{
         flex: 0.85 
    },
    tNCFlex: {
        marginLeft: "4%",
        marginTop: scaledHeight(41),
        width: "92%",
    },
    tNcBody: {
        color: '#56565A',
        fontSize: scaledHeight(16),
    },
    tNcHeader: {
        color: '#56565A',
        fontSize: scaledHeight(16),
        fontWeight: 'bold'
    },
    targetPageText:{
        color:'#5D83AE',
        fontSize:scaledHeight(44),
        fontWeight:'bold',
        height: scaledHeight(58),
        marginTop:scaledHeight(60),
        opacity:0.25,
        textAlign:'center',
    },
    transactionStatusFlex:{
        backgroundColor:'#F2F2F2',
        borderColor:'#E0E1E2',
        borderWidth:scaledHeight(1),
        height: scaledHeight(92),
        marginLeft: "4%",
        marginRight: "4%",
        marginTop:scaledHeight(30)
    },
    transactionStatusMessageFlex:{
        flexDirection: 'row', 
        flexWrap: 'wrap',
        margin: "4%",
    },
    transactionStatusText:{
        color:'#56565A',
        fontSize:scaledHeight(15)
    },
    transactionStatusTextBold:{
        color:'#56565A',
        fontSize:scaledHeight(15),
        fontWeight:'bold'
    },
});

export default styles;
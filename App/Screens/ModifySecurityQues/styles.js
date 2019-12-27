import { StyleSheet } from "react-native";
import { scaledHeight } from '../../Utils/Resolution';


//const { width } = Dimensions.get('window');


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F7FAFF',
        
        width: '100%'
    },
    headings: {
        width: '80%',
        textAlign:'left',
        fontSize: scaledHeight(20),
        fontWeight: 'bold',
        color: '#5D83AE',
        lineHeight: 35
    },
    signInView:{
        marginTop:scaledHeight(18),
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
    lblLine: {
        // width:"100%",
        flexGrow: 1,
        marginTop: scaledHeight(9.5),
        height: scaledHeight(1),
        backgroundColor: '#707070',
        opacity: .25
    },
    lblTxt:{
        color:'rgba(51, 51, 51, 0.87)',
        fontSize:scaledHeight(16),
        fontWeight:'bold',
        marginTop: scaledHeight(15)
        
    },customListTxtBox:{
        width : '100%'
    },
    customListTxtBoxError:{
        borderColor : 'red',
        width : '100%'
    },
    userIDTextBox:{
        //marginLeft:'2%',
        //marginRight:'2%',
        marginBottom:scaledHeight(18),
        width:'100%',
        marginTop:scaledHeight(15)
    },
    userIDTextBoxError:{
        //marginLeft:'2%',
        //marginRight:'2%',
        marginBottom:scaledHeight(18),
        borderColor : 'red',
        width:'100%',
        marginTop:scaledHeight(15)
    },
    cancelButton:{
        borderColor:'#61285F45',
        borderWidth:1,
        width:'80%',
        marginLeft:'10%',
        marginRight:'10%',
        marginTop:scaledHeight(12),
        //borderRadius:scaledHeight(25),
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
    saveButton:{
        borderColor:'#56565A',
        borderWidth:1,
        width:'80%',
        marginLeft:'10%',
        marginRight:'10%',
        marginTop:scaledHeight(12),
        //borderRadius:scaledHeight(25),
        height:scaledHeight(50),
        backgroundColor:'#56565A',
        alignItems:'center',
        justifyContent:'center'
     },
     saveButtonText:{
        fontSize:scaledHeight(16),
        color:'#FFFFFF',
        fontWeight:'bold'
    },
    errorMsg: {
        fontSize: scaledHeight(12),
        marginLeft: "4%",
        color: 'red',
        textAlignVertical: "top",
    },
    dropdownTextInput:{
        width:"100%",
        marginLeft:"0%",
        marginRight:"0%",
    },
    underlineText: {
        textDecorationLine: 'underline', color: "#0000FF"
    },
    additionaemailView: { alignSelf: 'flex-end' }
});
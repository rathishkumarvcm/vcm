import { StyleSheet } from "react-native";
import { scaledHeight } from '../../Utils/Resolution';


//  const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    additionaemailView: { alignSelf: 'flex-end' },
    cancelButton:{
        alignItems:'center',
        backgroundColor:'#FFFFFF',
        borderColor:'#61285F45',
        borderWidth:1,
        height:scaledHeight(50),
        justifyContent:'center',
        marginLeft:'10%',
        marginRight:'10%',
        marginTop:scaledHeight(12),
        // borderRadius:scaledHeight(25),
        width:'80%',
     },
    cancelButtonText:{
        color:'#544A54',
        fontSize:scaledHeight(16),
        fontWeight:'bold'
    },
    container: {
        backgroundColor: '#F7FAFF',
        flex: 1,
         width: '100%'
    },
    customListTxtBox:{
        width : '100%'
    },
    customListTxtBoxError:{
        borderColor : 'red',
        width : '100%'
    },dropDown1:{
         marginLeft:"0%", 
         marginRight:"0%",
         position: 'absolute',
         top: scaledHeight(155),
         width:"100%" 
    },
    dropDown2:{
         marginLeft:"0%", 
         marginRight:"0%",
         position: 'absolute',
         top: scaledHeight(330),
         width:"100%" 
    },
    dropDown3:{
         marginLeft:"0%", 
         marginRight:"0%",
         position: 'absolute',
         top: scaledHeight(500),
         width:"100%" 
    },
    dropdownTextInput:{
        marginLeft:"0%",
        marginRight:"0%",
        width:"100%",
    },
    errorMsg: {
        color: 'red',
        fontSize: scaledHeight(12),
        marginLeft: "4%",
        textAlignVertical: "top",
    },
     headings: {
        color: '#5D83AE',
        fontSize: scaledHeight(20),
        fontWeight: 'bold',
        lineHeight: 35,
        textAlign:'left',
        width: '80%'
    },
    lblLine: {
        //  width:"100%",
        backgroundColor: '#707070',
        flexGrow: 1,
        height: scaledHeight(1),
        marginTop: scaledHeight(9.5),
        opacity: .25
    },
     lblTxt:{
        color:'rgba(51, 51, 51, 0.87)',
        fontSize:scaledHeight(16),
        fontWeight:'bold',
        marginTop: scaledHeight(15)
        
    },
    saveButton:{
        alignItems:'center',
        backgroundColor:'#56565A',
        borderColor:'#56565A',
        borderWidth:1,
        height:scaledHeight(50),
        justifyContent:'center',
        marginLeft:'10%',
        marginRight:'10%',
        marginTop:scaledHeight(12),
        //  borderRadius:scaledHeight(25),
        width:'80%',
     },
    saveButtonText:{
        color:'#FFFFFF',
        fontSize:scaledHeight(16),
        fontWeight:'bold'
    },
    scrollView:{
        flex: 0.85
    },
    signInView:{
        marginTop:scaledHeight(18),
        paddingLeft:'4%',
        paddingRight:'4%',
    },
    signIntext:{
        color: '#535353',
        flexWrap: 'wrap',
        fontSize: scaledHeight(20),
        fontWeight: 'bold',
        textAlign: 'left',
    },
    underlineText: {
        color: "#0000FF", textDecorationLine: 'underline'
    },
    userIDTextBox:{
        //  marginLeft:'2%',
        //  marginRight:'2%',
        marginBottom:scaledHeight(18),
        marginTop:scaledHeight(15),
        width:'100%',
    },
    userIDTextBoxError:{
        //  marginLeft:'2%',
        //  marginRight:'2%',
        borderColor : 'red',
        marginBottom:scaledHeight(18),
        marginTop:scaledHeight(15),
        width:'100%',
       
    }
});

export default styles;
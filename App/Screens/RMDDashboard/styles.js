import { StyleSheet } from "react-native";
import { scaledHeight } from '../../Utils/Resolution';


//  const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    boxBorder:{
        borderColor:"#535353",
        borderWidth:scaledHeight(0.5),
        marginLeft:scaledHeight(15),
        marginRight:scaledHeight(15),
        marginTop:scaledHeight(18),
        paddingBottom:"4%"
    },
    container: {
        backgroundColor: '#F7FAFF',
        flex: 1,
        width: '100%'
    },
    dropdownTextInput:{
        marginLeft:"0%",
        marginRight:"0%",
        width:"100%",
    },
    headings: {
        color: '#5D83AE',
         fontSize: scaledHeight(20),
        fontWeight: 'bold',
        lineHeight: 35,
        textAlign:'left',
        width: '80%',
        
    },
    lblLine: {
        backgroundColor: '#707070',
        flexGrow: 1,
        height: scaledHeight(1),
        marginTop: scaledHeight(9.5), 
        opacity: .25
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
        marginLeft:scaledHeight(10),
        marginTop:scaledHeight(5),
        textAlign: 'left',       
    },
    textFlatListHeader:{
        color:'rgba(51, 51, 51, 0.87)',
        fontSize:scaledHeight(12),
         fontWeight:'bold',
        marginTop: scaledHeight(5),
        // width:scaledHeight(80)
        
    },
    textMedium:{
        color: '#535353',
        flexWrap: 'wrap',
        fontSize: scaledHeight(15),
        fontWeight: 'bold',
        marginTop:scaledHeight(10),
        textAlign: 'left',    
    },
    
    
    textSmall:{
        color:'rgba(51, 51, 51, 0.87)',
        fontSize:scaledHeight(10),
        // fontWeight:'bold',
        marginTop: scaledHeight(5)
        
    },
    textSmallRed:{
        color:'red',
        fontSize:scaledHeight(10),
        // fontWeight:'bold',
        marginTop: scaledHeight(5)
        
    },
    

    textSmallUnderline:{
        color: "#0000FF",
        fontSize:scaledHeight(10),
        marginLeft:scaledHeight(20),
        marginTop: scaledHeight(13),
        textDecorationLine: 'underline',   
    },
    underlineText: {
        color: "#0000FF",
        textDecorationLine: 'underline', 
    },
    userIDTextBox:{
        marginTop:scaledHeight(5),
        width:'50%',   
    },
    userIDTextBoxError:{
        borderColor : 'red',
        marginBottom:scaledHeight(18),
        marginTop:scaledHeight(15),
        width:'100%',
    },
    
    
    viewRow:{
        flexDirection:"row",
        justifyContent:"space-between",
        marginTop:scaledHeight(18),
        paddingLeft:'4%',
        paddingRight:'4%',    
    },
    
    
    
});

export default styles;
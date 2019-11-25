import { StyleSheet, Dimensions } from "react-native";
import { convertToDeviceResolution, scaledHeight, scaledWidth } from '../../Utils/Resolution';
const { width } = Dimensions.get('window');


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F7FAFF',
        width: '100%'
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
        marginTop: scaledHeight(25),
        
    },
    lblTxtSmall:{
        color:'rgba(51, 51, 51, 0.87)',
        fontSize:scaledHeight(16),
        //fontWeight:'bold',
        marginTop: scaledHeight(25),
        
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
bottomView:{
    backgroundColor:"#EEEEEE",
    marginTop:"10%",
    paddingBottom:"5%"
},
lblTxtBottom:{
    fontSize:scaledHeight(16),
    marginTop: scaledHeight(25),
    color:'#333333DE', 
    width:'80%',
    marginLeft: scaledHeight(20)
    
},
lblTxtBottomTxt:{
    fontSize:scaledHeight(16),
    fontWeight:'bold',
    marginTop: scaledHeight(25),
    color:'#333333DE', 
    width:'80%',
    marginLeft: scaledHeight(20)
    
},
touchableOpacityStyle:{
    marginTop:"5%",
    
},
txtUnderline:{
     textDecorationLine: 'underline',
     color:"#0000FF" ,
     height:scaledHeight(20),
},
lblTxtToken:{
    color:'rgba(51, 51, 51, 0.87)',
    fontSize:scaledHeight(16),
    fontWeight:'bold',
    marginTop: scaledHeight(25),
    width:scaledHeight(120)
    
},
agreeSectionGrp: {
    flexGrow: 1,
    marginTop: scaledHeight(10),
    paddingHorizontal: scaledHeight(12),
    paddingVertical: scaledHeight(12)

},
agreeTermsTxt: {
    textAlign: 'left',
    fontSize: scaledHeight(16),
    marginTop: scaledHeight(2),
    color: '#333333DE',
    lineHeight: scaledHeight(19),
    //marginTop:scaledHeight(5)

},


});
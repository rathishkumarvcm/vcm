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
    lblLine: {
        // width:"100%",
        flexGrow: 1,
        marginTop: scaledHeight(9.5),
        height: scaledHeight(1),
        backgroundColor: '#707070',
        opacity: .25
    },
    accountNumberText:{
        color:'#54565B',
        fontSize:scaledHeight(18),
        fontWeight:'bold',
        marginTop:scaledHeight(10),
        marginLeft:scaledHeight(10)
    },
    accountFlex:{
        height:scaledHeight(82),
        flexDirection:'column',
        borderWidth:scaledHeight(1),
        borderColor:'#9DB4CE',
        marginBottom:"6%"
    },
    lblTxt:{
        color:'rgba(51, 51, 51, 0.87)',
        fontSize:scaledHeight(16),
        fontWeight:'bold',   
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
lblTxtMedium:{
    fontSize:scaledHeight(15),
    marginTop: scaledHeight(10),
    color:'#333333DE', 
    marginLeft:"2%",  
},
row: {
    flexDirection: 'row',
    marginTop:scaledHeight(18),
    height: 50,
    alignItems: 'center',
    backgroundColor:"#EEEEEE"
}, 
cancelButton:{
    borderColor:'#61285F45',
    borderWidth:1,
    width:'80%',
    marginLeft:'12%',
    marginRight:'10%',
    marginTop:scaledHeight(25),
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
    marginLeft:'12%',
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

viewColum:{
    flexDirection:'column'
},
viewRow:{
    flexDirection:'row'
},
radioButtonLayout : {
    width : '92%', 
    marginTop : '4%',
   flexDirection: "row",
   marginBottom : '2%',
   marginLeft:"3%"
},
outerCircle : {
    height: scaledHeight(32),
    width: scaledHeight(32),
    borderRadius: scaledHeight(16),
    borderWidth: scaledHeight(2),
    borderColor: '#707070',
    alignItems: 'center',
    justifyContent: 'center',
},
innerCircle : {
    height: scaledHeight(12),
    width: scaledHeight(12),
    borderRadius: scaledHeight(6),
    backgroundColor: '#707070'
},
questionsSection : {
    height:scaledHeight(40), 
    //alignItems:'center',
    //justifyContent:'center',
    marginLeft : '3%', 
    flexDirection:'column',
    marginTop: '2%'
},

questionsText : {
    fontSize : scaledHeight(16),
    color : '#333333DE'
},



});
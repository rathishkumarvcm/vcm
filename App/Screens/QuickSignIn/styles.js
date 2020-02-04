import { StyleSheet } from "react-native";
import { scaledHeight } from '../../Utils/Resolution';


const styles = StyleSheet.create({
    TextOffStyle: {
    color:'#544A54',
    fontSize: scaledHeight(14),
    fontWeight: 'bold',
    opacity:0.5,
    paddingLeft:"8%",
    textAlign:'center'
},
    TextOffStyleWithholdtax:{
    color:'#544A54',
    fontSize: scaledHeight(14),
    fontWeight: 'bold',
    marginLeft:"0%",
    opacity:0.5,
    paddingLeft:"3%",
    textAlign:'center'
},
    TextOnStyle: {
    color:'#56565A',
    fontSize: scaledHeight(14),
    fontWeight: 'bold',
    justifyContent:'flex-start',
    marginLeft:"0%",
    paddingLeft:"10%"
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
    marginTop:scaledHeight(30),
    width:'80%'
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
lblLine: {       
        backgroundColor: '#707070',
        flexGrow: 1,
        height: scaledHeight(1),
        marginTop: scaledHeight(9.5),
        opacity: .25
    },
lblTxt:{
        color:'#333333DE',
        fontSize:scaledHeight(16),
        marginTop: scaledHeight(15)
        
    },
offButtonStyle: {
    backgroundColor: '#B7B7B7',
    borderColor: '#56565A',
    borderRadius: 30,
    borderWidth: scaledHeight(1),
    height: scaledHeight(50),
    marginLeft:"-4%",
    width: '60%',
},
offButtonStyleDisable: {
    backgroundColor: '#FFFFFF',
    borderColor:'#56565A',
    borderRadius: 30,
    borderWidth: 1,
    height: scaledHeight(50),
    marginLeft:"-4%",
    width: '60%',
},
onButtonStyle: {
    backgroundColor: '#B7B7B7',
    borderColor: '#56565A',
    borderRadius: 30,
    borderWidth: 1,
    height: scaledHeight(50),
    marginLeft:"30%",
    width: '48%',
},
onButtonStyleDisable: {
    backgroundColor: '#FFFFFF',
    borderColor: '#56565A',
    borderRadius: 30,
    borderWidth: 1,
    height: scaledHeight(50),
    marginLeft:"10%",
    width: '72%',
},
scrollView:{
     flex: 0.85 
},
 signInView:{
        marginTop:scaledHeight(30),
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
switchBoxView:{
    backgroundColor:"white",
    borderColor:"#61285F45",
    borderRadius:10,
    borderWidth:0.5,
    marginLeft:"5%",
    marginTop:"5%",
    padding:"4%",
    width:"90%"}
});
export default styles;
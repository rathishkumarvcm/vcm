import { StyleSheet } from "react-native";
import { scaledHeight, scaledWidth } from '../../Utils/Resolution';


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
        //  width:"100%",
        flexGrow: 1,
        marginTop: scaledHeight(9.5),
        height: scaledHeight(1),
        backgroundColor: '#707070',
        opacity: .25
    },
    lblTxt:{
        color:'#333333DE',
        fontSize:scaledHeight(16),
        marginTop: scaledHeight(15)
        
    },
offButtonStyle: {
    borderColor: '#56565A',
    borderRadius: 30,
    height: scaledHeight(50),
    borderWidth: scaledHeight(1),
    width: '60%',
    marginLeft:"-4%",
    backgroundColor: '#B7B7B7',
},
onButtonStyleDisable: {
    borderColor: '#56565A',
    borderRadius: 30,
    height: scaledHeight(50),
    borderWidth: 1,
    marginLeft:"10%",
    width: '72%',
    backgroundColor: '#FFFFFF',
},
offButtonStyleDisable: {
    borderColor:'#56565A',
    borderRadius: 30,
    height: scaledHeight(50),
    borderWidth: 1,
    width: '60%',
    marginLeft:"-4%",
    backgroundColor: '#FFFFFF',
},
onButtonStyle: {
    borderColor: '#56565A',
    borderRadius: 30,
    height: scaledHeight(50),
    borderWidth: 1,
    marginLeft:"30%",
    width: '48%',
    backgroundColor: '#B7B7B7',
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
    textAlign:'center',
    paddingLeft:"8%"
},
TextOffStyleWithholdtax:{
    color:'#544A54',
    opacity:0.5,
    fontSize: scaledHeight(14),
    fontWeight: 'bold',
    marginLeft:"0%",
    textAlign:'center',
    paddingLeft:"3%"
},
cancelButton:{
    borderColor:'#61285F45',
    borderWidth:1,
    width:'80%',
    marginLeft:'10%',
    marginRight:'10%',
    marginTop:scaledHeight(30),
    // borderRadius:scaledHeight(25),
    height:scaledHeight(50),
    backgroundColor:'#FFFFFF',
    alignItems:'center',
    justifyContent:'center'
 },
 cancelButtonText:{
    fontSize:scaledHeight(16),
    color:'#544A54',
    fontWeight:'bold'
}
})
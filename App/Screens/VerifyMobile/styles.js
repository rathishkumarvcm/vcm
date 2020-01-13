import { StyleSheet } from "react-native";
import { scaledHeight } from '../../Utils/Resolution';

const styles = StyleSheet.create({
    btnGroup:{
          alignItems:'center',
          marginBottom:scaledHeight(10),
          marginTop:scaledHeight(35),       
      },
    container: {
        backgroundColor: '#F7FAFF',
        flex: 1,
        width: '100%',    
    },
    headContainer:{
        marginLeft:'4%',
        marginRight:'4%',
        marginTop:scaledHeight(30)
    },
    headDescTitle:{
        color:'#56565A',
        fontSize:scaledHeight(14),
        marginTop:scaledHeight(15)
    },
    headTitle:{
        color:'#56565A',
        fontSize:scaledHeight(32)
    },
    mobileNumberInputText:{      
        marginTop:scaledHeight(10),
        width:'100%',                        
    },
    mobileNumberLabel:{
        color:'#56565A',
        fontSize:scaledHeight(16),
        fontWeight:'bold',
        marginTop:scaledHeight(30)
    },
    normalBlackBtn: {          
        alignContent: 'center',
        alignItems: 'center',
        backgroundColor: '#544A54',
        borderColor : "#61285F45",
        borderWidth : 1,
        height: scaledHeight(50),
        justifyContent: 'center',   
        marginTop:scaledHeight(20)                       
      },
    normalBlackBtnTxt: {
          color:'#fff',
          fontSize: scaledHeight(16),
          fontWeight:'bold',
          textAlign: 'center',
          width: '100%'
      }, 
    normalWhiteBtn: {       
        alignContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderColor : "#61285F45",
        borderWidth : 1,
        height: scaledHeight(50),
        justifyContent: 'center',  
        marginTop:scaledHeight(20)    
      },
      normalWhiteBtnTxt: {
          color:'#544A54',
          fontSize: scaledHeight(16),
          fontWeight:'bold',
          textAlign: 'center',        
          width: '100%'
      },
      pagerContainer:{
        alignItems: 'center',   
        flexDirection:'row',
        justifyContent: 'center',
        marginBottom:scaledHeight(30),
        marginTop:scaledHeight(10)
    },
      pagerOne:{
        backgroundColor:'#56565A',
        flex:0.4,
        height:scaledHeight(8),       
        marginRight:'1%'
    },  
      pagerTwo:{
        backgroundColor:'#E6E6E6',
        flex:0.4,
        height:scaledHeight(8),
        marginRight:'1%'
    },
    scrollViewFlex:{
        flex: 0.85
    }
});

export default styles;
import { StyleSheet } from "react-native";
import { scaledHeight } from '../../Utils/Resolution';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F7FAFF',
        width: '100%',    
    },
    headContainer:{
        marginTop:scaledHeight(30),
        marginLeft:'4%',
        marginRight:'4%'
    },
    pagerContainer:{
        flexDirection:'row',   
        marginTop:scaledHeight(10),
        marginBottom:scaledHeight(30),
        alignItems: 'center',
        justifyContent: 'center'
    },
    pagerOne:{
        flex:0.4,
        height:scaledHeight(8),
        backgroundColor:'#56565A',       
        marginRight:'1%'
    },
    pagerTwo:{
        height:scaledHeight(8),
        backgroundColor:'#E6E6E6',
        flex:0.4,
        marginRight:'1%'
    },
    headTitle:{
        fontSize:scaledHeight(32),
        color:'#56565A'
    },
    headDescTitle:{
        fontSize:scaledHeight(14),
        color:'#56565A',
        marginTop:scaledHeight(15)
    },
    socialSecurityLabel:{
        fontSize:scaledHeight(16),
        color:'#56565A',
        marginTop:scaledHeight(30),
        fontWeight:'bold'
    },
    socialSecurityInputText:{      
        marginTop:scaledHeight(10),
        width:'100%',                        
    }, 
    normalWhiteBtn: {       
        borderWidth : 1,
        borderColor : "#61285F45",
        height: scaledHeight(50),
        backgroundColor: '#fff',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',      
      },
      normalWhiteBtnTxt: {
          fontSize: scaledHeight(16),
          color:'#544A54',
          width: '100%',
          textAlign: 'center',        
          fontWeight:'bold'
      },
      normalBlackBtn: {          
        borderWidth : 1,
        borderColor : "#61285F45",
        height: scaledHeight(50),
        backgroundColor: '#544A54',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center', 
        marginTop:scaledHeight(20)                  
      },
      normalBlackBtnTxt: {
          fontSize: scaledHeight(16),
          color:'#fff',
          width: '100%',
          textAlign: 'center',
          fontWeight:'bold'
      },  
      btnGroup:{
          marginTop:scaledHeight(35),
          marginBottom:scaledHeight(10),
          alignItems:'center'       
      }
});
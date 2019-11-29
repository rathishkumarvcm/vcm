import { StyleSheet, Dimensions } from "react-native";
import { scaledHeight, scaledWidth } from '../../Utils/Resolution';



export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F7FAFF',
        width: '100%'
    },
    loginHeader: {
        flex: .15,
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
        paddingLeft: '4%',
        paddingRight: '4%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    skipButton: {   
        borderColor: '#61285F45',
        borderWidth: 1,
        height: scaledHeight(40),
        width: '30%',
        justifyContent: "center",
        alignItems: 'center',
        borderRadius: scaledHeight(20),
        backgroundColor: "#FFFFFF",
        marginTop: '2%'
    },
    skipButtonText: {
        fontSize: scaledHeight(16),
        color: '#544A54',
        alignItems: "center",
    },
    conentMarginTop: {
        marginTop: scaledHeight(10),
        color:'#56565A',
        fontSize:scaledHeight(15),
        marginBottom:scaledHeight(25),
    },
    autoInvestHead: {
        marginTop: scaledHeight(15),
        marginBottom: scaledHeight(15),
        fontSize: scaledHeight(20),
        fontWeight: '500',
        color:'#707070'
    },
    addInvestTitle: {
        marginTop: scaledHeight(20),
        marginBottom: scaledHeight(10),
        width: '65%',
        fontSize: scaledHeight(18),
        fontWeight: '400',
        color:'#56565A',
    },
    addInvest: {
        marginTop: scaledHeight(10),
        width: '35%',
        color: '#0000FF',
        fontSize: scaledHeight(16),
        fontWeight: '400',
        textAlign:'right',
        marginBottom: scaledHeight(10),
    },
    seperator_line:{
        borderTopWidth:1,
        borderTopColor:'#C1C1C1',
       
    },
    touchOpacityPosition: {
        position: 'relative',
    },
    addInvestFooterTitle:{
        color:'#54565B',
        fontSize:scaledHeight(15),
        marginBottom:scaledHeight(20),
        marginTop:scaledHeight(10),
        flex:0.9
    },
    addInvestFooterText:{
        color:'#54565B',fontSize:scaledHeight(14),marginBottom:scaledHeight(20),marginTop:scaledHeight(10)
    },
    addInvestFooterList:{
        color:'#54565B',fontSize:scaledHeight(14),marginBottom:scaledHeight(5) 
    },
    cancelButton:{
        borderColor:'#61285F45',
        borderWidth:1,
        width:'80%',
        marginLeft:'10%',
        marginRight:'10%',
        marginTop:scaledHeight(15),
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
    },

});
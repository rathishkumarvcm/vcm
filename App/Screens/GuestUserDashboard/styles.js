import { StyleSheet,Dimensions } from "react-native";
import {scaledHeight } from '../../Utils/Resolution';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    
    accountOpenView:{
        flexDirection:'row',
        marginBottom:'3%'
    },

    accountTypesText:{
        color: '#56565A',
        fontSize: scaledHeight(16),
        lineHeight: 25,
        textAlign: "left",
    },
    accountTypesView:{
        marginVertical:'3%',
    },
    bannerText: {
        backgroundColor:'#ffff',
        color: '#56565A',
        fontSize: scaledHeight(22),
        fontWeight:'bold',
        padding:'0.5%'
        // marginTop:'2%'
    },
    callButton:{
        borderColor:'#486d90',
        borderWidth:1,
        width:'60%',
        // eslint-disable-next-line react-native/sort-styles
        marginLeft:'14%',
        marginRight:'14%',
        marginTop:scaledHeight(12),
        marginBottom:scaledHeight(12),
       //  borderRadius:scaledHeight(25),
        height:scaledHeight(40),
        backgroundColor:'#486d90',
        alignItems:'center',
        justifyContent:'center'
     },
    communicationView: {
        alignItems:'center',
        // flexDirection:'row',
        justifyContent:'center',
        marginBottom: '10%',
    },
    container: {
        backgroundColor: '#F7FAFF',
        flex: 1,
        width: '100%'
    },

    dashboardSection: {
        backgroundColor:'#ffff',
        borderColor: '#61285F45',
        borderRadius: scaledHeight(8),
        borderWidth: scaledHeight(1),
        marginHorizontal:'4%',
        marginVertical:'2%',
        paddingHorizontal: '3%',
        paddingTop:'3%'
        // width: '92%',
        // paddingBottom:'10%'
    },

    dashboardText: {
        color: '#5D83AE',
        fontSize: scaledHeight(44),
        fontWeight: 'bold',
        marginTop: scaledHeight(116),
        opacity:0.25

    },

    financialView: {
        alignItems: 'center',
        backgroundColor:'#fff',
        borderColor: '#61285F45',
        borderRadius: scaledHeight(8),
        borderWidth: scaledHeight(1),
        margin :'4%',
        padding: '3%',
        width: '92%',
    },

    linkButton:{
        borderColor:'#56565A',
        borderWidth:1,
        width:'72%',
        // eslint-disable-next-line react-native/sort-styles
        marginLeft:'14%',
        marginRight:'14%',
        marginTop:scaledHeight(12),
        marginBottom:scaledHeight(12),
       //  borderRadius:scaledHeight(25),
        height:scaledHeight(50),
        backgroundColor:'#56565A',
        alignItems:'center',
        justifyContent:'center'
     },

    linkButtonText:{
        color:'#FFFFFF',
        fontSize:scaledHeight(16),
        fontWeight:'bold'
    },

    linkText:{
        color:'#2C8DBF',
        fontSize : scaledHeight(18),
        fontWeight:'bold'
    },

    newsListText: {
        color:'#2C8DBF',
        fontSize : scaledHeight(14),
    },
    newsListView:{
        marginVertical: scaledHeight(8),
    },
    openAccountText: {
        color: '#56565A',
        fontSize: scaledHeight(16),
        lineHeight: 20,
        textAlign: "left",
        width: '100%',

    },
    phoneContentText: {
        color: '#56565A',
        fontSize: scaledHeight(15),
        marginVertical: '8%',
        textAlign:'center',
    },
    phoneImage: {
        // height: '20%',
        // width: '100%'
    },
    phoneImageView: {
        backgroundColor:'#ffff',
        borderRadius:width/2,
        marginVertical: '3%',
        padding:'10%', 
        shadowColor:'#e4e6e8', 
        shadowOffset: { width: 0, height: 4, },
        shadowOpacity:80, 
        shadowRadius: 3
    },
    phoneNumText: {
        color:'#194c7d',
        fontSize:scaledHeight(15),
        fontWeight:'bold'
    },
    phoneTextView: {
        alignItems:'center',
        width:'60%'
    },
    profileHeader: {
        alignItems: 'flex-start',
        marginHorizontal: '4%',
        marginTop: scaledHeight(22)
    },
    profileHeadline: {
        color: '#56565A',
        fontSize: scaledHeight(20)
    },
    savedItemsText: {
        color:'#2C8DBF',
        fontSize : scaledHeight(14),
        textDecorationLine:'underline'
    },
    scrollContentStyle: {
        flexGrow: 1,
        paddingVertical: 0
    },
    scrollView: {
        flex: .85
    },
    tileView:{
        borderBottomWidth:0.5,
        borderColor: '#61285F45',
    }

});


export default styles;
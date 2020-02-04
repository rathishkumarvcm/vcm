import { StyleSheet } from "react-native";
import {scaledHeight } from '../../Utils/Resolution';



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
    communicationView: {
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'flex-end',
        marginBottom: '10%',
        marginRight: '10%'
    },
    container: {
        backgroundColor: '#F7FAFF',
        flex: 1,
        width: '100%'
    },
    dashboardSection: {
        backgroundColor:'#fff',
        borderColor: '#61285F45',
        borderRadius: scaledHeight(8),
        borderWidth: scaledHeight(1),
        margin :'4%',
        padding: '3%',
        width: '92%',
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
    phoneImage: {
        // width: '100%',
        height: '50%'
    },
     phoneNumText: {
        fontSize:scaledHeight(14),
        // color:'#FFFFFF',
        fontWeight:'bold'
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
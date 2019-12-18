import { StyleSheet } from "react-native";
import {scaledHeight,scaledWidth } from '../../Utils/Resolution';



export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F7FAFF',
        width: '100%'
    },
    pageHeader: {
        flex: .15,
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
        paddingLeft: scaledHeight(4),
        paddingRight: scaledHeight(4),
        justifyContent: 'center',
        alignItems: 'center'
    },

    
    scrollContentStyle: {
        paddingVertical: 0,
        flexGrow: 1
    },
    dashboardSection: {
        width: '100%',
        alignItems: 'center',
        //backgroundColor: '#F7FAFF'
    },
    dashboardText: {
        marginTop: scaledHeight(116),
        fontSize: scaledHeight(44),
        fontWeight: 'bold',
        color: '#5D83AE',
        opacity:0.25
        // textAlign:'center'

    },
    openAccBtn: {
        borderColor: '#61285F',
        borderWidth: 1,
         width: 260,
        //marginLeft: '18%',
        //marginRight: '18%',
        marginBottom:scaledHeight(157),
        marginTop:scaledHeight(26),
        
        height: scaledHeight(50),
        backgroundColor: '#544A54',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',

    },
    openAccBtnTxt: {
        fontSize: scaledHeight(16),
        color: '#FFFFFF',
        fontWeight: 'bold',
        width: '100%',
        textAlign: 'center'

    },

    newVictorySection: {
        marginBottom: scaledHeight(5),
        padding: scaledHeight(12),
        width: '100%',
        flexGrow: 1,
        backgroundColor: '#FFFFFF',


    },
    moreTxt: {
        fontSize: scaledHeight(16),
        color: '#61285F',
        fontWeight: 'bold'
    },
    pageFooter: {
        width: '100%',
        flexGrow: 1,
        backgroundColor: '#FFFFFF',

        //backgroundColor:'yellow',

    },
    disclaimerTitleTxt: { //termsofuseText
        fontSize: scaledHeight(16),
        marginBottom: scaledHeight(10),
        fontWeight: 'bold',
        color: '#56565A',
        lineHeight: 25
    },
    disclaimerTxt: {
        fontSize: scaledHeight(16),
        color: '#56565A',
        lineHeight: 25

    },
    privacyAgreement: {
        //marginTop:convertToDeviceResolution(4),
        marginVertical: scaledHeight(19),
        padding: scaledHeight(12),
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        backgroundColor: 'white',
        flexDirection: 'row',
        flexWrap: 'wrap',
        flexGrow: 1
    },
    privacyText: {
        width: '50%',
        //paddingLeft:'4%',
        marginVertical: '2%',
        color: '#61285F',
        fontWeight: 'bold',
        fontSize: scaledHeight(16)
    },
    copyRightSection: {
        height: scaledHeight(50),
        backgroundColor: '#56565A',
        alignItems: 'center',
        justifyContent: 'center'
    },
    copyRightText: {
        color: '#FFFFFF',
        fontSize: scaledHeight(12)

    },
    buttonGoActionStyle: {        
        width: scaledWidth(100),      
        height: scaledHeight(50),
        backgroundColor: '#544A54',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',       
        marginLeft:'2%',   
        marginRight:'2%',       
    },   
    buttonGoTextStyle: {
        fontSize: scaledHeight(16),
        color: '#544A54',      
        width: '100%',
        textAlign: 'center',        
    },
    buttonCancelActionStyle:{
        width: scaledWidth(100),      
        height: scaledHeight(50),
        borderColor:'#544A54',
        borderWidth:1,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        marginLeft:'2%',   
        marginRight:'2%',
    },
    modalContainerStyle: {
        backgroundColor: '#FFFFFF',       
        paddingRight: '4%',
        paddingLeft: '4%',
        paddingTop: scaledHeight(15),
        paddingBottom: scaledHeight(15), 
        marginTop:scaledHeight(80), 

    },
    buttonCancelTextStyle: {
        fontSize: scaledHeight(16),
        color: '#FFFFFF',      
        width: '100%',
        textAlign: 'center',       
    },

});
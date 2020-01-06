import { StyleSheet } from "react-native";
import {scaledHeight,scaledWidth } from '../../Utils/Resolution';



const styles = StyleSheet.create({
    buttonCancelActionStyle:{
        alignContent: 'center',      
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        borderColor:'#544A54',
        borderWidth:1,
        height: scaledHeight(50),
        justifyContent: 'center',
        marginLeft:'2%',
        marginRight:'2%',   
        width: scaledWidth(100),
    },
    buttonCancelTextStyle: {
        color: '#FFFFFF',
        fontSize: scaledHeight(16),      
        textAlign: 'center',
        width: '100%',       
    },

    
    buttonGoActionStyle: {        
        alignContent: 'center',      
        alignItems: 'center',
        backgroundColor: '#544A54',
        height: scaledHeight(50),
        justifyContent: 'center',
        marginLeft:'2%',       
        marginRight:'2%',   
        width: scaledWidth(100),       
    },
    buttonGoTextStyle: {
        color: '#544A54',
        fontSize: scaledHeight(16),      
        textAlign: 'center',
        width: '100%',        
    },
    container: {
        backgroundColor: '#F7FAFF',
        flex: 1,
        width: '100%'
    },
    copyRightSection: {
        alignItems: 'center',
        backgroundColor: '#56565A',
        height: scaledHeight(50),
        justifyContent: 'center'
    },
    copyRightText: {
        color: '#FFFFFF',
        fontSize: scaledHeight(12)

    },

    dashboardSection: {
        alignItems: 'center',
        width: '100%',
        // backgroundColor: '#F7FAFF'
    },
    dashboardText: {
        color: '#5D83AE',
        fontSize: scaledHeight(44),
        fontWeight: 'bold',
        marginTop: scaledHeight(116),
        opacity:0.25
        // textAlign:'center'

    },
    disclaimerTitleTxt: { // termsofuseText
        fontSize: scaledHeight(16),
        marginBottom: scaledHeight(10),
        fontWeight: 'bold',
        color: '#56565A',
        lineHeight: 25
    },
    disclaimerTxt: {
        color: '#56565A',
        fontSize: scaledHeight(16),
        lineHeight: 25

    },
    modalContainerStyle: {
        backgroundColor: '#FFFFFF',       
        marginTop:scaledHeight(80),
        paddingBottom: scaledHeight(15),
        paddingLeft: '4%',
        paddingRight: '4%', 
        paddingTop: scaledHeight(15), 

    },
    moreTxt: {
        color: '#61285F',
        fontSize: scaledHeight(16),
        fontWeight: 'bold'
    },
    newVictorySection: {
        backgroundColor: '#FFFFFF',
        flexGrow: 1,
        marginBottom: scaledHeight(5),
        padding: scaledHeight(12),
        width: '100%',


    },
    openAccBtn: {
        borderColor: '#61285F',
        borderWidth: 1,
         width: 260,
        // marginLeft: '18%',
        // marginRight: '18%',
        marginBottom:scaledHeight(157),
        marginTop:scaledHeight(26),
        
        height: scaledHeight(50),
        backgroundColor: '#544A54',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',

    },
    openAccBtnTxt: {
        color: '#FFFFFF',
        fontSize: scaledHeight(16),
        fontWeight: 'bold',
        textAlign: 'center',
        width: '100%'

    },
    pageFooter: {
        backgroundColor: '#FFFFFF',
        flexGrow: 1,
        width: '100%',

        // backgroundColor:'yellow',

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
    privacyAgreement: {
        // marginTop:convertToDeviceResolution(4),
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
        // paddingLeft:'4%',
        marginVertical: '2%',
        color: '#61285F',
        fontWeight: 'bold',
        fontSize: scaledHeight(16)
    },
    scrollContentStyle: {
        flexGrow: 1,
        paddingVertical: 0
    },

});


export default styles;
import {StyleSheet} from "react-native";
import {scaledHeight} from '../../Utils/Resolution';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F9FBFC',
        width: '100%',  
    },
    mainHeadingView: {
        width: '100%',
        marginTop: scaledHeight(15),
        marginBottom: scaledHeight(25),
        paddingLeft: '4%',
        paddingRight: '4%'
    },
    mainHeadlineText: {
        color: '#54565B',
        fontWeight: 'bold',
        fontSize: scaledHeight(22),
        lineHeight:27,
        textTransform:'uppercase'
    },
    subHeadlineText:{
        color: '#54565B',
        fontWeight: 'bold',
        fontSize: scaledHeight(22),
        marginTop: scaledHeight(15),
        lineHeight:29,
    },
    settingsBorder: {
        marginTop: scaledHeight(10),
        marginBottom: scaledHeight(10),
        width: '92%',
        alignSelf: 'center',
        borderBottomWidth: 1,
        borderColor: '#E2E4E5'
    },

    borderInternal:{
        marginTop: scaledHeight(10),
        marginBottom: scaledHeight(10),
        borderBottomWidth: 1,
        borderColor: '#E2E4E5'
    },
    addNewLink: {
        color: '#0000FFDE',
        lineHeight:19,
        fontWeight:'bold',
        marginTop:scaledHeight(5),
        fontSize: scaledHeight(16),
        textDecorationLine: 'underline'
    },
    cardView:{
        borderColor:'#707070',
        borderWidth:1,
        width:'100%',
        padding:'4%',
        marginTop:scaledHeight(15)
    },
    cardTitleText:{
        color: '#000000',
        fontSize: scaledHeight(18),
        fontWeight: 'bold',
        lineHeight:22,
    },
    cardMailText:{
        color: '#5D83AE',
        fontSize: scaledHeight(16),
        lineHeight:19,
        textDecorationLine:'underline'
    },
    accContentText:{
        color: '#707070',
        fontSize: scaledHeight(16),
        lineHeight:19,
        paddingRight:'4%',
    },
    accCountText:{
        color: '#5D83AE',
        fontSize: scaledHeight(18),
        lineHeight:22,
        textDecorationLine:'underline',
        fontWeight:'bold'
    },
    //add new parties

    lblTxt:{
        color:'#333333DE',
        fontSize:scaledHeight(16),
        fontWeight:'800',
        marginTop: scaledHeight(25)
    },
    lblLargeTxt:{
        color:'#333333DE',
        fontSize:scaledHeight(18),
        fontWeight:'bold',
        marginTop: scaledHeight(25)
    },
    customTxtBoxError:{
        marginTop: scaledHeight(9),
        width : '100%',
        borderColor : 'red',
        //color:'#333333DE',
    },
    customTxtBox:{
        marginTop: scaledHeight(9),
        width : '100%',
        //color:'#333333DE',
    },
    customCityTextBox:{
        marginTop: scaledHeight(9),
        width : '50%',
        color:'black'
    },
    customCityErrTextBox:{
        marginTop: scaledHeight(9),
        width : '50%',
        borderColor : 'red',
        color:'black'
    },
    customListStateTxtBox:{
        width : '80%'
    },
    customListTxtBox:{
        width : '100%',
    },
    customListTxtBoxError:{
        width : '100%',
        borderColor : 'red'
    },
    optionalTxt:{
        color:'rgba(51, 51, 51, 0.87)',
        fontSize:scaledHeight(16),
        fontWeight:'normal',
    },

    radioBtnGrp:{
        flexGrow:1,
        marginTop:scaledHeight(19),
        flexDirection:'row'
    },
    radioBtnColGrp:{
        flexGrow:1,
        marginTop:scaledHeight(19)
    },
    lblRadioBtnTxt:{
        color:'#333333DE',
        fontSize:scaledHeight(16),
        lineHeight:28,
        flexWrap:'wrap'
    },
    lblRadioDescTxt:{
        marginTop:scaledHeight(14),
        color:'#333333DE',
        fontSize:scaledHeight(14),
        lineHeight:22,
        flexWrap:'wrap',
        opacity:.75
    },
    btnGrp:{
        marginHorizontal: scaledHeight(12),
        marginVertical: scaledHeight(50),
        flexGrow: 1,
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    },
    normalWhiteBtn: {
        borderWidth : 1,
        borderColor : "#61285F45",
        borderRadius: scaledHeight(5),
        height: scaledHeight(50),
        backgroundColor: '#fff',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        marginVertical:scaledHeight(7.5),
        marginHorizontal:scaledHeight(37)

    },
    normalWhiteBtnTxt: {
        fontSize: scaledHeight(16),
        color:'#544A54',
        width: '100%',
        textAlign: 'center',
        lineHeight:22
    },
    normalBlackBtn: {
        borderWidth : 1,
        borderColor : "#61285F45",
        borderRadius: scaledHeight(5),
        height: scaledHeight(50),
        backgroundColor: '#544A54',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        marginVertical:scaledHeight(7.5),
        marginHorizontal:scaledHeight(37)
   },
   normalBlackBtnTxt: {
       fontSize: scaledHeight(16),
       color:'#fff',
       width: '100%',
       textAlign: 'center'
   },
    
   notificationView:{
        width: '100%',
        height:scaledHeight(60),
        flexDirection:'row',
        marginTop: scaledHeight(10),
        marginBottom: scaledHeight(20),
        borderRadius:scaledHeight(15),
        backgroundColor:'#E9E9E9',
        padding:'4%',
        justifyContent:'space-between'
   },
   notificationTxt:{
        fontSize: scaledHeight(16),
        color: '#56565A'
   },
    disclaimerTextHeading: {
        fontSize: scaledHeight(16),
        marginBottom: scaledHeight(10),
        fontWeight: '800',
        color: '#56565A'
    },
    disclaimerTxt: {
        fontSize: scaledHeight(16),
        color: '#56565A'
    },
    errorMsg: {
        fontSize: scaledHeight(12),
        marginLeft: "4%",
        color: 'red',
        textAlignVertical: "top",
    },
    flexMainView: {
        flex: 0.85,
    },
    flexSmall:{
        flex:0.12
    },
    saveSuccessMsgTxt:{
        flex:0.7,
        height:scaledHeight(50)
    },
    accountTaggedView:{
        flexDirection:'row',
        marginTop:scaledHeight(15)
    },
    stateCityView:{
        flexDirection:'row',
        width:'100%',
        flex:1
    },
    cityWidthDropDown:{
        width:'50%'
    }
});
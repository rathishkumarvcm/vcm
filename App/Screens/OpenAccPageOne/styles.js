import { StyleSheet, Dimensions } from "react-native";
import { scaledHeight } from '../../Utils/Resolution';

const { width } = Dimensions.get('window');


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
        paddingLeft: '4%',
        paddingRight: '4%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    registernowButton: {
        borderColor: '#61285F',
        borderWidth: 1,
        width: width / 3.3,
        borderRadius: scaledHeight(13),
        height: scaledHeight(14),
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center'
    },
    registernowButton1: {
        borderColor: '#61285F',
        borderWidth: 1,
        width: width / 2,
        borderRadius: scaledHeight(25),
        height: scaledHeight(36),
        backgroundColor: '#FFFFFF',
        alignSelf: 'center',
        justifyContent: 'center'
    },
    registernowText: {
        fontSize: scaledHeight(6),
        color: '#61285F'
    },

    nameTxt: {
        color: '#5d83ae',
        fontWeight: 'bold',
        fontSize: scaledHeight(28),
        marginVertical: "5%"
    },
    welcomeTxt: {
        color: '#678ab3',
        fontSize: scaledHeight(20),
        textAlign: 'center',
        marginVertical: "5%",
        lineHeight: 35

    },
    wizardSection: {
        width: "100%",
        flexGrow: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',

    },
    wizardPageSection: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-around',
        alignItems: 'center',
       // marginVertical: scaledHeight(25)
       marginTop:scaledHeight(41),

    },
    wizardGrid: {
        justifyContent: 'center',
        alignItems: 'center',
        width: scaledHeight(24),
        height: scaledHeight(24),
        borderColor: 'rgba(112, 112, 112, 0.5)',
        borderWidth: 1,
        backgroundColor: '#FFFFFF',

    },
    wizardPageTxt: {
        fontSize: scaledHeight(15),
        color: '#535353',
        textAlign: 'center'
    },
    wizardGridVisited: {
        justifyContent: 'center',
        alignItems: 'center',
        width: scaledHeight(24),
        height: scaledHeight(24),
        borderColor: 'rgba(112, 112, 112, 0.5)',
        borderWidth: 1,
        backgroundColor: '#58D460',

    },
    wizardGridVisitedTxt: {
        fontSize: scaledHeight(15),
        color: '#535353',
        textAlign: 'center'
    },

    wizardGridCurrent: {
        justifyContent: 'center',
        alignItems: 'center',
        width: scaledHeight(32),
        height: scaledHeight(32),
        borderColor: 'rgba(112, 112, 112, 0.5)',
        borderWidth: 1,
        backgroundColor: '#CDDBFC',

    },
    wizardPageCurrentTxt: {
        fontSize: scaledHeight(15),
        fontWeight: 'bold',
        color: '#535353',
        textAlign: 'center'
    },

    wizardTitleTxt: {
        fontSize: scaledHeight(20),
      //  fontFamily:'Roboto',
        marginHorizontal: scaledHeight(12),
       // marginVertical: scaledHeight(5),
        marginTop: scaledHeight(34),
        fontWeight: 'bold',
        color: '#535353',
        lineHeight: 22
    },

    sectionGrp: {
        overflow: 'hidden',
        marginHorizontal: scaledHeight(12),
        marginTop: scaledHeight(31),
        flexGrow: 1
    },
    sectionDescTxt: {
        marginTop:scaledHeight(19.5),
        fontSize: scaledHeight(18),
        color: 'rgba(51, 51, 51, 0.87)',
        lineHeight: 22

    },
    accTypeSelectSection: {
        flexDirection: 'row',
       // marginHorizontal: scaledHeight(12),
        flexGrow: 1
    },
    headings: {
        width: '80%',
        textAlign:'left',
        fontSize: scaledHeight(20),
        fontWeight: 'bold',
        color: '#000000',
        lineHeight: 35
    },
    lblLine: {
        // width:"100%",
        flexGrow: 1,
        marginTop: scaledHeight(9.5),
        height: scaledHeight(1),
        backgroundColor: '#707070',
        opacity:0.5
    },
    lblLine1:{
         //width:"100%",
        
         height:scaledHeight(1),
         backgroundColor:'#696069'
     },
     lblTxt:{
        color:'rgba(51, 51, 51, 0.87)',
        fontSize:scaledHeight(16),
        fontWeight:'bold',
        marginTop: scaledHeight(25)
        
    },
    radioBtnGrp:{
        flexGrow:1,
        marginTop:scaledHeight(25),

    },
    lblRadioBtnTxt:{
        color:'#333333DE',
        fontSize:scaledHeight(16),
        lineHeight:28,
        flexWrap:'wrap'
    },
    lblRadioDescTxt:{
        marginTop:scaledHeight(5),
        color:'#333333DE',
        fontSize:scaledHeight(14),
        lineHeight:22,
        flexWrap:'wrap',
        opacity:.75
    },
    
    customTxtBox:{
        marginTop: scaledHeight(9),
        width : '100%'
        
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
      //  width: '90%',
        borderWidth : 1,
        borderColor : "#61285F45",
        borderRadius: scaledHeight(24),
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
         //  width: '90%',
         borderWidth : 1,
         borderColor : "#61285F45",
         borderRadius: scaledHeight(24),
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


    newVictorySection: {
      //  marginTop: scaledHeight(150),
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
    touchItem: {
        // width:scaledHeight(250),
        //  height:scaledHeight(250),
        marginVertical: "5%"

    },
    accountItem: {
        backgroundColor: '#FFFFFF',
        // padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        borderColor: '#5d83ae',
        borderWidth: 6,
        borderStyle: 'solid',
        width: scaledHeight(250),
        height: scaledHeight(250),

    },
    accountItemTxt: {
        color: '#544a54',
        fontWeight: 'bold',
        fontSize: scaledHeight(20),
        textAlign: 'center',
        lineHeight: scaledHeight(35)
    },



});
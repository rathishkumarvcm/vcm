import { StyleSheet, Dimensions } from "react-native";
import { scaledHeight } from '../../Utils/Resolution';

const { width } = Dimensions.get('window');


const styles = StyleSheet.create({
    accTypeSelectSection: {
        flexDirection: 'row',
        flexGrow: 1
    },
    accountItem: {
        alignContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        borderColor: '#5d83ae',
        borderStyle: 'solid',
        borderWidth: 6,
        height: scaledHeight(250),
        justifyContent: 'center',
        width: scaledHeight(250),

    },
    accountItemTxt: {
        color: '#544a54',
        fontSize: scaledHeight(20),
        fontWeight: 'bold',
        lineHeight: scaledHeight(35),
        textAlign: 'center'
    },
    btnGrp:{
        alignContent: 'center',
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center',
        marginHorizontal: scaledHeight(12),
        marginVertical: scaledHeight(50)
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
    customTxtBox:{
        marginTop: scaledHeight(9),
        width : '100%'
        
    },
    disclaimerTitleTxt: { 
        color: '#56565A',
        fontSize: scaledHeight(16),
        fontWeight: 'bold',
        lineHeight: 25,
        marginBottom: scaledHeight(10)
    },
    disclaimerTxt: {
        color: '#56565A',
        fontSize: scaledHeight(16),
        lineHeight: 25

    },
    errMsg:{
        color:'red',
        fontSize:scaledHeight(12),
        marginVertical: scaledHeight(12),

      },
    headings: {
        color: '#000000',
        fontSize: scaledHeight(20),
        fontWeight: 'bold',
        lineHeight: 35,
        textAlign:'left',
        width: '80%'
    },
    lblLine: {
        backgroundColor: '#707070',
        flexGrow: 1,
        height: scaledHeight(1),
        marginTop: scaledHeight(9.5),
        opacity:0.5
    },

    lblLine1:{
        
         backgroundColor:'#696069',
         height:scaledHeight(1)
     },
    lblRadioBtnTxt:{
        color:'#333333DE',
        flexWrap:'wrap',
        fontSize:scaledHeight(16),
        lineHeight:28
    },

    lblRadioDescTxt:{
        color:'#333333DE',
        flexWrap:'wrap',
        fontSize:scaledHeight(14),
        lineHeight:22,
        marginTop:scaledHeight(5),
        opacity:.75
    },

    lblTxt:{
        color:'rgba(51, 51, 51, 0.87)',
        fontSize:scaledHeight(16),
        fontWeight:'bold',
        marginTop: scaledHeight(25)
        
    },
    moreTxt: {
        color: '#61285F',
        fontSize: scaledHeight(16),
        fontWeight: 'bold'
    },
    nameTxt: {
        color: '#5d83ae',
        fontSize: scaledHeight(28),
        fontWeight: 'bold',
        marginVertical: "5%"
    },
    newVictorySection: {
        backgroundColor: '#FFFFFF',
        flexGrow: 1,
        padding: scaledHeight(12),
        width: '100%',


    },
    normalBlackBtn: {
         alignContent: 'center',
         alignItems: 'center',
         backgroundColor: '#544A54',
         borderColor : "#61285F45",
         borderWidth : 1,
         height: scaledHeight(50),
         justifyContent: 'center',
         marginHorizontal:scaledHeight(37),
         marginVertical:scaledHeight(7.5)
        

    },
    normalBlackBtnTxt: {
        color:'#fff',
        fontSize: scaledHeight(16),
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
        marginHorizontal:scaledHeight(37),
        marginVertical:scaledHeight(7.5)

    },
    normalWhiteBtnTxt: {
        color:'#544A54',
        fontSize: scaledHeight(16),
        lineHeight:22,
        textAlign: 'center',
        width: '100%'
    },
    pageFooter: {
        backgroundColor: '#FFFFFF',
        flexGrow: 1,
        width: '100%',


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
    privacyAgreement: {
        alignItems: 'center',
        backgroundColor: 'white',
        flexDirection: 'row',
        flexGrow: 1,
        flexWrap: 'wrap',
        justifyContent: 'center',
        marginVertical: scaledHeight(19),
        padding: scaledHeight(12),
        width: '100%'
    },
    privacyText: {
        color: '#61285F',
        fontSize: scaledHeight(16),
        fontWeight: 'bold',
        marginVertical: '2%',
        width: '50%'
    },
    radioBtnGrp:{
        flexGrow:1,
        marginTop:scaledHeight(25),

    },
    radioRow:{
        marginBottom: scaledHeight(24),
        marginTop: scaledHeight(24)
    },
    registernowButton: {
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        borderColor: '#61285F',
        borderRadius: scaledHeight(13),
        borderWidth: 1,
        height: scaledHeight(14),
        justifyContent: 'center',
        width: width / 3.3
    },
    registernowButton1: {
        alignSelf: 'center',
        backgroundColor: '#FFFFFF',
        borderColor: '#61285F',
        borderRadius: scaledHeight(25),
        borderWidth: 1,
        height: scaledHeight(36),
        justifyContent: 'center',
        width: width / 2
    },
    registernowText: {
        color: '#61285F',
        fontSize: scaledHeight(6)
    },
    scrollView: {
        flex: .85
    },
    sectionDescTxt: {
        color: 'rgba(51, 51, 51, 0.87)',
        fontSize: scaledHeight(18),
        lineHeight: 22,
        marginTop:scaledHeight(19.5)

    },
    sectionGrp: {
        flexGrow: 1,
        marginHorizontal: scaledHeight(12),
        marginTop: scaledHeight(31),
        overflow: 'hidden'
    },
    touchItem: {
        marginVertical: "5%"

    },
    welcomeTxt: {
        color: '#678ab3',
        fontSize: scaledHeight(20),
        lineHeight: 35,
        marginVertical: "5%",
        textAlign: 'center'

    },
    wizardGrid: {
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        borderColor: 'rgba(112, 112, 112, 0.5)',
        borderWidth: 1,
        height: scaledHeight(24),
        justifyContent: 'center',
        width: scaledHeight(24),

    },
    wizardGridCurrent: {
        alignItems: 'center',
        backgroundColor: '#CDDBFC',
        borderColor: 'rgba(112, 112, 112, 0.5)',
        borderWidth: 1,
        height: scaledHeight(32),
        justifyContent: 'center',
        width: scaledHeight(32),

    },
    wizardGridVisited: {
        alignItems: 'center',
        backgroundColor: '#58D460',
        borderColor: 'rgba(112, 112, 112, 0.5)',
        borderWidth: 1,
        height: scaledHeight(24),
        justifyContent: 'center',
        width: scaledHeight(24),

    },
    wizardGridVisitedTxt: {
        color: '#535353',
        fontSize: scaledHeight(15),
        textAlign: 'center'
    },
    wizardPageCurrentTxt: {
        color: '#535353',
        fontSize: scaledHeight(15),
        fontWeight: 'bold',
        textAlign: 'center'
    },
    wizardPageSection: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop:scaledHeight(41),
       width: '100%',

    },
    wizardPageTxt: {
        color: '#535353',
        fontSize: scaledHeight(15),
        textAlign: 'center'
    },
    wizardSection: {
        alignItems: 'flex-start',
        flexGrow: 1,
        justifyContent: 'flex-start',
        width: "100%",

    },
    wizardTitleTxt: {
        color: '#535353',
        fontSize: scaledHeight(20),
        fontWeight: 'bold',
        lineHeight: 22,
        marginHorizontal: scaledHeight(12),
        marginTop: scaledHeight(34)
    },

});

export default styles;

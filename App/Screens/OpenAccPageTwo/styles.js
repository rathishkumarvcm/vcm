import { StyleSheet } from "react-native";
import { scaledHeight } from '../../Utils/Resolution';


const styles = StyleSheet.create({
    accSelection: {
        flexGrow: 1,
        marginHorizontal: scaledHeight(12),
        marginTop: scaledHeight(38),
        paddingTop: scaledHeight(4)
    },
    accSelectionTxt: {
        color: "#56565A",
        fontSize: scaledHeight(22),
        fontWeight: 'bold'
    },
    accTypeSelectSection: {
        alignItems: "center",
        flexDirection: 'row',
        flexGrow: 1,
        justifyContent: 'space-between',
        marginTop: scaledHeight(18),
    },
    
    addBeneficiaryBtn: {
        alignItems: 'center',
        backgroundColor: '#F7FAFF',
        flexWrap: 'wrap',
        height: scaledHeight(50),
        justifyContent: 'flex-start',
        marginTop: scaledHeight(25),
        width: '90%',

    },
    addBeneficiaryBtnTxt: {
        color: '#784978',
        fontSize: scaledHeight(16),
        fontWeight: 'bold',

    },
    addTrustee:{
        color: '#0D7CB5',
        fontSize: scaledHeight(16),
        fontWeight: 'normal',
        textDecorationLine:"underline"
    },
    allFieldsMandatoryTxt: {
        color: '#6F7070',
        fontSize: scaledHeight(14),
        fontWeight: 'normal',
        opacity:.60,  
        textAlign:"right",
        width: '70%',

    },
    allFieldsMandatoryView: {
        flexDirection:'row',
        alignItems: 'center',
        backgroundColor: '#F7FAFF',
        flexWrap: 'wrap',
        justifyContent: 'flex-end',
        marginHorizontal: scaledHeight(25),
        marginTop: scaledHeight(20)
    },
    browseBtn: {
        alignContent: 'center',
        alignItems: 'center',
        backgroundColor: '#544A54',
        borderColor: "#61285F45",
        borderRadius:scaledHeight(5),
        borderWidth: scaledHeight(1),
        height: scaledHeight(50),
        justifyContent: 'center',
        marginHorizontal: scaledHeight(0),
        marginVertical: scaledHeight(12),
        width: scaledHeight(160)


    },
    btnGrp: {
        alignContent: 'center',
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center',
        marginHorizontal: scaledHeight(12),
        marginVertical: scaledHeight(50)
    },

    childSectionGrp: {
        flexGrow: 1,
        overflow: 'hidden',

    },
    commonColView:{
        flexGrow:1
    },
    container: {
        backgroundColor: '#F7FAFF',
        flex: 1,
        width: '100%'
    },

    customListTxtBox: {
        width: '100%'
    },
    customListTxtBoxError: {
        borderColor: 'red',
        width: '100%'
    },
    customPopulatedTxtBox: {
        backgroundColor: "#F0F1F2",
        marginTop: scaledHeight(9),
        width: '100%'
    },
    customRowTxtBox: {
        width: '30%'

    },

    customTxtBox: {
        marginTop: scaledHeight(9),
        width: '100%'
    },
    customTxtBoxError: {
        borderColor: 'red',
        marginTop: scaledHeight(9),
        width: '100%'
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

    distributionCol1: {
        width: '60%'
    },
    distributionCol2: {
        width: '30%'
    },
    distributionCol3: {
        width: '10%'
    },
    distributionView: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginTop: scaledHeight(25)
    },

    dropDownLayout: {
       //  alignItems: "flex-start",
       //  justifyContent: "flex-start",
        marginLeft: '0%',
        marginRight: '0%',
        marginTop: scaledHeight(25),
        width: '100%'
    },
    dropDownPostition: {
        marginLeft: scaledHeight(0),
        marginRight: scaledHeight(0),
        width: '100%',
    },
    dropDownTextName: {
        borderColor:'blue',
        color: 'rgba(51, 51, 51, 0.87)',
        fontSize: scaledHeight(16),
        fontWeight: 'bold',
        marginBottom: scaledHeight(9),
        marginLeft: '0%',
        marginRight: '0%',
        paddingLeft: '0%',
        paddingRight: '0%',
        width: '100%'

    },

    dropDownViewPrefix: {
        flexGrow: 1,
        width: "40%"
    },

    errMsg: {
        color: 'red',
        fontSize: scaledHeight(12),
        marginVertical: scaledHeight(12),

    },
    expandCollpaseTxt: {
        color: '#56565A',
        fontSize: scaledHeight(15),
        textAlign: 'center'
    },
    explainDotteBorderTxt: {

        color: '#333333DE',
        fontSize: scaledHeight(18),
        lineHeight: 28,
        marginTop: scaledHeight(10)

    },
    explainDottedBorder: {
        alignItems: "center",
        borderBottomColor: '#56565A',
        borderBottomWidth: 1,
        flexDirection: 'row',
        justifyContent: "flex-start"

    },
    explainTxt: {

        color: '#000000DE',
        fontSize: scaledHeight(18),
        lineHeight: 28,
        marginTop: scaledHeight(10)
    },
    explainUnderline: {
        alignItems: "center",
        borderBottomColor: '#56565A',
        borderBottomWidth: 1,
        flexDirection: 'row',
        justifyContent: "flex-start"

    },
    explainUnderlineTxt: {

        color: '#56565A',
        fontSize: scaledHeight(16),
        lineHeight: 25,
        marginTop: scaledHeight(10)

    },
    explainView: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    headings: {
        color: '#000000',
        fontSize: scaledHeight(20),
        fontWeight: 'bold',
        lineHeight: 35,
        textAlign: 'left',
        width: '80%'
    },
    hintLabelTxt: {
        color: '#000000DE',
        fontSize: scaledHeight(15),
        lineHeight: 22,
        marginTop: scaledHeight(5),
        opacity: .65
    },
    lblHeader: {
        backgroundColor: "#F2F2F2",
        marginBottom: scaledHeight(10),
        marginTop: scaledHeight(9),
        padding:scaledHeight(10)
    },
    lblHeaderTxt: {
        color: '#56565A',
        fontSize: scaledHeight(20),
        fontWeight: 'bold',
        lineHeight: 35
       
    },

    lblLine: {
        backgroundColor: '#707070',
        flexGrow: 1,
        height: scaledHeight(1),
        marginTop: scaledHeight(9.5),
        opacity: .25
    },
    lblLine1: {
        backgroundColor: '#696069',
        height: scaledHeight(1),
    },
    lblRadioBtnTxt: {
        color: '#333333DE',
        flexWrap: 'wrap',
        fontSize: scaledHeight(16),
        lineHeight: 28
    },
    lblRadioDescTxt: {
        color: '#333333DE',
        flexWrap: 'wrap',
        fontSize: scaledHeight(14),
        lineHeight: 22,
        marginTop: scaledHeight(14),
        opacity: .75
    },
    lblRowTxt: {
        color: '#000000',
        fontSize: scaledHeight(16),
        fontWeight: 'bold',
    },

    lblTxt: {
        color: 'rgba(51, 51, 51, 0.87)',
        fontSize: scaledHeight(16),
        fontWeight: 'bold',
        marginTop: scaledHeight(25)

    },
    lblValueTxt: {
        color: '#56565A',
        fontSize: scaledHeight(16),
        marginTop: scaledHeight(9)
    },
    mailToCSRGrp: {
        flexGrow: 1,
        marginTop: scaledHeight(19)
    },

    militaryLblDate1: {
        color: 'rgba(51, 51, 51, 0.87)',
        fontSize: scaledHeight(16),
        fontWeight: 'normal',
        width: '20%'
    },


    militaryLblDate2: {
        marginLeft: '0%',
        width: '80%'
    },
    militaryServiceView: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },

    moreTxt: {
        color: '#61285F',
        fontSize: scaledHeight(16),
        fontWeight: 'bold'
    },
    newVictorySection: {
        backgroundColor: '#FFFFFF',
        flexGrow: 1,
        padding: scaledHeight(12),
        width: '100%',


    },


    nonUSView: {
        flexGrow: 1,
        marginTop: scaledHeight(25)
    },
    normalBlackBtn: {
        alignContent: 'center',
        alignItems: 'center',
        backgroundColor: '#544A54',
        borderColor: "#61285F45",
        borderWidth: 1,
        height: scaledHeight(50),
        justifyContent: 'center',
        marginHorizontal: scaledHeight(37),
        marginVertical: scaledHeight(7.5)


    },

    normalBlackBtnDisabledTxt: {
        color: '#fff',
        fontSize: scaledHeight(16),
        textAlign: 'center',
        width: '100%'
    },
    normalBlackBtnTxt: {
        color: '#fff',
        fontSize: scaledHeight(16),
        textAlign: 'center',
        width: '100%'
    },

    normalBlackDisabledBtn: {
        alignContent: 'center',
        alignItems: 'center',
        backgroundColor: '#544A54',
        borderColor: "#61285F45",
        borderWidth: 1,
        height: scaledHeight(50),
        justifyContent: 'center',
        marginHorizontal: scaledHeight(37),
        marginVertical: scaledHeight(7.5)



    },
    normalWhiteBtn: {
        alignContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderColor: "#61285F45",
        borderWidth: 1,
        height: scaledHeight(50),
        justifyContent: 'center',
        marginHorizontal: scaledHeight(37),
        marginVertical: scaledHeight(7.5)

    },
    normalWhiteBtnTxt: {
        color: '#544A54',
        fontSize: scaledHeight(16),
        lineHeight: 22,
        textAlign: 'center',
        width: '100%'
    },
    optionalTxt: {
        color: 'rgba(51, 51, 51, 0.87)',
        fontSize: scaledHeight(16),
        fontWeight: 'normal',
    },
    poBoxTxt: {
        color: 'rgba(51, 51, 51, 0.87)',
        fontSize: scaledHeight(12),
        fontWeight: 'normal',
        lineHeight: 32,

    },
   
    privacyNoticeTitleTxt: {
        color: '#486D89',
        fontSize: scaledHeight(26),
        lineHeight: 35
    },
    privacyNoticeTxt: {
        color: '#56565A',
        fontSize: scaledHeight(16),
        lineHeight: 22,
        marginTop: scaledHeight(16)
    },
    privacySection: {
        backgroundColor: "#FFFFFF",
        borderColor: "#FFFFFF",
        borderRadius: scaledHeight(5),
        borderWidth: 1,
        flexGrow: 1,
        marginBottom: scaledHeight(50),
        marginHorizontal: scaledHeight(12),
        padding: scaledHeight(32),
        shadowColor: "#56565A",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3
    },
    radioBtnColGrp: {
        flexGrow: 1,
        marginTop: scaledHeight(19)
    },
    radioBtnGrp: {
        flexDirection: 'row',
        flexGrow: 1,
        marginTop: scaledHeight(19)
    },
    radioCol1: {
        marginBottom: scaledHeight(0),
        width: "30%"
    },
    radioCol2: {
        marginBottom: scaledHeight(0)
    },
    regulatoryNoteTxt: {
        color: '#333333DE',
        fontSize: scaledHeight(18),
        fontWeight: 'bold',
        lineHeight: 22,
        marginTop: scaledHeight(15)
    },
    regulatoryQuestTxt: {
        color: '#333333DE',
        fontSize: scaledHeight(18),
        lineHeight: 28,
        marginTop: scaledHeight(23)

    },
    removeWhiteBtn: {
        alignContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderColor: "#DEDEDF",
        borderRadius: scaledHeight(24),
        borderWidth: 1,
        height: scaledHeight(50),
        justifyContent: 'center',
        marginVertical: scaledHeight(5),
        width: '45%'

    },
    removeWhiteBtnTxt: {
        color: '#000000',
        fontSize: scaledHeight(16),
        fontWeight: 'bold',
        marginTop: scaledHeight(10),
        textAlign: 'center',
        width: '100%',
    },
    scrollView: {
        flex: .85
    },
    sectionDescTxt: {
        color: 'rgba(51, 51, 51, 0.87)',
        fontSize: scaledHeight(18),
        lineHeight: 22,
        marginTop: scaledHeight(19.5)
    },
    sectionGrp: {
        flexGrow: 1,
        marginHorizontal: scaledHeight(12),
        marginTop: scaledHeight(31),
        overflow: 'hidden'
    },
    splitDateGrp: {
        alignItems: "flex-start",
        flexDirection: 'row',
        justifyContent: "flex-start",
        marginTop: scaledHeight(9)
    },
    suffixTxtBox: {
        marginTop: scaledHeight(9),
        width: '30%'
    },
    textInputStyle: {
        marginLeft: '0%',
        marginRight: '0%',
        marginTop: scaledHeight(0),
        width: '100%',
    },
    uploadImgView: {
        alignItems: 'center',
        flexDirection: 'row',
        flexGrow: 1,
        justifyContent: 'space-between',
        marginTop: scaledHeight(25)

    },
    uploadImgViewlbl: {
        alignItems: 'center',
        color: 'rgba(51, 51, 51, 0.87)',
        fontSize: scaledHeight(16),
        fontWeight: 'bold',
    },
    uploadW8View: {
        flexGrow: 1,
        marginTop: scaledHeight(25)
    },
    userAvatar: {
        height: scaledHeight(100),
        width: scaledHeight(100)
    }



});

export default styles;


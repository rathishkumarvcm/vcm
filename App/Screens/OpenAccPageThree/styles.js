import { StyleSheet } from "react-native";
import { scaledHeight, scaledWidth } from '../../Utils/Resolution';



const styles = StyleSheet.create({
    accTypeSelectSection: {
        marginTop: scaledHeight(20),
        flexDirection: 'row',
        justifyContent: 'space-between',
        //  marginHorizontal: scaledHeight(12),
        alignItems: "center",
        flexGrow: 1
    },

    accountItem: {
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
        justifyContent: 'flex-start',
        alignItems: "center",
        alignContent: 'center',
        borderColor: '#5D83AE99',
        borderWidth: 1,
        borderStyle: 'solid',
        //  width:'75%',
        height: scaledHeight(80),
        //  flexWrap:"wrap"

    },
    accountItemImg: {
        height: scaledHeight(45),
        width: scaledHeight(45)

    },
    accountItemImgBG: {
        alignContent: 'center',
        alignItems: "center",
        backgroundColor: '#E9E9E9',
        height: scaledHeight(65),
        justifyContent: 'center',
        marginLeft: scaledHeight(8),
        width: scaledHeight(75)


    },


    accountItemSelected: {
        flexDirection: 'row',

        backgroundColor: '#FFFFFF',
        justifyContent: 'flex-start',
        alignItems: "center",
        alignContent: 'center',
        borderColor: '#B5E198',
        borderWidth: 6,
        borderStyle: 'solid',
        //  width:'75%',
        height: scaledHeight(92),
        //  flexWrap:"wrap"
    },
    accountItemTxt: {
        color: '#56565A',
        flexWrap: "wrap",
        fontSize: scaledHeight(18),
        fontWeight: 'bold',
        lineHeight: scaledHeight(20),
        marginLeft: scaledHeight(26),
        textAlign: 'left'

    },
    btnGrp: {
        alignContent: 'center',
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center',
        marginHorizontal: scaledHeight(12),
        marginVertical: scaledHeight(50)
    },

    callMSR: {
        alignContent: 'center', alignItems: 'center',
        borderColor: "#707070",
        borderRadius: scaledHeight(31),

        borderWidth: 1,
        justifyContent: 'center',
        paddingHorizontal: scaledHeight(19),
        paddingVertical: scaledHeight(10),
    },
    childSectionGrp: {
        flexGrow: 1
    },
    colItem: {
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        borderColor: '#70707080',
        borderWidth: 1,
        flexDirection: 'column',
        flexGrow: 1,
        justifyContent: 'center',
        marginVertical: scaledHeight(15),
        padding: scaledHeight(15)
    },
    compareFundsBtn: {
        alignContent: 'center',
        backgroundColor: '#FFFFFF',
        borderColor: "#61285F45",       
        borderWidth: 1,
        height: scaledHeight(60),      
        justifyContent: 'center',
        marginBottom:scaledHeight(5),
        marginTop: scaledHeight(15),
        paddingHorizontal: scaledHeight(25),
        width: '72%'

    },
    compareFundsBtnTxt: {
        fontSize: scaledHeight(16),
        color: '#5D83AE',
        fontWeight: 'bold',
       //  width: '80%',
       textAlign: 'center'
    },
    contactMSR: {
        alignContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        flexGrow: 1,
        justifyContent: 'center'
    },
    container: {
        backgroundColor: '#F7FAFF',
        flex: 1,
        width: '100%'
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
    disclaimerTitleTxt: { //  termsofuseText
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
    dropDownLayout: {
        //  alignItems: "flex-start",
        //  justifyContent: "flex-start",
         marginLeft: '0%',
         marginRight: '0%',
         marginTop: scaledHeight(25),
         width: '100%'
     },
    dropDownPostition: {
        left: 0,
        marginLeft: scaledHeight(20),
        marginRight: scaledHeight(20),
        position: 'absolute',
        width: "100%"

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
    editFlexDirectionColumn: {
        flexDirection: 'column',
        marginTop: scaledHeight(20),
        paddingLeft: '4%',
        paddingRight: '4%',
        width: '100%',
    },

    editProfileLabel: { color: '#333333DE', fontSize: scaledHeight(16), fontWeight: 'bold', marginBottom: scaledHeight(3) },
    editRadioView: { flexDirection: 'row', marginLeft: '2%', marginTop: scaledHeight(3), width: '40%' },
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

    filterFundsBtn: {
        alignContent: 'center',
        backgroundColor: '#FFFFFF',
        borderColor: "#61285F45",        
        borderWidth: 1,
        height: scaledHeight(60),      
        justifyContent: 'center',
        marginTop: scaledHeight(25),
        paddingHorizontal: scaledHeight(25),
        width: '50%'

    },
    filterFundsBtnTxt: {
        fontSize: scaledHeight(16),
        color: '#5D83AE',
        fontWeight: 'bold',
        //  width: '80%',
        textAlign: 'center'
    },
    fundListGrp: {
        flexGrow: 1,
        marginTop: scaledHeight(27)
    },
    headings: {
        color: '#000000',
        fontSize: scaledHeight(20),
        fontWeight: 'bold',
        lineHeight: 35,
        textAlign: 'left',
        width: '80%'
    },

    investmentSection: {
        backgroundColor: '#FFFFFF',
        borderColor: '#70707080',
        borderWidth: 1,
        flexGrow: 1,
        marginTop: scaledHeight(15),
        paddingBottom: scaledHeight(25),
        paddingHorizontal: scaledHeight(20)

    },
     investmentSectionFooter: {
        backgroundColor: '#FFFFFF',
        borderColor: '#70707080',
        borderTopColor: "#FFFFFF",
        borderWidth: 1,
        flexGrow: 1,
        //   padding: scaledHeight(20)

    },
    labOR:{
        color: '#333333DE',
        fontSize: scaledHeight(18),
        lineHeight: 22,
        marginVertical: scaledHeight(12),
        textAlign: 'center'
    },
    lblLeftColTxt: {
        color: '#333333DE',
        fontSize: scaledHeight(16),
        fontWeight: 'bold',
        width: '40%',


    },
    lblLine: {
        //  width:"100%",
        flexGrow: 1,
        marginTop: scaledHeight(9.5),
        height: scaledHeight(1),
        backgroundColor: '#707070',
        opacity: 0.5
    },
    lblLine1: {
        //  width:"100%",

        height: scaledHeight(1),
        backgroundColor: '#696069'
    },
    lblMSRDescTxt: {
        color: '#333333DE',

        fontSize: scaledHeight(14),
        lineHeight: 25,
        marginBottom: scaledHeight(25)
    },
    lblMSRTxt: {
        color: '#000000',
        fontSize: scaledHeight(15),
        fontWeight: 'bold',
        lineHeight: 25,
        marginVertical: scaledHeight(25)
    },
    lblOfflineDescTxt: {
        color: '#333333DE',
        fontSize: scaledHeight(14),

        lineHeight: 25,
        marginBottom: scaledHeight(25),
        marginTop: scaledHeight(12)
    },
    lblOfflineTxt: {
        color: '#56565A',
        fontSize: scaledHeight(18),
        fontWeight: 'bold',
        marginTop: scaledHeight(80)
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
    lblRightColTxt: {
        color: '#56565A',
        fontSize: scaledHeight(16),
        width: '40%',

    },

    lblRowtitleTxt: {
        color: '#0D7CB5',
        fontSize: scaledHeight(22),
        fontWeight: 'bold',
        width: '90%',
        //   lineHeight:20
    },
    lblSelectedCountTxt: {
        color: '#56565A',
        fontSize: scaledHeight(13),
        opacity: .65,
        //  marginTop: scaledHeight(25),
        //  marginBottom: scaledHeight(15)
    },
    lblSpecimen: {
        color: 'rgba(51, 51, 51, 0.87)',
        fontSize: scaledHeight(16),
        fontWeight: 'bold',
        marginTop: scaledHeight(58),
        textAlign: 'center',
        textDecorationLine: 'underline',
        textDecorationStyle: 'solid'

    },
    lblSpecimenDesc: {
        color: '#333333DE',
        fontSize: scaledHeight(11),
        marginTop: scaledHeight(58),
        textAlign: 'left'

    },

    lblTxt: {
        color: 'rgba(51, 51, 51, 0.87)',
        fontSize: scaledHeight(16),
        fontWeight: 'bold',
        marginTop: scaledHeight(25)
    },
    modalActionContainer: {
        flexDirection: 'row',
        marginBottom: scaledHeight(50),
        marginTop: scaledHeight(20)
    },
    modalApplyBtnTxt: {
        color: '#FFFFFF',
        fontSize: scaledHeight(18),
        fontWeight: 'bold',
        textAlign: 'center',
        textTransform: 'uppercase',
        width: '100%'
    },
    modalApplyFilterBtn: {
        alignContent: 'center',
        alignItems: 'center',
        backgroundColor: '#5D83AE',
        height: scaledHeight(60),
        justifyContent: 'center',
        marginLeft: '2%',
        marginTop: scaledHeight(25),
        width: scaledWidth(140),
    },
    modalBackgroundView: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        height: '100%',
    },

    modalCancelBtnTxt: {
        color: '#5D83AE',
        fontSize: scaledHeight(18),
        fontWeight: 'bold',
        textAlign: 'left',
        width: '100%'
    },
    modalCheckBoxLabel: {
        color: '#56565A',
        fontSize: scaledHeight(16),
        marginBottom: scaledHeight(18),

    },

    modalClearFilterBtn: {
        alignContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        height: scaledHeight(60),
        justifyContent: 'center',
        marginLeft: '2%',
        marginRight: '2%',
        marginTop: scaledHeight(25),
        paddingLeft: '2%',
        width: scaledWidth(140)
    },
    modalContainer: {
        backgroundColor: '#FFFFFF',
        marginBottom: scaledHeight(40),
        marginLeft: '5%',
        marginRight: '5%',
        marginTop: scaledHeight(40),
        paddingBottom: scaledHeight(15),
        paddingLeft: '4%',
        paddingRight: '4%',
        paddingTop: scaledHeight(15),
    },
    modalFundCheckBoxContainer: {
        marginLeft: '4%',
        marginRight: '4%',
        marginTop: scaledHeight(20)
    },
    modalMinCheckBoxContainer: {
        marginLeft: '4%',
        marginRight: '4%',
        marginTop: scaledHeight(10)
    },
    modalMinInvestTitleText: {
        color: '#56565A',
        fontSize: scaledHeight(16),
        fontWeight: 'bold',
        marginBottom: scaledHeight(16),
        marginTop: scaledHeight(18),
    },

    modalRiskCheckBoxContainer: {
        marginLeft: '4%',
        marginRight: '4%',
        marginTop: scaledHeight(20)
    },
    modalRiskViewContainer: {
        flexDirection: 'row',
        width: '80%',
    },




    modalTitleText: {
        color: '#56565A',
        fontSize: scaledHeight(26),
        fontWeight: 'bold',
        marginLeft: '2%',
        marginTop: scaledHeight(8),
        width: '85%'
    },
    modalTitleView: {
        flexDirection: 'row',
    },


    moreTxt: {
        color: '#61285F',
        fontSize: scaledHeight(16),
        fontWeight: 'bold'
    },
    newVictorySection: {
        //   marginTop: scaledHeight(150),
        padding: scaledHeight(12),
        width: '100%',
        flexGrow: 1,
        backgroundColor: '#FFFFFF',


    },
    normalBlackBtn: {
        //   width: '90%',
        borderWidth: 1,
        borderColor: "#61285F45",
        height: scaledHeight(50),
        backgroundColor: '#544A54',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        marginVertical: scaledHeight(7.5),
        marginHorizontal: scaledHeight(37)


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
        //   width: '90%',
        borderWidth: 1,
        borderColor: "#61285F45",
        height: scaledHeight(50),
        backgroundColor: '#544A54',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        marginVertical: scaledHeight(7.5),
        marginHorizontal: scaledHeight(37)
    },
    normalWhiteBtn: {
        //   width: '90%',
        borderWidth: 1,
        borderColor: "#61285F45",
        height: scaledHeight(50),
        backgroundColor: '#fff',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        marginVertical: scaledHeight(7.5),
        marginHorizontal: scaledHeight(37)

    },
    normalWhiteBtnTxt: {
        color: '#544A54',
        fontSize: scaledHeight(16),
        lineHeight: 22,
        textAlign: 'center',
        width: '100%'
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
    rowHeaderItem: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
        flexGrow: 1,
        //  borderColor:'#afabb0',
        //   borderWidth:1 ,
        marginTop: scaledHeight(0)
    },
    rowItem: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
        flexGrow: 1,
        //  borderColor:'#afabb0',
        //   borderWidth:1 ,
        marginTop: scaledHeight(22)
    },
    saveButtonStyle: {
        alignItems: 'center',
        backgroundColor: '#56565A',
        borderColor: '#56565A',
        borderWidth: 1,
        height: scaledHeight(50),
        justifyContent: 'center',
        marginLeft: '4%',
        marginRight: '4%',
        marginTop: scaledHeight(12),
        width: '92%'
    },
    saveButtonText: {
        color: '#FFFFFF',
        fontSize: scaledHeight(16)
    },
    sectionDescTxt: {
        color: '#56565A',
        fontSize: scaledHeight(18),
        lineHeight: 25,
        marginTop: scaledHeight(12)
    },
    sectionGrp: {
        flexGrow: 1,
        marginHorizontal: scaledHeight(12),
        marginTop: scaledHeight(31),
        overflow: 'hidden'
    },
    settingsBorder: {
        borderBottomWidth: 1,
        borderColor: '#B2B2B2',
        marginLeft: '4%',
        marginRight: '4%',
        marginTop: scaledHeight(10)
    },
    showPagesNosTxt: {
        color: '#584f58',
        fontSize: scaledHeight(15),
        //    marginTop: scaledHeight(25),
        letterSpacing: 1
        //  marginBottom: scaledHeight(7)
    },
    showPagesTxt: {
        color: '#61285F',
        fontSize: scaledHeight(16),
        fontWeight: 'bold',

        //   marginTop: scaledHeight(25),
        //  marginBottom: scaledHeight(7)
    },
    specimenImg: {
        height: scaledHeight(176)
    },
    textInputStyle: {
        marginLeft: '0%',
        marginRight: '0%',
        marginTop: scaledHeight(0),
        width: '100%',
    },
    tollFreeContainer: {
        alignContent: 'center',
        alignItems: 'flex-start',
        backgroundColor: '#FFFFFF',
        borderColor: "#CFCFCF",
        borderWidth: 1,
        flexGrow: 1,
        justifyContent: 'center',
        padding: scaledHeight(23),
    },
    touchItem: {
        //  width:scaledHeight(250),
        //   height:scaledHeight(250),
        marginVertical: scaledHeight(14),
    },
});

export default styles;

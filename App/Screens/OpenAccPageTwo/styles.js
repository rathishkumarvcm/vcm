/* eslint-disable import/prefer-default-export */
import { StyleSheet } from "react-native";
import { scaledHeight } from '../../Utils/Resolution';


export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F7FAFF',
        flex: 1,
        width: '100%'
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
    
    childSectionGrp: {
        flexGrow: 1,
        overflow: 'hidden',

    },
    accTypeSelectSection: {
        alignItems: "center",
        flexDirection: 'row',
        flexGrow: 1,
        justifyContent: 'space-between',
        marginTop: scaledHeight(18),
        // marginHorizontal: scaledHeight(12),
    },
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
    headings: {
        color: '#000000',
        fontSize: scaledHeight(20),
        fontWeight: 'bold',
        lineHeight: 35,
        textAlign: 'left',
        width: '80%'
    },
    lblLine: {
        backgroundColor: '#707070',
        flexGrow: 1,
        height: scaledHeight(1),
        marginTop: scaledHeight(9.5),
        opacity: .25
    },

    lblLine1: {
        // width:"100%",
        backgroundColor: '#696069',
        height: scaledHeight(1),
    },
    lblTxt: {
        color: 'rgba(51, 51, 51, 0.87)',
        fontSize: scaledHeight(16),
        fontWeight: 'bold',
        marginTop: scaledHeight(25)

    },
    optionalTxt: {
        color: 'rgba(51, 51, 51, 0.87)',
        fontSize: scaledHeight(16),
        fontWeight: 'normal',
    },
    lblRowTxt: {
        color: '#000000',
        fontSize: scaledHeight(16),
        fontWeight: 'bold',
    },
    hintLabelTxt: {
        color: '#000000DE',
        fontSize: scaledHeight(15),
        lineHeight: 22,
        marginTop: scaledHeight(5),
        opacity: .65
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
    explainTxt: {

        color: '#000000DE',
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
    explainDotteBorderTxt: {

        color: '#333333DE',
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

    expandCollpaseTxt: {
        color: '#56565A',
        fontSize: scaledHeight(15),
        textAlign: 'center'
    },

    radioBtnGrp: {
        flexDirection: 'row',
        flexGrow: 1,
        marginTop: scaledHeight(19)
    },
    radioBtnColGrp: {
        flexGrow: 1,
        marginTop: scaledHeight(19)
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
    customTxtBoxError: {
        borderColor: 'red',
        marginTop: scaledHeight(9),
        width: '100%'
    },
    customTxtBox: {
        marginTop: scaledHeight(9),
        width: '100%'
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
    customRowTxtBox: {
        width: '30%'

    },
    customListTxtBox: {
        width: '100%'
    },
    customListTxtBoxError: {
        borderColor: 'red',
        width: '100%'
    },

    btnGrp: {
        alignContent: 'center',
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center',
        marginHorizontal: scaledHeight(12),
        marginVertical: scaledHeight(50)
    },
    normalWhiteBtn: {
        //  width: '90%',
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
    normalBlackBtn: {
        //  width: '90%',
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
    normalBlackBtnTxt: {
        color: '#fff',
        fontSize: scaledHeight(16),
        textAlign: 'center',
        width: '100%'
    },

    normalBlackDisabledBtn: {
        //  width: '90%',
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

    browseBtn: {
        width: scaledHeight(160),
        borderWidth: scaledHeight(1),
        borderColor: "#61285F45",
        // borderRadius: scaledHeight(4),
        height: scaledHeight(50),
        backgroundColor: '#544A54',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        marginVertical: scaledHeight(12),
        marginHorizontal: scaledHeight(0)


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
        fontSize: scaledHeight(16),
        color: '#000000',
        fontWeight: 'bold',
        width: '100%',
        // height:'100%',
        textAlign: 'center',
        marginTop: scaledHeight(10),
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


    newVictorySection: {
        //  marginTop: scaledHeight(150),
        padding: scaledHeight(12),
        width: '100%',
        flexGrow: 1,
        backgroundColor: '#FFFFFF',


    },
    moreTxt: {
        color: '#61285F',
        fontSize: scaledHeight(16),
        fontWeight: 'bold'
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

    userAvatar: {
        height: scaledHeight(100),
        width: scaledHeight(100)
    },
    dropDownLayout: {
        alignItems: "flex-start",
        justifyContent: "flex-start",
        marginLeft: '0%',
        marginRight: '0%',
        marginTop: scaledHeight(25),
        paddingLeft: '0%',
        paddingRight: '0%',
        width: '100%'
    },
    dropDownTextName: {
        color: 'rgba(51, 51, 51, 0.87)',
        fontSize: scaledHeight(16),
        fontWeight: 'bold',
        marginLeft: '0%',
        marginRight: '0%',
        marginTop: scaledHeight(0),
        paddingLeft: '0%',
        paddingRight: '0%',
        width: '100%'

    },
    textInputStyle: {
        marginLeft: '0%',
        marginRight: '0%',
        marginTop: scaledHeight(0),
        width: '100%',
    },
    /* dropDownPostition: {
         width: "100%",
         marginLeft: scaledHeight(20),
         marginRight: scaledHeight(20),
         position: 'absolute',
         left: 0
 
     },
     */
    dropDownPostition: {
        marginLeft: scaledHeight(0),
        marginRight: scaledHeight(0),
        width: '100%',
        // position: 'absolute',
        // left: 0
    },
    errMsg: {
        color: 'red',
        fontSize: scaledHeight(12),
        marginVertical: scaledHeight(12),

    },
    dropDownViewPrefix: {
        flexGrow: 1,
        width: "40%"
    },
    uploadW8View: {
        flexGrow: 1,
        marginTop: scaledHeight(25)
    },
    uploadImgView: {
        alignItems: 'center',
        flexDirection: 'row',
        flexGrow: 1,
        justifyContent: 'flex-start'
    },
    radioCol1: {
        marginBottom: scaledHeight(0),
        width: "30%"
    },
    radioCol2: {
        marginBottom: scaledHeight(0)
    },
    militaryServiceView: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'flex-start'
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
    explainView: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    distributionView: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginTop: scaledHeight(25)
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
    scrollView: {
        flex: .85
    }


});

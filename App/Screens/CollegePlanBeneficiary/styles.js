import { StyleSheet } from "react-native";
import { scaledHeight } from '../../Utils/Resolution';
//  const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    accTypeSelectSection: {
        alignItems: "center",
        flexDirection: 'row',
        flexGrow: 1,
        justifyContent: 'space-between',
        marginTop: scaledHeight(0)
    },

    addBeneficiaryBtn: {
        alignItems: 'center',
        backgroundColor: '#F7FAFF',
        flexWrap: 'wrap',
        height: scaledHeight(20),
        justifyContent: 'flex-start',
        marginTop: scaledHeight(25),
        width: '90%',

    },
    addBeneficiaryBtnTxt: {
        color: '#0000FFDE',
        fontSize: scaledHeight(16),
        fontWeight: 'bold',

    },
    agreeTxt: {
        color: '#333333DE',
        fontSize: scaledHeight(14),

        fontWeight: 'bold',
        lineHeight: 22,
        marginBottom: scaledHeight(50),
        opacity: .75,
        textAlign: "left",
        width: "100%"

    },
    btnGrp: {
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
    customRowTxtBox: {
        width: '30%'

    },
    customTxtBox: {
        marginTop: scaledHeight(9),
        width: '100%'
    },
    customTxtBoxError:{
        borderColor : 'red',
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
        //  position: 'absolute',
        //  left: 0
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
    headings: {
        color: '#5D83AE',
        fontSize: scaledHeight(18),
        fontWeight: 'bold',
        lineHeight: 35,
        textAlign: 'left',
        width: '100%'
    },
    hintLabelTxt: {
        color: '#000000DE',
        fontSize: scaledHeight(15),
        lineHeight: 22,
        marginTop: scaledHeight(5),
        opacity: .65
    },

    lblLine: {
        backgroundColor: '#707070',
        flexGrow: 1,
        height: scaledHeight(1),
        marginTop: scaledHeight(9.5),
        opacity: .25
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
    normalBlackBtn: {
        alignContent: 'center',
        alignItems: 'center',
        backgroundColor: '#544A54',
        borderColor: "#61285F45",
        borderRadius: scaledHeight(24),
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
        borderRadius: scaledHeight(24),
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
        borderRadius: scaledHeight(24),
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
    noteTxt: {
        color: '#333333DE',
        fontSize: scaledHeight(14),
        lineHeight: 22,
        marginBottom: scaledHeight(39),
        opacity: .75,
        textAlign: "left",
        width: "100%"

    },
    radioBtnGrp: {
        flexDirection: 'row',
        flexGrow: 1,
        marginTop: scaledHeight(0)
    },
    radioCol1: {
        marginBottom: scaledHeight(0),
        marginTop: scaledHeight(24),
        width:"30%" 
    },
    radioCol2: {
        marginBottom: scaledHeight(0),
        marginTop: scaledHeight(24)
    },
    regulatoryQuestTxt: {
        color: '#333333DE',
        fontSize: scaledHeight(16),
        fontWeight: 'bold',
        lineHeight: 28,
        marginTop: scaledHeight(23)

    },
    scrollView: {
        flex: .85
    },
     sectionDescTxt: {
        color: '#333333DE',
        fontSize: scaledHeight(14),
        lineHeight: 22,
        marginTop: scaledHeight(19.5),
        opacity: .75

    },
     sectionGrp: {
        flexGrow: 1,
        marginHorizontal: scaledHeight(12),
        marginTop: scaledHeight(31),
        overflow: 'hidden'
    },

});

export default styles;

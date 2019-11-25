import { StyleSheet } from "react-native";
import { scaledHeight } from '../../Utils/Resolution';
//const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F7FAFF',
        width: '100%'
    },

    sectionGrp: {
        overflow: 'hidden',
        marginHorizontal: scaledHeight(12),
        marginTop: scaledHeight(31),
        flexGrow: 1
    },
    sectionDescTxt: {
        marginTop: scaledHeight(19.5),
        fontSize: scaledHeight(14),
        color: '#333333DE',
        lineHeight: 22,
        opacity: .75

    },
    accTypeSelectSection: {
        marginTop: scaledHeight(0),
        flexDirection: 'row',
        justifyContent: 'space-between',
        // marginHorizontal: scaledHeight(12),
        alignItems: "center",
        flexGrow: 1
    },
    headings: {
        width: '100%',
        textAlign: 'left',
        fontSize: scaledHeight(18),
        fontWeight: 'bold',
        color: '#5D83AE',
        lineHeight: 35
    },
    lblLine: {
        // width:"100%",
        flexGrow: 1,
        marginTop: scaledHeight(9.5),
        height: scaledHeight(1),
        backgroundColor: '#707070',
        opacity: .25
    },
    lblTxt: {
        color: 'rgba(51, 51, 51, 0.87)',
        fontSize: scaledHeight(16),
        fontWeight: 'bold',
        marginTop: scaledHeight(25)

    },
    lblRowTxt: {
        color: '#000000',
        fontSize: scaledHeight(16),
        fontWeight: 'bold',
    },
    hintLabelTxt: {
        color: '#000000DE',
        fontSize: scaledHeight(15),
        marginTop: scaledHeight(5),
        lineHeight: 22,
        opacity: .65
    },
    customTxtBoxError:{
        marginTop: scaledHeight(9),
        width : '100%',
        borderColor : 'red'
    },
    customTxtBox: {
        marginTop: scaledHeight(9),
        width: '100%'
    },
    customRowTxtBox: {
        width: '30%'

    },


    addBeneficiaryBtn: {
        backgroundColor: '#F7FAFF',
        width: '90%',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginTop: scaledHeight(25),
        flexWrap: 'wrap',
        height: scaledHeight(20),

    },
    addBeneficiaryBtnTxt: {
        fontSize: scaledHeight(16),
        color: '#0000FFDE',
        fontWeight: 'bold',

    },




    btnGrp: {
        marginHorizontal: scaledHeight(12),
        marginVertical: scaledHeight(50),
        flexGrow: 1,
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    },



    regulatoryQuestTxt: {
        marginTop: scaledHeight(23),
        fontSize: scaledHeight(16),
        fontWeight: 'bold',
        color: '#333333DE',
        lineHeight: 28

    },
    explainTxt: {

        marginTop: scaledHeight(10),
        fontSize: scaledHeight(18),
        color: '#000000DE',
        lineHeight: 28
    },

    explainDottedBorder: {
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "flex-start",
        borderBottomWidth: 1,
        borderBottomColor: '#56565A'

    },
    explainDotteBorderTxt: {

        marginTop: scaledHeight(10),
        fontSize: scaledHeight(18),
        color: '#333333DE',
        lineHeight: 28

    },
    explainUnderline: {
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "flex-start",
        borderBottomWidth: 1,
        borderBottomColor: '#56565A'

    },
    explainUnderlineTxt: {

        marginTop: scaledHeight(10),
        fontSize: scaledHeight(16),
        color: '#56565A',
        lineHeight: 25

    },

    radioBtnGrp: {
        flexGrow: 1,
        marginTop: scaledHeight(0),
        flexDirection: 'row'
    },
    lblRadioBtnTxt: {
        color: '#333333DE',
        fontSize: scaledHeight(16),
        lineHeight: 28,
        flexWrap: 'wrap'
    },
    lblRadioDescTxt: {
        marginTop: scaledHeight(14),
        color: '#333333DE',
        fontSize: scaledHeight(14),
        lineHeight: 22,
        flexWrap: 'wrap',
        opacity: .75
    },

    noteTxt: {
        width: "100%",
        marginBottom: scaledHeight(39),
        fontSize: scaledHeight(14),
        color: '#333333DE',
        opacity: .75,
        lineHeight: 22,
        textAlign: "left"

    },
    agreeTxt: {
        width: "100%",
        textAlign: "left",

        marginBottom: scaledHeight(50),
        fontSize: scaledHeight(14),
        fontWeight: 'bold',
        color: '#333333DE',
        opacity: .75,
        lineHeight: 22

    },

    normalWhiteBtn: {
        //  width: '90%',
        borderWidth: 1,
        borderColor: "#61285F45",
        borderRadius: scaledHeight(24),
        height: scaledHeight(50),
        backgroundColor: '#fff',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        marginVertical: scaledHeight(7.5),
        marginHorizontal: scaledHeight(37)

    },
    normalWhiteBtnTxt: {
        fontSize: scaledHeight(16),
        color: '#544A54',
        width: '100%',
        textAlign: 'center',
        lineHeight: 22
    },
    normalBlackBtn: {
        //  width: '90%',
        borderWidth: 1,
        borderColor: "#61285F45",
        borderRadius: scaledHeight(24),
        height: scaledHeight(50),
        backgroundColor: '#544A54',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        marginVertical: scaledHeight(7.5),
        marginHorizontal: scaledHeight(37)


    },
    normalBlackBtnTxt: {
        fontSize: scaledHeight(16),
        color: '#fff',
        width: '100%',
        textAlign: 'center'
    },
    normalBlackDisabledBtn: {
        //  width: '90%',
        borderWidth: 1,
        borderColor: "#61285F45",
        borderRadius: scaledHeight(24),
        height: scaledHeight(50),
        backgroundColor: '#544A54',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        marginVertical: scaledHeight(7.5),
        marginHorizontal: scaledHeight(37)
    },
    normalBlackBtnDisabledTxt: {
        fontSize: scaledHeight(16),
        color: '#fff',
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
    moreTxt: {
        fontSize: scaledHeight(16),
        color: '#61285F',
        fontWeight: 'bold'
    },

});
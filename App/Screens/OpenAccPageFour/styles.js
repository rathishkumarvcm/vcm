import { StyleSheet } from "react-native";
import { scaledHeight } from '../../Utils/Resolution';



const styles = StyleSheet.create({
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
    errMsg:{
        color:'red',
        fontSize:scaledHeight(12),
        marginVertical: scaledHeight(12),

      },
    explainContainer:{
        alignItems: "center",
         flexDirection: 'row',
          flexWrap: 'wrap',
           justifyContent: "flex-start",
            marginTop: scaledHeight(13) 
    },
    explainDotteBorderTxt: {

        //  marginTop:scaledHeight(10),
        fontSize: scaledHeight(18),
        color: '#333333DE',
        lineHeight: 28

    },
    explainDottedBorder: {
        alignItems: "center",
        borderBottomColor: '#56565A',
        borderBottomWidth: 1,
        flexDirection: 'row',
        justifyContent: "flex-start"

    },

    explainTxt: {

        //   marginTop:scaledHeight(10),
        fontSize: scaledHeight(18),
        color: '#000000DE',
        lineHeight: 28
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
        color: '#000000',
        fontSize: scaledHeight(20),
        fontWeight: 'bold',
        lineHeight: 35,
        textAlign: 'left',
        width: '80%'
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
    lblRadioBtnTxt: {
        color: '#333333DE',
        flexWrap: 'wrap',
        fontSize: scaledHeight(18),
        lineHeight: 28
    },
    lblRadioDescTxt: {
        color: '#56565A',
        flexWrap: 'wrap',
        fontSize: scaledHeight(14),
        lineHeight: 22,
        marginTop: scaledHeight(14),
        opacity: .65
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
    questSectionGrp: {
        backgroundColor: '#FFFFFF',
        borderColor: '#7070701A',
        borderWidth: 1,
        flexGrow: 1,
        marginTop: scaledHeight(26),
        paddingHorizontal: scaledHeight(12),
        paddingVertical: scaledHeight(12)

    },
    questTxt: {
        color: '#000000',
        fontSize: scaledHeight(16),
        fontWeight: 'bold',
        lineHeight: scaledHeight(22),
        marginTop: scaledHeight(25),

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
    touchItem: {
        marginTop: scaledHeight(16),
    },


});

export default styles;

import { StyleSheet } from "react-native";
import { scaledHeight } from '../../Utils/Resolution';


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

    headings: {
        width: '80%',
        textAlign: 'left',
        fontSize: scaledHeight(21),
        fontWeight: 'bold',
        color: '#56565A',
        lineHeight: scaledHeight(26),
    },
    lblLine: {
        // width:"100%",
        flexGrow: 1,
        marginTop: scaledHeight(9.5),
        height: scaledHeight(1),
        backgroundColor: '#707070',
        opacity: 0.5
    },

    lblTxt: {
        color: 'rgba(51, 51, 51, 0.87)',
        fontSize: scaledHeight(16),
        fontWeight: 'bold',
        marginTop: scaledHeight(25)

    },
    sectionDescTxt: {
        marginTop: scaledHeight(8),
        fontSize: scaledHeight(16),
        color: '#56565A',
        lineHeight: 25

    },

    touchItem: {
        marginTop: scaledHeight(16),
    },



    agreeSectionGrp: {
        flexGrow: 1,
        borderColor: '#7070701A',
        borderWidth: 1,
        backgroundColor: '#E8ECEE',
        marginTop: scaledHeight(28),
        paddingLeft: scaledHeight(16),
        paddingVertical: scaledHeight(16)

    },
    agreeTermsTxt: {
        textAlign: 'left',
        fontSize: scaledHeight(16),
        color: '#54565B',
        lineHeight: scaledHeight(19),

    },



    btnGrp: {
        marginHorizontal: scaledHeight(12),
        marginVertical: scaledHeight(50),
        flexGrow: 1,
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center'
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
    moreTxt: {
        fontSize: scaledHeight(16),
        color: '#61285F',
        fontWeight: 'bold'
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


    column: {

        flexDirection: 'column',
        alignItems: 'flex-start',

    },
    row: {
        width: '100%',
        alignItems: 'flex-start',
        justifyContent: 'space-around',
        alignContent: 'flex-start',
        flexDirection: 'row',
        marginTop: scaledHeight(28),


    },
    bullet: {
        width: scaledHeight(16),
        fontSize: scaledHeight(18),
        fontWeight: 'bold',

    },
    bulletText: {
        width: '90%',
        fontSize: scaledHeight(16),
        color: '#56565A',
        lineHeight: 22,
        textAlign: "left",


    },

    errMsg: {
        color: 'red',
        fontSize: scaledHeight(12),
        marginVertical: scaledHeight(12),

    }


});
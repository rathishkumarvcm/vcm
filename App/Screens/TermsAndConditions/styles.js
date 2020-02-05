import { StyleSheet } from "react-native";
import { scaledHeight } from '../../Utils/Resolution';


 const styles = StyleSheet.create({
    agreeSectionGrp: {
        backgroundColor: '#E8ECEE',
        borderColor: '#7070701A',
        borderWidth: 1,
        flexGrow: 1,
        marginTop: scaledHeight(28),
        paddingLeft: scaledHeight(16),
        paddingVertical: scaledHeight(16)

    },

    agreeTermsTxt: {
        color: '#54565B',
        fontSize: scaledHeight(16),
        lineHeight: scaledHeight(19),
        textAlign: 'left',

    },

    btnGrp: {
        alignContent: 'center',
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center',
        marginHorizontal: scaledHeight(12),
        marginVertical: scaledHeight(50)
    },
    bullet: {
        fontSize: scaledHeight(18),
        fontWeight: 'bold',
        width: scaledHeight(16),

    },

    bulletText: {
        color: '#56565A',
        fontSize: scaledHeight(16),
        lineHeight: 22,
        textAlign: "left",
        width: '90%',


    },
    column: {

        alignItems: 'flex-start',
        flexDirection: 'column',

    },

    container: {
        backgroundColor: '#F7FAFF',
        flex: 1,
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



    errMsg: {
        color: 'red',
        fontSize: scaledHeight(12),
        marginVertical: scaledHeight(12),

    },
    headings: {
        color: '#56565A',
        fontSize: scaledHeight(21),
        fontWeight: 'bold',
        lineHeight: scaledHeight(26),
        textAlign: 'left',
        width: '80%',
    },
    lblLine: {
        backgroundColor: '#707070',
        flexGrow: 1,
        height: scaledHeight(1),
        marginTop: scaledHeight(9.5),
        opacity: 0.5
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
    row: {
        alignContent: 'flex-start',
        alignItems: 'flex-start',
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: scaledHeight(28),
        width: '100%',


    },
    scrollView: {
        flex: .85
    },
    sectionDescTxt: {
        color: '#56565A',
        fontSize: scaledHeight(16),
        lineHeight: 25,
        marginTop: scaledHeight(8)

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
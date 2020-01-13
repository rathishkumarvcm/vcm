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

    detailsGrp: {
        backgroundColor: '#FFFFFF',
        borderColor: '#7070701A',
        borderWidth: 1,
        flexGrow: 1,
        marginTop: scaledHeight(15),
        paddingHorizontal: scaledHeight(15),
        paddingVertical: scaledHeight(10)

    },
    detailsGrpHeaderTxt: {
        backgroundColor: 'rgba(224, 226, 227, .44)',
        color: '#333333DE',
        flexGrow: 1,
        fontSize: scaledHeight(16),
        fontWeight: 'bold',
        paddingHorizontal: scaledHeight(15),
        paddingVertical: scaledHeight(21)


    },
    detailsRow: {
        alignItems: 'flex-start',
        flexDirection: 'row',
        flexGrow: 1,
        justifyContent: 'flex-start',
        marginVertical: scaledHeight(12)

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

    editBtn: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginTop: scaledHeight(0)
    },
    editBtnTxt: {
        color: '#61285F',
        fontSize: scaledHeight(16),
        fontWeight: 'bold',
        lineHeight: 20,
        textAlign: 'right',
        width: '100%'
    },
    editDetailsGrp: {
        backgroundColor: '#FFFFFF',
        borderColor: '#7070701A',
        borderWidth: 1,
        flexGrow: 1,
        marginTop: scaledHeight(15),
        paddingHorizontal: scaledHeight(15),
        paddingVertical: scaledHeight(15)

    },


    editSeletedFundsDetailsGrp: {
        backgroundColor: '#FFFFFF',
        borderColor: '#7070701A',
        borderWidth: 1,
        flexGrow: 1,
        paddingBottom: scaledHeight(10),
        paddingHorizontal: scaledHeight(15),
        paddingTop: scaledHeight(16)

    },
    fundItem: {
        backgroundColor: '#FFFFFF',
        flexGrow: 1,
        paddingBottom: scaledHeight(10),
        paddingHorizontal: scaledHeight(15),
        paddingTop: scaledHeight(16)
    },
    headings: {
        color: '#000000',
        fontSize: scaledHeight(20),
        fontWeight: 'bold',
        lineHeight: 35,
        textAlign: 'left',
        width: '90%'
    },
    lblLeftColTxt: {
        color: 'rgba(51, 51, 51, 0.87)',
        fontSize: scaledHeight(16),
        fontWeight: 'bold',
        width: '50%'
    },
    lblLine: {
        backgroundColor: '#707070',
        flexGrow: 1,
        height: scaledHeight(1),
        marginTop: scaledHeight(9.5),
        opacity: 0.25
    },

    lblLine1: {

        backgroundColor: '#696069',
        height: scaledHeight(1)
    },
    lblNameTxt: {
        color: 'rgba(51, 51, 51, 0.87)',
        fontSize: scaledHeight(16),
        fontWeight: 'bold',
        marginTop: scaledHeight(30)

    },

    lblNameValueTxt: {
        color: 'rgba(51, 51, 51, 0.87)',
        fontSize: scaledHeight(16),
        marginTop: scaledHeight(12)
    },
    lblRightColTxt: {
        color: 'rgba(51, 51, 51, 0.87)',
        fontSize: scaledHeight(16),
        width: '50%'

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

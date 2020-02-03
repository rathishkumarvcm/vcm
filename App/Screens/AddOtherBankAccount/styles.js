import { StyleSheet } from "react-native";
import { scaledHeight } from '../../Utils/Resolution';

export const styles = StyleSheet.create({
    backBtn: {
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        borderColor: '#61285F45',
        borderRadius: scaledHeight(1),
        borderWidth: 1,
        height: scaledHeight(50),
        justifyContent: 'center',
        marginLeft: '10.7%',
        marginRight: '10.7%',
        marginTop: scaledHeight(19),
        width: '78.6%'
    },
    backButtonText: {
        color: '#544A54',
        fontSize: scaledHeight(16)
    },
    childSectionGrp: {
        flexGrow: 1,
        marginHorizontal: '4%'
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
    errMsg: {
        color: 'red',
        fontSize: scaledHeight(12),
        marginVertical: scaledHeight(12),

    },
    fullLine: {
        backgroundColor: '#7B8288',
        height: scaledHeight(1),
        marginTop: scaledHeight(45),
        opacity: 0.4,
    },
    header: {
        alignItems: 'flex-start',
        marginHorizontal: '4%',
        marginTop: scaledHeight(18)
    },
    headerText: {
        color: '#707070',
        fontSize: scaledHeight(20),
        fontWeight: 'bold',
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

    linkBreak1: {
        backgroundColor: '#707070',
        height: scaledHeight(1),
        marginHorizontal: '4%',
        marginTop: scaledHeight(12.5),
        opacity: 0.4
    },
    radioBtnGrp: {
        flexGrow: 1,
        marginTop: scaledHeight(19),
    },
    scrollviewStyle: {
        flex: 0.85
    },
    specimenImg: {
        height: scaledHeight(176)
    },
    submitBtn: {
        alignItems: 'center',
        backgroundColor: '#544A54',
        borderColor: '#61285F45',
        borderRadius: scaledHeight(1),
        borderWidth: 1,
        height: scaledHeight(50),
        justifyContent: 'center',
        marginLeft: '10.7%',
        marginRight: '10.7%',
        marginTop: scaledHeight(19),
        width: '78.6%'
    },

    submitButtonText: {
        color: '#FFFFFF',
        fontSize: scaledHeight(16)
    },
    tNCFlex: {
        marginLeft: "4%",
        marginTop: "4%",
        width: "92%",
    },
    tNcBody: {
        color: '#56565A',
        fontSize: scaledHeight(16),
    },
    tNcHeader: {
        color: '#56565A',
        fontSize: scaledHeight(16),
        fontWeight: 'bold',
    },
});
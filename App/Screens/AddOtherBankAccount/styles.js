import { StyleSheet } from "react-native";
import { scaledHeight, scaledWidth } from '../../Utils/Resolution';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F7FAFF',
        width: '100%'
    },
    scrollviewStyle: {
        flex: 0.85
    },
    childSectionGrp: {
        flexGrow: 1,
        marginHorizontal: '4%'
    },
    lblTxt: {
        color: 'rgba(51, 51, 51, 0.87)',
        fontSize: scaledHeight(16),
        fontWeight: 'bold',
        marginTop: scaledHeight(25)
    },
    radioBtnGrp: {
        flexGrow: 1,
        marginTop: scaledHeight(19),
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
    customTxtBoxError: {
        marginTop: scaledHeight(9),
        width: '100%',
        borderColor: 'red'
    },
    customTxtBox: {
        marginTop: scaledHeight(9),
        width: '100%'
    },
    header: {
        marginTop: scaledHeight(18),
        alignItems: 'flex-start',
        marginHorizontal: '4%'
    },
    headerText: {
        color: '#707070',
        fontSize: scaledHeight(20),
        fontWeight: 'bold',
    },
    linkBreak1: {
        backgroundColor: '#707070',
        opacity: 0.4,
        height: scaledHeight(1),
        marginTop: scaledHeight(12.5),
        marginHorizontal: '4%'
    },
    backBtn: {
        borderColor: '#61285F45',
        borderWidth: 1,
        width: '78.6%',
        marginLeft: '10.7%',
        marginRight: '10.7%',
        marginTop: scaledHeight(19),
        borderRadius: scaledHeight(1),
        height: scaledHeight(50),
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center'
    },

    backButtonText: {
        fontSize: scaledHeight(16),
        color: '#544A54'
    },

    submitBtn: {
        borderColor: '#61285F45',
        borderWidth: 1,
        width: '78.6%',
        marginLeft: '10.7%',
        marginRight: '10.7%',
        marginTop: scaledHeight(19),
        borderRadius: scaledHeight(1),
        height: scaledHeight(50),
        backgroundColor: '#544A54',
        alignItems: 'center',
        justifyContent: 'center'
    },

    submitButtonText: {
        fontSize: scaledHeight(16),
        color: '#FFFFFF'
    },
    errMsg: {
        color: 'red',
        fontSize: scaledHeight(12),
        marginVertical: scaledHeight(12),

    },
    lblSpecimen: {
        color: 'rgba(51, 51, 51, 0.87)',
        fontSize: scaledHeight(16),
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: scaledHeight(58),
        textDecorationStyle: 'solid',
        textDecorationLine: 'underline'

    },
    lblSpecimenDesc: {
        color: '#333333DE',
        fontSize: scaledHeight(11),
        textAlign: 'left',
        marginTop: scaledHeight(58)

    },
    specimenImg: {
        height: scaledHeight(176)
    },

    fullLine: {
        backgroundColor: '#7B8288',
        opacity: 0.4,
        height: scaledHeight(1),
        marginTop: scaledHeight(45),
    },
    tNCFlex: {
        marginLeft: "4%",
        marginTop: "4%",
        width: "92%",
    },
    tNcHeader: {
        color: '#56565A',
        fontWeight: 'bold',
        fontSize: scaledHeight(16),
    },
    tNcBody: {
        color: '#56565A',
        fontSize: scaledHeight(16),
    },
});
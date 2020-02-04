import { StyleSheet } from "react-native";
import { scaledHeight, scaledWidth } from '../../Utils/Resolution';

const styles = StyleSheet.create({
    blackText: {
        fontWeight: '200',
        textAlignVertical: 'center',
    },
    labelText: {
        color: "#333333DE",
        fontSize: scaledHeight(16),
        fontWeight: 'bold',
        // marginBottom:scaledHeight(8)
    },
    normalBlackBtn: {
        alignSelf: 'center',
        alignItems: 'center',
        backgroundColor: '#544A54',
        borderColor: "#61285F45",
        borderWidth: 1,
        height: scaledHeight(50),
        justifyContent: 'center',
        marginHorizontal: scaledHeight(37),
        marginVertical: scaledHeight(7.5)
    },
    normalBlackBtnTxt: {
        color: '#fff',
        fontSize: scaledHeight(16),
        textAlign: 'center',
        width: '100%'
    },
    normalWhiteBtn: {
        alignSelf: 'center',
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
    container: { flex: 1, justifyContent: 'center', },
    columnContainer: { flexDirection: 'column', padding: scaledHeight(12), },
    dropdownTextInput: {
        width: '100%',
        marginLeft: 0,
    },
    dropDownLayout: {
        marginTop: scaledHeight(7),
        paddingLeft: 0,
        marginBottom: 0,
        marginLeft: 0,
        marginRight: 0,
    },
    dividerLine: {
        backgroundColor: 'lightgray', height: 1,
        marginHorizontal: scaledHeight(10), marginVertical: scaledHeight(10)
    },
    modalStyle: {
        backgroundColor: 'transparent', flex: 1,
        margin: 0
    },
    modalViewStyle: {
        alignSelf: 'center', backgroundColor: 'white',
        borderRadius: scaledHeight(10),
        elevation: 7,
        // height: '70%',
        padding: scaledHeight(7),
        width: '80%',
    },
    modalSecureMessage: {
        backgroundColor: 'transparent', flex: 1,
        margin: 0
    },
    modalViewSecureMessage: {
        alignSelf: 'center', backgroundColor: 'white',
        elevation: 7,
        padding: scaledHeight(7),
        width: '90%'
    },
    lblTxt: {
        color: "#333333DE",
        fontSize: scaledHeight(16),
        fontWeight: "600",
        marginTop: scaledHeight(25)
    },
    customTxtBox: {
        marginTop: scaledHeight(9),
        width: "100%"
    },
    multilineTextBox: {
        backgroundColor: "#FFFFFF",
        width: '100%',
        borderRadius: scaledHeight(4),
        justifyContent: "center",
        borderWidth: 1,
        borderColor: "#DEDEDF",
        marginTop: scaledHeight(9),
        margin: 0,
        padding: scaledHeight(3),
        minHeight: "20%",
    },
    viewStyle: {
        flexDirection: 'column', flex: 1,
        marginLeft: '30%',
        padding: scaledHeight(5),
        // marginHorizontal: 20, marginVertical: 50,
        backgroundColor: "pink"
    },
    grayText: {
        color: "gray",
        textAlignVertical: 'center'
    },
    grayBoldText: {
        color: 'gray',
        fontWeight: '500',
        marginHorizontal: scaledHeight(10),

    },
    smallGrayText: {
        fontSize: scaledHeight(9)
    },
    linkText: {
        color: 'blue',
        fontSize: scaledHeight(10),
        textDecorationLine: 'underline',
        textDecorationStyle: 'solid'
    },
    rowContainer: {
        alignItems: 'center', flexDirection: 'row',
        padding: scaledHeight(3), width: "100%"
    },
    scrollViewStyle: { flex: 1, width: "100%" },
    transparentGrayContainer: {
        backgroundColor: "rgba(0,0,0,0.1)",
        marginHorizontal: scaledHeight(7),
        marginVertical: scaledHeight(5),
        paddingVertical: scaledHeight(10)
    },

});

export default styles;
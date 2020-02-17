import { StyleSheet } from "react-native";
import { scaledHeight } from '../../Utils/Resolution';

const styles = StyleSheet.create({
    columnContainer: {
        flexDirection: 'column', flexGrow: 1,
        padding: scaledHeight(12),
    },
    container: { flex: 1, flexDirection: 'column', justifyContent: 'center', },
    customTxtBox: {
        marginTop: scaledHeight(9),
        width: "100%"
    },
    dropdownLayout: {
        marginBottom: 0,
        marginLeft: 0,
        marginRight: 0,
        marginTop: scaledHeight(7),
        paddingLeft: 0,
    },
    dropdownTextInput: {
        marginLeft: 0,
        width: '100%',
    },
    lblTxt: {
        color: "#333333DE",
        fontSize: scaledHeight(16),
        fontWeight: "600",
        marginTop: scaledHeight(25)
    },
    multilineTextBox: {
        backgroundColor: "#FFFFFF",
        borderColor: "#DEDEDF",
        borderRadius: scaledHeight(4),
        borderWidth: 1,
        margin: 0,
        marginTop: scaledHeight(9),
        padding: scaledHeight(5),
        textAlignVertical: "top",
        width: '100%',
    },
    normalBlackBtn: {
        alignItems: 'center',
        alignSelf: 'center',
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
        alignItems: 'center',
        alignSelf: 'center',
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
    rowContainer: {
        alignItems: 'center', flexDirection: 'row',
        padding: scaledHeight(3), width: "100%"
    },
    scrollViewStyle: { flex: 1, width: "100%" },

});

export default styles;
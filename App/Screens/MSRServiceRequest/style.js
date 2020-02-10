import { StyleSheet } from "react-native";
import { scaledHeight } from '../../Utils/Resolution';

const styles = StyleSheet.create({
    alignSelf: { alignSelf: 'center' },
    blackText: {
        fontWeight: '200',
        textAlignVertical: 'center',
    },
    columnContainer: {
        flexDirection: 'column', flexGrow: 1,
        padding: scaledHeight(12),
    },
    container: { flex: 1, justifyContent: 'center', },
    customTxtBox: {
        marginTop: scaledHeight(9),
        width: "100%"
    },
    dividerLine: {
        backgroundColor: 'lightgray', height: 1,
        marginHorizontal: scaledHeight(10), marginVertical: scaledHeight(10)
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
    grayBoldText: {
        color: 'gray',
        fontWeight: '500',
        marginHorizontal: scaledHeight(10),

    },
    grayBorderContainer: {
        alignItems: 'center',
        borderColor: "#DEDEDF",
        borderRadius: scaledHeight(4),
        borderWidth: 1,
        marginHorizontal: 0,
        marginVertical: scaledHeight(10),
        paddingVertical: scaledHeight(10),
        //  height:"20%",
        width: "100%"
    },
    grayText: {
        color: "gray",
        textAlignVertical: 'center'
    },
    labelText: {
        color: "#333333DE",
        fontSize: scaledHeight(16),
        fontWeight: 'bold',
        // marginBottom:scaledHeight(8)
    },
    lblTxt: {
        color: "#333333DE",
        fontSize: scaledHeight(16),
        fontWeight: "600",
        marginTop: scaledHeight(25)
    },
    linkText: {
        color: 'blue',
        fontSize: scaledHeight(10),
        textDecorationLine: 'underline',
        textDecorationStyle: 'solid'
    },
    modalSecureMessage: {
        backgroundColor: 'transparent', flex: 1,
        margin: 0
    },
    modalStyle: {
        backgroundColor: 'transparent', flex: 1,
        margin: 0
    },
    modalViewSecureMessage: {
        alignSelf: 'center', backgroundColor: 'white',
        elevation: 7,
        marginVertical:'3%',
        padding: scaledHeight(7),
        width: '90%',
    },
    modalViewStyle: {
        alignSelf: 'center', backgroundColor: 'white',
        borderRadius: scaledHeight(10),
        elevation: 7,
        // height: '70%',
        padding: scaledHeight(7),
        width: '80%',
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
    previewImage: {
        flex:0.3,    
        height: scaledHeight(70),
        marginHorizontal:scaledHeight(10),
        marginTop: scaledHeight(20),
        width: scaledHeight(70),   
    },
    rowContainer: {
        alignItems: 'center', flexDirection: 'row',
        padding: scaledHeight(3), width: "100%"
    },
    scrollViewStyle: { flex: 1, width: "100%" },
    smallGrayText: {
        fontSize: scaledHeight(9)
    },
    transparentGrayContainer: {
        backgroundColor: "rgba(0,0,0,0.1)",
        marginHorizontal: scaledHeight(7),
        marginVertical: scaledHeight(5),
        paddingVertical: scaledHeight(10)
    },
    uploadFileContainer: {
        flexDirection: 'row',
        marginTop: scaledHeight(10),
    },
    uploadFileDesc: {
        color: '#707070',
        flex: 0.8,
        fontSize: scaledHeight(12),
    },
    uploadFileDivider: {
        color: '#707070',
        flex: 0.1,
        fontSize: scaledHeight(12),
    },
    uploadFileTitle: {
        color: '#707070',
        flex: 0.5,
        fontSize: scaledHeight(12),
    },
    viewStyle: {
        flexDirection: 'column', flex: 1,
        marginLeft: '30%',
        padding: scaledHeight(5),
        // marginHorizontal: 20, marginVertical: 50,
        backgroundColor: "pink"
    },

});

export default styles;
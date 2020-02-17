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
    container: { flex: 1, flexDirection: 'column', justifyContent: 'center', },
    customTxtBox: {
        marginTop: scaledHeight(9),
        width: "100%"
    },
    dividerLine: {
        backgroundColor: 'lightgray', height: 1,
        marginHorizontal: scaledHeight(10), marginVertical: scaledHeight(10)
    },
    fabButton: {
        alignItems: 'center',
        backgroundColor: "orange", borderRadius: 25, elevation: 5,
        height: 50,
        justifyContent: 'center', width: 50,
    },
    grayBoldText: {
        color: 'gray',
        fontWeight: '500',
        marginHorizontal: scaledHeight(35),
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
    modalViewStyle: {
        alignSelf: 'center', backgroundColor: 'white',
        borderRadius: scaledHeight(10),
        elevation: 7,
        // height: '70%',
        padding: scaledHeight(7),
        width: '80%',
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
        borderRadius:scaledHeight(15),
        marginHorizontal: scaledHeight(10),
        marginVertical: scaledHeight(7),
        paddingVertical: scaledHeight(10)
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
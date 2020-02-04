import { StyleSheet } from "react-native";
import { scaledHeight } from '../../Utils/Resolution';

const styles = StyleSheet.create({
    blackText: {
        fontWeight: '200',
        textAlignVertical: 'center',
    },
    cardContainer: {
        backgroundColor: "white",
        borderColor: "blue",
        borderRadius: scaledHeight(5),
        borderWidth: 0.5,
        padding: scaledHeight(8),
        elevation: scaledHeight(3),
        shadowColor: "#00000025",
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 1,
        shadowRadius: scaledHeight(5),

    },
    columnContainer: { flexDirection: 'column', padding: scaledHeight(12), },
    container: { flex: 1, justifyContent: 'center', },
    dividerLine: {
        backgroundColor: 'lightgray', height: 1,
        marginHorizontal: scaledHeight(10), marginVertical: scaledHeight(10)
    },
    itemContainer: {
        marginHorizontal: scaledHeight(5),
        marginVertical:scaledHeight(2),
        padding: scaledHeight(4),
    },
    rowContainer: {
        alignItems: 'center', flexDirection: 'row',
        padding: scaledHeight(3), width: "100%"
    },
    transparentGrayContainer: {
        backgroundColor: "rgba(0,0,0,0.1)",
        marginHorizontal: scaledHeight(7),
        marginVertical: scaledHeight(5),
        paddingVertical: scaledHeight(10)
    },

});

export default styles;
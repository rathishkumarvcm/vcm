import { StyleSheet, Platform } from "react-native";
import { scaledHeight } from '../../Utils/Resolution';

const styles = StyleSheet.create({
    blackText: {
        color: 'black',
        fontSize: scaledHeight(17),
        fontWeight: '200',
        textAlignVertical: 'center',
    },
    blueBoldText: {
        color: "#3E7580",
        fontSize: scaledHeight(17),
        fontWeight: '400',
        textAlignVertical: 'center',
    },
    boldText: {
        color: "#000000",
        fontSize: scaledHeight(20),
        fontWeight: '600',
        textAlignVertical: 'center',
    },
    cardContainer: {
        backgroundColor: "white",
        borderColor: "#56565A",
        // borderRadius: scaledHeight(5),
        borderWidth: 0.5,
        elevation: scaledHeight(3),
        padding: scaledHeight(10),
        shadowColor: "#00000025",
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 1,
        shadowRadius: scaledHeight(5),

    },
    columnContainer: { flexDirection: 'column', padding: scaledHeight(12), },
    container: { flex: 1 },
    dividerLine: {
        backgroundColor: 'lightgray', height: 1,
        marginHorizontal: scaledHeight(10), marginVertical: scaledHeight(10)
    },
    emptyContainer: {
        alignItems: 'center',
        backgroundColor: Platform.OS === 'android' && Platform.Version <= 19 ? '#E5E5E5' : '#FAFAFA',
        flex: 1,
        justifyContent: 'center',
    },
    footerContainer: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
        padding: scaledHeight(10),
    },
    iconContainer: {
        padding: scaledHeight(20)
    },
    itemContainer: {
        marginHorizontal: scaledHeight(5),
        marginVertical: scaledHeight(2),
        padding: scaledHeight(4),
    },
    listStyle: {
        height: "80%"
    },
    offButtonStyle: {
        alignItems: 'flex-start',
        backgroundColor: '#B7B7B7',
        borderColor: '#56565A',
        borderRadius: 30,
        borderWidth: 1,
        height: scaledHeight(50),
        justifyContent: 'center',
        marginTop: scaledHeight(12),
        width: '30%'
    },
    offButtonStyleDisable: {
        alignItems: 'flex-start',
        backgroundColor: '#FFFFFF',
        borderColor: '#56565A',
        borderRadius: 30,
        borderWidth: 1,
        height: scaledHeight(50),
        justifyContent: 'center',
        marginTop: scaledHeight(12),
        width: '50%'
    },
    onButtonStyle: {
        alignItems: 'center',
        backgroundColor: '#B7B7B7',
        borderColor: '#56565A',
        borderRadius: 30,
        borderWidth: 1,
        height: scaledHeight(50),
        justifyContent: 'center',
        left: '30%',
        marginTop: scaledHeight(12),
        position: 'absolute',
        width: '30%'
    },
    onButtonStyleDisable: {
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        borderColor: '#56565A',
        borderRadius: 30,
        borderWidth: 1,
        height: scaledHeight(50),
        justifyContent: 'center',
        left: '10%',
        marginTop: scaledHeight(12),
        position: 'absolute',
        width: '50%',
        zIndex: -1
    },
    popularText: {
        alignSelf: 'center',
        backgroundColor: '#99EB99',
        borderColor: "#56565A",
        borderRadius: scaledHeight(5),
        borderWidth: 0.5,
        color: 'green',
        fontSize: scaledHeight(15),
        padding: scaledHeight(5),
        textAlignVertical: 'center',
    },
    regularText: {
        color: '#56565A',
        fontSize: scaledHeight(15),
        textAlignVertical: 'center',
    },
    rowContainer: {
        alignItems: 'center', flexDirection: 'row',
        padding: scaledHeight(3), width: "100%"
    },
    smallText: {
        fontSize: scaledHeight(10),
        margin: 0,
    },
    transparentGrayContainer: {
        backgroundColor: "rgba(0,0,0,0.1)",
        marginHorizontal: scaledHeight(7),
        marginVertical: scaledHeight(5),
        paddingVertical: scaledHeight(10)
    }

});

export default styles;
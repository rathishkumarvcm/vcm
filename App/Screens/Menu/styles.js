import { StyleSheet } from "react-native";
import { scaledHeight, scaledWidth } from '../../Utils/Resolution';
import * as COLORS from "../../Constants/ColorConstants";

const styles = StyleSheet.create({
    buttonCancelActionStyle: {
        alignContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        borderColor: '#544A54',
        borderWidth: 1,
        height: scaledHeight(50),
        justifyContent: 'center',
        marginLeft: '2%',
        marginRight: '2%',
        width: scaledWidth(100),
    },
    buttonCancelTextStyle: {
        color: '#FFFFFF',
        fontSize: scaledHeight(16),
        textAlign: 'center',
        width: '100%',
    },
    buttonGoActionStyle: {
        alignContent: 'center',
        alignItems: 'center',
        backgroundColor: '#544A54',
        height: scaledHeight(50),
        justifyContent: 'center',
        marginLeft: '2%',
        marginRight: '2%',
        width: scaledWidth(100),
    },
    buttonGoTextStyle: {
        color: '#544A54',
        fontSize: scaledHeight(16),
        textAlign: 'center',
        width: '100%',
    },
    buttonLogoutStyle: {
        alignContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        borderColor: '#544A54',
        borderWidth: 1,
        height: scaledHeight(50),
        width: scaledWidth(100),
        // justifyContent: 'center',
        // marginLeft:'2%',   
        // marginRight:'2%',
    },
    columnContainer: { flexDirection: 'column', marginHorizontal: 10 },
    container: { alignItems: 'flex-start', backgroundColor: 'white', flex: 1, justifyContent: 'center', width: '100%' },
    dividerLine: { backgroundColor: 'lightgray', height: 1, marginHorizontal: 15 },
    headerContainer: {
        alignItems: 'center', flexDirection: 'row',
        justifyContent: 'space-around', marginHorizontal: 20, marginVertical: 25
    },
    heading: {
        fontSize: 20,
    },
    logoStyle: { marginHorizontal: scaledHeight(20), width: '70%' },
    logoutContainer: {
        flexDirection: 'row', justifyContent: 'center',
        marginTop: scaledHeight(10),
        padding: scaledHeight(5),
    },
    menuContainer: {
        flex: 1, flexDirection: 'row', justifyContent: 'center',
        padding: scaledHeight(5),
        marginTop: scaledHeight(10)
    },
    menuIcon: {
        height: 25,
        marginHorizontal: scaledHeight(5),
        padding: scaledHeight(5),
        width: 25
    },
    menuItem: {
        borderColor: '#d6d7da',
        borderWidth: 0.5,
        padding: scaledHeight(10)
    },
    menuName: {
        flex: 1,
        textAlignVertical: "center"
    },
    modalContainerStyle: {
        backgroundColor: '#FFFFFF',
        marginTop: scaledHeight(80),
        paddingBottom: scaledHeight(15),
        paddingLeft: '4%',
        paddingRight: '4%',
        paddingTop: scaledHeight(15),

    },
    modalViewStyle: {
        flexDirection: 'column', flex: 1,
        marginLeft: '30%',
        padding: scaledHeight(5),
        // marginHorizontal: 20, marginVertical: 50,
        backgroundColor: "pink"
    },
    rightModalIconStyle: { margin: 5 },
    rightModalImageContainer: { alignItems: 'center', backgroundColor: COLORS.DARK_BLUE, padding: 10 },
    rightModalStyle: {
        backgroundColor: 'transparent', flex: 1,
        margin: 0
    },
    rightModalViewStyle: {
        alignSelf: 'flex-end', backgroundColor: 'white', bottom: 0, height: '100%',
        left: 0, right: 0, width: '60%'
    },
    scrollViewStyle: { flex: 1, width: "100%" }

});

export default styles;
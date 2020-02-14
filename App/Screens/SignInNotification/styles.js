import { StyleSheet } from "react-native";
import { scaledHeight } from '../../Utils/Resolution';
import * as COLORS from "../../Constants/ColorConstants";

const styles = StyleSheet.create({
    bottomView: {
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        bottom: 0,
        height: scaledHeight(50),
        justifyContent: 'center',
        position: 'absolute',
        width: '100%',
    },
    container: {
        alignItems: 'center',
        alignSelf: 'stretch',
        backgroundColor: COLORS.DARK_BLUE,
        flex: 1
    },
    contentContainer: {
        alignSelf: 'stretch',
        paddingHorizontal: '2%',
    },
    flexContainer: {
        flexDirection: 'row'
    },
    logoStyle: {
        alignSelf: 'center',
        marginTop: scaledHeight(250),
    },
    notificationDescText: {
        color: '#FFFFFF',
        fontSize: scaledHeight(16),
        marginTop: scaledHeight(14),
    },
    scrollStyle: {
        alignSelf: 'stretch',       
    },
    signInNotificationDesc: {
        marginHorizontal: '4%',
        marginTop: scaledHeight(60)
    },
    signInPushNotificationContainer: {
        alignItems: 'center',
        bottom: scaledHeight(90),
        height: scaledHeight(50),
        justifyContent: 'center',
        width: '100%'
    },
    signInPushNotificationText: {
        color: "#FFFFFF",
        fontSize: scaledHeight(16),
    },
    submitButtonStyle: {
        color: COLORS.DARK_BLUE,
        fontSize: scaledHeight(16),
        fontWeight: 'bold'
    },
    touchableStyle: {
        alignItems: 'center',
        width: '100%',
    },
    userNameText: {
        color: '#FFFFFF',
        fontSize: scaledHeight(32),
        fontWeight: 'bold',
        marginTop: scaledHeight(10),
    },
    welcomeText: {
        color: '#FFFFFF',
        fontSize: scaledHeight(20),
        fontWeight: 'bold'
    },
});

export default styles;
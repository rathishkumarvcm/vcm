import { StyleSheet } from "react-native";
import { scaledHeight } from '../../Utils/Resolution';
import * as COLORS from "../../Constants/ColorConstants";

const styles = StyleSheet.create({   
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
        marginTop: scaledHeight(220),
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
        marginHorizontal: '10%',
        marginTop: scaledHeight(60),      
    },
    signInPushNotificationText: {
        color: "#FFFFFF",
        fontSize: scaledHeight(16),
    },
    signInWithOnlineText:{
        color: '#FFFFFF',      
        fontSize: scaledHeight(14),
        fontWeight:'bold',
        marginBottom:scaledHeight(40),
        marginTop: scaledHeight(40),
        textAlign:'center',
    },
    signInWithText:{
        color: '#FFFFFF',      
        fontSize: scaledHeight(14),
        fontWeight:'bold',
        marginTop: scaledHeight(10),
        textAlign:'center',
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
    unlockLogoStyle: {
        alignSelf: 'center',
        marginTop: scaledHeight(20),
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
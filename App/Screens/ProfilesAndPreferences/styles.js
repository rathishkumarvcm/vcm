import { StyleSheet } from "react-native";
import { scaledHeight } from '../../Utils/Resolution';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F7FAFF',
        width: '100%'
    },
    scrollviewStyle: {
        flex: 0.85
    },
    welcomeView: {
        marginTop: scaledHeight(14),
        backgroundColor: '#E9E9E9',
        paddingVertical: scaledHeight(15),
        paddingHorizontal: '4%',
        borderRadius: scaledHeight(4),
        marginHorizontal: '4%'
    },
    profileHeader: {
        marginTop: scaledHeight(24),
        marginHorizontal: '4%'
    },
    optionHeaderView: {
        marginTop: scaledHeight(3),
        marginLeft:'2%'
    },
    optionSubHeaderView: {
        marginTop: scaledHeight(25),
        marginHorizontal: '2%',
    },
    optionContainer: {
        borderWidth: 1,
        borderColor: '#B5B5B5',
        backgroundColor: '#FFFFFF',
        height: scaledHeight(150),
        borderRadius: scaledHeight(5),      
        marginTop: scaledHeight(30),
        paddingTop:scaledHeight(15),    
        paddingBottom:scaledHeight(15),  
        marginHorizontal: '6%',
        paddingLeft:'2%'
    },
    optionRowContainer: {
       flexDirection:'row'
    },
    backButtonFlex: {
        marginLeft: "10%",
        marginRight: "10%",
        width: "80%",
        height: scaledHeight(60),
        borderColor: '#61285F45',
        borderWidth: scaledHeight(1),
        marginTop: scaledHeight(36),
        justifyContent: 'center',
        alignItems: 'center'
    },
    welcomeText: {
        flex: 0.82,
        fontSize: scaledHeight(16),
        color: '#56565A',
        textAlign: 'left'
    },
    optionHeaderText: {
        fontSize: scaledHeight(18),
        color: '#56565A',
        fontWeight: 'bold',
    },
    optionSubHeaderText: {
        fontSize: scaledHeight(16),
        color: '#B5B5B5',
        lineHeight:scaledHeight(22),       
    },
    profileHeadline: {
        color: '#56565A',
        fontSize: scaledHeight(24),
        fontWeight:'bold'

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
    linkBreak1: {
        backgroundColor: '#7B8288',
        opacity: 0.4,
        height: scaledHeight(1),
        marginTop: scaledHeight(10),
        marginHorizontal: '4%'
    },
    securityContainer: {      
        backgroundColor: '#F7FAFF',            
        marginTop: scaledHeight(30),
        paddingTop:scaledHeight(15),    
        paddingBottom:scaledHeight(15),  
        marginHorizontal: '6%',
        paddingLeft:'2%'
    },
    securityContainerText: {      
        color: '#56565A',
        fontSize: scaledHeight(16),
    },
    securityContainerPhoneText: {      
        color: '#30ACF3',
        fontSize: scaledHeight(16),
    },
});
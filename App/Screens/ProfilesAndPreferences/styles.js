import { StyleSheet } from "react-native";
import { scaledHeight } from '../../Utils/Resolution';

const styles = StyleSheet.create({
    backButtonFlex: {
        alignItems: 'center',
        borderColor: '#61285F45',
        borderWidth: scaledHeight(1),
        height: scaledHeight(60),
        justifyContent: 'center',
        marginLeft: "10%",
        marginRight: "10%",
        marginTop: scaledHeight(36),
        width: "80%"
    },
    container: {
        backgroundColor: '#F7FAFF',
        flex: 1,
        width: '100%'
    },
    fullLine: {
        backgroundColor: '#7B8288',
        height: scaledHeight(1),
        marginTop: scaledHeight(45),
        opacity: 0.4,
    },
    linkBreak1: {
        backgroundColor: '#7B8288',
        height: scaledHeight(1),
        marginHorizontal: '4%',
        marginTop: scaledHeight(10),
        opacity: 0.4
    },
    optionContainer: {
        backgroundColor: '#FFFFFF',
        borderColor: '#B5B5B5',
        borderRadius: scaledHeight(5),
        borderWidth: 1,
        height: scaledHeight(150),      
        marginHorizontal: '6%',
        marginTop: scaledHeight(30),    
        paddingBottom:scaledHeight(15),  
        paddingLeft:'2%',
        paddingTop:scaledHeight(15)
    },
    optionHeaderText: {
        color: '#56565A',
        fontSize: scaledHeight(18),
        fontWeight: 'bold',
    },
    optionHeaderView: {
        marginLeft:'2%',
        marginTop: scaledHeight(3)
    },
    optionRowContainer: {
       flexDirection:'row'
    },
    optionSubHeaderText: {
        color: '#B5B5B5',
        fontSize: scaledHeight(16),
        lineHeight:scaledHeight(22),       
    },
    optionSubHeaderView: {
        marginHorizontal: '2%',
        marginTop: scaledHeight(25),
    },
    profileHeader: {
        marginHorizontal: '4%',
        marginTop: scaledHeight(24)
    },
    profileHeadline: {
        color: '#56565A',
        fontSize: scaledHeight(24),
        fontWeight:'bold'

    },
    scrollviewStyle: {
        flex: 0.85
    },
    securityContainer: {      
        backgroundColor: '#F7FAFF',            
        marginHorizontal: '6%',
        marginTop: scaledHeight(30),    
        paddingBottom:scaledHeight(15),  
        paddingLeft:'2%',
        paddingTop:scaledHeight(15)
    },
    securityContainerPhoneText: {      
        color: '#30ACF3',
        fontSize: scaledHeight(16),
    },
    securityContainerText: {      
        color: '#56565A',
        fontSize: scaledHeight(16),
    },
    tNCFlex: {
        marginLeft: "4%",
        marginTop: "4%",
        width: "92%",
    },
    tNcBody: {
        color: '#56565A',
        fontSize: scaledHeight(16),
    },
    tNcHeader: {
        color: '#56565A',
        fontSize: scaledHeight(16),
        fontWeight: 'bold',
    },
    welcomeText: {
        color: '#56565A',
        flex: 0.82,
        fontSize: scaledHeight(16),
        textAlign: 'left'
    },
    welcomeView: {
        backgroundColor: '#E9E9E9',
        borderRadius: scaledHeight(4),
        marginHorizontal: '4%',
        marginTop: scaledHeight(14),
        paddingHorizontal: '4%',
        paddingVertical: scaledHeight(15)
    },
});

export default styles;
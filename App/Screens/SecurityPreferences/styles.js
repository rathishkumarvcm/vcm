import { StyleSheet } from "react-native";
import { scaledHeight } from '../../Utils/Resolution';

const styles = StyleSheet.create({
    backButtonFlex: {
        alignItems: 'center',
        borderColor: '#61285F45',
        borderWidth: scaledHeight(1),
        height: scaledHeight(50),
        justifyContent: 'center',
        marginLeft: "10%",
        marginRight: "10%",
        marginTop: scaledHeight(36),
        width: "80%"
    },
    confirmPasswordText: {
        color: '#194C7D',
        fontSize: scaledHeight(18),
        fontWeight: 'bold'
    },
    container: {
        alignItems: 'center',
        alignSelf: 'stretch',
        backgroundColor: '#F7F7F7',
        flex: 1
    },
    contentContainer: {
        alignSelf: 'stretch',
        paddingHorizontal: '2%',
    },
    contentStyle: { justifyContent: 'center' },
    cornerTriangle: {
        backgroundColor: 'transparent',
        borderRightColor: 'transparent',
        borderRightWidth: 30,
        borderStyle: 'solid',
        borderTopColor: '#8BC105',
        borderTopWidth: 30,
        height: 0,
        transform: [{ rotate: '180deg' }],
        width: 0,
    },
    descText: {
        color: '#56565A',
        fontSize: scaledHeight(12),
        marginTop: scaledHeight(10),
    },
    fullLine: {
        backgroundColor: '#7B8288',
        height: scaledHeight(1),
        marginTop: scaledHeight(45),
        opacity: 0.4,
    },
    header: {
        alignItems: 'flex-start',
        marginHorizontal: '4%',
        marginTop: scaledHeight(22)
    },
    headerText: {
        color: '#56565A',
        fontSize: scaledHeight(20)
    },
    layoutContainer: {
        alignSelf: 'stretch',
        backgroundColor: '#FFFFFF',
        flex: 1,
        height: '80%',
        left: '4%',
        position: 'absolute',
        right: '4%',
        top: scaledHeight(120),
    },
    lineBorderItems: {
        borderColor: '#E6E6E6',
        borderWidth: 0.7,
    },
    linkBreak1: {
        backgroundColor: '#7B8288',
        height: scaledHeight(1),
        marginHorizontal: '4%',
        marginTop: scaledHeight(10),
        opacity: 0.4
    },
    logoContainer: {
        flex: 0.2,
    },
    logoStyle: {
        alignSelf: 'center',
    },
    nextLogoContainer: {
        flex: 0.1,
    },
    optionContainer: {
        alignItems: 'flex-start',
        backgroundColor: '#FFFFFF',
        borderColor: '#D4D4D4',
        borderRadius: scaledHeight(10),
        borderWidth: 1,
        height: scaledHeight(140),
        justifyContent: 'flex-start',
        marginHorizontal: '4%',
        marginTop: scaledHeight(20)
    },
    optionHeaderText: {
        color: '#56565A',
        fontSize: scaledHeight(14),
        fontWeight: 'bold',
    },
    optionHeaderView: {
        marginTop: scaledHeight(10),
    },
    optionIcon: {
        alignItems: 'center',
        flexDirection: 'row',
        left: 6,
        marginRight: scaledHeight(6),
        marginTop: scaledHeight(15),
        position: 'absolute',
        top: 4
    },
    optionSubHeaderText: {
        color: '#B2B2B2',
        fontSize: scaledHeight(12),
    },
    optionSubHeaderView: {
        paddingLeft: '4%',
        paddingRight: '4%',
        top: scaledHeight(2),
    },
    prefernceContainer: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: scaledHeight(20),
        marginTop: scaledHeight(10)
    },
    scrollStyle: {
        alignSelf: 'stretch',
    },
    scrollviewStyle: {
        flex: 0.85
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
    titleContainer: {
        flex: 0.7,
    },
    titleText: {
        color: '#56565A',
        fontSize: scaledHeight(14),
        fontWeight: 'bold',
        marginTop: scaledHeight(16),
    },
    welcomeView: {
        backgroundColor: '#E9E9E9',
        marginTop: scaledHeight(14)
    },
});

export default styles;
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
        backgroundColor: '#E9E9E9'
    },
    profileHeader: {
        marginTop: scaledHeight(22),
        alignItems: 'flex-start',
        marginHorizontal: '4%'
    },
    optionHeaderView: {
        marginTop: scaledHeight(10),
    },
    optionSubHeaderView: {
        top: scaledHeight(2),
        paddingLeft: '4%',
        paddingRight: '4%',
    },
    optionContainer: {
        borderWidth: 1,
        borderColor: '#D4D4D4',
        backgroundColor: '#FFFFFF',
        height: scaledHeight(140),
        borderRadius: scaledHeight(10),
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        marginTop: scaledHeight(20),
        marginHorizontal: '4%'
    },
    optionHeaderText: {
        fontSize: scaledHeight(14),
        color: '#56565A',
        fontWeight: 'bold',
    },
    optionSubHeaderText: {
        fontSize: scaledHeight(12),
        color: '#B2B2B2',
    },
    profileHeadline: {
        color: '#56565A',
        fontSize: scaledHeight(20)
    },
    backButtonFlex: {
        marginLeft: "10%",
        marginRight: "10%",
        width: "80%",
        height: scaledHeight(50),
        borderColor: '#61285F45',
        borderWidth: scaledHeight(1),
        marginTop: scaledHeight(36),
        justifyContent: 'center',
        alignItems: 'center'
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
    optionIcon: {
        position: 'absolute',
        left: 6,
        top: 4,
        marginTop: scaledHeight(15),
        marginRight: scaledHeight(6),
        flexDirection: 'row',
        alignItems: 'center'
    },
    optionSubHeaderText: {
        fontSize: scaledHeight(16),
        color: '#B2B2B2',
        marginTop: scaledHeight(60)
    }
});
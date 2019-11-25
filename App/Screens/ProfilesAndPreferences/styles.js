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
        marginTop: scaledHeight(33)
    },
    optionSubHeaderView: {
        marginTop: scaledHeight(2),
    },
    optionContainer: {
        borderWidth: 1,
        borderColor: '#B5B5B5',
        backgroundColor: '#FFFFFF',
        height: scaledHeight(160),
        borderRadius: scaledHeight(10),
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: scaledHeight(20),
        marginHorizontal: '4%'
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
    welcomeText: {
        flex: 0.82,
        fontSize: scaledHeight(16),
        color: '#56565A',
        textAlign: 'left'
    },
    optionHeaderText: {
        fontSize: scaledHeight(16),
        color: '#56565A',
        fontWeight: 'bold',
    },
    optionSubHeaderText: {
        fontSize: scaledHeight(16),
        color: '#B5B5B5',
    },
    profileHeadline: {
        color: '#56565A',
        fontSize: scaledHeight(24)
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
    }
});
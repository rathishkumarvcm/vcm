import { StyleSheet } from "react-native";
import { scaledHeight } from '../../Utils/Resolution';

const styles = StyleSheet.create({
    alertBox: {
        alignItems: 'center',
        backgroundColor: '#F2F2F2',
        borderColor: '#C7C7C7',
        borderWidth: 1,
        justifyContent: 'center',
        marginHorizontal: '4%',
        marginTop: scaledHeight(20),
        paddingHorizontal: '4%',
        paddingVertical: scaledHeight(15)
    },
    alertText: {
        color: '#54565B',
        fontSize: scaledHeight(15),
    },
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
    container: {
        backgroundColor: '#F7FAFF',
        flex: 1,
        width: '100%'
    },
    contentStyle: {
        justifyContent: 'center'
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
        alignItems: 'flex-start',
        backgroundColor: '#FFFFFF',
        borderColor: '#D4D4D4',
        borderRadius: scaledHeight(10),
        borderWidth: 1,
        height: scaledHeight(140),
        justifyContent: 'flex-start',
        marginHorizontal: '4%',
        marginTop: scaledHeight(20),
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
        marginRight: '4%',
        marginTop: scaledHeight(15),
        position: 'absolute',
        right: 6,
        top: 4
    },   
    optionSubHeaderText: {
        color: '#B2B2B2',
        fontSize: scaledHeight(16),
        marginTop: scaledHeight(60)
    },
    optionSubHeaderView: {
        paddingLeft: '4%',
        paddingRight: '4%',
        top: scaledHeight(2),
    },
    profileHeader: {
        alignItems: 'flex-start',
        marginHorizontal: '4%',
        marginTop: scaledHeight(22)
    },
    profileHeadline: {
        color: '#56565A',
        fontSize: scaledHeight(20)
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
    welcomeView: {
        backgroundColor: '#E9E9E9',
        marginTop: scaledHeight(14)
    },
});

export default styles;
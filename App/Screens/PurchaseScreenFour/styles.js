import { StyleSheet } from "react-native";
import { scaledHeight } from '../../Utils/Resolution';


const styles = StyleSheet.create({
    backButtonFlex: {
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        borderColor: '#61285F45',
        borderWidth: scaledHeight(1),
        height: scaledHeight(50),
        justifyContent: 'center',
        marginTop: scaledHeight(18)
    },
    backButtonText: {
        color: '#544A54',
        fontSize: scaledHeight(16),
        fontWeight: 'bold'
    },
    blackTextBold22px: {
        color: '#333333DE',
        fontSize: scaledHeight(22),
        fontWeight: 'bold',
        marginLeft: '4%'
    },
    container: {
        backgroundColor: '#F7FAFF',
        flex: 1,
        width: '100%'
    },
    edit: {
        color: '#5D83AE',
        fontSize: scaledHeight(15)
    },
    flex1: {
        marginLeft: "4%",
        marginRight: "4%",
        marginTop: "4%"
    },
    flex5: {
        backgroundColor: '#F8F6DE',
        borderColor: '#61285F45',
        borderWidth: scaledHeight(1),
        marginTop: scaledHeight(55)
    },
    flex6: {
        height: scaledHeight(205),
        marginLeft: "10%",
        marginRight: "10%",
        marginTop: "12%"
    },
    flexContainer: {
        marginLeft: "4%",
        marginRight: "4%"
    },
    greyText16px: {
        color: '#56565A',
        fontSize: scaledHeight(16),
        paddingVertical: scaledHeight(3)
    },
    greyTextBold16px: {
        color: '#333333DE',
        fontSize: scaledHeight(16),
        fontWeight: 'bold',
        paddingVertical: scaledHeight(3)
    },
    headerFlex: {
        alignItems: 'center',
        backgroundColor: '#E4EBFE',
        height: scaledHeight(46),
        justifyContent: 'center'
    },
    headerText: {
        color: '#4D79F6',
        fontSize: scaledHeight(20),
        fontWeight: 'bold',
    },
    headerTextView: {
        marginLeft: '4%',
        marginRight: '4%'
    },
    horizontalFlex: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: scaledHeight(52)
    },
    line: {
        backgroundColor: '#535353',
        height: scaledHeight(1),
        marginBottom: "4%",
        marginTop: '4%',
        opacity: 0.25
    },
    mainFlex: {
        flex: 0.85
    },
    section: {
        flexDirection: 'column',
        justifyContent: 'space-around',
        marginLeft: '4%',
        marginRight: '4%',
        marginTop: scaledHeight(15)
    },
    subHeading: {
        color: '#56565A',
        fontSize: scaledHeight(22),
        fontWeight: 'bold'
    },
    submitFlex: {
        alignItems: 'center',
        backgroundColor: '#544A54',
        borderColor: '#61285F45',
        borderWidth: scaledHeight(1),
        height: scaledHeight(50),
        justifyContent: 'center',
        marginTop: scaledHeight(19)
    },
    submitText: {
        color: '#FFFFFF',
        fontSize: scaledHeight(16),
        fontWeight: 'bold'
    },
    text5: {
        color: '#333333DE',
        fontSize: scaledHeight(16),
        fontWeight: 'bold',
        margin: "4%"
    },
    titleHeaderTextStyle: {
        color: '#56565A',
        fontSize: scaledHeight(24),
        fontWeight: 'bold'
    }
});

export default styles;
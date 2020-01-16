import { StyleSheet } from "react-native";
import { scaledHeight } from '../../Utils/Resolution';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F7FAFF',
        width: '100%'
    },
    mainFlex: {
        flex: 0.85
    },
    flexContainer: {
        marginLeft: "4%",
        marginRight: "4%",
    },
    headerFlex: {
        backgroundColor: '#E4EBFE',
        height: scaledHeight(46),
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerText: {
        color: '#4D79F6',
        fontSize: scaledHeight(20),
        fontWeight: 'bold',
    },
    flex1: {
        marginLeft: "4%",
        marginRight: "4%",
        marginTop: "4%",
    },
    subHeading: {
        color: '#56565A',
        fontSize: scaledHeight(22),
        fontWeight: 'bold',
    },
    line: {
        backgroundColor: '#535353',
        opacity: 0.25,
        height: scaledHeight(1),
        marginTop: '4%',
        marginBottom: "4%",
    },
    section: {
        marginLeft: '4%',
        marginRight: '4%',
        flexDirection: 'column',
        marginTop: scaledHeight(15),
        justifyContent: 'space-around',
    },
    greyTextBold16px: {
        color: '#333333DE',
        fontSize: scaledHeight(16),
        fontWeight: 'bold',
        paddingVertical: scaledHeight(3)
    },
    greyText16px: {
        color: '#56565A',
        fontSize: scaledHeight(16),
        paddingVertical: scaledHeight(3)
    },
    horizontalFlex: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: scaledHeight(52)
    },
    edit: {
        color: '#5D83AE',
        fontSize: scaledHeight(15),
    },
    blackTextBold22px: {
        color: '#333333DE',
        fontSize: scaledHeight(22),
        marginLeft: '4%',
        fontWeight: 'bold',
    },
    flex5: {
        marginTop: scaledHeight(55),
        backgroundColor: '#F8F6DE',
        borderColor: '#61285F45',
        borderWidth: scaledHeight(1),
    },
    text5: {
        color: '#333333DE',
        fontSize: scaledHeight(16),
        fontWeight: 'bold',
        margin: "4%"
    },
    flex6: {
        height: scaledHeight(205),
        flexDirection: 'column',
        marginLeft: "10%",
        marginRight: "10%",
        marginTop: "12%",
    },
    backButtonFlex: {
        height: scaledHeight(50),
        borderColor: '#61285F45',
        borderWidth: scaledHeight(1),
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: scaledHeight(18)
    },
    backButtonText: {
        color: '#544A54',
        fontWeight: 'bold',
        fontSize: scaledHeight(16),
    },
    submitFlex: {
        height: scaledHeight(50),
        borderColor: '#61285F45',
        borderWidth: scaledHeight(1),
        backgroundColor: '#544A54',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: scaledHeight(19)
    },
    submitText: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: scaledHeight(16),
    },
    fullLine: {
        backgroundColor: '#7B8288',
        opacity: 0.4,
        height: scaledHeight(1),
        marginTop: scaledHeight(40),
    },
    tNCFlex: {
        marginLeft: "4%",
        marginTop: scaledHeight(41),
        width: "92%",
    },
    tNcHeader: {
        color: '#56565A',
        fontSize: scaledHeight(16),
        fontWeight: 'bold'
    },
    tNcBody: {
        color: '#56565A',
        fontSize: scaledHeight(16),
    },


});

export default styles;
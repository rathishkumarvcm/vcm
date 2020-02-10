import { StyleSheet } from "react-native";
import { scaledHeight, scaledWidth } from '../../Utils/Resolution';
import Colors from './Colors';

const commonStyles = StyleSheet.create({
    /** Accordian Styles */
    accordionSectionText: {
        color: Colors.DARKGRAY,
        fontSize: 14,
        fontWeight: 'bold',
    },
    commonHeaderText: {
        color: '#707070',
        fontSize: scaledHeight(12),
        fontWeight: 'bold',
        marginBottom: scaledWidth(15),
        marginTop: scaledWidth(15),
        textAlign: 'center'
    },
});

/** AccountSummaryComponent Styles */

const styles = StyleSheet.create({
    addGroupButton: {
        alignContent: 'center',
        alignItems: 'center',
        backgroundColor: '#544A54',

        borderColor: '#61285F',
        borderWidth: 1,

        height: scaledHeight(50),
        justifyContent: 'center',
        // marginBottom:scaledHeight(15),
        // marginTop:scaledHeight(26),
        width: '80%'
    },
    addGroupContainer: { 
        alignItems: 'center', 
        justifyContent: 'center', 
        marginBottom: 20, 
        width: "100%" 
    },
    addGroupText: {
        color: '#FFFFFF',
        fontSize: scaledHeight(16),
        fontWeight: 'bold',
        textAlign: 'center',
    },
    balanceText: {
        ...commonStyles.commonHeaderText,
        alignSelf: 'center',
        // marginLeft: scaledWidth(40),

    },
    container: {
        backgroundColor: '#F7FAFF',
        flex: 1,
        width: '100%'
    },
    headerBalanceView: {
        flex: 0.33,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    headerHoldingGroupView: {
        flex: 0.33,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    headerReturnsView: {
        flex: 0.34,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    holdingGroupText: {
        ...commonStyles.commonHeaderText,
        alignSelf: 'center',
        // marginLeft: scaledWidth(0),
    },

    returnText: {
        ...commonStyles.commonHeaderText,
        alignSelf: 'center',
        // marginLeft: scaledWidth(40),
    },
    scrollView: {
        flex: .70
    },
    tableHeaderView: {
        flex: 0.07,
        flexDirection: 'row',
        // justifyContent:'space-evenly',
        width: '100%',
    },
});

/** AccountSummaryAccordion Styles */

const accordianStyles = StyleSheet.create({
    accordionRow: {
        alignItems: 'center',
        backgroundColor: Colors.GRAY,
        flex: 1,
        flexDirection: 'row',
        fontSize: 12,
        height: 54,
        // paddingLeft: 16,
        width: '100%',
    },
    accordionSectionBalanceText: {
        ...commonStyles.commonText,
        // marginLeft: scaledWidth(70),
        marginRight: scaledWidth(20)
    },
    accordionSectionBalanceView: {
        flex: 0.33, flexDirection: 'row', justifyContent: 'flex-end'
    },
    accordionSectionGroupNameText: {
        ...commonStyles.commonText,
        marginLeft: scaledWidth(8),
    },
    accordionSectionGroupNameView: {
        flex: 0.33, flexDirection: 'row', justifyContent: 'flex-start'
    },
    accordionSectionHeader: {
        alignItems: 'center',
        backgroundColor: Colors.CGRAY,
        flex: 1,
        flexDirection: 'row',
        height: 56,
        // paddingLeft: 8,
        // paddingRight: 8,
    },
    accordionSectionQtdText: {
        ...commonStyles.accordionSectionText,
        marginLeft: scaledWidth(30),
        marginRight: scaledWidth(10),
    },
    accordionSectionReturnsView: {
        flex: 0.34, flexDirection: 'row', justifyContent: 'flex-start'
    },
    accordionSectionYtdText: {
        ...commonStyles.accordionSectionText,
        // marginLeft: scaledWidth(10),
    },
    accountBalanceText: {
        color: Colors.DARKGRAY,
        fontSize: 12,
        marginRight: scaledWidth(20),
        textAlign: 'center',
    },
    accountBalanceView: {
        flex: 0.33, flexDirection: 'row', justifyContent: 'flex-end',
    },
    accountNameText: {
        color: Colors.DARKGRAY,
        fontSize: 12,
        marginLeft: scaledWidth(16),
        textAlign: 'left'
        // width: scaledWidth(90),
    },
    accountNameView: {
        flex: 0.33, flexDirection: 'row', justifyContent: 'flex-start',
    },
    accountQtdText: {
        color: Colors.DARKGRAY,
        fontSize: 12,
        marginLeft: scaledWidth(30),
        textAlign: 'center',
        // width: scaledWidth(25),
    },
    accountReturnsView: {
        flex: 0.34, flexDirection: 'row', justifyContent: 'flex-start'
    },
    accountYtdText: {
        color: Colors.DARKGRAY,
        fontSize: 12,
        marginLeft: scaledWidth(10),
        textAlign: 'center',
        // width: scaledHeight(25),
    },
    childHr: {
        backgroundColor: Colors.LIGHTGRAY,
        height: 1,
        width: '100%',
    },
    editDropdown: {
        backgroundColor: '#FFFFFF',
        borderBottomWidth: 1,
        borderColor: '#00000029',
        height: scaledHeight(60),
        justifyContent: 'center',
    },
    editDropdownText: {
        color: '#56565A',
        fontSize: scaledHeight(16),
        fontWeight: 'bold',
        marginLeft: scaledWidth(20)
    },
    editFlatList: {
        elevation: 4,
        position: 'absolute',
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 1, },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        top: 55,
        width: '100%',
        zIndex: 5,
    },
    parentHr: {
        color: Colors.WHITE,
        height: 1,
        width: '100%'
    },
});


export { styles, accordianStyles };
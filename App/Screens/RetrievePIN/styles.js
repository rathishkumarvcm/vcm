import { StyleSheet } from "react-native";
import { scaledHeight } from '../../Utils/Resolution';

const styles = StyleSheet.create({
    bottomView: {
        alignItems: 'center',
        backgroundColor: '#194C7D',
        bottom: 0,
        height: scaledHeight(50),
        justifyContent: 'center',
        position: 'absolute',
        width: '100%',
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
    cornerTriangle: {
        backgroundColor: 'transparent',
        borderRightColor: 'transparent',
        borderRightWidth: 30,
        borderStyle: 'solid',
        borderTopColor: '#8BC105',
        borderTopWidth: 30,
        height: 0,
        width: 0
    },
    createNewPINText: {
        color: '#194C7D',
        fontSize: scaledHeight(18),
    },
    flexContainer: {
        flexDirection: 'row'
    },
    iconFlexContainer: {
        alignContent: 'flex-end',
        alignItems: 'flex-end',
        alignSelf: 'flex-end',
        flex: 1
    },
    infoIconStyle: {
        marginLeft: '2%',
        marginRight: '2%'
    },
    layoutContainer: {
        alignSelf: 'stretch',
        backgroundColor: '#FFFFFF',
        flex: 1,
        height: '100%',
        left: '4%',
        position: 'absolute',
        right: '4%',
        top: scaledHeight(120)
    },
    mandatoryText: {
        color: '#56565A',
        fontSize: scaledHeight(12),
        marginTop: scaledHeight(20)
    },
    retrievePINDescContentText: {
        color: '#56565A',
        fontSize: scaledHeight(14),
        marginBottom: scaledHeight(10),
        marginTop: scaledHeight(20),
    },
    retrievePINDescText: {
        color: '#49494A',
        fontSize: scaledHeight(16),
        fontWeight: 'bold',
        marginTop: scaledHeight(20)
    },

    retrievePINDetailsContainer: {
        marginTop: scaledHeight(10),
        paddingLeft: '4%',
        paddingRight: '4%',
    },
    scrollStyle: {
        alignSelf: 'stretch',
        flex: 1
    },
    securePINText: {
        color: '#56565A',
        fontSize: scaledHeight(13),
        marginBottom: scaledHeight(10),
        marginTop: scaledHeight(20),
    },
    securePINTextBox: {
        width: '100%'
    },
    securePINTextBoxError: {
        borderColor: 'red',
    },
    submitButtonStyle: {
        color: '#FFFFFF',
        fontSize: scaledHeight(16),
        fontWeight: 'bold'
    },
    touchableStyle: {
        alignItems: 'center',
        width: '100%',
    },
});

export default styles;
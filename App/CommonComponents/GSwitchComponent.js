import React from "react";
import { View, StyleSheet, } from 'react-native';
import { scaledHeight } from '../Utils/Resolution';
import { GButtonComponent } from './GButtonComponent';
import PropTypes from "prop-types";

/* **************************\
  Function: GSwitchComponent
  Explanation:
  Custom component for Button, where ever in project need of
  Buttons this can be resued by giving  props value
\************************** */
const styles = StyleSheet.create({
    switchContainer: {
        flex: 1,
        flexDirection: 'row',
        marginLeft: '4%',
        marginBottom: scaledHeight(10)
    },
    offButtonStyle: {
        borderColor: '#56565A',
        borderRadius: 30,
        height: scaledHeight(35),
        borderWidth: 1,
        marginTop: scaledHeight(12),
        width: '22%',
        backgroundColor: '#B7B7B7',
        alignItems: 'flex-start',
        justifyContent: 'center'
    },
    offButtonStyleDisable: {
        borderColor: '#56565A',
        borderRadius: 30,
        height: scaledHeight(35),
        borderWidth: 1,
        marginTop: scaledHeight(12),
        width: '22%',
        backgroundColor: '#FFFFFF',
        alignItems: 'flex-start',
        justifyContent: 'center'
    },
    onButtonStyle: {
        borderColor: '#56565A',
        position: 'absolute',
        left: '16%',
        borderRadius: 30,
        height: scaledHeight(35),
        borderWidth: 1,
        marginTop: scaledHeight(12),
        width: '18%',
        backgroundColor: '#B7B7B7',
        alignItems: 'center',
        justifyContent: 'center'
    },
    onButtonStyleDisable: {
        borderColor: '#56565A',
        borderRadius: 30,
        height: scaledHeight(35),
        position: 'absolute',
        zIndex: -1,
        left: '16%',
        borderWidth: 1,
        marginTop: scaledHeight(12),
        width: '18%',
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center'
    },
    TextOnStyle: {
        color: '#56565A',
        fontSize: scaledHeight(12),
        fontWeight: 'bold',
        marginLeft: '30%',
        marginRight: '10%'
    },
    TextOffStyle: {
        color: '#A2A2A2',
        fontSize: scaledHeight(12),
        fontWeight: 'bold',
        marginLeft: '30%',
        marginRight: '10%'
    }
});

const GSwitchComponent = props => (
    <View style={styles.switchContainer}>
        <GButtonComponent
            disabled={props.switchOn}
            buttonStyle={props.switchOn ? [styles.offButtonStyle, props.offStyle] : [styles.offButtonStyleDisable, props.offStyleDisabled]}
            buttonText={props.switchOffText}
            textStyle={props.switchOn ? [styles.TextOnStyle, props.textOnStyle] : [styles.TextOffStyle, props.textOffStyle]}
            onPress={props.switchOnMethod}
        />
        <GButtonComponent
            disabled={props.switchOff}
            buttonStyle={props.switchOff ? [styles.onButtonStyle, props.onStyle] : [styles.onButtonStyleDisable, props.onStyleDisabled]}
            buttonText={props.switchOnText}
            textStyle={props.switchOff ? [styles.TextOnStyle, props.textOnStyle] : [styles.TextOffStyle, props.textOffStyle]}
            onPress={props.switchOffMethod}
        />
    </View>
);

GSwitchComponent.propTypes = {
    switchOnMethod: PropTypes.func.isRequired,
    switchOffMethod: PropTypes.func.isRequired,
    switchOn: PropTypes.bool.isRequired,
    switchOff: PropTypes.bool.isRequired,
    switchOnText: PropTypes.string,
    switchOffText: PropTypes.string,
    disabled: PropTypes.bool,
    buttonStyle: PropTypes.instanceOf(Object),
    textStyle: PropTypes.instanceOf(Object),
    offStyle: PropTypes.instanceOf(Object),
    offStyleDisabled: PropTypes.instanceOf(Object),
    onStyle: PropTypes.instanceOf(Object),
    onStyleDisabled: PropTypes.instanceOf(Object),
    textOnStyle: PropTypes.instanceOf(Object),
    textOffStyle: PropTypes.instanceOf(Object),
};

GSwitchComponent.defaultProps = {
    disabled: false,
    switchOnText: "",
    switchOffText: "",
    offStyle: {},
    offStyleDisabled: {},
    onStyle: {},
    onStyleDisabled: {},
    textOnStyle: {},
    textOffStyle: {},
};

export default GSwitchComponent;





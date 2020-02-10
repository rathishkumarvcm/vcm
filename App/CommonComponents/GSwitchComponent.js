import React from "react";
import { View, StyleSheet, } from 'react-native';
import PropTypes from "prop-types";
import { scaledHeight } from '../Utils/Resolution';
import { GButtonComponent } from './GButtonComponent';

/* **************************\
  Function: GSwitchComponent
  Explanation:
  Custom component for Button, where ever in project need of
  Buttons this can be resued by giving  props value
\************************** */
const styles = StyleSheet.create({
    TextOffStyle: {
        color: '#A2A2A2',
        fontSize: scaledHeight(12),
        fontWeight: 'bold',
        marginLeft: '30%',
        marginRight: '10%'
    },
    TextOnStyle: {
        color: '#56565A',
        fontSize: scaledHeight(12),
        fontWeight: 'bold',
        marginLeft: '30%',
        marginRight: '10%'
    },
    offButtonStyle: {
        alignItems: 'flex-start',
        backgroundColor: '#B7B7B7',
        borderColor: '#56565A',
        borderRadius: 30,
        borderWidth: 1,
        height: scaledHeight(35),
        justifyContent: 'center',
        marginTop: scaledHeight(12),
        width: '22%'
    },
    offButtonStyleDisable: {
        alignItems: 'flex-start',
        backgroundColor: '#FFFFFF',
        borderColor: '#56565A',
        borderRadius: 30,
        borderWidth: 1,
        height: scaledHeight(35),
        justifyContent: 'center',
        marginTop: scaledHeight(12),
        width: '22%'
    },
    onButtonStyle: {
        alignItems: 'center',
        backgroundColor: '#B7B7B7',
        borderColor: '#56565A',
        borderRadius: 30,
        borderWidth: 1,
        height: scaledHeight(35),
        justifyContent: 'center',
        left: '16%',
        marginTop: scaledHeight(12),
        position: 'absolute',
        width: '18%'
    },
    onButtonStyleDisable: {
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        borderColor: '#56565A',
        borderRadius: 30,
        borderWidth: 1,
        height: scaledHeight(35),
        justifyContent: 'center',
        left: '16%',
        marginTop: scaledHeight(12),
        position: 'absolute',
        width: '18%',
        zIndex: -1
    },
    switchContainer: {
        flex: 1,
        flexDirection: 'row',
        marginLeft: '4%',
        marginBottom: scaledHeight(10)
    }
});

const GSwitchComponent = props => {
    const {switchOn,offStyle,offStyleDisabled,switchOffText,textOnStyle,textOffStyle,switchOnMethod,switchOff,
        onStyle,onStyleDisabled,switchOnText,switchOffMethod}=props;
return(
    <View style={styles.switchContainer}>
        <GButtonComponent
            disabled={switchOn}
            buttonStyle={switchOn ? [styles.offButtonStyle,offStyle] : [styles.offButtonStyleDisable,offStyleDisabled]}
            buttonText={switchOffText}
            textStyle={switchOn ? [styles.TextOnStyle,textOnStyle] : [styles.TextOffStyle,textOffStyle]}
            onPress={switchOnMethod}
        />
        <GButtonComponent
            disabled={switchOff}
            buttonStyle={switchOff ? [styles.onButtonStyle, onStyle] : [styles.onButtonStyleDisable, onStyleDisabled]}
            buttonText={switchOnText}
            textStyle={switchOff ? [styles.TextOnStyle, textOnStyle] : [styles.TextOffStyle, textOffStyle]}
            onPress={switchOffMethod}
        />
    </View>
);
};

GSwitchComponent.propTypes = {
    switchOnMethod: PropTypes.func.isRequired,
    switchOffMethod: PropTypes.func.isRequired,
    switchOn: PropTypes.bool.isRequired,
    switchOff: PropTypes.bool.isRequired,
    switchOnText: PropTypes.string,
    switchOffText: PropTypes.string,
    offStyle: PropTypes.instanceOf(Object),
    offStyleDisabled: PropTypes.instanceOf(Object),
    onStyle: PropTypes.instanceOf(Object),
    onStyleDisabled: PropTypes.instanceOf(Object),
    textOnStyle: PropTypes.instanceOf(Object),
    textOffStyle: PropTypes.instanceOf(Object),
};

GSwitchComponent.defaultProps = {
    switchOnText: "",
    switchOffText: "",
    offStyle: {},
    offStyleDisabled: {},
    onStyle: {},
    onStyleDisabled: {},
    textOnStyle: {},
    textOffStyle: {}

};

export default GSwitchComponent;





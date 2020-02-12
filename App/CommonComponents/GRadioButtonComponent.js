import React from "react";
import { View , StyleSheet, TouchableOpacity, Text } from 'react-native';
import PropTypes from "prop-types";
import GRadioButtonComponentStyle from './GRadioButtonComponentStyle';


export const GRadioButtonComponent = props => {
    const {onPress,questions,additionalText,selected} = props;
    const styles = GRadioButtonComponentStyle(props);

return(
    
    <TouchableOpacity style={styles.radioButtonLayout} onPress={onPress}>
        <View style={styles.outerCircle}>
            {
              selected ?
                <View style={styles.innerCircle} />
                : null
            }
        </View>
        <View style={styles.questionsSection}>
            <Text style={styles.questionsText}>
                {questions}
            </Text>
            <Text style={styles.additionalText}>
                {additionalText}
            </Text>
        </View>
        
    </TouchableOpacity>
    );
    };

    GRadioButtonComponent.propTypes = {
        onPress: PropTypes.func,
        questions: PropTypes.string,
        additionalText:PropTypes.string,
        selected: PropTypes.bool,
      };
      
      GRadioButtonComponent.defaultProps = {
        onPress:() => { },
        questions:'',
        additionalText:'',
        selected:false,
      };

export default GRadioButtonComponent;
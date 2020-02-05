import React from "react";
import { View , StyleSheet, TouchableOpacity, Text } from 'react-native';
import PropTypes from "prop-types";
import { scaledHeight } from "../Utils/Resolution";

export const styles = StyleSheet.create({
    additionalText : {
        alignItems:'flex-start',
        color : '#333333DE',
        fontSize : scaledHeight(12),
        marginTop:"5%"
    },
    innerCircle : {
        backgroundColor: '#707070',
        borderRadius: scaledHeight(6),
        height: scaledHeight(12),
        width: scaledHeight(12)
    },
    outerCircle : {
        alignItems: 'center',
        borderColor: '#707070',
        borderRadius: scaledHeight(16),
        borderWidth: scaledHeight(2),
        height: scaledHeight(32),
        justifyContent: 'center',
        width: scaledHeight(32),
    },
    questionsSection : {
        flexDirection:'column',        
        height:scaledHeight(50), 
        marginLeft : '5%'      
    },
    questionsText : {
        color : '#333333DE',
        fontSize : scaledHeight(16)
    },
    radioButtonLayout : {
        flexDirection: "row", 
        marginBottom : '2%',
       marginTop : '4%',
       width : '92%'
    }
});

export const GRadioButtonComponent = props => {
    const {onPress,radioButtonStyle,questionsStyle,questions,additionalText,selected} = props;
return(
    
    <TouchableOpacity style={[styles.radioButtonLayout,radioButtonStyle]} onPress={onPress}>
        <View style={styles.outerCircle}>
            {
              selected ?
                <View style={styles.innerCircle} />
                : null
            }
        </View>
        <View style={[styles.questionsSection,questionsStyle]}>
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
        questionsStyle : PropTypes.instanceOf(Object),
        radioButtonStyle : PropTypes.instanceOf(Object)
      };
      
      GRadioButtonComponent.defaultProps = {
        onPress:() => { },
        questions:'',
        additionalText:'',
        selected:false,
        questionsStyle:{},
        radioButtonStyle:{}
      };

export default GRadioButtonComponent;
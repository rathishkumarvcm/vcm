import React from "react";
import { View , StyleSheet, TouchableOpacity, Text } from 'react-native';
import PropTypes from "prop-types";
import { scaledHeight } from "../Utils/Resolution";

export const styles = StyleSheet.create({
    radioButtonLayout : {
        width : '92%', 
        marginTop : '4%',
       flexDirection: "row",
       marginBottom : '2%'
    },
    outerCircle : {
        height: scaledHeight(32),
        width: scaledHeight(32),
        borderRadius: scaledHeight(16),
        borderWidth: scaledHeight(2),
        borderColor: '#707070',
        alignItems: 'center',
        justifyContent: 'center',
    },
    innerCircle : {
        height: scaledHeight(12),
        width: scaledHeight(12),
        borderRadius: scaledHeight(6),
        backgroundColor: '#707070'
    },
    questionsSection : {
        height:scaledHeight(50), 
        // alignItems:'center',
        // justifyContent:'center',
        marginLeft : '5%', 
        flexDirection:'column'
        // marginTop: '1%'
    },

    questionsText : {
        fontSize : scaledHeight(16),
        color : '#333333DE'
    },
    additionalText : {
        fontSize : scaledHeight(12),
        color : '#333333DE',
        alignItems:'flex-start',
        marginTop:"5%"
    }
});

export const GRadioButtonComponent = props => (
    
    <TouchableOpacity style={[styles.radioButtonLayout,props.radioButtonStyle]} onPress={props.onPress}>
        <View style={styles.outerCircle}>
            {
              props.selected ?
                <View style={styles.innerCircle} />
                : null
            }
        </View>
        <View style={[styles.questionsSection,props.questionsStyle]}>
            <Text style={styles.questionsText}>
                {props.questions}
            </Text>
            <Text style={styles.additionalText}>
                {props.additionalText}
            </Text>
        </View>
        
    </TouchableOpacity>
    );

    GRadioButtonComponent.propTypes = {
        onPress: PropTypes.func,
        questions: PropTypes.string,
        additionalText:PropTypes.string,
        selected: PropTypes.bool,
        questionsStyle : PropTypes.instanceOf(Object),
        radioButtonStyle : PropTypes.instanceOf(Object)
      };
      
      GRadioButtonComponent.defaultProps = {
     
      };


export default GRadioButtonComponent;
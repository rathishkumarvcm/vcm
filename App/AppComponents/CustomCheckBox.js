import React from 'react';
import { Text, View, TouchableOpacity,StyleSheet } from 'react-native';
import PropTypes from "prop-types";
import { scaledHeight } from '../Utils/Resolution';

const styles = StyleSheet.create({
    selectedview: {
        backgroundColor: '#33A8FF',
        height: 12,
        width: 12,        
    },
    textStyle: {
        marginLeft: scaledHeight(12), width: '80%'
    },    
    touchStyle: {
        alignItems: 'flex-start',
        flexDirection: "row",
        flexGrow: 1, 
        justifyContent: 'flex-start', 
        marginBottom: scaledHeight(12),
        marginTop: scaledHeight(0),        
        width: '100%', 
    },    
    touchView: {
        alignItems: 'center',
        borderColor: '#33A8FF',
        borderWidth: 2, 
        height: 24,    
        justifyContent: 'center',  
        marginTop: scaledHeight(2),   
        width: 24,         
    },    
}
);

const CustomCheckBox = props => {
    const {itemTop,itemBottom,onPress,size,outerCicleColor,selected,innerCicleColor,label, width} = props;
return(

    <TouchableOpacity style={[styles.touchStyle,{width: width, marginTop: scaledHeight(itemTop), marginBottom: scaledHeight(itemBottom)}]} onPress={onPress}>
        <View style={[styles.touchView,{height: size, width: size,borderColor: outerCicleColor,}]}
        >
            {
                selected ? (
                    <View style={[styles.selectedview,{height:(size/2), width: (size/2), backgroundColor: innerCicleColor}]}/>
                  )
                    : null
            }
        </View>
        <Text style={[styles.textStyle, props.labelStyle]}>
            {label}
        </Text>
    </TouchableOpacity>
);
};

CustomCheckBox.propTypes = {
    width: PropTypes.string,
    onPress: PropTypes.func,
    size: PropTypes.number,
    outerCicleColor: PropTypes.string,
    innerCicleColor: PropTypes.string,
    label: PropTypes.string,
    labelStyle: PropTypes.instanceOf(Object),
    selected: PropTypes.bool,
    itemTop: PropTypes.number,
    itemBottom: PropTypes.number,
};

CustomCheckBox.defaultProps = {
    itemTop: scaledHeight(0),
    itemBottom: scaledHeight(12),
    width: '100%',
    size: 24,
    outerCicleColor: '#33A8FF',
    innerCicleColor: '#33A8FF',
    label: 'Label',
    labelStyle: {
        width: '80%',
        marginLeft: scaledHeight(12)
        //  width: '100%',
    },
    selected: false,
    onPress: PropTypes.func,
};

export default CustomCheckBox;
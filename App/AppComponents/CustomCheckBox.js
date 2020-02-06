import React from 'react';
import { Text, View, TouchableOpacity,StyleSheet } from 'react-native';
import PropTypes from "prop-types";
import { scaledHeight } from '../Utils/Resolution';

const styles = StyleSheet.create({
    textStyle: {
        marginLeft: scaledHeight(12), width: '80%'
    }
}
);

const CustomCheckBox = props => {
    const {width,itemTop,itemBottom,onPress,size,outerCicleColor,selected,innerCicleColor,label} = props;
return(

    <TouchableOpacity style={{
        width,
        flexDirection: "row",
        flexGrow: 1,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        marginTop: scaledHeight(itemTop),
        marginBottom: scaledHeight(itemBottom)
    }} onPress={onPress}
    >
        <View style={{
            height: size,
            width: size,
            marginTop:scaledHeight(2),
            borderWidth: 2,
            borderColor: outerCicleColor,
            alignItems: 'center',
            justifyContent: 'center'

        }}
        >
            {
                selected ? (
                    <View style={{
                        height: size / 2,
                        width: size / 2,
                        backgroundColor: innerCicleColor
                    }}
                    />
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
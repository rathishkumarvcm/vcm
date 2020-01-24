import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { scaledHeight } from '../Utils/Resolution';
import PropTypes from "prop-types";



const CustomCheckBox = props => (

    <TouchableOpacity style={{
        width: props.width,
        flexDirection: "row",
        flexGrow: 1,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        marginTop: scaledHeight(props.itemTop),
        marginBottom: scaledHeight(props.itemBottom)
    }} onPress={props.onPress}
    >
        <View style={{
            height: props.size,
            width: props.size,
            marginTop:scaledHeight(2),
            borderWidth: 2,
            borderColor: props.outerCicleColor,
            alignItems: 'center',
            justifyContent: 'center'

        }}
        >
            {
                props.selected ?
                    <View style={{
                        height: props.size / 2,
                        width: props.size / 2,
                        backgroundColor: props.innerCicleColor
                    }}
                    />
                    : null
            }
        </View>

        <Text style={[{ width: '80%', marginLeft: scaledHeight(12) }, props.labelStyle]}>
            {props.label}
        </Text>
    </TouchableOpacity>
);

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
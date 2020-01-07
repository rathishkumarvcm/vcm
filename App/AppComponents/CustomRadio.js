import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { scaledHeight } from '../Utils/Resolution';
import PropTypes from "prop-types";


const CustomRadio = props => (

    <TouchableOpacity style={{
      //   width: props.width,
        flexDirection: "row",
       //  flexGrow: 1,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        marginTop: scaledHeight(props.itemTop),
        marginBottom: scaledHeight(props.itemBottom),
        ...props.componentStyle


    }} onPress={props.onPress}
    >
        <View style={{
            height: props.size,
            width: props.size,
            borderRadius: props.size / 2,
            borderWidth: 2,
            borderColor: props.outerCicleColor,
            alignItems: 'center',
            justifyContent: 'center'

        }}
        >
            {
                props.selected ?
                    <View style={{
                        height: props.size / 4,
                        width: props.size / 4,
                        borderRadius: props.size / 4,
                        backgroundColor: props.innerCicleColor
                    }}
                    />
                    : null
            }
        </View>

        <View style={{ flexGrow: 1, width: '80%', marginLeft: scaledHeight(12) }}>
            <Text style={[props.labelStyle]}>
                {props.label}
            </Text>
            {props.descLabel!=="" && <Text style={[props.descLabelStyle]}>
                {props.descLabel}
                                     </Text>}
            
        </View>


    </TouchableOpacity>
);

CustomRadio.propTypes = {
    onPress: PropTypes.func,
    size: PropTypes.number,
    outerCicleColor: PropTypes.string,
    innerCicleColor: PropTypes.string,
    label: PropTypes.string,
    labelStyle: PropTypes.instanceOf(Object),
    descLabel: PropTypes.string,
    descLabelStyle: PropTypes.instanceOf(Object),
    selected: PropTypes.bool,
    itemTop: PropTypes.number,
    itemBottom: PropTypes.number,
    width: PropTypes.string,
    componentStyle: PropTypes.instanceOf(Object)

};

CustomRadio.defaultProps = {
    itemTop: scaledHeight(0),
    itemBottom: scaledHeight(12),
   //  width: '100%',
    size: 24,
    outerCicleColor: '#33A8FF',
    innerCicleColor: '#33A8FF',
    label: 'Label',
    labelStyle: {
        width: '80%',
        marginLeft: scaledHeight(12)
    },
    descLabel: "",
    descLabelStyle: {
        marginTop: scaledHeight(8)
    },
    componentStyle: {
        width: '100%',
        marginTop: scaledHeight(0),
        marginBottom: scaledHeight(12)
    }


};

export default CustomRadio;
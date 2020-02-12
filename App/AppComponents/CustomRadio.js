import React from 'react';
import { Text, View, TouchableOpacity, } from 'react-native';
import PropTypes from "prop-types";
import { scaledHeight } from '../Utils/Resolution';
import CustomRadioStyle from './commonStyles';

const CustomRadio = props => {
    const { onPress, selected, labelStyle, label, descLabel, descLabelStyle } = props;
    const styles = CustomRadioStyle(props);

    return (
        <TouchableOpacity style={styles.radiotouchStyle} onPress={onPress}>
            <View style={styles.radiotouchView}>
                {
                    selected ? ( <View style={styles.radioselectedView} /> ) : null
                }
            </View>

            <View style={styles.radioviewContainer}>
                <Text style={labelStyle}>
                    {label}
                </Text>
                {descLabel !== "" && (
                    <Text style={descLabelStyle}>
                        {descLabel}
                    </Text>
                )}
            </View>
        </TouchableOpacity>
    );
};

CustomRadio.propTypes = {
    onPress: PropTypes.func,
    // size: PropTypes.number,
    // outerCicleColor: PropTypes.string,
    // innerCicleColor: PropTypes.string,
    label: PropTypes.string,
    labelStyle: PropTypes.instanceOf(Object),
    descLabel: PropTypes.string,
    descLabelStyle: PropTypes.instanceOf(Object),
    selected: PropTypes.bool,
    // itemTop: PropTypes.number,
    // itemBottom: PropTypes.number,
    //  width: PropTypes.string,
    // componentStyle: PropTypes.instanceOf(Object)

};

CustomRadio.defaultProps = {
    onPress: () => { },
    // itemTop: scaledHeight(0),
    // itemBottom: scaledHeight(12),
    //  width: '100%',
    // size: 24,
    // outerCicleColor: '#33A8FF',
    // innerCicleColor: '#33A8FF',
    label: 'Label',
    labelStyle: {
        width: '80%',
        marginLeft: scaledHeight(12)
    },
    descLabel: "",
    descLabelStyle: {
        marginTop: scaledHeight(8)
    },
    // componentStyle: {
    //     width: '100%',
    //     marginTop: scaledHeight(0),
    //     marginBottom: scaledHeight(12)
    // },
    selected: false,



};

export default CustomRadio;
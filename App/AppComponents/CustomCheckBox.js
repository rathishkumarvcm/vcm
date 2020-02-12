import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import PropTypes from "prop-types";
// import { scaledHeight } from '../Utils/Resolution';
import CustomCheckBoxStyle from './commonStyles';

const CustomCheckBox = props => {
    const {onPress,selected,label} = props;
    const styles = CustomCheckBoxStyle(props);
    return(
        <TouchableOpacity style={styles.checkboxtouchStyle} onPress={onPress}>
            <View style={styles.checkboxtouchView}>
                {
                    selected ? ( <View style={styles.checkboxselectedView} /> ) : null
                }
            </View>
            <Text style={styles.checkboxtextStyle}>
                {label}
            </Text>
        </TouchableOpacity>
    );
};

CustomCheckBox.propTypes = {
    // width: PropTypes.string,
    onPress: PropTypes.func,
    // size: PropTypes.number,
    // outerCicleColor: PropTypes.string,
    // innerCicleColor: PropTypes.string,
    label: PropTypes.string,
    // labelStyle: PropTypes.instanceOf(Object),
    selected: PropTypes.bool,
    // itemTop: PropTypes.number,
    // itemBottom: PropTypes.number,
};

CustomCheckBox.defaultProps = {
    // itemTop: scaledHeight(0),
    // itemBottom: scaledHeight(12),
    // width: '100%',
    // size: 24,
    // outerCicleColor: '#33A8FF',
    // innerCicleColor: '#33A8FF',
    label: 'Label',
    // labelStyle: {
    //     width: '80%',
    //     marginLeft: scaledHeight(12)
    //     //  width: '100%',
    // },
    selected: false,
    onPress: PropTypes.func,
};

export default CustomCheckBox;
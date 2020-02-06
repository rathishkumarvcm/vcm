import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import PropTypes from "prop-types";
import { scaledHeight } from '../Utils/Resolution';

const styles = StyleSheet.create({
    viewContainer: {
        flexGrow: 1,
        marginLeft: scaledHeight(12),
        width: '80%'
    },
});

const CustomRadio = props => {
    const { itemTop, itemBottom, onPress, size, outerCicleColor, selected,
        innerCicleColor, labelStyle, label, descLabel, descLabelStyle } = props;

    return (
        <TouchableOpacity style={{
            flexDirection: "row",
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
            marginTop: scaledHeight(itemTop),
            marginBottom: scaledHeight(itemBottom),
            ...props.componentStyle
        }} onPress={onPress}
        >
            <View style={{
                height: size,
                width: size,
                borderRadius: size / 2,
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
                            borderRadius: size / 2,
                            backgroundColor: innerCicleColor
                        }}
                        />
                    )
                        : null
                }
            </View>

            <View style={styles.viewContainer}>
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
    //  width: PropTypes.string,
    componentStyle: PropTypes.instanceOf(Object)

};

CustomRadio.defaultProps = {
    onPress: () => { },
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
    },
    selected: false,



};

export default CustomRadio;
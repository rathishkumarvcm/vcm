import React from 'react';
import PropTypes from 'prop-types';
import {
  Platform,
  TouchableHighlight,
  View,
  StyleSheet,
  Text,
  ViewPropTypes
} from 'react-native';

import getIconType from '../Utils/GetIconType';

const GIcon = props => {
  const {
    type,
    name,
    size,
    color,
    iconStyle,
    underlayColor,
    reverse,
    raised,
    containerStyle,
    reverseColor,
    disabled,
    disabledStyle,
    onPress,
    Component = onPress ? TouchableHighlight : View,
    ...attributes
  } = props;

  const IconComponent = getIconType(type);
  const getBackgroundColor = () => {
    if (reverse) {
      return color;
    }

    return raised ? 'white' : 'transparent';
  };

  return (
    <View style={StyleSheet.flatten([styles.iconContainerStyle,     
                  {
                    height: size,
                    width: size * 1.2 + 8
                  }
                ])}
    >
        <IconComponent
        testID="iconIcon"
        style={StyleSheet.flatten([
            { backgroundColor: 'transparent', marginHorizontal: 5 },
            iconStyle && iconStyle,
        ])}
        size={size}
        name={name}
        color={reverse ? reverseColor : color}
        />
    </View>
  );
};

GIcon.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  size: PropTypes.number,
  color: PropTypes.string,
  Component: PropTypes.func,
  underlayColor: PropTypes.string,
  reverse: PropTypes.bool,
  raised: PropTypes.bool,
  containerStyle: ViewPropTypes.style,
  iconStyle: Text.propTypes.style,
  onPress: PropTypes.func,
  reverseColor: PropTypes.string,
  disabled: PropTypes.bool,
  disabledStyle: ViewPropTypes.style,
};

GIcon.defaultProps = {
  underlayColor: 'white',
  reverse: false,
  raised: false,
  size: 24,
  color: 'black',
  reverseColor: 'white',
  disabled: false,
  type: 'material',
};

const styles = StyleSheet.create({
  button: {
    margin: 7,
  },
  raised: {
    ...Platform.select({
      android: {
        elevation: 2,
      },
      default: {
        shadowColor: 'rgba(0,0,0, .4)',
        shadowOffset: { height: 1, width: 1 },
        shadowOpacity: 1,
        shadowRadius: 1,
      },
    }),
  },
  disabled: {
    backgroundColor: '#D1D5D8',
  },
  iconContainerStyle:{
    height:40,
  },
});

export { GIcon };
export default GIcon;

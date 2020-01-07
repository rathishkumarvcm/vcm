import React from 'react';
import {
  Text, View, StyleSheet, TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';
import GIcon from './GIcon';


const styles = StyleSheet.create({
  buttonStyle: {
    backgroundColor: '#06748C',
    borderRadius: 1,
    height: 50,
    justifyContent: 'center',
    marginTop: '2%',
    width: '90%',
    //    alignItems:'center',
  },
  buttonTextStyle: {
    fontSize: 17,
    fontWeight: 'bold',
    lineHeight: 20,
  },
  buttonTextView: {
    alignItems: 'center',
    flex: 0.8,

  },
  leftIconView: {
    alignItems: 'flex-start',
    flex: 0.2,
  },
  rightIconView: {
    alignItems: 'flex-end',
    flex: 0.2,
  },
  wrapper: {
    alignItems: 'center',
    flexDirection: 'row',
  },
});


export const GIconButton = (props) => {
    const { id } = props;
  return (
<View>
    <TouchableOpacity
      style={[styles.buttonStyle, id.buttonStyle]}
      activeOpacity={0.8}
      onPress={props.onPress}
    >
      <View style={styles.wrapper}>
        {!props.iconRight && (
        <View style={styles.leftIconView}>
          <GIcon name={id.icon} type={id.iconType} size={props.iconSize} color={props.iconColor} />
        </View>
        )}
        <View style={styles.buttonTextView}>
          <Text style={[styles.buttonTextStyle, props.textStyle]}>{props.title}</Text>
        </View>
        {props.iconRight && (
        <View style={styles.rightIconView}>
          <GIcon name={props.icon} type={props.iconType} size={props.iconSize} color={props.iconColor} />
        </View>
        )}
      </View>
    </TouchableOpacity>
  </View>
);
};

GIconButton.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  iconType: PropTypes.string,
  iconSize: PropTypes.number,
  iconColor: PropTypes.string,
  iconRight: PropTypes.bool,
  disabled: PropTypes.bool,
  buttonStyle: PropTypes.instanceOf(Object),
  textStyle: PropTypes.instanceOf(Object),
  onPress: PropTypes.func,
};

GIconButton.defaultProps = {
  iconSize: 30,
  iconRight: false,
  disabled: false,
  buttonStyle: {},
  textStyle: {},
};

export default GIconButton;


import React from "react";
import PropTypes from "prop-types";
import createReactClass from "create-react-class";
import {
  StyleSheet,
  TextInput,
  Animated,
  Easing,
  Text,
  View,
  Platform,
  ViewPropTypes
} from "react-native";

import { scaledHeight } from '../Utils/Resolution';


const textPropTypes = Text.propTypes || ViewPropTypes;
const textInputPropTypes = TextInput.propTypes || textPropTypes;
const propTypes = {
  ...textInputPropTypes,
  inputStyle: textInputPropTypes.style,
  labelStyle: textPropTypes.style,
  disabled: PropTypes.bool,
  style: ViewPropTypes.style
};

const createStyles = () => {
  return StyleSheet.create({
    element: {
      position: "relative"
    },
    input: {
        //  height:scaledHeight(20),
        width:'90%',
        justifyContent: "center",
        alignItems:'center',
        borderRadius:scaledHeight(5),
        backgroundColor:"transparent",
        fontSize: scaledHeight(14),
        paddingLeft: scaledHeight(10),
        marginTop: scaledHeight(17),
        //  marginBottom: scaledHeight(5)
    },
    label: labelStyleObj
  });
};

let cleanStyle = {
  fontSize: scaledHeight(20),
  top: scaledHeight(7)
};

let dirtyStyle = {
  fontSize: scaledHeight(12),
  top: scaledHeight(-17)
};

let takeBigFontUp = {
  top: scaledHeight(-22)
};


const GFloatingLabel = createReactClass({
  propTypes,
  getInitialState() {
    const state = {
      text: this.props.value,
      dirty: this.props.value || this.props.placeholder
    };

    
    const style = state.dirty ? dirtyStyle : cleanStyle;
    state.labelStyle = {
      fontSize: new Animated.Value(style.fontSize),
      top: new Animated.Value(style.top)
    };

    return state;
  },

  componentDidlUpdate(props) {
    if (typeof props.value !== "undefined" && props.value !== this.state.text) {
      this.setState({ text: props.value, dirty: !!props.value });
      this._animate(!!props.value);
    }
  },

  onChangeText(text) {
    this.setState({ text });
    if (this.props.onChangeText) {
      this.props.onChangeText(text);
    }
  },

  _animate(dirty) {
    const { bigFontSize } = this.props;

    const nextStyle = dirty
      ? bigFontSize
        ? takeBigFontUp
        : dirtyStyle
      : cleanStyle;
    const { labelStyle } = this.state;
    const anims = Object.keys(nextStyle).map(prop => Animated.timing(
      labelStyle[prop],
      {
        toValue: nextStyle[prop],
        duration: 300
      },
      Easing.ease
    ));

    Animated.parallel(anims).start();
  },

  _onFocus() {
    this._animate(true);
    this.setState({ dirty: true });
    if (this.props.onFocus) {
      this.props.onFocus(arguments);
    }
  },

  _onBlur() {
    if (!this.state.text) {
      this._animate(false);
      this.setState({ dirty: false });
    }

    if (this.props.onBlur) {
      this.props.onBlur(arguments);
    }
  },

  updateText(event) {
    const { text } = event.nativeEvent;
    this.setState({ text });

    if (this.props.onEndEditing) {
      this.props.onEndEditing(event);
    }
  },

  _renderLabel() {
    const styles = createStyles();
    return (
      <Animated.Text
        ref="label"
        style={[this.state.labelStyle, styles.label, this.props.labelStyle]}
      >
        {this.props.children}
      </Animated.Text>
    );
  },

  render() {
    const styles = createStyles();
    const props = {
      autoCapitalize: this.props.autoCapitalize,
      autoCorrect: this.props.autoCorrect,
      autoFocus: this.props.autoFocus,
      bufferDelay: this.props.bufferDelay,
      clearButtonMode: this.props.clearButtonMode,
      clearTextOnFocus: this.props.clearTextOnFocus,
      controlled: this.props.controlled,
      //  editable: this.props.editable,
      enablesReturnKeyAutomatically: this.props.enablesReturnKeyAutomatically,
      keyboardType: this.props.keyboardType,
      multiline: this.props.multiline,
      numberOfLines: this.props.numberOfLines,
      onBlur: this._onBlur,
      onChange: this.props.onChange,
      onChangeText: this.onChangeText,
      onEndEditing: this.updateText,
      onFocus: this._onFocus,
      onSubmitEditing: this.props.onSubmitEditing,
      placeholder: this.props.placeholder,
      secureTextEntry: this.props.secureTextEntry, //  Compatibility
      returnKeyType: this.props.returnKeyType,
      selectTextOnFocus: this.props.selectTextOnFocus,
      selectionState: this.props.selectionState,
      style: [styles.input],
      testID: this.props.testID,
      value: this.state.text,
      underlineColorAndroid: this.props.underlineColorAndroid,
      //  android TextInput will show the default bottom border
      onKeyPress: this.props.onKeyPress,
      editable: !this.props.disabled,
      useNativeDriver: true
      //  ref:this.props.reference
    };

    const elementStyles = [styles.element];

    if (this.props.inputStyle) {
      props.style.push(this.props.inputStyle);
    }

    if (this.props.style) {
      elementStyles.push(this.props.style);
    }

    return (
      <View style={elementStyles}>
        {this._renderLabel()}
        <TextInput
          {...props}
          ref={r => this.props.updateRefs && this.props.updateRefs(r)}
          autoCorrect={false}
        //  selectionColor="black"
        />
      </View>
    );
  }
});

const labelStyleObj = {
  marginTop: scaledHeight(21),
  paddingLeft: scaledHeight(9),
  color: "#AAA",
  position: "absolute",
  fontSize: scaledHeight(14)
};

if (Platform.OS === "web") {
  labelStyleObj.pointerEvents = "none";
}

module.exports = GFloatingLabel;
export default GFloatingLabel;

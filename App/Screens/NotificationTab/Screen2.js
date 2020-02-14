import React from 'react';
import { Text, View } from 'react-native';
// import PropTypes from "prop-types";

class Screen2Component extends React.PureComponent {
  render() {
    // const { navigation } = this.props;

    return (
      <View>
        <Text>Screen2...!</Text>
      </View>
    );
  }
}
Screen2Component.propTypes = {
  // navigation: PropTypes.instanceOf(Object),
};

Screen2Component.defaultProps = {
  // navigation: {},
};
export default Screen2Component;
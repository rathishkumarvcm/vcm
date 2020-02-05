import React from 'react';
import { View, Text,Button,StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  errorStyle: {
    alignItems: 'center', flex: 1, justifyContent: 'center' 
  }
});

export default class GErrorBoundaries extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false
    };
  }

  static getDerivedStateFromError(error) {
    //  Update state so the next render will show the fallback UI.
    console.log("Error", error);
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    //  You can also log the error to an error reporting service
    this.setState({ hasError: true });
    console.error(error, info);

  }

  render() {
    const {hasError} = this.state;
    const {children} = this.props;

    if (hasError) {
      //  You can render any custom fallback UI
      return (
        <View style={styles.errorStyle}>
          <Text>Something went wrong.</Text>
          <Button title="Error" />
        </View>
      );
    }

    return children;
  }

}
GErrorBoundaries.propTypes = {
  children: PropTypes.instanceOf(Object)
};

GErrorBoundaries.defaultProps = {
  children:{}

};
    
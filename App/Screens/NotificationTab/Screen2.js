import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: { alignItems: 'center', flex: 1, justifyContent: 'center' },
});

class Screen2Component extends React.PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <Text>Screen2...!</Text>
      </View>
    );
  }
}
export default Screen2Component;
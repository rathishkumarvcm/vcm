import React from 'react';
import { Text, SafeAreaView, StyleSheet } from 'react-native';
import BaseModalView from '../Menu/BaseModalView';

const styles = StyleSheet.create({
  container: { alignItems: 'center', flex: 1, justifyContent: 'center', },
});

class Screen1Component extends React.PureComponent {

  render() {
    return (
      <BaseModalView>
        <SafeAreaView style={styles.container}>
          <Text>Screen1...!</Text>
        </SafeAreaView>
      </BaseModalView>
    );
  }
}
export default Screen1Component;
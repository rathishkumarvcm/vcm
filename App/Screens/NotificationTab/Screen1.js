import React from 'react';
import { Text, SafeAreaView } from 'react-native';
import BaseModalView from '../Menu/BaseModalView';


export default class Screen1Component extends React.Component {

  render() {

    return (
      <BaseModalView>
        <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Screen1...!</Text>
        </SafeAreaView>
      </BaseModalView>
    );
  }
}
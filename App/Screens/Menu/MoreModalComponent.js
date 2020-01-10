import React, {Component} from 'react';
import {Modal, Text, TouchableHighlight, View, Alert} from 'react-native';

export default class MoreModalComponent extends Component {
  state = {
    modalVisible: true,
  };

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render() {
    return (
      // <View style={{flex:1,
      // backgroundColor:'rgba(0,0,0,0.3)'
      // // backgroundColor:'pink'
      // }}>
        <Modal
          animationType="fade"
          transparent={true}
          presentationStyle={'pageSheet'}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>
          <View style={{margin: 40,backgroundColor:'skyblue',width:200,height:250}}>
            <View>
              <Text>Hello World!</Text>

              <TouchableHighlight
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}>
                <Text>Hide Modal</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>

      //   <TouchableHighlight
      //     onPress={() => {
      //       this.setModalVisible(true);
      //     }}>
      //     <Text>Show Modal</Text>
      //   </TouchableHighlight>
      // </View>
    );
  }
}
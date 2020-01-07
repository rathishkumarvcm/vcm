import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; 
 
export default class Screen1Component extends React.Component {
  
//   static navigationOptions = ({ navigation }) => ({
//     title: "Learn",
//     headerLeft: (
//         <TouchableOpacity
//             style={{ height: 44,width: 44,flex: 1,
//               justifyContent: "center",
//               alignItems: "center"}}
//             onPress={() => navigation.openDrawer()}>
//             <Icon name="bars" size={20} color='green' />
//         </TouchableOpacity>
//     ),
// })

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Screen1...!</Text>
      </View>
    );
  }
}
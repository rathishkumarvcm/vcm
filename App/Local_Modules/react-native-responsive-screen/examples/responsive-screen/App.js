//  packages
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {widthPercentageToDP, heightPercentageToDP} from 'react-native-responsive-screen';
 
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: 'gray',
    flex: 1,
    justifyContent: 'center',
  },
  responsiveBox: {
    borderColor: 'orange',
    borderWidth: 2,
    flexDirection: 'column',
    height: heightPercentageToDP('17%'),
    justifyContent: 'space-around',
    width: widthPercentageToDP('84.5%') 
  },
  text: {
    color: 'white'
  }
});

const App = () => {
  return (
    <View style={styles.container}>
        <View style={styles.responsiveBox}>
          <Text style={styles.text}>This box is always of 84.5% width and 17% height.</Text>
          <Text style={styles.text}>Test it by running this example repo in phones/
            emulators with screens of various dimensions and pixel per inch (ppi).
          </Text>
        </View>
    </View>
  );
};

export default App;

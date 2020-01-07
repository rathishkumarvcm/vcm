import React from 'react';
import { ActivityIndicator, View , StyleSheet } from 'react-native';

//  import { Modal } from 'react-native-router-flux';



const styles = StyleSheet.create({
   /* container: {
      flex: 1,
      justifyContent: 'center',
      padding: 10
    }
    */
   container : {
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    height: "100%",
    justifyContent: "center",
    position: "absolute",
    width: "100%",
    zIndex: 99
  }
  });
  

const GActivityIndicatorHOC = () =>{
        return (
            //  <Modal>
              <View style={styles.container}>
                  <ActivityIndicator size="large" color="#0000ff" />
              </View>
            //   </Modal>
            );
};

export default GActivityIndicatorHOC;


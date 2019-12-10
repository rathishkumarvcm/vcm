import React, { Component } from 'react';
import { PanResponder} from 'react-native';
//import MapView from 'react-native-maps';

class MapComponent extends Component {
    constructor(props){
        super(props);


    this.panResponder = PanResponder.create({

      onStartShouldSetPanResponder: () => true,
      onStartShouldSetPanResponderCapture: () => true,
      onMoveShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponderCapture: () => true,

      onPanResponderGrant: () => {
        // The gesture has started. Show visual feedback so the user knows
        // what is happening!

        // gestureState.d{x,y} will be set to zero now
      },
      onPanResponderMove: () => {
         // The user has moved all touches while this view is the
        // responder. This typically means a gesture has succeeded
      },
      onPanResponderTerminationRequest: () => true,
      onPanResponderRelease: () => {
        // The user has released all touches while this view is the
        // responder. This typically means a gesture has succeeded
      },
      onPanResponderTerminate: () => {
        // Another component has become the responder, so this gesture
        // should be cancelled
      }

    });

        this.state={
            isFromLocationScreen : false
        };

      }

      // navigator.geolocation.getCurrentPosition(
    //   (position) => {

    //     this.setState({
    //       userLocation: {
    //         latitude: position.coords.latitude,
    //         longitude: position.coords.longitude,
    //         latitudeDelta: LATITUDE_DELTA,
    //         longitudeDelta: LONGITUDE_DELTA
    //       },

    //       // error: null,
    //     isLocationCaptured: true
    //     });
    //   },
    //
    //   { enableHighAccuracy: false, timeout: 10 },
    // );

    render() {
      return(
       /* <MapView 
        style={{height:'100%',width:'100%'}}
        scrollEnabled
        //provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: 39.7392,
          longitude : -104.9903,
          latitudeDelta : 0.0922,
          longitudeDelta : 0.0421
        }}
        />*/
        <>
        </>
      );
    }
}


export default MapComponent;

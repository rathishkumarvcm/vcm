import React, { Component } from 'react';
import { setJSExceptionHandler, setNativeExceptionHandler } from 'react-native-exception-handler';
import RootComponent from './RootComponent';
import AppUtils from './Utils/AppUtils';

const jsExceptionhandler = (error) => {
  //  This is your custom global error handler
  //  You do stuff like show an error dialog
  //  or hit google analytics to track crashes
  //  or hit a custom api to inform the dev team.

  AppUtils.debugLog('JS Exception handled:-', error);
};

//  //  - exceptionhandler is the exception handler function
//  //  - allowInDevMode is an optional parameter is a boolean.
//  //    If set to true the handler to be called in place of RED screen
//  //    in development mode also.
setJSExceptionHandler(jsExceptionhandler, true);



const nativeExceptionhandler = exceptionString => {
  //  your exception handler code here
  AppUtils.debugLog('Native Exception handled:-', exceptionString);
};
setNativeExceptionHandler(
  nativeExceptionhandler,
  false,
  false
);
//  - exceptionhandler is the exception handler function
//  - forceAppQuit is an optional ANDROID specific parameter that defines
//     if the app should be force quit on error.  default value is true.
//     To see usecase check the common issues section.
//  - executeDefaultHandler is an optional boolean (both IOS, ANDROID)
//     It executes previous exception handlers if set by some other module.
//     It will come handy when you use any other crash analytics module along with this one
//     Default value is set to false. Set to true if you are using other analytics modules.

export default class AppComponent extends Component {
  constructor(props) {
    super(props);
    //  set true to isLoading if data for this screen yet to be received and wanted to show loader.
    this.state = {
    };
  }

  render() {
    return (
      <RootComponent />
    );
  }

}
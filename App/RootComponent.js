import React, { Component } from 'react';
import { Provider } from "react-redux";
import AppNavigator from './routes';
import store from './Shared/Store/index';
//import configureStore from "./store/configureStore";

/*
Create application store and its inital value when app launch
*/
const initialState = {
    appVersion: "1.0.0",
    env: "PROD",
    wsVersion: "",
    NotifitcationWsVersion: "",
    appBuildKey: "",
    appID: "",
    language: "en"
    };
//const store = configureStore({ initialState });

class RootComponent extends Component {
    render() {return(
            <Provider store={store}>
              <AppNavigator />
            </Provider>
          );
    }
}

export default RootComponent;
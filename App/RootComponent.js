import React, { Component } from 'react';
import { Provider } from "react-redux";
import { Text, AppState } from 'react-native';
import RNSecureKeyStore, { ACCESSIBLE } from 'react-native-secure-key-store';
import { Auth } from "aws-amplify";
// import { NavigationActions } from 'react-navigation';
 import AppNavigator from './routes';
import AppStackNavigator from './Navigation/index';
import store from './Shared/Store/index';
import { setTopLevelNavigator, setPreviousScreen } from './Navigation/navigationService';
import { scaledHeight } from './Utils/Resolution';
import { showAlertWithCancelButton, GErrorBoundaries } from './CommonComponents';

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
// const store = configureStore({ initialState });

var sessionId;

class RootComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timeOut: false,
      appState: AppState.currentState,
    };
  }

  signOut = () => {
    this.navigator &&
      this.navigator.dispatch(
        NavigationActions.navigate({ routeName: 'login' }));
  }

  componentDidMount() {
    // AppState.addEventListener('change', this._handleAppStateChange);

    setInterval(() => {
      RNSecureKeyStore.get("jwtToken")
        .then((setValue) => {
          RNSecureKeyStore.get("currentSession")
            .then((res) => {
              if (sessionId === undefined) {
                sessionId = res;
              } else if (sessionId === res) {
                showAlertWithCancelButton(
                  "Session Time Out",
                  "Your session is about to expire. Please click Cancel to avoid being Sign out.",
                  "Cancel",
                  "Sign Out",
                  null,
                  () => this.signOut()
                );
                // alert("TIME OUT IS CALLING");
                this.setState({
                  timeOut: true
                });

                Auth.signOut({ global: true })
                  .then(data => console.log("SigoutSucces", data))
                  .catch(err => console.log(err));

                RNSecureKeyStore.remove("currentSession")
                  .then((res) => {
                    console.log(res);
                  }, (err) => {
                    console.log(err);
                  });

                RNSecureKeyStore.remove("jwtToken")
                  .then((res) => {
                    console.log(res);
                  }, (err) => {
                    console.log(err);
                  });
              }
            }, (err) => {
              console.log("err--->", err);
            });
        },
          (err) => {
            console.log("err", err);
          });
    }, 300000);
  }

  /*componentWillMount() {
    AppState.removeEventListener('change', this._handleAppStateChange);
  }*/

  _handleAppStateChange = (nextAppState) => {
    if (
      this.state.appState.match(/inactive|background/) &&
      nextAppState === 'active'
    ) {
      console.log('App has come to the foreground!');
      this.signOut();
    }
    this.setState({ appState: nextAppState });
  };

  getActiveRouteName(navigationState) {
    if (!navigationState) {
      return null;
    }
    const route = navigationState.routes[navigationState.index];
    // dive into nested navigators
    if (route.routes) {
      return this.getActiveRouteName(route);
    }
    return route.routeName;
  }

  navigationStateChange = (prevState, currentState, action) => {
    const currentScreen = this.getActiveRouteName(currentState);
    const prevScreen = this.getActiveRouteName(prevState);

    if (prevScreen !== currentScreen) {
      setPreviousScreen(currentScreen);
    }
  }

  render() {
    return (
      <GErrorBoundaries>
        <Provider store={store}>
          <AppNavigator
            ref={navigatorRef => {
              this.navigator = navigatorRef;
              setTopLevelNavigator(navigatorRef);
            }}
            onNavigationStateChange={this.navigationStateChange}
          />
        </Provider>
      </GErrorBoundaries>
    );
  }
}

export default RootComponent;
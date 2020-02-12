import React, { Component } from 'react';
import { Provider } from "react-redux";
import { AppState } from 'react-native';
import RNSecureKeyStore from 'react-native-secure-key-store';
import { Auth } from "aws-amplify";
// import { NavigationActions } from 'react-navigation';
 import AppNavigator from './routes';
import store from './Shared/Store/index';
import { setTopLevelNavigator, setPreviousScreen } from './Navigation/navigationService';
import { showAlertWithCancelButton, GErrorBoundaries } from './CommonComponents';

/*
Create application store and its inital value when app launch
*/

// const store = configureStore({ initialState });

let sessionId;

class RootComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      appState: AppState.currentState,
    };
  }

 

  componentDidMount() {
    // AppState.addEventListener('change', this._handleAppStateChange);

    setInterval(() => {
      RNSecureKeyStore.get("jwtToken")
        .then(() => {
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
              

                Auth.signOut({ global: true })
                  .then(() => {})
                  .catch(() => {});

                RNSecureKeyStore.remove("currentSession")
                  .then(() => {
                  }, () => {
                  });

                RNSecureKeyStore.remove("jwtToken")
                  .then(() => {
                  }, () => {
                  });
              }
            }, () => {
            });
        },
          () => {
          });
    }, 300000);
  }




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

  _handleAppStateChange = (nextAppState) => {
    const {appState} = this.state;
    if (
      appState.match(/inactive|background/) &&
      nextAppState === 'active'
    ) {
      this.signOut();
    }
    this.setState({ appState: nextAppState });
  };

  signOut = () => {
    /* this.navigator &&
      this.navigator.dispatch(
        NavigationActions.navigate({ routeName: 'login' }));

        */
  }

  navigationStateChange = (prevState, currentState) => {
    const currentScreen = this.getActiveRouteName(currentState);
    const prevScreen = this.getActiveRouteName(prevState);

    if (prevScreen !== currentScreen) {
      setPreviousScreen(currentScreen);
    }
  }

  setInputRef = (navigatorRef) => {
    this.navigator = navigatorRef;
    setTopLevelNavigator(navigatorRef);
}

  render() {
    return (
      <GErrorBoundaries>
        <Provider store={store}>
          <AppNavigator
            ref={this.setInputRef}
            onNavigationStateChange={this.navigationStateChange}
          />
        </Provider>
      </GErrorBoundaries>
    );
  }
}

export default RootComponent;
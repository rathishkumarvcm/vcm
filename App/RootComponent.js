import React, { Component } from 'react';
import { Provider } from "react-redux";
import { Text,AppState } from 'react-native';
import AppNavigator from './routes';
import store from './Shared/Store/index';
import RNSecureKeyStore, {ACCESSIBLE} from 'react-native-secure-key-store';
import { Auth } from "aws-amplify";
import { scaledHeight } from './Utils/Resolution';
import { showAlertWithCancelButton} from './CommonComponents'
import { NavigationActions } from 'react-navigation';

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

var sessionId;

class RootComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timeOut : false,
      appState: AppState.currentState,
    }
  }

  signOut = () => {
    this.navigator &&
                     this.navigator.dispatch(
                      NavigationActions.navigate({ routeName: 'login' }));
  }

  componentDidMount(){
    console.log("sessionId",sessionId);
    AppState.addEventListener('change', this._handleAppStateChange);

    setInterval(() => {
      RNSecureKeyStore.get("jwtToken")
      .then((setValue) => {
        RNSecureKeyStore.get("currentSession")
              .then((res) => {
                  if(sessionId == undefined){
                     sessionId  = res;
                  }else if(sessionId == res){   
                    showAlertWithCancelButton(
                      "Session Time Out",
                      "Your session is about to expire. Please click Cancel to avoid being Sign out.",
                      "Cancel",
                      "Sign Out",
                      null,
                      ()=>this.signOut()
                      )
                    //alert("TIME OUT IS CALLING");
                    this.setState({
                      timeOut : true
                    });

                    Auth.signOut({ global: true })
                    .then(data => console.log("SigoutSucces",data))
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
                  console.log("err--->",err);
              });
    },
        (err) => {
          console.log("err",err);
        });
    }, 300000);
  }

  componentWillMount(){
    AppState.removeEventListener('change', this._handleAppStateChange);
  }

  _handleAppStateChange = (nextAppState) => {
    if (
      this.state.appState.match(/inactive|background/) &&
      nextAppState === 'active'
    ) {
      console.log('App has come to the foreground!');
      this.signOut();
    }
    this.setState({appState: nextAppState});
  };

    
    render() {
      return(
      <Provider store={store}>
              <AppNavigator ref={nav => {
          this.navigator = nav;
        }}/>
            </Provider>
            
          );
    }
}

export default RootComponent;
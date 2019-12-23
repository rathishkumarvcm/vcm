import React, { Component } from 'react';
import { Provider } from "react-redux";
import AppNavigator from './routes';
import store from './Shared/Store/index';
import RNSecureKeyStore, {ACCESSIBLE} from 'react-native-secure-key-store';
import { Auth } from "aws-amplify";

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
      timeOut : false
    }
  }

  componentDidMount(){
    console.log("sessionId",sessionId);
    setInterval(() => {
      RNSecureKeyStore.get("jwtToken")
      .then((setValue) => {
        RNSecureKeyStore.get("currentSession")
              .then((res) => {
                  if(sessionId == undefined){
                     sessionId  = res;
                  }else if(sessionId == res){   
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
                    this.navigator &&
                     this.navigator.dispatch(
                      NavigationActions.navigate({ routeName: 'login' }));
                  }
              }, (err) => {
                  console.log("err--->",err);
              });
    },
        (err) => {
          console.log("err",err);
        });
    }, 30000);
  }

    
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
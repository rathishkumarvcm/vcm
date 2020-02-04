import React from 'react';
import PropTypes from "prop-types";
import TouchID from 'react-native-touch-id';

class GBiometricAuthentication extends React.PureComponent {
    constructor(props){
        super(props);
        this.state = {
            biometryAuth:false,
        };
    }

    static getDerivedStateFromProps(/* props, state */){
        // initialize state variable and return. If no changes required for state
        // variable then return empty object. return {}
        // console.log('error',props,state);
        return {}; // should return empty object by default

    }

componentDidMount(){

   const {enableBiometric,onAuthenticate} = this.props;
   const { biometryAuth } = this.state;
    // console.log("TouchID.isSupported()",TouchID.isSupported(),this.props.enableBiometric)
    if(enableBiometric)
    TouchID.isSupported()
    .then(biometryType => {
        if (biometryType === 'TouchID') {
            TouchID.authenticate('Authenticate with fingerprint')
            .then(success => {
                this.setState({biometryAuth:success},()=>{
                   onAuthenticate(biometryAuth);
                });
            })
            .catch(error => {
                this.setState({biometryAuth:false},()=>{
                    onAuthenticate(biometryAuth);
                });
                console.log('error',error);
            });
            //  Touch ID is supported on iOS
          } 
        else if (biometryType === 'FaceID') {
            TouchID.authenticate('Authenticate with faceprint')
            .then(success => {
                this.setState({biometryAuth:success},()=>{
                    onAuthenticate(biometryAuth);
                });
            })
            .catch(error => {
                // alert(JSON.stringify(error))
                this.setState({biometryAuth:false},()=>{
                    onAuthenticate(biometryAuth);
                });
                console.log('error',error);
            });
            //  Face ID is supported on iOS
          } 
          else if (biometryType === true) {
            TouchID.authenticate('Authenticate with biometric')
            .then(success => {
                this.setState({biometryAuth:success},()=>{
                    onAuthenticate(biometryAuth);
                });
            })
            .catch(error => {
                this.setState({biometryAuth:false},()=>{
                    onAuthenticate(biometryAuth);
                });
                console.log('error',error);
            });
            //  Touch ID is supported on Android
          }
    }).catch(error => {
        console.log('error--',JSON.stringify(error));
    });
    
}

    render(){
        const {children} = this.props;
            if(children!=null)
                return children; 
            return null;       
        }
}

GBiometricAuthentication.propTypes ={
    onAuthenticate:PropTypes.func.isRequired,
    enableBiometric:PropTypes.bool,
    children : PropTypes.instanceOf(Object)
};
GBiometricAuthentication.defaultProps={
    enableBiometric:true,
    children : {}
};
export default GBiometricAuthentication;
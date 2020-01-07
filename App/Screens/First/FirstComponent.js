/* eslint-disable no-unused-vars */
//  eslint-disable-next-line no-unused-vars
import React, { Component } from 'react';
import { Text,View,ScrollView, Image} from 'react-native';
import {styles} from './styles';

import {GInputComponent,GButtonComponent} from '../../CommonComponents';
import { Auth } from "aws-amplify";
import ImagePicker from 'react-native-image-picker';



let options = {
    title: 'Select Image',
    customButtons: [
      { name: 'customOptionKey', title: 'Choose Photo from Custom Option' },
    ],
    storageOptions: {
      skipBackup: true,
      path: 'images',
      avatarSource : ''
    },
  };
  

class FirstComponent extends Component {
    constructor(props){
        super(props);
        this.state={
            name : 'rathish.kumar2@cognizant.com',
            password : 'rathi123',
            phone : '+918754499334',
            email : 'rathish.kumar2@cognizant.com',
            signUp : false,
            code : 0,
            otpVerified : false
        };
        console.log('constructor');
    }

    setName = text =>{
        this.setState({
            name : text
        });
    }

    setCode = text =>{
        this.setState({
            code : text
        });
    }

    uploadDoc = () => {

        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);
          
            if (response.didCancel) {
              console.log('User cancelled image picker');
            } else if (response.error) {
              console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
              console.log('User tapped custom button: ', response.customButton);
            } else {
              const source = { uri: response.uri };
              const base64source = { uri: 'data:image/jpeg;base64,' + response.data };
              console.log("base64source",base64source);
              this.setState({
                avatarSource : source
              });

            /*  ImgToBase64.getBase64String(source)
                        .then(base64String => console.log("image uri base 64",base64String))
                        .catch(err => console.log(err));*/

          
              //  You can also display the image using data:
              //  const source = { uri: 'data:image/jpeg;base64,' + response.data };
          alert("Url Selected");
            /*  this.setState({
               filePath: response,
               fileData: response.data,
               fileUri: response.uri
              });*/
            }
          });

    }

    launchCamera = () => {
        let options = {
          storageOptions: {
            skipBackup: true,
            path: 'images',
          },
        };
        ImagePicker.launchCamera(options, (response) => {
          console.log('Response = ', response);
    
          if (response.didCancel) {
            console.log('User cancelled image picker');
          } else if (response.error) {
            console.log('ImagePicker Error: ', response.error);
          } else if (response.customButton) {
            console.log('User tapped custom button: ', response.customButton);
            alert(response.customButton);
          } else {
            const source = { uri: response.uri };
            console.log('response', JSON.stringify(response));
            this.setState({
              filePath: response,
              fileData: response.data,
              fileUri: response.uri
            });
          }
        });
    
      }
 
    render(){
        console.log(this.props);
        console.log("render method");
        return (
            <ScrollView style={styles.container}>
            <View style={styles.signInView1}>
                <Text style={styles.signIntext}>
                    {"Image upload"}
                </Text>
            </View>
            <View style={styles.signInView}>
                <Text style={styles.userIDText}>
                    {"Base 64 URL"}       
                </Text>
            </View>
            



            <GButtonComponent 
                buttonStyle={styles.buttonStyle} 
                textStyle={styles.buttonTextStyle}
                buttonText= {"Image Upload"}
                // onPress = {()=>this.props.navigation.navigate('first',{new:'one'})}
                // onPress = {this.updateState}
                // onPress={()=> this.props.homeActionMethod(ActionTypes.LOGIN_SUCESS)}
                onPress={this.uploadDoc}
            />  

<GButtonComponent 
                buttonStyle={styles.buttonStyle} 
                textStyle={styles.buttonTextStyle}
                buttonText= {"Open Camera"}
                // onPress = {()=>this.props.navigation.navigate('first',{new:'one'})}
                // onPress = {this.updateState}
                // onPress={()=> this.props.homeActionMethod(ActionTypes.LOGIN_SUCESS)}
                onPress={this.launchCamera}
/> 

<Image source={this.state.avatarSource} style={styles.uploadAvatar} />

            </ScrollView>
        
        );
    }
}

export default FirstComponent;
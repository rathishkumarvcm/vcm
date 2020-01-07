import React, { Component } from 'react';
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { GButtonComponent, GHeaderComponent, GFooterComponent,GIcon } from '../../CommonComponents';
import styles from '../ChangeSignInMethod/styles';
import gblStrings from '../../Constants/GlobalStrings';




//  eslint-disable-next-line react/prefer-stateless-function
class CSMPushNotificationComponent extends Component {
    constructor(props) {
        super(props);

        this.state ={
        };
        
       
      }

      onClickCancel = () => {
        this.props.navigation.navigate('ChangeSignInMethod');
      }

      

      onClickSave = () => {
        let payloadData = {};
        const date = new Date().getDate(); 
        const month = new Date().getMonth() + 1; 
        const year = new Date().getFullYear();
        const hours = new Date().getHours(); 
        const min = new Date().getMinutes(); 
        const sec = new Date().getSeconds(); 
        const updatedDate=`${date} / ${month} / ${year} ${hours} : ${min} : ${sec}`;
        payloadData = {
            selectedMethod:'PUSHNOTIFICATION',
            lastUpdatedTime:updatedDate
        };
        this.props.signInMethods("signInMethodsData", payloadData);
        //  console.log("----signInMethods",payloadData);
        this.props.navigation.navigate('ChangeSignInMethod',{showAlert:true,message:gblStrings.userManagement.pushNotification,index:2});
      
      }

    render() {
      return(
          <View style={styles.container}>
              <GHeaderComponent navigation={this.props.navigation} />
              <ScrollView style={styles.scrollViewFlex}>
              <TouchableOpacity>
                        <GIcon
                            name="left"
                            type="antdesign"
                            size={25}
                            color="#707070"
                        />

              </TouchableOpacity>
              <View style={styles.signInView}>
              <Text style={styles.signIntext}>
              {gblStrings.userManagement.changeSignInHeadingPushNotification}
              </Text>
              <Text style={styles.lblLine} />
              <View style={styles.widthView}>
              <Text style={styles.lblTxt}>
              {gblStrings.userManagement.downloadPushNotification}
              </Text>
              </View>
              <TouchableOpacity style={styles.touchableOpacityStyle}>
              <Text style={styles.txtUnderline}>Download Push Notification Application </Text>
              </TouchableOpacity>
              <GButtonComponent
                buttonStyle={styles.cancelButton}
                buttonText={gblStrings.common.back}
                textStyle={styles.cancelButtonText}
                onPress={this.onClickCancel}
              />
                <GButtonComponent
                buttonStyle={styles.cancelButton}
                buttonText={gblStrings.common.cancel}
                textStyle={styles.cancelButtonText}
                onPress={this.onClickCancel}
                />
                <GButtonComponent
                buttonStyle={styles.saveButton}
                buttonText={gblStrings.common.save}
                textStyle={styles.saveButtonText}
                onPress={this.onClickSave}
                />
              </View>
              <GFooterComponent />
              </ScrollView>
          </View>
      );
    }
  }
CSMPushNotificationComponent.propTypes = {
    navigation: PropTypes.instanceOf(Object),
    //  signInMethodsData : PropTypes.instanceOf(Object),
    signInMethods : PropTypes.func
};

CSMPushNotificationComponent.defaultProps = {
  navigation: {},
  //  signInMethodsData : {},
  signInMethods : ()=>{}
};
    export default CSMPushNotificationComponent;
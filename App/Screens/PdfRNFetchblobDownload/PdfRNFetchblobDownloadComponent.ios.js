import React, { Component } from 'react';
import { View,Text,StyleSheet, Share } from 'react-native';
import RNFetchBlob from 'rn-fetch-blob';
import PropTypes from 'prop-types';
import {GButtonComponent} from '../../CommonComponents';
import { scaledHeight } from '../../Utils/Resolution';
import AppUtils from '../../Utils/AppUtils';

const url = 'http://www.africau.edu/images/default/sample.pdf';



// const { fs: { dirs } } = RNFetchBlob;
// const PATH_TO_LIST = dirs.DocumentDir;
// const dest = `${PATH_TO_LIST}/big_buck_bunny_720p_10mb.pdf`;
// const tmpPath = `${dest}.download`;

const styles = StyleSheet.create({
    buttonStyle:{
        alignItems:'center',
        backgroundColor:"#06748C",
        borderRadius:scaledHeight(5),
        height:scaledHeight(40),
        justifyContent: "center",
        marginTop:scaledHeight(10),
        width:'90%' 
        
    },
    buttonTextStyle:{
        fontSize: scaledHeight(14),
        fontWeight: "bold",
        lineHeight:scaledHeight(20),
    },
    containerStyle:{
        flex:1,
        flexDirection: 'column',
        marginLeft : '5%',
        marginRight : '5%',
        marginTop:'10%'
        // alignItems:'center'
    },
    labeltext:{
        color:'green',
        fontSize:20,
        height:30,
        marginBottom:'2%'
    },
});

class PdfRNFetchblobDownload extends Component {
    constructor(props){
        super(props);
        this.state = {
        };
    }

    shareOptions = async (path) => {
      try {
          const result = await Share.share({
              url:path,
              type:"application/pdf"
          });
    
          if (result.action === Share.sharedAction) {
              if (result.activityType) {
                  //  shared with activity type of result.activityType
              } else {
                  //  shared
              }
          } else if (result.action === Share.dismissedAction) {
              //  dismissed
          }
      } catch (error) {
        AppUtils.debugLog(error.message);
        // alert(error.message);
      }
    }




    
    goback = ()=>{
        const {navigation} = this.props;
        navigation.goBack();
    }


    onPressDownLoadPDF = () =>{
     /* if(Platform.OS === 'android') {
        this.downloadPDF();
      }else{
        this.downloadPDFIOS();
      }
      */

      this.downloadPDFIOS();
    }

  
    /*
    async downloadPDF () {
      const {navigation} = this.props;
      const setCache = navigation.getParam('cache');
      const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE);
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {   
          const { dirs } = RNFetchBlob.fs;
            RNFetchBlob.config({
                    fileCache: setCache,
                    addAndroidDownloads: {
                      useDownloadManager: true,
                      notification: true,
                      mediaScannable: true,
                      title: `test.pdf`,
                      path: `${dirs.DownloadDir}/test.pdf`,
                    }
            })       
            .fetch('GET', url, {
              // some headers ..
            })
            .then((res) => {
            
              AppUtils.debugLog('The file saved to ', JSON.stringify(res));
              
            })
            .catch((error) => { AppUtils.debugLog(error); });
          }
    }

    */

    async downloadPDFIOS () {
      const {navigation} = this.props;
      const setCache = navigation.getParam('cache');
      RNFetchBlob.config({
        fileCache: setCache,
        appendExt : 'pdf'
      })
      .fetch('GET', url, {
      // some headers ..
      })
      .then((res) => {
        AppUtils.debugLog('The file saved to ', JSON.stringify(res));
        this.shareOptions(res.path());
      }).error((error) => {
        AppUtils.debugLog("Error",error);
      });
  }


    

    render(){
        return (
            <View style={styles.containerStyle}>
                <Text style={styles.labeltext}>RN FETCH BLOB DOWNLOAD:</Text>

                <GButtonComponent 
                    buttonStyle={styles.buttonStyle} 
                    textStyle={styles.buttonTextStyle}
                    buttonText= "Download PDF"
                    onPress={this.onPressDownLoadPDF}
                />

                 <GButtonComponent 
                    buttonStyle={styles.buttonStyle} 
                    textStyle={styles.buttonTextStyle}
                    buttonText= "Back"
                    onPress={this.goback}
                 />

            </View>
            );

           
    }
}



PdfRNFetchblobDownload.propTypes = {
    navigation : PropTypes.instanceOf(Object)
  };
  
  PdfRNFetchblobDownload.defaultProps = {
    navigation : {}
  };


export default PdfRNFetchblobDownload;
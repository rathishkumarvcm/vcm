import React, { Component } from 'react';
import { View,Text,StyleSheet,Platform, Share } from 'react-native';
import { scaledHeight } from '../../Utils/Resolution';
import {GButtonComponent} from '../../CommonComponents';
import RNFetchBlob from 'rn-fetch-blob';
import {PermissionsAndroid} from 'react-native';
import PropTypes from 'prop-types';

const url = 'http:// www.africau.edu/Images/default/sample.pdf';



const { fs: { dirs } } = RNFetchBlob;
// const PATH_TO_LIST = dirs.DocumentDir;
// const dest = `${PATH_TO_LIST}/big_buck_bunny_720p_10mb.pdf`;
// const tmpPath = `${dest}.download`;

const styles = StyleSheet.create({
    containerStyle:{
        flex:1,
        flexDirection: 'column',
        marginLeft : '5%',
        marginRight : '5%',
        marginTop:'10%'
        // alignItems:'center'
    },
    labeltext:{
        fontSize:20,
        marginBottom:'2%',
        height:30,
        color:'green'
    },
    button:{
        fontSize:scaledHeight(5)
    },
    buttonStyle:{
        height:scaledHeight(40),
        width:'90%',
        justifyContent: "center",
        alignItems:'center',
        borderRadius:scaledHeight(5),
        backgroundColor:"#06748C",
        marginTop:scaledHeight(10) 
        
    },
    buttonTextStyle:{
        fontSize: scaledHeight(14),
        fontWeight: "bold",
        lineHeight:scaledHeight(20),
    },
});

class PdfRNFetchblobDownload extends Component {
    constructor(props){
        super(props);
        this.state = {
            isModalVisible:false
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
          alert(error.message);
      }
    }




    async downloadPDFIOS () {
      const setCache = this.props.navigation.getParam('cache');
      RNFetchBlob.config({
        fileCache: setCache,
        appendExt : 'pdf'
      })
      .fetch('GET', url, {
      // some headers ..
      })
      .then((res) => {
        console.log('The file saved to ', JSON.stringify(res));
        this.shareOptions(res.path());
      }).error((error) => {
       console.log("Error",error);
      });
  }

    async downloadPDF () {
      const setCache = this.props.navigation.getParam('cache');
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
            
              console.log('The file saved to ', JSON.stringify(res));
              
            })
            .catch((error) => { console.log(error); });
          }
    }
    
    goback = ()=>this.props.navigation.goBack();

    render(){
        return (
            <View style={styles.containerStyle}>
                <Text style={styles.labeltext}>{"RN FETCH BLOB DOWNLOAD:"}</Text>

                <GButtonComponent 
                    buttonStyle={styles.buttonStyle} 
                    textStyle={styles.buttonTextStyle}
                    buttonText= {"Download PDF"}
                    onPress={()=>Platform.OS === 'android' ? this.downloadPDF() : this.downloadPDFIOS()}
                />

                 <GButtonComponent 
                    buttonStyle={styles.buttonStyle} 
                    textStyle={styles.buttonTextStyle}
                    buttonText= {"Back"}
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
 
  };


export default PdfRNFetchblobDownload;
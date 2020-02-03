import React, { Component } from 'react';
 
import {
  View,
  StyleSheet
} from 'react-native';

import {GButtonComponent} from '../../CommonComponents';
import { WebView } from 'react-native-webview';
import { scaledHeight } from '../../Utils/Resolution';
import RNHTMLtoPDF from 'react-native-html-to-pdf';

const styles=StyleSheet.create({
    buttonStyle:{
        height:'5%',
        width:'50%',
        justifyContent: "center",
        alignItems:'center',
        borderRadius:1,
        backgroundColor:"#06748C",
        marginTop:'10%'
    },
    buttonTextStyle:{
      fontSize: scaledHeight(14),
      fontWeight: "bold",
      lineHeight:scaledHeight(20),
      color:'red'
    }
});
export default class PdfComponent extends Component {
    constructor(props){
        super(props);
        this.state={
            pdfCreated: false
        };
    }

  async createPDF(){
    let options = {
      html: '<h1>PDF TEST</h1>',
      fileName: 'test',
      directory: 'Documents',
    };
 
    let file = await RNHTMLtoPDF.convert(options);
    this.setState({
        filePath: file.filePath,
        pdfCreated : true
    });
    console.log(JSON.stringify(file));
    alert("file created successful");
  }
 
  pdfCall = () =>this.createPDF();
  
  render() {
    return(
        !this.state.pdfCreated ? 
      <View style={{flex:1,alignItems:'center'}}>
            <GButtonComponent 
            buttonText={"Create PDF"} 
            onPress={this.pdfCall} 
            buttonStyle={styles.buttonStyle}
            textStyle={styles.buttonTextStyle}
            />
           {/* <GButtonComponent buttonText={"View PDF"} buttonStyle={styles.buttonStyle}/> */}
      </View> :
      <WebView
      source={{ uri: this.state.filePath }}
      /> 
    );
  }
}
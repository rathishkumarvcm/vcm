import React, { Component } from 'react';
 
import {
  View,
  StyleSheet
} from 'react-native';

import { WebView } from 'react-native-webview';
import RNHTMLtoPDF from 'react-native-html-to-pdf';
import {GButtonComponent} from '../../CommonComponents';
import { scaledHeight } from '../../Utils/Resolution';

const styles=StyleSheet.create({
    buttonStyle:{
        alignItems:'center',
        backgroundColor:"#06748C",
        borderRadius:1,
        height:'5%',
        justifyContent: "center",
        marginTop:'10%',
        width:'50%'
    },
    buttonTextStyle:{
      color:'red',
      fontSize: scaledHeight(14),
      fontWeight: "bold",
      lineHeight:scaledHeight(20)
    },
    pdfLayout:{
      alignItems:'center',
      flex:1
    }
});
export default class PdfComponent extends Component {
    constructor(props){
        super(props);
        this.state={
            pdfCreated: false
        };
    }
 
  pdfCall = () =>this.createPDF();

  async createPDF(){
    const options = {
      html: '<h1>PDF TEST</h1>',
      fileName: 'test',
      directory: 'Documents',
    };
 
    const file = await RNHTMLtoPDF.convert(options);
    this.setState({
        filePath: file.filePath,
        pdfCreated : true
    });
  }
  
  render() {
    
    const {pdfCreated} = this.state;
    return(
        !pdfCreated ? (
      <View style={styles.pdfLayout}>
            <GButtonComponent 
            buttonText="Create PDF" 
            onPress={this.pdfCall} 
            buttonStyle={styles.buttonStyle}
            textStyle={styles.buttonTextStyle}
            />
           {/* <GButtonComponent buttonText={"View PDF"} buttonStyle={styles.buttonStyle}/> */}
      </View>
    ) : (
      <WebView
      source={{ uri: this.state.filePath }}
      />
    ) 
    );
  }
}
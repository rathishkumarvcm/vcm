import React, { Component } from 'react';
import { View,Text,StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { scaledHeight } from '../../Utils/Resolution';
import {GButtonComponent} from '../../CommonComponents';

// const url = 'http:// www.africau.edu/Images/default/sample.pdf';

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

class PdfFeaturesComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
        };
    }

    

    componentDidMount() {
        
        // Linking.openURL(url);
    }

    goBack = ()=>{
    const {navigation} = this.props;
    navigation.goBack();
    }

    webView = ()=>{
        const {navigation} = this.props;
        navigation.navigate('webView');
    }

    pdfLinking = ()=>{
        const {navigation} = this.props;
        navigation.navigate('pdfLinking');
    }
    
    

    nativePdf = ()=>{
        const {navigation} = this.props;
        navigation.navigate('nativePdf');
    }    

    pdfFetchBob = ()=>{
        const {navigation} = this.props;
        navigation.navigate('PdfRNFetchblob');
    }
    
    render(){
        return (
            <View style={styles.containerStyle}>
                <Text style={styles.labeltext}>PDF Features:</Text>
                <GButtonComponent 
                // disabled
                buttonStyle={styles.buttonStyle} 
                textStyle={styles.buttonTextStyle}
                buttonText= "Web View"
                onPress={this.webView}
                />
                <GButtonComponent 
                buttonStyle={styles.buttonStyle} 
                textStyle={styles.buttonTextStyle}
                buttonText= "Linking"
                onPress={this.pdfLinking}
                />
                <GButtonComponent 
                buttonStyle={styles.buttonStyle} 
                textStyle={styles.buttonTextStyle}
                buttonText= "React-Native-PDF"
                onPress={this.nativePdf}
                />

                <GButtonComponent 
                    buttonStyle={styles.buttonStyle} 
                    textStyle={styles.buttonTextStyle}
                    buttonText= "RN-Fetch-Blob"
                    onPress={this.pdfFetchBob}
                />

                 <GButtonComponent 
                    buttonStyle={styles.buttonStyle} 
                    textStyle={styles.buttonTextStyle}
                    buttonText= "Back"
                    onPress={this.goBack}
                 />

            </View>
            );
    }
}


PdfFeaturesComponent.propTypes = {
    navigation : PropTypes.instanceOf(Object)
  };
  
  PdfFeaturesComponent.defaultProps = {
    navigation : {}
 
  };


export default PdfFeaturesComponent;
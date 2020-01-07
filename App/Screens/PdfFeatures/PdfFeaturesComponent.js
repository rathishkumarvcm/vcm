import React, { Component } from 'react';
import { View,Text,StyleSheet } from 'react-native';
import { scaledHeight } from '../../Utils/Resolution';
import {GButtonComponent} from '../../CommonComponents';
import PropTypes from 'prop-types';

// const url = 'http:// www.africau.edu/Images/default/sample.pdf';

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

class PdfFeaturesComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            isModalVisible:false
        };
    }

    

    componentDidMount() {
        
        // Linking.openURL(url);
    }

    goBack = ()=>this.props.navigation.goBack();

    webView = ()=>this.props.navigation.navigate('webView');

    pdfLinking = ()=>this.props.navigation.navigate('pdfLinking');

    nativePdf = ()=>this.props.navigation.navigate('nativePdf');

    pdfFetchBob = ()=>this.props.navigation.navigate('PdfRNFetchblob');
    
    render(){
        return (
            <View style={styles.containerStyle}>
                <Text style={styles.labeltext}>{"PDF Features:"}</Text>
                <GButtonComponent 
                // disabled
                buttonStyle={styles.buttonStyle} 
                textStyle={styles.buttonTextStyle}
                buttonText= {"Web View"}
                onPress={this.webView}
                />
                <GButtonComponent 
                buttonStyle={styles.buttonStyle} 
                textStyle={styles.buttonTextStyle}
                buttonText= {"Linking"}
                onPress={this.pdfLinking}
                />
                <GButtonComponent 
                buttonStyle={styles.buttonStyle} 
                textStyle={styles.buttonTextStyle}
                buttonText= {"React-Native-PDF"}
                onPress={this.nativePdf}
                />

                <GButtonComponent 
                    buttonStyle={styles.buttonStyle} 
                    textStyle={styles.buttonTextStyle}
                    buttonText= {"RN-Fetch-Blob"}
                    onPress={this.pdfFetchBob}
                />

                 <GButtonComponent 
                    buttonStyle={styles.buttonStyle} 
                    textStyle={styles.buttonTextStyle}
                    buttonText= {"Back"}
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
 
  };


export default PdfFeaturesComponent;
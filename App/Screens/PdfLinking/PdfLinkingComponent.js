import React, { Component } from 'react';
import { Linking,TouchableOpacity,Text, StyleSheet,View } from 'react-native';
// import { WebView } from 'react-native-webview';
import PropTypes from 'prop-types';
import {GButtonComponent} from '../../CommonComponents';
import { scaledHeight } from '../../Utils/Resolution';

const url = 'http:// www.africau.edu/Images/default/sample.pdf';


const styles = StyleSheet.create({
    buttonStyle:{
        alignItems:'center',
        backgroundColor:"#06748C",
        borderRadius:scaledHeight(5),
        height:scaledHeight(40),
        justifyContent: "center",
        marginTop:scaledHeight(10),
        width:'40%' 
        
    },
    buttonTextStyle:{
        fontSize: scaledHeight(14),
        fontWeight: "bold",
        lineHeight:scaledHeight(20),
    },
    containerStyle:{
        flex:1,
        flexDirection: 'column',
        alignItems:'center',
        marginLeft : '5%',
        marginRight : '5%',
        marginTop:'10%'
        // alignItems:'center'
    },
    outerView:{
        alignItems:'center',
        backgroundColor:'green',
        borderRadius:scaledHeight(5),
        borderWidth:1,
        height:scaledHeight(30),
        justifyContent:'center',
        marginTop:scaledHeight(100),
        width:'50%'
    }
});

class PdfLinkingComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
        };
    }

    componentDidMount() {
        
        // Linking.openURL(url);
    }

    goback = ()=>{
        const {navigation} = this.props;
        navigation.goBack();
    }

    openUrl = () => {
        Linking.openURL(url);
    }
    

    render(){
        
        return (
        
            <View style={styles.containerStyle}>
                <TouchableOpacity style={styles.outerView} onPress={this.openUrl()}>
                <Text>
                    Link
                </Text>
                </TouchableOpacity>

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



PdfLinkingComponent.propTypes = {
    navigation : PropTypes.instanceOf(Object)
  };
  
  PdfLinkingComponent.defaultProps = {
    navigation : {}
  };


export default PdfLinkingComponent;
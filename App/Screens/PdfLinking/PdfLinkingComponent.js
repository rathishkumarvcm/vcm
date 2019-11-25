import React, { Component } from 'react';
import { Linking,TouchableOpacity,Text, StyleSheet,View } from 'react-native';
//import { WebView } from 'react-native-webview';
import {GButtonComponent} from '../../CommonComponents';
import { scaledHeight } from '../../Utils/Resolution';
import PropTypes from 'prop-types';

const url = 'http://www.africau.edu/Images/default/sample.pdf';


const styles = StyleSheet.create({
    containerStyle:{
        flex:1,
        flexDirection: 'column',
        alignItems:'center',
        marginLeft : '5%',
        marginRight : '5%',
        marginTop:'10%'
        //alignItems:'center'
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
        width:'40%',
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
    outerView:{
        marginTop:scaledHeight(100),
        borderRadius:scaledHeight(5),
        alignItems:'center',
        justifyContent:'center',
        width:'50%',
        height:scaledHeight(30),
        borderWidth:1,
        backgroundColor:'green'
    }
});

class PdfLinkingComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            isModalVisible:false
        };
    }

    componentDidMount() {
        
        //Linking.openURL(url);
    }

    goback = ()=>this.props.navigation.goBack();
    

    render(){
        
        return (
        
            <View style={styles.containerStyle}>
                <TouchableOpacity style={styles.outerView} onPress={()=>{Linking.openURL(url);}}>
                <Text>
                    {"Link"}
                </Text>
                </TouchableOpacity>

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



PdfLinkingComponent.propTypes = {
    navigation : PropTypes.instanceOf(Object)
  };
  
  PdfLinkingComponent.defaultProps = {
 
  };


export default PdfLinkingComponent;
import React, { Component } from 'react';
import {StyleSheet,Dimensions } from 'react-native';
// import { WebView } from 'react-native-webview';
import { scaledHeight } from '../../Utils/Resolution';
import {GWebViewComponent,GButtonComponent} from '../../CommonComponents';
import PropTypes from "prop-types";

const url = 'http:// www.africau.edu/Images/default/sample.pdf';

class WebviewComponent extends Component {
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


    render(){
        const runFirst = ``;
        return (
            

            
            <>

<GButtonComponent 
                buttonStyle={styles.buttonStyle} 
                textStyle={styles.buttonTextStyle}
                buttonText= {"Back"}
                onPress={this.goBack}
/>
            <GWebViewComponent
                source={{ uri: url }}
                injectedJavaScript={runFirst}
                // onMessage={this.onMessage}
            /> 

            
            </>

            
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 25,
    },
    pdf: {
        flex:0.9,
        width:Dimensions.get('window').width,
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
        alignSelf:'center',
        borderRadius:scaledHeight(5),
        backgroundColor:"#06748C",
        marginTop:scaledHeight(10) 
        
    },
    buttonTextStyle:{
        fontSize: scaledHeight(14),
        fontWeight: "bold",
        lineHeight:scaledHeight(20),
    }
});


WebviewComponent.propTypes = {
    uri : PropTypes.string,
    source : PropTypes.instanceOf(Object).isRequired,
    navigation : PropTypes.instanceOf(Object)
};

WebviewComponent.defaultProps = {
   uri : ''
};



export default WebviewComponent;
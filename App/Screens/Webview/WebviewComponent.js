import React, { Component } from 'react';
import {StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { scaledHeight } from '../../Utils/Resolution';
import {GWebViewComponent,GButtonComponent} from '../../CommonComponents';

const url = 'http:// www.africau.edu/Images/default/sample.pdf';



const styles = StyleSheet.create({
    buttonStyle:{
        alignItems:'center',
        alignSelf:'center',
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
    }
});

class WebviewComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
        };
    }

    componentDidMount() {
        
        // Linking.openURL(url);
    }

    goBack = ()=> {
        const { navigation } = this.props; 
        navigation.goBack();
    }


    render(){
        const runFirst = ``;
        return (
            

            
            <>

<GButtonComponent 
                buttonStyle={styles.buttonStyle} 
                textStyle={styles.buttonTextStyle}
                buttonText= "Back"
                onPress={this.goBack}
/>
            <GWebViewComponent
                source={{uri:url}}
                injectedJavaScript={runFirst}
                // onMessage={this.onMessage}
            /> 
            </>

            
        );
    }
}




WebviewComponent.propTypes = {
    navigation: PropTypes.instanceOf(Object)
};

WebviewComponent.defaultProps = {
    navigation : {}
};



export default WebviewComponent;
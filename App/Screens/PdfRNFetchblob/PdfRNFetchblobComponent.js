import React, { Component } from 'react';
import { View,Text,StyleSheet } from 'react-native';
import { scaledHeight } from '../../Utils/Resolution';
import {GButtonComponent} from '../../CommonComponents';
import PropTypes from 'prop-types';

//const url = 'http://www.africau.edu/Images/default/sample.pdf';

const styles = StyleSheet.create({
    containerStyle:{
        flex:1,
        flexDirection: 'column',
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

class PdfRNFetchblob extends Component {
    constructor(props){
        super(props);
        this.state = {
            isModalVisible:false
        };
    }

    

    componentDidMount() {
        
        //Linking.openURL(url);
    }

    pdfCache = ()=>this.props.navigation.navigate('PdfRNFetchblobDownload',{ cache: true });

    pdfWithoutCache = ()=>this.props.navigation.navigate('PdfRNFetchblobDownload',{ cache: false });

    goBack = ()=>this.props.navigation.goBack();

    render(){
        return (
            <View style={styles.containerStyle}>
                <Text style={styles.labeltext}>{"RN FETCH BLOB Features:"}</Text>

                <GButtonComponent 
                    buttonStyle={styles.buttonStyle} 
                    textStyle={styles.buttonTextStyle}
                    buttonText= {"Download PDF with Cache"}
                    onPress={this.pdfCache}
                />

                <GButtonComponent 
                    buttonStyle={styles.buttonStyle} 
                    textStyle={styles.buttonTextStyle}
                    buttonText= {"Download PDF without Cache"}
                    onPress={this.pdfWithoutCache}
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



PdfRNFetchblob.propTypes = {
    navigation : PropTypes.instanceOf(Object)
  };
  
  PdfRNFetchblob.defaultProps = {
 
  };


export default PdfRNFetchblob;
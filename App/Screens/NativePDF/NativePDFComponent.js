import React from 'react';
import { StyleSheet, Dimensions, View } from 'react-native';
import PropTypes from 'prop-types';
import Pdf from 'react-native-pdf';
import { scaledHeight } from '../../Utils/Resolution';
import {GButtonComponent} from '../../CommonComponents';


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
    container: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'flex-start',
        marginTop: 25,
    },
    pdf: {
        flex:0.9,
        width:Dimensions.get('window').width,
    }
});

 
export default class PDFExample extends React.Component {

    goBack = ()=>{
        const {navigation} = this.props;
        navigation.goBack();
    }

    render() {
        const source = {uri:'http:// samples.leanpub.com/thereactnativebook-sample.pdf',cache:true};
        // const source = require('./test.pdf');  //  ios only
        // const source = {uri:'bundle-assets:// test.pdf'};
 
        // const source = {uri:'file:// /sdcard/test.pdf'};
        // const source = {uri:"data:application/pdf;base64,..."};
 
        return (
            <View style={styles.container}>
                 <GButtonComponent 
                buttonStyle={styles.buttonStyle} 
                textStyle={styles.buttonTextStyle}
                buttonText= "Back"
                onPress={this.goBack}
                 />
                <Pdf
                    source={source}
                    onLoadComplete={(numberOfPages)=>{
                        console.log(`number of pages: ${numberOfPages}`);
                    }}
                    onPageChanged={(page)=>{
                        console.log(`current page: ${page}`);
                    }}
                    onError={(error)=>{
                        console.log(error);
                    }}
                    style={styles.pdf}
                />
            </View>
        );
  }
}



PDFExample.propTypes = {
    navigation : PropTypes.instanceOf(Object)
  };
  
  PDFExample.defaultProps = {
    navigation : {}
 
  };

 

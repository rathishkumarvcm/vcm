import React from "react";
import { View, StyleSheet, Modal, Text } from 'react-native';
import PropTypes from "prop-types";
import { scaledHeight,scaledWidth } from '../Utils/Resolution';
import { GButtonComponent } from './GButtonComponent';

const styles = StyleSheet.create({
    buttonGoActionStyle: {            
        alignContent: 'center',      
        alignItems: 'center', 
        backgroundColor: '#5D83AE',        
        height: scaledHeight(50),   
        justifyContent: 'center',         
        marginLeft:'2%',   
        marginRight:'2%',    
        marginTop: scaledHeight(20),
        width: scaledWidth(140),           
    },   
    buttonGoTextStyle: {
        color: '#FFFFFF',  
        fontSize: scaledHeight(16),          
        textAlign: 'center',  
        width: '100%',      
    }, 
    modalActionContainer:{
        flexDirection:'row',
        marginBottom:scaledHeight(10),
        marginTop:scaledHeight(10)      
    },  
    modalBackgroundView: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        height: '100%',
    },    
    modalContainer: {
        backgroundColor: '#FFFFFF',             
        paddingBottom: scaledHeight(15), 
        paddingLeft: '4%',       
        paddingRight: '4%',              
        paddingTop: scaledHeight(15),
    },    
    modalContentText: {
        color: '#56565A',
        fontSize: scaledHeight(14),  
        marginBottom:scaledHeight(10),   
        marginTop:scaledHeight(10),        
    },   
    titleText: {
        color: '#000000',
        fontSize: scaledHeight(24), 
        marginBottom:scaledHeight(10),      
        marginTop:scaledHeight(10)        
    },   
});
const GModalComponent = props => (      
    <Modal
        transparent
        visible={props.modalVisible}
        onRequestClose={!props.modalVisible}
    >
        <View style={styles.modalBackgroundView}>                           
            <View style={[styles.modalContainer, props.modalContainerStyle]}>
                <Text style={styles.titleText}>
                    {props.titleContent}
                </Text>
                <Text style={styles.modalContentText}>
                    {props.descContent1}
                </Text>
                {
                    (props.descContent2!=="")?
                    <Text style={styles.modalContentText}>
                        {props.descContent2}
                    </Text>
                    :null
                }            
                <View style={styles.modalActionContainer}>
                    <GButtonComponent
                        buttonStyle={[styles.buttonGoActionStyle, props.buttonGoActionStyle]}
                        buttonText={props.buttonGoText}
                        textStyle={[styles.buttonGoTextStyle, props.buttonGoTextStyle]}      
                        onPress={props.buttonGoOnPress}                        
                    />
                    <GButtonComponent
                        buttonStyle={[styles.buttonGoActionStyle, props.buttonCancelActionStyle]}
                        buttonText={props.buttonCancelText}
                        textStyle={[styles.buttonGoTextStyle, props.buttonCancelTextStyle]}    
                        onPress={props.buttonGoCancelPress}                  
                    />
                </View>
            </View>
        </View>
    </Modal>
);

GModalComponent.propTypes = {
    modalVisible : PropTypes.bool.isRequired,   
    modalContainerStyle : PropTypes.instanceOf(Object),
    titleContent : PropTypes.string,
    descContent1 : PropTypes.string,
    descContent2 : PropTypes.string,           
    buttonGoActionStyle: PropTypes.instanceOf(Object),
    buttonCancelActionStyle: PropTypes.instanceOf(Object),
    buttonGoText : PropTypes.string, 
    buttonCancelText : PropTypes.string,   
    buttonGoTextStyle: PropTypes.instanceOf(Object),
    buttonCancelTextStyle: PropTypes.instanceOf(Object),
    buttonGoOnPress : PropTypes.func,
    buttonGoCancelPress : PropTypes.func,     
};

GModalComponent.defaultProps = {   
    titleContent:"",
    descContent1:"",
    descContent2:"",
    buttonGoActionStyle: {},
    buttonCancelActionStyle: {},
    buttonGoText:"",
    buttonCancelText:"",
    buttonGoTextStyle:{},
    buttonCancelTextStyle:{},  
    modalContainerStyle:{},
    buttonGoOnPress :() => null,
    buttonGoCancelPress:()=>null
};

export default GModalComponent;

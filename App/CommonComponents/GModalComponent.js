import React from "react";
import { View, StyleSheet, Modal, Text } from 'react-native';
import { scaledHeight,scaledWidth } from '../Utils/Resolution';
import { GButtonComponent } from './GButtonComponent';
import PropTypes from "prop-types";


const styles = StyleSheet.create({
    modalBackgroundView: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        height: '100%',
    },
    modalContainer: {
        backgroundColor: '#FFFFFF',
        marginLeft: '4%',
        marginRight: '4%',
        paddingRight: '4%',
        paddingLeft: '4%',
        paddingTop: scaledHeight(15),
        paddingBottom: scaledHeight(15),
        marginTop:scaledHeight(120),
    },
    titleText: {
        color: '#000000',
        fontSize: scaledHeight(26),        
        marginLeft: '4%',
        marginRight: '4%',
        marginTop:scaledHeight(10),
        marginBottom:scaledHeight(10),
    },
    modalContentText: {
        color: '#56565A',
        fontSize: scaledHeight(13),      
        marginLeft: '4%',
        marginRight: '4%',
        marginTop:scaledHeight(10),
        marginBottom:scaledHeight(10),
    },
    modalActionContainer:{
        flexDirection:'row',
        marginTop:scaledHeight(10),
        marginBottom:scaledHeight(10)
    },   
    buttonGoActionStyle: {        
        width: scaledWidth(140),      
        height: scaledHeight(50),
        backgroundColor: '#5D83AE',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        marginTop: scaledHeight(20),
        marginLeft:'2%',   
        marginRight:'2%',       
    },   
    buttonGoTextStyle: {
        fontSize: scaledHeight(16),
        color: '#FFFFFF',      
        width: '100%',
        textAlign: 'center',
        textTransform:'uppercase'
    },
});

const GModalComponent = props => (
    <Modal
        transparent
        visible={props.modalVisible}
        onRequestClose={!props.modalVisible}
    >
        <View style={styles.modalBackgroundView}>                           
            <View style={styles.modalContainer}>
                <Text style={styles.titleText}>
                    {props.titleContent}
                </Text>
                <Text style={styles.modalContentText}>
                    {props.descContent1}
                </Text>
                <Text style={styles.modalContentText}>
                    {props.descContent2}
                </Text>

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
    buttonGoCancelPress : PropTypes.func   
};

GModalComponent.defaultProps = {
    buttonGoActionStyle: {},
    buttonCancelActionStyle: {},
    buttonGoText:"",
    buttonCancelText:"",
    buttonGoTextStyle:{},
    buttonCancelTextStyle:{},  
};

export default GModalComponent;

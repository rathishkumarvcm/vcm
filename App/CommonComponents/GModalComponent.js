import React from "react";
import { View, Modal, Text } from 'react-native';
import PropTypes from "prop-types";
import { GButtonComponent } from './GButtonComponent';
import GModalComponentStyle from './GModalComponentStyle';


const GModalComponent = props => {
    const {modalVisible,titleContent,descContent1,descContent2,buttonGoText,buttonGoOnPress,buttonCancelText,buttonGoCancelPress} = props;
    const styles = GModalComponentStyle(props);

return(      
    <Modal
        transparent
        visible={modalVisible}
        onRequestClose={!modalVisible}
    >
        <View style={styles.modalBackgroundView}>                           
            <View style={styles.modalContainer}>
                <Text style={styles.titleText}>
                    {titleContent}
                </Text>
                <Text style={styles.modalContentText}>
                    {descContent1}
                </Text>
                {
                    (descContent2!=="")? (
                    <Text style={styles.modalContentText}>
                        {descContent2}
                    </Text>
                  )
                    :null
                }            
                <View style={styles.modalActionContainer}>
                    <GButtonComponent
                        buttonStyle={styles.buttonGoActionStyle}
                        buttonText={buttonGoText}
                        textStyle={styles.buttonGoTextStyle}      
                        onPress={buttonGoOnPress}                        
                    />
                    <GButtonComponent
                        buttonStyle={styles.buttonCancelActionStyle}
                        buttonText={buttonCancelText}
                        textStyle={styles.buttonCancelTextStyle}    
                        onPress={buttonGoCancelPress}                  
                    />
                </View>
            </View>
        </View>
    </Modal>
);
};

GModalComponent.propTypes = {
    modalVisible : PropTypes.bool.isRequired,   
    titleContent : PropTypes.string,
    descContent1 : PropTypes.string,
    descContent2 : PropTypes.string,           
    buttonGoText : PropTypes.string, 
    buttonCancelText : PropTypes.string,   
    buttonGoOnPress : PropTypes.func,
    buttonGoCancelPress : PropTypes.func,     
};

GModalComponent.defaultProps = {   
    titleContent:"",
    descContent1:"",
    descContent2:"",
    buttonGoText:"",
    buttonCancelText:"",
    buttonGoOnPress :() => null,
    buttonGoCancelPress:()=>null
};

export default GModalComponent;

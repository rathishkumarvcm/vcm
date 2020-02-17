import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import { GTitleBarComponent, GButtonComponent } from '../../CommonComponents';

const sessionTimeOut = require("../../Images/confirm.png");

class ConfirmChangesComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
    }

    navigationGoBack = () => {
        const { navigation } = this.props;
        navigation.goBack();
    }

  setSecurePIN = () => {
    this.setState({
    });
  }

    render() {
        // const { navigation } = this.props;        
        return (
            <View style={styles.container}>
              
                <GTitleBarComponent
                    toolbarTiltle="Confirm"
                    backPress={this.navigationGoBack}
                />

                <View style={styles.layoutContainer}>
                    <View style={styles.cornerTriangle} />

                    <View style={styles.roundSection}>
                    <View style={styles.outerCircle}>
                        
                        <Image 
                                resizeMode="contain"
                                source={sessionTimeOut}
                        />

                       

                    </View>

                    <Text style={styles.saveText}>
                    You made the changes on this page, Do you want to save?
                    </Text>
                    </View>

                    <GButtonComponent 
                        buttonStyle={styles.saveButton}
                        textStyle={styles.saveButtontext}
                        buttonText="Save"
                    />

                    <Text style={styles.cancelButton}>
                        Cancel
                    </Text>
                    
                    
                </View>

                {/* <View style={styles.bottomView}>

                    <TouchableOpacity onPress={this.navigationResetOpt} style={styles.touchableStyle}>
                        <Text style={styles.submitButtonStyle} onPress={this.navigationResetOpt}>
                            {globalString.common.next}
                        </Text>
                    </TouchableOpacity>

        </View> */}
            </View>
        );
    }
}

ConfirmChangesComponent.propTypes = {
    navigation: PropTypes.instanceOf(Object)
};

ConfirmChangesComponent.defaultProps = {
    navigation: {}
};

export default ConfirmChangesComponent;
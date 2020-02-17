import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import { GTitleBarComponent, GButtonComponent } from '../../CommonComponents';

const sessionTimeOut = require("../../Images/phoneCall.png");

class ContactUsComponent extends Component {
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
                    toolbarTiltle="Contact Us"
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

                    <Text style={styles.inactivityDays}>
                    Your online account has been locked for 90 days of inactivity.
                    </Text>

                    <Text sstyle={styles.inactivityDays}>
                    Please contact Victory Capital Management service Reresentative at
                    </Text>

                    <Text style={styles.callNumber}>
                    +1 (000) 000-0000
                    </Text>


                    </View>

                    <GButtonComponent 
                        buttonStyle={styles.callButton}
                        textStyle={styles.callButtontext}
                        buttonText="Call"
                    />

                    <Text style={styles.exitText}>
                        Exit
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

ContactUsComponent.propTypes = {
    navigation: PropTypes.instanceOf(Object)
};

ContactUsComponent.defaultProps = {
    navigation: {}
};

export default ContactUsComponent;
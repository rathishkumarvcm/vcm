import React, { Component } from 'react';
import { Text, View, ScrollView,  } from 'react-native';
import { GHeaderComponent, GFooterComponent,GSwitchComponent,GButtonComponent } from '../../CommonComponents';
import { styles } from '../QuickSignIn/styles';
import gblStrings from '../../Constants/GlobalStrings';
import PropTypes from "prop-types";

// eslint-disable-next-line react/prefer-stateless-function
class QuickSignInComponent extends Component {
    constructor(props) {
        super(props);

        this.state ={
            switchOff: false,
            switchOn: true,
        };
        
       
      }
      goBack = () => {
        
            
        this.props.navigation.goBack();
    }


      switchOnMethod = () => {
        /*let payloadData = {};
        payloadData = { 
            quickSignIn:true
        };
        this.props.signInMethods("signInMethodsData", payloadData);*/
        this.setState({
            switchOff: !this.state.switchOff,
            switchOn: !this.state.switchOn,
        });
    }

      render() {
        return(
            <View style={styles.container} >
                <GHeaderComponent navigation={this.props.navigation} />
                <ScrollView style={{ flex: 0.85 }}>
                <View style={styles.signInView} >
                <Text style={styles.signIntext}>
                {"Mobile Quick SignIn"}
                </Text>
                <Text style={styles.lblLine} />              
                </View>
                <View style={{padding:"4%",marginTop:"5%",marginLeft:"5%",width:"90%",backgroundColor:"white",borderWidth:0.5,borderRadius:10,borderColor:"#61285F45"}}>
                <Text style={styles.lblTxt}>You have to enable QuickSignIn method in your VCM App </Text>
                <Text style={styles.lblTxt}>To enable again use your VCM Mobile App </Text>
                <GSwitchComponent
                                        switchOffText={"Enable"}
                                        switchOnText={"Disable"}
                                        switchOff={this.state.switchOff}
                                        switchOn={this.state.switchOn}
                                        switchOnMethod={this.switchOnMethod}
                                        switchOffMethod={this.switchOnMethod}
                                        onStyle={styles.onButtonStyle}
                                        offStyle={styles.offButtonStyle}
                                        onStyleDisabled={styles.onButtonStyleDisable}
                                        offStyleDisabled={styles.offButtonStyleDisable}
                                        textOnStyle={styles.TextOnStyle}
                                        textOffStyle={this.state.switchOn ? styles.TextOffStyle : styles.TextOffStyleWithholdtax}
                                    />
                </View>
                <GButtonComponent
                                buttonStyle={styles.cancelButton}
                                buttonText={gblStrings.common.back}
                                textStyle={styles.cancelButtonText}
                                onPress={this.goBack}
                            />
                <GFooterComponent />
                </ScrollView>
            </View>

                )}
    }

    QuickSignInComponent.propTypes = {
        navigation: PropTypes.instanceOf(Object),
        
    };
    
    QuickSignInComponent.defaultProps = {
    
    };
        export default QuickSignInComponent;
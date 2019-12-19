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
        let payloadData = {};
        payloadData = { 
            quickSignIn:this.state.switchOn
        };
        this.props.signInMethods("signInMethodsData", payloadData);   
        console.log("payloadquicksignin",payloadData)
        this.props.navigation.goBack();
    }

    componentDidMount()
    {
        if(this.props && this.props.signInMethodsData )
        {
            console.log("quicksignincomponentDidMount",this.props.signInMethodsData.quickSignIn);
            this.setState({switchOn:this.props.signInMethodsData.quickSignIn,
            switchOff:!this.props.signInMethodsData.quickSignIn});
        }
    }
    componentDidUpdate(prevProps, prevState)
    {
        console.log("componentDidUpdate::::> "+this.props.signInMethodsData);
        if (this.props !== prevProps) {
            if(this.props && this.props.signInMethodsData )
        {
            console.log("quicksignincomponentDidUpdate",this.props.signInMethodsData.quickSignIn);
           this.setState({switchOn:this.props.signInMethodsData.quickSignIn,
            switchOff:!this.props.signInMethodsData.quickSignIn});
        }
        }
        
    }
   
    


      switchOnMethod = () => {
        this.setState({
            switchOff: !this.state.switchOff,
            switchOn: !this.state.switchOn,
        });
        
       
    }

      render() {
          console.log("switch" ,this.state.switchOn);
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
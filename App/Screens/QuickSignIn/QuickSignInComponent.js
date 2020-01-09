import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';
import PropTypes from "prop-types";
import { GHeaderComponent, GFooterComponent,GSwitchComponent,GButtonComponent } from '../../CommonComponents';
import styles from './styles';
import gblStrings from '../../Constants/GlobalStrings';


//  eslint-disable-next-line react/prefer-stateless-function
class QuickSignInComponent extends Component {
    constructor(props) {
        super(props);

        this.state ={
            switchOff: false,
            switchOn: true,
        };
        
       
      }

      
    componentDidMount()
    {
        this.getInitialValues();
    }

    componentDidUpdate(prevProps)
    {
        if (this.props !== prevProps) {
            this.getUpdatedValues();
        }
        
    }

    getInitialValues = () =>
    {
        const{signInMethodsData}=this.props;
        if(this.props && signInMethodsData )
        {
            // console.log("quicksignincomponentDidMount",this.props.signInMethodsData.quickSignIn);
            this.setState({switchOn:signInMethodsData.quickSignIn,
            switchOff:!signInMethodsData.quickSignIn});
        }
    }

    getUpdatedValues = () =>
    {
        // console.log("componentDidUpdate::::> "+this.props.signInMethodsData);
        const{signInMethodsData}=this.props;
            if(this.props && signInMethodsData )
        {
            // console.log("quicksignincomponentDidUpdate",this.props.signInMethodsData.quickSignIn);
           this.setState({switchOn:signInMethodsData.quickSignIn,
            switchOff:!signInMethodsData.quickSignIn});
        }
        
    }

    goBack = () => {   
        const{signInMethods,navigation}=this.props;
        const{switchOn}=this.state;
        let payloadData = {};
        payloadData = { 
            quickSignIn:switchOn
        };
        signInMethods("signInMethodsData", payloadData);   
        // console.log("payloadquicksignin",payloadData);
        navigation.goBack();
    }

   
      switchOnMethod = () => {
        const{switchOn,switchOff}=this.state;
        this.setState({
            switchOff: !switchOff,
            switchOn: !switchOn,
        });
        
       
    }

      render() {
          // console.log("switch" ,this.state.switchOn);
          const{navigation}=this.props;
          const{switchOn,switchOff}=this.state;
        return(
            <View style={styles.container}>
                <GHeaderComponent navigation={navigation} />
                <ScrollView style={styles.scrollView}>
                <View style={styles.signInView}>
                <Text style={styles.signIntext}>
                Mobile Quick SignIn
                </Text>
                <Text style={styles.lblLine} />              
                </View>
                <View style={styles.switchBoxView}>
                <Text style={styles.lblTxt}>You have to enable QuickSignIn method in your VCM App </Text>
                <Text style={styles.lblTxt}>To enable again use your VCM Mobile App </Text>
                <GSwitchComponent
                                        switchOffText={gblStrings.common.enable}
                                        switchOnText={gblStrings.common.disable}
                                        switchOff={switchOff}
                                        switchOn={switchOn}
                                        switchOnMethod={this.switchOnMethod}
                                        switchOffMethod={this.switchOnMethod}
                                        onStyle={styles.onButtonStyle}
                                        offStyle={styles.offButtonStyle}
                                        onStyleDisabled={styles.onButtonStyleDisable}
                                        offStyleDisabled={styles.offButtonStyleDisable}
                                        textOnStyle={styles.TextOnStyle}
                                        textOffStyle={switchOn ? styles.TextOffStyle : styles.TextOffStyleWithholdtax}
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

                );
            }
    }

    QuickSignInComponent.propTypes = {
        navigation: PropTypes.instanceOf(Object),
        signInMethodsData : PropTypes.instanceOf(Object),
        signInMethods : PropTypes.func
        
    };
    
    QuickSignInComponent.defaultProps = {
        navigation: {},
        signInMethodsData:{},
        signInMethods : ()=>{}
    };
        export default QuickSignInComponent;
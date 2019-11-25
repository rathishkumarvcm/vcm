import React, { Component } from 'react';
import {styles} from './styles';
import {View, ScrollView, Text, TouchableOpacity} from 'react-native';
import { GHeaderComponent, GIcon, GFooterComponent } from '../../CommonComponents';
import PropTypes from "prop-types";
import gblStrings from '../../Constants/GlobalStrings';
import { scaledHeight } from '../../Utils/Resolution';

class ProfilesAndPreferences extends Component {
    constructor(props){
        super(props);
        this.state = {
            isLoading:false,
            showWelcomeText:true
        };
    }

    componentDidMount(){}

    navigateSecurityPreference = ()=>this.props.navigation.navigate('securityPreference');

    navigateBack = () => this.props.navigation.goBack();
    
    removeWelcomeText = () => {
        this.setState({showWelcomeText:false});
    }

    render(){
        return(
            <View style={styles.container}>
                <GHeaderComponent navigation={this.props.navigation} />

                <ScrollView style={{flex:0.85}} contentContainerStyle={{justifyContent:'center'}}>

                    <View style={styles.welcomeView}>
                        <Text style={styles.welcomeText, { flex: 0.82 }}>
                            {gblStrings.userManagement.welcomeTextProfile}
                        </Text>
                    </View>

                    <View style={styles.profileHeader}>
                        <Text style={styles.profileHeadline}>
                            {gblStrings.userManagement.profilePreferences}
                        </Text>
                    </View> 

                    <View style={{ backgroundColor: '#7B8288', opacity: 0.4, height: scaledHeight(1), marginTop: scaledHeight(10) }} />
                    
                    <View style={styles.optionContainer}>
                        <GIcon
                            name="view-grid"
                            type="material-community"
                            size={26}
                            color="black"
                        />  

                        <View style={styles.optionHeaderView}>                                                    
                            <Text style={styles.optionHeaderText}>
                                {gblStrings.userManagement.profile}
                            </Text>
                        </View>

                        <View style={styles.optionSubHeaderView}>
                            <Text style={styles.optionSubHeaderText}>
                                {gblStrings.userManagement.managePersonalDetails}
                            </Text>
                        </View>
                    </View>

                    <View style={styles.optionContainer}>
                        <GIcon
                            name="view-grid"
                            type="material-community"
                            size={26}
                            color="black"
                        />    
                        <View style={styles.optionHeaderView}>                            
                            <Text style={styles.optionHeaderText}>
                                {gblStrings.userManagement.deliverySettings}
                            </Text>
                        </View>

                        <View style={styles.optionSubHeaderView}>
                            <Text style={styles.optionSubHeaderText}>
                                {gblStrings.userManagement.managePersonalDetails}
                            </Text>
                        </View>

                    </View>

                    <View style={styles.optionContainer}>
                        <GIcon
                            name="view-grid"
                            type="material-community"
                            size={26}
                            color="black"
                        />    
                        <View style={styles.optionHeaderView}>
                            <Text style={styles.optionHeaderText}>
                                {gblStrings.userManagement.accouintMessaging}
                            </Text>
                        </View>

                        <View style={styles.optionSubHeaderView}>
                            <Text style={styles.optionSubHeaderText}>
                                {gblStrings.userManagement.managePersonalDetails}
                            </Text>
                        </View>

                    </View>


                    <TouchableOpacity onPress={this.navigateSecurityPreference}>                    
                        <View style={styles.optionContainer}>
                            <GIcon
                                name="view-grid"
                                type="material-community"
                                size={26}
                                color="black"
                            />    
                            <View style={styles.optionHeaderView}>   
                                <Text style={styles.optionHeaderText}>
                                    {gblStrings.userManagement.SecurityPreferences}
                                </Text>
                            </View>
                            <View style={styles.optionSubHeaderView}>
                                <Text style={styles.optionSubHeaderText}>
                                    {gblStrings.userManagement.managePersonalDetails}
                                </Text>
                            </View>
                        </View>
                    </TouchableOpacity>

                    <View style={styles.optionContainer}>
                        <GIcon
                            name="view-grid"
                            type="material-community"
                            size={26}
                            color="black"
                        />    
                        <View style={styles.optionHeaderView}>  
                            <Text style={styles.optionHeaderText}>
                                {gblStrings.userManagement.marketingPrivacy}
                            </Text>
                        </View>

                        <View style={styles.optionSubHeaderView}>
                            <Text style={styles.optionSubHeaderText}>
                                {gblStrings.userManagement.managePersonalDetails}
                            </Text>
                        </View>

                    </View>

                    <TouchableOpacity style={styles.backButtonFlex} onPress={this.navigateBack}>
                        <Text style={styles.backButtonText}>{gblStrings.userManagement.back}</Text>
                    </TouchableOpacity>

                    <View style={styles.fullLine} />

                    <View style={styles.tNCFlex}>
                        <Text style={styles.tNcHeader}>{gblStrings.userManagement.VCDiscalimerTitle}{"\n"}</Text>
                        <Text style={styles.tNcBody}>{gblStrings.userManagement.VCDiscalimerDesc}{"\n"}{"\n"}{gblStrings.userManagement.VCPrivacyNoticeDesc} </Text>
                    </View>

                    <GFooterComponent />

                </ScrollView>
            </View>

        );
    }
}

ProfilesAndPreferences.propTypes = {
    navigation : PropTypes.instanceOf(Object)
};
  
ProfilesAndPreferences.defaultProps = {
 
};

export default ProfilesAndPreferences;

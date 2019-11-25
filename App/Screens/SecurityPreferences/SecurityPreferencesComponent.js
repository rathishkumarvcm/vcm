import React, { Component } from 'react';
import {styles} from './styles';
import {View, ScrollView, Text, TouchableOpacity} from 'react-native';
import { GHeaderComponent, GIcon, GFooterComponent } from '../../CommonComponents';
import PropTypes from "prop-types";
import gblStrings from '../../Constants/GlobalStrings';
import { scaledHeight } from '../../Utils/Resolution';

class SecurityPreferences extends Component {
    constructor(props){
        super(props);
        this.state = {
            isLoading: false,
        };
    }

    componentDidMount(){}

    navigateBack = () => this.props.navigation.goBack();

    navigateChangeLogon = () => this.props.navigation.navigate('changeLogonCredentials');

    navigateAccountRecovery = () => this.props.navigation.navigate('accountRecoveryPref');

    render(){
        return(
            <View style={styles.container}>
                <GHeaderComponent navigation={this.props.navigation} />

                <ScrollView style={{flex:0.85}} contentContainerStyle={{justifyContent:'center'}}>
                    <View style={styles.profileHeader}>
                        <Text style={styles.profileHeadline}>
                            {gblStrings.userManagement.securityPref}
                        </Text>
                    </View>

                    <View style={{backgroundColor: '#7B8288', opacity: 0.4, height: scaledHeight(1), marginTop: scaledHeight(10)}} />

                    <TouchableOpacity onPress={this.navigateChangeLogon}>
                        <View style={styles.optionContainer}>
                            <View style={{ position: 'absolute', left: 6, top: 4, marginTop: scaledHeight(15), marginRight: scaledHeight(6), flexDirection: 'row', alignItems: 'center' }}>
                                <GIcon
                                    name="view-grid"
                                    type="material-community"
                                    size={30}
                                    color="black"
                                /> 
                            
                                <Text style={styles.optionHeaderText}>
                                    {gblStrings.userManagement.changeSigninCredentials}
                                </Text>
                            </View>

                            <View style={styles.optionSubHeaderView}>
                                <Text style={{ fontSize: scaledHeight(16), color: '#B2B2B2', marginTop: scaledHeight(60) }}>
                                    {"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"}
                                </Text>
                            </View>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={this.navigateAccountRecovery}>
                        <View style={styles.optionContainer}>
                            <View style={{ position: 'absolute', left: 6, top: 4, marginTop: scaledHeight(15), marginRight: scaledHeight(6), flexDirection: 'row', alignItems: 'center' }}>
                                <GIcon
                                    name="view-grid"
                                    type="material-community"
                                    size={30}
                                    color="black"
                                />

                                <Text style={styles.optionHeaderText}>
                                    {gblStrings.userManagement.setAccountRecoveryPreferences}
                                </Text>
                            </View>

                            <View style={styles.optionSubHeaderView}>
                                <Text style={{ fontSize: scaledHeight(16), color: '#B2B2B2', marginTop: scaledHeight(60) }}>
                                    {"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"}
                                </Text>
                            </View>

                        </View>
                    </TouchableOpacity>


                    <View style={styles.optionContainer}>
                        <View style={{ position: 'absolute', left: 6, top: 4, marginTop: scaledHeight(15), marginRight: scaledHeight(6), flexDirection: 'row', alignItems: 'center' }}>
                            <GIcon
                                name="view-grid"
                                type="material-community"
                                size={30}
                                color="black"
                            />

                            <Text style={styles.optionHeaderText}>
                                {gblStrings.userManagement.modifySecurityQuestions}
                            </Text>
                        </View>

                        <View style={styles.optionSubHeaderView}>
                            <Text style={{ fontSize: scaledHeight(16), color: '#B2B2B2', marginTop: scaledHeight(60) }}>
                                {"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"}
                            </Text>
                        </View>

                    </View>

                    <View style={styles.optionContainer}>
                        <View style={{ position: 'absolute', left: 6, top: 4, marginTop: scaledHeight(15), marginRight: scaledHeight(6), flexDirection: 'row', alignItems: 'center' }}>
                            <GIcon 
                                name="view-grid"
                                type="material-community"
                                size={30}
                                color="black"
                            />

                            <Text style={styles.optionHeaderText}>
                                {gblStrings.userManagement.chooseSigninMethods}
                            </Text>
                        </View>

                        <View style={styles.optionSubHeaderView}>
                            <Text style={{ fontSize: scaledHeight(16), color: '#B2B2B2', marginTop: scaledHeight(60) }}>
                                {"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"}
                            </Text>
                        </View>

                    </View>

                    <View style={styles.optionContainer}>
                        <View style={{ position: 'absolute', left: 6, top: 4, marginTop: scaledHeight(15), right: scaledHeight(6), flexDirection:'row', alignItems:'center' }}>
                            <GIcon 
                                name="view-grid"
                                type="material-community"
                                size={30}
                                color="black"
                            />

                            <Text style={styles.optionHeaderText}>
                                {gblStrings.userManagement.mobileQuickSignIn}
                            </Text>                        
                        </View>

                        <View style={styles.optionSubHeaderView}>
                            <Text style={{fontSize:scaledHeight(16), color:'#B2B2B2', marginTop:scaledHeight(60)}}>
                                {"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"}
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

SecurityPreferences.propTypes = {
    navigation : PropTypes.instanceOf(Object)
};
  
SecurityPreferences.defaultProps = {
 
};

export default SecurityPreferences;

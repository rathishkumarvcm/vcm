import React, { Component } from 'react';
import { Text,View,ScrollView,TouchableOpacity } from 'react-native';
import {styles} from './styles';
import {GHeaderComponent,GIcon} from '../../CommonComponents';
import { scaledHeight} from '../../Utils/Resolution';
import PropTypes from "prop-types";

class GeneralSettingsComponent extends Component {
    constructor(props){
        super(props);
        //set true to isLoading if data for this screen yet to be received and wanted to show loader.
        this.state={
            isLoading:false,
            enableBiometric:false,
            faceIdEnrolled: false,
            touchIdEnrolled: false
        };
    }

    componentDidMount(){
       
    }
    
    navigateprofileSettings = ()=>this.props.navigation.navigate('profileSettings');    
    navigateaccountMessagingSettings = ()=>this.props.navigation.navigate('accountMessagingSettings'); 
 
    render(){
        
        return (
           
           
            <View style={styles.container}>
              <GHeaderComponent navigation={this.props.navigation} />
        
            <ScrollView style={{flex:0.85}}>

         
            <View style={styles.settingsView}>
                <Text style={styles.settingsHeadline}>
                    {"Settings"}
                </Text>
            </View>

            <View style={styles.signInView}>
                <Text style={styles.signIntext}>
                    {"John Doe,johndoe@gmail.com."}
                </Text>
            </View>

            <View style={styles.listContainer}>
                <TouchableOpacity style={{position:'absolute',left:6,top:4,marginTop:scaledHeight(5)}} onPress={this.navigateprofileSettings}>
                    <GIcon 
                        name="person"
                        type="material"
                        size={30}
                        color="black"
                    />
                </TouchableOpacity>

                <View style={styles.settingsView1}>
                    <Text style={{ color:'#56565A',fontSize:scaledHeight(16),fontWeight:'bold',marginTop:scaledHeight(40)}}>
                        {"PROFILE"}
                    </Text>
                </View>

                <View style={styles.signInView}>
                    <Text style={{color:'#B2B2B2',fontSize:scaledHeight(14),marginTop:scaledHeight(10)}}>
                        {"Manage your personal details"}
                    </Text>
                </View>

            </View>

            <View style={styles.listContainer}>
                <TouchableOpacity style={{position:'absolute',left:6,top:4,marginTop:scaledHeight(5)}} onPress={this.selectTheState}>
                    <GIcon 
                        name="mail"
                        type="feather"
                        size={30}
                        color="black"
                    />
                </TouchableOpacity>

                <View style={styles.settingsView1}>
                    <Text style={{ color:'#56565A',fontSize:scaledHeight(16),fontWeight:'bold',marginTop:scaledHeight(40)}}>
                        {"COMMUNITY PROFILE"}
                    </Text>
                </View>

                <View style={styles.signInView}>
                    <Text style={{color:'#B2B2B2',fontSize:scaledHeight(14),marginTop:scaledHeight(10)}}>
                        {"Manage your personal details"}
                    </Text>
                </View>

            </View>


            <View style={styles.listContainer}>
                <TouchableOpacity style={{position:'absolute',left:6,top:4,marginTop:scaledHeight(5)}} onPress={this.selectTheState}>
                    <GIcon 
                        name="mail"
                        type="feather"
                        size={30}
                        color="black"
                    />
                </TouchableOpacity>

                <View style={styles.settingsView1}>
                    <Text style={{ color:'#56565A',fontSize:scaledHeight(16),fontWeight:'bold',marginTop:scaledHeight(40)}}>
                        {"DELIVERY SETTINGS"}
                    </Text>
                </View>

                <View style={styles.signInView}>
                    <Text style={{color:'#B2B2B2',fontSize:scaledHeight(14),marginTop:scaledHeight(10)}}>
                        {"Manage your personal details"}
                    </Text>
                </View>

            </View>


            <View style={styles.listContainer}>
                <TouchableOpacity style={{position:'absolute',left:6,top:4,marginTop:scaledHeight(5)}} onPress={this.navigateaccountMessagingSettings}>
                    <GIcon 
                        name="mail"
                        type="feather"
                        size={30}
                        color="black"
                    />
                </TouchableOpacity>

                <View style={styles.settingsView1}>
                    <Text style={{ color:'#56565A',fontSize:scaledHeight(16),fontWeight:'bold',marginTop:scaledHeight(40)}}>
                        {"ACCOUNT MESSAGING"}
                    </Text>
                </View>

                <View style={styles.signInView}>
                    <Text style={{color:'#B2B2B2',fontSize:scaledHeight(14),marginTop:scaledHeight(10)}}>
                        {"Manage your personal details"}
                    </Text>
                </View>

            </View>

            <View style={styles.listContainer}>
                <TouchableOpacity style={{position:'absolute',left:6,top:4,marginTop:scaledHeight(5)}} onPress={this.selectTheState}>
                    <GIcon 
                        name="mail"
                        type="feather"
                        size={30}
                        color="black"
                    />
                </TouchableOpacity>

                <View style={styles.settingsView1}>
                    <Text style={{ color:'#56565A',fontSize:scaledHeight(16),fontWeight:'bold',marginTop:scaledHeight(40)}}>
                        {"SECURITY"}
                    </Text>
                </View>

                <View style={styles.signInView}>
                    <Text style={{color:'#B2B2B2',fontSize:scaledHeight(14),marginTop:scaledHeight(10)}}>
                        {"Manage your personal details"}
                    </Text>
                </View>

            </View>


            <View style={styles.listContainer}>
                <TouchableOpacity style={{position:'absolute',left:6,top:4,marginTop:scaledHeight(5)}} onPress={this.selectTheState}>
                    <GIcon 
                        name="mail"
                        type="feather"
                        size={30}
                        color="black"
                    />
                </TouchableOpacity>

                <View style={styles.settingsView1}>
                    <Text style={{ color:'#56565A',fontSize:scaledHeight(16),fontWeight:'bold',marginTop:scaledHeight(40)}}>
                        {"MARKETING & PRIVACY"}
                    </Text>
                </View>

                <View style={styles.signInView}>
                    <Text style={{color:'#B2B2B2',fontSize:scaledHeight(14),marginTop:scaledHeight(10)}}>
                        {"Manage your personal details"}
                    </Text>
                </View>

            </View>

            

            
            
            
            <View style={styles.newVictorySection}>
                <Text style={styles.termsofuseText1}>
                    {"Investments for USAA Members"}
                </Text>
                <Text style={styles.openInvestment}>
                        {"For USAA Members USAA Investments has been backed by the investment expertise of Victory Capital Management since July 2019. Your USAA online login credentials have not changed. They are the same details you used to you create your USAA online account.Your USAA online login credentials have not changed. They are the same details you used to you create your USAA online account."}
                </Text> 
            </View>

            <View style={styles.privacyAgreement}>
                <Text style={styles.privacyText}>
                    {"Privacy Policy"}
                </Text>

                <Text style={styles.privacyText}>
                    {"User Agreement"}
                </Text>
            </View>

            <View style={styles.copyRightSection}>
                <Text style={styles.copyRightText}>
                    {"Copyright Victory Capital Management Inc. ©2020"}
                </Text>
            </View>

            </ScrollView>
            </View>
    
        );
    }
}

GeneralSettingsComponent.propTypes = {
    navigation : PropTypes.instanceOf(Object)
  };
  
  GeneralSettingsComponent.defaultProps = {
 
  };

export default GeneralSettingsComponent;
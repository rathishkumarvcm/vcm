import React, { Component } from 'react';
import { Text,View,ScrollView } from 'react-native';
import {styles} from './styles';
import {GHeaderComponent,GIcon,GRadioButtonComponent} from '../../CommonComponents';
import { scaledHeight} from '../../Utils/Resolution';
import PropTypes from "prop-types";
class MarketingandPrivacyComponent extends Component {
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
    
 
    render(){
        
        return (
           
           
            <View style={styles.container}>
              <GHeaderComponent navigation={this.props.navigation} />
        
            <ScrollView style={{flex:0.85}}>

            <View style={styles.settingsView}>
                <Text style={styles.settingsInfo}>
                    {"Settings > Marketing & Privacy"}
                </Text>
            </View>

         
            <View style={styles.settingsView}>
                <Text style={styles.settingsHeadline}>
                    {"Marketing & Privacy"}
                </Text>
            </View>

            <View style={styles.settingsBorder} />

            <View style={{paddingLeft:'4%',paddingRight:'4%',width:'92%',marginTop:scaledHeight(15)}}>
                <Text style={{fontSize:scaledHeight(18),color:'#56565A'}}>
                    {"How Should We Contact You About Offers?"}
                </Text>
            </View>

            <View style={{paddingLeft:'4%',paddingRight:'4%',width:'92%',marginTop:scaledHeight(15)}}>
                <Text style={{fontSize:scaledHeight(16),color:'#56565A'}}>
                    {"To meet your needs better, we 'd like to reach out to you from time to time to let you know about the products and services we have to offer"}
                </Text>
            </View>

            <View style={styles.listContainer}>
                <View style={styles.settingsMobile}>
                <View style={{width:'15%'}}>
                    <GIcon 
                        name="ios-square-outline"
                        type="ionicon"
                        size={40}
                        color="black"
                    />
                </View>
               
                    <Text style={{width:'80%',color:'#56565A',alignItems:'center',fontSize:scaledHeight(16),fontWeight:'bold'}}>
                        {"Mobile Phone"}
                    </Text>

                    <Text style={{color:'#5D83AE',fontSize:scaledHeight(16),fontWeight:'bold',marginTop:scaledHeight(3)}}>
                        {"Edit"}
                    </Text>
                </View>

                <View style={styles.settingsMobileText}>
                <Text style={{width:'15%'}}>
                    {""}
                </Text>
                <Text style={{color:'#56565A',fontSize:scaledHeight(14),marginTop:scaledHeight(3)}}>
                        {"+1 (123) 456 - 7890"}
                </Text>
                </View>

             <View style={styles.settingsMobile}>
                <View style={{width:'15%'}}>
                <Text style={{fontSize:scaledHeight(16),color:'#56565A'}}>
                        {"NA"}
                </Text>
                </View>
               
                    <Text style={{width:'80%',color:'#56565A',alignItems:'center',fontSize:scaledHeight(16),fontWeight:'bold'}}>
                        {"Home Phone"}
                    </Text>

                    <Text style={{color:'#5D83AE',fontSize:scaledHeight(16),fontWeight:'bold',marginTop:scaledHeight(3)}}>
                        {"Edit"}
                    </Text>
             </View>

                <View style={styles.settingsMobileText}>
                <Text style={{width:'15%'}}>
                    {""}
                </Text>
                <Text style={{color:'#56565A',fontSize:scaledHeight(14),marginTop:scaledHeight(3)}}>
                        {"None On File"}
                </Text>
                </View>

             <View style={styles.settingsMobile}>
                <View style={{width:'15%'}}>
                    <GIcon 
                        name="ios-square-outline"
                        type="ionicon"
                        size={40}
                        color="black"
                    />
                </View>
               
                    <Text style={{width:'80%',color:'#56565A',alignItems:'center',fontSize:scaledHeight(16),fontWeight:'bold'}}>
                        {"Primary Email"}
                    </Text>

                    <Text style={{color:'#5D83AE',fontSize:scaledHeight(16),fontWeight:'bold',marginTop:scaledHeight(3)}}>
                        {"Edit"}
                    </Text>
             </View>

                <View style={styles.settingsMobileText}>
                <Text style={{width:'15%'}}>
                    {""}
                </Text>
                <Text style={{color:'#56565A',fontSize:scaledHeight(14),marginTop:scaledHeight(3)}}>
                        {"abcd@gmail.com"}
                </Text>
                </View>


             <View style={styles.settingsMobile}>
                <View style={{width:'15%'}}>
                    <Text style={{fontSize:scaledHeight(16),color:'#56565A'}}>
                        {"NA"}
                    </Text>
                </View>
               
                    <Text style={{width:'80%',color:'#56565A',alignItems:'center',fontSize:scaledHeight(16),fontWeight:'bold'}}>
                        {"Secondary Email"}
                    </Text>

                    <Text style={{color:'#5D83AE',fontSize:scaledHeight(16),fontWeight:'bold',marginTop:scaledHeight(3)}}>
                        {"Edit"}
                    </Text>
             </View>

                <View style={styles.settingsMobileText}>
                <Text style={{width:'15%'}}>
                    {""}
                </Text>
                <Text style={{color:'#56565A',fontSize:scaledHeight(14),marginTop:scaledHeight(3)}}>
                        {"None On File"}
                </Text>
                </View>


             <View style={styles.settingsMobile}>
                <View style={{width:'15%'}}>
                    <GIcon 
                        name="ios-square-outline"
                        type="ionicon"
                        size={40}
                        color="black"
                    />
                </View>
               
                    <Text style={{width:'80%',color:'#56565A',alignItems:'center',fontSize:scaledHeight(16),fontWeight:'bold'}}>
                        {"Mailing Address"}
                    </Text>

                    <Text style={{color:'#5D83AE',fontSize:scaledHeight(16),fontWeight:'bold',marginTop:scaledHeight(3)}}>
                        {"Edit"}
                    </Text>
             </View>

                <View style={styles.settingsMobileText}>
                <Text style={{width:'15%'}}>
                    {""}
                </Text>
                <Text style={{color:'#56565A',fontSize:scaledHeight(14),marginTop:scaledHeight(3)}}>
                        {"Address 1 Address 2 City State Zip"}
                </Text>
                </View>
            </View>


            <View style={{flexDirection:'row',paddingLeft:'4%',paddingRight:'4%',width:'92%',marginTop:scaledHeight(15)}}>
                <Text style={{fontSize:scaledHeight(16),color:'#56565A'}}>
                    {"We show you gave VCM permission to make marketing calls to you using an automated dialing system or pre recorded voice message. If you want to change you preference."}
                <Text style={{fontSize:scaledHeight(16),color:'#5D83AE',fontWeight:'bold'}}>
                    {"Contact us"}
                </Text>
                </Text>
            </View>


            <View style={{paddingLeft:'4%',paddingRight:'4%',width:'92%',marginTop:scaledHeight(15)}}>
                <Text style={{fontSize:scaledHeight(16),color:'#56565A'}}>
                    {"What Types of Offers Are You Interested in?"}
                </Text>
            </View>


            <View style={{paddingLeft:'4%',paddingRight:'4%',width:'92%',marginTop:scaledHeight(15)}}>
                <Text style={{fontSize:scaledHeight(16),color:'#56565A'}}>
                    {"You can tailor the VCM offers you receive and how you like to get them"}
                </Text>
            </View>

            <View style={{flexDirection:'row',height:scaledHeight(160),paddingLeft:'4%',paddingRight:'4%',width:'92%',marginTop:scaledHeight(15)}}>
                <Text style={{fontSize:scaledHeight(16),color:'#56565A'}}>
                    {"Please note that your selections do not apply to pre-screened offers of credit. To opt-out of pre-screened offers of credit please visit"}
                <Text style={{color:'#5D83AE',fontSize:scaledHeight(16),fontWeight:'bold'}}>
                    {" https://www.optoutprescreen.com"} 
                </Text>
                <Text>
                    {" or call to free"}
                </Text>

                <Text style={{color:'#5D83AE',fontSize:scaledHeight(16),fontWeight:'bold'}}>
                    {" Phone Number"}
                </Text>
                <Text>
                    {". The phone number and website are operated by the major consumer reporting companies"}
                </Text>
                </Text>
            </View>

            <View style={styles.settingsMobile}>
                    <Text style={{width:'80%',color:'#56565A',alignItems:'center',fontSize:scaledHeight(22),fontWeight:'bold'}}>
                        {"Products & Services"}
                    </Text>

                    <Text style={{color:'#5D83AE',fontSize:scaledHeight(16),fontWeight:'bold',marginTop:scaledHeight(3)}}>
                        {"Expand All"}
                    </Text>
            </View>
                
            <View style={styles.listContainerb}>
            <View style={styles.settingsMobile}>
                    <Text style={{width:'90%',color:'#56565A',alignItems:'center',fontSize:scaledHeight(16),fontWeight:'bold'}}>
                        {"Mobile Phone"}
                    </Text>

                    <View style={{width:'5%'}}>
                    <GIcon 
                        name="ios-square-outline"
                        type="ionicon"
                        size={40}
                        color="black"
                    />
                    </View>
            </View>
                <View style={styles.settingsMobile}>
                    <Text style={{width:'90%',color:'#56565A',alignItems:'center',fontSize:scaledHeight(16),fontWeight:'bold'}}>
                        {"Home Phone"}
                    </Text>

                    <View style={{width:'5%'}}>
                    <GIcon 
                        name="ios-square-outline"
                        type="ionicon"
                        size={40}
                        color="black"
                    />
                    </View>
                </View>


                <View style={styles.settingsMobile}>
                    <Text style={{width:'90%',color:'#56565A',alignItems:'center',fontSize:scaledHeight(16),fontWeight:'bold'}}>
                        {"Primary Email"}
                    </Text>

                    <View style={{width:'5%'}}>
                    <GIcon 
                        name="ios-square-outline"
                        type="ionicon"
                        size={40}
                        color="black"
                    />
                    </View>
                </View>


                <View style={styles.settingsMobile}>
                    <Text style={{width:'90%',color:'#56565A',alignItems:'center',fontSize:scaledHeight(16),fontWeight:'bold'}}>
                        {"Secondary Email"}
                    </Text>

                    <View style={{width:'5%'}}>
                    <GIcon 
                        name="ios-square-outline"
                        type="ionicon"
                        size={40}
                        color="black"
                    />
                    </View>
                </View>


                <View style={styles.settingsMobile}>
                    <Text style={{width:'90%',color:'#56565A',alignItems:'center',fontSize:scaledHeight(16),fontWeight:'bold'}}>
                        {"Mailing Address"}
                    </Text>

                    <View style={{width:'5%'}}>
                    <GIcon 
                        name="ios-square-outline"
                        type="ionicon"
                        size={40}
                        color="black"
                    />
                    </View>
                </View>
            </View>

            <View style={{paddingLeft:'4%',paddingRight:'4%',width:'92%',marginTop:scaledHeight(15)}}>
                <Text style={{fontSize:scaledHeight(16),color:'#56565A'}}>
                    {"Your marketing and privacy preferences will also apply to your spouse and children."}
                </Text>
            </View>

            <View style={{paddingLeft:'4%',paddingRight:'4%',width:'92%',marginTop:scaledHeight(15)}}>
                <Text style={{fontSize:scaledHeight(20),color:'#56565A'}}>
                    {"Can We Share Your Information Inside VCM?"}
                </Text>
            </View>

            <View style={{paddingLeft:'4%',paddingRight:'4%',width:'92%',marginTop:scaledHeight(15)}}>
                <Text style={{fontSize:scaledHeight(16),color:'#56565A'}}>
                    {"There are times we want to share your personal information inside the VCM family of companies so that we can provide you with the best customer service possible. At the same time, you have the following choices about how wee share and use your information inside VCM."}
                </Text>
            </View>

            <View style={styles.completeBorder}>

                <View style={styles.radioSection}>
                    <Text style={{marginTop:scaledHeight(20),paddingLeft:'2%',paddingRight:'2%',fontSize:scaledHeight(16),color:'#333333DE',fontWeight:'bold',opacity:100}}>
                        {"Can we share your credit and insurance information inside VCM?"}
                    </Text>

                    <View style={{flexDirection:'row',marginLeft:'2%'}}>
                        <GRadioButtonComponent radioButtonStyle={{width:'40%'}} selected questions={"Yes"} />

                        <GRadioButtonComponent radioButtonStyle={{width:'40%'}} questions={"No"} />
                    </View>

                    <Text style={{paddingLeft:'2%',paddingRight:'2%',fontSize:scaledHeight(14)}}>
                        {"This will help us serve you better and provide you with the most efficient service."}
                    </Text>

                </View>

                <View style={styles.radioSection}>
                    <Text style={{paddingLeft:'2%',paddingRight:'2%',fontSize:scaledHeight(16),color:'#333333DE',fontWeight:'bold',opacity:100}}>
                            {"Can we also share your personal information to market other VCM products to you?"}
                    </Text>
                    
                    <View style={{flexDirection:'row',marginLeft:'4%'}}>
                        <GRadioButtonComponent selected radioButtonStyle={{width:'40%'}} questions={"Yes"} />

                        <GRadioButtonComponent radioButtonStyle={{width:'40%'}} questions={"No"} />
                    </View>
                    <Text style={{paddingLeft:'2%',paddingRight:'2%',fontSize:scaledHeight(14)}}>
                        {"This will help us serve you better and provide you with the most efficient service."}
                    </Text>
                </View>
                
            </View>

            <View style={{paddingLeft:'4%',paddingRight:'4%',width:'92%',marginTop:scaledHeight(15)}}>
                <Text style={{fontSize:scaledHeight(16),color:'#56565A'}}>
                    {"Your privacy preferences will also apply to everyone on your account. Find out more information in our Privacy Promise and Online Information Practices."}
                </Text>
            </View>



            
            <View style={styles.newVictorySection}>
                <Text style={styles.termsofuseText1}>
                    {"Investing involves risk including loss of principal."}
                </Text>
                <Text style={styles.openInvestment}>
                        {"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam imperdiet dictum orci et faucibus. Suspendisse non malesuada enim. Aliquam fringilla lectus ut massa convallis."}
                </Text> 
            </View>

            <View style={styles.privacyAgreement}>
                <Text style={styles.privacyText}>
                    {"Privacy Policy"}
                </Text>

                <Text style={styles.privacyText}>
                    {"User Agreements"}
                </Text>
            </View>

            <View style={styles.fundAgreement}>
                <Text style={styles.privacyText}>
                    {"Fund Documents"}
                </Text>

                <Text style={styles.privacyText}>
                    {"Support"}
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

MarketingandPrivacyComponent.propTypes = {
        navigation : PropTypes.instanceOf(Object)
  };
  
  MarketingandPrivacyComponent.defaultProps = {
 
  };

export default MarketingandPrivacyComponent;
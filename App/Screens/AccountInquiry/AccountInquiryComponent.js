import React, { Component } from 'react';
import { Text,View,ScrollView,TouchableOpacity,FlatList, ColorPropType } from 'react-native';
import axios from "axios";
import StyleSheet from './styles';
import {GButtonComponent,GInputComponent,GIcon,GHeaderComponent} from '../../CommonComponents';
//  import { makeRequest } from "../../network/apiInterface";


const accountData = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: '30900780185',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: '30900011688',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: '30900035576',
    },
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: '30900773303',
    }
  ];


  const fundData = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: '30',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: '33',
    }
  ];


  const companyData = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: '591',
    }
  ];

class AccountInquiryComponent extends Component {
    constructor(props){
        super(props);
        //  set true to isLoading if data for this screen yet to be received and wanted to show loader.
        this.state={
            accountNumber : '122',
            accountName: '',
            accountDropDown: false,
            stateDropDown : false,
            valueDropDown : ''
        };
    }

    webServiceCall = () => {
        axios.post('https:// effrd3yhmi.execute-api.us-east-2.amazonaws.com/dev/v1-api-getaccountdetails', {
            
                "companyNumber": 591,
                "fundNumber": 30,
               "accountNumber": 30900780183
 
          })
          .then(response => {
            console.log(response.data);
            this.setState({
                accountValueDropDown : response.data.account.number.toString(),
               accountName : response.data.account.userName
           });

          })
          .catch(function (error) {
            console.log(error);
          });
    }

    selectTheAccount = () => {
        this.setState({
            accountDropDown : !this.state.accountDropDown
        });
    }

    selectedAccountDropDownValue = (value) => {
        this.setState({
            accountValueDropDown : value,
            accountDropDown : false
        });
    }

    selectTheFund = () => {
        this.setState(
            //  prevState => ({fundDropDown: !prevState.fundDropDown}));
            {fundDropDown : !this.state.fundDropDown});

    
    }

    selectedFundDropDownValue = (value) => {
        this.setState({
            fundValueDropDown : value,
            fundDropDown : false
        });
    }

    selectTheCompany = () => {
        this.setState({
            companyDropDown : !this.state.companyDropDown
        });
    }

    selectedCompanyDropDownValue = (value) => {
        this.setState({
            companyValueDropDown : value,
            companyDropDown : false
        });
    }



 
    render(){
        console.log("*****",this.state.accountNumber);
        return (
           
            <>
            {this.state.enableBiometric && 
                <GBiometricAuthentication onAuthenticate={this.onAuthenticate} enableBiometric={this.state.enableBiometric} />
            }
            <View style={StyleSheet.container}>
             <GHeaderComponent onPress={()=>this.props.navigation.navigate('registerEmail')} />
            
            
        <ScrollView style={StyleSheet.scrollViewFlexDirection}>

            <View style={StyleSheet.signInView}>
                <Text style={StyleSheet.signIntext}>
                    Account Inquiry
                </Text>
            </View>
            <View style={StyleSheet.signInView}>
                <Text style={StyleSheet.userIDText}>
                    Account Number       
                </Text>
            </View>
            <TouchableOpacity style={StyleSheet.touchableOpacityFlexDirection} onPress={this.selectTheAccount}>
                <GInputComponent 
                    propInputStyle={StyleSheet.userIDTextBox1} 
                    placeholder=""
                    editable={false}
                    value={this.state.accountValueDropDown}
                />

                <TouchableOpacity style={StyleSheet.touchableOpacityPosition} onPress={this.selectTheAccount}>
                    <GIcon 
                        name="md-arrow-dropdown"
                        type="ionicon"
                        size={20}
                        color="black"
                    />
                </TouchableOpacity>
            </TouchableOpacity>

            {this.state.accountDropDown && (
        <View style={StyleSheet.viewStyle}>
            <FlatList
                data={accountData}
                renderItem={({ item }) => 
                (
<TouchableOpacity 
                    style={{height:33}} 
                    onPress={()=>this.selectedAccountDropDownValue(item.title)}
>
                    <Text> {item.title} </Text>
</TouchableOpacity>
)
                }
        keyExtractor={item => item.id}
            />
        </View>
      )}




            <View style={StyleSheet.signInView}>
                <Text style={StyleSheet.userIDText}>
                    Fund Number       
                </Text>
            </View>
            <TouchableOpacity style={StyleSheet.touchableOpacityFlexDirection} onPress={this.selectTheFund}>
                <GInputComponent 
                    propInputStyle={StyleSheet.userIDTextBox1} 
                    placeholder=""
                    editable={false}
                    value={this.state.fundValueDropDown}
                />

                <TouchableOpacity style={StyleSheet.touchableOpacityPosition} onPress={this.selectTheFund}>
                    <GIcon 
                        name="md-arrow-dropdown"
                        type="ionicon"
                        size={20}
                        color="black"
                    />
                </TouchableOpacity>
            </TouchableOpacity>

            {this.state.fundDropDown && (
        <View style={{height:70,borderWidth:1,marginLeft:'4%',marginRight:'4%',width:'92%',borderWidth:1,borderColor : "#DEDEDF",backgroundColor:'white'}}>
            <FlatList
                data={fundData}
                renderItem={({ item }) => 
                (
<TouchableOpacity 
                    style={{height:33}} 
                    onPress={()=>this.selectedFundDropDownValue(item.title)}
>
                    <Text> {item.title} </Text>
</TouchableOpacity>
)
                }
        keyExtractor={item => item.id}
            />
        </View>
      )}

            <View style={StyleSheet.signInView}>
                <Text style={StyleSheet.userIDText}>
                    Company Number       
                </Text>
            </View>
            <TouchableOpacity style={StyleSheet.touchableOpacityFlexDirection} onPress={this.selectTheCompany}>
                <GInputComponent 
                    propInputStyle={StyleSheet.userIDTextBox1} 
                    placeholder=""
                    editable={false}
                    value={this.state.companyValueDropDown}
                />

                <TouchableOpacity style={StyleSheet.touchableOpacityPosition} onPress={this.selectTheCompany}>
                    <GIcon 
                        name="md-arrow-dropdown"
                        type="ionicon"
                        size={20}
                        color="black"
                    />
                </TouchableOpacity>
            </TouchableOpacity>

            

        {this.state.companyDropDown && (
        <View style={StyleSheet.viewStyle}>
            <FlatList
                data={companyData}
                renderItem={({ item }) => 
                (
<TouchableOpacity 
                    style={{height:33}} 
                    onPress={()=>this.selectedCompanyDropDownValue(item.title)}
>
                    <Text> {item.title} </Text>
</TouchableOpacity>
)
                }
        keyExtractor={item => item.id}
            />
        </View>
      )}

<View style={StyleSheet.signInView}>
                <Text style={StyleSheet.userIDText}>
                    USER NAME       
                </Text>
</View>
            <GInputComponent 
                propInputStyle={StyleSheet.userIDTextBox} 
                placeholder=""
                value={this.state.accountName}
                editable={false}
            />




            <GButtonComponent 
                    buttonStyle={StyleSheet.signInButton}
                    buttonText="Get Details"
                    textStyle={StyleSheet.signInButtonText}
                    onPress={()=>this.webServiceCall()}
            />



        </ScrollView>
            </View>
            </>
        );
    }
}

export default AccountInquiryComponent;
import React, { Component } from 'react';
import { Text,View,ScrollView,TouchableOpacity,FlatList } from 'react-native';
import {styles} from './styles';
import {GButtonComponent,GInputComponent,GIcon,GHeaderComponent,GFooterComponent,GDropDownComponent} from '../../CommonComponents';
import PropTypes from 'prop-types';
import { scaledHeight } from '../../Utils/Resolution';


  const newData = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First State',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second State',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third State',
    },
  ];
  
class registerAddressComponent extends Component {
    constructor(props){
        super(props);
        //set true to isLoading if data for this screen yet to be received and wanted to show loader.
        this.state={
            isLoading:false,
            enableBiometric:false,
            faceIdEnrolled: false,
            touchIdEnrolled: false,
            stateDropDown : false,
            valueDropDown : ''
        };
    }

    componentDidMount(){
       
    }

    goBack = () =>{
        this.props.navigation.goBack();
    }

    selectTheState = () => {
        this.setState({
            stateDropDown : !this.state.stateDropDown
        });
    }

    selectedDropDownValue = (value) => {
        this.setState({
            valueDropDown : value,
            stateDropDown : false
        });
    }

    navigateEmail = ()=>this.props.navigation.navigate('registerEmail');
 
    navigateDashboard = ()=>this.props.navigation.navigate('dashboard');

    render(){
        
        return (
           
           
            <View style={styles.container}>
            <GHeaderComponent 
            navigation={this.props.navigation}
            register onPress={this.navigateEmail}
            />

            <ScrollView style={{flex:0.85}}>

            {/*<View style={styles.stepsOuter}>
                <View style={styles.stepsInner} />
        </View>*/}

            <View style={styles.signInView}>
                <Text style={styles.signIntext}>
                    {"You are almost done! Let us know your contact information."}
                </Text>
            </View>

            <View style={styles.newVictorySection1}>
                <Text style={styles.openInvestment}>
                        {"For USAA Members USAA Investments has been backed by the investment expertise of Victory Capital Management since July 2019."}
                </Text>  
            </View>


            <View style={styles.signInView}>
                <Text style={styles.userIDText}>
                    {"Address 1"}       
                </Text>
            </View>
            <GInputComponent 
                propInputStyle={styles.userIDTextBox} 
                placeholder={""}
                secureTextEntry
            />

            <View style={styles.signInView}>
                <Text style={styles.userIDText}>
                    {"Address 2(Optional)"}       
                </Text>
            </View>
            <GInputComponent 
                propInputStyle={styles.userIDTextBox} 
                placeholder={""}
                secureTextEntry
            />

            <View style={styles.signInView}>
                <Text style={styles.userIDText}>
                    {"Zip"}       
                </Text>
            </View>
            <GInputComponent 
                propInputStyle={styles.userIDTextBox} 
                placeholder={""}
                secureTextEntry
            />

            <View style={styles.signInView}>
                <Text style={styles.userIDText}>
                    {"City"}       
                </Text>
            </View>
            <GInputComponent 
                propInputStyle={styles.userIDTextBox} 
                placeholder={""}
                secureTextEntry
            />

<GDropDownComponent 
    dropDownName="state" 
    data={newData} 
    changeState={this.selectTheState}
    showDropDown={this.state.stateDropDown}
    dropDownValue={this.state.valueDropDown}
    selectedDropDownValue={this.selectedDropDownValue}
    dropDownPostition={{position:'absolute',right:0,top:scaledHeight(700)}}
    />

           {/*} <View style={styles.signInView}>
                <Text style={styles.userIDText}>
                    {"State"}       
                </Text>
            </View>

            <TouchableOpacity style={{flexDirection:'row'}} onPress={this.selectTheState}>
                <GInputComponent 
                    propInputStyle={styles.userIDTextBox1} 
                    placeholder={""}
                    editable={false}
                    value={this.state.valueDropDown}
                />

                <TouchableOpacity style={{position:'absolute',right:20,top:14}} onPress={this.selectTheState}>
                    <GIcon 
                        name="md-arrow-dropdown"
                        type="ionicon"
                        size={20}
                        color="black"
                    />
                </TouchableOpacity>
    </TouchableOpacity>*/}

            

        {/*this.state.stateDropDown && 
        <View style={{height:100,position:'absolute',right:0,top:scaledHeight(700),zIndex:1,
        borderWidth:1,marginLeft:'4%',marginRight:'4%',width:'92%',borderColor : "#DEDEDF",backgroundColor:'white'}}
        >
            <FlatList
                data={newData}
                renderItem={({ item }) => 
                (<TouchableOpacity style={{ height: 33 }} onPress={() => this.selectedDropDownValue(item.title)}>
                    <Text> {item.title} </Text>
                 </TouchableOpacity>)
                }
        keyExtractor={item => item.id}
            />
            </View> */}

            
            {/*<Dropdown
            dropdownOffset={{top:106}}
            containerStyle={{borderWidth:1,
            backgroundColor:'white',
            borderColor:'lightgrey',
            borderRadius:5,
            marginLeft:'4%',
            marginRight:'4%',
            // marginBottom:scaledHeight(8),
            width : '92%',
            height:50
           }}
           
           rippleCentered={true}
           inputContainerStyle={{ borderBottomColor: 'transparent' }}
           dropdownMargins={{min:16,max:160}}
           //dropdownPosition={20}
           
                            data={data}
        />*/}

            <GButtonComponent 
                    buttonStyle={styles.signInButton}
                    buttonText="Continue"
                    textStyle={styles.signInButtonText}
                    onPress={this.navigateDashboard}
            />
            
            <TouchableOpacity onPress={this.goBack} style={styles.goBack}>
            <GIcon 
                        name="left"
                        type="antdesign"
                        size={25}
                        color="black"
            />
                <Text style={styles.forgotLineTextColor}>
                    {"Back"}
                </Text>
            </TouchableOpacity>

            <View style={styles.termsofuse}>
                <Text style={styles.termsofuseText}>
                    {"Need Assistance?  "}
                   
                <Text style={styles.forgotLineTextColor}>
                {"Get Help"}
                </Text>
                </Text>
            </View>

            <View style={{paddingLeft:'4%',paddingRight:'4%',marginTop:20}}>
                 <View style={{borderBottomWidth:1,borderBottomColor:'#56565A'}} />  
            </View>
            

            <View style={styles.newVictorySection}>
                <Text style={styles.termsofuseText}>
                    {"Investments for USAA Members"}
                </Text>
                <Text style={styles.openInvestment}>
                        {"For USAA Members USAA Investments has been backed by the investment expertise of Victory Capital Management since July 2019. Your USAA online login credentials have not changed. They are the same details you used to you create your USAA online account.Your USAA online login credentials have not changed. They are the same details you used to you create your USAA online account."}
                </Text> 
            </View>

            <GFooterComponent />

            </ScrollView>
            </View>
    
        );
    }
}

registerAddressComponent.propTypes = {
    navigation : PropTypes.instanceOf(Object)
  };
  
  registerAddressComponent.defaultProps = {
 
  };


export default registerAddressComponent;
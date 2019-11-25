import React, { Component } from 'react';
import { View, Text, ScrollView , TouchableOpacity} from 'react-native';
import { styles } from './styles';
import { GButtonComponent , GInputComponent , 
         GFloatingInputComponent, GRadioButtonComponent, 
         GCheckBoxComponent, GCardTileComponent, GCounterComponent, GIconButton,
         GIcon
} from '../../CommonComponents';
import DatePicker from 'react-native-datepicker';
import PropTypes from "prop-types";


const securityQuestions = [
    { index1 : 0, question:"What is your first school?"},
    { index1 : 1, question:"What is your first bike?"},
    { index1: 2, question:"What is your favourite place?"},
];



class CommonUIComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            radioButton : false,
            radioButtonIndex : null,
            checkBox : false,
            checkBoxIndex : null,
            currentCheckBox : false,
            radioButtonSelected : false,
            usersChoice : [
                {options : "Credit card payment",checked: true},
                {options : "Online Services",checked : false},
                {options : "Mobile banking",checked : true}
            ],
            diffCounter : 0,
            date:"2019-09-03"
        };
    }

    throwException = ()=>{
        console.log('Exception from Home Component');
        //console.log('baseUrl:-',Config);
        throw new Error('Custom Exception throw from home component');
    }

   // newMethod(item) {
     //   return () => this.props.navigation.navigate(item.naviagteTo);
    

    radioButtonClicked = (index)=>{
        if(index!==this.state.radioButtonIndex){
            this.setState({ 
                radioButtonIndex : index,
                radioButton : false
            });
        }
        else{
            this.setState({ 
                radioButton : false
            });
        }
    }

    

    checkBoxClicked = (indexPre,previousValue) => {
       var tempArray = [];
        this.state.usersChoice.map((item,index)=>{
            var temp = Object.assign({}, item);
            if(index === indexPre){
                temp.checked = !previousValue;
            }
            tempArray.push(temp);
    });
        this.setState({ 
            usersChoice : tempArray
        });
    }

    chartNavigate = ()=>this.props.navigation.navigate('charts');
    goBack = ()=>this.props.navigation.goBack();
    pdfFeatures = ()=>this.props.navigation.navigate('pdfFeatures');
    listView = ()=>this.props.navigation.navigate('listView');
    pagination = ()=>this.props.navigation.navigate('pagination');
    navigatePdf = ()=>this.props.navigation.navigate('pdf');
    navigateSearch = ()=>this.props.navigation.navigate('search');
    
    render(){
        return (
            <ScrollView style={{flex:1,flexDirection:'column'}}>
                <View style={styles.containerStyle}>
                <Text style={styles.labeltext}>{"Button Component:"}</Text>
                <GButtonComponent 
                //disabled
                buttonStyle={styles.buttonStyle} 
                textStyle={styles.buttonTextStyle}
                buttonText= {"Charts"}
                onPress={this.chartNavigate}
                />
                <GButtonComponent 
                buttonStyle={styles.buttonStyle} 
                textStyle={styles.buttonTextStyle}
                buttonText= {"Back"}
                onPress={this.goBack}
                />
                <GButtonComponent 
                buttonStyle={styles.buttonStyle} 
                textStyle={styles.buttonTextStyle}
                buttonText= {"PDF POC"}
                onPress={this.pdfFeatures}
                />

                <GButtonComponent 
                    buttonStyle={styles.buttonStyle} 
                    textStyle={styles.buttonTextStyle}
                    buttonText= {"Flat List"}
                    onPress={this.listView}
                />

                 <GButtonComponent 
                    buttonStyle={styles.buttonStyle} 
                    textStyle={styles.buttonTextStyle}
                    buttonText= {"Pagination"}
                    onPress={this.pagination}
                 />

                <GButtonComponent 
                    buttonStyle={styles.buttonStyle} 
                    textStyle={styles.buttonTextStyle}
                    buttonText= {"Maps"}
                    onPress={this.navigatePdf}
                /> 

                <GButtonComponent 
                    buttonStyle={styles.buttonStyle} 
                    textStyle={styles.buttonTextStyle}
                    buttonText= {"Search"}
                    onPress={this.navigateSearch}
                /> 

           

                
                <View style={{marginTop:'5%'}}>
                    <Text style={styles.labeltext}>
                        {"Text Input Component:"}
                    </Text>
                    <GInputComponent
                    //textInputStyle={}
                    secureTextEntry={false}
                    inputText={""}
                    placeholder={"Username"}
                    placehlderTextColor={"gray"}
                    autoFocus
                    editable
                    maxLength={100}
                    // value={"Need to clear"}
                    />
                </View>

            <View style={{marginTop:'5%',marginBottom:'5%'}}>
                <GInputComponent
                    secureTextEntry
                    inputText={""}
                    placeholder={"Password"}
                    placehlderTextColor={"gray"}
                    autoFocus
                    editable
                    maxLength={10}
                />
            </View>

            <View>
            <Text style={styles.labeltext}>
                        {"Floating Label Component:"}
            </Text>
                <GFloatingInputComponent
                inputBorder={styles.initialfloatingBorder}
                labelText={"Username"}
                // style={styles.floatStyle}
                value={"FloatLabel"}
                inputStyle={styles.floatInput}
                />
            </View>

            <View style={{marginTop:'5%',marginBottom:'5%'}}>
            <Text style={styles.labeltext}>
                        {"Numeric Input Field:"}
            </Text>
                <GInputComponent
                    secureTextEntry={false}
                    inputText={""}
                    placeholder={"Numeric Field"}
                    placehlderTextColor={"gray"}
                    autoFocus
                    editable
                    maxLength={10}
                    keyboardType={"numeric"}
                    contextMenuHidden
                />
            </View>


            <Text style={styles.labeltext}>
                        {"Radio Button Component:"}
            </Text>
                {securityQuestions.map((item,index) => 
                    index == this.state.radioButtonIndex ? 
                    <GRadioButtonComponent 
                    onPress={()=>this.radioButtonClicked(index)}
                    selected
                    questions = {item.question}
                    />
                    :
                    <GRadioButtonComponent 
                    onPress={()=>this.radioButtonClicked(index)}
                    selected = {false}
                    questions = {item.question}
                    />
                )}

                <Text style={{fontSize:20,
        marginBottom:'2%',
        height:30,
        color:'green'}}
                >
                        {"Card Tile Component:"}
                </Text>
                <GCardTileComponent 
                title={"Account Number"} 
                details={"0000001004067032"} 
                tileStyles={{color:"black"}
            }
                />
                <GCardTileComponent title={"Branch"} details={"Beasant Nagar"} />
                <GCardTileComponent title={"Name"} details={"VCM.com"} tileStyles={{color:"black"}} />
                <GCardTileComponent title={"Available Balance"} details={"246.31"} />

                <Text style={styles.labeltext}>
                        {"Check Box Component:"}
                </Text>
                {this.state.usersChoice.map((item,index) =>
                    (<GCheckBoxComponent 
                    onPress={()=>this.checkBoxClicked(index, item.checked)}
                    selected = {item.checked}
                    options = {item.options}
                    key = {item.options}
                    />)
                )} 
                {/* <Button title={strings("common.back")} onPress={()=>Actions.pop()} />  */}
                
                <View style={{height:10}} />

                <Text style={styles.labeltext}>
                        {"Date Picker Component:"}
                </Text>

                <DatePicker
                    style={{width: 200}}
                    date={this.state.date}
                    mode="date"
                    placeholder="select date"
                    format="YYYY-MM-DD"
                    minDate="2019-09-03"
                    maxDate="2020-06-01"
                    confirmBtnText="Confirm"
                    cancelBtnText="Cancel"
                    customStyles={{
                    dateIcon: {
                        position: 'absolute',
                        left: 0,
                        top: 4,
                        marginLeft: 0
                    },
                    dateInput: {
                        marginLeft: 36
                    }
                    }}
                    onDateChange={(date) => {this.setState({date: date});}}
                />


<View style={{marginTop:'5%',marginBottom:'5%'}}>
                    <Text style={styles.labeltext}>
                            {"Icon Button Component:"}
                    </Text>
                    <GIconButton 
                        title="Icon Button"
                        icon="delete"
                        iconSize={20}
                        buttonStyle={styles.iconButtonStyle}
                        textStyle={styles.iconTextStyle}
                        onPress={() => this.iconButtonPressed('delete')}
                    />
</View>
                
                <View style={{marginTop:'5%',marginBottom:'5%'}}>
                    <Text style={styles.labeltext}>
                            {"Icon Button Component 2"}
                    </Text>
                    <GIconButton 
                        title="Icon Button 2"
                        icon="home"
                        iconSize={40}
                        iconRight
                       // onPress={() => this.iconButtonPressed('home')}
                    />
                </View>

                <View style={{marginTop:'5%',marginBottom:'5%'}}>
                    <Text style={styles.labeltext}>
                            {"Icon Button Component 3"}
                    </Text>
                    <GIconButton 
                        title="Icon Button 3"
                        icon="social-facebook"
                        iconType="foundation"
                        iconSize={30}
                        iconColor="blue"
                        iconRight
                        buttonStyle={{backgroundColor: "grey"}}
                        textStyle={{color:"white"}}
                       // onPress={() => this.iconButtonPressed('facebook')}
                    />
                </View>

                <View style={{marginTop:'5%',marginBottom:'5%'}}>
                    <Text style={styles.labeltext}>
                            {"Icon Button Component 4"}
                    </Text>
                    <GIconButton 
                        title="Icon Button 4"
                        icon="address-card"
                        iconType="font-awesome"
                        iconSize={20}
                        iconColor="orange"
                       // onPress={() => this.iconButtonPressed('address-card')}
                    />
                </View>

                <View style={{marginTop:'5%',marginBottom:'5%'}}>
                    <Text style={styles.labeltext}>
                            {"Icons in a column"}
                    </Text>
                    <GIcon 
                        name="home"
                        size={30}
                        color="blue"
                    />
                    <GIcon 
                        name="address-card"
                        type="font-awesome"
                        size={40}
                        color="green"
                    />
                </View>

                <View style={{marginTop:'5%',marginBottom:'5%'}}>
                    <Text style={styles.labeltext}>
                            {"Icons in a row"}
                    </Text>
                    <View style={{flexDirection: 'row', flex: 1}}>
                        <View>    
                            <GIcon 
                                name="home"
                                size={30}
                                color="blue"
                            />
                        </View>
                        <View>
                            <GIcon 
                                name="address-card"
                                type="font-awesome"
                                size={40}
                                color="green"
                            />
                        </View>
                        <View>
                            <GIcon 
                                name="social-facebook"
                                type="foundation"
                                size={40}
                                color="red"
                            />
                        </View>
                        <View>
                            <GIcon 
                                name="coffee"
                                type="feather"
                                size={20}
                                color="pink"
                            />
                        </View>
                        <View>
                            {/*<GIcon 
                                name="account-plus"
                                type="material-community"
                                size={40}
                                color="black"
                            />*/}
                        </View>
                    </View>
                </View>

                <View style={{marginTop:'5%',marginBottom:'5%'}}>
                    <Text style={styles.labeltext}>
                            {"Icon Buttons No Text"}
                    </Text>
                    <View style={{flexDirection: 'row', flex: 1}}>
                        <View> 
                            <TouchableOpacity >   
                                <GIcon 
                                    name="home"
                                    size={30}
                                    color="blue"
                                />
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity >   
                                <GIcon 
                                    name="address-card"
                                    type="font-awesome"
                                    size={40}
                                    color="green"
                                />
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity >   
                                <GIcon 
                                    name="social-facebook"
                                    type="foundation"
                                    size={40}
                                    color="red"
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                
                <View style={{height:10}} />

                <Text style={styles.labeltext}>
                        {"Counter Component:"}
                </Text>

                 <View style={{flex:1,flexDirection:'row',height:200}}>
                    <View style={{flex:0.2}}>
                        <GCounterComponent 
                        counterValue={this.state.diffCounter} 
                        onAddPress={()=> {
                            if(this.state.diffCounter >= 0){
                                this.setState({diffCounter:this.state.diffCounter+1});
                            }
                        }}
                            
                        onMinusPress={()=>{
                            if(this.state.diffCounter > 0){
                                this.setState({diffCounter:this.state.diffCounter-1});
                            }}}
                        />
                    </View> 
                    <View style={{flex:0.5,alignItems:'center',justifyContent:'center',height:100}}>
                    <Text>
                         {this.state.diffCounter}
                    </Text>
                    </View>
                 </View>
                
                </View>
            </ScrollView>
        );
    }
}

CommonUIComponent.propTypes = {
    register: PropTypes.bool,
    navigation : PropTypes.instanceOf(Object)
  };
  
  CommonUIComponent.defaultProps = {
 
  };

export default CommonUIComponent;
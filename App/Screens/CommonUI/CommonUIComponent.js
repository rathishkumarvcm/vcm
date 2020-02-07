import React, { Component } from 'react';
import { View, Text, ScrollView , TouchableOpacity} from 'react-native';
import PropTypes from "prop-types";
import styles from './styles';
import { GButtonComponent , GInputComponent , 
         GRadioButtonComponent, 
         GCheckBoxComponent, GCardTileComponent, GIconButton,
         GIcon
} from '../../CommonComponents';


const securityQuestions = [
    { index1 : 0, question:"What is your first school?"},
    { index1 : 1, question:"What is your first bike?"},
    { index1: 2, question:"What is your favourite place?"},
];



class CommonUIComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            radioButtonIndex : null,
            usersChoice : [
                {options : "Credit card payment",checked: true},
                {options : "Online Services",checked : false},
                {options : "Mobile banking",checked : true}
            ]
        };
    }

    throwException = ()=>{
        // console.log('baseUrl:-',Config);
        throw new Error('Custom Exception throw from home component');
    }

   //  newMethod(item) {
     //    return () => this.props.navigation.navigate(item.naviagteTo);
    

    radioButtonClicked = (index)=>{
        const {radioButtonIndex} = this.state;
        if(index!==radioButtonIndex){
            this.setState({ 
                radioButtonIndex : index,
            });
        }
    }

    

    /* checkBoxClicked = (indexPre,previousValue) => {
        const {usersChoice} = this.state;
       const tempArray = [];
        usersChoice.map((item,index) => {
            const temp = { ...item};
            if(index === indexPre){
                temp.checked = !previousValue;
            }
            tempArray.push(temp);
    });
        this.setState({ 
            usersChoice : tempArray
        });
    } */

    chartNavigate = ()=>{
        const {navigation} = this.props;
        navigation.navigate('charts');
    }

    goBack = ()=>{
        const {navigation} = this.props;
        navigation.goBack();
    }

    pdfFeatures = ()=>{
        const {navigation} = this.props;
        navigation.navigate('pdfFeatures');
    }

    listView = ()=>{
        const {navigation} = this.props;
        navigation.navigate('listView');
    }

    pagination = ()=>{
        const {navigation} = this.props;
        navigation.navigate('pagination');
    }
    
    navigatePdf = ()=>{
        const {navigation} = this.props;
        navigation.navigate('pdf');
    }

    navigateSearch = ()=>{
    const {navigation} = this.props;
    navigation.navigate('search');
    }
    
    render(){
        const {radioButtonIndex,usersChoice} = this.state;
        return (
            <ScrollView style={styles.flexCont}>
                <View style={styles.containerStyle}>
                <Text style={styles.labeltext}>Button Component:</Text>
                <GButtonComponent 
                // disabled
                buttonStyle={styles.buttonStyle} 
                textStyle={styles.buttonTextStyle}
                buttonText= "Charts"
                onPress={this.chartNavigate}
                />
                <GButtonComponent 
                buttonStyle={styles.buttonStyle} 
                textStyle={styles.buttonTextStyle}
                buttonText= "Back"
                onPress={this.goBack}
                />
                <GButtonComponent 
                buttonStyle={styles.buttonStyle} 
                textStyle={styles.buttonTextStyle}
                buttonText= "PDF POC"
                onPress={this.pdfFeatures}
                />

                <GButtonComponent 
                    buttonStyle={styles.buttonStyle} 
                    textStyle={styles.buttonTextStyle}
                    buttonText= "Flat List"
                    onPress={this.listView}
                />

                 <GButtonComponent 
                    buttonStyle={styles.buttonStyle} 
                    textStyle={styles.buttonTextStyle}
                    buttonText= "Pagination"
                    onPress={this.pagination}
                 />

                <GButtonComponent 
                    buttonStyle={styles.buttonStyle} 
                    textStyle={styles.buttonTextStyle}
                    buttonText= "Maps"
                    onPress={this.navigatePdf}
                /> 

                <GButtonComponent 
                    buttonStyle={styles.buttonStyle} 
                    textStyle={styles.buttonTextStyle}
                    buttonText= "Search"
                    onPress={this.navigateSearch}
                /> 

           

                
                <View>
                    <Text style={styles.labeltext}>
                        Text Input Component:
                    </Text>
                    <GInputComponent
                    // textInputStyle={}
                    secureTextEntry={false}
                    inputText=""
                    placeholder="Username"
                    placehlderTextColor="gray"
                    autoFocus
                    editable
                    maxLength={100}
                    //  value={"Need to clear"}
                    />
                </View>

            <View sstyle={styles.defaultMargin}>
                <GInputComponent
                    secureTextEntry
                    inputText=""
                    placeholder="Password"
                    placehlderTextColor="gray"
                    autoFocus
                    editable
                    maxLength={10}
                />
            </View>

           {/* <View>
            <Text style={styles.labeltext}>
                        {"Floating Label Component:"}
            </Text>
                <GFloatingInputComponent
                inputBorder={styles.initialfloatingBorder}
                labelText={"Username"}
                //  style={styles.floatStyle}
                value={"FloatLabel"}
                inputStyle={styles.floatInput}
                />
           </View> */}

            <View style={styles.defaultMargin}>
            <Text style={styles.labeltext}>
                        Numeric Input Field:
            </Text>
                <GInputComponent
                    secureTextEntry={false}
                    inputText=""
                    placeholder="Numeric Field"
                    placehlderTextColor="gray"
                    autoFocus
                    editable
                    maxLength={10}
                    keyboardType="numeric"
                    contextMenuHidden
                />
            </View>


            <Text style={styles.labeltext}>
                        Radio Button Component:
            </Text>
                {securityQuestions.map((item,index) => 
                    index === radioButtonIndex ? (
                    <GRadioButtonComponent 
                    // onPress={()=>this.radioButtonClicked(index)}
                    selected
                    questions = {item.question}
                    />
                  )
                    : (
                    <GRadioButtonComponent 
                    // onPress={()=>this.radioButtonClicked(index)}
                    selected = {false}
                    questions = {item.question}
                    />
                  )
                )}

                <Text style={styles.cardTile}>
                        Card Tile Component:
                </Text>
                <GCardTileComponent 
                title="Account Number" 
                details="0000001004067032" 
                />
                <GCardTileComponent title="Branch" details="Beasant Nagar" />
                <GCardTileComponent title="Name" details="VCM.com" />
                <GCardTileComponent title="Available Balance" details="246.31" />

                <Text style={styles.labeltext}>
                        Check Box Component:
                </Text>
                {usersChoice.map((item) =>
                    (
<GCheckBoxComponent 
                    // onPress={()=>this.checkBoxClicked(index, item.checked)}
                    selected = {item.checked}
                    options = {item.options}
                    key = {item.options}
/>
)
                )} 
                {/* <Button title={strings("common.back")} onPress={()=>Actions.pop()} />  */}
                
                <View />

                <Text style={styles.labeltext}>
                        Date Picker Component:
                </Text>

                


<View style={styles.defaultMargin}>
                    <Text style={styles.labeltext}>
                            Icon Button Component:
                    </Text>
                    <GIconButton 
                        title="Icon Button"
                        icon="delete"
                        iconSize={20}
                        buttonStyle={styles.iconButtonStyle}
                        textStyle={styles.iconTextStyle}
                        // onPress={() => this.iconButtonPressed('delete')}
                    />
</View>
                
                <View style={styles.defaultMargin}>
                    <Text style={styles.labeltext}>
                            Icon Button Component 2
                    </Text>
                    <GIconButton 
                        title="Icon Button 2"
                        icon="home"
                        iconSize={40}
                        iconRight
                       //  onPress={() => this.iconButtonPressed('home')}
                    />
                </View>

                <View style={styles.defaultMargin}>
                    <Text style={styles.labeltext}>
                            Icon Button Component 3
                    </Text>
                    <GIconButton 
                        title="Icon Button 3"
                        icon="social-facebook"
                        iconType="foundation"
                        iconSize={30}
                        iconColor="blue"
                        iconRight
                        buttonStyle={styles.iconButton}
                        textStyle={styles.iconWhite}
                       //  onPress={() => this.iconButtonPressed('facebook')}
                    />
                </View>

                <View style={styles.defaultMargin}>
                    <Text style={styles.labeltext}>
                            Icon Button Component 4
                    </Text>
                    <GIconButton 
                        title="Icon Button 4"
                        icon="address-card"
                        iconType="font-awesome"
                        iconSize={20}
                        iconColor="orange"
                       //  onPress={() => this.iconButtonPressed('address-card')}
                    />
                </View>

                <View style={styles.defaultMargin}>
                    <Text style={styles.labeltext}>
                            Icons in a column
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

                <View style={styles.defaultMargin}>
                    <Text style={styles.labeltext}>
                            Icons in a row
                    </Text>
                    <View style={styles.flexCont}>
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
                            {/* <GIcon 
                                name="account-plus"
                                type="material-community"
                                size={40}
                                color="black"
                            /> */}
                        </View>
                    </View>
                </View>

                <View style={styles.defaultMargin}>
                    <Text style={styles.labeltext}>
                            Icon Buttons No Text
                    </Text>
                    <View style={styles.flexCont}>
                        <View> 
                            <TouchableOpacity>   
                                <GIcon 
                                    name="home"
                                    size={30}
                                    color="blue"
                                />
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity>   
                                <GIcon 
                                    name="address-card"
                                    type="font-awesome"
                                    size={40}
                                    color="green"
                                />
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity>   
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

                
     
                </View>
            </ScrollView>
        );
    }
}

CommonUIComponent.propTypes = {
    navigation : PropTypes.instanceOf(Object)
  };
  
  CommonUIComponent.defaultProps = {
    navigation : {},
 
  };

export default CommonUIComponent;
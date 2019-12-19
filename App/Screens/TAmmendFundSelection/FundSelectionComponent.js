import React, { Component } from 'react';
import {  View, ScrollView,Text,FlatList,TouchableOpacity,Switch} from 'react-native';
import { GButtonComponent, GHeaderComponent, GFooterComponent,GIcon,GInputComponent} from '../../CommonComponents';
import { PageNumber } from '../../AppComponents';
import { styles } from './styles';
import PropTypes from 'prop-types';
import gblStrings from '../../Constants/GlobalStrings';
import { scaledHeight } from '../../Utils/Resolution';
let fundList=[]
export default class FundSelectionComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedShare:true,
            selectedPercentage:false,
            selected$:false,
            radioButton: false,
            selectedIndex: 0,
            selectedIndexSwitch: 0,
            switchValue:false,
            dollarVal:true,
            dollar:"",
            percentageVal:true,
            percentage:"",

            menu: [
                {
                    title: 'Order ID - PUR201820112',
                    data: { USS: 'USSPX VCM 501 INDEX FUND MEMBER CLASS SHARES.',
                            count:5,
                            Dateadded : '29/11/2019',
                            CurrentValue: '$1300',
                            TransactionType : 'Purchase',
                            PaymentMode:'NetBanking',           
                            OrderStatus:'Pending',
                            totalSHares:"2452",
                            worth:"5400"                    
                    }

                },
                {
                    title: 'Order ID - PUR201820113',
                    data: { USS: 'USSPX VCM 502 INDEX FUND MEMBER CLASS SHARES.',
                            count:5,
                            Dateadded : '28/11/2019',
                            CurrentValue: '$5602',
                            TransactionType : 'Liquidation',
                            PaymentMode:'Wire Transfer',           
                            OrderStatus:'Pending',
                            totalSHares:"2452",
                            worth:"5400"               
                    }
                },
                {
                    title: 'Order ID - PUR201820114',
                    data: { USS: 'USSPX VCM 503 INDEX FUND MEMBER CLASS SHARES.',
                            count:5,
                            Dateadded : '27/11/2019',
                            CurrentValue: '$2062',
                            TransactionType : 'Exchange',
                            PaymentMode:'In Order',           
                            OrderStatus:'Pending',
                            totalSHares:"2452",
                            worth:"5400"                     
                    }
                },
                
                
                
            ]
        };
    }


     onClickSell = (item,index) =>
    {          
        this.setState({
            selectedIndex: index
        })
       
       this.setState({selectedPercentage:false,selected$:false,selectedShare:true})
    }
    
    onClick$ = (item,index) =>
    {   
        this.setState({
            selectedIndex: index
        })
       
        this.setState({selectedPercentage:false,selectedShare:false,selected$:true})
   
    }
    onClickPercentage = (item,index) =>
    { 
        this.setState({
            selectedIndex: index
        })
        //if(this.props.navigation.getParam('index') === index)
        this.setState({selectedShare:false,selected$:false,selectedPercentage:true})
    
    }

    navigateAmmendPageTwo = () => this.props.navigation.navigate('FundWithdrawlComponent');

    goBack = () => {
        this.props.navigation.goBack();
    }
    
    toggleSwitch = (value) => {
       
        this.setState({switchValue: value})
       
     }
     onClickSelectAccount = (item, index) => {
        this.setState({
            selectedIndexSwitch: index
        })
    }

    /*renderFundItem = () => ( {item,index }) =>{
        console.log("state Update renderFUndItem"+this.state.selectedShare,this.state.selected$,this.state.selectedPercentage,index);
        return(
        <View style={{borderWidth:0.5,borderColor:"#5D83AE99"}}>
        <View style={[styles.viewRow]}>
        <Text style={[styles.lblTxtInner,{width:"60%"}]}>{item.data.USS}</Text>
        <Switch
          style={{marginTop:30}}
          onValueChange = {this.toggleSwitch}
          value = {this.state.switchValue}/>
        </View>
        <Text style={styles.lblLine} />
        <View style={[styles.viewRow,{backgroundColor:"#EFECEC",padding:"3%"}]}>
        <View>
        <Text style={[styles.lblTxtInner]}>Total Shares</Text>
        <Text style={[styles.lblTxtSmall]}>{item.data.totalSHares}</Text>
        </View>
        <View style={{marginLeft:"15%"}}>
        <Text style={[styles.lblTxtInner]}>Worth</Text>
        <Text style={[styles.lblTxtSmall]}>$ {item.data.worth} (Approx). </Text>
        </View>
        </View>
        <TouchableOpacity style={[styles.radioButtonLayout]} onPress={this.onClickSell}>
        {     
              this.state.selectedShare ?
              <View style={styles.outerCircle}>
               <View style={styles.innerCircle} />
               </View>
               
                :  <View style={styles.outerCircle}/>
               }
        
        <View style={[styles.questionsSection]}>
            <Text style={styles.questionsText}>
               Sell All Shares
            </Text>
        </View>
       </TouchableOpacity>
       <TouchableOpacity style={[styles.radioButtonLayout]} onPress={this.onClick$}>
       
        {this.state.selected$ ?
              <View style={styles.outerCircle}>
               <View style={styles.innerCircle} />
               </View>
               
                :  <View style={styles.outerCircle}/>}
              
        <View style={[styles.questionsSection]}>
            <Text style={styles.questionsText}>
             $
            </Text>
        </View>
       </TouchableOpacity>
       <TouchableOpacity style={[styles.radioButtonLayout]} onPress={this.onClickPercentage}>
       
        {this.state.selectedPercentage ?
              <View style={styles.outerCircle}>
               <View style={styles.innerCircle} />
               </View>
               
                :  <View style={styles.outerCircle}/>}
        
        <View style={[styles.questionsSection]}>
            <Text style={styles.questionsText}>
              %
            </Text>
        </View>
        </TouchableOpacity>
        
        </View>
)};*/

renderFundList= () => ({ item }) =>{
    return(
        <View style={[styles.signInView,{backgroundColor:"white"}]}>
        <Text style={styles.signIntext}>{item.data.USS}</Text>
        <Text style={[styles.lblTxtSmall,{width:"100%",}]}>Selling Amount</Text>
        <Text style={[styles.lblTxtInner,{width:"100%",}]}>$ {item.data.worth}</Text>
        </View>
    )};
    generateKeyExtractor = (item) => item.tittle;

    FlatListItemSeparator = () => {
        return (
            <View
                style={{
                    height: 20,
                    width: 310,
                    marginLeft: 50,
                    marginRight: 30,
                    //backgroundColor: 'black',
                }}
            />
        );
    }
    FlatListItemSeparatorlist = () => {
        return (
            <View
                style={styles.lblLine}
            />
        );
    }

    onChangeText = (stateKey, val) => text => {
        console.log("onChangeText:::>");
        this.setState({
            [stateKey]: text,
            [val]: (!this.isEmpty(text)),
        });
    }


    render() {
        let currentPage = 1;
        let pageName = '1 - Fund Selection';
        console.log("state Update render"+this.state.selectedShare,this.state.selected$,this.state.selectedPercentage);
        return (
            <View style={styles.container}>
            <GHeaderComponent navigation={this.props.navigation} />
            <ScrollView  style={{ flex: 0.85 }}>
            <View style={styles.signInView} >
            {/*<Text style={styles.signIntext}>
            Selected Mutual Funds
            </Text>
            <Text style={styles.lblLine} />
            { console.log("data",this.state.menu)}
            <View style={{backgroundColor:"white"}}>
            <FlatList
          
                            data={this.state.menu}
                            renderItem={this.renderFundList()}
                            extraData={this.state.flatListUpdate}
                            //keyExtractor={this.generateKeyExtractor}
                            ItemSeparatorComponent={this.FlatListItemSeparatorlist}

            />
        </View>*/}
                <Text style={styles.signIntext}>
                Ammend
                </Text>
                <Text style={styles.lblLine} />
                <PageNumber currentPage={currentPage} pageName={pageName} totalCount={3}/>
                <View style={{}}>
                        <View style={styles.accountFlex}>
                            <Text style={styles.accountNumberText}>Account Name: {this.props.navigation.getParam('data').accountName}</Text>
                            <Text style={styles.accountNumberText}>Account Number: {this.props.navigation.getParam('data').accountNumber}</Text>
                        </View>
                </View>
            <Text style={styles.signIntext}>
                List of Funds 
                </Text>
                <Text style={styles.lblLine} />
                { console.log("data---funds",this.props.navigation.getParam('fundsList'))}
                <FlatList
                                //data={this.props.navigation.getParam('data')}
                                //renderItem={this.renderFundItem({item,index})}
                                data={this.props.navigation.getParam('data').funds}
                                renderItem={({ item, index }) => {
                                    return(
                                        <View style={{borderWidth:0.5,borderColor:"#5D83AE99"}}>
        <View style={[styles.viewRow]}>
        <Text style={[styles.lblTxtInner,{width:"60%"}]}>{item.name}</Text>
        {/*<Switch
          style={{marginLeft:"20%",marginTop:"3%"}}
          onValueChange = {this.toggleSwitch}
          value = {this.state.switchValue}/>
          {this.state.selectedIndexSwitch == index ?<View style={{ backgroundColor: 'white', width: "15%", marginTop: "5%", alignItems: 'flex-start', justifyContent: 'flex-end', flexDirection: 'row', marginRight: "6%" }} onTouchStart={() => this.onClickSelectAccount(item, index)}>
                                                    <View style={{ backgroundColor: '#444444', borderColor: '#707070', borderWidth: scaledHeight(1), width: scaledHeight(45), height: scaledHeight(25), borderRadius: 15, marginTop: scaledHeight(2) }} />
                                                    <View style={{ backgroundColor: '#FFFFFF', width: scaledHeight(30), borderColor: '#707070', borderWidth: scaledHeight(1), height: scaledHeight(30), borderRadius: scaledHeight(15), marginLeft: "-60%" }} />
                                                </View>:<View style={{backgroundColor: 'white', width: "15%", marginTop: "5%",alignItems: 'flex-start', justifyContent: 'flex-end', flexDirection: 'row', marginRight: "6%" }} onTouchStart={() => this.onClickSelectAccount(item, index)}>
                                                    <View style={{ width: scaledHeight(30), height: scaledHeight(30),borderRadius: scaledHeight(15), borderColor: '#707070', borderWidth: scaledHeight(1), backgroundColor: '#FFFFFF', marginLeft: "0%", zIndex: 3 }}></View>
                                                    <View style={{ backgroundColor: '#DBDBDB', borderColor: '#707070', borderWidth: scaledHeight(1), width: scaledHeight(45), height: scaledHeight(25),  marginTop: scaledHeight(2),borderRadius: 15, marginLeft: "-60%" }} />

        </View>}*/}
        </View>
        
        <Text style={styles.lblLine} />
        <View style={[styles.viewRow,{backgroundColor:"#EFECEC",padding:"3%"}]}>
        <View>
        <Text style={[styles.lblTxtInner]}>Total Shares</Text>
        <Text style={[styles.lblTxtSmall]}>{item.totalShares}</Text>
        </View>
        <View style={{marginLeft:"15%"}}>
        <Text style={[styles.lblTxtInner]}>Worth</Text>
        <Text style={[styles.lblTxtSmall]}>{item.worth}</Text>
        </View>
        </View>
        <TouchableOpacity style={[styles.radioButtonLayout]} onPress={() => this.onClickSell(item, index)}>
        {     
              this.state.selectedShare ?
              <View style={styles.outerCircle}>
               {this.state.selectedIndex === index ?
               <View style={styles.innerCircle} />:null}
               </View>
               
                :  <View style={styles.outerCircle}/>
               }
        
        <View style={[styles.questionsSection]}>
            <Text style={styles.questionsText}>
               Sell All Shares
            </Text>
        </View>
       </TouchableOpacity>
       <TouchableOpacity style={[styles.radioButtonLayout]} onPress={() => this.onClick$(item, index)}>
       
        {this.state.selected$ ?
              <View style={styles.outerCircle}>
               {this.state.selectedIndex === index ?
               <View style={styles.innerCircle} />:null}
               </View>
               
                :  <View style={styles.outerCircle}/>}
              
        <View style={[styles.questionsSection]}>
            <Text style={styles.questionsText}>
             $
            </Text>
            <GInputComponent
                               propInputStyle={styles.userIDTextBox}
                               value={this.state.dollar}
                               onChangeText={this.onChangeText("dollar", "dollarVal")}
                               errorFlag={!this.state.dollarVal}
                               errorText={gblStrings.userManagement.inputError}
            />
        </View>
       </TouchableOpacity>
       <TouchableOpacity style={[styles.radioButtonLayout]} onPress={() => this.onClickPercentage(item, index)}>
       
        {this.state.selectedPercentage ?
              <View style={styles.outerCircle}>
                {this.state.selectedIndex === index ?
               <View style={styles.innerCircle} />:null}
               </View>
               
                :  <View style={styles.outerCircle}/>}
        
        <View style={[styles.questionsSection]}>
            <Text style={styles.questionsText}>
              %
            </Text>
            <GInputComponent
                               propInputStyle={styles.userIDTextBox}
                               value={this.state.percentage}
                               onChangeText={this.onChangeText("percentage", "percentageVal")}
                               errorFlag={!this.state.dollarVal}
                               errorText={gblStrings.userManagement.inputError}
            />
        </View>
        </TouchableOpacity>
        
        </View>
                                    )
                                }}
                                extraData={this.state}
                                keyExtractor={(item, index) => index.toString()}
                                ItemSeparatorComponent={this.FlatListItemSeparator}

                />
                </View>
                <GButtonComponent
                buttonStyle={styles.cancelButton}
                buttonText={gblStrings.common.cancel}
                textStyle={styles.cancelButtonText}
                onPress={this.goBack}
                />
                <GButtonComponent
                buttonStyle={styles.saveButton}
                buttonText="Next"
                textStyle={styles.saveButtonText}
                onPress={this.navigateAmmendPageTwo}
                />
                <GFooterComponent />
            </ScrollView>
            </View>
        );
    }
}
FundSelectionComponent.propTypes = {

    navigation: PropTypes.instanceOf(Object)
};

FundSelectionComponent.defaultProps = {

};
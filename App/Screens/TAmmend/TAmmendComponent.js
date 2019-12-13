import React, { Component } from 'react';
import {  View, ScrollView,Text ,TouchableOpacity} from 'react-native';
import {  GHeaderComponent, GFooterComponent ,GIcon,GDropDownComponent} from '../../CommonComponents';
import Accordian from './Accordian';
import { styles } from './styles';
import PropTypes from 'prop-types';


let statusData = [
    {
        id: '1',
        title: 'All',
    },
    {
        id: '2',
        title: 'Pending',
    }
];
export default class TAmmendComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedIndex: '',
            selectedTitle: '',
            selectedValue: '',
            dropDown:false,
            dropDownValue:'All',
            pendingItems:[],
            menu: [
                {   key:'1',
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
                    key:'2',
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
                {  key:'3',
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
                { 
                    key:'4',
                    title: 'Order ID - PUR201820115',
                    data: { USS: 'USSPX VCM 504 INDEX FUND MEMBER CLASS SHARES.',
                            count:5,
                            Dateadded : '27/11/2019',
                            CurrentValue: '$2062',
                            TransactionType : 'Exchange',
                            PaymentMode:'In Order',           
                            OrderStatus:'Completed',
                            totalSHares:"2452",
                            worth:"5400"

                     
                    }
                },
                {
                    key:'5',
                    title: 'Order ID - PUR201820116',
                    data: { USS: 'USSPX VCM 505 INDEX FUND MEMBER CLASS SHARES.',
                            count:5,
                            Dateadded : '27/11/2019',
                            CurrentValue: '$2064',
                            TransactionType : 'Exchange',
                            PaymentMode:'In Order',           
                            OrderStatus:'Pending',
                            totalSHares:"2456",
                            worth:"5400"

                     
                    }
                }
                
                
                
            ]
        };
    }

    componentDidMount()
    {
        this.filterPendingItems();
    }

    filterPendingItems = () => {
        const items = [];
        for (item of this.state.menu) {
            if(item.data.OrderStatus === "Pending")
            {
            items.push(item);
            }
        }
        this.setState({pendingItems:items});
    }

    selectIndex = (item,title,index) => {
        console.log('parent trigger', title,index);
        this.setState({
            selectedTitle: title,
            selectedValue: item.CurrentValue,
            selectedIndex: index
        });
    }

    selectDropdown = () => {
        this.setState({
            dropDown: !this.state.dropDown
        });
    }

    selectedDropDownValue = (value) => {
        this.setState({
            dropDownValue: value,
            dropDown: false
        });
    }

    render() {
        return (
            <View style={styles.container}>
            <GHeaderComponent navigation={this.props.navigation} />
            <ScrollView style={{ flex: 0.85 }}>
            <View style={styles.signInView} >
            <View style={{flexDirection:'row'}}> 
            <Text style={styles.signIntext}>
                Transactions
            </Text>
            <Text style={styles.sorttext}>
                        Sort By :
                        </Text>
            <TouchableOpacity >
            
            <View style={{flexDirection:'row',marginTop:"5%",marginLeft:"10%"}}> 
                        <Text style={{}}>Pending</Text>
                    <GIcon
                            name="caretdown"
                            type="antdesign"
                            size={15}
                            color="#707070"
                        />
                        
                       {/* <GDropDownComponent
                            //propInputStyle={{width:"100%"}}
                                textInputStyle={styles.dropdownTextInput}
                                //dropDownName={gblStrings.userManagement.ques3}
                                data={statusData}
                                placeholder={gblStrings.common.select}
                                itemToDisplay={"value"}
                                changeState={this.selectDropdown}
                                showDropDown={this.state.dropDown}
                                dropDownValue={this.state.dropDownValue}
                                selectedDropDownValue={this.selectedDropDownValue}
                                dropDownPostition={{ position: 'absolute', top: scaledHeight(500),width:"100%",marginLeft:"0%",marginRight:"0%" }}
                       />   */} 
                        
                        </View>
            </TouchableOpacity>
            </View>
                <Text style={styles.lblLine} />
                <View style={styles.container}>
                    {this.renderAccordians()}
            </View>
            </View>
            </ScrollView>
            </View>
        );
    }

    navigatetoFundSelection = () =>
    {
       // this.props.navigation.navigate('FundSelectionComponent');
       this.props.navigation.navigate('FundSelectionComponent',{index:this.state.selectedIndex,data:this.state.pendingItems});
    }
    renderAccordians = () => {
        const items = [];
        for (item of this.state.pendingItems) {
            items.push(
                <Accordian
                    title={item.title}
                    index={item.key}
                    data={item.data}
                    selectDataIndex={this.selectIndex}
                    selectedIndex={this.state.selectedIndex}
                    selectedTitle={this.state.selectedTitle}
                    selectedValue={this.state.selectedValue}
                    navigate={this.navigatetoFundSelection}
                />
            );
        }
        return items;
        
    }
}

TAmmendComponent.propTypes = {
    navigation: PropTypes.instanceOf(Object),
    initialState: PropTypes.instanceOf(Object)
};

TAmmendComponent.defaultProps = {
    
};

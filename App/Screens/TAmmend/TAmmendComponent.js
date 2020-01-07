import React, { Component } from 'react';
import { View, ScrollView,Text } from 'react-native';
import PropTypes from 'prop-types';
import { GHeaderComponent,GButtonComponent} from '../../CommonComponents';
import Accordian from './Accordian';
import styles from './styles';


let menuList=[];
//  let selectedFunds =[]
export default class TAmmendComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedIndex: '',
            selectedTitle: '',
            selectedValue: '',
            pendingItems:[],
            data:{}
        };
    }

    componentDidMount()
    {
        
        if(this.props && this.props.amendReducerData && this.props.amendReducerData.menu)
        {
            //  console.log("---->menu",this.props.amendReducerData.menu)
           //  this.setState({ menu : this.props.amendReducerData.menu}) ;
           menuList = this.props.amendReducerData.menu;
        }
        //  console.log("state menu",this.state.menuList);
        this.filterPendingItems();
    }

    componentDidUpdate(prevProps) {
        if (prevProps !== this.props) {
            if (this.props && this.props.amendReducerData && this.props.amendReducerData.menu) {
                menuList = this.props.amendReducerData.menu;
            }
            this.filterPendingItems();
        }
    }

    filterPendingItems = () => {
        const items = [];
        for (item of menuList) {
            if(item.data.OrderStatus === "Pending")
            {
            items.push(item);
            }
        }
        this.setState({pendingItems:items});
    }

    selectIndex = (item,title,index) => {
        //  console.log('parent trigger', title,index);
        this.setState({
            selectedTitle: title,
            selectedValue: item.selectedAccountData.currentValue,
            selectedIndex: index,
            data:item
            
        });
        //  selectedFunds= item.funds;
        
    }
    
    render() {
        return (
            <View style={styles.container}>
            <GHeaderComponent navigation={this.props.navigation} />
            <ScrollView style={styles.scrollViewFlex}>
            <View style={styles.signInView}>
            <View style={styles.rowFlex}> 
            <Text style={styles.signIntext}>
                Transactions
            </Text>
           { /* <Text style={styles.sorttext}>
                        Sort By :
                        </Text> */}
                        { /*  <Text style={{}}>Pending</Text>
                    <GIcon
                            name="caretdown"
                            type="antdesign"
                            size={15}
                            color="#707070"
                        /> */}
                         <GButtonComponent
                                buttonStyle={styles.filterButton}
                                buttonText="Filter"
                                textStyle={styles.filterButtonText}
                                //  onPress={this.hideModal}
                         />
                       
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
       if(this.state.data.TransactionType === "Liquidation")
       {
       this.props.navigation.navigate('LiquidationPageTwo',
       {index:this.state.selectedIndex,data:this.state.data,ammend:true});
       }
       if(this.state.data.TransactionType === "Purchase")
       {
       this.props.navigation.navigate('purchaseScreenTwo',
       {index:this.state.selectedIndex,data:this.state.data,ammend:true});
       }
      /* if(this.state.data.TransactionType=="Exchange")
       {
       this.props.navigation.navigate('LiquidationPageTwo',
       {index:this.state.selectedIndex,data:this.state.data,ammend:true});
       } */
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
    amendReducerData:PropTypes.instanceOf(Object),
};

TAmmendComponent.defaultProps = {
    navigation:{},
    amendReducerData:{}
};

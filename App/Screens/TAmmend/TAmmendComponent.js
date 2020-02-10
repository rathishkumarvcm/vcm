import React, { Component } from 'react';
import { View, ScrollView, Text } from 'react-native';
import PropTypes from 'prop-types';
import { GHeaderComponent, GButtonComponent } from '../../CommonComponents';
import Accordian from './Accordian';
import styles from './styles';


let menuList = [];

//  let selectedFunds =[]
export default class TAmmendComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedIndex: '',
            selectedTitle: '',
            selectedValue: '',
            pendingItems: [],
            data: {},
            showMsg: false,
        };
    }

    componentDidMount() {
        const { amendReducerData } = this.props;
        if (this.props && amendReducerData && amendReducerData.menu) {
            //  console.log("---->menu",this.props.amendReducerData.menu)
            //  this.setState({ menu : this.props.amendReducerData.menu}) ;
            menuList = amendReducerData.menu;
        }
        //  console.log("state menu",this.state.menuList);
        this.filterPendingItems();
        this.getPendingTransactions();
    }

    componentDidUpdate(prevProps) {
        const { amendReducerData } = this.props;
        if (prevProps !== this.props) {
            if (this.props && amendReducerData && amendReducerData.menu) {
                menuList = amendReducerData.menu;
            }
            this.filterPendingItems();
            this.notificationView();
        }
    }

    getPendingTransactions = () => {
        // console.log("in component");
        const { getTransactionData } = this.props;
        const payload = {
            "customerId": "123",
            "companyNumber": "591",
            "fundNumber": "330",
            "accountNumber": "3000000107"
        };
        getTransactionData(payload);
        return 0;
    }

    filterPendingItems = () => {
        let items = [];
        /* for (item of menuList) {
            if (item.data.OrderStatus === "Pending") {
                items.push(item);
            }
        } */

        items = menuList.filter((item) => item.data.OrderStatus === 'Pending' ? item : '');
        this.setState({ pendingItems: items });
    }

    selectIndex = (item, title, index) => {
        //  console.log('parent trigger', title,index);
        this.setState({
            selectedTitle: title,
            selectedValue: item.selectedAccountData.currentValue,
            selectedIndex: index,
            data: item

        });
        //  selectedFunds= item.funds;

    }



    navigatetoFundSelection = () => {

        const { data, selectedIndex } = this.state;

        const { navigation, saveData } = this.props;
        if (data.TransactionType === "Liquidation" || data.TransactionType === "Liquidation Amended") {
            navigation.navigate('LiquidationPageTwo',
                { index: selectedIndex, data, ammend: true });
        }
        if (data.TransactionType === "Purchase" || data.TransactionType === "Purchase Amended") {
            const payloadData = {
                isAmend: true,
                amendObj: data,
                amendIndex: selectedIndex
            };
            saveData(payloadData);
            navigation.navigate('purchaseScreenTwo',
                { index: selectedIndex, data, ammend: true });
        }
        if (data.TransactionType === "Exchange" || data.TransactionType === "Exchange Amended") {
            const payloadData = {
                isAmend: true,
                amendObj: data,
                amendIndex: selectedIndex
            };
            saveData(payloadData);
            navigation.navigate('exchangeScreenTwo',
                { index: selectedIndex, data, ammend: true });
        }
    }

    renderAccordians = () => {
        const items = [];
        const { pendingItems, selectedIndex, selectedTitle, selectedValue } = this.state;
        const len = pendingItems.length;
        for (let i = 0; i < len; i += 1) {
            const item=pendingItems[parseInt(i,10)];
            items.push(
                <Accordian
                    title={item && item.title}
                    index={item.key}
                    data={item.data}
                    selectDataIndex={this.selectIndex}
                    selectedIndex={selectedIndex}
                    selectedTitle={selectedTitle}
                    selectedValue={selectedValue}
                    navigate={this.navigatetoFundSelection}
                />
            );
        }
        // for (item of pendingItems) {
        //     items.push(
        //         <Accordian
        //             title={item && item.title}
        //             index={item.key}
        //             data={item.data}
        //             selectDataIndex={this.selectIndex}
        //             selectedIndex={selectedIndex}
        //             selectedTitle={selectedTitle}
        //             selectedValue={selectedValue}
        //             navigate={this.navigatetoFundSelection}
        //         />
        //     );
        // }
        return items;

    }

    notificationView = () => {
        const { navigation } = this.props;
        if (navigation.getParam('amend')) {
            this.setState({ showMsg: true });
            setTimeout(() => {
                this.setState({ showMsg: false });

            }, 5000);
        }
    }

    render() {

        const { navigation } = this.props;
        const { showMsg } = this.state;
        // const amend = navigation.getParam('amend');
        // console.log("insideamend",navigation.getParam('amend'));
        const orderId = navigation.getParam('orderId');
        const transactionType = navigation.getParam('transactionType');
        return (

            <View style={styles.container}>
                <GHeaderComponent navigation={navigation} />
                <ScrollView style={styles.scrollViewFlex}>
                    <View style={styles.signInView}>
                        {showMsg ? (
                            <View style={styles.transactionStatusFlex}>
                                <View style={styles.transactionStatusMessageFlex}>
                                    <Text style={styles.transactionStatusText}>The {transactionType} Transaction <Text style={styles.transactionStatusTextBold}>{orderId}</Text> is been successfully Amended.</Text>
                                </View>
                            </View>
                        ) : null}
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

}

TAmmendComponent.propTypes = {
    navigation: PropTypes.instanceOf(Object),
    amendReducerData: PropTypes.instanceOf(Object),
    getTransactionData: PropTypes.func,
    saveData: PropTypes.func
};

TAmmendComponent.defaultProps = {
    navigation: {},
    amendReducerData: {},
    getTransactionData: () => { },
    saveData: () => { }
};

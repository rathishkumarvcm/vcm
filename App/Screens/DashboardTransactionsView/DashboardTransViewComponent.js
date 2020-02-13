import React, { Component } from 'react';
import { Text, View, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import { GButtonComponent, GIcon } from '../../CommonComponents';
import gblStrings from '../../Constants/GlobalStrings';


const sortingOptions = [{ id: "1", option: "Transaction Description" }, { id: "2", option: "Trade Date" }, { id: "3", option: "Price" }, { id: "4", option: "Value" }, { id: "5", option: "Transaction Status" }];

class DashboardTransViewComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showOperations: false,
            showSortOptions: false,
            transactions: [],
        };
    }

    componentDidMount(){
        this.getTransactionsList();
    }

    getTransactionsList=()=>{
        const { dashboardTransViewData }= this.props;
        this.setState({
            transactions:dashboardTransViewData.transactions
        });
    }

    splitDate = (date) => {
        const parts = date.split('/');
        return new Date(parts[2], parts[1], parts[0]);
    }

    sortByDate = (array, key) => {
        return array.sort((a, b) => {
            const x = a[`${key}`];
            const y = b[`${key}`];
            return this.splitDate(x).getTime() - this.splitDate(y).getTime();
        });
    }

    sortByKey = (array, key) => {
        return array.sort((a, b) => {
            const x = a[`${key}`];
            const y = b[`${key}`];
            // return ((x < y) ? -1 : ((x > y) ? 1 : 0));
            if (x < y) {
                return -1;
            } if (x > y) {
                return 1;
            }
            return 0;
        });
    }

    sortByPrice = (array, key) => {
        for (let i = 0; i < array.length; i += 1) {
            array[parseInt(i, 0)].price = Number(array[parseInt(i, 0)].price.replace(/(^\$|,)/g, ''));
        }
        return array.sort((a, b) => {
            const x = a[`${key}`];
            const y = b[`${key}`];
            if (x < y) {
                return -1;
            } if (x > y) {
                return 1;
            }
            return 0;
        });
    }

    sortByValue = (array, key) => {
        for (let i = 0; i < array.length; i += 1) {
            array[parseInt(i, 0)].value = Number(array[parseInt(i, 0)].value.replace(/(^\$|,)/g, ''));
        }
        return array.sort((a, b) => {
            const x = a[`${key}`];
            const y = b[`${key}`];
            if (x < y) {
                return -1;
            } if (x > y) {
                return 1;
            }
            return 0;
        });
    }

    onClickSortByTransactionStatus = (item) => () => {
        const { transactions, showSortOptions } = this.state;
        let sortedList = [];
        if (item.option === "Transaction Description") {
            sortedList = this.sortByKey(transactions, "transactionDesc");
        } else if (item.option === "Trade Date") {
            sortedList = this.sortByDate(transactions, "tradeDate");
        } else if (item.option === "Price") {
            sortedList = this.sortByPrice(transactions, "price");
            for (let i = 0; i < sortedList.length; i += 1) {
                sortedList[parseInt(i, 0)].price = gblStrings.common.dollar + (parseInt((sortedList[parseInt(i, 0)].price), 0).toFixed(2)).toLocaleString();
            }
        } else if (item.option === "Value") {
            sortedList = this.sortByValue(transactions, "value");
            for (let i = 0; i < sortedList.length; i += 1) {
                sortedList[parseInt(i, 0)].value = gblStrings.common.dollar + (parseInt((sortedList[parseInt(i, 0)].value), 0).toFixed(2)).toLocaleString();
            }
        } else {
            sortedList = this.sortByKey(transactions, "transactionStatus");
        }
        this.setState({
            transactions: sortedList,
            showSortOptions: !showSortOptions
        });
    }

    onClickEllipsis = () => () => {
        this.setState(prevState => ({
            showOperations: !prevState.showOperations,
        }));
    }

    onPressSortBy = () => {
        this.setState(prevState => ({
            showSortOptions: !prevState.showSortOptions,
        }));
    }

    renderSortingoptions = ({ item }) => {
        return (
            <TouchableOpacity onPress={this.onClickSortByTransactionStatus(item)}>
                <Text style={styles.greyTextRegular16px}>{item.option}</Text>
            </TouchableOpacity>
        );
    }

    generateSortingOptions = (x) => x.id;

    generateKeyTransactions = (x) => x.symbol;


    renderTransactionList = ({ item }) => {
        const { showOperations } = this.state;
        let option1 = "";
        let option2 = "";
        if (item.transactionStatus === "Confirmed") {
            option1 = "Exchange IN";
            option2 = "Exchange Out";
        } else {
            option1 = "Amend";
            option2 = "Cancel";
        }
        return (
            <View style={styles.transactionCard}>
                <View style={styles.row}>
                    <TouchableOpacity style={styles.ellipseImage} onPress={this.onClickEllipsis(item)}>
                        <GIcon
                            name="ellipsis-v"
                            type="font-awesome"
                            size={20}
                            color="black"
                        />
                    </TouchableOpacity>
                </View>

                {(showOperations) ?
                    (
                        <View style={styles.shadowView}>
                            <TouchableOpacity>
                                <Text style={styles.blackTextBold16px}>{option1}</Text>
                            </TouchableOpacity>
                            <Text style={styles.lblLine} />
                            <TouchableOpacity>
                                <Text style={styles.blackTextBold16px}>{option2}</Text>
                            </TouchableOpacity>
                        </View>
                    ) : null
                }

                <View>
                    <Text style={styles.blackTextBold16px}>Symbol</Text>
                    <Text style={styles.greyTextRegular16px}>{item.symbol}</Text>
                </View>
                <View>
                    <Text style={styles.blackTextBold16px}>Fund Name</Text>
                    <Text style={styles.greyTextRegular16px}>{item.fundName}</Text>
                </View>
                <View>
                    <Text style={styles.blackTextBold16px}>Transaction Description</Text>
                    <Text style={styles.greyTextRegular16px}>{item.transactionDesc}</Text>
                </View>
                <View>
                    <Text style={styles.blackTextBold16px}>Trade Date</Text>
                    <Text style={styles.greyTextRegular16px}>{item.tradeDate}</Text>
                </View>
                <View>
                    <Text style={styles.blackTextBold16px}>Quantity</Text>
                    <Text style={styles.greyTextRegular16px}>{item.quantity}</Text>
                </View>
                <View>
                    <Text style={styles.blackTextBold16px}>Price</Text>
                    <Text style={styles.greyTextRegular16px}>{item.price}</Text>
                </View>
                <View>
                    <Text style={styles.blackTextBold16px}>Value</Text>
                    <Text style={styles.greyTextRegular16px}>{item.value}</Text>
                </View>
                <View>
                    <Text style={styles.blackTextBold16px}>Cumulative Shares</Text>
                    <Text style={styles.greyTextRegular16px}>{item.cumulativeShares}</Text>
                </View>
                <View>
                    <Text style={styles.blackTextBold16px}>Transaction Status</Text>
                    <Text style={styles.greyTextRegular16px}>{item.transactionStatus}</Text>
                </View>
            </View>
        );
    }


    render() {
        const { showSortOptions, transactions } = this.state;
        return (
            <View style={styles.container}>
                <ScrollView style={styles.mainFlex}>
                    <View style={styles.headerTextView}>
                        <View style={styles.horizontalFlex}>
                            <Text style={styles.titleHeaderTextStyle}>Transactions View</Text>
                            <GButtonComponent
                                buttonStyle={styles.filterButton}
                                buttonText="Sort By"
                                textStyle={styles.filterButtonText}
                                onPress={this.onPressSortBy}
                            />
                        </View>

                        <View style={styles.line} />
                    </View>

                    {(showSortOptions) ? (
                        <View style={styles.sortOptionsFlex}>
                            <FlatList
                                data={sortingOptions}
                                renderItem={this.renderSortingoptions}
                                keyExtractor={this.generateSortingOptions}
                            />
                        </View>
                    ) : null}

                    <FlatList
                        data={transactions}
                        renderItem={this.renderTransactionList}
                        keyExtractor={this.generateKeyTransactions}
                        extraData={this.state}
                    />

                </ScrollView>
            </View>
        );
    }
}


DashboardTransViewComponent.propTypes = {
    // navigation: PropTypes.instanceOf(Object),
    dashboardTransViewData: PropTypes.instanceOf(Object),
};

DashboardTransViewComponent.defaultProps = {
    // navigation: {},
    dashboardTransViewData: {},
};

export default DashboardTransViewComponent;

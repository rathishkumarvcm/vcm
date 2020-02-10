/* eslint-disable react/no-multi-comp */
import React, { Component } from 'react';
import { Text, View, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { GHeaderComponent, } from '../../CommonComponents';
import styles from './styles';

// import gblStrings from '../../Constants/GlobalStrings';


let dashboardData = [];

class RMDDashboardComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            setUpRd: false,
            modifyRd: false,
           // enableMasterLevel: false,
           // enableAccountLevel: false,

        };
    }

    componentDidMount() {
        // console.log("---->data");
        const { rmdReducerData } = this.props;
        if (rmdReducerData && rmdReducerData.data) {
            // console.log("---->data",rmdReducerData.data);
            //  this.setState({ menu : this.props.amendReducerData.menu}) ;
            dashboardData = rmdReducerData.data;
        }
    }

    generateKeyExtractor = (item) => item.key;



    modifySetUp = (item) => {

        // console.log("modify setup", item);

        // const { enableMasterLevel, enableAccountLevel } = this.state;
        return (
             item.type === "Master Reg Level" ?
                 (
                 <View>
                       <TouchableOpacity onPress={this.setUpAccountLevel}><Text>Switch to Account Level</Text></TouchableOpacity> 
                       <Text>Master Level</Text>
                 </View>
                  ):
             (
                 <View>
                        <TouchableOpacity onPress={this.setUpMasterLevel}><Text>Switch To Master Level</Text></TouchableOpacity> 
                        <Text>Account Level</Text>
                 </View>
             )

          
        );
    }

    setUpAccountLevel = () => {
       // this.setState({ enableMasterLevel: false, enableAccountLevel: true });
    }


    setUpMasterLevel = () => {
       // this.setState({ enableMasterLevel: true, enableAccountLevel: false });
    }

    renderDashboardData = ({ item }) => {
        const{modifyRd,setUpRd}=this.state;
        return (
            <View style={styles.boxBorder}>
                <View>
                    <Text style={styles.signIntext}>
                        {item.key}
                    </Text>

                </View>
                <Text style={styles.lblLine} />
                <FlatList
                    data={item.acounts}
                    extraData={this.props}
                    // keyExtractor={this.generateKeyExtractorAccount}
                    renderItem={this.renderAccountData}
                />
                <View style={styles.signInView}>
                    <Text style={styles.textMedium}>
                        Master Registration Balances
                    </Text>
                    <Text style={styles.textSmall}>
                        {item.mRBalances}
                    </Text>
                    <Text style={styles.textMedium}>
                        Required Minimum Distribution(Current Year)
                    </Text>
                    <Text style={styles.textSmall}>
                        {item.rmd}
                    </Text>
                </View>
                {
                    modifyRd ?
                        (
                            this.modifySetUp(item)
                        ) : null
                }
                
                {
                    setUpRd ?
                        (
                            <View style={styles.viewRow}>
                                <FlatList
                                    data={item.recurringDistribution}
                                    extraData={this.props}
                                    ListHeaderComponent={<Text style={styles.textFlatListHeader}>RecurringDistribution</Text>}
                                    // keyExtractor={this.generateKeyExtractorAccount}
                                    renderItem={this.renderRdAmount}
                                />
                                <FlatList
                                    data={item.recurringDistribution}
                                    extraData={this.props}
                                    ListHeaderComponent={<Text style={styles.textFlatListHeader}>Frequency</Text>}
                                    // keyExtractor={this.generateKeyExtractorAccount}
                                    renderItem={this.renderRdFrequency}
                                />
                                <FlatList
                                    data={item.recurringDistribution}
                                    extraData={this.props}
                                    ListHeaderComponent={<Text style={styles.textFlatListHeader}>SetUp</Text>}
                                    // keyExtractor={this.generateKeyExtractorAccount}
                                    renderItem={this.renderSetup}
                                />

                            </View>
                        ) : null}

            </View>
        );
    }

    generateKeyExtractorAccount = (item) => item.accountName;


    renderAccountData = ({ item }) => {
        return (
            <View style={styles.signInView}>

                <Text style={styles.textMedium}>
                    Account Name
                </Text>

                <Text style={styles.textSmall}>
                    {item.accountName}
                </Text>


                <Text style={styles.textMedium}>
                    Fund Name
                </Text>
                <Text style={styles.textSmall}>
                    {item.fundName}
                </Text>
                <Text style={styles.textMedium}>
                    Shares
                </Text>
                <Text style={styles.textSmall}>
                    {item.shares}
                </Text>
                <Text style={styles.textMedium}>
                    Nav
                </Text>
                <Text style={styles.textSmall}>
                    {item.nav}
                </Text>
                <Text style={styles.textMedium}>
                    Market Value(Current)
                </Text>
                <Text style={styles.textSmall}>
                    {item.marketValue}
                </Text>
                <Text style={styles.textMedium}>
                    Prior Year End Balance
                </Text>
                <Text style={styles.textSmall}>
                    {item.priorYearEndBalance}
                </Text>

                { /* {  
                        !this.state.setUpRd?
                            (
                        <View>
                        <Text style={styles.textMedium}>
                               Required Minimum Distribution(Current Year)
                        </Text>
                        <Text style={styles.textSmall}>
                                {item.mRBalances}
                        </Text>
                        </View>
                            ):null
                        
                        } */ }

                <Text style={styles.lblLine} />
            </View>
        );
    }

    renderRdAmount = ({ item }) => {
        return (
            <View>
                <Text style={item.amount === "No Recurring Distribution" ? styles.textSmallRed : styles.textSmall}>
                    {item.amount}
                </Text>
            </View>
        );
    }

    renderRdFrequency = ({ item }) => {
        return (
            <View>
                <Text style={styles.textSmall}>{item.frequency}</Text>
            </View>
        );
    }

    renderSetup = ({ item }) => {
        return (
            <View>
                <Text style={item.type === "No Setup" ? styles.textSmallRed : styles.textSmall}>{item.type}</Text>
            </View>
        );
    }

    setUpRecurringDistribution = () => {
        this.setState({ setUpRd: true });
    }

    ModifyRecurringDistribution = () => {
        this.setState({ modifyRd: true, setUpRd: false });
    }

    render() {
        const { navigation } = this.props;
        const { rmdReducerData } = this.props;
        const{setUpRd}=this.state;
        if (rmdReducerData) {
           // console.log("---->data", rmdReducerData);
            //  this.setState({ menu : this.props.amendReducerData.menu}) ;
            dashboardData = rmdReducerData.data;
        }
        return (
            <View style={styles.container}>
                <GHeaderComponent navigation={navigation} />
                <ScrollView style={styles.scrollView}>
                    <View style={styles.viewRow}>
                        <Text style={styles.signIntext}>
                            RMD Dashboard
                        </Text>
                        {!setUpRd ?
                            (
                                <TouchableOpacity onPress={this.setUpRecurringDistribution}>
                                    <Text style={styles.textSmallUnderline}>
                                        SetUp Recurring Distributions
                                    </Text>
                                </TouchableOpacity>
                            ) :
                            (
                                <TouchableOpacity onPress={this.ModifyRecurringDistribution}>
                                    <Text style={styles.textSmallUnderline}>
                                        View/Modify Recurring Distributions
                                    </Text>
                                </TouchableOpacity>
                            )
                        }
                    </View>
                    <FlatList
                        data={dashboardData}
                        extraData={this.state}
                        keyExtractor={this.generateKeyExtractor}
                        renderItem={this.renderDashboardData}
                    />
                </ScrollView>
            </View>
        );
    }
}
RMDDashboardComponent.propTypes = {
    navigation: PropTypes.instanceOf(Object),
    rmdReducerData: PropTypes.instanceOf(Object),

};
RMDDashboardComponent.defaultProps = {
    navigation: {},
    rmdReducerData: {},


};
export default RMDDashboardComponent;
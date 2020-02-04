/* eslint-disable react/no-multi-comp */
import React, { Component } from 'react';
import { Text, View, ScrollView,FlatList,TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { GHeaderComponent} from '../../CommonComponents';
import styles from './styles';
// import gblStrings from '../../Constants/GlobalStrings';


let dashboardData =[];
class RMDDashboardComponent extends Component {
    /* constructor(props) {
        super(props);
    } */

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


    renderDashboardData = ({ item }) => {
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
            </View>
        );
    }

    generateKeyExtractorAccount = (item) => item.accountName;

    renderAccountData = ({ item }) => {
        return(
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
                        <Text style={styles.textMedium}>
                               Master Registration Balances
                        </Text>
                        <Text style={styles.textSmall}>
                                {item.mRBalances}
                        </Text>
                        <Text style={styles.textMedium}>
                               Required Minimum Distribution
                        </Text>
                        <Text style={styles.textSmall}>
                                {item.mRBalances}
                        </Text>
                        <Text style={styles.lblLine} />
            </View>
        );
    }

    render() {
        const { navigation } = this.props;
        const { rmdReducerData } = this.props;
        if (rmdReducerData ) {
              console.log("---->data",rmdReducerData);
            //  this.setState({ menu : this.props.amendReducerData.menu}) ;
            dashboardData = rmdReducerData.data;
        }
        return(
        <View style={styles.container}>
                <GHeaderComponent navigation={navigation} />
                <ScrollView style={styles.scrollView}>
                    <View style={styles.viewRow}>
                        <Text style={styles.signIntext}>
                            RMD Dashboard
                        </Text>
                        <TouchableOpacity>
                        <Text style={styles.textSmallUnderline}>
                        SetUp Recurring Distributions
                        </Text>
                        </TouchableOpacity>
                    </View>
                    <FlatList
                    data={dashboardData}
                    extraData={this.props}
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
    rmdReducerData:PropTypes.instanceOf(Object),
    
};
RMDDashboardComponent.defaultProps = {
    navigation: {},
    rmdReducerData:{},
    

};
export default RMDDashboardComponent;
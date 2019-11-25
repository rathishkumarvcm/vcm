import React, { Component } from 'react';
import { Text, View, ScrollView, TouchableHighlight } from 'react-native';
import { styles } from './styles';
import { GHeaderComponent, GFooterComponent, GLoadingSpinner } from '../../CommonComponents';
import { scaledHeight } from '../../Utils/Resolution';
import gblStrings from '../../Constants/GlobalStrings';
import * as ActionTypes from "../../Shared/ReduxConstants/ServiceActionConstants";
import PropTypes from "prop-types";
/*
const accList = [

    {
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elitdh Nam imperdiet dictum orcitt et faucibus lectus ut gdsgg massa convallis.',
        name: 'General Investment Account(Non IRA)',
        id: 0
    },
    {
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elitdh Nam imperdiet dictum orcitt et faucibus lectus ut gdsgg massa convallis.',
        name: 'IRA (Retirement Account)',
        id: 1
    },
    {
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elitdh Nam imperdiet dictum orcitt et faucibus lectus ut gdsgg massa convallis.',
        name: 'Investing for Children',
        id: 2
    },
    {
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elitdh Nam imperdiet dictum orcitt et faucibus lectus ut gdsgg massa convallis.',
        name: 'Speciality Accounts',
        id: 3
    }



];
*/

class DashboardAccComponent extends Component {
    constructor(props) {
        super(props);
        //set true to isLoading if data for this screen yet to be received and wanted to show loader.
        this.state = {
            isLoading: false,
            itemID: "",
            selectedItemID: "",
            selectedItemName: ""
        };
    }
    /*----------------------
                                 Component LifeCycle Methods 
                                                                 -------------------------- */
    componentDidMount() {
        console.log("componentDidMount::::> ");
        const payload = "acct_type";
        this.props.getAccountTypes(payload);
    }
    componentDidUpdate(prevProps, prevState) {
        console.log("componentDidUpdate::::> " + prevState);
        /*
           if(this.props !== prevProps){
             if(this.props.dashboardData.isSuccess && !this.props.dashboardData.isError  && !this.props.dashboardData.isLoading){
              }else if(!this.props.dashboardData.isSuccess && this.props.dashboardData.isError  && !this.props.dashboardData.isLoading){
            } 
           }
           */
    }
    /*----------------------
                                 Button Events 
                                                                 -------------------------- */
    onClickHeader = () => {
        console.log("#TODO : onClickHeader");
    }
    goBack = () => {
        this.props.navigation.goBack();
    }
    onSelected = (item) => () => {
        console.log("item: " + item.key);
        console.log("You selected :: " + item.value);

        let accType = "";
        switch (item.key) {
            case "gen_inv_acct":
                accType = "NonIRA";
                break;
            case "ira":
                accType = "IRA";
                break;
            case "inv_child":
                accType = "UGMA-UTMA";
                break;
            case "spec_acct":
                accType = "SpecialtyAcc";
                break;
        }
        let screenName = 'openAccPageOne';
        console.log("accType :: " + accType);

        if (screenName !== "") {
            //this.props.dashboardData.accountType !=undefined && this.props.dashboardData.accountType !=null 
            this.props.selectAccount({ accountType: item });
            this.props.navigation.navigate({ routeName: screenName, key: screenName, params: { type: item.key, selectedAccount: item ,accountType: item} });
        }


    }

    /*----------------------
                                 Render Methods
                                                                 -------------------------- */
    render() {
        console.log("RENDER::: DashboardAccounts ::>>> ", this.props);
        let accList = [];

        if (this.props.dashboardData.result != undefined && this.props.dashboardData.result != null) {
            accList = this.props.dashboardData.result;
            accList = accList.value;
        }
        console.log("accList:::", accList);

        return (
            <View style={styles.container}>
                {
                    this.props.dashboardData.isLoading && <GLoadingSpinner />
                }

                <GHeaderComponent navigation={this.props.navigation} onPress={this.onClickHeader} />
                <ScrollView style={{ flex: .85 }}>
                    <View style={styles.accountSection}>

                        <Text style={styles.welcomeTxt}>
                            {gblStrings.dashBoard.openAnAccount}
                        </Text>
                        <View style={{ flexGrow: 1, marginTop: scaledHeight(59) }}>
                            {accList.map((item) => {
                                return (
                                    <TouchableHighlight
                                        key={item.key}
                                        onPress={this.onSelected(item)}
                                        activeOpacity={0.8}
                                        accessibilityRole={'button'}
                                        style={[styles.touchItem]}
                                    >
                                        {
                                            <View style={[styles.accountItem]}>
                                                <Text style={styles.accountItemTxt}>
                                                    {item.value}
                                                </Text>
                                                <Text style={styles.accountItemDescTxt}>
                                                    {item.description || "Lorem ipsum dolor sit amet, consectetur adipiscing elitdh Nam imperdiet dictum orcitt et faucibus lectus ut gdsgg massa convallis."}
                                                </Text>
                                            </View>
                                        }
                                    </TouchableHighlight>
                                );
                            })}
                        </View>
                    </View>


                    <View style={styles.newVictorySection}>
                        <Text style={styles.disclaimerTitleTxt}>
                            {gblStrings.accManagement.VCDiscalimerTitle}
                        </Text>
                        <Text style={styles.disclaimerTxt}>
                            {gblStrings.accManagement.VCDiscalimerDesc}
                        </Text>
                        <Text style={styles.moreTxt}>
                            {gblStrings.common.more}
                        </Text>
                    </View>
                    <GFooterComponent />


                </ScrollView>
            </View>

        );
    }
}

DashboardAccComponent.propTypes = {
    navigation: PropTypes.instanceOf(Object).isRequired,
    dashboardData: PropTypes.instanceOf(Object).isRequired,
    getAccountTypes: PropTypes.func,
    selectAccount: PropTypes.func,

};
export default DashboardAccComponent;
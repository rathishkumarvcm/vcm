import React, { Component } from 'react';
import { Text, View, ScrollView, TouchableHighlight } from 'react-native';
import PropTypes from "prop-types";
import styles from './styles';
import { GHeaderComponent, GFooterComponent, GLoadingSpinner } from '../../CommonComponents';
import { scaledHeight } from '../../Utils/Resolution';
import gblStrings from '../../Constants/GlobalStrings';
import * as ActionTypes from "../../Shared/ReduxConstants/ServiceActionConstants";
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
        // set true to isLoading if data for this screen yet to be received and wanted to show loader.
        this.state = {
            retrivePendingAppData: {}

        };
    }

    /*----------------------
                                 Component LifeCycle Methods 
                                                                 -------------------------- */
    componentDidMount() {
        console.log("componentDidMount::::> ");
        const payload = "acct_type";
        this.props.getAccountTypes(payload);
        const pendingAppPayload = {
            "onlineId": 'arumugamt',
            "customerId": '761735',
            "accountType": 'ind'
        };
        this.props.retriveSavedData(pendingAppPayload);
    }

    componentDidUpdate(prevProps, prevState) {
        console.log(`componentDidUpdate::::> ${ prevState}`);

        if (this.props !== prevProps) {
            const responseKey = ActionTypes.RETRIVE_OPENING_ACCT;
            if (this.props.accOpeningData[responseKey]) {
                if (this.props.accOpeningData[responseKey] !== prevProps.accOpeningData[responseKey]) {
                    const tempResponse = this.props.accOpeningData[responseKey];
                    if (tempResponse.statusCode == 200 || tempResponse.statusCode == '200') {
                        const msg = tempResponse.message;
                        console.log(`Account  Saved ::: :: ${ msg}`);
                        // alert( JSON.stringify(tempResponse.result));
                        this.setState({
                            retrivePendingAppData: tempResponse.result.Item
                        });

                    } else {
                        // alert(tempResponse.message)
                    }
                }
            }

            const populateAppKey = "isPendingApplication";
            if (this.props.accOpeningData[populateAppKey]) {
                if (this.props.accOpeningData[populateAppKey] !== prevProps.accOpeningData[populateAppKey]) {
                    const isPendingApplication = this.props.accOpeningData[populateAppKey];
                    if (isPendingApplication) {

                        const selectedAccount = {
                            "key": this.state.retrivePendingAppData.accountType || "",
                            "value": this.state.retrivePendingAppData.accountMainCategory || ""

                        };
                        const pageNo = `${ this.state.retrivePendingAppData.savedPages}`;
                        let screenName = 'openAccPageOne';


                        switch (pageNo) {
                            case "1":
                                screenName = 'openAccPageOne';
                                break;
                            case "2":
                                screenName = 'openAccPageTwo';
                                break;
                            case "3":
                                screenName = 'openAccPageThree';
                                break;
                            case "4":
                                screenName = 'openAccPageFour';
                                break;
                            case "5":
                                screenName = 'openAccPageFive';
                                break;
                            case "6":
                                screenName = 'openAccPageSix';
                                break;
                        }

                        if (screenName !== "") {
                            this.props.navigation.navigate({ routeName: screenName, key: screenName, params: { selectedAccount, accType: "" } });
                        }
                    }
                }
            }
        }

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

    onSelectedPendingAcc = () => {
        this.props.populatePendingApplication(true);
    }

    onSelected = (item) => () => {
        console.log(`item: ${ item.key}`);
        console.log(`You selected :: ${ item.value}`);

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
        const screenName = 'openAccPageOne';
        console.log(`accType :: ${ accType}`);

        if (screenName !== "") {
            // this.props.accOpeningData.accountType !=undefined && this.props.accOpeningData.accountType !=null 
            this.props.selectAccount({ accountType: item });
            this.props.navigation.navigate({ routeName: screenName, key: screenName, params: { type: item.key, selectedAccount: item, accountType: item } });
        }
        // populatePendingApplication

    }

    /*----------------------
                                 Render Methods
                                                                 -------------------------- */
    render() {
        console.log("RENDER::: DashboardAccounts ::>>> ", this.props);
        let accList = [];
        const tempkey = ActionTypes.GET_ACCOUNT_TYPES;
        if (this.props && this.props.accOpeningData && this.props.accOpeningData[tempkey]) {
            const tempResponse = this.props.accOpeningData[tempkey];
            if (tempResponse.statusCode == 200 || tempResponse.statusCode == '200') {
                accList = tempResponse.result;
                accList = accList.value;
            }
        }

        // let tempPendingAppData = this.state.retrivePendingAppData;


        /*  if (this.props.accOpeningData.result != undefined && this.props.accOpeningData.result != null) {
              accList = this.props.accOpeningData.result;
              accList = accList.value;
          }
          */
        console.log("accList:::", accList);

        return (
            <View style={styles.container}>
                {this.props.accOpeningData.isLoading && <GLoadingSpinner />}
                {this.props.accOpeningData.isError && alert("Service Error")}


                <GHeaderComponent navigation={this.props.navigation} onPress={this.onClickHeader} />
                <ScrollView style={{ flex: .85 }}>
                    <View style={styles.accountSection}>

                        <Text style={styles.welcomeTxt}>
                            {gblStrings.dashBoard.openAnAccountWithVCM}
                        </Text>
                        <View style={{ flexGrow: 1, marginTop: scaledHeight(59) }}>
                            {accList.map((item) => {
                                return (
                                    <TouchableHighlight
                                        key={item.key}
                                        onPress={this.onSelected(item)}
                                        activeOpacity={0.8}
                                        accessibilityRole="button"
                                        style={styles.touchItem}
                                    >
                                        <View style={styles.accountItem}>
                                                <Text style={styles.accountItemTxt}>
                                                    {item.value}
                                                </Text>
                                                <Text style={styles.accountItemDescTxt}>
                                                    {item.description || "Lorem ipsum dolor sit amet, consectetur adipiscing elitdh Nam imperdiet dictum orcitt et faucibus lectus ut gdsgg massa convallis."}
                                                </Text>
                                        </View>
                                    </TouchableHighlight>
                                );
                            })}

                            {
                                (this.state.retrivePendingAppData && this.state.retrivePendingAppData.accountType) && (
                                <TouchableHighlight
                                    onPress={this.onSelectedPendingAcc}

                                    key={this.state.retrivePendingAppData.accountType}
                                    activeOpacity={0.8}
                                    accessibilityRole="button"
                                    style={styles.touchItem}
                                >
                                    <View style={styles.accountItem}>
                                            <Text style={styles.accountItemTxt}>
                                                {`Pending Application:: ${this.state.retrivePendingAppData.accountType}`}
                                            </Text>
                                            <Text style={styles.accountItemDescTxt}>
                                                {`Last Saved:: ${this.state.retrivePendingAppData.lastSavedDate}`}
                                            </Text>
                                    </View>
                                </TouchableHighlight>
                              )}

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
    accOpeningData: PropTypes.instanceOf(Object).isRequired,
    getAccountTypes: PropTypes.func,
    selectAccount: PropTypes.func,
    retriveSavedData:PropTypes.instanceOf(Object),
    populatePendingApplication:PropTypes.func

};
export default DashboardAccComponent;
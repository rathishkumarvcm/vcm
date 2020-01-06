import React, { Component } from 'react';
import { Text, View, ScrollView, TouchableHighlight } from 'react-native';
import PropTypes from "prop-types";
import styles from './styles';
import { GHeaderComponent, GFooterComponent, GLoadingSpinner ,showAlert} from '../../CommonComponents';
import gblStrings from '../../Constants/GlobalStrings';
import * as ActionTypes from "../../Shared/ReduxConstants/ServiceActionConstants";
import AppUtils from '../../Utils/AppUtils';

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
       AppUtils.debugLog("componentDidMount::::> ");
        const { getAccountTypes , retriveSavedData } = this.props;
        const payload = "acct_type";
        getAccountTypes(payload);
        const pendingAppPayload = {
            "onlineId": 'arumugamt',
            "customerId": '761735',
            "accountType": 'ind'
        };
        retriveSavedData(pendingAppPayload);
    }

    componentDidUpdate(prevProps, prevState) {
       AppUtils.debugLog(`componentDidUpdate::::> ${ prevState}`);
       const { navigation , accOpeningData } = this.props;
       const { navigate } = navigation;  

       const { retrivePendingAppData } = this.state;

        if (this.props !== prevProps) {
            const responseKey = ActionTypes.RETRIVE_OPENING_ACCT;
            if (accOpeningData[responseKey]) {
                if (accOpeningData[responseKey] !== prevProps.accOpeningData[responseKey]) {
                    const tempResponse = accOpeningData[responseKey];
                    if (tempResponse.statusCode === 200 || tempResponse.statusCode === '200') {
                        const msg = tempResponse.message;
                       AppUtils.debugLog(`Account  Saved ::: :: ${ msg}`);
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
            if (accOpeningData[populateAppKey]) {
                if (accOpeningData[populateAppKey] !== prevProps.accOpeningData[populateAppKey]) {
                    const isPendingApplication = accOpeningData[populateAppKey];
                    if (isPendingApplication) {

                        const selectedAccount = {
                            "key": retrivePendingAppData.accountType || "",
                            "value": retrivePendingAppData.accountMainCategory || ""

                        };
                        const pageNo = `${ retrivePendingAppData.savedPages}`;
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
                                default:
                                    break;
                        }

                        if (screenName !== "") {
                            navigate({ routeName: screenName, key: screenName, params: { selectedAccount, accType: "" } });
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
       AppUtils.debugLog("#TODO : onClickHeader");
    }

    goBack = () => {
        const { navigation} = this.props;
        const { goBack } = navigation; 
        goBack();
    }

    onSelectedPendingAcc = () => {
       const { populatePendingApplication} = this.props;
       populatePendingApplication(true);
    }

    onSelected = (item) => () => {
       AppUtils.debugLog(`item: ${ item.key}`);
       AppUtils.debugLog(`You selected :: ${ item.value}`);
       const { navigation,selectAccount} = this.props;
       const { navigate } = navigation;  
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
            default:
                break;
        }
        const screenName = 'openAccPageOne';
       AppUtils.debugLog(`accType :: ${ accType}`);

        if (screenName !== "") {
            // this.props.accOpeningData.accountType !=undefined && this.props.accOpeningData.accountType !=null 
            selectAccount({ accountType: item });
            navigate({ routeName: screenName, key: screenName, params: { type: item.key, selectedAccount: item, accountType: item } });
        }
        // populatePendingApplication

    }

    /*----------------------
                                 Render Methods
                                                                 -------------------------- */
    render() {
       AppUtils.debugLog("RENDER::: DashboardAccounts ::>>> ", this.props);
       const { accOpeningData } = this.props;
       const { navigation} = this.props;

       const { retrivePendingAppData } = this.state;


        let accList = [];
        const tempkey = ActionTypes.GET_ACCOUNT_TYPES;
        if (this.props && accOpeningData && accOpeningData[tempkey]) {
            const tempResponse = accOpeningData[tempkey];
            if (tempResponse.statusCode === 200 || tempResponse.statusCode === '200') {
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
       AppUtils.debugLog("accList:::", accList);
        return (
            <View style={styles.container}>
                {accOpeningData.isLoading && <GLoadingSpinner />}
                {accOpeningData.isError && showAlert("VCM Memeber Services","Service Error","OK")}


                <GHeaderComponent navigation={navigation} onPress={this.onClickHeader} />
                <ScrollView style={styles.scrollView}>
                    <View style={styles.accountSection}>

                        <Text style={styles.welcomeTxt}>
                            {gblStrings.dashBoard.openAnAccountWithVCM}
                        </Text>
                        <View style={styles.listContainer}>
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
                                (retrivePendingAppData && retrivePendingAppData.accountType) && (
                                <TouchableHighlight
                                    onPress={this.onSelectedPendingAcc}

                                    key={retrivePendingAppData.accountType}
                                    activeOpacity={0.8}
                                    accessibilityRole="button"
                                    style={styles.touchItem}
                                >
                                    <View style={styles.accountItem}>
                                            <Text style={styles.accountItemTxt}>
                                                {`Pending Application:: ${retrivePendingAppData.accountType}`}
                                            </Text>
                                            <Text style={styles.accountItemDescTxt}>
                                                {`Last Saved:: ${retrivePendingAppData.lastSavedDate}`}
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
    navigation: PropTypes.instanceOf(Object),
    accOpeningData: PropTypes.instanceOf(Object),
    getAccountTypes: PropTypes.func,
    selectAccount: PropTypes.func,
    retriveSavedData:PropTypes.instanceOf(Object),
    populatePendingApplication:PropTypes.func

};
DashboardAccComponent.defaultProps = {
    navigation: {},
    accOpeningData: {},
    getAccountTypes: null,
    selectAccount: null,
    retriveSavedData: null,
    populatePendingApplication: null

};

export default DashboardAccComponent;
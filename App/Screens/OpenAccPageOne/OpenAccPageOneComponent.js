import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';
import { styles } from './styles';
import { GButtonComponent, GHeaderComponent, GFooterComponent, GLoadingSpinner } from '../../CommonComponents';
import { CustomPageWizard, CustomRadio } from '../../AppComponents';
import gblStrings from '../../Constants/GlobalStrings';
import PropTypes from "prop-types";
import * as ActionTypes from "../../Shared/ReduxConstants/ServiceActionConstants";
import { scaledHeight } from '../../Utils/Resolution';

const pageOne = {
    "gen_inv_acct": {
        "pageName": "Non IRA Types",
        "pageSec1Text": gblStrings.accManagement.generalInvestmentAcc,
        "pageSec2Text": "Peronalize"
    },
    "ira": {
        "pageName": "IRA Types",
        "pageSec1Text": gblStrings.accManagement.retirementAcc,
        "pageSec2Text": "Peronalize"
    },
    "inv_child": {
        "pageName": "UGMA/UTMA",
        "pageSec1Text": gblStrings.accManagement.investingChildrenAcc,
        "pageSec2Text": "Peronalize"
    },
    "spec_acct": {
        "pageName": "Specialty Accounts",
        "pageSec1Text": gblStrings.accManagement.specialtyAcc,
        "pageSec2Text": ""
    },

    "NonIRA": {
        "pageName": "Non IRA Types",
        "pageSec1Text": gblStrings.accManagement.generalInvestmentAcc,
        "pageSec2Text": "Peronalize"
    },
    "IRA": {
        "pageName": "IRA Types",
        "pageSec1Text": gblStrings.accManagement.retirementAcc,
        "pageSec2Text": "Peronalize"
    },
    "UGMA-UTMA": {
        "pageName": "UGMA/UTMA",
        "pageSec1Text": gblStrings.accManagement.investingChildrenAcc,
        "pageSec2Text": "Peronalize"
    },
    "SpecialtyAcc": {
        "pageName": "Specialty Accounts",
        "pageSec1Text": gblStrings.accManagement.specialtyAcc,
        "pageSec2Text": ""
    }

};





class OpenAccPageOneComponent extends Component {
    constructor(props) {
        super(props);
        //set true to isLoading if data for this screen yet to be received and wanted to show loader.
        this.state = {
            isLoading: false,
            selectedItemID: "",
            selectedItemName: "",
            accType: "",
            isValidationSuccess: true,
            errMsg:""

        };
    }
    /*----------------------
                                 Component LifeCycle Methods 
                                                                 -------------------------- */
    UNSAFE_componentWillMount() {
        //alert("get paramsrrrrr:"+JSON.stringify(this.props.navigation.state.params.accType))

    }

    componentDidMount() {
        console.log("componentDidMount::::> ");
        const selectedAccount = this.props.navigation.getParam('selectedAccount', '');
        console.log("selectedAccount::::> " + selectedAccount);

        const payload = selectedAccount.key;
        this.props.getAccountSubTypes(payload);
    }
    componentDidUpdate(prevProps, prevState) {
        console.log("componentDidUpdate::::> "+prevState);
        if (this.props !== prevProps) {
            const responseKey = ActionTypes.ACCT_TYPE_SAVE_OPENING_ACCT;
            if (this.props.accOpeningData[responseKey]) {
                if (this.props.accOpeningData[responseKey]!== prevProps.accOpeningData[responseKey]) {
                    const tempResponse = this.props.accOpeningData[responseKey];
                    if (tempResponse.statusCode == 200 || tempResponse.statusCode == '200') {
                        let msg = tempResponse.message;
                        console.log("Account Type Saved ::: :: " + msg);
                        alert(tempResponse.result);
                    } else {
                        alert(tempResponse.message);
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
    onClickCancel = () => {
        this.props.navigation.goBack('termsAndConditions');
    }
    onSelected = (item) => () => {
        console.log("item: " + item.key);
        this.setState(
            {
                selectedItemID: item.key,
                selectedItemName: item.value,
                accType: item.value,
                isValidationSuccess: true,
                errMsg:""

            }
        );

        this.props.selectAccTypes({ accountSubType: item });

    }
    onChangeNickname = (event) => {
        console.log("onChangeNickname: " + event);
    }

    getPayload = () => {
        const selectedAccount = this.props.navigation.getParam('selectedAccount', '');
        console.log("selectedAccount::::> " + selectedAccount);

        let payload = {
            "onlineId": "arumugamt",
            "customerId": "761735",
            "accountType": this.state.selectedItemID,
            "accountMainCategory":selectedAccount.value,
            "accountSubType": (this.props.accOpeningData && this.props.accOpeningData.accountSubType) ? this.props.accOpeningData.accountSubType.key : "-",
            "accountSubCategory": (this.props.accOpeningData && this.props.accOpeningData.accountSubType) ? this.props.accOpeningData.accountSubType.value : "-",
        };
        if (this.props && this.props.accOpeningData && this.props.accOpeningData.savedAccData) {
            payload = {
                ...payload,
                ...this.props.accOpeningData.savedAccData
            };
        }
        return payload;

    }

    onClickNext = () => {
        const selectedAccount = this.props.navigation.getParam('selectedAccount', '');
        if (this.validateFields()) {

            const payload = this.getPayload();
            this.props.saveData("OpenAccPageOne", payload);             

            if (selectedAccount.key == "spec_acct") {
                this.props.navigation.navigate({ routeName: 'specialtyAccPage', key: 'specialtyAccPage', params: { pageNo: 2, accType: "Specialty Account" } });
            } else if (selectedAccount.key == "inv_child") {
                if (this.state.selectedItemName === "529 College Saving Plan" || this.state.selectedItemID === "colleg") {
                    this.props.navigation.navigate({ routeName: 'collegePlanESA', key: 'collegePlanESA', params: { accType: this.state.accType } });
                } else {
                    this.props.navigation.navigate({ routeName: 'openAccPageTwo', key: 'openAccPageTwo', params: { accType: "UGMA/UTMA Account" } });
                }
            } else if (selectedAccount.key == "gen_inv_acct") {
                if (this.state.selectedItemID.startsWith("joint")) {
                    this.props.navigation.navigate({ routeName: 'openAccPageTwo', key: 'openAccPageTwo', params: { accType: "Joint Account" } });
                } else {
                    this.props.navigation.navigate({ routeName: 'openAccPageTwo', key: 'openAccPageTwo', params: { accType: "Individual Account" } });
                }
            } else if (selectedAccount.key == "ira") {
                this.props.navigation.navigate({ routeName: 'openAccPageTwo', key: 'openAccPageTwo', params: { accType: "Retirement Account" } });
            }
        }
    }
    onClickSave = () => {
        if (this.validateFields()) {
            const payload = this.getPayload();
            this.props.saveAccountOpening("OpenAccPageOne", payload);
        }
    }
    isEmpty = (str) => {
        if (str == "" || str == undefined || str == null || str == "null" || str == "undefined") {
            return true;
        } else {
            return false;
        }
    }
    validateFields = () => {
        console.log("validateFields:::> " + JSON.stringify(this.state));
        const selectedAccount = this.props.navigation.getParam('selectedAccount', '');
        console.log("selectedAccount:::> " + selectedAccount);

        var errMsg = "";
        var isValidationSuccess = false;
        if (this.isEmpty(this.state.accType)) {
            errMsg = 'Please select an account';
        } else {
            isValidationSuccess = true;
        }

        if (!isValidationSuccess) {
            alert(errMsg);
           
        }

        this.setState({
            isValidationSuccess: isValidationSuccess,
            errMsg:isValidationSuccess == false ? errMsg:""
         });

        return isValidationSuccess;

    }
    /*----------------------
                                 Render Methods
                                                                 -------------------------- */

    renderRadioBtnGrp = () => {
        let isSectionAvailable = false;
        let sectionData = [];
        let result = [];
        let accSubTypes = [];
        if (this.props.accOpeningData[ActionTypes.GET_ACCOUNT_SUBTYPES] != undefined && this.props.accOpeningData[ActionTypes.GET_ACCOUNT_SUBTYPES] != null) {
            result = this.props.accOpeningData[ActionTypes.GET_ACCOUNT_SUBTYPES].result;
            if (result.subtypes != undefined && result.subtypes != null) {
                accSubTypes = result.subtypes;
            } else {
                sectionData = result.value;
                isSectionAvailable = true;
            }
        }

        if (isSectionAvailable) {
            return (
                <View style={{ flexGrow: 1 }}>
                    {sectionData.map((item) => {
                        return (
                            <View
                                key={item.key}
                            >
                                <Text style={styles.lblTxt}>
                                    {item.value}
                                </Text>
                                <View style={styles.radioBtnGrp} >
                                    {item.subtypes.map((item) => {
                                        return (
                                            <CustomRadio
                                                key={item.key}
                                                size={36}
                                                componentStyle={{ marginBottom: scaledHeight(24), marginTop: scaledHeight(24) }}
                                                outerCicleColor={"#DEDEDF"}
                                                innerCicleColor={"#61285F"}
                                                labelStyle={styles.lblRadioBtnTxt}
                                                label={item.value}
                                                descLabelStyle={styles.lblRadioDescTxt}
                                                descLabel={item.description}
                                                selected={(this.state.selectedItemID !== "" && item.key == this.state.selectedItemID) ? true : false}
                                                onPress={this.onSelected(item)}
                                            />
                                        );
                                    })}
                                </View>
                            </View>
                        );
                    })}

                </View>
            );

        } else {
            return (
                <View style={{ flexGrow: 1 }}>
                    <Text style={styles.lblTxt}>
                        {result.value}
                    </Text>
                    <View style={styles.radioBtnGrp} >
                        {accSubTypes.map((item) => {
                            return (
                                <CustomRadio
                                    key={item.key}
                                    size={36}
                                    componentStyle={{ marginBottom: scaledHeight(24), marginTop: scaledHeight(24) }}
                                    outerCicleColor={"#DEDEDF"}
                                    innerCicleColor={"#61285F"}
                                    labelStyle={styles.lblRadioBtnTxt}
                                    label={item.value}
                                    descLabelStyle={styles.lblRadioDescTxt}
                                    descLabel={item.description}
                                    selected={(this.state.selectedItemID !== "" && item.key == this.state.selectedItemID) ? true : false}
                                    onPress={this.onSelected(item)}
                                />
                            );
                        })}
                    </View>
                </View>
            );
        }


    }

    render() {
        console.log("RENDER::: OpenAccPageOne ::>>> ", this.props);
        const { navigation } = this.props;
        const selectedAccount = navigation.getParam('selectedAccount', {});

        const type = selectedAccount.key || "";
        let currentPage = 1;
        var nextBtnstyle = this.state.isValidationSuccess ? styles.normalBlackBtn : [styles.normalBlackBtn, { opacity: .45 }];
        return (
            <View style={styles.container}>
                {
                    (this.props.accOpeningData.isLoading) && <GLoadingSpinner />
                }
                <GHeaderComponent
                    navigation={this.props.navigation}
                    onPress={this.onClickHeader}
                />
                <ScrollView style={{ flex: .85 }}>
                    <CustomPageWizard currentPage={currentPage} pageName={(currentPage) + " " + gblStrings.accManagement.accType} />
                    <View style={styles.sectionGrp}>
                        <View style={styles.accTypeSelectSection}>
                            <Text style={styles.headings}>
                                {pageOne[type].pageSec1Text}
                            </Text>
                        </View>

                        <Text style={styles.lblLine} />
                        {!this.state.isValidationSuccess &&
                            <Text style={styles.errMsg}>
                                {this.state.errMsg}
                            </Text>
                        }
                        {this.renderRadioBtnGrp()}
                    </View>

                    <View style={styles.btnGrp}>
                        <GButtonComponent
                            buttonStyle={styles.normalWhiteBtn}
                            buttonText="Save"
                            textStyle={styles.normalWhiteBtnTxt}
                            onPress={this.onClickSave}
                        />
                        <GButtonComponent
                            buttonStyle={styles.normalWhiteBtn}
                            buttonText="Cancel"
                            textStyle={styles.normalWhiteBtnTxt}
                            onPress={this.onClickCancel}
                        />


                        <GButtonComponent
                            buttonStyle={nextBtnstyle}
                            buttonText="Next"
                            textStyle={styles.normalBlackBtnTxt}
                            onPress={this.onClickNext}
                            disabled={!this.state.isValidationSuccess}
                        />
                    </View>


                    { /*----------- Disclaimer -------------------*/}

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

OpenAccPageOneComponent.propTypes = {
    navigation: PropTypes.instanceOf(Object),
    accOpeningData: PropTypes.instanceOf(Object),
    getAccountSubTypes:PropTypes.func,
    saveData:PropTypes.func,
    saveAccountOpening:PropTypes.func,
    selectAccTypes:PropTypes.func
};
export default OpenAccPageOneComponent;
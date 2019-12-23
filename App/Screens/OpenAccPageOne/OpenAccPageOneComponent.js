import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';
import PropTypes from "prop-types";
import { styles } from './styles';
import { GButtonComponent, GHeaderComponent, GFooterComponent, GLoadingSpinner,GSingletonClass } from '../../CommonComponents';
import { CustomPageWizard, CustomRadio } from '../../AppComponents';
import gblStrings from '../../Constants/GlobalStrings';
import * as ActionTypes from "../../Shared/ReduxConstants/ServiceActionConstants";
import AppUtils from '../../Utils/AppUtils';

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




const myInstance = GSingletonClass.getInstance();

class OpenAccPageOneComponent extends Component {
    constructor(props) {
        super(props);
        // set true to isLoading if data for this screen yet to be received and wanted to show loader.
        const openAccPageOne =  myInstance.getAccOpeningEditMode()? (myInstance.getScreenStateData().openAccPageOne || {}):{};

        this.state = {
            isLoading: false,
            selectedItemID: "",
            selectedItemName: "",
            accType: "",
            isValidationSuccess: true,
            isNextBtnDisabled: true,
            errMsg:"",
            ...openAccPageOne
        };
    }

    /*----------------------
                                 Component LifeCycle Methods 
                                                                 -------------------------- */

    componentDidMount() {
        AppUtils.Dlog("componentDidMount::::> ");
       // alert("getAccOpeningEditMode::"+ myInstance.getAccOpeningEditMode());

        const selectedAccount = this.props.navigation.getParam('selectedAccount', '');
        AppUtils.Dlog(`selectedAccount::::> ${ selectedAccount}`);

        const payload = selectedAccount.key;
        this.props.getAccountSubTypes(payload);
    }

    componentDidUpdate(prevProps, prevState) {
        AppUtils.Dlog(`componentDidUpdate::::> ${prevState}`);
        if (this.props !== prevProps) {
            const responseKey = ActionTypes.ACCT_TYPE_SAVE_OPENING_ACCT;
            if (this.props.accOpeningData[responseKey]) {
                if (this.props.accOpeningData[responseKey]!== prevProps.accOpeningData[responseKey]) {
                    const tempResponse = this.props.accOpeningData[responseKey];
                    if (tempResponse.statusCode === 200 || tempResponse.statusCode === '200') {
                        const msg = tempResponse.message;
                        AppUtils.Dlog(`Account Type Saved ::: :: ${ msg}`);
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
        AppUtils.Dlog("#TODO : onClickHeader");
    }

    goBack = () => {
        this.props.navigation.goBack();
    }

    onClickCancel = () => {
        this.props.navigation.goBack('termsAndConditions');
    }

    onSelected = (item) => () => {
        AppUtils.Dlog(`item: ${ item.key}`);
        this.setState(
            {
                selectedItemID: item.key,
                selectedItemName: item.value,
                accType: item.value,
                isValidationSuccess: true,
                isNextBtnDisabled:false,
                errMsg:""

            }
        );

        this.props.selectAccTypes({ accountSubType: item });

    }

    onChangeNickname = (event) => {
        AppUtils.Dlog(`onChangeNickname: ${ event}`);
    }

    getPayload = () => {
        const selectedAccount = this.props.navigation.getParam('selectedAccount', '');
        AppUtils.Dlog(`selectedAccount::::> ${ selectedAccount}`);

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
           // this.props.saveData("OpenAccPageOne", payload);             
            myInstance.setSavedAccData(payload);
            const stateData = myInstance.getScreenStateData();
            myInstance.setSavedAccData(payload);
            const screenState = {
                ...stateData,
                "openAccPageOne":{...this.state}
            }
            myInstance.setScreenStateData(screenState);
            if (selectedAccount.key === "spec_acct") {
                this.props.navigation.navigate({ routeName: 'specialtyAccPage', key: 'specialtyAccPage', params: { pageNo: 2, accType: "Specialty Account" } });
            } else if (selectedAccount.key === "inv_child") {
                if (this.state.selectedItemName === "529 College Saving Plan" || this.state.selectedItemID === "colleg") {
                    this.props.navigation.navigate({ routeName: 'collegePlanESA', key: 'collegePlanESA', params: { accType: this.state.accType } });
                } else {
                    this.props.navigation.navigate({ routeName: 'openAccPageTwo', key: 'openAccPageTwo', params: { accType: "UGMA/UTMA Account" } });
                }
            } else if (selectedAccount.key === "gen_inv_acct") {
                if (this.state.selectedItemID.startsWith("joint")) {
                    this.props.navigation.navigate({ routeName: 'openAccPageTwo', key: 'openAccPageTwo', params: { accType: "Joint Account" } });
                } else {
                    this.props.navigation.navigate({ routeName: 'openAccPageTwo', key: 'openAccPageTwo', params: { accType: "Individual Account" } });
                }
            } else if (selectedAccount.key === "ira") {
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
        if (str === "" || str === undefined || str === null || str === "null" || str === "undefined") {
            return true;
        } 
            return false;
        
    }

    validateFields = () => {
        AppUtils.Dlog(`validateFields:::> ${ JSON.stringify(this.state)}`);
        const selectedAccount = this.props.navigation.getParam('selectedAccount', '');
        AppUtils.Dlog(`selectedAccount:::> ${ selectedAccount}`);

        let errMsg = "";
        let isValidationSuccess = false;
        if (this.isEmpty(this.state.accType)) {
            errMsg = 'Please select an account';
        } else {
            isValidationSuccess = true;
        }

        if (!isValidationSuccess) {
            alert(errMsg);
           
        }

        this.setState({
            isValidationSuccess,
            isNextBtnDisabled:false,
            errMsg:isValidationSuccess === false ? errMsg:""
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
        if (this.props.accOpeningData[ActionTypes.GET_ACCOUNT_SUBTYPES] !== undefined && this.props.accOpeningData[ActionTypes.GET_ACCOUNT_SUBTYPES] !== null) {
            result = this.props.accOpeningData[ActionTypes.GET_ACCOUNT_SUBTYPES].result;
            if (result.subtypes !== undefined && result.subtypes !== null) {
                accSubTypes = result.subtypes;
            } else {
                sectionData = result.value;
                isSectionAvailable = true;
            }
        }

        if (isSectionAvailable) {
            return (
                <View>
                    {sectionData.map((item) => {
                        return (
                            <View
                                key={item.key}
                            >
                                <Text style={styles.lblTxt}>
                                    {item.value}
                                </Text>
                                <View style={styles.radioBtnGrp}>
                                    {item.subtypes.map((subItem) => {
                                        return (
                                            <CustomRadio
                                                key={subItem.key}
                                                size={36}
                                                componentStyle={styles.radioRow}
                                                outerCicleColor="#DEDEDF"
                                                innerCicleColor="#61285F"
                                                labelStyle={styles.lblRadioBtnTxt}
                                                label={subItem.value}
                                                descLabelStyle={styles.lblRadioDescTxt}
                                                descLabel={subItem.description}
                                                selected={!!((this.state.selectedItemID !== "" && subItem.key === this.state.selectedItemID))}
                                                onPress={this.onSelected(subItem)}
                                            />
                                        );
                                    })}
                                </View>
                            </View>
                        );
                    })}

                </View>
            );

        } 
            return (
                <View>
                    <Text style={styles.lblTxt}>
                        {result.value}
                    </Text>
                    <View style={styles.radioBtnGrp}>
                        {accSubTypes.map((item) => {
                            return (
                                <CustomRadio
                                    key={item.key}
                                    size={36}
                                    componentStyle={styles.radioRow}
                                    outerCicleColor="#DEDEDF"
                                    innerCicleColor="#61285F"
                                    labelStyle={styles.lblRadioBtnTxt}
                                    label={item.value}
                                    descLabelStyle={styles.lblRadioDescTxt}
                                    descLabel={item.description}
                                    selected={!!((this.state.selectedItemID !== "" && item.key === this.state.selectedItemID))}
                                    onPress={this.onSelected(item)}
                                />
                            );
                        })}
                    </View>
                </View>
            );
        


    }

    render() {
        AppUtils.Dlog("RENDER::: OpenAccPageOne ::>>> ", this.props);
        const { navigation } = this.props;
        const selectedAccount = navigation.getParam('selectedAccount', {});

        const type = selectedAccount.key || "";
        const currentPage = 1;
        const nextBtnstyle = !this.state.isNextBtnDisabled ? styles.normalBlackBtn : [styles.normalBlackBtn, { opacity: .45 }];
        return (
            <View style={styles.container}>
                {
                    (this.props.accOpeningData.isLoading) && <GLoadingSpinner />
                }
                <GHeaderComponent
                    navigation={this.props.navigation}
                    onPress={this.onClickHeader}
                />
                <ScrollView style={styles.scrollView}>
                    <CustomPageWizard currentPage={currentPage} pageName={`${currentPage } ${ gblStrings.accManagement.accType}`} />
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
                            disabled={this.state.isNextBtnDisabled}
                        />
                    </View>


                    { /* ----------- Disclaimer -------------------*/}

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
OpenAccPageOneComponent.defaultProps = {
    navigation:{},
    getAccountSubTypes: {},
    accOpeningData: {},
    saveData: null,
    selectAccTypes: null ,
    saveAccountOpening: null 

};
export default OpenAccPageOneComponent;
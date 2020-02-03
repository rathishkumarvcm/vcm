import React, { Component } from 'react';
import { Text, View, ScrollView, TouchableOpacity,Switch } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import { GHeaderComponent, GFooterSettingsComponent, GIcon, GButtonComponent, showAlert ,GInputComponent, GDateComponent } from '../../CommonComponents';
import { CustomRadio, CustomCheckBox } from '../../AppComponents';
import gblStrings from '../../Constants/GlobalStrings';
import AppUtils from '../../Utils/AppUtils';
import * as ActionTypes from "../../Shared/ReduxConstants/ServiceActionConstants";

const swithcStyle = { flase: '#DBDBDB', true: '#444444' };
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
const date = new Date().getDate(); //  Current Date
const month = new Date().getMonth() + 1; //  Current Month
const year = new Date().getFullYear(); //  Current Year
const currentdate = `${month}-${date}-${year}`;

class AccountMessagingGeneralDocumentsComponent extends Component {
    constructor(props) {
        super(props);
        this.scrollRef = React.createRef();
        const { initialState } = this.props;
        //  set true to isLoading if data for this screen yet to be received and wanted to show loader.
        this.state = {
           // isLoading: false,            

            selectedTaxDocumentsItemID: '1',          
            selectedConfirmItemID:'1',           
            selectedGeneralDocumentsAnnualItemID: '1',          
            selectedGeneralDocumentsPrivacyItemID: '1',
            saveSuccess:false,
            accountPreferenceData: {},          
            switchValue:false,
            errMsg: "",
            personal: {
                addressType: "",
                addrLine1: "",
                addrLine2: "",
                zipcode: "",
                city: "",
                stateCity: "",
                emailAddress: initialState.email || "",               
                addrLine1Validation: true,
                addrLine2Validation: true,
                zipcodeValidation: true,
                cityValidation: true,
                stateCityValidation: true,
                stateValidation: true,
                emailAddressValidation: true,
                startDate: "",
                endDate: "",                
                startDateValidation: true,              
                endDateValidation: true,
                endDateValiMsg: ""
            },
            currentZipCodeRef: {
                stateKey: "",
                keyName: "",
                objIndex: ""
            },
            applySelected: false,
            applySelectedError: false           
        };
    }        

    componentDidMount() {                         
        
    }

    static getDerivedStateFromProps(props, prevState){
        // initialize state variable and return. If no changes required for state
        // variable then return empty object. return {}

        const {accMessageDocumentinitialState} = props;     
        const {accountPreferenceData} = prevState;     
  
         if (accMessageDocumentinitialState && Object.entries(accountPreferenceData).length === 0){
            // AppUtils.debugLog(`Preference=====> ${JSON.stringify(Object.entries(accMessageDocumentinitialState).length)}`);
            return {
                accountPreferenceData: accMessageDocumentinitialState
            };            
        }
        return{                           
            accountPreferenceData: prevState.accountPreferenceData
        };                    
    }        

    componentDidUpdate(prevProps, prevState) {

        AppUtils.debugLog(`componentDidUpdate::::> ${prevState}`);
        const { addressFormatData } = this.props;

        const { currentZipCodeRef } = this.state;
        const {
            //  stateKey = "",
            keyName = "",
            objIndex = -1
        } = currentZipCodeRef;

        if (this.props !== prevProps) {           

            const stateCityKey = ActionTypes.GET_STATECITY;
            if (addressFormatData[`${stateCityKey}`]) {
                if (addressFormatData[`${stateCityKey}`] !== prevProps.addressFormatData[`${stateCityKey}`]) {
                    const tempResponse = addressFormatData[`${stateCityKey}`];

                    if (tempResponse && tempResponse.City) {
                        if (keyName === "zipcode" && objIndex !== -1) {
                            const newItems = [];
                            newItems[parseInt(objIndex,10)].city = tempResponse.City;
                            newItems[parseInt(objIndex,10)].stateCity = tempResponse.State;

                            this.setState(() => (() => ({
                                [prevState.currentZipCodeRef.stateKey]: {
                                    ...prevState[prevState.currentZipCodeRef.stateKey]                                   

                                }
                            })));
                        }else {
                            this.setState(() => ({
                                [prevState.currentZipCodeRef.stateKey]: {
                                    ...prevState[prevState.currentZipCodeRef.stateKey],
                                    city: tempResponse.City,
                                    stateCity: tempResponse.State

                                }
                            }));
                        }
                    }
                }
            }

            const addressKey = ActionTypes.GET_ADDRESSFORMAT;
            if (addressFormatData[`${addressKey}`]) {
                if (addressFormatData[`${addressKey}`] !== prevProps.addressFormatData[`${addressKey}`]) {
                    const tempResponse = addressFormatData[`${addressKey}`];

                    if (tempResponse && tempResponse.City) {
                        if (keyName === "zipcode" && objIndex !== -1) {
                            const newItems = [];
                            newItems[parseInt(objIndex,10)].city = tempResponse.City;
                            newItems[parseInt(objIndex,10)].stateCity = tempResponse.State;
                            newItems[parseInt(objIndex,10)].addrLine1 = tempResponse.Address1 || "";
                            newItems[parseInt(objIndex,10)].addrLine2 = tempResponse.Address2 || "";
                            newItems[parseInt(objIndex,10)].addrLine1Validation = true;
                            newItems[parseInt(objIndex,10)].addrLine2Validation = true;

                            this.setState(() => (() => ({
                                [prevState.currentZipCodeRef.stateKey]: {
                                    ...prevState[prevState.currentZipCodeRef.stateKey]                                    
                                }
                            })));
                        } 
                        else {
                            this.setState(() => ({
                                [prevState.currentZipCodeRef.stateKey]: {
                                    ...prevState[prevState.currentZipCodeRef.stateKey],
                                    city: tempResponse.City,
                                    stateCity: tempResponse.State,
                                    addrLine1: tempResponse.Address1 || "",
                                    addrLine2: tempResponse.Address2 || "",
                                    addrLine1Validation: true,
                                    addrLine2Validation: true
                                }
                            }));
                        }
                    } else if (tempResponse && tempResponse.ErrorNumber) {
                        if (currentZipCodeRef.keyName === "zipcode" && objIndex !== -1) {
                            const newItems = [];
                            newItems[parseInt(objIndex,10)].addrLine1 = "";
                            newItems[parseInt(objIndex,10)].addrLine2 = "";
                            newItems[parseInt(objIndex,10)].addrLine1Validation = false;
                            newItems[parseInt(objIndex,10)].addrLine2Validation = false;

                            this.setState(() => (() => ({
                                [prevState.currentZipCodeRef.stateKey]: {
                                    ...prevState[prevState.currentZipCodeRef.stateKey]                                   
                                },
                                errMsg: "Invalid address"

                            })));
                        } else {
                            this.setState(() => ({
                                [prevState.currentZipCodeRef.stateKey]: {
                                    ...prevState[prevState.currentZipCodeRef.stateKey],
                                    // addrLine1: "",
                                    // addrLine2: "",
                                    addrLine1Validation: false,
                                    addrLine2Validation: false
                                },
                                errMsg: "Invalid address"
                            }));
                        }
                    }
                }
            }
        }
    }    

    isEmpty = (str) => {
        if (str === "" || str === undefined || str === null || str === "null" || str === "undefined" || str.replace(/^\s+|\s+$/gm, '') === "") {
            return true;
        }
        return false;
    } 

    goBack = () => {
        const{ navigation }=this.props;
        navigation.goBack();
    }

    navigategeneralSettings = () =>{
        const{ navigation }=this.props;
        navigation.navigate('generalSettings');
    } 

    onPrefernceSelected =(preferenceType,key,selected) =>()=>{       

        AppUtils.debugLog(`Data: ${preferenceType} key:${key} Selected:${selected}`);     
        
        let newItm = [];        
        const { accountPreferenceData } = this.state;
        newItm = accountPreferenceData;               

        for(let i = 0; i < newItm.preferences.length; i +=1) {
            if(newItm.preferences[parseInt(i,10)].preferenceType === preferenceType){               
                for(let j = 0; j < newItm.preferences[parseInt(i,10)].investmentStatements.length; j +=1) {
                    if(newItm.preferences[parseInt(i,10)].investmentStatements[parseInt(j,10)].key === key){                      
                        newItm.preferences[parseInt(i,10)].investmentStatements[parseInt(j,10)].selected = !selected;
                    }else{
                        newItm.preferences[parseInt(i,10)].investmentStatements[parseInt(j,10)].selected = selected;
                    }
                }
            }
        }                      
        this.setState({ accountPreferenceData: newItm });       
    }

    onDocumentsSelected = (documentType,key,selected) =>()=>{       

        AppUtils.debugLog(`Data: ${documentType} key:${key} Selected:${selected}`);     
        
        let newItm = [];        
        const { accountPreferenceData } = this.state;
        newItm = accountPreferenceData;               

        for(let i = 0; i < newItm.taxDocuments.length; i +=1) {
            if(newItm.taxDocuments[parseInt(i,10)].documentType === documentType){               
                for(let j = 0; j < newItm.taxDocuments[parseInt(i,10)].documentStatements.length; j +=1) {
                    if(newItm.taxDocuments[parseInt(i,10)].documentStatements[parseInt(j,10)].key === key){                      
                        newItm.taxDocuments[parseInt(i,10)].documentStatements[parseInt(j,10)].selected = !selected;
                    }else{
                        newItm.taxDocuments[parseInt(i,10)].documentStatements[parseInt(j,10)].selected = selected;
                    }
                }
            }
        }                      
        this.setState({ accountPreferenceData: newItm });       
    }

    onSelectedConfirm = (item) => () =>{        
        this.setState({
                selectedConfirmItemID: item.key                       
            }
        );     
    }

    toggleSwitch = (value) => {       
        this.setState({switchValue: value});      
     }

     setInputRef = (inputComp) => (ref) => {
        this[`${inputComp}`] = ref;
    }

    setApplyState = () => {     
        const {applySelected} = this.state;    
        this.setState({applySelected : !applySelected });
    }   

    navigateFAQPage=()=>{       
        showAlert(gblStrings.common.appName ,"Navigate to Faq",gblStrings.common.ok);       
    }

    onChangeText = (stateKey, keyName) => text => {
        AppUtils.debugLog("onChangeText:::>");
        this.setState(prevState => ({
            [stateKey]: {
                ...prevState[`${stateKey}`],
                [keyName]: text,
                [`${keyName}Validation`]: true,
            }
        }));

        if(keyName === "startDate"){
            this.setState(prevState => ({               
                    personal: {
                        ...prevState.personal, 
                        endDate : ""
            }
         }));

        }
    }

    onSubmitEditing = (input) => text => {
        AppUtils.debugLog(`onSubmitEditing:::>${text}`);
        input.focus();
    }

    onSubmitZipEditing = (stateKey, keyName, nextInputFocus) => text => {
        AppUtils.debugLog(`onSubmitZipEditing:::>${nextInputFocus} ${text}`);

        const { getStateCity, getAddressFormat } = this.props;
        const { currentZipCodeRef } = this.state;

        const newItems = { ...currentZipCodeRef };
        //   const newItems = { ...this.state.currentZipCodeRef };

        newItems.keyName = keyName;
        newItems.stateKey = stateKey;
        newItems.objIndex = -1;
        newItems.apiName = ActionTypes.GET_STATECITY;

        this.setState({
            currentZipCodeRef: newItems,
            isUSPSAddrFormatAPICalled: true,
            isUSPSStateAPICalled: true
        });

        let payload = {};
        let addressPayload = {};        
        
        const { [stateKey]: stateKeyVal } = this.state;
        payload = {
            "Zip": stateKeyVal[`${keyName}`]
        };
        
        addressPayload = {
            ...payload,
            "Address1": stateKeyVal.addrLine1,
            "Address2": stateKeyVal.addrLine2,
            "City": stateKeyVal.city,
            "State": stateKeyVal.stateCity,
            "Zip": stateKeyVal[`${keyName}`]
        };
        
        getStateCity(payload);
        getAddressFormat(addressPayload);
    }   

    validateFileds = () =>{
        let isValidationSuccess = false;     
        try {       
            this.setState(prevState => ({
                personal: {
                    ...prevState.personal,                      
                    addrLine1Validation: true,
                    addrLine2Validation: true,
                    zipcodeValidation: true,
                    cityValidation: true,
                    stateCityValidation: true,
                    stateValidation: true,                    
                }                    
            }));
            if (!this.validateInfoFields()) {
                isValidationSuccess = false;
            }else {
                isValidationSuccess = true;
            }        
        } catch (err) {
            AppUtils.debugLog(`Error:::${JSON.stringify(err)}`);
        }
        return isValidationSuccess;
    }

    validateInfoFields = () => {
        const { personal } = this.state;

        let errMsg = "";
        let isValidationSuccess = false;
        let input = "";       
        
        if(this.isEmpty(personal.addrLine1)) {
            errMsg = gblStrings.accManagement.emptyAddressLine1Msg;
            input = 'addrLine1';
        } else if (this.isEmpty(personal.addrLine2)) {
            errMsg = gblStrings.accManagement.emptyAddressLine2Msg;
            input = 'addrLine2';
        } else if (this.isEmpty(personal.zipcode)) {
            errMsg = gblStrings.accManagement.emptyZipCodeMsg;
            input = 'zipcode';
        } else if (personal.zipcode.length < gblStrings.maxLength.zipCode) {
            errMsg = gblStrings.accManagement.invalidZipCodeMsg;
            input = 'zipcode';
        } else if (this.isEmpty(personal.city)) {
            errMsg = gblStrings.accManagement.emptyCityMsg;
            input = 'city';
        } else if (this.isEmpty(personal.stateCity)) {
            errMsg = gblStrings.accManagement.emptyStateMsg;
            input = 'stateCity';
        } else if (!emailRegex.test(personal.emailAddress)) {
            errMsg = gblStrings.accManagement.invalidEmailMasg;
            input = 'emailAddress';
        }else if (this.isEmpty(personal.startDate)) {
            errMsg = gblStrings.accManagement.emptyStartDate;
            input = 'startDate';
        }else if (this.isEmpty(personal.endDate)) {
            errMsg = gblStrings.accManagement.emptyEndDate;
            input = 'endDate';
        }
        else {
            isValidationSuccess = true;
        }

        if (!isValidationSuccess) {
            AppUtils.debugLog(`Personal Info errMsg:: ${errMsg}`);

            this.setState(prevState => ({
                personal: {
                    ...prevState.personal,
                    [`${input}Validation`]: false,                 
                },
                isValidationSuccess,
                errMsg: isValidationSuccess === false ? errMsg : ""
            }));

            if (input !== "" && input !== null && input !== undefined) {
                if (this[`${input}`] !== null && this[`${input}`] !== undefined) {
                    if (typeof this[`${input}`].focus === 'function') {
                        this[`${input}`].focus();
                    }
                }
            }            
        }
        return isValidationSuccess;
    }

    saveButtonAction = () => {      
        const {switchValue} = this.state;       

        if(!switchValue){
            this.scrollRef.current.scrollTo({y:0, x:0,animated: true });       
            this.setState({
                saveSuccess: true                       
            }); 
        }else if(switchValue && this.validateFileds()){
            AppUtils.debugLog('Save Button Clicked...');   

            const{ selectedTaxDocumentsItemID,selectedConfirmItemID,selectedGeneralDocumentsAnnualItemID,selectedGeneralDocumentsPrivacyItemID }=this.state;
            const{ saveData }=this.props;
            const payloadData = {
                selectedTaxDocumentsItemID, 
                selectedConfirmItemID,
                selectedGeneralDocumentsAnnualItemID,
                selectedGeneralDocumentsPrivacyItemID,
            };        
            saveData(payloadData);
            this.scrollRef.current.scrollTo({y:0, x:0,animated: true });       
            this.setState({
                saveSuccess: true                       
            });              
        }  
    }

    submitButtonAction =() =>{
        const {applySelected} = this.state;
        if(applySelected){
            this.setState({
                applySelectedError : false                       
            }); 
            this.saveButtonAction();
        }else{
            this.setState({
                applySelectedError : true                       
            });  
        }
    }    

    render() {
        const{ navigation }=this.props;
        const{ saveSuccess,accountPreferenceData,switchValue,personal,errMsg,applySelected,applySelectedError }=this.state;
        
        return (
            <View style={styles.container}>
                <GHeaderComponent
                    navigation={navigation}
                />
                <ScrollView style={styles.scrollViewFlex} ref={this.scrollRef}>
                    <View style={styles.settingsView}>
                        <TouchableOpacity style={styles.touchOpacityPosition} onPress={this.navigategeneralSettings}>
                            <Text style={styles.settingsInfo}>
                                {gblStrings.settingAccountMessaging.setting}
                            </Text>
                        </TouchableOpacity>                       
                        <TouchableOpacity style={styles.touchOpacityPosition} onPress={this.goBack}>
                            <Text style={styles.settingsInfo}>
                                {gblStrings.settingAccountMessaging.accountMessagingArrow}
                            </Text>
                        </TouchableOpacity>                      
                        <Text style={styles.settingsInfoCurrent}>
                            {gblStrings.settingAccountMessaging.accountMessagingGeneralArrow}
                        </Text>
                    </View>

                    <View style={styles.settingsInfoHead}>
                        <Text style={styles.settingsInfoHeadTilte}>
                            {gblStrings.settingAccountMessaging.generalDocumentsHeadTitle}
                        </Text>
                        <Text style={styles.settingsInfo}>
                            {gblStrings.settingAccountMessaging.accountMessagingGeneralTitleDesc}
                        </Text>
                    </View>                 
                    
                    {                    
                    (saveSuccess) ? (
                        <View style={styles.saveSuccessContainer}>
                            <GIcon
                                name="check"
                                type="antdesign"
                                size={30}
                                color="#707070"
                            />
                            <Text style={styles.saveSuccessText}>
                                Delivery Preference settings has been updated successfully
                            </Text>
                            <TouchableOpacity style={styles.touchOpacityPosition} onPress={this.goBack}>
                                <GIcon
                                    name="close"
                                    type="evilicon"
                                    size={40}
                                    color="#707070"
                                />
                            </TouchableOpacity>
                        </View>
                     )     
                     : null
                     }                  
                     {
                        (Object.entries(accountPreferenceData).length>0)?(                                     
                        <View>

                        <View style={styles.taxDocumentcontainer}>
                            <View style={styles.taxDocumentHeaderview}>                           
                                <Text style={styles.taxDocumentHeaderViewTitle}>
                                    Traditional IRA
                                </Text>
                            </View>
                            <View style={styles.lineBorder} />
                        </View>   

                        <View style={styles.accountInfoContainer}>

                            <View style={styles.accountNameContainer}>  
                                <Text style={styles.accountNameText}>
                                    Account Name
                                </Text>
                                <Text style={styles.accountNameValueText}>
                                    {accountPreferenceData.accName}
                                </Text>
                            </View>

                            <View style={styles.accountNameContainer}>  
                                <Text style={styles.accountNumberText}>
                                    Account Number
                                </Text>
                                <Text style={styles.accountNumberValueText}>
                                    {accountPreferenceData.accNumber}
                                </Text>
                            </View>
                        </View>

                        <View style={styles.taxDocumentcontainer}>
                            <View style={styles.taxDocumentHeaderview}>    
                                <GIcon
                                    name="minus"
                                    type="antdesign"
                                    size={15}
                                    color="#56565A"
                                />                       
                                <Text style={styles.taxDocumentHeaderViewTitle}>
                                    Edit Delivery Preferences
                                </Text>
                            </View>
                            <View style={styles.lineBorder} />
                        </View>                    
                    
                        <View style={styles.taxDocumentcontainerBottom}> 
                            <Text style={styles.taxDocumentAlertsContent}>
                                {accountPreferenceData.receiveInvestmentAcc}
                            </Text> 

                            <View>
                                {
                                    accountPreferenceData.preferences.map((accounts) => {
                                        return (
                                            <View style={styles.deliveryPreferenceOptions} key={accounts.preferenceType}>
                                                <Text style={styles.investmentTypeText}>
                                                    {accounts.preferenceType}
                                                </Text>          
                                                <View style={styles.radioBtnGrpConfirm}>                        
                                                {    
                                                    accounts.investmentStatements.map((preference) =>{                                       
                                                        return(                    
                                                            <View key={preference.key}>                                                   
                                                                <CustomRadio
                                                                    key={preference.key}
                                                                    size={30}
                                                                    itemBottom={10}
                                                                    itemTop={10}
                                                                    outerCicleColor="#DEDEDF"
                                                                    innerCicleColor="#61285F"
                                                                    labelStyle={styles.lblRadioBtnTxt}
                                                                    label={preference.name}     
                                                                    descLabelStyle={styles.lblRadioDescTxt}
                                                                    descLabel=""                                                             
                                                                    selected={preference.selected}
                                                                    onPress={this.onPrefernceSelected(accounts.preferenceType,preference.key,preference.selected)}
                                                                />          
                                                            </View>                                                                                
                                                        );                                                        
                                                    })
                                                }
                                                </View>
                                            </View>        
                                        );                                
                                    })
                                }                      
                            </View>                                                 
                        </View>

                        <View style={styles.taxDocumentcontainer}>
                            <View style={styles.taxDocumentHeaderview}>
                                <GIcon
                                    name="minus"
                                    type="antdesign"
                                    size={15}
                                    color="#56565A"
                                />
                                <Text style={styles.taxDocumentHeaderViewTitle}>
                                    {gblStrings.settingAccountMessaging.accountMessagingGeneralTaxDocuments}
                                </Text>
                            </View>
                            <View style={styles.lineBorder} />
                        </View>   

                        <View style={styles.taxDocumentcontainerBottom}> 
                            <Text style={styles.taxDocumentAlertsContent}>
                                {accountPreferenceData.receiveTaxDocuments}
                            </Text> 

                            <View>
                            {
                                accountPreferenceData.taxDocuments.map((taxDocument) => {
                                    return (
                                        <View style={styles.deliveryPreferenceOptions} key={taxDocument.documentType}>
                                            <Text style={styles.investmentTypeText}>
                                                {taxDocument.documentType}
                                            </Text>          
                                            <View style={styles.radioBtnGrpConfirm}>                        
                                            {    
                                                taxDocument.documentStatements.map((statements) =>{                                       
                                                    return(                    
                                                        <View key={statements.key}>                                                   
                                                            <CustomRadio
                                                                key={statements.key}
                                                                size={30}
                                                                itemBottom={10}
                                                                itemTop={10}
                                                                outerCicleColor="#DEDEDF"
                                                                innerCicleColor="#61285F"
                                                                labelStyle={styles.lblRadioBtnTxt}
                                                                label={statements.name}     
                                                                descLabelStyle={styles.lblRadioDescTxt}
                                                                descLabel=""                                                             
                                                                selected={statements.selected}
                                                                onPress={this.onDocumentsSelected(taxDocument.documentType,statements.key,statements.selected)}
                                                            />          
                                                        </View>                                                                                
                                                    );                                                        
                                                })
                                            }
                                            </View>
                                        </View>        
                                    );                                
                                    })
                                }          
                            </View>                    
                        </View>               
                        <View style={styles.generalDocumentDisclaimerView}>                                                           
                            <Text style={styles.generalDocumentDisclaimerViewTitle}>
                                    {gblStrings.settingAccountMessaging.accountMessagingGeneralSomeDoc}  
                                <Text style={styles.generalDocumentDisclaimerViewFaq} onPress={this.navigateFAQPage}>
                                    {gblStrings.settingAccountMessaging.accountMessagingGeneralFaqPage}  
                                </Text> 
                                {gblStrings.settingAccountMessaging.accountMessagingGeneralAdditionalAssist}  
                            </Text>
                        </View>

                        <View style={styles.taxDocumentcontainer}>
                            <View style={styles.taxDocumentHeaderview}>    
                                <GIcon
                                    name="minus"
                                    type="antdesign"
                                    size={15}
                                    color="#56565A"
                                />                       
                                <Text style={styles.taxDocumentHeaderViewTitle}>
                                    Add/Maintain Seasonal Address (Optional)
                                </Text>
                            </View>
                            <View style={styles.lineBorder} />
                        </View>      
                        <View style={styles.toggleOptionscontainer}>
                            <Text style={styles.toggleText}>
                                Would you like to Set Seasonal Address?
                            </Text>
                            <View>                        
                                <Switch trackColor={swithcStyle}
                                    onValueChange={this.toggleSwitch}
                                    value = {switchValue}
                                />        
                            </View>
                        </View>              

                        {
                            (switchValue)? (
                            <View style={styles.seasonalAddressContainer}>                            
                                <Text style={styles.lblTxt}>
                                    {gblStrings.addAddressInfo.addressLineOne}
                                </Text>
                                <GInputComponent         
                                    inputref={this.setInputRef("addrLine1")}                     
                                    propInputStyle={personal.addrLine1Validation ? styles.customTxtBox : styles.customTxtBoxError}
                                    maxLength={gblStrings.maxLength.emplAddress1}
                                    value={personal.addrLine1}
                                    onChangeText={this.onChangeText("personal", "addrLine1")}                               
                                    onSubmitEditing={this.onSubmitZipEditing("personal", "zipcode", this.addrLine2)}
                                    
                                    errorFlag={!personal.addrLine1Validation}
                                    errorText={errMsg}
                                />

                                <Text style={styles.lblTxt}>
                                    {gblStrings.addAddressInfo.addressLineTwo}
                                </Text>
                                <GInputComponent          
                                    inputref={this.setInputRef("addrLine2")}                      
                                    propInputStyle={personal.addrLine2Validation ? styles.customTxtBox : styles.customTxtBoxError}                                
                                    maxLength={gblStrings.maxLength.addressLine2}
                                    value={personal.addrLine2}
                                    onChangeText={this.onChangeText("personal", "addrLine2")}                              
                                    onSubmitEditing={this.onSubmitZipEditing("personal", "zipcode", this.zipcode)}
                                    errorFlag={!personal.addrLine2Validation}
                                    errorText={errMsg}
                                />

                                <Text style={styles.lblTxt}>
                                    {gblStrings.addAddressInfo.zipCode}
                                </Text>
                                <GInputComponent          
                                    inputref={this.setInputRef("zipcode")}                      
                                    propInputStyle={personal.zipcodeValidation ? styles.customTxtBox : styles.customTxtBoxError}                           
                                    value={personal.zipcode}
                                    maxLength={gblStrings.maxLength.zipCode}
                                    returnKeyType="done"
                                    onChangeText={this.onChangeText("personal", "zipcode")}
                                    keyboardType="number-pad"
                                    placeholder={gblStrings.accManagement.enterZip}
                                    onSubmitEditing={this.onSubmitZipEditing("personal", "zipcode", this.city)}
                                    errorFlag={!personal.zipcodeValidation}
                                    errorText={errMsg}
                                />

                                <Text style={styles.lblTxt}>
                                    {gblStrings.addAddressInfo.cityLabel}
                                </Text>
                                <GInputComponent
                                    inputref={this.setInputRef("city")}
                                    propInputStyle={personal.cityValidation ? styles.customPopulatedTxtBox : styles.customTxtBoxError}                               
                                    maxLength={gblStrings.maxLength.city}
                                    value={personal.city}
                                    onChangeText={this.onChangeText("personal", "city")}
                                    onSubmitEditing={this.onSubmitEditing(this.stateCity)}
                                    errorFlag={!personal.cityValidation}
                                    errorText={errMsg}                               
                                    editable={false}
                                />

                                <Text style={styles.lblTxt}>
                                    {gblStrings.addAddressInfo.stateLabel}
                                </Text>      
                                <GInputComponent          
                                    inputref={this.setInputRef("stateCity")}                      
                                    propInputStyle={personal.stateCityValidation ? styles.customPopulatedTxtBox : styles.customTxtBoxError}                             
                                    returnKeyType="done"
                                    maxLength={gblStrings.maxLength.state}
                                    value={personal.stateCity}
                                    onChangeText={this.onChangeText("personal", "stateCity")}
                                    onSubmitEditing={this.onSubmitEditing(this.mobileNo)}
                                    errorFlag={!personal.stateCityValidation}
                                    errorText={errMsg}                               
                                    editable={false}
                                />

                                <Text style={styles.lblTxt}>
                                    {gblStrings.marketingPrivacyLabel.marketingProductEmail}
                                </Text>
                                <GInputComponent                           
                                    propInputStyle={personal.emailAddressValidation ? styles.customTxtBox : styles.customTxtBoxError}
                                    placeholder= {gblStrings.marketingPrivacyLabel.marketingProductEmail}
                                    keyboardType="email-address"
                                    maxLength={gblStrings.maxLength.emailID}
                                    onChangeText={this.onChangeText("personal", "emailAddress")}
                                    onSubmitEditing={this.onSubmitEditing(this.socialSecurityNo)}
                                    errorFlag={!personal.emailAddressValidation}
                                    errorText={errMsg}
                                    value={personal.emailAddress}
                                />                 

                                <View style={styles.dateContainer}>
                                                                                        
                                    <Text style={styles.taxDocumentHeaderViewTitle}>
                                        Effective Start & End Dates
                                    </Text>       
                                
                                    <Text style={styles.lblTxt}>
                                        {gblStrings.accManagement.from}
                                    </Text>
                                    <GDateComponent                                    
                                        inputref={this.setInputRef("startDate")}
                                        date={personal.startDate}
                                        placeholder="MM-DD-YYYY"
                                        dateTextLayout={styles.dateTextLayout}
                                        componentStyle={styles.dateStyle}
                                        minDate={currentdate}                                   
                                        errorFlag={!personal.startDateValidation}
                                        errorMsg={errMsg}
                                        onDateChange={this.onChangeText("personal", "startDate")}
                                    />
                                    <Text style={styles.lblTxtCalender}>
                                        {gblStrings.common.calender}
                                    </Text>

                                    <Text style={styles.lblTxt}>
                                        {gblStrings.accManagement.to}
                                    </Text>
                                    <GDateComponent
                                        inputref={this.setInputRef("endDate")}
                                        date={personal.endDate}
                                        placeholder="MM-DD-YYYY"
                                        dateTextLayout={styles.dateTextLayout}
                                        componentStyle={styles.dateStyle}
                                        minDate={personal.startDate ? personal.startDate : currentdate}
                                        errorFlag={!personal.endDateValidation}
                                        errorMsg={errMsg}
                                        onDateChange={this.onChangeText("personal", "endDate")}
                                    />
                                    <Text style={styles.lblTxtCalender}>
                                        {gblStrings.common.calender}
                                    </Text>                      
                                </View>  
                            </View>
                            )                                                   
                            :null
                        }

                        <GButtonComponent
                            buttonStyle={styles.cancelButton}
                            buttonText={gblStrings.common.cancel}  
                            textStyle={styles.cancelButtonText}
                            onPress={this.goBack}
                        />

                        <GButtonComponent
                            buttonStyle={styles.applyButton}
                            buttonText={gblStrings.common.apply}  
                            textStyle={styles.saveButtonText}
                            onPress={this.saveButtonAction}
                        />

                         {
                            (applySelectedError)? (
                                <Text style={styles.errTxtSubmit}>
                                    Please select the settings to proceed
                                </Text>
                              )
                            : null
                         }                     
                    
                        <View style={styles.applySectionGrp}>
                            <CustomCheckBox
                                size={20}
                                itemBottom={0}
                                itemTop={0}
                                outerCicleColor="#707070"
                                innerCicleColor="#61285F"
                                labelStyle={styles.applySectionTxt}
                                label="Apply the settings to all of your purchased Accounts"
                                selected={applySelected}
                                onPress={this.setApplyState}
                            />   
                            <GButtonComponent
                                buttonStyle={styles.saveButton}
                                buttonText={gblStrings.common.submit}  
                                textStyle={styles.saveButtonText}
                                onPress={this.submitButtonAction}
                            />
                        </View>         
                    
                        </View>

                    ):null
                    }       
                    
                    <GFooterSettingsComponent />
                </ScrollView>
            </View>
        );
    }
}

AccountMessagingGeneralDocumentsComponent.propTypes = {
    navigation: PropTypes.instanceOf(Object),    
    accMessageDocumentinitialState: PropTypes.instanceOf(Object),
    getAddressFormat: PropTypes.func,
    saveData:PropTypes.func,
    initialState: PropTypes.instanceOf(Object),
    addressFormatData: PropTypes.instanceOf(Object),
    getStateCity: PropTypes.func,
};

AccountMessagingGeneralDocumentsComponent.defaultProps = {
    navigation : {},
    accMessageDocumentinitialState : {},
    getAddressFormat: null,
    getStateCity: null,
    initialState: {},
    addressFormatData: {},
    saveData: () => { }
};

export default AccountMessagingGeneralDocumentsComponent;

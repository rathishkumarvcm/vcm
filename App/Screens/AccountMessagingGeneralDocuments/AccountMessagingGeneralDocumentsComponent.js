import React, { Component } from 'react';
import { Text, View, ScrollView, TouchableOpacity,Switch } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import { GHeaderComponent, GFooterSettingsComponent, GIcon, GButtonComponent, showAlert ,GInputComponent } from '../../CommonComponents';
import { CustomRadio } from '../../AppComponents';
import gblStrings from '../../Constants/GlobalStrings';
import AppUtils from '../../Utils/AppUtils';
import * as ActionTypes from "../../Shared/ReduxConstants/ServiceActionConstants";

// const documentsTypes = [
//     { key: 'online', name: gblStrings.settingAccountMessaging.accountMessagingGeneralOnline },
//     { key: 'paper', name: gblStrings.settingAccountMessaging.accountMessagingGeneralPaper }    
// ];

// const documentsTypesConfirm = [
//     { key: 'confirm_yes', name: gblStrings.common.yes },
//     { key: 'confirm_no', name: gblStrings.common.no }   
// ];

const swithcStyle = { flase: '#DBDBDB', true: '#444444' };

const accountsPreference = 
    {       
        "accountType": "Traditional IRA",               
        "accName":"Lorem Ipsum",
        "accNumber":"7667-3345-1111",                  
        "receiveInvestmentAcc":"How would you like to receive documents for your Investment account?",
        "preferences":[
            {
                "preferenceType": "Investment Statements and Inserts",     
                "investmentStatements":[
                    { "key": "online", "name": "Online", "selected":true },
                    { "key": "paper", "name": "Paper", "selected":false }
                ]
            },
            {
                "preferenceType": "Investment Confirmations and Associated Prospectuses",     
                "investmentStatements":[
                    { "key": "online", "name": "Online", "selected":false },
                    { "key": "paper", "name": "Paper", "selected":true }
                ]
            },
            {
                "preferenceType": "Investment Shareholder Reports (includes prospectus other documents)",     
                "investmentStatements":[
                    { "key": "online", "name": "Online", "selected":true },
                    { "key": "paper", "name": "Paper", "selected":false }
                ]
            },
            {
                "preferenceType": "Investment Eligible Correspondence",     
                "investmentStatements":[
                    { "key": "online", "name": "Online", "selected":false },
                    { "key": "paper", "name": "Paper", "selected":true }
                ]
            }                   
        ],
        "receiveTaxDocuments":"How would you like to receive tax documents?",
        "taxDocuments":[
            {
                "documentType": "Documents for Tax Accounts?",     
                "documentStatements":[
                    { "key": "online", "name": "Online", "selected":true },
                    { "key": "paper", "name": "Paper", "selected":false }
                ]
            },
            {
                "documentType": "Would you like all of your other documents from VCM Delivered the same way?",     
                "documentStatements":[
                    { "key": "yes", "name": "Yes", "selected":false },
                    { "key": "no", "name": "No", "selected":true }
                ]
            }
        ]
    };


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
            accountPreferenceData: accountsPreference,          
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
                addressTypeValidation: true,
                addrLine1Validation: true,
                addrLine2Validation: true,
                zipcodeValidation: true,
                cityValidation: true,
                stateCityValidation: true,
                stateValidation: true,
                emailAddressValidation: true,
            },
            currentZipCodeRef: {
                stateKey: "",
                keyName: "",
                objIndex: ""
            },
           
        };
    }        

    componentDidMount() {
               
            const{ accMessageDocumentinitialState }=this.props;
            if (this.props && accMessageDocumentinitialState && accMessageDocumentinitialState.selectedTaxDocumentsItemID) {
                this.setState({ selectedTaxDocumentsItemID: accMessageDocumentinitialState.selectedTaxDocumentsItemID });
            }
            if (this.props && accMessageDocumentinitialState && accMessageDocumentinitialState.selectedConfirmItemID) {
                this.setState({ selectedConfirmItemID: accMessageDocumentinitialState.selectedConfirmItemID });
            }
            if (this.props && accMessageDocumentinitialState && accMessageDocumentinitialState.selectedGeneralDocumentsAnnualItemID) {
                this.setState({ selectedGeneralDocumentsAnnualItemID: accMessageDocumentinitialState.selectedGeneralDocumentsAnnualItemID });
            }
            if (this.props && accMessageDocumentinitialState && accMessageDocumentinitialState.selectedGeneralDocumentsPrivacyItemID) {
                this.setState({ selectedGeneralDocumentsPrivacyItemID: accMessageDocumentinitialState.selectedGeneralDocumentsPrivacyItemID });
            }
      
        
    }

    componentDidUpdate(prevProps, prevState) {

        AppUtils.debugLog(`componentDidUpdate::::> ${prevState}`);
        const { addressFormatData } = this.props;

        const { currentZipCodeRef, estate } = this.state;
        const {
            //  stateKey = "",
            keyName = "",
            objIndex = -1
        } = currentZipCodeRef;

        if (this.props !== prevProps) {           

            const stateCityKey = ActionTypes.GET_STATECITY;
            if (addressFormatData[stateCityKey]) {
                if (addressFormatData[stateCityKey] !== prevProps.addressFormatData[stateCityKey]) {
                    const tempResponse = addressFormatData[stateCityKey];


                    if (tempResponse && tempResponse.City) {
                        if (keyName === "empZipcode") {
                            this.setState(() => ({
                                [prevState.currentZipCodeRef.stateKey]: {
                                    ...prevState[prevState.currentZipCodeRef.stateKey],
                                    empCity: tempResponse.City,
                                    empStateCity: tempResponse.State

                                }
                            }));
                        } else if (keyName === "zipcode_Phy" && objIndex !== -1) {
                            const newItems = [...estate.trusteeData];
                            newItems[objIndex].city_Phy = tempResponse.City;
                            newItems[objIndex].stateCity_Phy = tempResponse.State;


                            this.setState(() => (() => ({
                                [prevState.currentZipCodeRef.stateKey]: {
                                    ...prevState[prevState.currentZipCodeRef.stateKey],
                                    trusteeData: newItems

                                }
                            })));
                        } else if (keyName === "zipcode" && objIndex !== -1) {
                            const newItems = [...estate.trusteeData];
                            newItems[objIndex].city = tempResponse.City;
                            newItems[objIndex].stateCity = tempResponse.State;


                            this.setState(() => (() => ({
                                [prevState.currentZipCodeRef.stateKey]: {
                                    ...prevState[prevState.currentZipCodeRef.stateKey],
                                    trusteeData: newItems

                                }
                            })));
                        } else if (keyName === "zipcode_Phy" && objIndex !== -1) {
                            this.setState(() => ({
                                [prevState.currentZipCodeRef.stateKey]: {
                                    ...prevState[prevState.currentZipCodeRef.stateKey],
                                    city_Phy: tempResponse.City,
                                    stateCity_Phy: tempResponse.State

                                }
                            }));
                        } else {
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
            if (addressFormatData[addressKey]) {
                if (addressFormatData[addressKey] !== prevProps.addressFormatData[addressKey]) {
                    const tempResponse = addressFormatData[addressKey];

                    if (tempResponse && tempResponse.City) {
                        if (keyName === "empZipcode") {
                            this.setState(() => ({
                                [prevState.currentZipCodeRef.stateKey]: {
                                    ...prevState[prevState.currentZipCodeRef.stateKey],
                                    empCity: tempResponse.City,
                                    empStateCity: tempResponse.State,
                                    empAddrLine1: tempResponse.Address1 || "",
                                    empAddrLine2: tempResponse.Address2 || "",
                                    empAddrLine1Validation: true,
                                    empAddrLine2Validation: true
                                }
                            }));
                        } else if (keyName === "zipcode_Phy" && objIndex !== -1) {
                            const newItems = [...estate.trusteeData];
                            newItems[objIndex].city_Phy = tempResponse.City;
                            newItems[objIndex].stateCity_Phy = tempResponse.State;
                            newItems[objIndex].addrLine1_Phy = tempResponse.Address1 || "";
                            newItems[objIndex].addrLine2_Phy = tempResponse.Address2 || "";
                            newItems[objIndex].addrLine1_PhyValidation = true;
                            newItems[objIndex].addrLine2_PhyValidation = true;

                            this.setState(() => (() => ({
                                [prevState.currentZipCodeRef.stateKey]: {
                                    ...prevState[prevState.currentZipCodeRef.stateKey],
                                    trusteeData: newItems

                                }
                            })));
                        } else if (keyName === "zipcode" && objIndex !== -1) {
                            const newItems = [...estate.trusteeData];
                            newItems[objIndex].city = tempResponse.City;
                            newItems[objIndex].stateCity = tempResponse.State;
                            newItems[objIndex].addrLine1 = tempResponse.Address1 || "";
                            newItems[objIndex].addrLine2 = tempResponse.Address2 || "";
                            newItems[objIndex].addrLine1Validation = true;
                            newItems[objIndex].addrLine2Validation = true;

                            this.setState(() => (() => ({
                                [prevState.currentZipCodeRef.stateKey]: {
                                    ...prevState[prevState.currentZipCodeRef.stateKey],
                                    trusteeData: newItems

                                }
                            })));
                        } else if (keyName === "zipcode_Phy") {
                            this.setState(() => ({
                                [prevState.currentZipCodeRef.stateKey]: {
                                    ...prevState[prevState.currentZipCodeRef.stateKey],
                                    city_Phy: tempResponse.City,
                                    stateCity_Phy: tempResponse.State,
                                    addrLine1_Phy: tempResponse.Address1 || "",
                                    addrLine2_Phy: tempResponse.Address2 || "",
                                    addrLine1_PhyValidation: true,
                                    addrLine2_PhyValidation: true
                                }
                            }));
                        } else {
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
                        if (currentZipCodeRef.keyName === "empZipcode") {
                            this.setState(() => ({
                                [prevState.currentZipCodeRef.stateKey]: {
                                    ...prevState[prevState.currentZipCodeRef.stateKey],
                                    // empAddrLine1: "",
                                    // empAddrLine2: ""
                                    empAddrLine1Validation: false,
                                    empAddrLine2Validation: false
                                },
                                errMsg: "Invalid address"

                            }));
                        } else if (currentZipCodeRef.keyName === "zipcode_Phy" && objIndex !== -1) {
                            const newItems = [...estate.trusteeData];
                            newItems[objIndex].addrLine1_Phy = "";
                            newItems[objIndex].addrLine2_Phy = "";
                            newItems[objIndex].addrLine1_PhyValidation = false;
                            newItems[objIndex].addrLine2_PhyValidation = false;

                            this.setState(() => (() => ({
                                [prevState.currentZipCodeRef.stateKey]: {
                                    ...prevState[prevState.currentZipCodeRef.stateKey],
                                    trusteeData: newItems

                                },
                                errMsg: "Invalid address"

                            })));
                        } else if (currentZipCodeRef.keyName === "zipcode" && objIndex !== -1) {
                            const newItems = [...estate.trusteeData];
                            newItems[objIndex].addrLine1 = "";
                            newItems[objIndex].addrLine2 = "";
                            newItems[objIndex].addrLine1Validation = false;
                            newItems[objIndex].addrLine2Validation = false;

                            this.setState(() => (() => ({
                                [prevState.currentZipCodeRef.stateKey]: {
                                    ...prevState[prevState.currentZipCodeRef.stateKey],
                                    trusteeData: newItems

                                },
                                errMsg: "Invalid address"

                            })));
                        } else if (currentZipCodeRef.keyName === "zipcode_Phy") {
                            this.setState(() => ({
                                [prevState.currentZipCodeRef.stateKey]: {
                                    ...prevState[prevState.currentZipCodeRef.stateKey],
                                    // addrLine1_Phy: "",
                                    // addrLine2_Phy: "",
                                    addrLine1_PhyValidation: false,
                                    addrLine2_PhyValidation: false
                                },
                                errMsg: "Invalid address"
                            }));
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
            if(newItm.preferences[i].preferenceType === preferenceType){               
                for(let j = 0; j < newItm.preferences[i].investmentStatements.length; j +=1) {
                    if(newItm.preferences[i].investmentStatements[j].key === key){                      
                        newItm.preferences[i].investmentStatements[j].selected = !selected;
                    }else{
                        newItm.preferences[i].investmentStatements[j].selected = selected;
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
            if(newItm.taxDocuments[i].documentType === documentType){               
                for(let j = 0; j < newItm.taxDocuments[i].documentStatements.length; j +=1) {
                    if(newItm.taxDocuments[i].documentStatements[j].key === key){                      
                        newItm.taxDocuments[i].documentStatements[j].selected = !selected;
                    }else{
                        newItm.taxDocuments[i].documentStatements[j].selected = selected;
                    }
                }
            }
        }                      
        this.setState({ accountPreferenceData: newItm });       
    }



    onSelected = (item,fromType) =>()=> {        
        switch(fromType){
            case 'taxDocuments':
            this.setState({
                    selectedTaxDocumentsItemID: item.key                          
                }
            );             
            break;
            case 'generalDocumentsAnnual':
            this.setState({
                    selectedGeneralDocumentsAnnualItemID: item.key
                }
            );  
            break;
            case 'generalDocumentsPrivacy':
            this.setState({
                    selectedGeneralDocumentsPrivacyItemID: item.key
                                
                }
            );  
            break;
            default:
                break;
        }           
    }

    onSelectedConfirm = (item) => () =>{        
        this.setState({
                selectedConfirmItemID: item.key                       
            }
        );     
    }

    toggleSwitch = (value) => {
        // onValueChange of the switch this function will be called
        this.setState({switchValue: value});
        // state changes according to switch
        // which will result in re-render the text
     }

    saveButtonAction = () => {
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
        // navigation.goBack();        
    }

    navigateFAQPage=()=>{       
        showAlert(gblStrings.common.appName ,"Navigate to Faq",gblStrings.common.ok);       
     }

    onChangeText = (stateKey, keyName) => text => {
        AppUtils.debugLog("onChangeText:::>");
        this.setState(prevState => ({
            [stateKey]: {
                ...prevState[stateKey],
                [keyName]: text,
                [`${keyName}Validation`]: true,
            }
        }));

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
        // if (this.state[stateKey].citizenship === "U.S" || this.state[stateKey].citizenship === undefined ) {    
        if (keyName === "zipcode_Phy") {

            payload = {
                "Zip": this.state[stateKey][keyName]
            };

            addressPayload = {
                ...payload,
                "Address1": this.state[stateKey].addrLine1_Phy,
                "Address2": this.state[stateKey].addrLine2_Phy,
                "City": this.state[stateKey].city_Phy,
                "State": this.state[stateKey].stateCity_Phy,
                "Zip": this.state[stateKey][keyName]

            };
        } else {

            payload = {
                "Zip": this.state[stateKey][keyName]
            };

            addressPayload = {
                ...payload,
                "Address1": this.state[stateKey].addrLine1,
                "Address2": this.state[stateKey].addrLine2,
                "City": this.state[stateKey].city,
                "State": this.state[stateKey].stateCity,
                "Zip": this.state[stateKey][keyName]

            };
        }
        getStateCity(payload);
        getAddressFormat(addressPayload);

        //  nextInputFocus.focus();
    }

    renderToolTip=()=>{       
        return(
            <View>                
                <View style={styles.tooltipContainerIcon}>               
                    <GIcon
                        name="alert-circle"
                        type="material-community"
                        size={20}
                        color="#56565A"
                    />                       
                    <Text style={styles.tooltipContainerText}>{gblStrings.settingAccountMessaging.accountMessagingGeneralStillReceive}</Text>                   
                </View>
            </View>
        );        
    }

    render() {
        const{ navigation }=this.props;
        const{ saveSuccess,accountPreferenceData,switchValue,personal, errMsg }=this.state;
        
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
                                Delivery Preference for Tax Documents has been updated successfully
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
                                {accountsPreference.accName}
                            </Text>
                        </View>

                        <View style={styles.accountNameContainer}>  
                            <Text style={styles.accountNumberText}>
                                Account Number
                            </Text>
                            <Text style={styles.accountNumberValueText}>
                                {accountsPreference.accNumber}
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

                    <View style={{marginHorizontal:'4%'}}>
                            
                    <Text style={styles.lblTxt}>
                        {gblStrings.addAddressInfo.addressLineOne}
                    </Text>
                            <GInputComponent                              
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

                    </View>    

                        <GButtonComponent
                            buttonStyle={styles.cancelButton}
                            buttonText={gblStrings.common.cancel}  
                            textStyle={styles.cancelButtonText}
                            onPress={this.goBack}
                        />

                        <GButtonComponent
                            buttonStyle={styles.saveButton}
                            buttonText={gblStrings.common.save}  
                            textStyle={styles.saveButtonText}
                            onPress={this.saveButtonAction}
                        />

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

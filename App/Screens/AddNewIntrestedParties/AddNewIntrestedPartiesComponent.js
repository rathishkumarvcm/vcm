import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';
import { styles } from './styles';
import { GIcon, GHeaderComponent, GLoadingSpinner, GFooterComponent, GInputComponent, GDateComponent, GDropDownComponent, GButtonComponent } from '../../CommonComponents';
import gblStrings from '../../Constants/GlobalStrings';
import PropTypes from "prop-types";
import {nameRegex, emailRegex, zipCodeRegex } from '../../Constants/RegexConstants';
import * as ActionTypes from "../../Shared/ReduxConstants/ServiceActionConstants";

let relationData=[
   {"key": "child", "value": "Child"},
   {"key": "fiance", "value": "Fiancé"},
   {"key": "spouse", "value": "Spouse"}
];

class addNewIntrestedPartiesComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isSavedSuccess:false,
            isCollapsable:false,
            collapseIcon:"-",
            account_Data:{},
            isZipApiCalling: false,
            isAddressApiCalling: false,
            personal:{
                firstName:"",
                middleName:"",
                lastName:"",
                relation:"",
                email:"",
                company:"",
                addressLine1:"",
                addressLine2:"",
                zipCode:"",
                city:"",
                stateValue:"",
                startDate:"",
                endDate:"",
                fnameValidation:true,
                fnameValiMsg:"",
                lnameValidation:true,
                lnameValiMsg:"",
                relationValidation:false,
                relationDropDown:false,
                relationValiMsg:'',
                emailValidation:true,
                companyValidation:true,
                addressLine1Validation:true,
                addressLine2Validation:true,
                addValidation:true,
                addressValiMsg:"",
                zipCodeValidation:true,
                zipCodeValiMsg:"",
                startDateValidation:true,
                startDateValiMsg:"",
                endDateValidation:true,
                endDateValiMsg:"",
                addressValidateFlag:false,
                addressValidateMsg:""
            }
        };
    }
   
    componentDidMount() {
        let payload = [];
        const compositePayloadData = [
            "relationship"
        ];
        for (let i = 0; i < compositePayloadData.length; i++) {
            let tempkey = compositePayloadData[i];
            if (this.props && this.props.masterLookupStateData && !this.props.masterLookupStateData[tempkey]) {
                payload.push(tempkey);
            }
        }
        this.props.getCompositeLookUpData(payload);
        this.updateState();
    }

    componentDidUpdate(prevProps) {
        console.log("didUpdate::");
        const stateCityResponseData = ActionTypes.GET_STATECITY;
        const addressResponseData = ActionTypes.GET_ADDRESSFORMAT;

        if (this.state.isZipApiCalling) {
            if (this.props != prevProps) {
                if (this.props && this.props.stateCityData[stateCityResponseData]) {
                    const tempResponse = this.props.stateCityData[stateCityResponseData];
                    console.log("@@@@@@@@@@@@@@@ Success Update", tempResponse);
                    if (tempResponse && tempResponse.City) {
                        this.onUpdateField("personal","city",tempResponse.City);
                        this.onUpdateField("personal","stateValue",tempResponse.State);
                        this.onUpdateField("personal","zipCodeValidation",true);
                    } else {
                        this.onUpdateField("personal","city", ' - ');
                        this.onUpdateField("personal","stateValue",' - ');
                        this.onUpdateField("personal","zipCodeValidation",false);
                        this.onUpdateField("personal","zipCodeValiMsg","Please enter valid ZipCode");
                    } 
                }
            }
        }

        if (this.state.isAddressApiCalling) {
            if (this.props != prevProps) {
                if (this.props && this.props.stateCityData[addressResponseData]) {
                    const tempAddressResponse = this.props.stateCityData[addressResponseData];
                    console.log("@@@@@@@@@@@@@@@@@@@@ Success Address", tempAddressResponse);
                    if (tempAddressResponse && tempAddressResponse.Address2) {
                        this.onUpdateField("personal","addressLine1",tempAddressResponse.Address1 || "");
                        this.onUpdateField("personal","addressLine2",tempAddressResponse.Address2 || "");
                        this.onUpdateField("personal","addValidation",true);
                    } else {
                        this.onUpdateField("personal","addressLine1",'');
                        this.onUpdateField("personal","addressLine2",'');
                        this.onUpdateField("personal","addressLine1Validation",false);
                        this.onUpdateField("personal","addValidation",false);
                    }
                }
            }
        }
    }

    updateState=()=>{
        let data=this.props.navigation.getParam('acc_Data');
        this.setState({account_Data:data});
    }

    getZipCodeValue = () => {
        const payload = {
            'Zip': this.state.personal.zipCode
        };
        let addressPayload={};
        if(this.state.personal.zipCode != ''){
            addressPayload = {
                ...payload,
                "Address1": this.state.personal.addressLine1,
                "Address2": this.state.personal.addressLine2,
                "City":this.state.personal.city,
                "State": this.state.personal.stateValue
            };
        } else {
            addressPayload = {
                "Address1": this.state.personal.addressLine1,
                "Address2": this.state.personal.addressLine2,
                "City":this.state.personal.city,
                "State": this.state.personal.stateValue
            }; 
        }
        
        this.props.getStateCity(payload);
        this.props.getAddressFormat(addressPayload);
    }

    setScrollViewRef = (element) => {
        this.scrollViewRef = element;
    };

    setInputRef = (inputComp) => (ref) => {
        this[inputComp] = ref;
    }

    isEmpty = (str) => {
        if (str == "" || str == undefined || str == null || str == "null" || str == "undefined") {
            return true;
        } else {
            return false;
        }
    }

    onChangeText = (stateKey,keyName)=> text => {
        this.setState(prevState => ({
            [stateKey]: {
                ...prevState[stateKey],
                [keyName]:text
            }
        }));
    } 
    
    onUpdateField = (stateKey,keyName,val) => {
        this.setState(prevState => ({
            [stateKey]: {
                ...prevState[stateKey],
                [keyName]:val
            }
        }));
    }

    selectRelation = () => {
        this.onUpdateField("personal","relationDropDown",!this.state.relationDropDown);
    }

    selectedRelationDropDownValue = (value) => {
        this.onUpdateField("personal","relation",value.value);
        this.onUpdateField("personal","relationDropDown",false);
    }

    onCancelClick=()=>{
        this.setState({
            personal:{
                firstName:"",
                middleName:"",
                lastName:"",
                relation:"",
                email:"",
                company:"",
                addressLine1:"",
                addressLine2:"",
                zipCode:"",
                city:"",
                stateValue:"",
                startDate:"",
                endDate:""
            }
        });
        this.props.navigation.goBack();
    }

    validateZipCode = () => {
        if(!this.isEmpty(this.state.personal.zipCode)){
            let validate = zipCodeRegex.test(this.state.personal.zipCode);
            this.onUpdateField("personal","zipCodeValidation",validate);
            this.onUpdateField("personal","zipCodeValiMsg",gblStrings.accManagement.zipCodeFormat);
            if(validate){
                this.getZipCodeValue();
            }
        }
    }

    validateFields=()=>{
        try {
            console.log("validateFields:::");
            let isValidationSuccess = false;
            this.setState(prevState => ({
                personal: {
                    ...prevState.personal,
                    fnameValidation:true,
                    lnameValidation: true,
                    emailValidation:true,
                    addressLine1Validation: true,
                    addressLine2Validation: true,
                    zipCodeValidation: true,
                    relationValidation:false,
                    startDateValidation:true,
                    endDateValidation:true
                }
            }));
            if (!this.validateEachFields()) {
                isValidationSuccess = false;
            }else {
                isValidationSuccess = true;
            }
            if (isValidationSuccess) {
               this.onClickSave();
            }
        } catch (err) {
            console.log("Error:::" +err);
        }
    }

    validateEachFields=()=>{
        var isErrMsg = false;
        var isValidationSuccess = false;

        if (this.isEmpty(this.state.personal.firstName)) {
            this.onUpdateField("personal","fnameValidation",false);
            this.onUpdateField("personal","fnameValiMsg",gblStrings.accManagement.emptyFirstNameMsg);
            isErrMsg=true;
        }else{
            let validate = nameRegex.test(this.state.personal.firstName);
            this.onUpdateField("personal","fnameValidation",validate);
            this.onUpdateField("personal","fnameValiMsg",gblStrings.accManagement.firstNameFormat);
            isErrMsg=!validate;
        }

        if (this.isEmpty(this.state.personal.lastName)) {
            this.onUpdateField("personal","lnameValidation",false);
            this.onUpdateField("personal","lnameValiMsg",gblStrings.accManagement.emptyLastNameMsg);
            isErrMsg=true;
        }else{
            let validate = nameRegex.test(this.state.personal.lastName);
            this.onUpdateField("personal","lnameValidation",validate);
            this.onUpdateField("personal","lnameValiMsg",gblStrings.accManagement.lastNameFormat);
            isErrMsg=!validate;
        }

        if (!this.isEmpty(this.state.personal.email)) {
            let validate = emailRegex.test(this.state.personal.email);
            this.onUpdateField("personal","emailValidation",validate);
            isErrMsg=!validate;
        }else{
            this.onUpdateField("personal","emailValidation",true); 
        }

        if (this.isEmpty(this.state.personal.addressLine1)) {
            this.onUpdateField("personal","addressLine1Validation",false);
            isErrMsg=true;
        }else{
            this.onUpdateField("personal","addressLine1Validation",true);
        }

        if (this.isEmpty(this.state.personal.addressLine2)) {
            this.onUpdateField("personal","addressLine2Validation",false);
            isErrMsg=true;
        }else{
            this.onUpdateField("personal","addressLine2Validation",true);
        }

        if (this.isEmpty(this.state.personal.zipCode)) {
            this.onUpdateField("personal","zipCodeValidation",false);
            this.onUpdateField("personal","zipCodeValiMsg",gblStrings.accManagement.emptyZipCodeMsg);
            isErrMsg=true;
        }else{
            let validate = zipCodeRegex.test(this.state.personal.zipCode);
            this.onUpdateField("personal","zipCodeValidation",validate);
            this.onUpdateField("personal","zipCodeValiMsg",gblStrings.accManagement.zipCodeFormat);
            this.getZipCodeValue();
            isErrMsg=!validate;
        }

        if (!this.isEmpty(this.state.personal.startDate) && !this.isEmpty(this.state.personal.endDate)) {
            if(this.state.personal.startDate > this.state.personal.endDate){
                this.onUpdateField("personal","startDateValidation",false);
                this.onUpdateField("personal","endDateValidation",false);
                isErrMsg=true;
            }
        }

        if (this.state.personal.relation === '') {
            this.onUpdateField("personal","relationValidation",true);
            this.onUpdateField("personal","relationValiMsg",gblStrings.accManagement.emptyRelationShipMsg);
          } 
        
        if(!isErrMsg)
        {
            isValidationSuccess = true;
        }
        
        return isValidationSuccess;
    }
    
    onClickSave=()=>{
        console.log("in save function");
        let data=this.state.personal,key=parseInt(this.state.account_Data.intrestedParty.length)+1;
        let obj={
            "key":key,
            "fname":data.firstName,
            "mname":data.middleName,
            "lname":data.lastName,
            "contract_Number":"123456789",
            "relationship_To_Account_holder":data.relation,
            "email":data.email,
            "company":data.company,
            "address":data.addressLine1+","+data.addressLine2,
            "zipCode":data.zipCode,
            "city":data.city,
            "stateValue":data.stateValue,
            "startDate":data.startDate,
            "endDate":data.endDate,
            "accounts_Tagged":'1'    
        };
        console.log("Added Data:::::",obj);
        
        this.props.navigation.navigate("verifyIntrestedParties",{acc_Data:this.state.account_Data, added_obj:obj });
    }

    generateKeyExtractor = (item) => item.key;

    render() {
        console.log("addValidate",this.state.personal.addValidation);
        if (this.props && this.props.masterLookupStateData && this.props.masterLookupStateData.relationship && this.props.masterLookupStateData.relationship.value) {
            relationData=this.props.masterLookupStateData.relationship.value;
        }
        return (
            <View style={styles.container} >
                {
                    this.props.stateCityData.isLoading && <GLoadingSpinner />
                }
                <GHeaderComponent navigation={this.props.navigation} />
                <ScrollView style={styles.flexMainView} keyboardShouldPersistTaps="always" ref={this.setScrollViewRef}>
                <View style={styles.mainHeadingView}>
                    <Text style={styles.mainHeadlineText}>
                        {gblStrings.accManagement.manageIntrestedParties}
                    </Text>
                </View>
                <View style={styles.blockMarginTop}>
                    <View style={styles.titleHeadingView}>
                        <Text style={styles.titleHeaderText}>{this.state.account_Data.account_Type}</Text>
                    </View>
                    <View style={styles.line} />
                    <View style={styles.containerView}>
                        <Text style={styles.containerHeaderText}>{" Acc Name - " + this.state.account_Data.account_Name + " | " + "Acc Number - " + this.state.account_Data.account_Number}</Text>
                    </View>
                    <View style={styles.blockMarginTop} />
                    <View style={styles.titleHeadingView}>
                        <Text style={styles.titleHeaderText}>{gblStrings.accManagement.addNewIntParty}</Text>
                        <Text style={styles.titleHeaderText}>{gblStrings.accManagement.personalInformation}</Text>
                    </View>
                    <View style={styles.line} />

                    {/*-------------------------- Add Intrested Parties ---------------------------------*/}

                    <View style={styles.paddingHorizontalStyle}>
                        <Text style={styles.lblTxt}>{gblStrings.accManagement.firstName}</Text>
                        <GInputComponent
                          inputref={this.setInputRef("firstName")}
                          propInputStyle={styles.customTxtBox}
                          placeholder={''}
                          maxLength={gblStrings.maxLength.firstName}
                          onChangeText={this.onChangeText("personal", "firstName")}
                          errorFlag={!this.state.personal.fnameValidation}
                          errorText={this.state.personal.fnameValiMsg}
                        />
                        <Text style={styles.lblTxt}>
                            <Text style={styles.lblTxt}>
                                {gblStrings.accManagement.middleInitial}
                            </Text>
                            <Text style={styles.optionalTxt}>
                                {" " + gblStrings.accManagement.optional}
                            </Text>
                        </Text>
                        <GInputComponent
                            inputref={this.setInputRef("middleInitial")}
                            propInputStyle={styles.customTxtBox}
                            placeholder={""}
                            maxLength={gblStrings.maxLength.middleInitial}
                            onChangeText={this.onChangeText("personal","middleName")}
                        />
                        <Text style={styles.lblTxt}>
                            {gblStrings.accManagement.lastName}
                        </Text>
                        <GInputComponent
                            inputref={this.setInputRef("lastName")}
                            propInputStyle={styles.customTxtBox}
                            placeholder={""}
                            maxLength={gblStrings.maxLength.lastName}
                            onChangeText={this.onChangeText("personal","lastName")}
                            errorFlag={!this.state.personal.lnameValidation}
                            errorText={this.state.personal.lnameValiMsg}
                        />
                        <GDropDownComponent 
                            dropDownName={gblStrings.accManagement.relationToAccountHolder}
                            dropDownTextName={styles.lblTxt} 
                            data={relationData}
                            textInputStyle={styles.dropdownTextInput}
                            itemToDisplay={"value"}
                            dropDownLayout={styles.dropDownLayout}
                            changeState={this.selectRelation}
                            errorFlag={this.state.personal.relationValidation}
                            errorText={this.state.personal.relationValiMsg}
                            showDropDown={this.state.personal.relationDropDown}
                            dropDownValue={this.state.personal.relation}
                            selectedDropDownValue={this.selectedRelationDropDownValue}
                        />
                        <Text style={styles.lblTxt}>
                            <Text style={styles.lblTxt}>
                                {gblStrings.accManagement.emailAddress}
                            </Text>
                            <Text style={styles.optionalTxt}>
                                {" " + gblStrings.accManagement.optional}
                            </Text>
                        </Text>
                        <GInputComponent
                            inputref={this.setInputRef("emailAddress")}
                            propInputStyle={styles.customTxtBox}
                            placeholder={gblStrings.accManagement.emailformat}
                            keyboardType="email-address"
                            maxLength={gblStrings.maxLength.emailID}
                            onChangeText={this.onChangeText("personal","email")}
                            errorFlag={!this.state.personal.emailValidation}
                            errorText={gblStrings.accManagement.emailformat}
                        />
                        <Text style={styles.lblTxt}>
                            {gblStrings.accManagement.company}
                        </Text>
                        <View style={styles.flexDirectionStyle}>
                            <GInputComponent
                                inputref={this.setInputRef("company")}
                                propInputStyle={styles.customCompTxtBox}
                                placeholder={""}
                                maxLength={gblStrings.maxLength.company}
                                onChangeText={this.onChangeText("personal","company")}
                            />
                            <View style={styles.circleView}>
                                <GIcon name="question" type="antdesign" size={16} color="#333333DE" />
                            </View>
                        </View>
                        <Text style={styles.lblTxt}>
                            {gblStrings.accManagement.address}
                        </Text>
                        <GInputComponent
                            inputref={this.setInputRef("addrLine1")}
                            propInputStyle={styles.customTxtBox}
                            placeholder={gblStrings.accManagement.empAddrLine1}
                            maxLength={gblStrings.maxLength.emplAddress1}
                            onChangeText={this.onChangeText("personal","addressLine1")}
                            errorFlag={!this.state.personal.addressLine1Validation}
                            errorText={gblStrings.accManagement.emptyAddressLine1Msg}
                        />
                        <GInputComponent
                            inputref={this.setInputRef("addrLine2")}
                            propInputStyle={styles.customTxtBox}
                            placeholder={gblStrings.accManagement.empAddrLine2}
                            maxLength={gblStrings.maxLength.addressLine2}
                            onChangeText={this.onChangeText("personal","addressLine2")}
                            errorFlag={!this.state.personal.addressLine2Validation}
                            errorText={gblStrings.accManagement.emptyAddressLine2Msg}
                        />
                        <Text style={styles.lblTxt}>
                            {gblStrings.accManagement.zipcode}
                        </Text>
                        <GInputComponent
                            inputref={this.setInputRef("zipCode")}
                            propInputStyle={styles.customTxtBox}
                            placeholder={""}
                            maxLength={gblStrings.maxLength.zipCode}
                            onBlur={this.validateZipCode}
                            keyboardType="number-pad"
                            onChangeText={this.onChangeText("personal","zipCode")}
                            errorFlag={!this.state.personal.zipCodeValidation}
                            errorText={this.state.personal.zipCodeValiMsg}
                            onSubmitEditing={this.getZipCodeValue}
                        />
                        <Text style={styles.lblTxt}>
                            {gblStrings.accManagement.cityAndState}
                        </Text>
                        <View style={styles.stateCityView}>
                            <View style={styles.customCityView}>
                                <GInputComponent
                                    propInputStyle={styles.customTxtBox}
                                    placeholder={gblStrings.accManagement.enterCity}
                                    value={this.state.personal.city}
                                    editable={false}
                                />
                            </View>
                            <View style={styles.customStateView}>
                                <GInputComponent
                                    propInputStyle={styles.customTxtBox}
                                    placeholder={gblStrings.accManagement.enterState}
                                    value={this.state.personal.stateValue}
                                    editable={false}
                                />
                            </View>
                        </View>
                        <View style={styles.blockMarginTop}>
                            <Text style={styles.preferdTimeTxt}>{gblStrings.accManagement.preferredTimePeriod}</Text>
                            <Text style={styles.lblTxt}>{gblStrings.accManagement.from}</Text>
                            <GDateComponent 
                                inputref={this.setInputRef("startDate")}
                                date={this.state.personal.startDate}
                                placeholder="MM/DD/YYYY"
                                errorFlag={!this.state.personal.startDateValidation}
                                onDateChange={this.onChangeText("personal","startDate")}
                            />
                            <Text style={styles.lblTxt}>{gblStrings.accManagement.to}</Text>
                            <GDateComponent 
                               inputref={this.setInputRef("endDate")}
                               date={this.state.personal.endDate}
                               placeholder="MM/DD/YYYY"
                               errorFlag={!this.state.personal.endDateValidation}
                               onDateChange={this.onChangeText("personal","endDate")}
                            />
                            {!this.state.personal.startDateValidation && <Text style={styles.errMsg}>{gblStrings.accManagement.validDateSelect}</Text>}
                        </View>
                    </View>
                </View>

                <View style={styles.btnGrp}>
                    <GButtonComponent
                        buttonStyle={styles.normalWhiteBtn}
                        buttonText={gblStrings.common.cancel}
                        textStyle={styles.normalWhiteBtnTxt}
                        onPress={this.onCancelClick}
                    />
                    <GButtonComponent
                        buttonStyle={styles.normalBlackBtn}
                        buttonText={gblStrings.common.save}
                        textStyle={styles.normalBlackBtnTxt}
                        onPress={this.validateFields}
                    />
                </View>

                <View style={styles.borderInternal} />
                <View style={styles.mainHeadingView}>
                    <Text style={styles.disclaimerTextHeading}>{gblStrings.accManagement.VCDiscalimerTitle}</Text>
                    <Text style={styles.disclaimerTxt}>{gblStrings.accManagement.VCDiscalimerDescContent}</Text>
                </View>
                <GFooterComponent />
                </ScrollView>
            </View>

        );
    }
}

addNewIntrestedPartiesComponent.propTypes = {
    navigation: PropTypes.instanceOf(Object).isRequired,
    masterLookupStateData: PropTypes.instanceOf(Object).isRequired,
    stateCityData: PropTypes.instanceOf(Object).isRequired,
    getCompositeLookUpData: PropTypes.func,
    getStateCity: PropTypes.func,
    getAddress: PropTypes.func
};

export default addNewIntrestedPartiesComponent;
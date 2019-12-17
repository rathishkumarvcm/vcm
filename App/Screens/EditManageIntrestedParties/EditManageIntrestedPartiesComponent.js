import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';
import { styles } from './styles';
import { GButtonComponent,GDateComponent, GIcon, GDropDownComponent, GInputComponent, GHeaderComponent, GFooterComponent,GCheckBoxComponent, GLoadingSpinner } from '../../CommonComponents';
import gblStrings from '../../Constants/GlobalStrings';
import { zipCodeRegex,emailRegex } from '../../Constants/RegexConstants';
import PropTypes from "prop-types";
import * as ActionTypes from "../../Shared/ReduxConstants/ServiceActionConstants";

let relationData=[
    {"key": "child", "value": "Child"},
    {"key": "fiance", "value": "Fiancé"},
    {"key": "spouse", "value": "Spouse"}
 ];
 let intrestedParties = [];

class editManageIntrestedPartiesComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isSavedSuccess:false,
            isCollapsable:false,
            collapseIcon:"-",
            account_Data:{},
            intrstedPartyObj:{},
            account_Key:'',
            personal:{
                fname:"",
                mname:"",
                lname:"",
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
                relationValidation:false,
                relationDropDown:false,
                relationValiMsg:'',
                emailValidation:true,
                companyValidation:true,
                addressLine1Validation:true,
                addressLine2Validation:true,
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
        this.updateState();
        this.setMasterData();
       
    }

    setMasterData=()=>{
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
    }

    componentDidUpdate(prevProps) {
        console.log("didUpdate::");
        const stateCityResponseData = ActionTypes.GET_STATECITY;
        if (this.props != prevProps) {
            if (this.props && this.props.stateCityData[stateCityResponseData]) {
                const tempResponse = this.props.stateCityData[stateCityResponseData];
                console.log("state city response:::::", tempResponse);
                if (tempResponse && tempResponse.City) {
                    this.onUpdateField("personal","city",tempResponse.City);
                    this.onUpdateField("personal","stateValue",tempResponse.State);
                }
            } else {
                if (this.props && this.props.stateCityData[ActionTypes.GET_STATECITY_ERROR]) {
                    const tempErrorResponse = this.props.stateCityData[ActionTypes.GET_STATECITY_ERROR];
                    console.log("Error", tempErrorResponse);
                    this.onUpdateField("personal","addressValidateFlag",true);
                    this.onUpdateField("personal","addressValidateMsg",this.props.stateCityData[ActionTypes.GET_STATECITY_ERROR]);
                    console.log("error",this.state.personal.addressValidateMsg) ;
                }
            }
        }
    }

    updateState=()=>{
        let data=this.props.navigation.getParam('acc_Data');
        let pData=this.props.navigation.getParam('parent_Obj');
        let pKey=this.props.navigation.getParam('parent_Key');
        this.setState(prevState=>({
            account_Data:pData,
            account_Key:pKey,
            intrstedPartyObj:data,
            personal:{
                ...prevState.personal,
                fname:data.fname?data.fname:"",
                mname:data.mname?data.mname:"",
                lname:data.lname?data.lname:"",
                relation:data.relationship_To_Account_holder?data.relationship_To_Account_holder:"",
                email:data.email?data.email:"",
                addressLine1:data.address?data.address:"",
                company:data.company?data.company:"",
                addressLine1:data.address?data.address:"",
                zipCode:data.zipCode?data.zipCode:"",
                city:data.city?data.city:"",
                stateValue:data.state?data.state:"",
                startDate:data.startDate?data.startDate:"",
                endDate:data.endDate?data.endDate:"",
            }
        }));
    }

    getZipCodeValue = () => {
        const payload = {
            'Zip': this.state.personal.zipCode
        };
        const addressPayload = {
            ...payload,
            "Address1": this.state.personal.addressLine1,
            "Address2": this.state.personal.addressLine2,
            "City":this.state.personal.city,
            "State": this.state.personal.stateValue
        };
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
                console.log("onValidation success::::");
                this.onClickSave();
            }
        } catch (err) {
            console.log("Error:::" +err);
        }
    }

    validateEachFields=()=>{
        var isErrMsg = false;
        var isValidationSuccess = false;

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

    getPayloadData=()=>{
        let data=this.state.personal;
        this.setState(prevState=>({
            intrstedPartyObj:{
                ...prevState.intrstedPartyObj,
                relationship_To_Account_holder:data.relation,
                email:data.email,
                company:data.company,
                address:data.addressLine1+","+data.addressLine2,
                zipCode:data.zipCode,
                city:data.city,
                state:data.stateValue,
                startDate:data.startDate,
                endDate:data.endDate,
            }
        }));
        return this.state.intrstedPartyObj;
    }
    
    onClickSave=()=>{
        console.log("in save function:::");
        const payloadData=this.getPayloadData();
        console.log("payload data::::",payloadData);
        let list=[];
        intrestedParties.map((m,n)=>{
            if(this.state.account_Key===n){
                list=m.intrestedParty;
                list.map((a,b)=>{
                    if(this.state.intrstedPartyObj.key===b){
                        list.splice(b,1,payloadData);
                    }
                });
                console.log("list::",list);
            }
        });
        console.log("new updated Data:::",list,intrestedParties);
        
    }


    generateKeyExtractor = (item) => item.key;

    render() {
        if (this.props && this.props.masterLookupStateData && this.props.masterLookupStateData.relationship && this.props.masterLookupStateData.relationship.value) {
            relationData=this.props.masterLookupStateData.relationship.value;
        }
        if(this.props.manageIntrestedPartiesData && this.props.manageIntrestedPartiesData.list_manage_intrested_parties ){
            intrestedParties = this.props.manageIntrestedPartiesData.list_manage_intrested_parties;
        }
        console.log("accData",this.state.account_Data);
        return (
            <View style={styles.container} >
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
                        <Text style={styles.titleHeaderText}>{gblStrings.accManagement.editIntrestedParty+ this.state.account_Data.account_Type}</Text>
                    </View>
                    <View style={styles.line} />


                     {/*-------------------------- Add Intrested Parties ---------------------------------*/}

                     <View style={styles.paddingHorizontalStyle}>
                        <View style={styles.flexDirectionStyle}>
                          <Text style={styles.shortContentText}>{gblStrings.accManagement.name}</Text>
                          <Text style={[styles.shortContentValueText, styles.paddingStyleLeft]}>{this.state.personal.fname+" "+this.state.personal.mname+" "+this.state.personal.lname}</Text>
                        </View>
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
                            value={this.state.personal.email}
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
                                value={this.state.personal.company}
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
                            value={this.state.personal.zipCode}
                            maxLength={gblStrings.maxLength.zipCode}
                            onBlur={this.validateZipCode}
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

editManageIntrestedPartiesComponent.propTypes = {
    navigation: PropTypes.instanceOf(Object).isRequired,
    masterLookupStateData: PropTypes.instanceOf(Object).isRequired,
    stateCityData: PropTypes.instanceOf(Object).isRequired,
    getStateCity: PropTypes.func,
    getAddressFormat: PropTypes.func,
    manageIntrestedPartiesData :PropTypes.instanceOf(Object).isRequired

};

export default editManageIntrestedPartiesComponent;
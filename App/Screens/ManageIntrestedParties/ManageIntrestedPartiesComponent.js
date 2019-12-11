import React, { Component } from 'react';
import { Text, View, ScrollView ,TouchableOpacity, FlatList } from 'react-native';
import { styles } from './styles';
import { GButtonComponent, GIcon, GDropDownComponent, GInputComponent, GHeaderComponent, GFooterComponent,GCheckBoxComponent, GLoadingSpinner } from '../../CommonComponents';
import gblStrings from '../../Constants/GlobalStrings';
import { zipCodeRegex,emailRegex, nameRegex } from '../../Constants/RegexConstants';
import { CustomRadio } from '../../AppComponents';
import PropTypes from "prop-types";
import { scaledHeight } from '../../Utils/Resolution';
import * as ActionTypes from "../../Shared/ReduxConstants/ServiceActionConstants";
const documentFrequencyData = [
    {
        id: '1',
        title: 'Weekly',
    },
    {
        id: '2',
        title: 'Monthly',
    },
    {
        id: '3',
        title: 'Yearly',
    }
];

class manageIntrestedPartiesComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            isAddNewVisible:false,
            isSavedSuccess:false,
            errorMessage:"",
            completeData:[],
            userCity:'',
            userState:'',
            personal:{
                firstName: "",
                middleInitial: "",
                lastName: "",
                emailAddress:"",
                company:"",
                addrLine1:"",
                addrLine2:"",
                zipCode:"",
                stateValue:"",
                city:"",
                documentFrequency:"",
                documentFrequencyDropDown:false,
                firstNameValidation:true,
                lastNameValidation: true,
                emailAddressValidation:true,
                addrLine1Validation:true,
                addrLine2Validation:true,
                zipcodeValidation:true,
                zipCodeValidationMsg: "",
                firstNameValidatingMsg:"",
                lastNameValidationMsg:"",
                addressValidateMsg:"",
                addressValidateFlag:true
            },
            documentDeliveryFormat:[
                {options : "Email",checked: false},
                {options : "Paper",checked : false},
            ],
            documentType:[
                {options : "Statements",checked: false},
                {options : "Tax Documents",checked : false},
            ]
        };
    }
   
    componentDidMount() {
        let payload = [];
        const compositePayloadData = [
            "stmt_pros_rep"
        ];
        for (let i = 0; i < compositePayloadData.length; i++) {
            let tempkey = compositePayloadData[i];
            if (this.props && this.props.masterLookupStateData && !this.props.masterLookupStateData[tempkey]) {
                payload.push(tempkey);
            }
        }
        this.props.getCompositeLookUpData(payload);
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("didUpdate::");
        const stateCityResponseData = ActionTypes.GET_STATECITY;
        if (this.props != prevProps) {
            if (this.props && this.props.stateCityData[stateCityResponseData]) {
                const tempResponse = this.props.stateCityData[stateCityResponseData];
                console.log("Error Update 001", tempResponse);
                if (tempResponse && tempResponse.City) {
                    this.onUpdateField("personal","city",tempResponse.City);
                    this.onUpdateField("personal","stateValue",tempResponse.State);
                }
            } else {
                if (this.props && this.props.stateCityData[ActionTypes.GET_STATECITY_ERROR]) {
                    conmsole.log("address error::",this.props.stateCityData)
                    const tempErrorResponse = this.props.stateCityData[ActionTypes.GET_STATECITY_ERROR];
                    console.log("Error", tempErrorResponse);
                    this.onUpdateField("personal","addressValidateFlag",true);
                    this.onUpdateField("personal","addressValidateMsg",this.props.stateCityData[ActionTypes.GET_STATECITY_ERROR]);
                    console.log("error",this.state.personal.addressValidateMsg) ;
                }
            }
        }
    }


    getZipCodeValue = (text) => {
        const payload = {
            'Zip': text
        };
        this.props.getStateCity(payload);
    }

    getAddressValidated=()=>{
        const addressPayload = {
            "Address1": this.state.personal.addrLine1,
            "Address2": this.state.personal.addrLine2,
            "City": this.state.personal.city,
            "State": this.state.personal.stateValue,
            "Zip": this.state.personal.zipCode
        };
        this.props.getAddressFormat(addressPayload);
    }

    scrollToTop=()=>{
        this.scrollViewRef.scrollTo({x: 0, y: 0, animated: true});
    }

    setScrollViewRef = (element) => {
        this.scrollViewRef = element;
    };

    setInputRef = (inputComp) => (ref) => {
        this[inputComp] = ref;
    }

    onSubmitEditing = (input) => text => {
        input.focus();
    }

    isEmpty = (str) => {
        if (str == "" || str == undefined || str == null || str == "null" || str == "undefined") {
            return true;
        } else {
            return false;
        }
    }

    validateZipCode = () => {
        if(!this.isEmpty(this.state.personal.zipCode)){
            let validate = zipCodeRegex.test(this.state.personal.zipCode);
            this.onUpdateField("personal","zipcodeValidation",validate);
            this.onUpdateField("personal","zipCodeValidationMsg",gblStrings.accManagement.zipCodeFormat);
            if(validate){
                this.getZipCodeValue(this.state.personal.zipCode);
            }
        }
    }

    validateFields = () => {
        try {
            console.log("validateFields:::");
            let isValidationSuccess = false;
            this.setState(prevState => ({
                personal: {
                    ...prevState.personal,
                    firstNameValidation:true,
                    lastNameValidation: true,
                    addrLine1Validation: true,
                    addrLine2Validation: true,
                    zipcodeValidation: true,
                    cityValidation: true,
                    stateValidation: true
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

    onCancelClick=()=>{
        this.scrollToTop();
        this.setState(prevState=>({
          personal:{
            ...prevState.personal,
            firstName: "",
            middleInitial: "",
            lastName: "",
            emailAddress:"",
            company:"",
            addrLine1:"",
            addrLine2:"",
            zipCode:"",
            state:"",
            city:"",
            documentFrequency:"",
            documentFrequencyDropDown:false,
            firstNameValidation:true,
            lastNameValidation: true,
            emailAddressValidation:true,
            addrLine1Validation:true,
            addrLine2Validation:true,
            zipcodeValidation:true,
            zipCodeValidationMsg: "",
            firstNameValidatingMsg:"",
            lastNameValidationMsg:""
          },
          isAddNewVisible:false,
          isSavedSuccess:false 
        }));
    }

    onClickSave = () => {
        console.log("Save:::");
        this.manageData();
    }

    getAddedData = () => {
        let addedPartyPayload = {}, list=[];
            addedPartyPayload = {
                "title": this.state.personal.firstName+" "+this.state.personal.middleInitial+" "+this.state.personal.lastName,
                "mail": this.state.personal.emailAddress?this.state.personal.emailAddress:"abc@gmail.com",
                "company": this.state.personal.company,
                "address":this.state.personal.addrLine1+","+this.state.personal.addrLine2,
                "zipCode": this.state.personal.zipCode,
                "city": this.state.personal.city,
                "state":this.state.personal.stateValue,
                "count":"#3"
            }
            if (this.props && this.props.manageIntrestedPartiesData && this.props.manageIntrestedPartiesData.list_manage_intrested_parties ) {
                list=this.props.manageIntrestedPartiesData.list_manage_intrested_parties;
                
            }
            list.push(addedPartyPayload);
        return list;
    }

    manageData = () => {
        const payloadData = this.getAddedData();
        // this.props.saveIntrestedParties("addIntrestedParty", payloadData);
        // this.scrollToTop();
        // this.setState({isAddNewVisible:false,isSavedSuccess:true});
    }

    onAddClicked = () => {
        this.scrollToTop();
        this.setState({isAddNewVisible:true,isSavedSuccess:false});
    }
    
    goBack = () => {
        this.props.navigation.goBack();
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

    onPressRadio = (keyName, text) => () => this.setState({
        [keyName]: text
    });

    checkBoxClicked = (indexPre, previousValue, data, value) =>() => {
        var tempArray = [];
        data.map((item,index)=>{
            var temp = Object.assign({}, item);
            if(index === indexPre){
                temp.checked = !previousValue;
            }
            tempArray.push(temp);
        });
        switch(value){
            case "documentDeliveryFormat":
                this.setState({documentDeliveryFormat : tempArray});
                break;
            case "documentType":
                this.setState({documentType : tempArray});
                break;
            default:
                break;
        }
        
    }

    validateEachFields = () => {
        var errMsg = "";
        var isValidationSuccess = false;

        if (this.isEmpty(this.state.personal.firstName)) {
            this.onUpdateField("personal","firstNameValidation",false);
            this.onUpdateField("personal","firstNameValidatingMsg",gblStrings.accManagement.emptyFirstNameMsg);
            errMsg="error";
        }else{
            let validate = nameRegex.test(this.state.personal.firstName);
            this.onUpdateField("personal","firstNameValidation",validate);
            this.onUpdateField("personal","firstNameValidatingMsg",gblStrings.accManagement.firstNameFormat);
            if(!validate){ errMsg="error" }
        }

        if (this.isEmpty(this.state.personal.lastName)) {
            this.onUpdateField("personal","lastNameValidation",false);
            this.onUpdateField("personal","lastNameValidationMsg",gblStrings.accManagement.emptyLastNameMsg);
            errMsg="error";
        }else{
            let validate = nameRegex.test(this.state.personal.lastName);
            this.onUpdateField("personal","lastNameValidation",validate);
            this.onUpdateField("personal","lastNameValidationMsg",gblStrings.accManagement.lastNameFormat);
            if(!validate){ errMsg="error" }
        }

        if (!this.isEmpty(this.state.personal.emailAddress)) {
            let validate = emailRegex.test(this.state.personal.emailAddress);
            this.onUpdateField("personal","emailAddressValidation",validate);
            if(!validate){ errMsg="error" }
        }else{
            this.onUpdateField("personal","emailAddressValidation",true); 
        }

        if (this.isEmpty(this.state.personal.addrLine1)) {
            this.onUpdateField("personal","addrLine1Validation",false);
            errMsg="error";
        }else{
            this.onUpdateField("personal","addrLine1Validation",true);
        }

        if (this.isEmpty(this.state.personal.addrLine2)) {
            this.onUpdateField("personal","addrLine2Validation",false);
            errMsg="error";
        }else{
            this.onUpdateField("personal","addrLine2Validation",true);
        }

        if (this.isEmpty(this.state.personal.zipCode)) {
            this.onUpdateField("personal","zipcodeValidation",false);
            this.onUpdateField("personal","zipCodeValidationMsg",gblStrings.accManagement.emptyZipCodeMsg);
            errMsg="error";
        }else{
            let validate = zipCodeRegex.test(this.state.personal.zipCode);
            this.onUpdateField("personal","zipcodeValidation",validate);
            this.onUpdateField("personal","zipCodeValidationMsg",gblStrings.accManagement.zipCodeFormat);
            this.getZipCodeValue(this.state.personal.zipCode);
            if(!validate){ errMsg="error" }
        }

        if(!this.isEmpty(this.state.personal.addrLine1) && !this.isEmpty(this.state.personal.addrLine2) && !this.isEmpty(this.state.personal.zipCode))
        if(errMsg!="error")
        {
            isValidationSuccess = true;
        }
        
        return isValidationSuccess;
        
    }

    renderRadio = (radioName, radioSize, componentStyle, layoutStyle) =>{
        console.log("renderRadio::: " + radioName);
        let radioData = documentFrequencyData, tempkey="";
        switch (radioName) {
            case "selectedProspectusReportsRef":
                tempkey = "stmt_pros_rep";
                break;
            default:
                break;
        }

        console.log("tempkey::" + tempkey);

        if (this.props && this.props.masterLookupStateData && this.props.masterLookupStateData[tempkey] && this.props.masterLookupStateData[tempkey].value) {
            radioData = this.props.masterLookupStateData[tempkey].value;
        }

        let radioCoponents = [];
        for (let i = 0; i < radioData.length; i++) {
            radioCoponents.push(
                <CustomRadio
                    key={radioData[i].key}
                    componentStyle={componentStyle}
                    size={radioSize}
                    outerCicleColor={"#DEDEDF"}
                    innerCicleColor={"#61285F"}
                    labelStyle={styles.lblRadioBtnTxt}
                    label={radioData[i].value}
                    selected={(this.state[radioName] !== null && this.state[radioName] == radioData[i].value) ? true : false}
                    onPress={this.onPressRadio(radioName, radioData[i].value)}
                />
            );
        }
        return (
            <View style={layoutStyle}>
                {radioCoponents}
            </View>
        );
    }

    updateNotificationMsgState = () => {
        this.setState({isSavedSuccess:false});
    }

    // updateCityState = () => {
    //     let zip=this.state.personal.zipCode;
    //     zipcodeData.map((m) => {
    //         if(zip === m.zip){
    //             this.onUpdateField("personal","city",m.city);
    //             this.onUpdateField("personal","state",m.stateValue);
                
    //         }
    //     });
    // }
    
    selectFrequency = () => {
        this.onUpdateField("personal","documentFrequencyDropDown",!this.state.documentFrequencyDropDown);
    }

    selectedDropDownValue = (value) => {
        this.onUpdateField("personal","documentFrequency",value.title);
        this.onUpdateField("personal","documentFrequencyDropDown",false);
    }

    documentTypeCheck=()=>{
        return(
            <>
            {/* {this.state.documentType.map((item,index) =>
                (<GCheckBoxComponent 
                    onPress={()=>this.checkBoxClicked(index, item.checked,this.state.documentType,"documentType")}
                    selected = {item.checked}
                    options = {item.options}
                    key = {item.options}
                />)
            )}; */}
           </> 
        )
        
    }

    addIntrestedParties=()=>{
        return(
            <>
                <Text style={styles.subHeadlineText}>
                    {gblStrings.accManagement.addNewIntrestedParties}
                </Text>
                <View style={styles.settingsBorder} />
                <Text style={styles.lblTxt}>
                    {gblStrings.accManagement.firstName}
                </Text>
                <GInputComponent
                    inputref={this.setInputRef("firstName")}
                    propInputStyle={styles.customTxtBox}
                    placeholder={""}
                    maxLength={gblStrings.maxLength.firstName}
                    onChangeText={this.onChangeText("personal","firstName")}
                    errorFlag={!this.state.personal.firstNameValidation}
                    errorText={this.state.personal.firstNameValidatingMsg}
                    onSubmitEditing={this.onSubmitEditing(this.middleInitial)}
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
                    onChangeText={this.onChangeText("personal","middleInitial")}
                    onSubmitEditing={this.onSubmitEditing(this.lastName)}
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
                    errorFlag={!this.state.personal.lastNameValidation}
                    errorText={this.state.personal.lastNameValidationMsg}
                    onSubmitEditing={this.onSubmitEditing(this.emailAddress)}
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
                    onChangeText={this.onChangeText("personal","emailAddress")}
                    errorFlag={!this.state.personal.emailAddressValidation}
                    errorText={gblStrings.accManagement.emailformat}
                    onSubmitEditing={this.onSubmitEditing(this.company)}
                />
                <Text style={styles.lblTxt}>
                    {gblStrings.accManagement.company}
                </Text>
                <GInputComponent
                    inputref={this.setInputRef("company")}
                    propInputStyle={styles.customTxtBox}
                    placeholder={""}
                    maxLength={gblStrings.maxLength.company}
                    onChangeText={this.onChangeText("personal","company")}
                    onSubmitEditing={this.onSubmitEditing(this.addrLine1)}
                />
                <Text style={styles.lblTxt}>
                    {gblStrings.accManagement.address}
                </Text>
                <GInputComponent
                    inputref={this.setInputRef("addrLine1")}
                    propInputStyle={styles.customTxtBox}
                    placeholder={""}
                    maxLength={gblStrings.maxLength.emplAddress1}
                    onChangeText={this.onChangeText("personal","addrLine1")}
                    errorFlag={!this.state.personal.addrLine1Validation}
                    errorText={gblStrings.accManagement.emptyAddressLine1Msg}
                    onSubmitEditing={this.onSubmitEditing(this.addrLine2)}
                />
                <GInputComponent
                    inputref={this.setInputRef("addrLine2")}
                    propInputStyle={styles.customTxtBox}
                    placeholder={""}
                    maxLength={gblStrings.maxLength.addressLine2}
                    onChangeText={this.onChangeText("personal","addrLine2")}
                    errorFlag={!this.state.personal.addrLine2Validation}
                    errorText={gblStrings.accManagement.emptyAddressLine2Msg}
                    onSubmitEditing={this.onSubmitEditing(this.zipCode)}
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
                    onChangeText={this.onChangeText("personal","zipCode")}
                    errorFlag={!this.state.personal.zipcodeValidation}
                    errorText={this.state.personal.zipCodeValidationMsg}
                />
                <Text style={styles.lblTxt}>
                    {gblStrings.accManagement.cityAndState}
                </Text>
                <View style={styles.stateCityView}>
                    <View style={styles.customCityStateView}>
                        <GInputComponent
                            propInputStyle={styles.customTxtBox}
                            placeholder={gblStrings.accManagement.enterCity}
                            value={this.state.personal.city}
                            editable={false}
                        />
                    </View>
                    <View style={styles.customCityStateView}>
                        <GInputComponent
                            propInputStyle={styles.customTxtBox}
                            placeholder={gblStrings.accManagement.enterState}
                            value={this.state.personal.stateValue}
                            editable={false}
                        />
                    </View>
                </View>
                <Text style={styles.lblTxt}>
                    <Text>{gblStrings.accManagement.statements}</Text>
                    <Text>{gblStrings.accManagement.prospectusAndReports}</Text>
                </Text>
                <Text style={[styles.lblLargeTxt]}>{gblStrings.accManagement.desiredFormatDelivaryDocs}</Text>
                {this.renderRadio("selectedProspectusReportsRef", 36, { marginBottom: scaledHeight(0), marginTop: scaledHeight(20) }, styles.radioBtnColGrp)}
                
                 {/* <Text style={styles.lblTxt}>{gblStrings.accManagement.selectDocumentType}</Text>
                 {<this.documentTypeCheck/>} */}

                <GDropDownComponent 
                    dropDownName={gblStrings.accManagement.selectDocumentFrequency}
                    dropDownTextName={styles.lblTxt} 
                    data={documentFrequencyData} 
                    changeState={this.selectFrequency}
                    showDropDown={this.state.personal.documentFrequencyDropDown}
                    dropDownValue={this.state.personal.documentFrequency}
                    itemToDisplay={'title'}
                    selectedDropDownValue={this.selectedDropDownValue}
                />
                <Text style={styles.lblTxt}>{gblStrings.accManagement.selectDocuemntDeleveryFormat}</Text>
                {this.state.documentDeliveryFormat.map((item,index) =>
                    (<GCheckBoxComponent 
                        onPress={this.checkBoxClicked(index, item.checked,this.state.documentDeliveryFormat,"documentDeliveryFormat")}
                        selected = {item.checked}
                        options = {item.options}
                        key = {item.options}
                    />)
                )} 
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
            </>    
        );
    }

    renderListData=({item})=>{
        return(
            <View style={styles.cardView}>
                <Text style={styles.cardTitleText}>{item.title}</Text>
                <Text style={styles.cardMailText}>{item.mail}</Text>
                <View style={styles.accountTaggedView}>
                    <Text style={styles.accContentText}>{"Accounts Tagged"}</Text>
                    <Text style={styles.accCountText}>{item.count}</Text>
                </View>
            </View>
        );
    }
    
    generateKeyExtractor = (item) => item.key;

    renderIntrestedPartiesSection = () => {
        let data=[];

        if (this.props && this.props.manageIntrestedPartiesData && this.props.manageIntrestedPartiesData.list_manage_intrested_parties ) {
            data=this.props.manageIntrestedPartiesData.list_manage_intrested_parties;
        }

        return (
            <>
                {this.state.isAddNewVisible?<this.addIntrestedParties />: <View>
                    <Text style={styles.subHeadlineText}>
                        {gblStrings.accManagement.listOfIntrestedParties}
                    </Text>
                    <TouchableOpacity onPress={this.onAddClicked}>
                        <Text style={styles.addNewLink}>
                            {gblStrings.accManagement.addNew}
                        </Text>
                    </TouchableOpacity>
                    <View style={styles.settingsBorder} />
                    <FlatList
                        data={data}
                        extraData={this.props}
                        keyExtractor={this.generateKeyExtractor}
                        renderItem={this.renderListData}
                    />
                </View>
                }
            </>
        );
    }

    render() {
        console.log("this.props:::",this.props);
        return (
            <View style={styles.container} >
                {
                    this.props.stateCityData.isLoading && <GLoadingSpinner />
                }
                <GHeaderComponent navigation={this.props.navigation} />
                <ScrollView style={styles.flexMainView} keyboardShouldPersistTaps="always" ref={this.setScrollViewRef}>
                <View style={styles.mainHeadingView}>
                    {this.state.isSavedSuccess &&
                        <View style={styles.notificationView}>
                            <TouchableOpacity style={styles.flexSmall}>
                                <GIcon 
                                    name="check"
                                    type="MaterialIcons"
                                    size={40}
                                    color="#707070"
                                />
                            </TouchableOpacity>
                            <View style={styles.saveSuccessMsgTxt}>
                                <Text style={styles.notificationTxt}>{gblStrings.accManagement.intrestedPartiesAddedSuccessMeg}</Text>
                            </View>
                            <TouchableOpacity style={styles.flexSmall} onPress={this.updateNotificationMsgState}>
                                <GIcon 
                                    name="close"
                                    type="EvilIcons"
                                    size={40}
                                    color="#707070"
                                />
                            </TouchableOpacity>
                        </View>
                    }
                    <Text style={styles.mainHeadlineText}>
                        {gblStrings.accManagement.manageIntrestedParties}
                    </Text>
                    {<this.renderIntrestedPartiesSection />}
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

manageIntrestedPartiesComponent.propTypes = {
    navigation: PropTypes.instanceOf(Object).isRequired,
};

export default manageIntrestedPartiesComponent;
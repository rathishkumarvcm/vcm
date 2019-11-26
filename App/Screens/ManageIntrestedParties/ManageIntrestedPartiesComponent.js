import React, { Component } from 'react';
import { Text, View, ScrollView ,TouchableOpacity, FlatList} from 'react-native';
import { styles } from './styles';
import { GButtonComponent, GIcon, GDropDownComponent, GInputComponent, GHeaderComponent, GFooterComponent,GCheckBoxComponent } from '../../CommonComponents';
import gblStrings from '../../Constants/GlobalStrings';
import { zipCodeRegex,emailRegex } from '../../Constants/RegexConstants';
import { CustomRadio } from '../../AppComponents';
import PropTypes from "prop-types";
import { scaledHeight } from '../../Utils/Resolution';
const dummyData = [
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
    },
];

const manageIntrestedPartiesList=[
    {
        title:"Bob John",
        mail:"bobjohn@gmail.com",
        count:"#3"
    },
    {
        title:"David M",
        mail:"davidm@gmail.com",
        count:"#3"
    }
];

const zipcode=[
    {
        zip: "111111111",
        city: 'Hyderabad',
        state:'Telangana'
    },
    {
        id:"11111",
        city: "Mumbai",
        state:'Maharashtra'
    }
];

const DropDownListItem = (props) => {
    return (
        <TouchableOpacity
            style={{ height: 33}}
            onPress={props.onSelectedItem}
        >
        <Text> {props.value} </Text>
        </TouchableOpacity>
    );
};
DropDownListItem.propTypes = {
    onSelectedItem: PropTypes.func,
    value: PropTypes.string
};

class manageIntrestedPartiesComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            isAddNewVisible:false,
            isSavedSuccess:false,
            errorMessage:"",
            completeData:[],
            personal:{
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
                cityValidation:true,
                stateValidation:true
            },
            
            listIntrestedParties:manageIntrestedPartiesList,
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
        console.log("List of Managed Intrested Parties::::",this.state.listIntrestedParties);
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

    setScrollViewRef = (element) => {
        this.scrollViewRef = element;
    };

    setInputRef = (inputComp) => (ref) => {
        this[inputComp] = ref;
    }

    onSubmitEditing = (input) => text => {
        console.log("onSubmitEditing:::>" + text);
        input.focus();
    }

    isEmpty = (str) => {
        if (str == "" || str == undefined || str == null || str == "null" || str == "undefined") {
            return true;
        } else {
            return false;
        }
    }

    validateEmail = (text) => {
        let validate = emailRegex.test(text);
        this.onUpdateField("personal","emailAddressValidation",validate);
    }

    validateZip = (text) => {
        let validate = zipCodeRegex.test(text);
        this.onUpdateField("personal","zipcodeValidation",validate);
    }

    validateZipCode = (text) => {
        //allows only 5 digit or 9 digit format(12345 and 12345-6789)
        let validate = zipCodeRegex.test(text);
        this.onUpdateField("personal","zipcodeValidation",validate);
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
          },
          isAddNewVisible:false,
          isSavedSuccess:false 
        }));
    }

    onClickSave = () => {
        this.setState({isAddNewVisible:false,isSavedSuccess:true});
        let addValue=[],addContent={};
        addContent.title=this.state.personal.firstName+ " " +this.state.personal.lastName;
        addContent.mail=this.state.personal.emailAddress?this.state.personal.emailAddress:"abc@gmail.com";
        addContent.count='#3';
        addValue.push(addContent);
        let arr=[],obj={};
        obj.name=this.state.personal.firstName+" "+this.state.personal.middleInitial+" "+this.state.personal.lastName;
        obj.emailAddress=this.state.personal.emailAddress;
        obj.company=this.state.personal.company;
        obj.address=this.state.personal.addrLine1+","+this.state.personal.addrLine2;
        obj.zipCode=this.state.personal.zipCode;
        obj.city=this.state.personal.city;
        obj.docFrequency=this.state.personal.documentFrequency;
        arr.push(obj);
        this.setState({completeData:this.state.completeData.concat(arr)},console.log("Entered Data for Intrested Parties:::",this.state.completeData));
        
        this.setState({listIntrestedParties:this.state.listIntrestedParties.concat(addValue)},console.log(this.state.listIntrestedParties));
    }

    onAddClicked = () => {
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
            errMsg="error";
        }else{
            this.onUpdateField("personal","firstNameValidation",true);
        }

        if (this.isEmpty(this.state.personal.lastName)) {
            this.onUpdateField("personal","lastNameValidation",false);
            errMsg="error";
        }else{
            this.onUpdateField("personal","lastNameValidation",true); 
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
            errMsg="error";
        }else{
            this.onUpdateField("personal","zipcodeValidation",true);
        }

        if (this.isEmpty(this.state.personal.city)) {
            this.onUpdateField("personal","cityValidation",false);
            errMsg="error";
        }else{
            this.onUpdateField("personal","cityValidation",true);
        }

        if (this.isEmpty(this.state.personal.state)) {
            this.onUpdateField("personal","stateValidation",false);
            errMsg="error";
        }else{
            this.onUpdateField("personal","stateValidation",true);
        }

        if(errMsg!="error")
        {
            isValidationSuccess = true;
        }
        
        return isValidationSuccess;
        
    }

    renderRadio = (radioName, radioSize, componentStyle, layoutStyle) =>{
        console.log("renderRadio::: " + radioName);
        let radioData = dummyData, tempkey="";
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

    updateNotificationMsgState=()=>{
        this.setState({isSavedSuccess:false});
    }

    updateCityState=()=>{
        let zip=this.state.zipCode;
        zipcode.map((m)=>{
            if(zip === m.zip){
                this.onUpdateField("personal","city",m.city);
                this.onUpdateField("personal","state",m.state);
                
            }
        });
    }
    
    selectFrequency = () => {
        console.log("sonal",this.state.documentFrequencyDropDown);
        this.setState({documentFrequencyDropDown : !this.state.documentFrequencyDropDown});
    }

    selectedDropDownValue = (value) => {
        this.setState({
            documentFrequency : value,
            documentFrequencyDropDown : false
        });
    }

    documentTypeCheck=()=>{
        return(
            <>
            {this.state.documentType.map((item,index) =>
                (<GCheckBoxComponent 
                    onPress={()=>this.checkBoxClicked(index, item.checked,this.state.documentType,"documentType")}
                    selected = {item.checked}
                    options = {item.options}
                    key = {item.options}
                />)
            )};
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
                    errorText={gblStrings.accManagement.emptyFirstNameMsg}
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
                    returnKeyType={"done"}
                    onChangeText={this.onChangeText("personal","lastName")}
                    errorFlag={!this.state.personal.lastNameValidation}
                    errorText={gblStrings.accManagement.emptyLastNameMsg}
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
                    onBlur={this.validateEmail}
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
                    onBlur={this.updateCityState}
                    onChangeText={this.onChangeText("personal","zipCode")}
                    errorFlag={!this.state.personal.zipcodeValidation}
                    errorText={gblStrings.accManagement.emptyZipCodeMsg}
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
                            maxLength={gblStrings.maxLength.city}
                            onChangeText={this.onChangeText("personal","city")}
                            errorFlag={!this.state.personal.cityValidation}
                            errorText={gblStrings.accManagement.emptyCityMsg}
                        />
                    </View>
                    <View style={styles.customCityStateView}>
                        <GInputComponent
                            propInputStyle={styles.customTxtBox}
                            placeholder={gblStrings.accManagement.enterState}
                            value={this.state.personal.state}
                            maxLength={gblStrings.maxLength.state}
                            onChangeText={this.onChangeText("personal","state")}
                            errorFlag={!this.state.personal.stateValidation}
                            errorText={gblStrings.accManagement.emptyStateMsg}
                        />
                    </View>
                </View>
                <Text style={styles.lblTxt}>
                    <Text>{gblStrings.accManagement.statements}</Text>
                    <Text>{gblStrings.accManagement.prospectusAndReports}</Text>
                </Text>
                <Text style={[styles.lblLargeTxt]}>{gblStrings.accManagement.desiredFormatDelivaryDocs}</Text>
                {this.renderRadio("selectedProspectusReportsRef", 36, { marginBottom: scaledHeight(0), marginTop: scaledHeight(20) }, styles.radioBtnColGrp)}
                
                 {/* <Text style={styles.lblTxt}>{gblStrings.accManagement.selectDocumentType}</Text> */}
                 {/* {<this.documentTypeCheck/>} */}

                <GDropDownComponent 
                    dropDownName={gblStrings.accManagement.selectDocumentFrequency}
                    dropDownTextName={styles.lblTxt} 
                    data={dummyData} 
                    changeState={this.selectFrequency}
                    showDropDown={this.state.documentFrequencyDropDown}
                    dropDownValue={this.state.documentFrequency}
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

    listIntrestedParties=()=>{
        return(
            <View>
                <Text style={styles.subHeadlineText}>
                    {gblStrings.accManagement.listOfIntrestedParties}
                </Text>
                <TouchableOpacity onPress={this.onAddClicked}>
                    <Text style={styles.addNewLink}>
                        {gblStrings.accManagement.addNew}
                    </Text>
                </TouchableOpacity>
                
                <View style={styles.settingsBorder} />
                {this.state.listIntrestedParties.map((item,key)=>{
                    return(
                        <View style={styles.cardView} key={key}>
                            <Text style={styles.cardTitleText}>{item.title}</Text>
                            <Text style={styles.cardMailText}>{item.mail}</Text>
                            <View style={styles.accountTaggedView}>
                                <Text style={styles.accContentText}>{"Accounts Tagged"}</Text>
                                <Text style={styles.accCountText}>{item.count}</Text>
                            </View>
                        </View>
                    );
                })}
            </View>
        );
    }
    
    renderIntrestedPartiesSection = () => {
        return (
            <>
                {this.state.isAddNewVisible?<this.addIntrestedParties />:<this.listIntrestedParties />}
            </>
        );
    }

    render() {
        return (
            <View style={styles.container} >
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
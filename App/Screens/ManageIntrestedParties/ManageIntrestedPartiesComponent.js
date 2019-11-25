import React, { Component } from 'react';
import { Text, View, ScrollView ,TouchableOpacity,FlatList} from 'react-native';
import { styles } from './styles';
import { GButtonComponent,GIcon, GInputComponent, GHeaderComponent, GFooterComponent,GCheckBoxComponent } from '../../CommonComponents';
import gblStrings from '../../Constants/GlobalStrings';
import { CustomRadio, CustomDropDown } from '../../AppComponents';
import PropTypes from "prop-types";

const dummyData = [
    {
        id: '1',
        title: 'Option 1',
    },
    {
        id: '2',
        title: 'Option 2',
    },
    {
        id: '3',
        title: 'Option 3',
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

const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;

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

class ManageIntrestedPartiesComponent extends Component {
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
                stateDropDown:false,
                formatForDocument:"",
                documentType:"",
                documentFrequency:"",
                firstNameValidation:true,
                lastNameValidation: true,
                emailAddressValidation:true,
                companyValidation:true,
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
        };
    }
   
    componentDidMount() {
        console.log("List of Managed Intrested Parties::::",this.state.listIntrestedParties);
        console.log("props data::",this.props);
    }
    
    setScrollViewRef = (element) => {
        this.scrollViewRef = element;
    };

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

    validateFields = () => {
        try {
            console.log("validateFields:::");
            let isValidationSuccess = false;
            this.setState(prevState => ({
                personal: {
                    ...prevState.personal,
                    lastNameValidation: true,
                    addrLine1Validation: true,
                    addrLine2Validation: true,
                    companyValidation:true,
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

    updateState=()=>{
        this.setState({isAddNewVisible:false,isSavedSuccess:false});
    }

    onClickSave=()=>{
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
        obj.docFormat=this.state.personal.formatForDocument;
        obj.docType=this.state.personal.documentType;
        obj.docFrequency=this.state.personal.documentFrequency;
        obj.docDeliveryFormat=this.state.personal.documentDeliveryFormat;
        arr.push(obj);
        this.setState({completeData:arr},console.warn("Entered Data for Intrested Parties:::",this.state.completeData));
        
        this.setState({listIntrestedParties:this.state.listIntrestedParties.concat(addValue)},console.log(this.state.listIntrestedParties));
    }

    onAddClicked=()=>{
        this.setState({isAddNewVisible:true,isSavedSuccess:false});
    }
    
    goBack = () => {
        this.props.navigation.goBack();
    }
    
    onChangeText = (stateKey,keyName)=> text =>{
        console.log("change State::",stateKey,keyName);
        this.setState(prevState => ({
            [stateKey]: {
                ...prevState[stateKey],
                [keyName]:text
            }
        }));
    }  

    onUpdateField = (stateKey,keyName,val) =>{
        this.setState(prevState => ({
            [stateKey]: {
                ...prevState[stateKey],
                [keyName]:val
            }
        }));
    }

    onPressRadio = (stateKey,keyName,text)=> () => this.setState(prevState => ({
        [stateKey]: {
            ...prevState[stateKey],
            [keyName]:text
        }
    }));

    onPressDropDown = (stateKey,keyName) => () => this.setState(prevState => ({
        [stateKey]: {
            ...prevState[stateKey],
            [keyName]: !this.state.personal[keyName]
        }
    }));

    selectedDropDownValue = (dropDownName, value) => {
        this.state.empstateDropDown;
        switch (dropDownName) {
            case "stateDropDown":
                this.setState(prevState => ({
                    personal: {
                        ...prevState.personal,
                        state: value,
                        stateDropDown: false
                    }
                }));
                break;
            case "documentFrequencyDropDown":
                this.setState(prevState => ({
                    personal: {
                        ...prevState.personal,
                        documentFrequency: value,
                        documentFrequencyDropDown: false
                    }
                }));
                break;
            default:
                break;

        }

    }

    renderDropDown = (dropDownName, dropDownCompState = false, data, width = '100%') => {
        console.log("renderDropDown::: " + dropDownName);
        let keyName = "title";
        if (dropDownCompState) {
            return (
                <View style={{ height: 100, borderWidth: 1, width: width, borderColor: "#DEDEDF", backgroundColor: 'white' }}>
                    <FlatList
                        data={data}
                        renderItem={({ item }) => 
                        (<DropDownListItem
                            value={item[keyName]}
                            onSelectedItem={() => this.selectedDropDownValue(dropDownName, item[keyName])}
                        />)}
                        keyExtractor={item => item.id}
                    />
                </View>
            );

        }
    }

    checkBoxClicked = (indexPre,previousValue) => {
        var tempArray = [];
        this.state.documentDeliveryFormat.map((item,index)=>{
            var temp = Object.assign({}, item);
            if(index === indexPre){
                temp.checked = !previousValue;
            }
            tempArray.push(temp);
        });
        this.setState({documentDeliveryFormat : tempArray});
    }

    validateEachFields = () => {
        var errMsg = "";
        var isValidationSuccess = false;
        if (!this.isEmpty(this.state.personal.emailAddress)) {
            this.validateEmail(this.state.personal.emailAddress);
            errMsg="error";
        }

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

        if (this.isEmpty(this.state.personal.company)) {
            this.onUpdateField("personal","companyValidation",false);
            errMsg="error";
        }else{
            this.onUpdateField("personal","companyValidation",true);
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

        if(errMsg!="error")
        {
            isValidationSuccess = true;
        }
        
        return isValidationSuccess;
        
    }

    addIntrestedParties=()=>{
        return(
            <View>
                <Text style={styles.subHeadlineText}>
                    {gblStrings.accManagement.addNewIntrestedParties}
                </Text>
                <View style={styles.settingsBorder} />
                <Text style={styles.lblTxt}>
                    {gblStrings.accManagement.firstName}
                </Text>
                <GInputComponent
                    propInputStyle={this.state.personal.firstNameValidation?styles.customTxtBox:styles.customTxtBoxError}
                    placeholder={""}
                    maxLength={gblStrings.maxLength.firstName}
                    onChangeText={this.onChangeText("personal","firstName")}
                />
                {!this.state.personal.firstNameValidation?<Text style={styles.errorMsg}>{gblStrings.accManagement.emptyFirstNameMsg}</Text>:null}
                <Text style={styles.lblTxt}>
                    <Text style={styles.lblTxt}>
                        {gblStrings.accManagement.middleInitial}
                    </Text>
                    <Text style={styles.optionalTxt}>
                        {" " + gblStrings.accManagement.optional}
                    </Text>
                </Text>
                <GInputComponent
                    propInputStyle={styles.customTxtBox}
                    placeholder={""}
                    maxLength={gblStrings.maxLength.middleInitial}
                    onChangeText={this.onChangeText("personal","middleInitial")}
                />
                <Text style={styles.lblTxt}>
                    {gblStrings.accManagement.lastName}
                </Text>
                <GInputComponent
                    propInputStyle={this.state.personal.lastNameValidation ? styles.customTxtBox : styles.customTxtBoxError}
                    placeholder={""}
                    maxLength={gblStrings.maxLength.lastName}
                    returnKeyType={"done"}
                    onChangeText={this.onChangeText("personal","lastName")}
                />
                {!this.state.personal.lastNameValidation?<Text style={styles.errorMsg}>{gblStrings.accManagement.emptyLastNameMsg}</Text>:null}
                <Text style={styles.lblTxt}>
                    <Text style={styles.lblTxt}>
                        {gblStrings.accManagement.emailAddress}
                    </Text>
                    <Text style={styles.optionalTxt}>
                        {" " + gblStrings.accManagement.optional}
                    </Text>
                </Text>
                <GInputComponent
                    propInputStyle={this.state.personal.emailAddressValidation ? styles.customTxtBox : styles.customTxtBoxError}
                    placeholder={gblStrings.accManagement.emailformat}
                    keyboardType="email-address"
                    maxLength={gblStrings.maxLength.emailID}
                    onChangeText={this.onChangeText("personal","emailAddress")}
                />
                {!this.state.personal.emailAddressValidation?<Text style={styles.errorMsg}>{gblStrings.accManagement.emailformat}</Text>:null}
                <Text style={styles.lblTxt}>
                    {"Company"}
                </Text>
                <GInputComponent
                    propInputStyle={this.state.personal.companyValidation ? styles.customTxtBox : styles.customTxtBoxError}
                    placeholder={""}
                    maxLength={gblStrings.maxLength.company}
                    returnKeyType={"done"}
                    onChangeText={this.onChangeText("personal","company")}
                />
                {!this.state.personal.companyValidation?<Text style={styles.errorMsg}>{gblStrings.accManagement.emptyCompanyMsg}</Text>:null}
                <Text style={styles.lblTxt}>
                    {gblStrings.accManagement.address}
                </Text>
                <GInputComponent
                    propInputStyle={this.state.personal.addrLine1Validation ? styles.customTxtBox : styles.customTxtBoxError}
                    placeholder={""}
                    maxLength={gblStrings.maxLength.emplAddress1}
                    onChangeText={this.onChangeText("personal","addrLine1")}
                />
                {!this.state.personal.addrLine1Validation?<Text style={styles.errorMsg}>{gblStrings.accManagement.emptyAddressLine1Msg}</Text>:null}
                <GInputComponent
                    propInputStyle={this.state.personal.addrLine2Validation ? styles.customTxtBox : styles.customTxtBoxError}
                    placeholder={""}
                    maxLength={gblStrings.maxLength.addressLine2}
                    onChangeText={this.onChangeText("personal","addrLine2")}
                />
                {!this.state.personal.addrLine2Validation?<Text style={styles.errorMsg}>{gblStrings.accManagement.emptyAddressLine2Msg}</Text>:null}
                <Text style={styles.lblTxt}>
                    {gblStrings.accManagement.zipcode}
                </Text>
                <GInputComponent
                    propInputStyle={this.state.personal.zipcodeValidation ? styles.customTxtBox : styles.customTxtBoxError}
                    placeholder={""}
                    maxLength={gblStrings.maxLength.zipCode}
                    keyboardType="number-pad"
                    returnKeyType={"done"}
                    onChangeText={this.onChangeText("personal","zipCode")}
                />
                {!this.state.personal.zipcodeValidation?<Text style={styles.errorMsg}>{gblStrings.accManagement.emptyZipCodeMsg}</Text>:null}
                <Text style={styles.lblTxt}>
                    {gblStrings.accManagement.cityAndState}
                </Text>
                <View style={styles.stateCityView}>
                    <GInputComponent
                        propInputStyle={this.state.personal.cityValidation?styles.customCityTextBox:styles.customCityErrTextBox}
                        placeholder={gblStrings.accManagement.enterCity}
                        returnKeyType={"done"}
                        maxLength={gblStrings.maxLength.city}
                        onChangeText={this.onChangeText("personal","city")}
                    />
                    <View style={styles.cityWidthDropDown}>
                        <CustomDropDown
                            onPress={this.onPressDropDown("personal","stateDropDown")}
                            value={this.state.personal.state}
                            propInputStyle={styles.customListStateTxtBox}
                            placeholder={gblStrings.common.select}
                        />
                    </View>
                </View>
                {!this.state.personal.cityValidation?<Text style={styles.errorMsg}>{gblStrings.accManagement.emptyCityMsg}</Text>:null}
                {this.renderDropDown('stateDropDown', this.state.personal.stateDropDown, dummyData)}
                <Text style={styles.lblTxt}>
                    <Text>{gblStrings.accManagement.statements}</Text>
                    <Text>{gblStrings.accManagement.prospectusAndReports}</Text>
                </Text>
                <Text style={[styles.lblLargeTxt]}>{"Desired format for delivery of documents"}</Text>
                <View style={styles.radioBtnColGrp}>
                    <CustomRadio
                        size={30}
                        itemBottom={13}
                        outerCicleColor={"#DEDEDF"}
                        innerCicleColor={"#61285F"}
                        labelStyle={styles.lblRadioBtnTxt}
                        label={"Online"}
                        descLabelStyle={styles.lblRadioDescTxt}
                        descLabel={""}
                        selected={(this.state.personal.formatForDocument !== null && this.state.personal.formatForDocument == "Online") ? true : false}
                        onPress={this.onPressRadio("personal","formatForDocument","Online")}  

                    />
                    <CustomRadio
                        size={30}
                        itemBottom={13}
                        outerCicleColor={"#DEDEDF"}
                        innerCicleColor={"#61285F"}
                        labelStyle={styles.lblRadioBtnTxt}
                        label={"Paper"}
                        descLabelStyle={styles.lblRadioDescTxt}
                        descLabel={""}
                        selected={(this.state.personal.formatForDocument !== null && this.state.personal.formatForDocument == "Paper") ? true : false}
                        onPress={this.onPressRadio("personal","formatForDocument","Paper")}  
                    />
                    <CustomRadio
                        size={30}
                        itemBottom={13}
                        outerCicleColor={"#DEDEDF"}
                        innerCicleColor={"#61285F"}
                        labelStyle={styles.lblRadioBtnTxt}
                        label={"Large Print and Paper"}
                        descLabelStyle={styles.lblRadioDescTxt}
                        descLabel={""}
                        selected={(this.state.personal.formatForDocument !== null && this.state.personal.formatForDocument == "Large Print and Paper") ? true : false}
                        onPress={this.onPressRadio("personal","formatForDocument","Large Print and Paper")}  

                    />
                    <CustomRadio
                        size={30}
                        itemBottom={13}
                        outerCicleColor={"#DEDEDF"}
                        innerCicleColor={"#61285F"}
                        labelStyle={styles.lblRadioBtnTxt}
                        label={"Braille and Paper"}
                        descLabelStyle={styles.lblRadioDescTxt}
                        descLabel={""}
                        selected={(this.state.personal.formatForDocument !== null && this.state.personal.formatForDocument == "Braille and Paper") ? true : false}
                        onPress={this.onPressRadio("personal","formatForDocument","Braille and Paper")}  

                    />
                    <CustomRadio
                        size={30}
                        itemBottom={13}
                        outerCicleColor={"#DEDEDF"}
                        innerCicleColor={"#61285F"}
                        labelStyle={styles.lblRadioBtnTxt}
                        label={"Screen Reader Compatible and Online"}
                        descLabelStyle={styles.lblRadioDescTxt}
                        descLabel={""}
                        selected={(this.state.personal.formatForDocument !== null && this.state.personal.formatForDocument == "Screen Reader Compatible and Online") ? true : false}
                        onPress={this.onPressRadio("personal","formatForDocument","Screen Reader Compatible and Online")}  

                    />
                </View>
                <Text style={styles.lblTxt}>{"Select Document Type"}</Text>
                <View style={styles.radioBtnColGrp}>
                    <CustomRadio
                        size={30}
                        itemBottom={13}
                        outerCicleColor={"#DEDEDF"}
                        innerCicleColor={"#61285F"}
                        labelStyle={styles.lblRadioBtnTxt}
                        label={"Statements"}
                        descLabelStyle={styles.lblRadioDescTxt}
                        descLabel={""}
                        selected={(this.state.personal.documentType !== null && this.state.personal.documentType == "Statements") ? true : false}
                        onPress={this.onPressRadio("personal","documentType","Statements")}  

                    />
                    <CustomRadio
                        size={30}
                        itemBottom={13}
                        outerCicleColor={"#DEDEDF"}
                        innerCicleColor={"#61285F"}
                        labelStyle={styles.lblRadioBtnTxt}
                        label={"Tax Documents"}
                        descLabelStyle={styles.lblRadioDescTxt}
                        descLabel={""}
                        selected={(this.state.personal.documentType !== null && this.state.personal.documentType == "Tax Documents") ? true : false}
                        onPress={this.onPressRadio("personal","documentType","Tax Documents")}  
                    />
                </View>
                <Text style={styles.lblTxt}>{"Select Document Frequency"}</Text>
                <CustomDropDown
                // onPress={this.onPressDropDown("personal","documentFrequency")}
                // value={this.state.personal.documentFrequency}
                    propInputStyle={styles.customListTxtBox}
                    placeholder={"Select"}
                />
                {/* {this.renderDropDown('documentFrequencyDropDown', this.state.personal.documentFrequency, documentFrequencyData)} */}
                
                <Text style={styles.lblTxt}>{"Select Document Delivery Format"}</Text>
                {this.state.documentDeliveryFormat.map((item,index) =>
                    (<GCheckBoxComponent 
                        onPress={()=>this.checkBoxClicked(index, item.checked)}
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
                        onPress={this.updateState}
                    />
                    <GButtonComponent
                        buttonStyle={styles.normalBlackBtn}
                        buttonText={gblStrings.common.save}
                        textStyle={styles.normalBlackBtnTxt}
                        onPress={this.validateFields}
                    />
                </View>
            </View>    
        );
    }

    listIntrestedParties=()=>{
        return(
            <View>
                <Text style={styles.subHeadlineText}>
                    {gblStrings.accManagement.listOfIntrestedParties}
                </Text>
                <TouchableOpacity onPress={()=>{this.onAddClicked();}}>
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
            <View>
                {this.state.isAddNewVisible?<this.addIntrestedParties />:<this.listIntrestedParties />}
            </View>
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
                                <Text style={styles.notificationTxt}>{"Interested Party Added Successfully"}</Text>
                            </View>
                            <TouchableOpacity style={styles.flexSmall} onPress={()=>{this.setState({isSavedSuccess:false});}}>
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
                    <Text style={styles.disclaimerTxt}>{"Victory Mutual Funds and USAA Mutual Funds are distributed by Victory Capital Advisers, Inc. (VCA). VictoryShares ETFs and VictoryShares USAA ETFs are distributed by Foreside Fund Services, LLC (Foreside). VCA and Foreside are members of FINRA and SIPC. Victory Capital Management Inc. (VCM) is the investment adviser to the Victory Mutual Funds, USAA Mutual Funds, VictoryShares ETFs and VictoryShares USAA ETFs. VCA and VCM are not affiliated with Foreside. USAA is not affiliated with Foreside, VCM, or VCA. USAA and the USAA logos are registered trademarks and the USAA Mutual Funds and USAA Investments logos are trademarks of United Services Automobile Association and are being used by Victory Capital and its affiliates under license. Victory Capital means Victory Capital Management Inc., the investment manager of the USAA 529 College Savings Plan (Plan). The Plan is distributed by Victory Capital Advisers, Inc., a broker dealer registered with FINRA and an affiliate of Victory Capital. Victory Capital and its affiliates are not affiliated with United Services Automobile Association or its affiliates. USAA and the USAA logo are registered trademarks and the USAA 529 College Savings Plan logo is a trademark of United Services Automobile Association and are being used by Victory Capital and its affiliates under license."}</Text>
                </View>
                <GFooterComponent />
                </ScrollView>
            </View>

        );
    }
}

ManageIntrestedPartiesComponent.propTypes = {
    navigation: PropTypes.instanceOf(Object).isRequired,
};

export default ManageIntrestedPartiesComponent;
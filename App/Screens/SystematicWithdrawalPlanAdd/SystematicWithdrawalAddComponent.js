import React, { Component } from 'react';
import { View, ScrollView, Text, FlatList, Switch, TouchableOpacity, Modal } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import {
    GHeaderComponent,
    GFooterComponent,
    GButtonComponent,
    GInputComponent,
    GDropDownComponent,
    GSingletonClass,
    GIcon,
    GSwitchComponent,
} from '../../CommonComponents';
import { CustomRadio, CustomCheckBox } from '../../AppComponents';
import globalString from '../../Constants/GlobalStrings';
import * as ActionTypes from "../../Shared/ReduxConstants/ServiceActionConstants";
import * as reGex from '../../Constants/RegexConstants';
// import AppUtils from '../../Utils/AppUtils';
import InvestmentDetails from "../../Models/InvestmentDetails";
import ListItem from './ListItem';


const switchStyle={ flase: '#DBDBDB', true: '#444444' };
const deliveryAddressJson = [
    {
        "id": '1',
        "value": 'Current mailing address',
    },
    {
        "id": '2',
        "value": 'Payee and address',
    },
];
const reqAmountTypeJson = [
    {
        key: '1',
        value: 'Before Taxes'
    },
    {
        key: '2',
        value: 'After Taxes'
    },
];



const myInstance = GSingletonClass.getInstance();
class SystematicWithdrawalComponent extends Component {
    constructor(props) {
        super(props);
        const systematicAdd = myInstance.getSystematicWithdrawalEditMode() ? (myInstance.getScreenStateData().systematicAdd || {}) : {};
        const{navigation}=this.props;
        this.isValidScreen=true;
        this.state = {

            selectedItemID: "D",
            selectedItemName: "Doller",
            sysWithdrawalAmountJson: {},
            fundList: [],
            onlineMethod: -1,
            offlineMethod: -1,
            ItemToEdit: `${navigation.getParam('ItemToEdit', -1)}`,
            accName: `${navigation.getParam('accName')}`,
            accNumber: `${navigation.getParam('accNumber')}`,
            accountType: `${navigation.getParam('accountType')}`,
            // selectedBank: -1,
            fundRemaining: 0,
            totalFund: 0,
            investedIn: [],
            fundConsumed: 0,
            refresh: false,
            errorMsg: 'Please enter amount greater than or equal to 50',
            valueaddressDropDown: 'Current mailing address',
            // zip address validation
            isZipApiCalling: false,
            isAddressApiCalling: false,
            validationAddressOne: true,
            addressOne: '',

            isZipCodeValid: true,
            zipCodeValue: '11722',

            addressTwo: '154 Hawthorne Ave',
            userCity: 'CENTRAL ISLIP',
            userState: 'NY',

            payeeName: '',
            validationPayeeName: true,


            vcmFundList: [],
            selectedCountValidation: true,
            accountTypeValidation: true,
            financialInstitutionNameValidation: true,
            accountOwnerValidation: true,
            transitRoutingNumberValidation: true,
            accountNumberValidation: true,
            selectedFundInvestmentsData: [],
            action: "",
            totalInitialInvestment: "",
            // Filters
            isFilterApplied: false,
            modalVisible: false,
            filtermindata: [],
            filterriskdata: [],
            filterfunddata: [],
            applyFilterState: false,

            bankAccountInfo: [],

            switchOff: true,
            switchOn: false,
            IsNotValidAmount:false,
            
            taxAccountingMethodData: {
                requestedAmountType: 'Before Taxes',
                amountBeforeTaxes: '',
                amountAfterTaxes: '',
                federalTax: '',
                stateTax: '',
                totalTaxToBeWithhold: '',
                totalYouWillReceive: '',
                totalWithdrawal: '',
                stateTaxInDollars: '',
                federalTaxInDollars: '',
                taxHoldingOption: globalString.liquidation.withholdTaxes,
            },

            validateFundTo:true,
            validateFundFrom:true,
            validateVcmFunds:true,
            ...systematicAdd
        };
    }

    componentDidMount() {
        const{getFundListData,getBankAccountInfo,masterLookupStateData,getCompositeLookUpData,systematicWithdrawalState,bankAccountInfo}=this.props;
        const{fundList,ItemToEdit,accountType,vcmFundList}=this.state;
        if (this.state && fundList && !fundList.length > 0) {
            const fundListPayload = {companyId:""};
            getFundListData(fundListPayload);
        }
        if (this.state && vcmFundList && !vcmFundList.length > 0) {
            const fundListPayload = {};
            getFundListData(fundListPayload);
        }

        getBankAccountInfo();

        // filter funds
        const payload = [];
        const compositePayloadData = [
            "filter_min_inv",
            "filter_fund_type",
            "filter_risk"
        ];

        for (let i = 0; i < compositePayloadData.length; i+=1) {
            const tempkey = compositePayloadData[i];
            if (this.props && masterLookupStateData && !masterLookupStateData[tempkey]) {
                payload.push(tempkey);
            }
        }
        getCompositeLookUpData(payload);
        if (ItemToEdit > -1) {
            if (this.props && systematicWithdrawalState) {
                let valueToEdit;
                switch (accountType.toLowerCase()) {
                    case 'general':
                        valueToEdit = systematicWithdrawalState.general[Number(ItemToEdit)];
                        break;
                    case 'ira':
                        valueToEdit = systematicWithdrawalState.ira[Number(ItemToEdit)];
                        break;
                    case 'utma':
                        valueToEdit = systematicWithdrawalState.utma[Number(ItemToEdit)];
                        break;
                    default:
                        break;
                }
                if(valueToEdit!=null)
                {
                    //const strTotal = valueToEdit.totalAmount.replace('$', '').trim();
                    let bankIndex = 0;
                    bankAccountInfo.forEach((bank, index) => {

                        if (bank.bankName === valueToEdit.fundTo) {
                            bankIndex = index;
                            
                        }
                    });
                    let invest=[...valueToEdit.investedIn.map(v => ({...v,isActive:true,IsNotValidAmount:false,errorMsg:'Please enter amount greater than or equal to 50'}))];
                    this.setState({
                        sysWithdrawalAmountJson: valueToEdit,
                        accName: valueToEdit.account.split('|')[0],
                        accNumber: valueToEdit.account.split('|')[1],
                        totalFund: Number(valueToEdit.totalAmount),
                        fundList: invest,
                        fundConsumed: Number(valueToEdit.totalAmount),
                        fundRemaining: 0,
                        onlineMethod: bankIndex,
                    });
                }
            }
        }
    }

    componentDidUpdate(prevProps) {
        const{fundListState,bankAccountInfo,stateCityData}=this.props;
        const{bankAccountDetails,isZipApiCalling,isAddressApiCalling,ItemToEdit} = this.state;
        if (this.props !== prevProps) {
            let tempFundListData = [];
            // const tempFundAmount = [];
            if(ItemToEdit==-1)
            {
                if (fundListState[ActionTypes.GET_FUNDLIST] !== undefined && fundListState[ActionTypes.GET_FUNDLIST].Items !== null) {
                    tempFundListData = fundListState[ActionTypes.GET_FUNDLIST];

                    if (this.props && bankAccountInfo && bankAccountInfo !== bankAccountDetails) {
                        this.setState({
                            fundList: [...tempFundListData.map(v => ({ ...v, isActive: false, fundAmount: 0, IsNotValidAmount: false,errorMsg:'Please enter amount greater than or equal to 50' }))],
                            vcmFundList: [...tempFundListData.map(v => ({ ...v, isActive: false }))],
                            isFilterApplied: false,
                            bankAccountInfo
                        });
                    }
                }
            }
            else
            {
                if (fundListState[ActionTypes.GET_FUNDLIST] !== undefined && fundListState[ActionTypes.GET_FUNDLIST].Items !== null) {
                    tempFundListData = fundListState[ActionTypes.GET_FUNDLIST];

                        if (this.props && bankAccountInfo && bankAccountInfo !== bankAccountDetails) {
                            this.setState({
                            vcmFundList: [...tempFundListData.map(v => ({ ...v, isActive: false }))],
                            isFilterApplied: false,
                            bankAccountInfo 
                        });
                    }
                }
            }
        }

        const stateCityResponseData = ActionTypes.GET_STATECITY;
        const addressResponseData = ActionTypes.GET_ADDRESSFORMAT;

        if (isZipApiCalling) {
            if (this.props !== prevProps) {
                if (this.props && stateCityData[stateCityResponseData]) {
                    const tempResponse = stateCityData[stateCityResponseData];
                    if (tempResponse && tempResponse.City) {
                        this.setState({
                            userCity: tempResponse.City,
                            userState: tempResponse.State,
                            isZipCodeValid: true
                        });
                    } else {
                        this.setState({
                            userCity: ' - ',
                            userState: ' - ',
                            isZipCodeValid: false
                        });
                    }
                }
            }
        }

        if (isAddressApiCalling) {
            if (this.props !== prevProps) {
                if (this.props && stateCityData[addressResponseData]) {
                    const tempAddressResponse = stateCityData[addressResponseData];
                    if (tempAddressResponse && tempAddressResponse.Address2) {
                        this.setState({
                            addressOne: tempAddressResponse.Address1 || "",
                            addressTwo: tempAddressResponse.Address2 || "",
                            validationAddressOne: true
                        });
                        // this.moveToNext();
                    } else {
                        this.setState({
                            addressOne: '',
                            addressTwo: '',
                            validationAddressOne: false
                        });
                    }
                }
            }
        }
    }

    switchOnMethod = () => {
        const{switchOff,switchOn} =this.state;
        this.setState({
            switchOff: !switchOff,
            switchOn: !switchOn,
        });

        if(switchOn){
        this.setState(prevState => ({
            taxAccountingMethodData: {
                ...prevState.taxAccountingMethodData,
                taxHoldingOption: globalString.liquidation.withholdTaxes
            }
        }));
    }
        else{
             this.setState(prevState => ({
            taxAccountingMethodData: {
                ...prevState.taxAccountingMethodData,
                taxHoldingOption: globalString.liquidation.doNotWithholdTaxes
            }
        }));
    }
    }

    selectedDropDownValue = (value) => {
        this.setState(prevState => ({
            taxAccountingMethodData: {
                ...prevState.taxAccountingMethodData,
                requestedAmountType: value,
                federalTax: '',
                stateTax: '',
                totalTaxToBeWithhold: '',
                totalYouWillReceive: '',
                totalWithdrawal: '',
                amountBeforeTaxes: '',
                amountAfterTaxes: '',
                stateTaxInDollars: '',
                federalTaxInDollars: ''
            },
        }));
    }

    onChangeAmountBeforeTaxes = (amount) => {
        this.setState(prevState => ({
            taxAccountingMethodData: {
                ...prevState.taxAccountingMethodData,
                amountBeforeTaxes: amount,
            }
        }));
    }

    onChangeAmountAfterTaxes = (amount) => {
        this.setState(prevState => ({
            taxAccountingMethodData: {
                ...prevState.taxAccountingMethodData,
                amountAfterTaxes: amount,
            }
        }));
    }

    onChangeFederalTax = (tax) => {
        this.setState(prevState => ({
            taxAccountingMethodData: {
                ...prevState.taxAccountingMethodData,
                federalTax: tax,
            }
        }));
    }

    onChangeStateTax = (tax) => {
        this.setState(prevState => ({
            taxAccountingMethodData: {
                ...prevState.taxAccountingMethodData,
                stateTax: tax,
            }
        }));
    }

    onSubmitEditingStateTax = () => {
        const{taxAccountingMethodData,} =this.state;
        const statetax = taxAccountingMethodData.stateTax;
        const federaltax = taxAccountingMethodData.federalTax;
        let amount = 0;
        let totalTaxToBWithhold = 0;
        let stateTaxToDollars = 0;
        let federalTaxToDollars = 0;
        federalTaxToDollars = (((federaltax) / 100) * (amount));
        if (taxAccountingMethodData.requestedAmountType === "Before Taxes") {
            amount = taxAccountingMethodData.amountBeforeTaxes;
            stateTaxToDollars = (((statetax) / 100) * (amount));
            federalTaxToDollars = (((federaltax) / 100) * (amount));
            totalTaxToBWithhold = ((((statetax) / 100) * (amount)) + (((federaltax) / 100) * (amount)));
            this.setState(prevState => ({
                taxAccountingMethodData: {
                    ...prevState.taxAccountingMethodData,
                    stateTaxInDollars: stateTaxToDollars,
                    federalTaxInDollars: federalTaxToDollars,
                    totalTaxToBeWithhold: totalTaxToBWithhold,
                    totalYouWillReceive: amount - totalTaxToBWithhold,
                    totalWithdrawal: amount
                }
            }));
        } else {
            amount = taxAccountingMethodData.amountAfterTaxes;
            stateTaxToDollars = (((statetax) / 100) * (amount));
            federalTaxToDollars = (((federaltax) / 100) * (amount));
            totalTaxToBWithhold = ((((statetax) / 100) * (amount)) + (((federaltax) / 100) * (amount)));
            this.setState(prevState => ({
                taxAccountingMethodData: {
                    ...prevState.taxAccountingMethodData,
                    stateTaxInDollars: stateTaxToDollars,
                    federalTaxInDollars: federalTaxToDollars,
                    totalTaxToBeWithhold: totalTaxToBWithhold,
                    totalYouWillReceive: Number(amount),
                    totalWithdrawal: Number(amount) + Number(totalTaxToBWithhold)
                }
            }));
        }
    }

    getPayload = () => {

const{fundList,addressOne,addressTwo,sysWithdrawalAmountJson,
    ItemToEdit,accName,accNumber,accountType,onlineMethod,offlineMethod,fundRemaining,totalFund,bankAccountInfo,
fundConsumed,refresh,errorMsg,valueaddressDropDown,isAddressApiCalling,isZipApiCalling,
validationAddressOne,isZipCodeValid,zipCodeValue,userCity,userState,
payeeName,validationPayeeName,taxAccountingMethodData,selectedFundInvestmentsData,totalInitialInvestment,vcmFundList} =this.state;
        const selected = [];
        fundList.forEach(item => {
            if (item.fundAmount >= 50) {

                selected.push({ fundName: item.fundName, fundAmount: item.fundAmount});
            }
        });

        const savedAutoData = myInstance.getSavedSystematicData();
        const address=`${payeeName} ${addressOne} ${addressTwo} ${zipCodeValue}`;
        let vcmFund="";
        selectedFundInvestmentsData.forEach(item => {
            vcmFund=`${item.fundName},${vcmFund}`;
        });
        let toFund='';
        if(onlineMethod===-1)
        {
            if(offlineMethod===1)
                toFund=address;
            else
                toFund=vcmFund;
        }
        else
            toFund=bankAccountInfo[Number(onlineMethod)].bankName;

        const payload = {
            ...savedAutoData,
            selectedItemID: "D",
            selectedItemName: "Doller",
            sysWithdrawalAmountJson,
            fundList,
            ItemToEdit,
            accName,
            accNumber,
            accountType,
            onlineMethod,
            offlineMethod,
            fundRemaining,
            totalFund: `${ totalFund}`,
            fundTo: toFund,
            // onlineMethod===-1?(offlineMethod===1?address:vcmFund):bankAccountInfo[Number(onlineMethod)].bankName,
            investedIn: selected,
            fundConsumed,
            refresh,
            errorMsg,
            valueaddressDropDown,
            isZipApiCalling,
            isAddressApiCalling,
            validationAddressOne,
            addressOne,

            isZipCodeValid,
            zipCodeValue,

            addressTwo,
            userCity,
            userState,

            payeeName,
            validationPayeeName,
            "taxWithHoldingOption": taxAccountingMethodData.taxHoldingOption,
            "requestedAmountType": taxAccountingMethodData.requestedAmountType,
            "amountBeforeTaxes": globalString.liquidation.dollarSymbol + this.formatAmount(taxAccountingMethodData.amountBeforeTaxes),
            "amountAfterTaxes": globalString.liquidation.dollarSymbol + this.formatAmount(taxAccountingMethodData.amountAfterTaxes),
            "federalTaxInPerc": `${taxAccountingMethodData.federalTax }%`,
            "federalTaxInDollars": globalString.liquidation.dollarSymbol + this.formatAmount(taxAccountingMethodData.federalTaxInDollars),
            "stateTaxInPerc": `${taxAccountingMethodData.stateTax }%`,
            "stateTaxInDollars": globalString.liquidation.dollarSymbol + this.formatAmount(taxAccountingMethodData.stateTaxInDollars),
            "totalTaxToBeWithHold": globalString.liquidation.dollarSymbol + this.formatAmount(taxAccountingMethodData.totalTaxToBeWithhold),
            "totalYouWillReceive": globalString.liquidation.dollarSymbol + this.formatAmount(taxAccountingMethodData.totalYouWillReceive),
            "totalWithdrawal": globalString.liquidation.dollarSymbol + this.formatAmount(taxAccountingMethodData.totalWithdrawal),

            "totalFunds": `${selectedFundInvestmentsData.length}` || "",
            "totalInitialInvestment": totalInitialInvestment || "",
            "fundListData": selectedFundInvestmentsData,
            vcmFundList,
        };
        return payload;

    }

    setPayeeName = (text) => {
        this.setState({
            payeeName: text,
            validationPayeeName: true
        });
    }

    setAddressOne = (text) => {
        this.setState({
            addressOne: text,
            validationAddressOne: true
        });
    }

    setAddressTwo = (text) => {
        this.setState({
            addressTwo: text
        });
    }

    setZipcodeValue = (text) => {

        this.setState({
            zipCodeValue: text,
            isZipCodeValid: true
        });
    }

    

    validateZipCodeValue = () => {
        const{zipCodeValue} = this.state;
        const{getStateCity} =this.props;
        if (zipCodeValue !== '') {
            const payload = {
                'Zip': zipCodeValue
            };

            this.setState({
                isZipCodeValid: true,
                isZipApiCalling: true
            });
            getStateCity(payload);
        } else {
            this.setState({
                isZipCodeValid: false
            });
        }
    }

    addNewAddress = () => {
        const{addressOne,addressTwo,zipCodeValue,userState,userCity} = this.state;
        const{getAddressFormat}=this.props;
        let addNewAddressPayload = {};
        if (zipCodeValue !== '') {
            addNewAddressPayload = {
                "Address1": addressOne,
                "Address2": addressTwo,
                "City": userCity,
                "State": userState,
                "Zip": zipCodeValue
            };
        } else {
            addNewAddressPayload = {
                "Address1": addressOne,
                "Address2": addressTwo,
                "City": userCity,
                "State": userState,
            };
        }

        this.setState({
            isAddressApiCalling: true,
            validateFundTo:true,
        });
        getAddressFormat(addNewAddressPayload);
    }

    navigationNext = () => () =>{
        const{totalFund,fundConsumed,offlineMethod,onlineMethod,valueaddressDropDown,totalInitialInvestment} = this.state;
        if(this.isValidScreen)
        {
            if(totalFund >= 50)
            {    
                if(fundConsumed === totalFund)
                {
                    this.setState({validateFundFrom:true});
                    if(onlineMethod>-1)
                    {
                        this.setState({validateFundTo:true});
                        this.moveToNext();
                    }
                    else if(offlineMethod === 1)
                    {
                        
                        if(valueaddressDropDown==='Current mailing address')
                            this.moveToNext();
                        else{
                            this.addAddressOnValidate('validateAddressValueOne').then(()=>{
                                this.moveToNext();
                            })
                            // if(validationAddressOne)
                            
                        }
                    }
                    else if(offlineMethod ===2 )
                    {
                        if(totalFund===totalInitialInvestment.replace('$','').trim())
                        {
                            this.setState({validateVcmFunds:true});
                            this.moveToNext();
                        }
                        
                        else
                        {
                            this.setState({validateVcmFunds:false});
                        }
                    }
                    else{
                        this.setState({validateFundTo:false});
                    }
                }
                else
                {
                    this.setState({validateFundFrom:false});
                }
            }
            else
            {
                this.setState({IsNotValidAmount:true});
            }
        }
        
    }

    

    onSelected = (item) => () => {
        this.setState({ selectedItemID: item.id });
        this.setState({ selectedItemName: item.name });
    }

    onlineMethodFuc = index => () => {
        const{refresh} =this.state;
        this.setState({ onlineMethod: index, offlineMethod: -1,refresh:!refresh });
    }

    offlineMethodFuc = index => () => {
        const{refresh} =this.state;
        this.setState({ offlineMethod: index, onlineMethod: -1,refresh:!refresh });
    }

    generateKeyExtractor = (item) => item.bankName;

    renderInvestment = () => ({ item, index }) =>{
        const{onlineMethod} =this.state;
        return(

            <TouchableOpacity onPress={this.onlineMethodFuc(index)}>



                <View style={onlineMethod === index ? styles.bankViewSelected : styles.bankView}>
                <View style={styles.bankTopView} />
                    <View style={styles.bankMidView}>

                        <Text style={styles.bankNameText}>{item.bankName}</Text>
                        <Text style={styles.bankNumberText}>{item.accountNumber}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
        

    // toggleSwitch = index => () => {
    //     const{totalFund,fundList,fundRemaining,fundConsumed} =this.state;
    //     if(totalFund>=50)
    //     {
    //         const array = [...fundList]; 
    //         if (index !== -1) {
                
    //             const switchVal = array[Number(index)].isActive;
    //             array[Number(index)].isActive = !switchVal;
    //             array[Number(index)].IsNotValidAmount=false;
    //             array[Number(index)].errorMsg='';
    //             let remining=fundRemaining;
    //             let consumed=fundConsumed;
    //             if (!array[Number(index)].isActive) {
    //                 remining=Number(fundRemaining)+Number(array[Number(index)].fundAmount);
    //                 consumed=Number(fundConsumed)-Number(array[Number(index)].fundAmount);
    //                 array[Number(index)].fundAmount = 0;
                    
    //             }
    //             else if (array[Number(index)].isActive) {
    //                 array[Number(index)].fundAmount=array[Number(index)].fundAmount === 0?'':array[Number(index)].fundAmount;
    //             }
    //             this.setState({ fundList: array,fundRemaining:remining,fundConsumed:consumed,IsNotValidAmount:false });//,investedIn:[]
    //         }
    //     }
    //     else{
    //             this.setState({IsNotValidAmount:true});
    //     }
    // }

    toggleSwitch = index => () => {
        const{totalFund,fundList,fundRemaining,fundConsumed}= this.state;
        if(totalFund>=50)
        {
            const array = [...fundList]; 
            if (index !== -1) {
                
                
                let remining=fundRemaining;
                let consumed=fundConsumed;
                if (array[Number(index)].isActive && array[Number(index)].errorMsg=='') {
                    remining=Number(fundRemaining)+Number(array[Number(index)].fundAmount);
                    consumed=Number(fundConsumed)-Number(array[Number(index)].fundAmount);
                    array[Number(index)].fundAmount = 0;
                    
                }
                else if (array[Number(index)].isActive && array[Number(index)].errorMsg!='') {
                    array[Number(index)].fundAmount=0;
                    array[Number(index)].IsNotValidAmount=false;
                    array[Number(index)].errorMsg='';
                    this.isValidScreen=true;
                }
                else if (!array[Number(index)].isActive) {
                    array[Number(index)].fundAmount=array[Number(index)].fundAmount === 0?'':array[Number(index)].fundAmount;
                }
                const switchVal = array[Number(index)].isActive;
                array[Number(index)].isActive = !switchVal;
                this.setState({ fundList: array,fundRemaining:remining,fundConsumed:consumed,IsNotValidAmount:false});//investedIn:[] 
            }
        }
        else{
                this.setState({IsNotValidAmount:true});
        }
    }

    getFundAmount = (value, index) => {
        const{fundList} =this.state;//,ItemToEdit,investedIn
        const array = [...fundList];
        // const indexChange = selectedIndex;
        // if (index !== -1) {
        //     array[Number(index)].fundAmount = value;
        //     this.setState({ fundList: array });
        // }

        // if(ItemToEdit>-1 && index !== -1)
        // {
        //     const arrayInvest=[...investedIn];
        //     arrayInvest[Number(index)].amount = value;
        //     array[Number(index)].fundAmount = value;
        //     this.setState({ investedIn: arrayInvest,fundList: array });
        // }
        // else if (index !== -1) {
            array[Number(index)].fundAmount = value;
            this.setState({ fundList: array });
        // }
    }

    changeRemaining = () => {
        const{totalFund,fundList,refresh}=this.state;//,ItemToEdit,investedIn
        let remaining = totalFund;
       
        fundList.forEach((item,index) => {
            let msg="Please enter amount greater than or equal to 50";
            
            const array = [...fundList];//ItemToEdit>-1?[...investedIn]:
            array[Number(index)].IsNotValidAmount = false;
            array[Number(index)].errorMsg='';
            if(Number(item.fundAmount)>=50)
            {
                this.isValidScreen=true;
                if (Number(item.fundAmount) <= remaining)// fundRemaining
                    remaining -= Number(item.fundAmount);
                else {
                    msg="Amount is greater than Remining amount";
                    array[Number(index)].IsNotValidAmount = true;
                    array[Number(index)].errorMsg=msg;
                    this.isValidScreen=false;
                }
                array[Number(index)].fundAmount=item.fundAmount;
                array[Number(index)].isActive=true;
                
                 this.setState({ fundList: array,refresh:!refresh,
                    fundRemaining:  remaining, fundConsumed: totalFund -remaining});
            }
            else if(item.isActive){
                // let array = [...fundList]; // make a separate copy of the array
                array[Number(index)].IsNotValidAmount = true;
                array[Number(index)].errorMsg=msg;
                 this.setState({ fundList: array,refresh:!refresh });
            }
        });
    }



    setTotalFund = (value) => {
        const{fundConsumed} =this.state;
        let remaining;
        if (value > fundConsumed)
            remaining = value - fundConsumed;
        this.setState({ totalFund: Number(value), fundRemaining: Number(remaining) });
    }

    selectAddress = () => {
        const{addressDropDown} =this.state;
        this.setState({
            addressDropDown: !addressDropDown
        });
    }

    selectedDropDownAddressValue = (valueAddress) => {
        let addrOne = ''; let addrTwo = ''; let zip = ''; let city = ''; let state = '';
        if (valueAddress === 'Current mailing address') {
            addrOne = '';
            addrTwo = '154 Hawthorne Ave';
            zip = '11722';
            city = 'CENTRAL ISLIP';
            state = 'NY';
        }
        this.setState({
            addressOne: addrOne,
            addressTwo: addrTwo,
            zipCodeValue: zip,
            userState: state,
            userCity: city,
            validationAddressOne: true,
            validationPayeeName: true,
            isZipCodeValid: true,
            valueaddressDropDown: valueAddress,
            addressDropDown: false
        });
    }

    formatAmount = (amount) => {
        if (this.isEmpty(amount)) {
            return "";
        }
        const amt = Number(amount).toLocaleString();
        return amt;
    }

    isEmpty = (str) => {
        if (str === "" || str === undefined || str === null || str === "null" || str === "undefined") {
            return true;
        }
        return false;
    }

    navigationBack = () => {
        const{navigation}=this.props;
        navigation.goBack();
    }

    navigationCancel = () => 
    {
        const{ItemToEdit} =this.state;
        const{navigation}=this.props;
        if(ItemToEdit>-1)
            navigation.goBack();
        else
            navigation.goBack('systematicWithdrawalAccount');
    }
    // emptyInvestedIn = () =>
    // {
    //     this.setState({investedIn:[]})
    // }
    generateAmountKeyExtractor = (item) => item.fundNumber.toString()

    renderAmount = () => ({ item, index }) =>{
        const{errorMsg,ItemToEdit} =this.state;//investedIn,
        return(
            <View style={styles.fundListView}>
                {/* {investedIn.forEach((fund) => {

                    if (fund.name === item.fundName) {
                        item.isActive = true;
                        item.fundAmount = fund.amount.replace('$', '');
                        
                    }
                })} */}
                <View style={styles.fundListHeader}>
                    <View style={styles.fundListHeaderView}>
                        <Text style={styles.fundNameText}>{item.fundName}</Text>
                    </View>
                    <View style={styles.fundNameSwitch}>
                    <Switch trackColor={switchStyle}
                            onValueChange={this.toggleSwitch(index)}
                            value={item.isActive}
                            disabled={ItemToEdit>-1?true:false}
                        />
                    </View>
                </View>

                <View style={styles.auto_invest_to_flat} pointerEvents={item.isActive ? 'auto' : 'none'}>
                    <Text style={styles.auto_invest_to_top}>Amount</Text>
                    <View style={styles.auto_invest_to_top_view}>
                        <Text style={styles.auto_invest_to_top}>$</Text>
                        <View style={styles.inputError}>
                            <GInputComponent style={styles.fundRemainStyle} 
                                // onFocus={this.emptyInvestedIn}
                                onChangeText={(value) => this.getFundAmount(value, index)}
                                onEndEditing={this.changeRemaining}
                                value={item.fundAmount.toString()}
                                errorFlag={item.IsNotValidAmount}
                                errorText={errorMsg}
                                maxLength={13}
                                keyboardType="number-pad"
                            />
                        </View>
                    </View>
                    <Text style={styles.auto_invest_flat_min}>Min $50</Text>
                </View>

            </View>
        );
    }
        

    generateFundListKeyExtractor = (item) => item.fundNumber.toString();

    renderFundListItem = () => ({ item, index }) =>
        (
<ListItem
            isActive={item.isActive}
            fundName={item.fundName}
            minimum={`$ ${item.initialInvestment}`}
            autoInvesting={`$ ${item.initialInvestment} w/ $ ${item.monthlyInvestment} monthly`}
            risk={item.risk}
            onClickCheckbox={this.onSelectFundList(item, index)}
            onClickItem={this.onClickRowItem(item, index)}
/>
        );

    onSelectFundList = (item, index) => () => {
        const{vcmFundList,selectedFundInvestmentsData}=this.state;
        // AppUtils.Dlog(`onSelectFundList:: ${index}`);
        const newItems = [...vcmFundList];
        // AppUtils.Dlog(`newItems:: ${newItems}`);
        newItems[Number(index)].isActive = !newItems[Number(index)].isActive;
        const tempData = new InvestmentDetails();
        tempData.fundName = item.fundName;
        tempData.fundNumber = item.fundNumber;
        tempData.fundingOption = "";
        tempData.fundingOptionDropDown = "";
        tempData.initialInvestment = "";
        tempData.mininitialInvestment = item.initialInvestment;
        tempData.monthlyInvestment = "0";
        tempData.minmonthlyInvestment = item.initialInvestment;
        tempData.startDate = "";
        tempData.fundingOptionValidation = true;
        tempData.initialInvestmentValidation = true;
        tempData.monthlyInvestmentValidation = true;
        tempData.startDateValidation = true;
        tempData.action = "add";


        let newSelectedData = [...selectedFundInvestmentsData];
        const isObjExistIndex = this.getIndex(tempData.fundNumber, newSelectedData, 'fundNumber');

        if (isObjExistIndex === -1 && newItems[Number(index)].isActive) {

            newSelectedData = [...newSelectedData, tempData];

        } else if (isObjExistIndex !== -1 && newItems[Number(index)].isActive === false) {


            newSelectedData.splice(isObjExistIndex, 1);

        }


        this.setState({
            vcmFundList: newItems,
            selectedFundInvestmentsData: newSelectedData,
            selectedCount: this.getSelectedItems().length,
            selectedCountValidation: true

        });
    }

    getIndex = (value, arr, prop) => {
        for (let i = 0; i < arr.length; i+=1) {
            if (arr[i][prop] === value) {
                return i;
            }
        }
        return -1; // to handle the case where the value doesn't exist
    }

    getSelectedItems = () => {
        // AppUtils.Dlog("getSelectedItems:: ");
        const{vcmFundList}=this.state;
        const selecteditems = [];
        const newItems = [...vcmFundList];
        newItems.forEach((item) => {
            if (item.isActive === true) {
                selecteditems.push(item);
            }
        });
        // AppUtils.Dlog(`selecteditems:: ${selecteditems.length}`);

        return selecteditems;


    }

    onClickRowItem = (item) => () => {
        const{navigation}=this.props;
        // AppUtils.Dlog(`onSelectFundList:: ${item.fundNumber}`);
        //  navigation.navigate({ routeName: 'investmentPlanInfo', key: 'investmentPlanInfo' })
        navigation.push('investmentPlanInfo', { fundDetails: item.fundNumber });

    }

    // onChangeText = (keyName) => text => {
    //     // AppUtils.Dlog("onChangeText:::>");
    //     this.setState({
    //         [keyName]: text,
    //         accountTypeValidation: true,
    //         financialInstitutionNameValidation: true,
    //         accountOwnerValidation: true,
    //         transitRoutingNumberValidation: true,
    //         accountNumberValidation: true
    //     });
    // }

    // onPressDropDown = (keyName) => () => this.setState({
    //     [keyName]: !this.state[keyName],
    //     accountTypeValidation: true,
    //     financialInstitutionNameValidation: true,
    //     accountOwnerValidation: true,
    //     transitRoutingNumberValidation: true,
    //     accountNumberValidation: true,
    // });

    // onPressDropDownForInvestment = (keyName, index) => () => {
    //     // AppUtils.Dlog(`onPressDropDownForInvestment::: ${keyName}`);
    //     const newItems = [...selectedFundInvestmentsData];
    //     newItems[Number(index)][keyName] = !newItems[Number(index)][keyName];
    //     // newItems[Number(index)][keyName+"Validation"] = false;
    //     newItems[Number(index)].fundingOptionValidation = true;
    //     newItems[Number(index)].initialInvestmentValidation = true;
    //     newItems[Number(index)].monthlyInvestmentValidation = true;
    //     newItems[Number(index)].startDateValidation = true;

    //     this.setState({
    //         selectedFundInvestmentsData: newItems,
    //     });

    // }

    onPressRemoveInvestment = (item, index) => () => {
        // AppUtils.Dlog(`onPressRemoveInvestment::: ${item}`);
        const{selectedFundInvestmentsData,vcmFundList}=this.state;
        const newSelectedData = [...selectedFundInvestmentsData];
        const newItems = [...vcmFundList];
        const isObjExistIndex = this.getIndex(item.fundNumber, newSelectedData, 'fundNumber');

        if (isObjExistIndex !== -1) {

            newItems[isObjExistIndex].isActive = false;
            newSelectedData[Number(index)].isActive = false;
            newSelectedData.splice(index, 1);

        }
        this.setState({
            vcmFundList: newItems,
            selectedFundInvestmentsData: newSelectedData,
            selectedCount: this.getSelectedItems().length

        });
    }

    setInputRef = (inputComp) => (ref) => {
        this[inputComp] = ref;
    }

    onChangeTextForInvestment = (keyName, index) => text => {
        // AppUtils.Dlog("onChangeTextForInvestment:::>");
        const{selectedFundInvestmentsData}=this.state;
        const newItems = [...selectedFundInvestmentsData];
        newItems[Number(index)][keyName] = text;
        // newItems[Number(index)][keyName+"Validation"] = false;
        newItems[Number(index)].fundingOptionValidation = true;
        newItems[Number(index)].initialInvestmentValidation = true;
        newItems[Number(index)].monthlyInvestmentValidation = true;
        newItems[Number(index)].startDateValidation = true;

        let total = 0;
        for (let i = 0; i < newItems.length; i+=1) {
            if (!isNaN(newItems[i].initialInvestment) && newItems[i].initialInvestment !== "") {
                total += parseFloat(newItems[i].initialInvestment);

            }
        }

        // AppUtils.Dlog(`total:::>${total}`);

        this.setState({
            totalInitialInvestment: `$ ${total}`,
            selectedFundInvestmentsData: newItems,
        });


    }

    // onChangeDateForInvestment = (keyName, index) => date => {
    //     // AppUtils.Dlog("onChangeDateForInvestment:::>");
    //     const{selectedFundInvestmentsData}=this.state;
    //     const newItems = [...selectedFundInvestmentsData];
    //     newItems[Number(index)][keyName] = date;
    //     // newItems[Number(index)][keyName+"Validation"] = false;
    //     newItems[Number(index)].fundingOptionValidation = true;
    //     newItems[Number(index)].initialInvestmentValidation = true;
    //     newItems[Number(index)].monthlyInvestmentValidation = true;
    //     newItems[Number(index)].startDateValidation = true;

    //     this.setState({
    //         selectedFundInvestmentsData: newItems,
    //     });
    // }

    // onSelectedDropDownValue = (dropDownName, objIndex) => (value, index, data) => {
    //     // AppUtils.Dlog(`onSelectedDropDownValue:: ${dropDownName}`);
    //     let item = data[Number(index)];
    //     const newItems = [...selectedFundInvestmentsData];

    //     switch (dropDownName) {
    //         case "fundingOptionDropDown":
    //             newItems[objIndex].fundingOptionDropDown = item.value;
    //             newItems[objIndex].fundingOption = item.key;

    //             // AppUtils.Dlog(`item.value:: ${item.value}`);
    //             // AppUtils.Dlog(`newItems[objIndex]:: ${newItems[objIndex]}`);

    //             this.setState({
    //                 selectedFundInvestmentsData: newItems
    //             });


    //             break;

    //         default:
    //             break;

    //     }
    // }
    // Modal - Filter Funds
    setModalVisible = (visible) => () => {
        const{applyFilterState}=this.state;
        if (!visible && !applyFilterState) {
            this.clearFilterAction();
        }
        this.setState({ modalVisible: visible });
        if (!applyFilterState) {
            this.constructFilterData();
        }
    }

    // Apply Filter Actions  
    applyFilterAction = (visible) => () => {
        const{filtermindata,filterriskdata,filterfunddata}=this.state;
        const{getFundListData}=this.props;
        this.setState({
            modalVisible: visible,
            applyFilterState: true,
            fundList: [],
            isFilterApplied: true
        });

        let mininvestkey = "";
        filtermindata.forEach(item => {
            if (item.isActive) {
                if (mininvestkey !== null && mininvestkey !== "") {
                    mininvestkey = mininvestkey.concat(`|${item.value}`);
                } else {
                    mininvestkey = item.value;
                }
            }
        });

        let riskkey = "";
        filterriskdata.forEach(item => {
            if (item.isActive) {
                if (riskkey !== null && riskkey !== "") {
                    riskkey = riskkey.concat(`|${item.key}`);
                } else {
                    riskkey = item.key;
                }
            }
        });

        let funddatakey = "";
        filterfunddata.forEach(item => {
            if (item.isActive) {
                if (funddatakey !== null && funddatakey !== "") {
                    funddatakey = funddatakey.concat(`|${item.key}`);
                } else {
                    funddatakey = item.key;
                }
            }
        });
        // AppUtils.Dlog("minInvest=", mininvestkey);
        // AppUtils.Dlog("risk=", riskkey);
        // AppUtils.Dlog("fundData=", funddatakey);

        const fundListPayload = { 'minInvestment': mininvestkey };
        getFundListData(fundListPayload);
    }

    // Checkbox selection on Clicking Filters 
    onCheckboxSelect = (fromtype, item, index) => () => {
        // AppUtils.Dlog('Index : ', index);
        // AppUtils.Dlog('Checkbox Selected : ', `${item.key} ${item.value} ${item.isActive}`);
        const{filtermindata,filterriskdata,filterfunddata}=this.state;
        let newItm = [];
        switch (fromtype) {
            case 'minInvest':
                newItm = [...filtermindata];
                newItm[Number(index)].isActive = !newItm[Number(index)].isActive;
                this.setState({ filtermindata: newItm });
                break;
            case 'risk':
                newItm = [...filterriskdata];
                newItm[Number(index)].isActive = !newItm[Number(index)].isActive;
                this.setState({ filterriskdata: newItm });
                break;
            case 'fundType':
                newItm = [...filterfunddata];
                newItm[Number(index)].isActive = !newItm[Number(index)].isActive;
                this.setState({ filterfunddata: newItm });
                break;
            default:
                break;
        }
        // AppUtils.Dlog(`New Item:${JSON.stringify(newItm)}`);
    }

    // Clear Filter Actions  
    clearFilterAction = () => {
        const{filtermindata,filterriskdata,filterfunddata}=this.state;
        this.setState({ applyFilterState: false });
        const tempmindata = [...filtermindata];
        const tempriskdata = [...filterriskdata];
        const tempfunddata = [...filterfunddata];

        this.setState({
            filtermindata: [...tempmindata.map(v => ({ ...v, isActive: false }))],
            filterriskdata: [...tempriskdata.map(v => ({ ...v, isActive: false }))],
            filterfunddata: [...tempfunddata.map(v => ({ ...v, isActive: false }))]
        });
    }

    checkFundAmount=()=>{
        const{totalFund}=this.state;
        this.setState({IsNotValidAmount:!(totalFund>=50) });
    }

    // Construct Filter values from Master Data on Clicking Filter Funds
    constructFilterData = () => {
        const{masterLookupStateData}=this.props;
        const tempKeyMinInv = 'filter_min_inv';
        const tempKeyRisk = 'filter_risk';
        const tempKeyFundType = 'filter_fund_type';
        let tempMinInvData = [];
        let tempRiskData = [];
        let tempFundTypeData = [];



        // AppUtils.Dlog('Filter Clicked...');
        if (tempKeyMinInv !== "" && this.props && masterLookupStateData && masterLookupStateData[tempKeyMinInv] && masterLookupStateData[tempKeyMinInv].value) {
            tempMinInvData = masterLookupStateData[tempKeyMinInv].value;
        }

        if (tempKeyRisk !== "" && this.props && masterLookupStateData && masterLookupStateData[tempKeyRisk] && masterLookupStateData[tempKeyRisk].value) {
            tempRiskData = masterLookupStateData[tempKeyRisk].value;
        }

        if (tempKeyFundType !== "" && this.props && masterLookupStateData && masterLookupStateData[tempKeyFundType] && masterLookupStateData[tempKeyFundType].value) {
            tempFundTypeData = masterLookupStateData[tempKeyFundType].value;
        }

        this.setState({
            filtermindata: [...tempMinInvData.map(v => ({ ...v, isActive: false }))],
            filterriskdata: [...tempRiskData.map(v => ({ ...v, isActive: false }))],
            filterfunddata: [...tempFundTypeData.map(v => ({ ...v, isActive: false }))]
        });
    }

    // navigateCompareFunds = () => {
    //     // AppUtils.Dlog(selectedFundInvestmentsData);
    //     const{selectedFundInvestmentsData}=this.state;
    //     const{navigation}=this.props;
    //     if (selectedFundInvestmentsData.length > 1) {
    //         if (selectedFundInvestmentsData.length < 5) {
    //             let fundSelectedCompare = "";
    //             selectedFundInvestmentsData.forEach((item, index) => {
    //                 fundSelectedCompare = `${fundSelectedCompare.concat(`fundNumber${index + 1}=${item.fundNumber}`)}&`;
    //             });
    //             // AppUtils.Dlog("Selected Funds:"+fundSelectedCompare);
    //             if (fundSelectedCompare !== null && fundSelectedCompare !== "") {
    //                 navigation.push('compareFunds', { fundDetails: fundSelectedCompare });
    //             }
    //         } else {
    //             alert('Please select minimum 2 or maximum 4 funds to compare');
    //         }
    //     } else {
    //         alert('Please select minimum 2 or maximum 4 funds to compare');
    //     }
    // }

    navigateCompareFunds= () =>{
        // AppUtils.debugLog(this.state.selectedFundInvestmentsData);
        const {selectedFundInvestmentsData} = this.state;
        const { navigation} = this.props;
        const { push } = navigation;  
        if(selectedFundInvestmentsData.length > 1){
            if(selectedFundInvestmentsData.length < 5){
                const fundSelectedCompare = {};
                selectedFundInvestmentsData.map((item,index)=>{                   
                    // fundSelectedCompare = `${fundSelectedCompare.concat(`fundNumber${index+1}=${item.fundNumber}`)}&`;
                    fundSelectedCompare[`fundNumber${index+1}`] = item.fundNumber;
                });                                               
               // AppUtils.debugLog("Selected Funds:"+fundSelectedCompare);
               if (fundSelectedCompare !== null && fundSelectedCompare !== "") {
                   push('compareFunds', { fundDetails: fundSelectedCompare });
               }
            }else{
                showAlert(gblStrings.common.appName ,gblStrings.accManagement.validateCompareFundsMsg,gblStrings.common.ok);
                AppUtils.debugLog(gblStrings.accManagement.validateCompareFundsMsg);
            }
        }else{
            showAlert(gblStrings.common.appName ,gblStrings.accManagement.validateCompareFundsMsg,gblStrings.common.ok);
            AppUtils.debugLog(gblStrings.accManagement.validateCompareFundsMsg);
        }      
    }

    moveToNext()
    {
        const{ItemToEdit,accName,accNumber,accountType}= this.state;
        const{navigation}=this.props;
        const payload = this.getPayload();
                        const stateData = myInstance.getScreenStateData();
                        myInstance.setSavedSystematicData(payload);
                        const screenState = {
                            ...stateData,
                            "systematicAdd": { ...this.state }
                        };
                        myInstance.setScreenStateData(screenState);
                        navigation.navigate({
                            routeName: 'systematicWithdrawalSchedule', key: 'systematicWithdrawalSchedule', params: {
                                ItemToEdit,
                                accName,
                                accNumber,
                                accountType
                            }
                        });
    }

    addAddressOnValidate(validationType){
        const{payeeName,addressOne,zipCodeValue} = this.state;
                switch (validationType) {
        
                    case 'validateAddressValueOne':
                        if (payeeName === "") {
                            this.setState({
                                validationPayeeName: false
                            });
                        }
                        if (addressOne === "") {
                            this.setState({
                                validationAddressOne: false
                            });
                        }
        
                        if (zipCodeValue === "") {
                            const validate = reGex.zipCodeRegex.test(zipCodeValue);
                            this.setState({
                                isZipCodeValid: validate
                            });
                        }
        
                        if (addressOne !== '' &&
                            zipCodeValue !=='') {
        
                            this.addNewAddress();
                        }
                        break;
                    default:
                        break;
                }
            }


    render() {
        // const tempFundOptionsData = fundingOptionsData;
        const{navigation}=this.props;
        const{fundList,payeeName,selectedFundInvestmentsData,
        accName,accNumber,accountType,offlineMethod,fundRemaining,totalFund,bankAccountInfo,
        fundConsumed,errorMsg,valueaddressDropDown,
        validationAddressOne,addressOne,isZipCodeValid,zipCodeValue,addressTwo,userCity,userState,
        validationPayeeName,taxAccountingMethodData,totalInitialInvestment,vcmFundList,filterfunddata,filterriskdata
    ,filtermindata,modalVisible,validateVcmFunds,addressDropDown,switchOff,switchOn,validateFundTo,collapseTWOIcon,validateFundFrom,
    selectedItemID,IsNotValidAmount,refresh} =this.state;
        // const date = new Date().getDate(); // Current Date
       // const month = new Date().getMonth() + 1; // Current Month
       // const year = new Date().getFullYear(); // Current Year
        // const currentdate = `${month}-${date}-${year}`;
        return (
            <View style={styles.container}>
                <GHeaderComponent navigation={navigation} />
                <ScrollView style={styles.scrollView}>
                    <View>
                        <Text style={styles.autoInvestHead}>Create Systematic Withdrawal Plan</Text>
                        <View style={styles.seperator_line} />
                        <View style={styles.circle_view}>
                            <View style={styles.circle_Completed}>
                                <Text style={styles.circleTextNew}>1</Text>
                            </View>
                            <View style={styles.circle_connect} />
                            <View style={styles.circle_Inprogress}>
                                <Text style={styles.circleText}>2</Text>
                            </View>
                            <View style={styles.circle_connect} />
                            <View style={styles.circle_NotStarted}>
                                <Text style={styles.circleText}>3</Text>
                            </View>
                            <View style={styles.circle_connect} />
                            <View style={styles.circle_NotStarted}>
                                <Text style={styles.circleText}>4</Text>
                            </View>
                            <View style={styles.circle_connect} />
                            <View style={styles.circle_NotStarted}>
                                <Text style={styles.circleText}>5</Text>
                            </View>
                        </View>
                        <View style={styles.autoInvest_title_view}>
                            <Text style={styles.autoInvest_title_text}>2 - Plan Details</Text>
                        </View>
                        <View style={styles.body}>
                        <View style={styles.accountBlock}>

                                <Text style={styles.accountText}>{accName}</Text>
                                <Text style={styles.accountText}>{`Account Number ${ accNumber}`}</Text>


                        </View>

                            <Text style={styles.autoInvest_sub_title_text}>- Withdrawal From</Text>
                            <View style={styles.seperator_line} />

                            <View style={styles.auto_invest_to}>
                                <Text style={styles.auto_invest_to_top}>Total Amount</Text>
                                <View style={styles.auto_invest_to_top_view}>
                                    <Text style={styles.auto_invest_to_top}>$</Text>
                                    <View style={styles.inputError}>
                                        <GInputComponent style={styles.fundRemainStyle} 
                                        onChangeText={this.setTotalFund} 
                                        onEndEditing={this.checkFundAmount}
                                        value={totalFund.toString()} 
                                        errorFlag={IsNotValidAmount}
                                        errorText={errorMsg}
                                        maxLength={13}
                                        keyboardType="number-pad"
                                        />
                                    </View>
                                </View>
                            </View>

                            <View style={styles.auto_invest_to}>
                                <Text style={styles.auto_invest_to_top}>In</Text>
                                <View style={styles.auto_invest_to_top_view}>
                                    <View style={styles.radioBtnGrp}>
                                    <CustomRadio
                                            componentStyle={styles.radioStyle}
                                            size={30}
                                            outerCicleColor="#DEDEDF"
                                            innerCicleColor="#61285F"
                                            labelStyle={styles.lblRadioBtnTxt}
                                            label="$"
                                            descLabelStyle={styles.lblRadioDescTxt}
                                            descLabel=""
                                            selected={!!((selectedItemID !== "" && selectedItemID === "D"))}
                                            onPress={this.onSelected({ name: 'Doller', id: 'D' })}
                                    />
                                        <CustomRadio

                                            size={30}
                                            componentStyle={styles.radioStyle}
                                            outerCicleColor="#DEDEDF"
                                            innerCicleColor="#61285F"
                                            labelStyle={styles.lblRadioBtnTxt}
                                            label="%"
                                            descLabelStyle={styles.lblRadioDescTxt}
                                            descLabel=""
                                            selected={!!((selectedItemID !== "" && selectedItemID === "P"))}
                                            onPress={this.onSelected({ name: 'Percentage', id: 'P' })}
                                        />
                                    </View>
                                </View>
                            </View>

                            <View style={styles.auto_invest_to} pointerEvents="none">
                                <Text style={styles.auto_invest_to_top}>Amount Consumed</Text>
                                <View style={styles.auto_invest_to_top_view}>
                                    <Text style={styles.auto_invest_to_top}>$</Text>
                                    <View style={styles.consumeError}>
                                        <GInputComponent style={styles.fundRemainStyle} 
                                        value={fundConsumed.toString()}
                                        errorFlag={!validateFundFrom}
                                        errorText="Please consume full total amount"
                                        />
                                    </View>
                                </View>
                            </View>

                            <View style={styles.auto_invest_to} pointerEvents="none">
                                <Text style={styles.auto_invest_to_top}>Amount Remaining</Text>
                                <View style={styles.auto_invest_to_top_view}>
                                    <Text style={styles.auto_invest_to_top}>$</Text>
                                    <GInputComponent style={styles.fundRemainStyle} value={fundRemaining.toString()} />
                                </View>
                            </View>


                            <FlatList style={styles.fundListStyle}
                                data={fundList}
                                renderItem={this.renderAmount()}
                                keyExtractor={this.generateAmountKeyExtractor}

                            />

                    {/* -----------------------------Tax Withholding Options starts here ------------------------*/}
                    {(accountType.toLowerCase() === "ira") ? (
                        <View>
                            <View style={styles.flex2}>
                                <View style={styles.emptyFlex} />
                                <View style={styles.headerFlex}>
                                    <Text style={styles.headerText}>{collapseTWOIcon}</Text>
                                    <Text style={styles.headerText}>{globalString.liquidation.taxWithHoldingOptions}</Text>
                                </View>
                                <View style={styles.line} />
                            </View>

                            
                                <View>
                                    <View style={styles.flex2}>
                                        <Text style={styles.fundSourceContent}>{globalString.liquidation.taxWithHoldingOptionsContent}</Text>
                                    </View>

                                    { /* -----------------------------Tax Withholding Options ends here ------------------------*/}

                                    <View style={styles.switchFlex}>
                                        <GSwitchComponent
                                            switchOffText={globalString.liquidation.doNotWithholdTaxes}
                                            switchOnText={globalString.liquidation.withholdTaxes}
                                            switchOff={switchOff}
                                            switchOn={switchOn}
                                            switchOnMethod={this.switchOnMethod}
                                            switchOffMethod={this.switchOnMethod}
                                            onStyle={styles.onButtonStyle}
                                            offStyle={styles.offButtonStyle}
                                            onStyleDisabled={styles.onButtonStyleDisable}
                                            offStyleDisabled={styles.offButtonStyleDisable}
                                            textOnStyle={styles.TextOnStyle}
                                            textOffStyle={switchOff ? styles.TextOffStyle : styles.TextOffStyleWithholdtax}
                                        />
                                    </View>

                                    {/* switch on view starts here */}
                                    {switchOff ? (
                                        <View style={styles.flex2}>
                                            <GDropDownComponent
                                                dropDownLayout={styles.dropDownLayout1}
                                                dropDownTextName={styles.blackTextBold16px}
                                                textInputStyle={styles.dropDownText}
                                                dropDownName={globalString.liquidation.isTheReqAmount}
                                                data={reqAmountTypeJson}
                                                dropDownValue={taxAccountingMethodData.requestedAmountType}
                                                selectedDropDownValue={this.selectedDropDownValue}
                                                dropDownPostition={styles.dropDownPosition}
                                            />

                                            {
                                                (taxAccountingMethodData.requestedAmountType === "Before Taxes") ? (
                                                    <View style={styles.stateTaxFlex}>
                                                        <Text style={styles.blackTextBold16px}>{globalString.liquidation.amountBeforeTaxes}</Text>
                                                        <View style={styles.totalWithdrawalFlex}>
                                                            <Text style={styles.dollarSkin}>$</Text>
                                                            <GInputComponent
                                                                propInputStyle={styles.amountBeforeTaxesVal}
                                                                inputStyle={styles.inputStyle}
                                                                value={taxAccountingMethodData.amountBeforeTaxes}
                                                                onChangeText={this.onChangeAmountBeforeTaxes}
                                                                maxLength={13}
                                                            />
                                                        </View>
                                                    </View>
                                                  ) : (
                                                    <View style={styles.stateTaxFlex}>
                                                        <Text style={styles.blackTextBold16px}>{globalString.liquidation.amountAfterTaxes}</Text>
                                                        <View style={styles.totalWithdrawalFlex}>
                                                            <Text style={styles.dollarSkin}>$</Text>
                                                            <GInputComponent
                                                                propInputStyle={styles.amountBeforeTaxesVal}
                                                                inputStyle={styles.inputStyle}
                                                                value={taxAccountingMethodData.amountAfterTaxes}
                                                                onChangeText={this.onChangeAmountAfterTaxes}
                                                                maxLength={13}
                                                            />
                                                        </View>
                                                    </View>
                                                  )}

                                            <View style={styles.stateTaxFlex}>
                                                <Text style={styles.blackTextBold16px}>{globalString.liquidation.federalTax}</Text>
                                                <View style={styles.horizontalFlex}>
                                                    <GInputComponent
                                                        propInputStyle={styles.stateTaxInputStyle}
                                                        inputStyle={styles.inputStyle}
                                                        value={taxAccountingMethodData.federalTax}
                                                        onChangeText={this.onChangeFederalTax}
                                                        onSubmitEditing={this.onSubmitEditingStateTax}
                                                        onBlur={this.onSubmitEditingStateTax}
                                                        maxLength={3}
                                                    />
                                                    <View style={styles.stateTaxToDollarFlex}>
                                                        <Text style={styles.dollarSkin}>$</Text>
                                                        <Text style={styles.stateTaxToDollarText}>{this.formatAmount(taxAccountingMethodData.federalTaxInDollars)}</Text>
                                                    </View>
                                                </View>
                                            </View>

                                            <View style={styles.stateTaxFlex}>
                                                <Text style={styles.blackTextBold16px}>{globalString.liquidation.stateTax}</Text>
                                                <View style={styles.horizontalFlex}>
                                                    <GInputComponent
                                                        propInputStyle={styles.stateTaxInputStyle}
                                                        inputStyle={styles.inputStyle}
                                                        value={taxAccountingMethodData.stateTax}
                                                        onChangeText={this.onChangeStateTax}
                                                        onSubmitEditing={this.onSubmitEditingStateTax}
                                                        onBlur={this.onSubmitEditingStateTax}
                                                        maxLength={3}
                                                    />
                                                    <View style={styles.stateTaxToDollarFlex}>
                                                        <Text style={styles.dollarSkin}>$</Text>
                                                        <Text style={styles.stateTaxToDollarText}>{this.formatAmount(taxAccountingMethodData.stateTaxInDollars)}</Text>
                                                    </View>
                                                </View>
                                            </View>

                                            <View style={styles.stateTaxFlex}>
                                                <Text style={styles.blackTextBold16px}>{globalString.liquidation.totalTaxToBeWithhold}</Text>
                                                <View style={styles.totalWithdrawalFlex}>
                                                    <Text style={styles.dollarSkin}>$</Text>
                                                    <Text style={styles.totalWithdrawalVal}>{this.formatAmount(taxAccountingMethodData.totalTaxToBeWithhold)}</Text>
                                                </View>
                                            </View>

                                            <View style={styles.stateTaxFlex}>
                                                <Text style={styles.blackTextBold16px}>{globalString.liquidation.totalYouWillReceive}</Text>
                                                <View style={styles.totalWithdrawalFlex}>
                                                    <Text style={styles.dollarSkin}>$</Text>
                                                    <Text style={styles.totalWithdrawalVal}>{this.formatAmount(taxAccountingMethodData.totalYouWillReceive)}</Text>
                                                </View>
                                            </View>

                                            <View style={styles.stateTaxFlex}>
                                                <Text style={styles.blackTextBold16px}>{globalString.liquidation.totalWithdrawal}</Text>
                                                <View style={styles.totalWithdrawalFlex}>
                                                    <Text style={styles.dollarSkin}>$</Text>
                                                    <Text style={styles.totalWithdrawalVal}> {this.formatAmount(taxAccountingMethodData.totalWithdrawal)}</Text>
                                                </View>
                                            </View>

                                        </View>
                                      ) : null}


                                    { /*  switch on view ends here */}



                                </View>
                        </View>
                      ) : null}
                                

                            <Text style={styles.autoInvest_sub_title_text}>- Fund To</Text>
                            <View style={styles.seperator_line} />
                            <Text style={styles.autoInvestCont}>Choose how you will fund your account and indicate your initial investment amount.</Text>
                            <Text style={styles.autoInvest_sub_title_text}>Offline Method</Text>
                            <Text style={styles.autoInvestCont}>Lorem ipsum dolor sit amet, consectetur adipiscing elitdh Nam imperdiet dictum orcittet</Text>
                            {!validateFundTo ? <Text style={styles.errMsg}>Select a method to transfer Funds</Text>:null}
                            <TouchableOpacity onPress={this.offlineMethodFuc(1)}>

                                <View style={offlineMethod === 1 ? styles.bankViewSelected : styles.bankView}>
                                    <View style={styles.offlineOptionViewTop} />
                                    <View style={styles.offlineOptionView}>
                                        <Text style={styles.offlineOptionText}>Check Order</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={this.offlineMethodFuc(2)}>

                                <View style={offlineMethod === 2 ? styles.bankViewSelected : styles.bankView}>
                                    <View style={styles.offlineOptionViewTop} />
                                    <View style={styles.offlineOptionView}>
                                        <Text style={styles.offlineOptionText}>Directed SWPs</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>

                            <View style={styles.orView}><Text style={styles.autoInvest_sub_title_text}>Or</Text></View>
                            <Text style={styles.autoInvest_sub_title_text}>Online Method</Text>
                            <FlatList style={styles.fundListStyle}
                                data={bankAccountInfo}
                                renderItem={this.renderInvestment()}
                                keyExtractor={this.generateKeyExtractor}
                                extraData={refresh}                         
                            />

                            {offlineMethod === 1 ? (
                                <View>
                                    <Text style={styles.autoInvest_sub_title_text}>- Delivery Address</Text>
                                    <View style={styles.seperator_line} />
                                    <Text style={styles.autoInvestCont}>Lorem ipsum dolor sit amet, consectetur adipiscing elitdh Nam imperdiet dictum orcittet</Text>
                                    <GDropDownComponent
                                        dropDownTextName={styles.financialTextLabel}
                                        dropDownName="Delivery Address"
                                        data={deliveryAddressJson}
                                        changeState={this.selectAddress}
                                        showDropDown={addressDropDown}
                                        dropDownValue={valueaddressDropDown}
                                        selectedDropDownValue={this.selectedDropDownAddressValue}
                                        itemToDisplay="value"
                                        dropDownPostition={styles.dropDownPosition1}
                                    />
                                    {valueaddressDropDown === 'Payee and address' ? (
                                        <View style={styles.addressStyle}>
                                            <Text style={styles.financialTextLabel}>Payee Name</Text>
                                            <GInputComponent onChangeText={this.setPayeeName}
                                                value={payeeName}
                                                errorFlag={!validationPayeeName}
                                                errorText={globalString.profileValidationMessages.validatePayeeName}
                                            />
                                        </View>
                                      )
                                        : null}
                                    <View style={styles.addressStyle}
                                        pointerEvents={valueaddressDropDown === 'Payee and address' ? "auto" : "none"}
                                    >
                                        <Text style={styles.financialTextLabel}>Address</Text>
                                        <GInputComponent placeholder={globalString.addAddressInfo.addressLineOne}
                                            onChangeText={this.setAddressOne}
                                            value={addressOne}
                                            errorFlag={!validationAddressOne}
                                            errorText={globalString.profileValidationMessages.validateAddressLineOne}
                                        />

                                        <GInputComponent propInputStyle={styles.addressTwoInput} 
                                        placeholder={globalString.addAddressInfo.addressLineTwo}
                                            value={addressTwo}
                                            onChangeText={this.setAddressTwo}
                                        />
                                    </View>

                                    <View style={styles.addressStyle}
                                        pointerEvents={valueaddressDropDown === 'Payee and address' ? "auto" : "none"}
                                    >
                                        <Text style={styles.financialTextLabel}>ZIP Code</Text>
                                        <GInputComponent placeholder={globalString.addAddressInfo.zipCode}
                                            onBlur={this.validateZipCodeValue}
                                            onChangeText={this.setZipcodeValue}
                                            value={zipCodeValue}
                                            maxLength={5}
                                            errorFlag={!isZipCodeValid}
                                            errorText={globalString.profileValidationMessages.validateZipcode}
                                        />
                                        {/* keyboardType="numeric" */}
                                    </View>

                                    <View style={styles.addressStyle}
                                        pointerEvents={valueaddressDropDown === 'Payee and address' ? "auto" : "none"}
                                    >
                                        <Text style={styles.financialTextLabel}>City & State</Text>
                                        <View style={styles.cityStateBlock}>
                                            <GInputComponent value={userCity} propInputStyle={styles.cityStateStyle} />
                                            <GInputComponent value={userState} propInputStyle={styles.cityStateStyle} />
                                        </View>

                                    </View>
                                </View>
                              ) : null}

                            {offlineMethod === 2 ? (
                                <View>
                                    <Text style={styles.sectionDescTxt}>
                                        {globalString.accManagement.investmentSelectionNote}
                                    </Text>

                                    <GButtonComponent
                                        buttonStyle={styles.filterFundsBtn}
                                        buttonText={globalString.accManagement.filterFunds}
                                        textStyle={styles.filterFundsBtnTxt}
                                        onPress={this.setModalVisible(true)}
                                    />

                                    <GButtonComponent
                                        buttonStyle={styles.compareFundsBtn}
                                        buttonText={globalString.accManagement.compareFunds}
                                        textStyle={styles.compareFundsBtnTxt}
                                        onPress={this.navigateCompareFunds}
                                    />
                                    <FlatList
                                        data={vcmFundList}
                                        keyExtractor={this.generateFundListKeyExtractor}
                                        renderItem={this.renderFundListItem()}
                                    />

                                    { /* ----------- Fund Your Investments -------------------*/}
                                    {selectedFundInvestmentsData.length > 0 && (
                                        <View style={styles.sectionGrp}>
                                            <View style={styles.accTypeSelectSection}>
                                                <Text style={styles.headings}>
                                                    {globalString.accManagement.fundYourInvest}
                                                </Text>
                                                <TouchableOpacity
                                                    //  onPress={() => { alert("Expand/Cllapse") }}
                                                    activeOpacity={0.8}
                                                    accessibilityRole="button"
                                                >
                                                    <Text style={styles.expandCollpaseTxt}>
                                                        [ - ]
                                                    </Text>
                                                </TouchableOpacity>

                                            </View>
                                            <Text style={styles.lblLine} />


                                            <View style={styles.childSectionGrp}>
                                                <Text style={styles.sectionDescTxt}>
                                                    {globalString.accManagement.fundYourInvestNote}
                                                </Text>

                                                {selectedFundInvestmentsData.map((item, index) => {
                                                    return (
                                                        <View
                                                            key={item.fundNumber}
                                                        >
                                                            <TouchableOpacity
                                                                onPress={this.onPressRemoveInvestment(item, index)}
                                                                activeOpacity={0.8}
                                                                accessibilityRole="button"
                                                                style={styles.addInvestmentTouch}
                                                            >
                                                                <Text style={styles.addInvestmentText}>
                                                                    {globalString.common.remove}
                                                                </Text>
                                                            </TouchableOpacity>
                                                            <View style={styles.investmentSection}>
                                                                <Text style={styles.lblTxt}>
                                                                    {globalString.accManagement.fundName}
                                                                </Text>
                                                                <Text style={styles.sectionDescTxt}>
                                                                    {item.fundName}
                                                                </Text>


                                                                {/* <GDropDownComponent
                                                                    inputref={this.setInputRef(`fundingOptionDropDown${index}`)}
                                                                    dropDownLayout={styles.dropDownLayout}
                                                                    dropDownTextName={styles.dropDownTextName}
                                                                    textInputStyle={styles.textInputStyle}
                                                                    dropDownName={globalString.accManagement.fundingOptions}
                                                                    data={tempFundOptionsData}
                                                                    changeState={this.onPressDropDownForInvestment("fundingOptionDropDown", index)}
                                                                    // showDropDown={selectedFundInvestmentsData[Number(index)].fundingOptionDropDown}
                                                                    dropDownValue={selectedFundInvestmentsData[Number(index)].fundingOptionDropDown}
                                                                    selectedDropDownValue={this.onSelectedDropDownValue("fundingOptionDropDown", index)}
                                                                    itemToDisplay="value"
                                                                    dropDownPostition={{ ...styles.dropDownPostition, top: scaledHeight(160) }}
                                                                    errorFlag={!selectedFundInvestmentsData[Number(index)].fundingOptionValidation}
                                                                    errorText={globalString.accManagement.emptyFundOptionsMsg}
                                                                /> */}

                                                                <Text style={styles.lblTxt}>
                                                                    {globalString.accManagement.initInvestment}
                                                                </Text>
                                                                <View style={styles.addInvestInitial}>

                                                                    <Text style={styles.addInvestInitialText}>
                                                                        $
                                                                    </Text>
                                                                    <GInputComponent
                                                                        inputref={this.setInputRef(`initialInvestment${index}`)}
                                                                        propInputStyle={styles.initialInvestInput}
                                                                        maxLength={globalString.maxLength.initInvestment}
                                                                        placeholder="Initial Investment"
                                                                        keyboardType="decimal-pad"
                                                                        value={selectedFundInvestmentsData[Number(index)].initialInvestment}
                                                                        onChangeText={this.onChangeTextForInvestment("initialInvestment", index)}
                                                                        errorFlag={!selectedFundInvestmentsData[Number(index)].initialInvestmentValidation}
                                                                        errorText=""
                                                                    />

                                                                </View>
                                                                {!selectedFundInvestmentsData[Number(index)].initialInvestmentValidation && (
                                                                    <Text style={styles.errMsg}>
                                                                        {globalString.accManagement.emptyInitInvestmentMsg}
                                                                    </Text>
                                                                  )}
                                                                <Text style={styles.addInvestMinText}>
                                                                    {`Minimum $${item.mininitialInvestment}`}
                                                                </Text>


                                                                {/* {
                                                                    selectedFundInvestmentsData[Number(index)].fundingOptionDropDown == "Initial and Monthly Investment" && (
                                                                    <View style={{ flexGrow: 1 }}>
                                                                        <Text style={styles.lblTxt}>
                                                                            {globalString.accManagement.monthlyInvestment}
                                                                        </Text>
                                                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: scaledHeight(7) }}>
                                                                            <Text style={{ color: '#56565A', fontSize: scaledHeight(16) }}>
                                                                                $
                                                                            </Text>
                                                                            <GInputComponent
                                                                                inputref={this.setInputRef(`monthlyInvestment${index}`)}
                                                                                propInputStyle={{ width: '90%' }}
                                                                                maxLength={globalString.maxLength.monthlyInvestment}
                                                                                placeholder="Monthly Investment"
                                                                                value={selectedFundInvestmentsData[Number(index)].monthlyInvestment}
                                                                                keyboardType="decimal-pad"
                                                                                onChangeText={this.onChangeTextForInvestment("monthlyInvestment", index)}
                                                                                errorFlag={!selectedFundInvestmentsData[Number(index)].monthlyInvestmentValidation}
                                                                                errorText=""

                                                                            />
                                                                        </View>
                                                                        {!selectedFundInvestmentsData[Number(index)].monthlyInvestmentValidation && (
                                                                            <Text style={styles.errMsg}>
                                                                                {globalString.accManagement.emptyMonthlyInvestmentMsg}
                                                                            </Text>
                                                                          )}


                                                                        <Text style={styles.lblTxt}>
                                                                            {globalString.accManagement.startDate}
                                                                        </Text>

                                                                        <GDateComponent
                                                                            inputref={this.setInputRef(`startDate${index}`)}
                                                                            date={selectedFundInvestmentsData[Number(index)].startDate}
                                                                            minDate={currentdate}
                                                                            placeholder="MM/DD/YYYY"
                                                                            errorFlag={!selectedFundInvestmentsData[Number(index)].startDateValidation}
                                                                            errorMsg={globalString.accManagement.emptyStartDate}
                                                                            onDateChange={this.onChangeDateForInvestment("startDate", index)}
                                                                        />

                                                                    </View>
                                                                  )} */}


                                                            </View>
                                                        </View>

                                                    );
                                                })}

                                                <View style={styles.investmentSectionFooter}>
                                                    <View style={styles.investmentSectionView}>
                                                        <View style={styles.investmentSectionTotalView}>
                                                            <Text style={styles.investmentSectionTotalText}>
                                                                {globalString.accManagement.total}
                                                            </Text>
                                                            <Text style={styles.investmentSectionTotalText}>
                                                                {totalInitialInvestment}
                                                            </Text>
                                                        </View>
                                                            {!validateVcmFunds ? <Text style={styles.errMsg}>Fund from amount does not match with fund to</Text>:null}
                                                        
                                                    </View>
                                                </View>
                                            </View>

                                        </View>
                                      )}
                                </View>
                              ) : null}
                        </View>
                    </View>

                    <GButtonComponent
                        buttonStyle={styles.cancelButton}
                        buttonText={globalString.common.cancel}
                        textStyle={styles.cancelButtonText}
                        onPress={this.navigationCancel}
                    />
                    <GButtonComponent
                        buttonStyle={styles.cancelButton}
                        buttonText={globalString.common.back}
                        textStyle={styles.cancelButtonText}
                        onPress={this.navigationLogin}
                    />
                    {/* {valueaddressDropDown === 'Payee and address' ?
                        <GButtonComponent
                            buttonStyle={styles.continueButtonSelected}//selectedBank>-1 && 
                            buttonText={globalString.common.validate}
                            textStyle={styles.continueButtonText}
                            onPress={this.addAddressOnValidate('validateAddressValueOne')}
                        /> : null} */}
                    {/* <GButtonComponent
                        buttonStyle={totalFund >= 50 && fundRemaining === 0 ? styles.continueButtonSelected : styles.continueButton}//selectedBank>-1 && 
                        buttonText={globalString.common.next}
                        textStyle={styles.continueButtonText}
                        onPress={totalFund >= 50 && fundRemaining === 0 ? this.navigationNext : null}//selectedBank>-1 && 
                    /> */}

                    <GButtonComponent
                        buttonStyle={styles.continueButtonSelected}// selectedBank>-1 && 
                        buttonText={globalString.common.next}
                        textStyle={styles.continueButtonText}
                        onPress={this.navigationNext()}// selectedBank>-1 && 
                    />
                    <GFooterComponent />


                    <Modal
                        transparent
                        visible={modalVisible}
                        onRequestClose={this.setModalVisible(!modalVisible)}
                    >
                        <View style={styles.modalBackgroundView}>
                            <View style={styles.modalContainer}>
                                <ScrollView>
                                    <View style={styles.modalTitleView}>
                                        <Text style={styles.modalTitleText}>
                                            {globalString.accManagement.filterFunds}
                                        </Text>
                                        <TouchableOpacity onPress={this.setModalVisible(!modalVisible)}>
                                            <GIcon
                                                name="close"
                                                type="antdesign"
                                                size={30}
                                                color="black"
                                            />
                                        </TouchableOpacity>
                                    </View>

                                    <View style={styles.modalMinCheckBoxContainer}>
                                        <Text style={styles.modalMinInvestTitleText}>
                                            {globalString.accManagement.minimumInvestment}
                                        </Text>
                                        {
                                            filtermindata.map((item, index) => {
                                                let itemvalue = item.value;
                                                if (item.key === 50) {
                                                    itemvalue = itemvalue.replace(new RegExp('50', 'g'), `${globalString.common.dollar}50`);
                                                } else {
                                                    itemvalue = globalString.common.dollar + item.value;
                                                }
                                                return (
                                                    <CustomCheckBox
                                                        key={item.key}
                                                        size={20}
                                                        itemBottom={0}
                                                        itemTop={0}
                                                        outerCicleColor="#DEDEDF"
                                                        innerCicleColor="#61285F"
                                                        labelStyle={styles.modalCheckBoxLabel}
                                                        label={itemvalue}
                                                        selected={item.isActive}
                                                        onPress={this.onCheckboxSelect("minInvest", item, index)}
                                                    />
                                                );
                                            })
                                        }
                                    </View>

                                    <View style={styles.modalRiskCheckBoxContainer}>
                                        <Text style={styles.modalMinInvestTitleText}>
                                            {globalString.accManagement.risk}
                                        </Text>
                                        {
                                            filterriskdata.map((item, index) => {
                                                return (
                                                    <View key={item.key} style={styles.modalRiskViewContainer}>
                                                        <CustomCheckBox
                                                            size={20}
                                                            itemBottom={0}
                                                            itemTop={0}
                                                            outerCicleColor="#DEDEDF"
                                                            innerCicleColor="#61285F"
                                                            labelStyle={styles.modalCheckBoxLabel}
                                                            label={item.value}
                                                            selected={item.isActive}
                                                            onPress={this.onCheckboxSelect("risk", item, index)}
                                                        />
                                                        <TouchableOpacity>
                                                            <GIcon
                                                                name="infocirlceo"
                                                                type="antdesign"
                                                                size={20}
                                                                color="#DEDEDF"
                                                            />
                                                        </TouchableOpacity>
                                                    </View>
                                                );
                                            })
                                        }
                                    </View>

                                    <View style={styles.modalFundCheckBoxContainer}>
                                        <Text style={styles.modalMinInvestTitleText}>
                                            {globalString.accManagement.fundType}
                                        </Text>
                                        {
                                            filterfunddata.map((item, index) => {
                                                return (
                                                    <CustomCheckBox
                                                        key={item.key}
                                                        size={20}
                                                        itemBottom={0}
                                                        itemTop={0}
                                                        outerCicleColor="#DEDEDF"
                                                        innerCicleColor="#61285F"
                                                        labelStyle={styles.modalCheckBoxLabel}
                                                        label={item.value}
                                                        selected={item.isActive}
                                                        onPress={this.onCheckboxSelect("fundType", item, index)}
                                                    />
                                                );
                                            })
                                        }
                                    </View>

                                    <View style={styles.modalActionContainer}>
                                        <GButtonComponent
                                            buttonStyle={styles.modalClearFilterBtn}
                                            buttonText={globalString.accManagement.clearFilter}
                                            textStyle={styles.modalCancelBtnTxt}
                                            onPress={this.clearFilterAction}
                                        />
                                        <GButtonComponent
                                            buttonStyle={styles.modalApplyFilterBtn}
                                            buttonText={globalString.accManagement.applyFilter}
                                            textStyle={styles.modalApplyBtnTxt}
                                            onPress={this.applyFilterAction(false)}
                                        />
                                    </View>

                                </ScrollView>
                            </View>
                        </View>
                    </Modal>
                </ScrollView>
            </View>
        );
    }
}
SystematicWithdrawalComponent.propTypes = {

    navigation: PropTypes.instanceOf(Object),
    fundListState: PropTypes.instanceOf(Object),
    systematicWithdrawalState: PropTypes.instanceOf(Object),
    bankAccountInfo: PropTypes.instanceOf(Object),
    masterLookupStateData: PropTypes.instanceOf(Object),
    stateCityData: PropTypes.instanceOf(Object),
    getFundListData:PropTypes.func,
    getBankAccountInfo:PropTypes.func,
    getCompositeLookUpData:PropTypes.func,
    getAddressFormat:PropTypes.func,
    getStateCity:PropTypes.func,
    
};

SystematicWithdrawalComponent.defaultProps = {
    navigation:{},
    fundListState:{},
    systematicWithdrawalState:{},
    bankAccountInfo:{},
    masterLookupStateData:{},
    stateCityData:{},
    getFundListData:null,
    getBankAccountInfo:null,
    getCompositeLookUpData:null,
    getAddressFormat:null,
    getStateCity:null,

    
};

export default SystematicWithdrawalComponent;
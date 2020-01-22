import React, { Component } from 'react';
import { Text, View, ScrollView, TouchableOpacity, } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import { GHeaderComponent, GFooterSettingsComponent, GIcon, GButtonComponent, showAlert } from '../../CommonComponents';
import { CustomRadio } from '../../AppComponents';
import gblStrings from '../../Constants/GlobalStrings';
import AppUtils from '../../Utils/AppUtils';

const documentsTypes = [
    { key: 'online', name: gblStrings.settingAccountMessaging.accountMessagingGeneralOnline },
    { key: 'paper', name: gblStrings.settingAccountMessaging.accountMessagingGeneralPaper }    
];

const documentsTypesConfirm = [
    { key: 'confirm_yes', name: gblStrings.common.yes },
    { key: 'confirm_no', name: gblStrings.common.no }   
];

class AccountMessagingGeneralDocumentsComponent extends Component {
    constructor(props) {
        super(props);
        //  set true to isLoading if data for this screen yet to be received and wanted to show loader.
        this.state = {
           // isLoading: false,            

            selectedTaxDocumentsItemID: '1',          
            selectedConfirmItemID:'1',           
            selectedGeneralDocumentsAnnualItemID: '1',          
            selectedGeneralDocumentsPrivacyItemID: '1',
           
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

    goBack = () => {
        const{ navigation }=this.props;
        navigation.goBack();
    }

    navigategeneralSettings = () =>{
        const{ navigation }=this.props;
        navigation.navigate('generalSettings');
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

    saveButtonAction = () => {
        AppUtils.debugLog('Save Button Clicked...');    
        const{ selectedTaxDocumentsItemID,selectedConfirmItemID,selectedGeneralDocumentsAnnualItemID,selectedGeneralDocumentsPrivacyItemID }=this.state;
        const{ navigation,saveData }=this.props;
        const payloadData = {
            selectedTaxDocumentsItemID, 
            selectedConfirmItemID,
            selectedGeneralDocumentsAnnualItemID,
            selectedGeneralDocumentsPrivacyItemID,
        };        
        saveData(payloadData);
        navigation.goBack();        
    }

    navigateFAQPage=()=>{       
        showAlert(gblStrings.common.appName ,"Navigate to Faq",gblStrings.common.ok);       
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
        const{ selectedTaxDocumentsItemID,selectedConfirmItemID,selectedGeneralDocumentsAnnualItemID,selectedGeneralDocumentsPrivacyItemID }=this.state;
        
        return (
            <View style={styles.container}>
                <GHeaderComponent
                    navigation={navigation}
                />
                <ScrollView style={styles.scrollViewFlex}>
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
                    
                    {/* <View style={styles.alertsForDocumentsContainer}>
                        <Text style={styles.alertsForDocumentTitle}>
                            {gblStrings.settingAccountMessaging.accountMessagingGeneralAlertForDocument}
                        </Text>

                        <View style={styles.alertIconView}>
                            <GIcon
                                name="alert"
                                type="octicon"
                                size={20}
                                color="#56565A"
                            />
                            <Text style={styles.alertIconText}>
                                {gblStrings.settingAccountMessaging.accountMessagingGeneralAlertNoAlerts}
                            </Text>
                        </View>
                    </View> */}

                    <View style={styles.taxDocumentcontainer}>
                        <View style={styles.taxDocumentHeaderview}>
                            {/* <GIcon
                                name="minus"
                                type="antdesign"
                                size={30}
                                color="#088ACC"
                            /> */}
                            <Text style={styles.taxDocumentHeaderViewTitle}>
                                {gblStrings.settingAccountMessaging.accountMessagingGeneralTaxDocuments}
                            </Text>
                        </View>
                        <View style={styles.lineBorder} />
                    </View>   
                    <View style={styles.taxDocumentcontainerBottom}> 
                        <Text style={styles.taxDocumentAlertsContent}>
                            {gblStrings.settingAccountMessaging.accountMessagingGeneralHowLike}
                        </Text> 

                        <View style={styles.radioBtnGrpConfirm}>
                            {
                                documentsTypes.map((item) => {
                                return (
                                    <View key={item.key}>
                                        <CustomRadio
                                            key={item.key}
                                            size={30}
                                            itemBottom={10}
                                            itemTop={10}
                                            outerCicleColor="#DEDEDF"
                                            innerCicleColor="#61285F"
                                            labelStyle={styles.lblRadioBtnTxt}
                                            label={item.name}     
                                            descLabelStyle={styles.lblRadioDescTxt}
                                            descLabel=""                                                             
                                            selected={!!((selectedTaxDocumentsItemID !== "" && item.key === selectedTaxDocumentsItemID))}
                                            onPress={this.onSelected(item,'taxDocuments')}
                                        />
                                        {/* {
                                        (selectedTaxDocumentsItemID !== "" && (item.key === selectedTaxDocumentsItemID && item.key === 'online')) ? 
                                            this.renderToolTip()
                                        : null
                                        }                                  */}
                                    </View>                                   
                                );                                
                            })}
                        </View>
                     
                        <Text style={styles.confirmationText}>
                            {gblStrings.settingAccountMessaging.accountMessagingGeneralWouldLike}
                        </Text>
                        
                        <View style={styles.radioBtnGrpConfirm}>
                            {documentsTypesConfirm.map((item) => {
                                return (
                                    <CustomRadio
                                        key={item.key}
                                        size={30}
                                        itemBottom={10}
                                        itemTop={10}
                                        outerCicleColor="#DEDEDF"
                                        innerCicleColor="#61285F"
                                        labelStyle={styles.lblRadioBtnTxt}
                                        label={item.name}          
                                        descLabelStyle={styles.lblRadioDescTxt}
                                        descLabel=""                                                             
                                        selected={!!((selectedConfirmItemID !== "" && item.key === selectedConfirmItemID))}
                                        onPress={this.onSelectedConfirm(item)}
                                    />
                                );
                            })}
                        </View>
                    </View>

                    {/* <View style={styles.taxDocumentcontainer}>
                        <View style={styles.taxDocumentHeaderview}>
                            <GIcon
                                name="minus"
                                type="antdesign"
                                size={30}
                                color="#088ACC"
                            />
                            <Text style={styles.taxDocumentHeaderViewTitle}>
                                {gblStrings.settingAccountMessaging.generalDocumentsTitle}
                            </Text>
                        </View>
                    </View>   
                    <View style={styles.taxDocumentcontainerBottom}> 
                        <Text style={styles.taxDocumentAlertsContent}>
                            {gblStrings.settingAccountMessaging.accountMessagingGeneralHowLikeGeneral}  
                        </Text> 

                        <Text style={styles.taxDocumentAlertsContent}>
                            {gblStrings.settingAccountMessaging.accountMessagingGeneralAnnualReport}  
                        </Text>
                            <View style={styles.radioBtnGrp}>
                                {documentsTypes.map((item) => {
                                    return (
                                        <View key={item.key}> 
                                            <CustomRadio
                                                key={item.key}
                                                size={30}
                                                itemBottom={10}
                                                itemTop={10}
                                                outerCicleColor="#DEDEDF"
                                                innerCicleColor="#61285F"
                                                labelStyle={styles.lblRadioBtnTxt}
                                                label={item.name}     
                                                descLabelStyle={styles.lblRadioDescTxt}
                                                descLabel=""                                                                   
                                                selected={!!((selectedGeneralDocumentsAnnualItemID !== "" && item.key === selectedGeneralDocumentsAnnualItemID))}
                                                onPress={this.onSelected(item,'generalDocumentsAnnual')}
                                            />
                                            {
                                                (selectedGeneralDocumentsAnnualItemID !== "" && (item.key === selectedGeneralDocumentsAnnualItemID && item.key === 'online')) ? 
                                                    this.renderToolTip()
                                                : null
                                            }    
                                        </View>    
                                    );
                                })}
                            </View>

                            <View style={styles.lineBorder} />

                            <Text style={styles.taxDocumentAlertsContent}>
                                {gblStrings.settingAccountMessaging.accountMessagingGeneralPrivacyPromise}  
                            </Text>
                            <View style={styles.radioBtnGrp}>
                                {documentsTypes.map((item) => {
                                    return (
                                        <View key={item.key}>
                                            <CustomRadio
                                                key={item.key}
                                                size={30}
                                                itemBottom={10}
                                                itemTop={10}
                                                outerCicleColor="#DEDEDF"
                                                innerCicleColor="#61285F"
                                                labelStyle={styles.lblRadioBtnTxt}
                                                label={item.name}      
                                                descLabelStyle={styles.lblRadioDescTxt}
                                                descLabel=""                                                                 
                                                selected={!!((selectedGeneralDocumentsPrivacyItemID !== "" && item.key === selectedGeneralDocumentsPrivacyItemID))}
                                                onPress={this.onSelected(item,'generalDocumentsPrivacy')}
                                            />
                                            {
                                                (selectedGeneralDocumentsPrivacyItemID !== "" && (item.key === selectedGeneralDocumentsPrivacyItemID && item.key === 'online')) ? 
                                                    this.renderToolTip()
                                                : null
                                            }  
                                        </View>
                                    );
                                })}
                            </View>                          
                    </View> */}

                        <View style={styles.generalDocumentDisclaimerView}>                                                           
                            <Text style={styles.generalDocumentDisclaimerViewTitle}>
                                 {gblStrings.settingAccountMessaging.accountMessagingGeneralSomeDoc}  
                                <Text style={styles.generalDocumentDisclaimerViewFaq} onPress={this.navigateFAQPage}>
                                    {gblStrings.settingAccountMessaging.accountMessagingGeneralFaqPage}  
                                </Text> 
                                {gblStrings.settingAccountMessaging.accountMessagingGeneralAdditionalAssist}  
                            </Text>
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

    saveData:PropTypes.func,
};

AccountMessagingGeneralDocumentsComponent.defaultProps = {
    navigation : {},
    accMessageDocumentinitialState : {},
    saveData: () => { }
};

export default AccountMessagingGeneralDocumentsComponent;

import React, { Component } from 'react';
import { Text, View, ScrollView, TouchableOpacity, } from 'react-native';
import { styles } from './styles';
import { GHeaderComponent, GFooterSettingsComponent, GIcon, GButtonComponent } from '../../CommonComponents';
import { CustomRadio } from '../../AppComponents';
import PropTypes from 'prop-types';
import gblStrings from '../../Constants/GlobalStrings';

const documentsTypes = [
    { id: 0, name: gblStrings.settingAccountMessaging.accountMessagingGeneralOnline },
    { id: 1, name: gblStrings.settingAccountMessaging.accountMessagingGeneralPaper },
    { id: 2, name: gblStrings.settingAccountMessaging.accountMessagingGeneralLargePrint },
    { id: 3, name: gblStrings.settingAccountMessaging.accountMessagingGeneralBraillePaper },
    { id: 4, name: gblStrings.settingAccountMessaging.accountMessagingGeneralScreenReader }
];

const documentsTypesConfirm = [
    { id: 0, name: gblStrings.common.yes },
    { id: 1, name: gblStrings.common.no }   
];

class AccountMessagingGeneralDocumentsComponent extends Component {
    constructor(props) {
        super(props);
        //set true to isLoading if data for this screen yet to be received and wanted to show loader.
        this.state = {
            isLoading: false,            

            selectedTaxDocumentsItemID: '1',
            selectedTaxDocumentsItemName: gblStrings.settingAccountMessaging.accountMessagingGeneralPaper,

            selectedConfirmItemID:'1',
            selectedConfirmItemName:gblStrings.common.no,

            selectedGeneralDocumentsAnnualItemID: '1',
            selectedGeneralDocumentsAnnualItemName: gblStrings.settingAccountMessaging.accountMessagingGeneralPaper,

            selectedGeneralDocumentsPrivacyItemID: '1',
            selectedGeneralDocumentsPrivacyItemName: gblStrings.settingAccountMessaging.accountMessagingGeneralPaper
        };
    }    

    goBack = () => {
        this.props.navigation.goBack();
    }

    navigategeneralSettings = () => this.props.navigation.navigate('generalSettings');

    navigateFAQPage(){
       alert('Navigate to Faq ');     
    }

    componentDidMount() {
    }

    onSelected = (item,fromType) =>()=> {        
        switch(fromType){
            case 'taxDocuments':
            this.setState({
                    selectedTaxDocumentsItemID: item.id,
                    selectedTaxDocumentsItemName: item.name              
                }
            );             
            break;
            case 'generalDocumentsAnnual':
            this.setState({
                    selectedGeneralDocumentsAnnualItemID: item.id,
                    selectedGeneralDocumentsAnnualItemName: item.name              
                }
            );  
            break;
            case 'generalDocumentsPrivacy':
            this.setState({
                    selectedGeneralDocumentsPrivacyItemID: item.id,
                    selectedGeneralDocumentsPrivacyItemName: item.name              
                }
            );  
            break;
        }           
    }

    onSelectedConfirm = (item) => () =>{        
        this.setState({
                selectedConfirmItemID: item.id,
                selectedConfirmItemName: item.name              
            }
        );     
    }

    saveButtonAction = () => {
        console.log('Save Button Clicked...');           
    }

    renderToolTip(){       
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
        return (
            <View style={styles.container}>
                <GHeaderComponent
                    navigation={this.props.navigation}
                />
                <ScrollView style={{ flex: 0.85 }}>
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
                            {gblStrings.settingAccountMessaging.generalDocumentsTitle}
                        </Text>
                        <Text style={styles.settingsInfo}>
                            {gblStrings.settingAccountMessaging.accountMessagingGeneralTitleDesc}
                        </Text>
                    </View>                 
                    
                    <View style={styles.alertsForDocumentsContainer}>
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
                    </View>

                    <View style={styles.taxDocumentcontainer}>
                        <View style={styles.taxDocumentHeaderview}>
                            <GIcon
                                name="minus"
                                type="antdesign"
                                size={30}
                                color="#088ACC"
                            />
                            <Text style={styles.taxDocumentHeaderViewTitle}>
                                {gblStrings.settingAccountMessaging.accountMessagingGeneralTaxDocuments}
                            </Text>
                        </View>
                    </View>   
                    <View style={styles.taxDocumentcontainerBottom}> 
                        <Text style={styles.taxDocumentAlertsContent}>
                            {gblStrings.settingAccountMessaging.accountMessagingGeneralHowLike}
                        </Text> 

                        <View style={styles.radioBtnGrp} >
                            {
                                documentsTypes.map((item) => {
                                return (
                                    <View key={item.id}>
                                        <CustomRadio
                                            key={item.id}
                                            size={30}
                                            itemBottom={10}
                                            itemTop={10}
                                            outerCicleColor={"#DEDEDF"}
                                            innerCicleColor={"#61285F"}
                                            labelStyle={styles.lblRadioBtnTxt}
                                            label={item.name}     
                                            descLabelStyle={styles.lblRadioDescTxt}
                                            descLabel={""}                                                             
                                            selected={(this.state.selectedTaxDocumentsItemID !== "" && item.id == this.state.selectedTaxDocumentsItemID) ? true : false}
                                            onPress={this.onSelected(item,'taxDocuments')}
                                        />
                                        {
                                        (this.state.selectedTaxDocumentsItemID !== "" && item.id == this.state.selectedTaxDocumentsItemID && item.id == 0) ? 
                                            this.renderToolTip()
                                        : null
                                        }                                 
                                    </View>                                   
                                );                                
                            })}
                        </View>
                     
                        <Text style={styles.confirmationText}>
                            {gblStrings.settingAccountMessaging.accountMessagingGeneralWouldLike}
                        </Text>
                        
                        <View style={styles.radioBtnGrpConfirm} >
                            {documentsTypesConfirm.map((item) => {
                                return (
                                    <CustomRadio
                                        key={item.id}
                                        size={30}
                                        itemBottom={10}
                                        itemTop={10}
                                        outerCicleColor={"#DEDEDF"}
                                        innerCicleColor={"#61285F"}
                                        labelStyle={styles.lblRadioBtnTxt}
                                        label={item.name}          
                                        descLabelStyle={styles.lblRadioDescTxt}
                                        descLabel={""}                                                              
                                        selected={(this.state.selectedConfirmItemID !== "" && item.id == this.state.selectedConfirmItemID) ? true : false}
                                        onPress={this.onSelectedConfirm(item)}
                                    />
                                );
                            })}
                        </View>
                    </View>

                    <View style={styles.taxDocumentcontainer}>
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
                            <View style={styles.radioBtnGrp} >
                                {documentsTypes.map((item) => {
                                    return (
                                        <View key={item.id}> 
                                            <CustomRadio
                                                key={item.id}
                                                size={30}
                                                itemBottom={10}
                                                itemTop={10}
                                                outerCicleColor={"#DEDEDF"}
                                                innerCicleColor={"#61285F"}
                                                labelStyle={styles.lblRadioBtnTxt}
                                                label={item.name}     
                                                descLabelStyle={styles.lblRadioDescTxt}
                                                descLabel={""}                                                                   
                                                selected={(this.state.selectedGeneralDocumentsAnnualItemID !== "" && item.id == this.state.selectedGeneralDocumentsAnnualItemID) ? true : false}
                                                onPress={this.onSelected(item,'generalDocumentsAnnual')}
                                            />
                                            {
                                                (this.state.selectedGeneralDocumentsAnnualItemID !== "" && item.id == this.state.selectedGeneralDocumentsAnnualItemID && item.id == 0) ? 
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
                            <View style={styles.radioBtnGrp} >
                                {documentsTypes.map((item) => {
                                    return (
                                        <View key={item.id}>
                                            <CustomRadio
                                                key={item.id}
                                                size={30}
                                                itemBottom={10}
                                                itemTop={10}
                                                outerCicleColor={"#DEDEDF"}
                                                innerCicleColor={"#61285F"}
                                                labelStyle={styles.lblRadioBtnTxt}
                                                label={item.name}      
                                                descLabelStyle={styles.lblRadioDescTxt}
                                                descLabel={""}                                                                  
                                                selected={(this.state.selectedGeneralDocumentsPrivacyItemID !== "" && item.id == this.state.selectedGeneralDocumentsPrivacyItemID) ? true : false}
                                                onPress={this.onSelected(item,'generalDocumentsPrivacy')}
                                            />
                                            {
                                                (this.state.selectedGeneralDocumentsPrivacyItemID !== "" && item.id == this.state.selectedGeneralDocumentsPrivacyItemID && item.id == 0) ? 
                                                    this.renderToolTip()
                                                : null
                                            }  
                                        </View>
                                    );
                                })}
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
    navigation: PropTypes.instanceOf(Object)
};

AccountMessagingGeneralDocumentsComponent.defaultProps = {

};

export default AccountMessagingGeneralDocumentsComponent;

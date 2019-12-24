import React, { Component } from 'react';
import { Text, View,ScrollView } from 'react-native';
import PropTypes from "prop-types";
import { styles } from './styles';
import { GButtonComponent, GHeaderComponent, GFooterSettingsComponent } from '../../CommonComponents';
import { CustomPageWizard } from '../../AppComponents';
import gblStrings from '../../Constants/GlobalStrings';

class SpecialtyAccSubmitComponent extends Component {
    constructor(props) {
        super(props);
        // set true to isLoading if data for this screen yet to be received and wanted to show loader.
        this.state = {
            isLoading: false,
            itemID: "",
            pageName: "",
            selectedItemID: "",
            selectedItemName: ""
        };
    }

    /*----------------------
                                 Component LifeCycle Methods 
                                                                 -------------------------- */
    componentDidMount() {

    }

    /*----------------------
                                 Button Events
                                                                 -------------------------- */
    onClickHeader = () => {
        console.log("#TODO : onClickHeader");
    }

    goBack = () => {
        this.props.navigation.goBack();
    }

    onClickCancel = () => {
        this.props.navigation.goBack('termsAndConditions');
    }

    // onClickSave = () => {
    //    // this.validateFields();
    // }

    onClickSubmit = () => {
       // this.validateFields();
    }

    onPressCheck = (keyName) => () => this.setState({
        [keyName]: !this.state[keyName]
    });

    onSelected = (item) => {
        console.log(`item: ${ item.id}`);
        this.setState({ selectedItemID: item.id });
        this.setState({ selectedItemName: item.name });
        //  alert("You selected :: " + item.name)
    }

    /*----------------------
                                 Render Methods
                                                                 -------------------------- */
    render() {

        const currentPage = 6;
        return (
            <View style={styles.container}>
                <GHeaderComponent navigation={this.props.navigation}
                onPress={this.onClickHeader}
                />
                <ScrollView style={styles.scrollViewFlex}>
                    <CustomPageWizard currentPage={currentPage} pageName={`${currentPage }  ${gblStrings.common.mail}`} />

                    { /* -----------Personal Info -------------------*/}
                    <View style={[styles.sectionGrp]}>
                        <View style={styles.accTypeSelectSection}>
                            <Text style={styles.headings}>
                                {gblStrings.common.mail}
                            </Text>                           
                        </View>

                        <Text style={styles.lblLine} />
                        <Text style={styles.sectionDescTxt}>
                            {gblStrings.accManagement.completeApplication}
                        </Text>

                        <Text style={styles.mailingText}>
                            {gblStrings.accManagement.byUploading}
                        </Text>

                        <View style={styles.uploadFileContainer}>
                            <Text style={styles.uploadFileTitle}>
                                {gblStrings.accManagement.attachLimit}
                            </Text>      
                            <Text style={styles.uploadFileDivider}>
                                {gblStrings.accManagement.attachdivider}
                            </Text>                    
                            <Text style={styles.uploadFileDesc}>
                                {gblStrings.accManagement.noOfFiles}
                            </Text>                    
                        </View>

                        <View style={styles.uploadFileContainer}>
                            <Text style={styles.uploadFileTitle}>
                                {gblStrings.accManagement.sizeLimitPerFile}
                            </Text>      
                            <Text style={styles.uploadFileDivider}>
                                {gblStrings.accManagement.attachdivider}
                            </Text>                    
                            <Text style={styles.uploadFileDesc}>
                                {gblStrings.accManagement.megaBytes}
                            </Text>                    
                        </View>

                        <View style={styles.uploadFileContainer}>
                            <Text style={styles.uploadFileTitle}>
                                {gblStrings.accManagement.totalSizeLimit}
                            </Text>      
                            <Text style={styles.uploadFileDivider}>
                                {gblStrings.accManagement.attachdivider}
                            </Text>                    
                            <Text style={styles.uploadFileDesc}>
                                {gblStrings.accManagement.megaBytes}
                            </Text>                    
                        </View>

                        <View style={styles.uploadFileContainer}>
                            <Text style={styles.uploadFileTitle}>
                                {gblStrings.accManagement.fileTypesAllow}
                            </Text>      
                            <Text style={styles.uploadFileDivider}>
                                {gblStrings.accManagement.attachdivider}
                            </Text>                    
                            <Text style={styles.uploadFileDesc}>
                                {gblStrings.accManagement.fileFormat}
                            </Text>                    
                        </View>

                        <Text style={styles.orText}>
                            {gblStrings.accManagement.orText}
                        </Text>

                        <View style={styles.childSectionGrp}>
                            <View style={styles.mailContainer}>
                                <Text style={styles.mailingText}>
                                    {gblStrings.accManagement.byMailing}
                                </Text>
                                <Text style={styles.addressTitleTxt}>
                                    {gblStrings.common.victoryCapital}
                                </Text>                               
                                <Text style={styles.addressTxt}>
                                    {gblStrings.common.victoryCapitalAddress}
                                </Text>
                               
                                <Text style={styles.orText}>
                                    {gblStrings.accManagement.orText}
                                </Text>
                                <Text style={styles.addressTxt}>
                                    {gblStrings.accManagement.youCanAlsoFax}
                                </Text>
                                <Text style={styles.phoneNoTxt}>
                                    {gblStrings.common.supportVCMFaxNumber}
                                </Text>
                            </View>
                        </View>
                    </View>

                    { /* ----------- Buttons Group -------------------*/}

                    <View style={styles.btnGrp}>

                        {/* <GButtonComponent
                            buttonStyle={styles.normalWhiteBtn}
                            buttonText={gblStrings.common.save}
                            textStyle={styles.normalWhiteBtnTxt}
                            onPress={this.onClickSave}
                        /> */}
                        <GButtonComponent
                            buttonStyle={styles.normalWhiteBtn}
                            buttonText={gblStrings.common.cancel}
                            textStyle={styles.normalWhiteBtnTxt}
                            onPress={this.onClickCancel}

                        />
                        <GButtonComponent
                            buttonStyle={styles.normalWhiteBtn}
                            buttonText={gblStrings.common.back}
                            textStyle={styles.normalWhiteBtnTxt}
                            onPress={this.goBack}
                        />
                        <GButtonComponent
                            buttonStyle={styles.normalBlackBtn}
                            buttonText={gblStrings.common.submit}
                            textStyle={styles.normalBlackBtnTxt}
                            onPress={this.onClickSubmit}
                        />
                    </View>
                    { /* ----------- Disclaimer -------------------*/}                   
                   
                    <GFooterSettingsComponent />
                </ScrollView>
            </View>
        );
    }
}

SpecialtyAccSubmitComponent.propTypes = {
    navigation: PropTypes.instanceOf(Object).isRequired,
  };
export default SpecialtyAccSubmitComponent;

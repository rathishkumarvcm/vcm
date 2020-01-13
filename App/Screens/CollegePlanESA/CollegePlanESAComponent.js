import React, { Component } from 'react';
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import PropTypes from "prop-types";
import styles from './styles';
import { GButtonComponent, GHeaderComponent, GFooterComponent } from '../../CommonComponents';
import { CustomPageWizard } from '../../AppComponents';
import gblStrings from '../../Constants/GlobalStrings';
import AppUtils from '../../Utils/AppUtils';




class CollegePlanESAComponent extends Component {
    constructor(props) {
        super(props);
        // set true to isLoading if data for this screen yet to be received and wanted to show loader.
        this.state = {
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
    goBack = () => {
        const { navigation } = this.props;
        const { goBack } = navigation;
        goBack();
    }

    onClickCancel = () => {
        const { navigation } = this.props;
        const { goBack } = navigation;
        goBack('termsAndConditions');
    }

    onClickNext = () => {
        this.validateFields();
    }


    onClickAgree = () => {
        const { navigation } = this.props;
        const { navigate } = navigation;
        navigate({ routeName: 'collegePlanPartOneTwo', key: 'collegePlanPartOneTwo', params: { pageNo: 3 } });
    }

    onClickSignDoc = () => {
        AppUtils.debugLog("#TODO:::  onClickSignDoc");
    }



    /*----------------------
                                 Render Methods
                                                                 -------------------------- */
    render() {
        const currentPage = 2;
        const { navigation} = this.props;
        return (
            <View style={styles.container}>
                <GHeaderComponent navigation={navigation}
                    onPress={this.onClickHeader}
                />
                <ScrollView style={styles.scrollView}>
                    <CustomPageWizard currentPage={currentPage} pageName="" />

                    { /* -----------General Account Preferences -------------------*/}
                    <View style={styles.headerGrp}>

                        <Text style={styles.headings}>
                            {`${currentPage} ${gblStrings.accManagement.ESA}`}
                        </Text>
                        <Text style={styles.subHeadings}>
                            {gblStrings.accManagement.ElectronicSErviceAgreement}
                        </Text>




                    </View>

                    <View style={styles.sectionGrp}>
                        <Text style={styles.headingDescTxt}>
                            {gblStrings.accManagement.ESADescription}
                        </Text>
                        <Text style={styles.headingDescTxt}>
                            {gblStrings.accManagement.ESADescImportant}
                        </Text>
                    </View>


                    <View style={styles.ESANoteContainer}>
                        <Text style={styles.titleBoldTxt}>
                            {gblStrings.accManagement.ESANote}
                        </Text>
                    </View>

                    <View style={styles.ESASignGrp}>
                        <Text style={styles.txtVCMElectronicService}>
                            {gblStrings.accManagement.VCMElectronicService}
                        </Text>
                        <Text style={styles.titleDescTxt}>
                            {gblStrings.accManagement.VCMElectronicServiceDesc}
                        </Text>
                        <Text style={styles.lblLine} />
                        <View style={styles.btnSavePrintDocGrp}>
                            <TouchableOpacity
                                //   onPress={() => { alert("#TODO:: Print Version") }}
                                activeOpacity={0.8}
                                accessibilityRole="button"
                                style={styles.printSaveBtn}
                            >
                                <Text style={styles.printSaveBtnTxt}>
                                    {gblStrings.accManagement.saveDocument}
                                </Text>
                            </TouchableOpacity>
                            <Text style={styles.lblSep} />

                            <TouchableOpacity
                                //  onPress={() => { alert("#TODO:: Print Version") }}
                                activeOpacity={0.8}
                                accessibilityRole="button"
                                style={styles.printSaveBtn}
                            >
                                <Text style={styles.printSaveBtnTxt}>
                                    {gblStrings.accManagement.printVersion}
                                </Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.ESASignContentSection}>
                            <Text style={styles.titleBoldTxt}>
                                VCM Investment Management Company (IMCO) Electronic Service Agreement
                            </Text>
                            <Text style={styles.titleDescTxt}>
                                YOU MUST READ AND SIGN THIS AGREEMENT BEFORE USING THE ELECTRONIC SERVICE OF VCM INVESTMENT MANAGEMENT. THIS AGREEMENT IS BETWEEN YOU AND USAA IMCO
                            </Text>
                            <Text style={styles.titleBoldTxt}>
                                VCM IMCO ELECTRONIC SERVICES
                            </Text>
                            <Text style={styles.titleDescTxt}>
                                You may use your telephone or personal computer to enter orders for securities transactions through VCM IMCO Electronic Services. VCM IMCO Electronics, you to obtain account information, quotes etc. Lorem ipsum, The actual content will need to be pulled from the content document. Lorem ipsum , The actual content will need to be pulled from the content document. Lorem ipsum, The actual content will need to be pulled from the content document. Lorem ipsum, The actual content will need to be pulled from the content document. The actual content will need to be pulled from the content document. Lorem ipsum, The actual content will need to be pulled from the content document. The actual content will need to be pulled from the content document. Lorem ipsum, The actual content will need to be pulled from the content document. The actual content will need to be pulled from the content document. Lorem ipsum, The actual content will need to be pulled from the content document.
                            </Text>
                        </View>
                        <View style={styles.signDocBtnView}>
                            <GButtonComponent
                                buttonStyle={styles.signBlackBtn}
                                buttonText={gblStrings.accManagement.signThisDocument}
                                textStyle={styles.signBlackBtnTxt}
                                onPress={this.onClickSignDoc}
                            />
                        </View>
                    </View>


                    { /* ----------- Buttons Group -------------------*/}

                    <View style={styles.btnGrp}>
                        <Text style={styles.agreeTxt}>
                            {gblStrings.accManagement.ESATermsCond}
                        </Text>
                        <GButtonComponent
                            buttonStyle={styles.normalBlackBtn}
                            buttonText={gblStrings.common.agree}
                            textStyle={styles.normalBlackBtnTxt}
                            onPress={this.onClickAgree}
                        />
                        <GButtonComponent
                            buttonStyle={styles.normalWhiteBtn}
                            buttonText={gblStrings.common.cancel}
                            textStyle={styles.normalWhiteBtnTxt}
                            onPress={this.onClickCancel}
                        />

                    </View>

                    { /* ----------- Disclaimer -------------------*/}

                    <View style={styles.newVictorySection}>
                        <Text style={styles.disclaimerTitleTxt}>
                            {gblStrings.accManagement.VCDiscalimerTitle}
                        </Text>
                        <Text style={styles.disclaimerTxt}>
                            {gblStrings.accManagement.VCDiscalimerDesc}
                        </Text>
                        <Text style={styles.moreTxt}>
                            {gblStrings.common.more}
                        </Text>
                    </View>
                    <GFooterComponent />


                </ScrollView>
            </View>

        );
    }
}

CollegePlanESAComponent.propTypes = {
    navigation: PropTypes.instanceOf(Object).isRequired,
};
export default CollegePlanESAComponent;
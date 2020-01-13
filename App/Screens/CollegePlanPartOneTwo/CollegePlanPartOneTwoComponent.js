import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';
import PropTypes from "prop-types";
import styles from './styles';
import { GButtonComponent, GHeaderComponent, GFooterComponent } from '../../CommonComponents';
import { CustomPageWizard } from '../../AppComponents';
import gblStrings from '../../Constants/GlobalStrings';
import AppUtils from '../../Utils/AppUtils';



class CollegePlanPartOneTwoComponent extends Component {
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
    onClickHeader = () => {
        AppUtils.debugLog("#TODO : onClickHeader");
    }

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

    onClickDownloadPDF = () => {
        AppUtils.debugLog("#TODO : Download");
    }


    onClickSave = () => {
    }

    onClickGetStarted = () => {
        const { navigation } = this.props;
        const { navigate } = navigation;
        navigate('collegePlanPersonal', { key: 'collegePlanPersonal' });

    }

    renderHeading = (currentPage) => {
        let tempHeading = "";
        let tempSubHeading = "";
        if (currentPage === 3) {
            tempHeading = `${currentPage} ${gblStrings.accManagement.ApplicationPart1}`;
            tempSubHeading = gblStrings.accManagement.personalAndBeneficiaryInfo;
        } else if (currentPage === 6) {
            tempHeading = `${currentPage} ${gblStrings.accManagement.ApplicationPart2}`;
            tempSubHeading = gblStrings.accManagement.chooseYourPortfolio;
        }

        return (
            <View style={styles.headerGrp}>
                <Text style={styles.headings}>
                    {tempHeading}
                </Text>
                <Text style={styles.subHeadings}>
                    {tempSubHeading}
                </Text>
            </View>
        );

    }


    renderButtonGrp = (currentPage) => {

        if (currentPage === 6) {
            return (
                <View style={styles.btnGrp}>

                    <Text style={styles.agreeTxt}>
                        {gblStrings.accManagement.ApplicationPartDisclaimer}
                    </Text>
                    <GButtonComponent
                        buttonStyle={styles.normalWhiteBtn}
                        buttonText={gblStrings.common.save}
                        textStyle={styles.normalWhiteBtnTxt}
                        onPress={this.onClickSave}
                    />
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
                        buttonText={gblStrings.common.next}
                        textStyle={styles.normalBlackBtnTxt}
                        onPress={this.onClickNext}

                    />
                </View>
            );
        }
        return (
            <View style={styles.btnGrp}>
                <Text style={styles.noteTxt}>
                    {gblStrings.accManagement.ApplicationPart1Note}
                </Text>
                <Text style={styles.agreeTxt}>
                    {gblStrings.accManagement.ApplicationPartDisclaimer}
                </Text>
                <GButtonComponent
                    buttonStyle={styles.normalBlackBtn}
                    buttonText={gblStrings.accManagement.getStarted}
                    textStyle={styles.normalBlackBtnTxt}
                    onPress={this.onClickGetStarted}

                />
            </View>
        );



    }


    /*----------------------
                                 Render Methods
                                                                 -------------------------- */
    render() {
        const { navigation } = this.props;
        const { getParam } = navigation;
        const pageNo = getParam('pageNo', '');
        const currentPage = pageNo;
        return (
            <View style={styles.container}>
                <GHeaderComponent navigation={navigation} onPress={this.onClickHeader} />
                <ScrollView style={styles.scrollView}>
                    <CustomPageWizard currentPage={currentPage} pageName="" />

                    { /* -----------Application Part  -------------------*/}
                    {this.renderHeading(currentPage)}

                    <View style={styles.appPartContentGrp}>
                        <View style={styles.commonColView}>
                            <Text style={styles.questTxt}>
                                {gblStrings.accManagement.howLongItWillTake}
                            </Text>
                            <Text style={styles.questDescTxt}>
                                {gblStrings.accManagement.about5to10minutes}
                            </Text>
                        </View>

                        <View style={styles.commonColView}>
                            <Text style={styles.questTxt}>
                                {gblStrings.accManagement.whatYouWillNeed}
                            </Text>
                            <Text style={styles.questDescTxt}>
                                {gblStrings.accManagement.whatYouWillNeedNote}
                            </Text>
                        </View>

                        <View style={styles.commonColView}>
                            <Text style={styles.questTxt}>
                                {gblStrings.accManagement.whatToExpect}
                            </Text>
                            <Text style={styles.questDescTxt}>
                                {gblStrings.accManagement.whatToExpectNote}
                            </Text>
                        </View>
                    </View>


                    { /* ----------- Buttons Group -------------------*/}

                    {this.renderButtonGrp(currentPage)}

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

CollegePlanPartOneTwoComponent.propTypes = {
    navigation: PropTypes.instanceOf(Object).isRequired,
};
export default CollegePlanPartOneTwoComponent;


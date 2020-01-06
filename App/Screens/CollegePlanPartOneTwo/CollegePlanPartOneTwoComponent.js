import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';
import styles from './styles';
import { GButtonComponent, GHeaderComponent, GFooterComponent } from '../../CommonComponents';
import { CustomPageWizard } from '../../AppComponents';
import gblStrings from '../../Constants/GlobalStrings';
import PropTypes from "prop-types";



class CollegePlanPartOneTwoComponent extends Component {
    constructor(props) {
        super(props);
        //set true to isLoading if data for this screen yet to be received and wanted to show loader.
        this.state = {
            isLoading: false,


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
    onClickDownloadPDF = () => {
        alert("#TODO : Download");
    }
    onSelected = (item) => () => {
        console.log("item: " + item.id);
        this.setState({ selectedItemID: item.id });
        this.setState({ selectedItemName: item.name });
    }
    onClickNext = () => {
    }
    onClickSave = () => {
    }
    onClickGetStarted= () => {
        this.props.navigation.navigate('collegePlanPersonal', { key: 'collegePlanPersonal' });

    }
    renderHeading = (currentPage) => {
        var tempHeading = "";
        var tempSubHeading = "";
        if (currentPage == 3) {
            tempHeading = (currentPage) + " " + gblStrings.accManagement.ApplicationPart1;
            tempSubHeading = gblStrings.accManagement.personalAndBeneficiaryInfo;
        } else if (currentPage == 6) {
            tempHeading = (currentPage) + " " + gblStrings.accManagement.ApplicationPart2;
            tempSubHeading = gblStrings.accManagement.chooseYourPortfolio;
        }

        return (
            <View style={[styles.headerGrp]}>
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

        if (currentPage == 6) {
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
        } else {
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


    }


    /*----------------------
                                 Render Methods
                                                                 -------------------------- */
    render() {
        const { navigation } = this.props;
        const pageNo = navigation.getParam('pageNo', '');
        var currentPage = pageNo;
        return (
            <View style={styles.container}>
                <GHeaderComponent navigation={this.props.navigation} onPress={this.onClickHeader} />
                <ScrollView style={{ flex: .85 }}>
                    <CustomPageWizard currentPage={currentPage} pageName={""} />

                    { /*-----------Application Part  -------------------*/}
                    {this.renderHeading(currentPage)}

                    <View style={[styles.appPartContentGrp]}>
                        <View style={{ flexGrow: 1 }}>
                            <Text style={styles.questTxt}>
                                {gblStrings.accManagement.howLongItWillTake}
                            </Text>
                            <Text style={styles.questDescTxt}>
                                {gblStrings.accManagement.about5to10minutes}
                            </Text>
                        </View>

                        <View style={{ flexGrow: 1 }}>
                            <Text style={styles.questTxt}>
                                {gblStrings.accManagement.whatYouWillNeed}
                            </Text>
                            <Text style={styles.questDescTxt}>
                                {gblStrings.accManagement.whatYouWillNeedNote}
                            </Text>
                        </View>

                        <View style={{ flexGrow: 1 }}>
                            <Text style={styles.questTxt}>
                                {gblStrings.accManagement.whatToExpect}
                            </Text>
                            <Text style={styles.questDescTxt}>
                                {gblStrings.accManagement.whatToExpectNote}
                            </Text>
                        </View>
                    </View>


                    { /*----------- Buttons Group -------------------*/}

                    {this.renderButtonGrp(currentPage)}

                    { /*----------- Disclaimer -------------------*/}
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


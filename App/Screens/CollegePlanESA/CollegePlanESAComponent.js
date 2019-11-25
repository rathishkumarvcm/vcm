import React, { Component } from 'react';
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { GButtonComponent, GHeaderComponent, GFooterComponent } from '../../CommonComponents';
import { CustomPageWizard } from '../../AppComponents';
import { scaledHeight } from '../../Utils/Resolution';
import gblStrings from '../../Constants/GlobalStrings';
import PropTypes from "prop-types";




class CollegePlanESAComponent extends Component {
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
    onClickAgree = () => {
        this.props.navigation.navigate({ routeName: 'collegePlanPartOneTwo', key: 'collegePlanPartOneTwo', params: { pageNo: 3 } });
    }
    onClickSignDoc = () => {
        alert("#TODO:::  onClickSignDoc");
    }



    /*----------------------
                                 Render Methods
                                                                 -------------------------- */
    render() {
        let currentPage = 2;
        return (
            <View style={styles.container}>
                <GHeaderComponent navigation={this.props.navigation}
                    onPress={this.onClickHeader}
                />
                <ScrollView style={{ flex: .85 }}>
                    <CustomPageWizard currentPage={currentPage} pageName={""} />

                    { /*-----------General Account Preferences -------------------*/}
                    <View style={[styles.headerGrp]}>

                        <Text style={styles.headings}>
                            {(currentPage) + " " + gblStrings.accManagement.ESA}
                        </Text>
                        <Text style={styles.subHeadings}>
                            {gblStrings.accManagement.ElectronicSErviceAgreement}
                        </Text>




                    </View>

                    <View style={[styles.sectionGrp]}>
                        <Text style={styles.headingDescTxt}>
                            {gblStrings.accManagement.ESADescription}
                        </Text>
                        <Text style={styles.headingDescTxt}>
                            {gblStrings.accManagement.ESADescImportant}
                        </Text>
                    </View>


                    <View style={{ flexGrow: 1, marginVertical: scaledHeight(66), marginHorizontal: scaledHeight(12) }}>
                        <Text style={styles.titleBoldTxt}>
                            {gblStrings.accManagement.ESANote}
                        </Text>
                    </View>

                    <View style={[styles.ESASignGrp]}>
                        <Text style={{ fontSize: scaledHeight(15), color: '#333333DE', lineHeight: 20, marginBottom: scaledHeight(24) }}>
                            {gblStrings.accManagement.VCMElectronicService}
                        </Text>
                        <Text style={styles.titleDescTxt}>
                            {gblStrings.accManagement.VCMElectronicServiceDesc}
                        </Text>
                        <Text style={styles.lblLine} />
                        <View style={{ flexGrow: 1, marginTop: scaledHeight(35), flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', alignContent: 'center' }}>
                            <TouchableOpacity
                                //  onPress={() => { alert("#TODO:: Print Version") }}
                                activeOpacity={0.8}
                                accessibilityRole={'button'}
                                style={styles.printSaveBtn}
                            >
                                <Text style={styles.printSaveBtnTxt}>
                                    {gblStrings.accManagement.saveDocument}
                                </Text>
                            </TouchableOpacity>
                            <Text style={styles.lblSep} />

                            <TouchableOpacity
                                // onPress={() => { alert("#TODO:: Print Version") }}
                                activeOpacity={0.8}
                                accessibilityRole={'button'}
                                style={styles.printSaveBtn}
                            >
                                <Text style={styles.printSaveBtnTxt}>
                                    {gblStrings.accManagement.printVersion}
                                </Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.ESASignContentSection}>
                            <Text style={styles.titleBoldTxt}>
                                {"VCM Investment Management Company (IMCO) Electronic Service Agreement"}
                            </Text>
                            <Text style={styles.titleDescTxt}>
                                {"YOU MUST READ AND SIGN THIS AGREEMENT BEFORE USING THE ELECTRONIC SERVICE OF VCM INVESTMENT MANAGEMENT. THIS AGREEMENT IS BETWEEN YOU AND USAA IMCO"}
                            </Text>
                            <Text style={styles.titleBoldTxt}>
                                {"VCM IMCO ELECTRONIC SERVICES"}
                            </Text>
                            <Text style={styles.titleDescTxt}>
                                {"You may use your telephone or personal computer to enter orders for securities transactions through VCM IMCO Electronic Services. VCM IMCO Electronics, you to obtain account information, quotes etc. Lorem ipsum, The actual content will need to be pulled from the content document. Lorem ipsum , The actual content will need to be pulled from the content document. Lorem ipsum, The actual content will need to be pulled from the content document. Lorem ipsum, The actual content will need to be pulled from the content document. The actual content will need to be pulled from the content document. Lorem ipsum, The actual content will need to be pulled from the content document. The actual content will need to be pulled from the content document. Lorem ipsum, The actual content will need to be pulled from the content document. The actual content will need to be pulled from the content document. Lorem ipsum, The actual content will need to be pulled from the content document."}
                            </Text>
                        </View>
                        <View style={{ flexGrow: 1, justifyContent: "center", alignContent: 'center', alignItems: 'center', marginVertical: scaledHeight(30) }}>
                            <GButtonComponent
                                buttonStyle={styles.signBlackBtn}
                                buttonText={gblStrings.accManagement.signThisDocument}
                                textStyle={styles.signBlackBtnTxt}
                                onPress={this.onClickSignDoc}
                            />
                        </View>
                    </View>


                    { /*----------- Buttons Group -------------------*/}

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

CollegePlanESAComponent.propTypes = {
    navigation: PropTypes.instanceOf(Object).isRequired,
};
export default CollegePlanESAComponent;
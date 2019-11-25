import React, { Component } from 'react';
import { Text, View,ScrollView,TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { GButtonComponent,GHeaderComponent, GFooterComponent } from '../../CommonComponents';
import { CustomPageWizard } from '../../AppComponents';
import { scaledHeight } from '../../Utils/Resolution';
import gblStrings from '../../Constants/GlobalStrings';
import PropTypes from "prop-types";

class SpecialtyAccSubmitComponent extends Component {
    constructor(props) {
        super(props);
        //set true to isLoading if data for this screen yet to be received and wanted to show loader.
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
    onClickSave = () => {
       // this.validateFields();
    }
    onClickSubmit = () => {
       // this.validateFields();
    }
    onPressCheck = (keyName) => () => this.setState({
        [keyName]: !this.state[keyName]
    });
    onSelected = (item) => {
        console.log("item: " + item.id);
        this.setState({ selectedItemID: item.id });
        this.setState({ selectedItemName: item.name });
        //  alert("You selected :: " + item.name)
    }


    /*----------------------
                                 Render Methods
                                                                 -------------------------- */
    render() {

        let currentPage = 6;
        return (
            <View style={styles.container}>
                <GHeaderComponent navigation={this.props.navigation}
                onPress={this.onClickHeader}
                />
                <ScrollView style={{ flex: .85 }}>
                    <CustomPageWizard currentPage={currentPage} pageName={(currentPage) + "  Mail"} />

                    { /*-----------Personal Info -------------------*/}
                    <View style={[styles.sectionGrp]}>
                        <View style={styles.accTypeSelectSection}>
                            <Text style={styles.headings}>
                                {"Mail"}
                            </Text>
                            <TouchableOpacity
                                activeOpacity={0.8}
                                accessibilityRole={'button'}
                            >
                                <Text style={styles.expandCollpaseTxt}>
                                    {"[ - ]"}
                                </Text>
                            </TouchableOpacity>

                        </View>

                        <Text style={styles.lblLine} />
                        <Text style={styles.sectionDescTxt}>
                            {"Complete the entire application and send it back to us \n\nMail your completed and signed application with a check for your initial investment to"}
                        </Text>



                        <View style={styles.childSectionGrp}>
                            <View style={{ flexGrow: 1, marginTop: scaledHeight(40) }} >
                                <Text style={styles.addressTitleTxt}>
                                    {"Victory Capital"}
                                </Text>
                                <Text style={styles.addressTxt}>
                                    {"P.O. Box 659453 \nSan Antonio, TX 78265-9009 \n\nYou can also fax your application to"}
                                </Text>
                                <Text style={styles.phoneNoTxt}>
                                    {"800-292-8177"}
                                </Text>
                            </View>


                        </View>


                    </View>







                    { /*----------- Buttons Group -------------------*/}

                    <View style={styles.btnGrp}>

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
                            buttonText={gblStrings.common.submit}
                            textStyle={styles.normalBlackBtnTxt}
                            onPress={this.onClickSubmit}

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

SpecialtyAccSubmitComponent.propTypes = {
    navigation: PropTypes.instanceOf(Object).isRequired,
  };
export default SpecialtyAccSubmitComponent;

import React, { Component } from 'react';
import { Text, View, ScrollView, FlatList } from 'react-native';
import PropTypes from "prop-types";
import { styles } from './styles';
import { GButtonComponent, GHeaderComponent, GFooterSettingsComponent } from '../../CommonComponents';
import { CustomPageWizard } from '../../AppComponents';
import gblStrings from '../../Constants/GlobalStrings';

const specaltyAccPages = {
    2: {
        "pageName": "Agreement",
        "secTitle": "Agreement",
        "pageDesc": "Download and read the SEP/ SIMPLE IRA Custodial Agreement"
    },
    3: {
        "pageName": "Prospectuses",
        "secTitle": "Prospectuses",
        "pageDesc": "Download and read VCM Mutual Fund prospectuses \n\nDownload and read important information about your fund"
    },
    4: {
        "pageName": "Privacy Info",
        "secTitle": "Privacy Notice and Business Continuity and Cybersecurity Summary",
        "pageDesc": "Review our Privacy Notice and Business Continuity and Cybersecurity Summary \n\nRead about our commitment to protecting your personal information and how we will continue to serve members during a crisis"
    },
    5: {
        "pageName": "Applicaton",
        "secTitle": "Applicaton",
        "pageDesc": "Download and print the application \n\nBy downloading the application you acknowledge that you have received, read, not altered and agree to any relevant VCM Mutual Funds prospectuses and the SIMPLE/SEP IRA Custodial Agreement; and you have received and read the Victory Capital Privacy Notice and Business Continuity and Cybersecurity Summary documents"
    }
};

const specaltyAccPDFList = {
    2: [
        {
            PDFName: "SEP/ SIMPLE IRA Custodial Agreement",
            PDFDesc: "",
            PDFURL: "",
            PDFFileName: ""
        }
    ],
    3: [
        {
            PDFName: "VCM Mutual Fund Prospectuses",
            PDFDesc: "",
            PDFURL: "",
            PDFFileName: ""
        },
        {
            PDFName: "Important Fund Information",
            PDFDesc: "",
            PDFURL: "",
            PDFFileName: ""
        }
    ],
    4: [
        {
            PDFName: "Victory Capital Privacy Notice",
            PDFDesc: "Victory Capital encrypts sensitive information to ensure it remains confidential",
            PDFURL: "",
            PDFFileName: ""
        },
        {
            PDFName: "Victory Capital Business Continuity and Cybersecurity Summary",
            PDFDesc: "",
            PDFURL: "",
            PDFFileName: ""
        }
    ],
    5: [
        {
            PDFName: "SEP/ SIMPLE IRA Agreement",
            PDFDesc: "",
            PDFURL: "",
            PDFFileName: ""
        },
        {
            PDFName: "Detailed Instructions",
            PDFDesc: "",
            PDFURL: "",
            PDFFileName: ""
        }
    ]

};

const PDFListItem = (props) => {
    //  alert("PDFListItem")
    return (
        <View style={styles.pdfSection}>
            <Text style={styles.pdfTitleTxt}>
                {props.PDFName}
            </Text>
            {props.PDFDesc !== "" ? <Text style={styles.pdfDescTxt}>{props.PDFDesc}</Text> : null}
            <GButtonComponent
                buttonStyle={styles.downloadPDFBtn}
                buttonText="Download PDF"
                textStyle={styles.downloadPDFBtnTxt}
            />
        </View>
    );
};

PDFListItem.propTypes = {
    PDFName: PropTypes.string,
    PDFDesc: PropTypes.string
};
PDFListItem.defaultProps = {
    PDFName : "",
    PDFDesc : ""
};

class SpecialtyAccPageComponent extends Component {
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

    onClickSave = () => {
        // this.validateFields();
    }

    onClickNext = (currentPage,accType) => () => {
        // this.validateFields();
        let pageNo = currentPage;
        if (pageNo < 5) {
            ++pageNo;
            this.props.navigation.push('specialtyAccPage', { pageNo,accType });
        } else {
            this.props.navigation.navigate('specialtyAccSubmit', { key: 'specialtyAccSubmit' ,accType});
        }
    }

    onSelected = (item) => {
        console.log("item: ",item.id);
        this.setState({ selectedItemID: item.id });
        this.setState({ selectedItemName: item.name });
        // alert("You selected :: " + item.name)
    }

    generateKeyExtractor = (item) => item.PDFName;

    renderPDFListItem = ({ item }) =>
        (<PDFListItem
            PDFName={item.PDFName}
            PDFDesc={item.PDFDesc}
            PDFURL={item.PDFURL}
            PDFFileName={item.PDFFileName}
        />
        );

    /*----------------------
                                 Render Methods
                                                                 -------------------------- */
    render() {
        const { navigation } = this.props;
        const pageNo = navigation.getParam('pageNo', '');
        const accType = navigation.getParam('accType', '');
        const currentPage = pageNo;
        return (
            <View style={styles.container}>
                <GHeaderComponent navigation={this.props.navigation}
                    onPress={this.onClickHeader}
                />
                <ScrollView style={styles.scrollViewFlex}>

                    <Text style={styles.accTypeTilte}>
                        {accType}
                    </Text>
                    <CustomPageWizard currentPage={currentPage} pageName={this.state.pageName || `${currentPage } ${ specaltyAccPages[currentPage].pageName}`} />

                    { /*    -----------Page Info -------------------    */}
                    <View style={[styles.sectionGrp]}>
                        <View style={styles.accTypeSelectSection}>
                            <Text style={styles.headings}>
                                {(specaltyAccPages[currentPage].secTitle)}
                            </Text>                          

                        </View>

                        <Text style={styles.lblLine} />
                        <Text style={styles.sectionDescTxt}>
                            {(specaltyAccPages[currentPage].pageDesc)}
                        </Text>

                        <View style={styles.childSectionGrp}>
                            <FlatList
                                data={specaltyAccPDFList[currentPage]}
                                keyExtractor={this.generateKeyExtractor}
                                renderItem={this.renderPDFListItem}
                            />
                        </View>
                    </View>

                    { /*    ----------- Buttons Group -------------------   */}

                    <View style={styles.btnGrp}>

                        { /*    <GButtonComponent
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
                            buttonText={gblStrings.common.next}
                            textStyle={styles.normalBlackBtnTxt}
                            onPress={this.onClickNext(currentPage,accType)}
                        />
                    </View>

                    { /*    ----------- Disclaimer -------------------*/}

                    <GFooterSettingsComponent />

                </ScrollView>
            </View>
        );
    }
}

SpecialtyAccPageComponent.propTypes = {
    navigation: PropTypes.instanceOf(Object).isRequired,
};

SpecialtyAccPageComponent.defaultProps={
  
};
export default SpecialtyAccPageComponent;
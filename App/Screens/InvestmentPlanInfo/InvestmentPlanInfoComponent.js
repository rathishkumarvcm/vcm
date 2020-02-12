import React, { Component } from 'react';
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import PropTypes from "prop-types";
import styles from './styles';
import Table from './Table';
import { GButtonComponent, GIcon, GHeaderComponent, GFooterComponent, GRatingStarsComponent, GLoadingSpinner } from '../../CommonComponents';
import gblStrings from '../../Constants/GlobalStrings';
import * as ActionTypes from "../../Shared/ReduxConstants/ServiceActionConstants";

class InvestmentPlanInfoComponent extends Component {
    constructor(props) {

        super(props);
        // set true to isLoading if data for this screen yet to be received and wanted to show loader.
        this.state = {
            // isLoading: false,
            isSummarySelected: true,
            isQuickFactSelected: false,
            isPerformanceSelected: false,

        };
    }
    /*----------------------
                                 Component LifeCycle Methods 
                                                                 -------------------------- */
    
    componentDidMount() {
        const { navigation,getFundDetailsData } = this.props;
        const fundNumber = navigation.getParam('fundDetails', '');     
        const payload = {
            "fundNumber1": parseFloat(fundNumber),     
           // "fundNumber1": 331,          
     
        };          
        getFundDetailsData(payload);       
    }

    /*----------------------
                                 Button Events 
                                                                 -------------------------- */
    goBack = () => {
        const { navigation } = this.props;
        navigation.goBack();
    }

    renderSummary = (risk, initialInvestment, monthlyInvestment, moreInfoPDFsval) => {
        return (
            <View style={styles.summarySectionGrp}>
                <View style={styles.riskContainer}>

                    <Text style={styles.riskLevel}>
                        {gblStrings.accManagement.riskLevel}
                    </Text>

                    <Text style={styles.riskLevelValue}>{risk}</Text>
                </View>
                <Text style={styles.riskDesc}>{gblStrings.accManagement.riskSummary}</Text>

                <Text style={styles.headingUnderline}>{gblStrings.accManagement.investmentMinimums}</Text>
                <Text style={styles.lblNameTxt}>
                    {gblStrings.accManagement.initInvestment}
                </Text>
                <Text style={styles.lblNameValueTxt}>
                    {initialInvestment}
                </Text>

                <Text style={styles.lblNameTxt}>
                    {gblStrings.accManagement.initMonthlyInvestment}
                </Text>
                <Text style={styles.lblNameValueTxt}>
                    {initialInvestment}{' w/ '}{monthlyInvestment}
                </Text>

                <Text style={styles.headingUnderline}>{gblStrings.accManagement.moreInfo}</Text>
                {
                    (moreInfoPDFsval!==null && moreInfoPDFsval.length > 0) ? (
                        <View style={styles.pdfDisclosureContainer}>
                            {
                                moreInfoPDFsval.map((item) => {
                                    return (
                                        <View style={styles.pdfDisclosure} key={item.key}>
                                            <Text style={styles.pdfFileNameTxt}>
                                                {item.value}
                                            </Text>
                                        </View>
                                    );
                                })
                            }
                        </View>
                      )
                    : null 
                }
            </View>
        );
    }

    renderQuickfacts = (nav, expenseRatio, morningstarRating, morningstarCategory, categoryFunds) => {
        return (
            <View style={styles.summarySectionGrp}>


                <Text style={styles.lblNameFirstTxt}>
                    {gblStrings.accManagement.netAssetValue}
                </Text>
                <Text style={styles.lblSubNameTxt}>
                    {gblStrings.accManagement.pricePerShare}{nav.asOfDate}{")"}
                </Text>
                <Text style={styles.lblNameValueTxt}>
                    {gblStrings.common.dollar}{nav.value}
                </Text>

                <Text style={styles.lblNameTxt}>
                    {gblStrings.accManagement.expenseRation}
                </Text>
                <Text style={styles.lblNameValueTxt}>
                    {expenseRatio}
                </Text>

                <Text style={styles.lblNameTxt}>
                    {gblStrings.accManagement.overallMrngStarRating}
                </Text>
                <Text style={styles.lblSubNameTxt}>
                    {`(as of ${morningstarRating.asOfDate})`}
                </Text>
                <View style={styles.ratingContainer}>
                    <GRatingStarsComponent rating={parseInt(morningstarRating.value,10)}
                        ratedStarColor="#393535"
                        unRatedStarColor="#DCDCDC"
                    />

                </View>

                <Text style={styles.lblNameTxt}>
                    {gblStrings.accManagement.mrngStarCategory}
                </Text>
                <Text style={styles.lblNameValueTxt}>
                    {morningstarCategory}
                </Text>

                <Text style={styles.lblNameTxt}>
                    {gblStrings.accManagement.fundsInCategory}
                </Text>
                <Text style={styles.lblNameValueTxt}>
                    {categoryFunds}
                </Text>
            </View>

        );
    }

    renderPerformnace = (monthly, quarterly) => {     
        return (
            <View>
                <Table
                    tableName={gblStrings.accManagement.monthEndAvgAnnualReturns + monthly.asOfDate}
                    YTD={monthly.ytd}
                    oneYear={monthly["1year"]}
                    fiveYear={monthly["5year"]}
                    tenYear={monthly["10year"]}
                    sinceInception={monthly.sinceInception}
                    sinceInceptionYear={monthly.inceptionDate}
                />

                <Table
                    tableName={gblStrings.accManagement.quarterEndAvgAnnualReturns + quarterly.asOfDate}
                    YTD={quarterly.ytd}
                    oneYear={monthly["1year"]}
                    fiveYear={monthly["5year"]}
                    tenYear={monthly["10year"]}
                    sinceInception={quarterly.sinceInception}
                    sinceInceptionYear={quarterly.inceptionDate}
                />

            </View>
        );
    }

    summarySelected = () =>{
        this.setState({
            isSummarySelected: true,
            isQuickFactSelected: false,
            isPerformanceSelected: false
        });
        this.tabBar.scrollTo({ x: 0, y: 0, animated: true });
    }

    quickFactsSelected = () =>{
        this.setState({
            isSummarySelected: false,
            isQuickFactSelected: true,
            isPerformanceSelected: false
        });
    }

    performanceSelected = () =>{
        this.setState({
            isSummarySelected: false,
            isQuickFactSelected: false,
            isPerformanceSelected: true
        });
        this.tabBar.scrollToEnd();
    }

    setInputRef = (inputComp) => (ref) => {
        this[`${inputComp}`] = ref;
    }



    /*----------------------
                                 Render Methods
                                                                 -------------------------- */
    render() {      

        const {fundDetailsData,navigation } = this.props;
        const {isSummarySelected, isQuickFactSelected, isPerformanceSelected} = this.state;
        const {
            nav : nav_values = {},
            fundName = "",
            risk = "",
            monthlyInvestment = "",
            initialInvestment = "",
            expenseRatio: expenseRatioVal = {},
            morningstarCategory = "",
            categoryFunds = "",
            morningstarRating :  morningstarRating_values = {},
            performanceDetails: performanceDetailsVal = {},
            moreInfoPDFs: moreInfoPDFsval = [],
            result = ""
        } = (fundDetailsData && fundDetailsData[ActionTypes.GET_FUNDDETAILS] && !fundDetailsData[ActionTypes.GET_FUNDDETAILS].result ) ? fundDetailsData[ActionTypes.GET_FUNDDETAILS][0]:{};

         
      
        // var {
        //     value = ""
        // } = (nav_values && nav_values.value) ? nav_values : {};

        // var {
        //     value = ""
        // } = (morningstarRating_values && morningstarRating_values.value) ? morningstarRating_values : {};

        const {
            expenseRatio = ""
        } = (expenseRatioVal && expenseRatioVal.expenseRatio) ? expenseRatioVal : {};

        const {
            totalReturns: totalReturnsVal = {}
        } = (performanceDetailsVal && performanceDetailsVal.totalReturns) ? performanceDetailsVal : {};

        const {
            monthly: monthly_Returns = {},
            quarterly: quarterly_Returns = {}
        } = (totalReturnsVal && totalReturnsVal.monthly && totalReturnsVal.quarterly) ? totalReturnsVal : {};
      
        return (
            
            <View style={styles.container}>
                {
                    fundDetailsData.isLoading && <GLoadingSpinner />
                }
                <GHeaderComponent
                    navigation={navigation}                    
                />
                <ScrollView style={styles.scrollViewContainer}>


                    { /* -----------Investment Plan Info -------------------*/}
                    <View style={styles.sectionGrp}>
                        <TouchableOpacity style={styles.investmentPlanContainer}
                            onPress={this.goBack}
                            activeOpacity={0.2}
                        >
                            <View style={styles.investmentPlanBack}>

                                <GIcon
                                    name="left"
                                    type="antdesign"
                                    size={20}
                                    color="#707070"
                                />
                                <Text style={styles.backToInvestpage}>
                                    {gblStrings.accManagement.backtInvestmentSelection}
                                </Text>
                            </View>

                        </TouchableOpacity>

                        <View style={styles.accTypeSelectSection}>
                            <Text style={styles.headings}>
                                {fundName || "No Records Found"}
                            </Text>
                        </View>
                        <Text style={styles.lblLine} />
                    </View>
                    { /* ------------Tab Views------------------*/}

                    {result !=="" && (
                    <View>

                        <ScrollView
                            ref={this.setInputRef('tabBar') /* input => this.tabBar = input */}

                            style={styles.tabBar}
                            horizontal
                            sc={false}
                            showsHorizontalScrollIndicator={false}
                            contentContainerStyle={styles.horizontalScrollContainer}
                        >
                            <TouchableOpacity
                                style={isSummarySelected === true ? styles.tabItemSelected : styles.tabItem}
                                onPress={this.summarySelected}
                                activeOpacity={0.2}
                            >
                                <Text style={isSummarySelected === true ? styles.tabItemSelectedTxt : styles.tabItemTxt}>
                                    {gblStrings.accManagement.summary}
                                </Text>

                            </TouchableOpacity>

                            <TouchableOpacity
                                style={isQuickFactSelected === true ? styles.tabItemSelected : styles.tabItem}
                                onPress={this.quickFactsSelected}
                                activeOpacity={0.2}
                            >
                                <Text style={isQuickFactSelected === true ? styles.tabItemSelectedTxt : styles.tabItemTxt}>
                                    {gblStrings.accManagement.quickFacts}
                                </Text>

                            </TouchableOpacity>

                            <TouchableOpacity
                                style={isPerformanceSelected === true ? styles.tabItemSelected : styles.tabItem}
                                onPress={this.performanceSelected}
                                activeOpacity={0.2}
                            >
                                <Text style={isPerformanceSelected === true ? styles.tabItemSelectedTxt : styles.tabItemTxt}>
                                    {gblStrings.accManagement.performance}
                                </Text>

                            </TouchableOpacity>
                        </ScrollView>

                        { /* ----------- Summary,QuickFacts,Performance  -------------------*/}
                        {isSummarySelected && this.renderSummary(risk, gblStrings.common.dollar + initialInvestment, gblStrings.common.dollar + monthlyInvestment, moreInfoPDFsval)}
                        {isQuickFactSelected && this.renderQuickfacts(nav_values, expenseRatio, morningstarRating_values, morningstarCategory, categoryFunds)}
                        {isPerformanceSelected && this.renderPerformnace(monthly_Returns, quarterly_Returns)}

                    </View>
                  )}

                    { /* ----------- Buttons Grp  -------------------*/}

                    <View style={styles.btnGrp}>

                        <GButtonComponent
                            buttonStyle={styles.normalWhiteBtn}
                            buttonText={gblStrings.common.back}
                            textStyle={styles.normalWhiteBtnTxt}
                            onPress={this.goBack}
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

InvestmentPlanInfoComponent.propTypes = {
    navigation: PropTypes.instanceOf(Object),
    fundDetailsData: PropTypes.instanceOf(Object),
    getFundDetailsData:PropTypes.func,
};
InvestmentPlanInfoComponent.defaultProps = {
    navigation : {},
    fundDetailsData : {},
    getFundDetailsData : null

};
export default InvestmentPlanInfoComponent;

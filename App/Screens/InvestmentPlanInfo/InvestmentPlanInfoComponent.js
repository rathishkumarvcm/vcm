import React, { Component } from 'react';
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { GButtonComponent, GIcon, GHeaderComponent, GFooterComponent, GRatingStarsComponent, GLoadingSpinner } from '../../CommonComponents';
import { scaledHeight } from '../../Utils/Resolution';
import gblStrings from '../../Constants/GlobalStrings';
import PropTypes from "prop-types";
import * as ActionTypes from "../../Shared/ReduxConstants/ServiceActionConstants";


const Table = (props) => {
    console.log("TableRowItem:: " + props);

    return (
        <View style={[styles.summarySectionGrp]}>
            <Text style={styles.tableHeading}>
                {props.tableName}
            </Text>
            <View style={styles.table}>
                <View style={styles.tableRow}>
                    <View style={styles.rowContainer}>
                        <View style={styles.column1}>
                            <Text style={styles.column1Txt}>
                                {gblStrings.accManagement.YTD}
                            </Text>
                        </View>
                        <View style={styles.column2}>
                            <Text style={styles.column2Txt}>
                                {props.YTD}
                            </Text>
                        </View>
                    </View>
                    <Text style={styles.rowSep} />
                </View>

                <View style={styles.tableRow}>
                    <View style={styles.rowContainer}>
                        <View style={styles.column1}>
                            <Text style={styles.column1Txt}>
                                {gblStrings.accManagement.oneYear}
                            </Text>
                        </View>
                        <View style={styles.column2}>
                            <Text style={styles.column2Txt}>
                                {props.oneYear}
                            </Text>
                        </View>
                    </View>
                    <Text style={styles.rowSep} />
                </View>


                <View style={styles.tableRow}>
                    <View style={styles.rowContainer}>
                        <View style={styles.column1}>
                            <Text style={styles.column1Txt}>
                                {gblStrings.accManagement.fiveYear}
                            </Text>
                        </View>
                        <View style={styles.column2}>
                            <Text style={styles.column2Txt}>
                                {props.fiveYear}
                            </Text>
                        </View>
                    </View>
                    <Text style={styles.rowSep} />
                </View>


                <View style={styles.tableRow}>
                    <View style={styles.rowContainer}>
                        <View style={styles.column1}>
                            <Text style={styles.column1Txt}>
                                {gblStrings.accManagement.tenYear}
                            </Text>
                        </View>
                        <View style={styles.column2}>
                            <Text style={styles.column2Txt}>
                                {props.tenYear}
                            </Text>
                        </View>
                    </View>
                    <Text style={styles.rowSep} />
                </View>



                <View style={styles.tableRow}>
                    <View style={styles.rowContainer}>
                        <View style={styles.column1}>
                            <Text style={styles.column1Txt}>
                                {gblStrings.accManagement.sinceInception}
                            </Text>
                            <Text style={styles.lblSubNameTxt}>
                                {props.sinceInceptionYear}
                            </Text>
                        </View>
                        <View style={styles.column2}>
                            <Text style={styles.column2Txt}>
                                {props.sinceInception}
                            </Text>
                        </View>
                    </View>
                </View>


            </View>
        </View>
    );

};

Table.propTypes = {
    propInputStyle: PropTypes.instanceOf(Object),
    tableName: PropTypes.string,
    YTD: PropTypes.string,
    oneYear: PropTypes.string,
    fiveYear: PropTypes.string,
    tenYear: PropTypes.string,
    sinceInceptionYear: PropTypes.string,
    sinceInception: PropTypes.string,

};



class InvestmentPlanInfoComponent extends Component {
    constructor(props) {

        super(props);
        //set true to isLoading if data for this screen yet to be received and wanted to show loader.
        this.state = {
            isLoading: false,
            isSummarySelected: true,
            isQuickFactSelected: false,
            isPerformanceSelected: false,

        };
    }
    /*----------------------
                                 Component LifeCycle Methods 
                                                                 -------------------------- */
    componentDidMount() {
        const payload = this.props.navigation.getParam('fundDetails', '');
        this.props.getFundDetailsData(payload);
    }
    /*----------------------
                                 Button Events 
                                                                 -------------------------- */
    goBack = () => {
        this.props.navigation.goBack();
    }

    renderSummary = (risk, initialInvestment, monthlyInvestment, moreInfo_PDFs) => {
        return (
            <View style={[styles.summarySectionGrp]}>
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
                    (moreInfo_PDFs!==null && moreInfo_PDFs.length > 0) ?
                        <View style={styles.pdfDisclosureContainer}>
                            {
                                moreInfo_PDFs.map((item) => {
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
                    : null 
                }
            </View>
        );
    }
    renderQuickfacts = (nav, expenseRatio, morningstarRating, morningstarCategory, categoryFunds) => {
        return (
            <View style={[styles.summarySectionGrp]}>


                <Text style={styles.lblNameFirstTxt}>
                    {gblStrings.accManagement.netAssetValue}
                </Text>
                <Text style={styles.lblSubNameTxt}>
                    {gblStrings.accManagement.pricePerShare}
                </Text>
                <Text style={styles.lblNameValueTxt}>
                    {nav}
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
                    {"(as of 06/30/2019)"}
                </Text>
                <View style={{ marginTop: scaledHeight(8) }}>
                    <GRatingStarsComponent rating={morningstarRating}
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
            <View >
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
    /*----------------------
                                 Render Methods
                                                                 -------------------------- */
    render() {

        var {
            nav = "",
            fundName = "",
            risk = "",
            monthlyInvestment = "",
            initialInvestment = "",
            expenseRatio: expense_Ratio = {},
            morningstarCategory = "",
            categoryFunds = "",
            morningstarRating = "",
            performanceDetails: performance_Details = {},
            moreInfoPDFs: moreInfo_PDFs = [],
        } = (this.props && this.props.fundDetailsData && this.props.fundDetailsData[ActionTypes.GET_FUNDDETAILS]) ? this.props.fundDetailsData[ActionTypes.GET_FUNDDETAILS] : {};

        var {
            expenseRatio = ""
        } = (expense_Ratio && expense_Ratio.expenseRatio) ? expense_Ratio : {};

        var {
            totalReturns: total_Returns = {}
        } = (performance_Details && performance_Details.totalReturns) ? performance_Details : {};

        var {
            monthly: monthly_Returns = {},
            quarterly: quarterly_Returns = {}
        } = (total_Returns && total_Returns.monthly && total_Returns.quarterly) ? total_Returns : {};

        return (
            <View style={styles.container}>
                {
                    this.props.fundDetailsData.isLoading && <GLoadingSpinner />
                }
                <GHeaderComponent
                    navigation={this.props.navigation}
                    onPress={() => { }}
                />
                <ScrollView style={{ flex: .85 }}>


                    { /*-----------Investment Plan Info -------------------*/}
                    <View style={[styles.sectionGrp]}>
                        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}
                            onPress={() => this.goBack()}
                            activeOpacity={0.2}
                        >
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start' }}>

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

                        <View style={styles.accTypeSelectSection} >
                            <Text style={styles.headings}>
                                {fundName}
                            </Text>
                        </View>
                        <Text style={styles.lblLine} />
                    </View>
                    { /* ------------Tab Views------------------*/}

                    <ScrollView
                        ref={input => this.tabBar = input}

                        style={styles.tabBar}
                        horizontal
                        sc={false}
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={{ paddingHorizontal: scaledHeight(12), alignItems: 'center', justifyContent: 'center', alignContent: 'center' }}
                    >
                        <TouchableOpacity
                            style={this.state.isSummarySelected === true ? styles.tabItemSelected : styles.tabItem}
                            onPress={() => {
                                this.setState({
                                    isSummarySelected: true,
                                    isQuickFactSelected: false,
                                    isPerformanceSelected: false
                                });
                                this.tabBar.scrollTo({ x: 0, y: 0, animated: true });
                            }}
                            activeOpacity={0.2}
                        >
                            <Text style={this.state.isSummarySelected === true ? styles.tabItemSelectedTxt : styles.tabItemTxt}>
                                {gblStrings.accManagement.summary}
                            </Text>

                        </TouchableOpacity>

                        <TouchableOpacity
                            style={this.state.isQuickFactSelected === true ? styles.tabItemSelected : styles.tabItem}
                            onPress={() => {
                                this.setState({
                                    isSummarySelected: false,
                                    isQuickFactSelected: true,
                                    isPerformanceSelected: false
                                });
                            }}
                            activeOpacity={0.2}
                        >
                            <Text style={this.state.isQuickFactSelected === true ? styles.tabItemSelectedTxt : styles.tabItemTxt}>
                                {gblStrings.accManagement.quickFacts}
                            </Text>

                        </TouchableOpacity>

                        <TouchableOpacity
                            style={this.state.isPerformanceSelected === true ? styles.tabItemSelected : styles.tabItem}
                            onPress={() => {
                                this.setState({
                                    isSummarySelected: false,
                                    isQuickFactSelected: false,
                                    isPerformanceSelected: true
                                });
                                this.tabBar.scrollToEnd();
                            }}
                            activeOpacity={0.2}
                        >
                            <Text style={this.state.isPerformanceSelected === true ? styles.tabItemSelectedTxt : styles.tabItemTxt}>
                                {gblStrings.accManagement.performance}
                            </Text>

                        </TouchableOpacity>
                    </ScrollView>

                    { /*----------- Summary,QuickFacts,Performance  -------------------*/}
                    {this.state.isSummarySelected && this.renderSummary(risk, gblStrings.common.dollar + initialInvestment, gblStrings.common.dollar + monthlyInvestment, moreInfo_PDFs)}
                    {this.state.isQuickFactSelected && this.renderQuickfacts(nav, expenseRatio, morningstarRating, morningstarCategory, categoryFunds)}
                    {this.state.isPerformanceSelected && this.renderPerformnace(monthly_Returns, quarterly_Returns)}

                    { /*----------- Buttons Grp  -------------------*/}

                    <View style={styles.btnGrp}>

                        <GButtonComponent
                            buttonStyle={styles.normalWhiteBtn}
                            buttonText={gblStrings.common.back}
                            textStyle={styles.normalWhiteBtnTxt}
                            onPress={() => this.goBack()}
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
InvestmentPlanInfoComponent.propTypes = {
    navigation: PropTypes.instanceOf(Object).isRequired,
    fundDetailsData: PropTypes.instanceOf(Object).isRequired,
};
export default InvestmentPlanInfoComponent;

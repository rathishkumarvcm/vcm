import React, { Component } from 'react';
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { GHeaderComponent, GIcon, GFooterSettingsComponent, GRatingStarsComponent, GLoadingSpinner, GButtonComponent } from '../../CommonComponents';
import PropTypes from 'prop-types';
import gblStrings from '../../Constants/GlobalStrings';
import * as ActionTypes from "../../Shared/ReduxConstants/ServiceActionConstants";

class CompareFundsComponent extends Component {
    constructor(props) {
        super(props);
        //set true to isLoading if data for this screen yet to be received and wanted to show loader.
        this.state = {
            isLoading: false,
        };
    }

    goBack = () => {
        this.props.navigation.goBack();
    };

    componentDidMount() {
        const payload = this.props.navigation.getParam('fundDetails', '');
        this.props.getFundDetailsData(payload);
        console.log('Payload:' + payload);
    }

    render() {
        var compareFundsData = [];
        if (this.props && this.props.fundDetailsData && this.props.fundDetailsData[ActionTypes.GET_FUNDDETAILS] && this.props.fundDetailsData[ActionTypes.GET_FUNDDETAILS].result) {
            compareFundsData = this.props.fundDetailsData[ActionTypes.GET_FUNDDETAILS].result;
            console.log('Fund Data : ' + JSON.stringify(compareFundsData));
        }
        return (
            <View style={styles.container}>
                {
                    this.props.fundDetailsData.isLoading && <GLoadingSpinner />
                }
                <GHeaderComponent
                    navigation={this.props.navigation}
                    onPress={() => { }}
                />
                <ScrollView style={styles.scrollviewcontainer}>
                    <View style={styles.sectionGrp}>
                        <TouchableOpacity style={styles.touchStyle}
                            onPress={this.goBack}
                            activeOpacity={0.2}
                        >
                            <View style={styles.backtoInvestContainer}>
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
                    </View>

                    <View style={styles.fundCompareTextContainer}>
                        <Text style={styles.fundCompareText}>
                            {gblStrings.compareFunds.fundComparison}
                        </Text>
                        <View style={styles.lineBorder} />
                    </View>                   

                    <View style={{flexDirection:'row'}}>     
                        {/* Compare Fund Category */}                                                         
                        <View style={styles.fundCompareContainer}>
                            <View style={styles.fundComparePerformanceHeadContainer}>
                                <View style={styles.fundCompareHeadContents}>
                                    <Text style={styles.fundComparePerformanceTitle}>
                                        {''}
                                    </Text>
                                    <Text style={styles.fundComparePerformanceTitle}>
                                        {gblStrings.compareFunds.performance}
                                    </Text>
                                    <Text style={styles.fundCompareTitle}>
                                        {gblStrings.accManagement.oneYear}
                                    </Text>
                                    <Text style={styles.fundCompareTitle}>
                                        {gblStrings.accManagement.fiveYear}
                                    </Text>
                                    <Text style={styles.fundCompareTitle}>
                                        {gblStrings.accManagement.tenYear}
                                    </Text>
                                    <Text style={styles.fundCompareTitle}>
                                        {gblStrings.accManagement.YTD}
                                    </Text>
                                </View>
                            </View>

                            <View style={styles.fundComparePriceHeadContainer}>
                                <View style={styles.fundComparePriceContents}>
                                    <Text style={styles.fundComparePriceHeadTitle}>
                                        {gblStrings.compareFunds.performancePrice}
                                    </Text>
                                    <Text style={styles.fundComparePriceTitle}>
                                        {gblStrings.compareFunds.sinceInception}
                                    </Text>
                                    <Text style={styles.fundComparePriceTitle}>
                                        {gblStrings.compareFunds.inceptionDate}
                                    </Text>
                                    <Text style={styles.fundComparePriceTitle}>
                                        {gblStrings.compareFunds.inceptionDate}{'(09/19/2019)'}
                                    </Text>
                                </View>
                            </View>

                            <View style={styles.fundComparePriceHeadContainer}>
                                <View style={styles.fundCompareSECContents}>
                                    <Text style={styles.fundComparePriceHeadTitle}>
                                        {gblStrings.compareFunds.secYields}
                                    </Text>
                                    <Text style={styles.fundComparePriceTitle}>
                                        {gblStrings.compareFunds.secThirtyDay}{'(09/19/2019)'}
                                    </Text>
                                    <Text style={styles.fundComparePriceTitle}>
                                        {gblStrings.compareFunds.secSevenDay}{'(09/19/2019)'}
                                    </Text>
                                    <Text style={styles.fundComparePriceWaiversTitle}>
                                        {gblStrings.compareFunds.secWaivers}
                                    </Text>
                                </View>
                            </View>

                            <View style={styles.fundComparePriceHeadContainer}>
                                <View style={styles.fundCompareExpenseRatioContents}>
                                    <Text style={styles.fundComparePriceHeadTitle}>
                                        {gblStrings.compareFunds.expenseRatios}
                                    </Text>
                                    <Text style={styles.fundComparePriceTitle}>
                                        {gblStrings.accManagement.expenseRation}
                                    </Text>
                                    <Text style={styles.fundCompareExpenseRatioTitle}>
                                        {gblStrings.compareFunds.expenseRatio}
                                    </Text>
                                    <Text style={styles.fundCompareImburseTitle}>
                                        {gblStrings.compareFunds.beforeImbursement}
                                    </Text>
                                    <Text style={styles.fundCompareExpenseRatioTitle}>
                                        {gblStrings.compareFunds.expenseRatio}
                                    </Text>
                                    <Text style={styles.fundCompareImburseTitle}>
                                        {gblStrings.compareFunds.afterImbursement}
                                    </Text>
                                    <Text style={styles.fundComparePriceTitle}>
                                        {gblStrings.compareFunds.ytd}
                                    </Text>
                                </View>
                            </View>

                            <View style={styles.fundComparePriceHeadContainer}>
                                <View style={styles.fundCompareRatingsContents}>
                                    <Text style={styles.fundCompareRatingsHeadTitle}>
                                        {gblStrings.compareFunds.morningStarRatings}
                                    </Text>
                                    <Text style={styles.fundComparePriceTitle}>
                                        {gblStrings.compareFunds.overAll}
                                    </Text>
                                    <Text style={styles.fundCompareCategoryTitle}>
                                        {gblStrings.compareFunds.ratingCategory}
                                    </Text>
                                    <Text style={styles.fundComparePriceTitle}>
                                        {gblStrings.compareFunds.numberInCategory}
                                    </Text>
                                </View>

                            </View>
                        </View>
                                                                               
                        {/* Compare Fund Details Information */}
                        <ScrollView
                            horizontal
                            sc={false}
                            showsHorizontalScrollIndicator={false}
                            contentContainerStyle={{ flexDirection: 'row',flexGrow: 1}}
                        >  
                        {
                        compareFundsData.map((item) => {
                            //console.log("Item======",item);   
                            return (                        
                                <View style={styles.fundCompareContainer} key={item}>
                                    <View style={styles.fundDetailsHeadContainer}>
                                        <View style={styles.fundDetailsHeadContents}>
                                            <Text style={styles.fundDetailsHeadTitle}>
                                                {item.fundName}
                                            </Text>
                                        </View>
                                        <View style={styles.fundDetailsHeadContentsDesc}>
                                            <Text style={styles.fundDetailsPerformanceYearContents}>
                                                {item.performanceDetails.totalReturns.monthly["1year"]}
                                            </Text>
                                            <Text style={styles.fundDetailsContents}>
                                                {item.performanceDetails.totalReturns.monthly["5year"]}
                                            </Text>
                                            <Text style={styles.fundDetailsContents}>
                                                {item.performanceDetails.totalReturns.monthly["10year"]}
                                            </Text>
                                            <Text style={styles.fundDetailsContents}>
                                                {item.performanceDetails.totalReturns.monthly["ytd"]}
                                            </Text>
                                        </View>
                                    </View>

                                    <View style={styles.fundDetailsPriceHeadContainer}>
                                        <View style={styles.fundDetailsPriceContents}>
                                            <Text style={styles.fundComparePriceTitle}>
                                                {''}
                                            </Text>
                                            <Text style={styles.fundDetailsContents1}>
                                                {item.performanceDetails.totalReturns.monthly["sinceInception"]}
                                            </Text>
                                            <Text style={styles.fundDetailsContents1}>
                                                {item.performanceDetails.totalReturns.monthly["asOfDate"]}
                                            </Text>
                                            <Text style={styles.fundDetailsContents1}>
                                                {gblStrings.common.dollar}{item.nav["value"]}
                                            </Text>
                                        </View>
                                    </View>

                                    <View style={styles.fundDetailsPriceHeadContainer}>
                                        <View style={styles.fundDetailsSECContents}>
                                            <Text style={styles.fundDetailsContents1}>
                                                {''}
                                            </Text>
                                            <Text style={styles.fundDetailsContents1}>
                                                {item.SecYields["SecYields_30"]}
                                            </Text>
                                            <Text style={styles.fundDetailsContents1}>
                                                {item.SecYields["SecYields_7"]}
                                            </Text>
                                            <Text style={styles.fundDetailsContents1}>
                                                {item.SecYields["SecYields_WoWaivers"]}
                                            </Text>
                                        </View>
                                    </View>

                                    <View style={styles.fundDetailsPriceHeadContainer}>
                                        <View style={styles.fundDetailsExpenseRatioContents}>
                                            <Text style={styles.fundComparePriceHeadTitle}>
                                                {''}
                                            </Text>
                                            <Text style={styles.fundDetailsContents1}>
                                                {item.expenseRatio["expenseRatio"]}
                                            </Text>
                                            <Text style={styles.fundCompareExpenseRatioTitle}>
                                                {''}
                                            </Text>
                                            <Text style={styles.fundDetailsImburseTitle}>
                                                {item.expenseRatio["expenseRatio_BR"]}
                                            </Text>
                                            <Text style={styles.fundCompareExpenseRatioTitle}>
                                                {''}
                                            </Text>
                                            <Text style={styles.fundDetailsImburseTitle}>
                                                {item.expenseRatio["expenseRatio_AR"]}
                                            </Text>
                                            <Text style={styles.fundDetailsContents1}>
                                                {'-'}
                                            </Text>
                                        </View>
                                    </View>

                                    <View style={styles.fundDetailsPriceHeadContainer}>
                                        <View style={styles.fundDetailsRatingsContents}>
                                            <Text style={styles.fundCompareRatingsHeadTitle}>
                                                {''}
                                            </Text>                                                
                                            <View style={styles.ratingStar}>
                                                <GRatingStarsComponent rating={parseInt(item.morningstarRating["value"])}
                                                    ratedStarColor="#393535"
                                                    unRatedStarColor="#DCDCDC"
                                                    size={20}
                                                />
                                            </View>
                                            <Text style={styles.fundDetailsCategoryTitle}>
                                                {item["morningstarCategory"]}
                                            </Text>
                                            <Text style={styles.fundDetailsContents1}>
                                                {item["categoryFunds"]}
                                            </Text>
                                        </View>
                                    </View>
                                </View>                                  
                            );
                        })
                        }
                        </ScrollView>        
                    </View>                

                    <View style={styles.btnGrp}>
                        <GButtonComponent
                            buttonStyle={styles.normalWhiteBtn}
                            buttonText={gblStrings.common.back}
                            textStyle={styles.normalWhiteBtnTxt}
                            onPress={this.goBack}
                        />
                    </View>

                    <GFooterSettingsComponent />
                </ScrollView>

            </View>
        );
    }
}

CompareFundsComponent.propTypes = {
    navigation: PropTypes.instanceOf(Object),
    fundDetailsData: PropTypes.instanceOf(Object),

    getFundDetailsData:PropTypes.func,
};

CompareFundsComponent.defaultProps = {};

export default CompareFundsComponent;
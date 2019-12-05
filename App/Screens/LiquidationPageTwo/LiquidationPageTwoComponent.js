import React, { Component } from 'react';
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { GIcon, GInputComponent, GHeaderComponent, GFooterComponent } from '../../CommonComponents';
import { styles } from './styles';
import gblStrings from '../../Constants/GlobalStrings';
import { CustomDropDown, CustomCheckBox, PageNumber } from '../../AppComponents';
import PropTypes from 'prop-types';

class LiquidationPageTwoComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    navigateLiquidationPageOne = () => this.props.navigation.navigate('LiquidationPageOne');
    navigateLiquidationPageTwo = () => this.props.navigation.navigate('LiquidationPageTwo');
    navigateLiquidationPageThree = () => this.props.navigation.navigate('LiquidationPageThree');

    render() {
        let currentPage = 2;
        let pageName = '2 - Fund Selections';
        return (
            <View style={styles.container} >
                <GHeaderComponent navigation={this.props.navigation} />
                <ScrollView style={styles.mainFlex}>
                    <TouchableOpacity onPress={this.goBack}>
                        <GIcon
                            name="left"
                            type="antdesign"
                            size={25}
                            color="#707070"
                        />
                    </TouchableOpacity>

                    <PageNumber currentPage={currentPage} pageName={pageName} />

                    <View style={styles.headerFlex}>
                        <Text style={styles.headerText}>-   </Text>
                        <Text style={styles.headerText}>Account Name 1</Text>
                    </View>

                    <View style={styles.line} />

                    <Text style={styles.fundSourceContent}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</Text>
                    <View style={styles.sharesFlex}>
                        <View style={styles.flex1}>
                            <Text style={styles.blackTextBold13px}>USSPX VCM 500 INDEX FUND MEMBER CLASS SHARES</Text>
                        </View>
                        <View style={styles.flex2}>
                            <View style={styles.totalSharesFlex}>
                                <Text style={styles.totalSharesText}>Total Shares</Text>
                                <Text style={styles.totalSharesValue}>2452</Text>
                            </View>
                            <View style={styles.totalSharesFlex}>
                                <Text style={styles.totalSharesText}>Worth</Text>
                                <Text style={styles.totalSharesValue}>$ 5400 (Approx.)</Text>
                            </View>

                        </View>
                        <View style={styles.flex3}>
                            <View style={styles.sellAllShares}>
                                <View style={styles.radioButtonFlexOff}>
                                    <View style={styles.radioButtonFlexOn} />
                                </View>
                                <Text style={styles.sellAllSharesText}>Sell all Shares</Text>
                            </View>
                            <View style={styles.sellAllShares}>
                            <View style={styles.radioButtonFlexOff}>
                                    <View style={styles.radioButtonFlexOn} />
                                </View>
                                <Text style={styles.dollarText}>$</Text>
                                <Text style ={styles.value}>1500</Text>
                            </View>
                            <View style={styles.sellAllShares}>
                            <View style={styles.radioButtonFlexOff}>
                                    <View style={styles.radioButtonFlexOn} />
                                </View>
                                <Text style={styles.dollarText}>%</Text>
                                <Text style ={styles.value}>1500</Text>
                            </View>
                        </View>

                    </View>

                   

                    <View style={styles.flex6}>
                        <TouchableOpacity style={styles.backButtonFlex} onPress={this.navigateLiquidationPageOne}>
                            <Text style={styles.backButtonText}>{gblStrings.common.cancel}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.backButtonFlex} onPress={this.navigateLiquidationPageOne}>
                            <Text style={styles.backButtonText}>{gblStrings.common.back}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.submitFlex} onPress={this.navigateLiquidationPageThree}>
                            <Text style={styles.submitText}>{gblStrings.common.next}</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.fullLine} />
                    <View style={styles.tNCFlex}>
                        <Text style={styles.tNcHeader}>{gblStrings.userManagement.VCDiscalimerTitle}{"\n"}</Text>
                        <Text style={styles.tNcBody}>{gblStrings.userManagement.VCDiscalimerDesc}{"\n"}{"\n"}{gblStrings.userManagement.VCPrivacyNoticeDesc} </Text>
                    </View>
                    <GFooterComponent />
                </ScrollView>


            </View>

        );
    }
}


LiquidationPageTwoComponent.propTypes = {
    navigation: PropTypes.instanceOf(Object)
};

LiquidationPageTwoComponent.defaultProps = {

};
export default LiquidationPageTwoComponent;
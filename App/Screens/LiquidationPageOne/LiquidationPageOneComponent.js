import React, { Component } from 'react';
import { Text, View, ScrollView, TouchableOpacity ,FlatList} from 'react-native';
import { GIcon, GInputComponent, GHeaderComponent, GFooterComponent } from '../../CommonComponents';
import { styles } from './styles';
import gblStrings from '../../Constants/GlobalStrings';
import { PageNumber } from '../../AppComponents';
import PropTypes from 'prop-types';
import { scaledHeight, scaledWidth } from '../../Utils/Resolution';
import Collapsible from 'react-native-collapsible';

const accSelectionData = [
    {
        "accType": "General Account",
        "accName": "1",
        "accNumber": "xxxx-xxxx-xxxx",
        "currentValue": "$6000",
        "holdingValue": "$7000",
        "AutomaticInvestmentPlan": "Yes"
    },
    {
        "accType": "General Account",
        "accName": "2",
        "accNumber": "xxxx-xxxx-xxx",
        "currentValue": "$4500",
        "holdingValue": "$9000",
        "AutomaticInvestmentPlan": "Yes"
    }
];

class LiquidationPageOneComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            generalAccountIcon: '+   ',
            IRAAccountIcon: '+   ',
            UTMAAccountIcon: '+   ',
            collapseGeneralAccount: true,
            collapseIRAAccount: true,
            collapseUTMAAccount: true,
            selectedAccountIndex:0
        };
    }

    onClickExpandGeneralAccount = () => {
        this.setState({ collapseGeneralAccount: !this.state.collapseGeneralAccount });
        (this.state.collapseGeneralAccount ? this.setState({ generalAccountIcon: "-    " }) : this.setState({ generalAccountIcon: "+   " }))
    }
    onClickExpandIRAAccount = () => {
        this.setState({ collapseIRAAccount: !this.state.collapseIRAAccount });
        (this.state.collapseIRAAccount ? this.setState({ IRAAccountIcon: "-    " }) : this.setState({ IRAAccountIcon: "+   " }))
    }
    onClickExpandUTMAAccount = () => {
        this.setState({ collapseUTMAAccount: !this.state.collapseUTMAAccount });
        (this.state.collapseUTMAAccount ? this.setState({ UTMAAccountIcon: "-    " }) : this.setState({ UTMAAccountIcon: "+   " }))
    }

    onClickSelectAccount = (item, index) => {
        this.setState({
            selectedAccountIndex: index
        })
    }

    navigateLiquidationPageTwo = () => this.props.navigation.navigate('LiquidationPageTwo');

    render() {
        let currentPage = 1;
        let pageName = '1 - Account Selection';
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
                    <View style={styles.flex1}>

                        <Text style={styles.greyText16px}>{gblStrings.liquidation.accountSelectionContent}</Text>

                        <View style={styles.accountTypeFlex}>
                            <View style={styles.headerFlex}>
                                <Text style={styles.headerText} onPress={this.onClickExpandGeneralAccount}>{this.state.generalAccountIcon}</Text>
                                <Text style={styles.headerText}>{gblStrings.liquidation.generalAccountHeading}</Text>
                            </View>
                            <View style={styles.line}></View>
                        </View>
                        <Collapsible collapsed={this.state.collapseGeneralAccount} align="center">
                            <FlatList
                                data={accSelectionData}
                                renderItem={({ item, index }) => {
                                    return (
                                        <View style={styles.accountDetailsFlex}>

                                            <View style={styles.flexAccDetails1}>
                                                <View style={styles.accountNumberFlex}>
                                                    <Text style={styles.blackTextBold18px}>Account Name {item.accName}</Text>
                                                    <Text style={styles.blackTextBold18px}>Account Number</Text>
                                                    <Text style={styles.blackTextBold18px}>{item.accNumber}</Text>
                                                </View>
                                                {this.state.selectedAccountIndex == index ?<View style={{ backgroundColor: 'white', width: "15%", marginTop: "1%", alignItems: 'flex-start', justifyContent: 'flex-start', flexDirection: 'row', marginRight: "6%" }} onTouchStart={() => this.onClickSelectAccount(item, index)}>
                                                    <View style={{ backgroundColor: '#444444', borderColor: '#707070', borderWidth: scaledHeight(1), width: scaledHeight(45), height: scaledHeight(25), borderRadius: 15, marginTop: scaledHeight(2) }} />
                                                    <View style={{ backgroundColor: '#FFFFFF', width: scaledHeight(30), borderColor: '#707070', borderWidth: scaledHeight(1), height: scaledHeight(30), borderRadius: scaledHeight(15), marginLeft: "-60%" }} />
                                                </View>:<View style={{backgroundColor: 'white', width: "15%", marginTop: "1%",alignItems: 'flex-start', justifyContent: 'flex-start', flexDirection: 'row', marginRight: "6%" }} onTouchStart={() => this.onClickSelectAccount(item, index)}>
                                                    <View style={{ width: scaledHeight(30), height: scaledHeight(30),borderRadius: scaledHeight(15), borderColor: '#707070', borderWidth: scaledHeight(1), backgroundColor: '#FFFFFF', marginLeft: "0%", zIndex: 3 }}></View>
                                                    <View style={{ backgroundColor: '#DBDBDB', borderColor: '#707070', borderWidth: scaledHeight(1), width: scaledHeight(45), height: scaledHeight(25),  marginTop: scaledHeight(2),borderRadius: 15, marginLeft: "-60%" }} />

                                                </View>}

                                                

                                            </View>

                                            <View style={styles.line}></View>


                                            <View style={styles.flexAccDetails2}>
                                                <View style={styles.currentValueflex}>
                                                    <Text style={styles.blackTextBold14px}>{gblStrings.liquidation.currentValue}</Text>
                                                    <Text style={styles.blackText14px}>{item.currentValue}</Text>
                                                </View>
                                                <View style={styles.currentValueflex}>
                                                    <Text style={styles.blackTextBold14px}>{gblStrings.liquidation.holding}</Text>
                                                    <Text style={styles.blackText14px}>{item.holdingValue}</Text>
                                                </View>
                                            </View>
                                            <View style={styles.flexAccDetails3}>
                                                <Text style={styles.blackTextBold14px}>{gblStrings.liquidation.automaticInvestmentPlan}</Text>
                                                <Text style={styles.blackText14px}>{item.AutomaticInvestmentPlan}</Text>
                                            </View>
                                        </View>

                                    )
                                }}
                                keyExtractor={x => x.accNumber}
                                extraData={this.state} />
                        </Collapsible>


                        <View style={styles.accountTypeFlex}>
                            <View style={styles.headerFlex}>
                                <Text style={styles.headerText} onPress={this.onClickExpandIRAAccount}>{this.state.IRAAccountIcon}</Text>
                                <Text style={styles.headerText}>{gblStrings.liquidation.iraAccountHeading}</Text>
                            </View>
                            <View style={styles.line}></View>
                        </View>

                        <View style={styles.accountTypeFlex}>
                            <View style={styles.headerFlex}>
                                <Text style={styles.headerText} onPress={this.onClickExpandUTMAAccount}>{this.state.UTMAAccountIcon}</Text>
                                <Text style={styles.headerText}>{gblStrings.liquidation.utmaAccountHeading}</Text>
                            </View>
                            <View style={styles.line}></View>
                        </View>

                    </View>

                    <View style={styles.flex6}>
                        <TouchableOpacity style={styles.backButtonFlex} onPress={this.navigateLiquidationPageOne}>
                            <Text style={styles.backButtonText}>{gblStrings.common.cancel}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.submitFlex} onPress={this.navigateLiquidationPageTwo}>
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


LiquidationPageOneComponent.propTypes = {
    navigation: PropTypes.instanceOf(Object)
};

LiquidationPageOneComponent.defaultProps = {

};
export default LiquidationPageOneComponent;
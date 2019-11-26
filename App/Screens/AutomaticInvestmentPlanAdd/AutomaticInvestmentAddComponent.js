import React, { Component } from 'react';
import { View, ScrollView, Text,FlatList } from 'react-native';
import { styles } from './styles';
import {
    GHeaderComponent,
    GFooterComponent,
    GButtonComponent,
    GInputComponent,
    GSwitchComponent,
} from '../../CommonComponents';
import PropTypes from 'prop-types';
import globalString from '../../Constants/GlobalStrings';
import { scaledHeight, scaledWidth } from '../../Utils/Resolution';
import * as regEx from '../../Constants/RegexConstants';

const autoInvestmentAddBankJson=[
        
    {
        account:'Bank Account 1',
        accountNumber:'xxx-xxx-xxxx'
    },
    {
        account:'Bank Account 2',
        accountNumber:'xxx-xxx-xxxx'
    },
    {
        account:'Bank Account 3',
        accountNumber:'xxx-xxx-xxxx'
    }
];

const autoInvestmentAddAmountJson=[
    {
        accountName: 'USSPX VCM 500 INDEX FUND MEMBER CLASS SHARES',
    },
    {
        accountName: 'LOREM 2 USSPX VCM 500INDEX FUND MEMBER CLASS SHARES',
    },
    {
        accountName: 'LOREM 3 USSPX VCM 500INDEX FUND MEMBER CLASS SHARES',
    }
];

class AutomaticInvestmentAddComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            autoInvestSwithOn: false,
            autoInvestSwithOff: true,
        };
    }

    generateKeyExtractor = (item) => item.account;
    renderInvestment = () => ({ item }) =>
        (
                    
            <View style={{borderWidth:1,borderColor:'#61285F45',padding:'5%'}}>
                <Text>{item.account}</Text>
                <Text>{item.accountNumber}</Text>
            </View> 
        )
        switchOnOffStateUpdates = (fromView, flag) => {
            switch (fromView) 
            {
                case 'autoInvest':
                if (flag) this.setState({ autoInvestSwithOn: true, autoInvestSwithOff: false });
                else this.setState({ autoInvestSwithOn: false, autoInvestSwithOff: true });
                break;
            }
        }
        generateAmountKeyExtractor = (item) => item.accountName;
        renderAmount=()=>({item})=>
        (
            <View style={{borderWidth:1,borderColor:'#61285F45',marginTop:scaledHeight(10)}}>
                            <View style={{flexDirection:'row',flex:1,justifyContent:"center",alignItems:'center',borderBottomColor:'#61285F45',borderBottomWidth:1,backgroundColor:'#61285F45'}}>
                                <View style={{flex:0.7}}>
                                    <Text>{item.accountName}</Text>
                                </View>
                                <View style={{flex:0.3,alignItems:'flex-end',marginRight:'4%'}}>
                                    <GSwitchComponent switchOnMethod={this.autoInvestOnFunc}
                                    switchOffMethod={this.autoInvestOffFunc}
                                    switchOn={this.state.autoInvestSwithOn}
                                    switchOff={this.state.autoInvestSwithOff}
                                    
                                    />
                                </View>
                            </View>
                            <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-evenly'}}>
                                <Text>{'Amount'}</Text>
                                <Text>{'$'}</Text>
                                <GInputComponent propInputStyle={{width:'40%'}} />
                                <Text>{'Min $50'}</Text>
                            </View>
            </View>
        )

        autoInvestOnFunc=() => this.switchOnOffStateUpdates('autoInvest', true);
        autoInvestOffFunc=() => this.switchOnOffStateUpdates('autoInvest', false);

    render() {
        return (
            <View style={styles.container}>
                <GHeaderComponent register navigation={this.props.navigation} />
                <ScrollView style={{ flex: 0.85 }}>
                    <View style={{marginLeft: scaledHeight(10), marginRight: scaledHeight(10)}}>
                        <Text style={styles.autoInvestHead}>{'Create Automatic Investment Plan'}</Text>
                        <View style={{ flexDirection: 'row', flex: 1 }}>
                            <View style={styles.planStatusSelected}><Text style={styles.planStatusText}>{'Plan Details'}</Text></View>
                            <View style={styles.planStatus}><Text style={styles.planStatusText}>{'Schedule'}</Text></View>
                            <View style={styles.planStatus}><Text style={styles.planStatusText}>{'Verify'}</Text></View>
                            <View style={styles.planStatus}><Text style={styles.planStatusText}>{'E-Sign'}</Text></View>
                        </View>
                        <Text style={styles.autoInvestHead}>{'Fund Form'}</Text>
                        <Text style={styles.autoInvestCont}>{'Choose how you will fund your account and indicate your initial investment amount.'}</Text>
                        <FlatList style={{marginTop:scaledHeight(20)}}
                                data={autoInvestmentAddBankJson}
                                renderItem={this.renderInvestment()}
                                keyExtractor={this.generateKeyExtractor}
                                horizontal
                        />
                        <Text>{'Invest To'}</Text>
                        <ScrollView style={{ flex: 0.85 }} horizontal>
                            <View style={{flexDirection:'row'}}>
                                <View style={{flexDirection:'column',width:scaledWidth(150),padding:scaledWidth(10),borderColor:'#61285F45',borderWidth:1}}>
                                    <Text>{'Total Amount'}</Text>
                                    <View style={{flexDirection:'row'}}>
                                        <Text>{'$'}</Text>
                                        <GInputComponent style={{marginLeft:scaledWidth(10)}} />
                                    </View>
                                </View>

                                <View style={{flexDirection:'column',width:scaledWidth(150),padding:scaledWidth(10),borderColor:'#61285F45',borderWidth:1}}>
                                    <Text>{'In'}</Text>
                                    <View style={{flexDirection:'row'}}>
                                        <Text>{'$'}</Text>
                                        <GInputComponent style={{marginLeft:scaledWidth(10)}} />
                                    </View>
                                </View>
                            
                                <View style={{flexDirection:'column',width:scaledWidth(150),padding:scaledWidth(10),borderColor:'#61285F45',borderWidth:1}}>
                                    <Text>{'Amount Consumed'}</Text>
                                    <View style={{flexDirection:'row'}}>
                                        <Text>{'$'}</Text>
                                        <GInputComponent style={{marginLeft:scaledWidth(10)}} />
                                    </View>
                                </View>

                                <View style={{flexDirection:'column',width:scaledWidth(150),padding:scaledWidth(10),borderColor:'#61285F45',borderWidth:1}}>
                                    <Text>{'Amount Remaining'}</Text>
                                    <View style={{flexDirection:'row'}}>
                                        <Text>{'$'}</Text>
                                        <GInputComponent style={{marginLeft:scaledWidth(10)}} />
                                    </View>
                                </View>

                            </View>
                        </ScrollView>
                        <FlatList style={{marginTop:scaledHeight(20)}}
                                data={autoInvestmentAddAmountJson}
                                renderItem={this.renderAmount()}
                                keyExtractor={this.generateAmountKeyExtractor}
                                
                        />
                    </View>
                    <View style={{flexDirection:'row',justifyContent:'flex-end'}}>
                        <GButtonComponent
                            buttonStyle={styles.cancelButton}
                            buttonText={globalString.common.cancel}
                            textStyle={styles.cancelButtonText}
                            onPress={this.navigationLogin}
                        />
                        <GButtonComponent
                            buttonStyle={styles.cancelButton}
                            buttonText={globalString.common.save}
                            textStyle={styles.cancelButtonText}
                            onPress={this.navigationLogin}
                        />
                    </View>

                    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                        <GButtonComponent
                            buttonStyle={styles.cancelButton}
                            buttonText={globalString.common.back}
                            textStyle={styles.cancelButtonText}
                            onPress={this.navigationLogin}
                        />
                        <GButtonComponent
                            buttonStyle={styles.continueButton}
                            buttonText={globalString.common.next}
                            textStyle={styles.continueButtonText}
                            onPress={this.navigationLogin}
                        />
                    </View>
                    <GFooterComponent />
                </ScrollView>
            </View>
        );
    }
}
AutomaticInvestmentAddComponent.propTypes = {

    navigation: PropTypes.instanceOf(Object)
};

AutomaticInvestmentAddComponent.defaultProps = {

};

export default AutomaticInvestmentAddComponent;
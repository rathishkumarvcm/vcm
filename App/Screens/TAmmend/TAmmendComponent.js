import React, { Component } from 'react';
import { StyleSheet, View, ScrollView,Text } from 'react-native';
import { GButtonComponent, GHeaderComponent, GFooterComponent, GRadioButtonComponent,GIcon} from '../../CommonComponents';
import Accordian from './Accordian';
import { styles } from './styles';
import PropTypes from 'prop-types';





export default class TAmmendComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedIndex: '',
            selectedTitle: '',
            selectedValue: '',
            menu: [
                {
                    title: 'Order ID - PUR201820112',
                    data: { USS: 'USSPX VCM 501 INDEX FUND MEMBER CLASS SHARES.',
                            count:5,
                            Dateadded : '29/11/2019',
                            CurrentValue: '$1300',
                            TransactionType : 'Purchase',
                            PaymentMode:'NetBanking',           
                            OrderStatus:'Pending'

                     
                    }

                },
                {
                    title: 'Order ID - PUR201820113',
                    data: { USS: 'USSPX VCM 502 INDEX FUND MEMBER CLASS SHARES.',
                            count:5,
                            Dateadded : '28/11/2019',
                            CurrentValue: '$5602',
                            TransactionType : 'Liquidation',
                            PaymentMode:'Wire Transfer',           
                            OrderStatus:'Pending'

                     
                    }
                },
                {
                    title: 'Order ID - PUR201820114',
                    data: { USS: 'USSPX VCM 503 INDEX FUND MEMBER CLASS SHARES.',
                            count:5,
                            Dateadded : '27/11/2019',
                            CurrentValue: '$2062',
                            TransactionType : 'Exchange',
                            PaymentMode:'In Order',           
                            OrderStatus:'Pending'

                     
                    }
                },
                
                
                
            ]
        }
    }

    selectIndex = (item, title) => {
        console.log('parent trigger', item)
        this.setState({
            //selectedIndex: item.data.USS,
            selectedTitle: title,
            selectedValue: item.CurrentValue
        })
    }

    render() {
        return (
            <View style={styles.container}>
            <GHeaderComponent navigation={this.props.navigation} />
            <ScrollView  style={{ flex: 0.85 }}>
            <View style={styles.signInView} >
            <Text style={styles.signIntext}>
                Transactions
                </Text>
                <Text style={styles.lblLine} />
                <View style={styles.container}>
                    {this.renderAccordians()}
                </View>
                </View>
            </ScrollView>
            </View>
        );
    }

    renderAccordians = () => {
        const items = [];
        for (item of this.state.menu) {
            items.push(
                <Accordian
                    title={item.title}
                    data={item.data}
                    selectDataIndex={this.selectIndex}
                    selectedIndex={this.state.selectedIndex}
                    selectedTitle={this.state.selectedTitle}
                    selectedValue={this.state.selectedValue}
                    
                />
            );
        }
        return items;
    }
}

TAmmendComponent.propTypes = {
    navigation: PropTypes.instanceOf(Object),
    initialState: PropTypes.instanceOf(Object)
};

TAmmendComponent.defaultProps = {
    
};

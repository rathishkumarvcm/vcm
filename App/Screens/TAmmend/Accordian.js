import React, { Component } from 'react';
import { View, TouchableOpacity, Text, Modal } from "react-native";
import PropTypes from 'prop-types';
import styles from './styles';
import { GIcon, GButtonComponent } from '../../CommonComponents';
import gblStrings from '../../Constants/GlobalStrings';


export default class Accordian extends Component {

    constructor(props) {
        super(props);
        this.state = {
            expanded: false,
            modalVisible: false,
            ammend: false
        };

    }

    showModal = () => {
        this.setState({
            modalVisible: true,
        });
    }

    hideModal = () => {
        this.setState({
            modalVisible: false,
        });
    }

    showAmmend = () => {
        this.setState({
            ammend: true,
        });
    }

    hideAmmend = () => {
        this.setState({
            ammend: false,
        });
    }

    moveToFundSelection = () => {

        this.setState({
            modalVisible: false,
        });
        this.setState({
            ammend: false,
        });
        this.props.navigate();

    }

    render() {
        return (

            <View>

                <TouchableOpacity style={styles.row} onPress={() => this.toggleExpand(item)}>
                    <Text style={styles.expandImage}>{this.state.expanded ? "-" : "+"}</Text>
                    <Text style={styles.lblTxt}>{this.props.title}</Text>
                    <TouchableOpacity style={styles.ellipseImage} onPress={this.showAmmend}>

                        <GIcon
                            name="ellipsis-v"
                            type="font-awesome"
                            size={20}
                            color="black"
                        />
                    </TouchableOpacity>
                </TouchableOpacity>

                <View />
                {
                    this.state.expanded &&
                    <View style={styles.accordianView}>
                        {this.state.ammend ? (<View style={styles.shadowView}>
                            <TouchableOpacity onPress={this.showModal}>
                                <Text style={styles.lblTxtInnerAmmend}>Ammend
                                </Text>
                            </TouchableOpacity>
                            <Text style={styles.lblLine} />
                            <TouchableOpacity onPress={this.hideAmmend}>
                                <Text style={styles.lblTxtInnerCancel}>Cancel</Text>
                            </TouchableOpacity>
                    </View>) : null}
                        <View style={styles.flexAccDetails1}>
                            <GIcon
                                name="closesquareo"
                                type="antdesign"
                                size={22}
                                color="#BBB3B3"
                            />
                            <View style={styles.marginTopView}>
                                <Text style={styles.lblTxt}>{gblStrings.liquidation.accountName} {this.props.data.selectedAccountData.accountName}</Text>
                                <Text style={styles.lblTxt}>{gblStrings.liquidation.accountNumber}</Text>
                                <Text style={styles.lblTxt}>{this.props.data.selectedAccountData.accountNumber}</Text>
                            </View>
                        </View>
                        <View style={styles.viewRow}>
                            <Text style={styles.lblTxtInner}>{this.props.data.selectedFundData.fundName}</Text>
                            <Text style={styles.lblCountText}>{this.props.data.count}</Text>
                        </View>

                        <View style={styles.viewRow}>
                            <Text style={styles.lblTxtSmall}>Date added:</Text>
                            <Text style={styles.lblTxtSmall}>{this.props.data.Dateadded}</Text>
                        </View>
                        <Text style={styles.lblLine} />
                        <View style={styles.viewColum}>
                            <Text style={styles.lblTxtInner}>CurrentValue</Text>
                            <Text style={styles.lblTxtMedium}>{this.props.data.selectedAccountData.currentValue}</Text>
                        </View>
                        <View style={styles.viewColum}>
                            <Text style={styles.lblTxtInner}>TransactionType</Text>
                            <Text style={styles.lblTxtMedium}>{this.props.data.TransactionType}</Text>
                        </View>
                        <View style={styles.viewColum}>
                            <Text style={styles.lblTxtInner}>PaymentMode</Text>
                            <Text style={styles.lblTxtMedium}>{this.props.data.selectedFundSourceData.paymentMode}</Text>
                        </View>
                        <View style={styles.viewColum}>
                            <Text style={styles.lblTxtInner}>OrderStatus</Text>
                            <Text style={styles.lblTxtMedium}>{this.props.data.OrderStatus}</Text>
                        </View>
                    </View>
                }
                {this.state.modalVisible ?
                    (<Modal
                        transparent={true}
                        visible={this.state.modalVisible
                        }
                    >
                        <View style={styles.modalView}>
                            <View style={styles.modalInsideView}>
                                <Text style={styles.modalText}>Are you Sure you want to Amend {this.props.selectedTitle}
                                    (Purchase of {this.props.selectedValue} of UAUX fund)
                                </Text>
                                <View style={styles.buttonView}>
                                    <GButtonComponent
                                        buttonStyle={styles.cancelButton}
                                        buttonText={gblStrings.common.cancel}
                                        textStyle={styles.cancelButtonText}
                                        onPress={this.hideModal}
                                    />
                                    <GButtonComponent
                                        buttonStyle={styles.saveButton}
                                        buttonText="Proceed"
                                        textStyle={styles.saveButtonText}
                                        onPress={this.moveToFundSelection}
                                    />
                                </View>
                            </View>
                        </View>

                     </Modal>) : null}
            </View>
        );
    }

    /* onClick = (item) => {
        console.log('touch event', item)
        //  const temp = this.state.data.slice();
        //  temp[index].value = !temp[index].value
        this.setState({ selectedIndex: item.Key });
    } */

    toggleExpand = () => {
        this.setState({ expanded: !this.state.expanded });
        this.props.selectDataIndex(this.props.data, this.props.title, this.props.index);
    }
}

Accordian.propTypes = {
    selectDataIndex: PropTypes.func,
    navigate: PropTypes.func,
    data: PropTypes.instanceOf(Object),
    title: PropTypes.instanceOf(Object),
    index: PropTypes.instanceOf(Object),
    selectedTitle: PropTypes.instanceOf(Object),
    selectedValue: PropTypes.instanceOf(Object)
};
Accordian.defaultProps = {
    navigate: () => { },
    selectDataIndex: () => { },
    data: {},
    title: {},
    index: {},
    selectedTitle: {},
    selectedValue: {}
};






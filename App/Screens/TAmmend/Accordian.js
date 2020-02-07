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

        const{navigate}=this.props;
        this.setState({
            modalVisible: false,
        });
        this.setState({
            ammend: false,
        });
        navigate();

    }

    toggleExpand = () => {
        const{expanded}=this.state;
        const{selectDataIndex,data,title,index}=this.props;
        this.setState({ expanded: !expanded });
        selectDataIndex(data, title, index);
    }

    render() {
        const{expanded,ammend,modalVisible}=this.state;
        const{title,data,selectedTitle,selectedValue}=this.props;
        return (

            <View>

                <TouchableOpacity style={styles.row} onPress={this.toggleExpand}>
                    <Text style={styles.expandImage}>{expanded ? "-" : "+"}</Text>
                    <Text style={styles.lblTxt}>{title}</Text>
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
                    expanded &&
                    (
                        <View style={styles.accordianView}>
                            {ammend ?
                                (
                                    <View style={styles.shadowView}>
                                        <TouchableOpacity onPress={this.showModal}>
                                            <Text style={styles.lblTxtInnerAmmend}>Ammend
                                            </Text>
                                        </TouchableOpacity>
                                        <Text style={styles.lblLine} />
                                        <TouchableOpacity onPress={this.hideAmmend}>
                                            <Text style={styles.lblTxtInnerCancel}>Cancel</Text>
                                        </TouchableOpacity>
                                    </View>
                                ) : null
                            }
                            <View style={styles.flexAccDetails1}>
                                <GIcon
                                    name="closesquareo"
                                    type="antdesign"
                                    size={22}
                                    color="#BBB3B3"
                                />
                                <View style={styles.marginTopView}>
                                    <Text style={styles.lblTxt}>{gblStrings.liquidation.accountName} {data.selectedAccountData.accountName}</Text>
                                    <Text style={styles.lblTxt}>{gblStrings.liquidation.accountNumber}</Text>
                                    <Text style={styles.lblTxt}>{data.selectedAccountData.accountNumber}</Text>
                                </View>
                            </View>
                            <View style={styles.viewRow}>
                                <Text style={styles.lblTxtInner}>{data.selectedFundData.fundName}</Text>
                                <Text style={styles.lblCountText}>{data.count}</Text>
                            </View>

                            <View style={styles.viewRow}>
                                <Text style={styles.lblTxtSmall}>Date added:</Text>
                                <Text style={styles.lblTxtSmall}>{data.Dateadded}</Text>
                            </View>
                            <Text style={styles.lblLine} />
                            <View style={styles.viewColum}>
                                <Text style={styles.lblTxtInner}>CurrentValue</Text>
                                <Text style={styles.lblTxtMedium}>{data.selectedAccountData.currentValue}</Text>
                            </View>
                            <View style={styles.viewColum}>
                                <Text style={styles.lblTxtInner}>TransactionType</Text>
                                <Text style={styles.lblTxtMedium}>{data.TransactionType}</Text>
                            </View>
                            {(data.TransactionType === "Exchange"||data.TransactionType === "Exchange Amended")?
                            (
                            <View style={styles.viewColum}>
                                <Text style={styles.lblTxtInner}>FundName</Text>
                                <Text style={styles.lblTxtMedium}>{data.selectedFundData.fundName}</Text>
                            </View>
                            ):
                            (
                            <View style={styles.viewColum}>
                                <Text style={styles.lblTxtInner}>PaymentMode</Text>
                                <Text style={styles.lblTxtMedium}>{data.selectedFundSourceData.paymentMode}</Text>
                            </View>
                            )
                            }
                            <View style={styles.viewColum}>
                                <Text style={styles.lblTxtInner}>OrderStatus</Text>
                                <Text style={styles.lblTxtMedium}>{data.OrderStatus}</Text>
                            </View>
                        </View>
                    )
                }
                {modalVisible ?
                    (
                        <Modal
                            transparent
                            visible={modalVisible}
                        >
                            <View style={styles.modalView}>
                                <View style={styles.modalInsideView}>
                                    <Text style={styles.modalText}>Are you Sure you want to Amend {selectedTitle}
                                        (Purchase of {selectedValue} of UAUX fund)
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

                        </Modal>
                    ) : null
                }
            </View>
        );
    }

    /* onClick = (item) => {
        console.log('touch event', item)
        //  const temp = this.state.data.slice();
        //  temp[index].value = !temp[index].value
        this.setState({ selectedIndex: item.Key });
    } */


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






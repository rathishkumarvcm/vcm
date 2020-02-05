import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import PropTypes from "prop-types";
import styles from './styles';
import { GIcon } from '../../CommonComponents';
import gblStrings from '../../Constants/GlobalStrings';

class CardHeader extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showModal: false
        };
    }

    updateState = () => {
        this.setState(prevState => ({ showModal: !prevState.showModal }));
    }

    onDelete = () => {
        const { onPressDelete } = this.props;
        this.setState({ showModal: false });
        onPressDelete();
    }

    render() {
        const { showModal } = this.state;
        const { item } = this.props;
        return (
            <View>
                <View style={styles.innerHeaderView}>
                    <View style={styles.marginPaddingStyle}>
                        <View style={styles.marginBottomStyle}>
                            <Text style={styles.shortContentText}>Beneficiary Name</Text>
                            <Text style={styles.shortContentValueText}>{`${item.fname} ${item.mname} ${item.lname}`}</Text>
                        </View>
                        <View style={styles.marginBottomStyle}>
                            <Text style={styles.shortContentText}>{gblStrings.accManagement.relationToInsured}</Text>
                            <Text style={styles.shortContentValueText}>{item.relationship_To_Insured}</Text>
                        </View>
                        <View style={styles.marginBottomStyle}>
                            <Text style={styles.shortContentText}>{gblStrings.accManagement.accumulatedValue}</Text>
                            <Text style={styles.shortContentValueText}>{`$ ${item.accumulated_Value}`}</Text>
                        </View>
                        <View style={styles.marginBottomStyle}>
                            <Text style={styles.shortContentText}>{gblStrings.accManagement.distribution}</Text>
                            <Text style={styles.shortContentValueText}>{`${item.distribution_Per} %`}</Text>
                        </View>
                    </View>
                    <TouchableOpacity style={styles.sideBtn} onPress={this.updateState}>
                        <GIcon name="dots-three-vertical" type="entypo" size={30} color="black" />
                    </TouchableOpacity>
                </View>
                {
                    showModal ?
                        (
                            <View style={styles.shadowView}>
                                <TouchableOpacity onPress={this.onDelete}>
                                    <Text style={styles.lblTxtInner}>{gblStrings.common.delete}</Text>
                                </TouchableOpacity>
                            </View>
                        )
                        : null
                }

            </View>
        );
    }
}

CardHeader.propTypes = {
    item: PropTypes.instanceOf(Object).isRequired,
    onPressDelete: PropTypes.func
};

CardHeader.defaultProps = {
    onPressDelete: () => { }
};
export default CardHeader;
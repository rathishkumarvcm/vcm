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
                    <View style={styles.flexDirectionStyle}>
                        <Text style={styles.shortContentText}>{gblStrings.accManagement.contractNumber}</Text>
                        <Text style={styles.contractText}>{item.contract_Number}</Text>
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
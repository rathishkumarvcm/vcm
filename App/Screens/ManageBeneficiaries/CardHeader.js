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
        }
    }

    updateState = () => {
        this.setState(prevState => ({ showModal: !prevState.showModal }));
    }

    onDelete = () => {
        this.setState({ showModal: false });
        this.props.onPressDelete();
    }

    render() {
        return (
            <View>
                <View style={styles.innerHeaderView}>
                    <View style={styles.flexDirectionStyle}>
                        <Text style={styles.shortContentText}>{gblStrings.accManagement.contractNumber}</Text>
                        <Text style={[styles.shortContentValueText, styles.paddingStyleLeft]}>{this.props.item.contract_Number}</Text>
                    </View>
                    <TouchableOpacity style={styles.sideBtn} onPress={this.updateState}>
                        <GIcon name="dots-three-vertical" type="entypo" size={30} color="black" />
                    </TouchableOpacity>
                </View>
                {
                    this.state.showModal ?
                        <View style={styles.shadowView}>
                            <TouchableOpacity onPress={this.onDelete}>
                                <Text style={styles.lblTxtInner} >{gblStrings.common.delete}</Text>
                            </TouchableOpacity>
                        </View>
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
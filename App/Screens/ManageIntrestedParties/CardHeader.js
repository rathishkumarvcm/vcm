import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import PropTypes from "prop-types";
import { GIcon } from '../../CommonComponents';
import styles from './styles';
import gblStrings from '../../Constants/GlobalStrings';

class CardHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
        };
    }

    updateState = () => {
        this.setState(prevState => ({ showModal: !prevState.showModal }));
    }

    edit = () => {
        const { navigate } = this.props;
        this.setState({ showModal: false });
        navigate();
    }

    delete = () => {
        const { onDelete } = this.props;
        this.setState({ showModal: false });
        onDelete();
    }

    render() {
        const { showModal } = this.state;
        const { item } = this.props;
        return (
            <View>
                <View style={styles.innerHeaderView}>
                    <View style={styles.flexDirectionStyle}>
                        <Text style={styles.shortContentText}>{gblStrings.accManagement.contractNumber} <Text style={styles.shortContentValueText}>{item.contract_Number}</Text></Text>

                    </View>
                    <TouchableOpacity style={styles.sideBtn} onPress={this.updateState}>
                        <GIcon name="dots-three-vertical" type="entypo" size={30} color="black" />
                    </TouchableOpacity>
                </View>
                {
                    showModal ?
                        (
                            <View style={styles.shadowView}>
                            <TouchableOpacity onPress={this.edit}>
                                <Text style={styles.lblTxtInner}>{gblStrings.common.edit}</Text>
                            </TouchableOpacity>
                            <Text style={styles.lblLine} />
                            <TouchableOpacity onPress={this.delete}>
                                <Text style={styles.lblTxtInner}>{gblStrings.common.delete}</Text>
                            </TouchableOpacity>
                        </View>
                        ) : null
                }
            </View>
        );
    }
}

CardHeader.propTypes = {
    item: PropTypes.instanceOf(Object).isRequired,
    navigate: PropTypes.func,
    onDelete: PropTypes.func
};

CardHeader.defaultProps = {
    navigate: () => { },
    onDelete: () => { }
};

export default CardHeader;
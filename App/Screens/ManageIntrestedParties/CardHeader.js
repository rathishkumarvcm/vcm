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

    delete = () => {
        const { onDelete } = this.props;
        this.setState({ showModal: false });
        onDelete();
    }

    render() {
        const { showModal } = this.state;
        const { item } = this.props;
        return (
            <View key={item.key} style={styles.innerContainerView}>
                <View style={styles.contentContainerStyle}>
                    <View style={styles.marginTopStyle}>
                        <Text style={styles.shortContentText}>Account Type</Text>
                        <Text style={styles.shortContentValueText}>{item.account_Type}</Text>
                    </View>
                    <View style={styles.marginTopStyle}>
                        <Text style={styles.shortContentText}>Account Name</Text>
                        <Text style={styles.shortContentValueText}>{item.account_Name}</Text>
                    </View>
                    <View style={styles.marginTopStyle}>
                        <Text style={styles.shortContentText}>Account Number</Text>
                        <Text style={styles.shortContentValueText}>{item.account_Number}</Text>
                    </View>
                    <View style={styles.marginTopStyle}>
                        <Text style={styles.shortContentText}>Effective Start & End Date</Text>
                        <Text style={styles.shortContentValueText}>{`${item.startDate} - ${item.endDate}`}</Text>
                    </View>
                </View>
                <View style={styles.iconSideViewStyle}>
                    <TouchableOpacity style={styles.sideBtn} onPress={this.updateState}>
                        <GIcon name="dots-three-vertical" type="entypo" size={30} color="#56565A" />
                    </TouchableOpacity>
                    {
                        showModal ?
                            (
                                <View style={styles.shadowView}>
                                    <TouchableOpacity onPress={this.delete}>
                                        <Text style={styles.lblTxtInner}>{gblStrings.common.delete}</Text>
                                    </TouchableOpacity>
                                </View>
                            ) : null
                    }
                </View>
            </View>
        );
    }
}

CardHeader.propTypes = {
    item: PropTypes.instanceOf(Object).isRequired,
    onDelete: PropTypes.func
};

CardHeader.defaultProps = {
    onDelete: () => { }
};

export default CardHeader;
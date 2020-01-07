import React from 'react';
import { Text, View, TouchableOpacity} from 'react-native';
import PropTypes from "prop-types";
import styles from './styles';
import { CustomCheckBox } from '../../AppComponents';
import gblStrings from '../../Constants/GlobalStrings';
import AppUtils from '../../Utils/AppUtils';


const ListItem = (props) => {
    AppUtils.debugLog(`ListItem:: ${ props}`);
    const { 
        onClickItem,
        isActive,
        onClickCheckbox,
        fundName,
        minimum,
        autoInvesting,
        risk
    } = props;

    return (

        <TouchableOpacity
            onPress={onClickItem}
            activeOpacity={0.8}
            accessibilityRole="button"
            style={styles.colItem}
        >
            <View style={styles.rowHeaderItem}>
                <CustomCheckBox width="3%"
                    size={24}
                    itemBottom={0}
                    itemTop={3}

                    outerCicleColor="#707070"
                    innerCicleColor="#61285F"
                    labelStyle={{}}
                    label=""
                    selected={isActive}
                    onPress={onClickCheckbox}
                />


                <Text style={styles.lblRowtitleTxt}>
                    {fundName}
                </Text>
            </View>
            <View style={styles.rowItem}>
                <Text style={styles.lblLeftColTxt}>
                    {gblStrings.accManagement.minimum}
                </Text>
                <Text style={styles.lblRightColTxt}>
                    {minimum}
                </Text>
            </View>
            <View style={styles.rowItem}>
                <Text style={styles.lblLeftColTxt}>
                    {gblStrings.accManagement.minWithAutoInvesting}
                </Text>
                <Text style={styles.lblRightColTxt}>
                    {autoInvesting}
                </Text>
            </View>
            <View style={styles.rowItem}>
                <Text style={styles.lblLeftColTxt}>
                    {gblStrings.accManagement.risk}
                </Text>
                <Text style={styles.lblRightColTxt}>
                    {risk}
                </Text>
            </View>
        </TouchableOpacity>
    );
};
ListItem.propTypes = {
    isActive: PropTypes.bool,
    onClickItem: PropTypes.func,
    onClickCheckbox: PropTypes.func,
    fundName: PropTypes.string,
    minimum: PropTypes.string,
    autoInvesting: PropTypes.string,
    risk: PropTypes.string

};
ListItem.defaultProps = {
    isActive: false,
    onClickItem: null,
    onClickCheckbox: null,
    fundName: "",
    minimum: "",
    autoInvesting: "",
    risk: ""
};

export default ListItem;
/*
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

*/



import React from 'react';
import { View, Text, Switch, TouchableOpacity ,Image} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
// import { CustomCheckBox } from '../../AppComponents';
import gblStrings from '../../Constants/GlobalStrings';
import AppUtils from '../../Utils/AppUtils';

const switchStyle = { flase: '#DBDBDB', true: '#444444' };
const ListItem = (props) => {
    AppUtils.debugLog(`ListItem:: ${props}`);

    const {
        isActive,
        fundName,
       // minimum,
       // autoInvesting,
        minMaxInvestMonthly,
        nav,
        lastNav,
        minMax52week,
      //  risk,
       // item,
        riskImg,
        onClickCheckbox,
        onClickItem

    } = props;



    return (
        <TouchableOpacity
            onPress={onClickItem}
            activeOpacity={0.8}
            accessibilityRole="button"
            style={styles.colItem}
        >
            <View style={styles.fundItemStyle}>
                <View style={styles.fundItemTopView}>
                    <View style={styles.fundItemTitle}>
                        <Text style={styles.fundItemHeaderTxt}>{fundName}</Text>
                    </View>
                    <View style={styles.fundItemSwitch}>
                        <Switch trackColor={switchStyle}
                            onValueChange={onClickCheckbox}
                            value={isActive}
                        />
                    </View>
                </View>
                <View style={styles.lineStyle} />
                <View style={styles.fundItemContntView}>
                    <View style={styles.marginBottomStyle}>
                        <Text style={styles.fundItemValueHeading}>{gblStrings.accManagement.minMaxAmtAutoInvesting}</Text>
                        <Text style={styles.fundItemValueTxt}>{minMaxInvestMonthly}</Text>
                    </View>
                    <View style={styles.marginBottomStyle}>
                        <Text style={styles.fundItemValueHeading}>{gblStrings.accManagement.navInPercentage}</Text>
                        <Text style={styles.fundItemValueTxt}>{nav}</Text>
                    </View>
                    <View style={styles.marginBottomStyle}>
                        <Text style={styles.fundItemValueHeading}>{gblStrings.accManagement.lastNav}</Text>
                        <Text style={styles.fundItemValueTxt}>{lastNav}</Text>
                    </View>
                    <View style={styles.marginBottomStyle}>
                        <Text style={styles.fundItemValueHeading}>{gblStrings.accManagement.minMax52Week}</Text>
                        <Text style={styles.fundItemValueTxt}>{minMax52week}</Text>
                    </View>
                    <View style={styles.marginBottomStyle}>
                        <Image style={styles.riskLevelImg}
                        resizeMode="cover"
                        source={riskImg}
                        />
                        
                    </View>
                </View>
            </View>
        </TouchableOpacity>

    );
};
ListItem.propTypes = {

        isActive:PropTypes.bool,
        fundName:PropTypes.string,
        minimum:PropTypes.string,
        autoInvesting:PropTypes.string,
        minMaxInvestMonthly:PropTypes.string,
        nav:PropTypes.string,
        lastNav:PropTypes.string,
        minMax52week:PropTypes.string,
        risk:PropTypes.string,
        item:PropTypes.instanceOf(Object),
        riskImg:PropTypes.instanceOf(Object),
        onClickCheckbox:PropTypes.func,
        onClickItem:PropTypes.func,

};
ListItem.defaultProps = {



    isActive:false,
    fundName:"",
    minimum:"",
    autoInvesting:"",
    minMaxInvestMonthly:"",
    nav:"",
    lastNav:"",
    minMax52week:"",
    risk:"",
    item:{},
    riskImg:{},
    onClickCheckbox:null,
    onClickItem:null,
};

export default ListItem;


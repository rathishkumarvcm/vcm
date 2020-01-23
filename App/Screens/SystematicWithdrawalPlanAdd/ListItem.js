import React from 'react';
import { View, Text, Switch } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const switchStyle={ flase: '#DBDBDB', true: '#444444' };
const ListItem = (props) => {
    // AppUtils.debugLog(`ListItem:: ${props}`);
    const{onClickCheckbox,isActive,minimum,fundName} = props;

    return (

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
                        <Text style={styles.fundItemValueHeading}>Min. / Max. Amount</Text>
                        <Text style={styles.fundItemValueTxt}>{minimum}/ $ 5000</Text>
                </View>
                    <View style={styles.marginBottomStyle}>
                        <Text style={styles.fundItemValueHeading}>NAV in %</Text>
                        <Text style={styles.fundItemValueTxt}>14.3</Text>
                    </View>
                    <View style={styles.marginBottomStyle}>
                        <Text style={styles.fundItemValueHeading}>Last NAV (Previous day close)</Text>
                        <Text style={styles.fundItemValueTxt}>$ 143</Text>
                    </View>
                    <View style={styles.marginBottomStyle}>
                        <Text style={styles.fundItemValueHeading}>52 week Min. / Max. Values</Text>
                        <Text style={styles.fundItemValueTxt}>$ 3000 / $ 5000</Text>
                    </View>
                </View>
        </View>
    );
};
ListItem.propTypes = {
    isActive: PropTypes.bool,
    // onClickItem: PropTypes.func,
    onClickCheckbox: PropTypes.func,
    fundName: PropTypes.string,
    minimum: PropTypes.string,
    // autoInvesting: PropTypes.string,
    // risk: PropTypes.string

};
ListItem.defaultProps = {
    isActive: false,
    // onClickItem: null,
    onClickCheckbox: null,
    fundName: "",
    minimum: "",
   // autoInvesting: "",
    // risk: ""
};

export default ListItem;
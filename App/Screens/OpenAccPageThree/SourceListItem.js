import React from 'react';
import { Text, View, TouchableOpacity,Image} from 'react-native';
import PropTypes from "prop-types";
import styles from './styles';
import AppUtils from '../../Utils/AppUtils';



const SourceListItem = (props) => {
    AppUtils.debugLog(`SourceListItem:: ${JSON.stringify(props)}`);
    const { 
        onPress,
        style,
        img,
        sourceName
       
    } = props;
    return (

        <TouchableOpacity
            onPress={onPress}
            activeOpacity={0.8}
            accessibilityRole="button"
            style={styles.touchItem}

        >
           
            <View style={style}>
                <View style={styles.accountItemImgBG}>
                    <Image style={styles.accountItemImg}
                        resizeMode="contain"
                        source={img}
                    />
                </View>
                <Text style={styles.accountItemTxt}>
                    {sourceName}
                </Text>
            </View>
        </TouchableOpacity>
    );
};
SourceListItem.propTypes = {
    onPress: PropTypes.func,
    sourceName: PropTypes.string,
    img: PropTypes.number,
    style: PropTypes.instanceOf(Object)

};
SourceListItem.defaultProps = {
    sourceName:"",
    onPress: null,
    img: 0,
    style: {}
   
};

export default SourceListItem;
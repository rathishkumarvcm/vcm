import React from "react";
import { Text, StyleSheet, View } from "react-native";
import PropTypes from "prop-types";

import { scaledHeight } from '../Utils/Resolution';

const styles = StyleSheet.create({
flatListView : {
    alignItems:'center', 
    borderWidth:1,
    height:scaledHeight(30),
    justifyContent:'center',
    width : '48%'
}
});

export const GFlatListView = (props) => {
    const {displayData} = props;
return(
    <View style={styles.flatListView}>
        <Text>
            {displayData}
        </Text>
    </View>
);
};

GFlatListView.propTypes = {
    displayData : PropTypes.string
};

GFlatListView.defaultProps = {
    displayData:""
};

export default GFlatListView;
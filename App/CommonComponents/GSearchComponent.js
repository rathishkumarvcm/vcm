import React from "react";
import { Text, StyleSheet, View , FlatList} from "react-native";
import PropTypes from "prop-types";
import { scaledHeight } from '../Utils/Resolution';


const styles = StyleSheet.create({
    container : {
        height: scaledHeight(200)
    }
});



export const GSearchComponent = (props) => (

            <View>
              {props.noData ? <View>
                <Text>
                  {"No Data Available"}
                </Text>
                              </View> :
                <View style={styles.container}>
                <FlatList 
                data={props.data}
                keyExtractor={props.keyExtractor}
                renderItem={props.updateFlatList}
                onScroll={props.onScroll} 
                />
                </View>}
            </View>
);

GSearchComponent.propTypes = {
    displayData : PropTypes.string,
    renderItem : PropTypes.func,
    onScroll : PropTypes.func,
    noData : PropTypes.bool,
    data : PropTypes.instanceOf(Array),
    keyExtractor :PropTypes.function,
    updateFlatList : PropTypes.func 
   
};

GSearchComponent.defaultProps = {
    renderItem: null,
    onScroll : null,
    noData : false,
    data : []

};

export default GSearchComponent;
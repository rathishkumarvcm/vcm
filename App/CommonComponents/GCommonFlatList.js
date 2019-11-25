import React from "react";
import { Text, StyleSheet, View , FlatList} from "react-native";
import PropTypes from "prop-types";
import { scaledHeight } from '../Utils/Resolution';

const styles = StyleSheet.create({
    flatListView : {
        borderWidth:1, 
        width : '48%',
        justifyContent:'center',
        alignItems:'center',
        height:scaledHeight(30)
    },
    container:{
        flex:1,
        marginLeft:'2%',
        marginTop :'10%'
    },
    headertext:{
        fontSize:20,
        marginBottom:'2%'
    }
});

const newLocal = (item) => item.type;

export const GCommonFlatListView = (props) => (
    <View style={styles.container}>
        <Text style={styles.headertext}>
            {"Flat List View with Two Column Section"}
        </Text>
        <FlatList 
            data={props.data}
            renderItem={props.updateFlatList}
            keyExtractor={newLocal}
            horizontal={props.horizontal}
            numColumns={props.numColumns}
            initialNumToRender={props.initialNumToRender}
            onEndReached={props.onEndReached}
            onEndReachedThreshold={props.onEndReachedThreshold}
            //inverted={props.inverted}
            initialScrollIndex={props.initialScrollIndex}
            ListFooterComponent={props.ListFooterComponent}
            ListHeaderComponent={props.ListHeaderComponent}
            // key={data.names}
        />
    </View>
);

GCommonFlatListView.propTypes = {
    displayData : PropTypes.string,
    renderItem : PropTypes.func,
    onEndReached : PropTypes.func,
    initialScrollIndex : PropTypes.number,
    inverted : PropTypes.number,
    onEndReachedThreshold : PropTypes.number,
    initialNumToRender : PropTypes.number,
    numColumns : PropTypes.number,
    horizontal : PropTypes.bool,
    ListHeaderComponent : PropTypes.func,
    ListFooterComponent : PropTypes.func,
    updateFlatList : PropTypes.func,
    data : PropTypes.instanceOf(Array)
};

GCommonFlatListView.defaultProps = {
    renderItem: null,
    onEndReached : null,
    ListHeaderComponent : null,
    ListFooterComponent : null,
    initialScrollIndex : 0,
    inverted : 0,
    onEndReachedThreshold : 0.5,
    initialNumToRender : 10,
    numColumns : 1,
    horizontal : false

};

export default GCommonFlatListView;
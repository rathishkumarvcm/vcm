import React from "react";
import { Text, StyleSheet, View , FlatList} from "react-native";
import PropTypes from "prop-types";

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginLeft:'2%',
        marginTop :'10%'
    },
    // flatListView : {
    //     alignItems:'center', 
    //     borderWidth:1,
    //     height:scaledHeight(30),
    //     justifyContent:'center',
    //     width : '48%'
    // },
    headertext:{
        fontSize:20,
        marginBottom:'2%'
    }
});

const newLocal = (item) => item.type;

export const GCommonFlatListView = (props) =>{
    const {data,updateFlatList,horizontal,numColumns,initialNumToRender,onEndReached,onEndReachedThreshold,initialScrollIndex,ListFooterComponent,ListHeaderComponent} = props;
return (
    <View style={styles.container}>
        <Text style={styles.headertext}>
            Flat List View with Two Column Section
        </Text>
        <FlatList 
            data={data}
            renderItem={updateFlatList}
            keyExtractor={newLocal}
            horizontal={horizontal}
            numColumns={numColumns}
            initialNumToRender={initialNumToRender}
            onEndReached={onEndReached}
            onEndReachedThreshold={onEndReachedThreshold}
            // inverted={props.inverted}
            initialScrollIndex={initialScrollIndex}
            ListFooterComponent={ListFooterComponent}
            ListHeaderComponent={ListHeaderComponent}
            //  key={data.names}
        />
    </View>    
);
};

GCommonFlatListView.propTypes = {
    // displayData : PropTypes.string,
    // renderItem : PropTypes.func,
    onEndReached : PropTypes.func,
    initialScrollIndex : PropTypes.number,
   // inverted : PropTypes.number,
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
    // renderItem: null,
    onEndReached : null,
    ListHeaderComponent : null,
    ListFooterComponent : null,
    updateFlatList : null,
    initialScrollIndex : 0,
    data:[],
    // inverted : 0,
    onEndReachedThreshold : 0.5,
    initialNumToRender : 10,
    numColumns : 1,
    horizontal : false

};

export default GCommonFlatListView;
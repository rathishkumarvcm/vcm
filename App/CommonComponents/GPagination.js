import React from "react";
import { Text, StyleSheet, View, FlatList, Button } from "react-native";
import PropTypes from "prop-types";

const styles = StyleSheet.create({
    headertext: {
        fontSize: 20,
        marginBottom: '2%'
    },
    viewContainer:{ 
        flexDirection: 'row', 
        justifyContent: 'center'
     }
});


const newLocal = (item) => item.type;
export const GPagination = (props) => {
    const { data, updateFlatList, horizontal, numColumns, initialNumToRender,
        onEndReached, onEndReachedThreshold, initialScrollIndex, ListFooterComponent,
        ListHeaderComponent, onScroll,} = props;
    return (
        <View style={styles.container}>
            <Text style={styles.headertext}>
                Pagination (or) Swiper Component:
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
                pagingEnabled
                onScroll={onScroll}
            //  key={data.names}
            />
            <View style={styles.viewContainer}>
                {data.map((newitems, index) =>
                    index === props.pageNumber ? (
                        <Button
                            title="o"
                            color="black"
                        />
                    ) : (
                            <Button
                                title="o"
                            />
                        )
                )}
            </View>
        </View>
    );
};

GPagination.propTypes = {
    // displayData: PropTypes.string,
    // renderItem: PropTypes.func,
    onEndReached: PropTypes.func,
    initialScrollIndex: PropTypes.number,
    // inverted: PropTypes.number,
    onEndReachedThreshold: PropTypes.number,
    initialNumToRender: PropTypes.number,
    numColumns: PropTypes.number,
    horizontal: PropTypes.bool,
    ListHeaderComponent: PropTypes.func,
    ListFooterComponent: PropTypes.func,
    onScroll: PropTypes.onScroll,
    updateFlatList: PropTypes.func,
   // keyExtractor: PropTypes.func,
    data: PropTypes.instanceOf(Array),
    pageNumber: PropTypes.number
};

GPagination.defaultProps = {
   // renderItem: null,
    onEndReached: () => { },
    ListHeaderComponent: null,
    ListFooterComponent: null,
    initialScrollIndex: 0,
    // inverted: 0,
    onEndReachedThreshold: 0.5,
    initialNumToRender: 10,
    numColumns: 1,
    horizontal: false,
    onScroll: null,
    updateFlatList:() => { },
    pageNumber:0


};

export default GPagination;
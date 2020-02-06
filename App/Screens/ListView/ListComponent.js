import React, { Component } from 'react';
import { View , Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { GCommonFlatList, GFlatListView ,GButtonComponent} from '../../CommonComponents';
import { scaledHeight } from '../../Utils/Resolution';

const styles = StyleSheet.create({
    buttonStyle:{
        alignItems:'center',
            backgroundColor:"#06748C",
            borderRadius:scaledHeight(5),
            height:scaledHeight(40),
            justifyContent: "center",
            marginLeft:scaledHeight(10),
            marginTop:scaledHeight(40),
            width:'90%'
            
        },
    buttonTextStyle:{
            fontSize: scaledHeight(14),
            fontWeight: "bold",
            lineHeight:scaledHeight(20)
        },
        header:{
        alignItems:'center',
        backgroundColor:'green',
        borderWidth:2,
        flex:1,
        flexDirection:'row',
        height:40,
        justifyContent:'center',
        width:'96%'
    }
});

const listData = [
{id:1,type:'Tree1',names:'Plant A Tree'},
{id:2,type:'plant1',names:'Much needed'},
{id:1,type:'Tree2',names:'Plant A Tree'},
{id:2,type:'plant2',names:'Much needed'},
{id:1,type:'Tree3',names:'Plant A Tree'},
{id:2,type:'plant3',names:'Much needed'},
{id:1,type:'Tree4',names:'Plant A Tree'},
{id:2,type:'plant4',names:'Much needed'},
{id:1,type:'Tree5',names:'Plant A Tree'},
{id:2,type:'plant5',names:'Much needed'},
{id:1,type:'Tree6',names:'Plant A Tree'},
{id:2,type:'plant6',names:'Much needed'},
{id:1,type:'Tree7',names:'Plant A Tree'},
{id:2,type:'plant7',names:'Much needed'},
{id:1,type:'Tree8',names:'Plant A Tree'},
{id:2,type:'plant8',names:'Much needed'},
{id:1,type:'Tree9',names:'Plant A Tree'},
{id:2,type:'plant9',names:'Much needed'},
{id:1,type:'Tree10',names:'Plant A Tree'},
{id:2,type:'plant11',names:'Much needed'},
{id:1,type:'Tree11',names:'Plant A Tree'},
{id:2,type:'plant12',names:'Much needed'},
{id:1,type:'Tree12',names:'Plant A Tree'},
{id:2,type:'plant14',names:'Much needed'},
{id:1,type:'Tree13',names:'Plant A Tree'},
{id:2,type:'plant15',names:'Much needed'},
{id:1,type:'Tree14',names:'Plant A Tree'},
{id:2,type:'plant16',names:'Much needed'},
{id:1,type:'Tree15',names:'Plant A Tree'},
{id:2,type:'plant17',names:'Much needed'},
{id:1,type:'Tree16',names:'Plant A Tree'},
{id:2,type:'plant18',names:'Much needed'},
{id:1,type:'Tree17',names:'Plant A Tree'},
{id:2,type:'plant19',names:'Much needed'},
{id:1,type:'Tree18',names:'Plant A Tree'},
{id:2,type:'plant21',names:'Much needed'},
{id:1,type:'Tree19',names:'Plant A Tree'},
{id:2,type:'plant22',names:'Much needed'}];

class ListComponent extends Component {
    constructor(props){
        super(props);
        this.state = {

        };
    }

    updateFlatList = ({item}) => {
        return(
           <GFlatListView 
                displayData={item.names} 
                testData={item.id}
           />
        );
    }
    
    onEndReachedFunction = () => {
        // alert("End Reached");
    }

    renderHeader = () => {
        return (
        <View style={styles.header}>
          <Text> This is Header </Text>
        </View>
      );

    }
    
    renderFooter = () => {
        return (
            <View style={styles.header}>
              <Text> This is Footer </Text>
            </View>
          );
    }

    goBack = ()=>{
        const {navigation} = this.props;
        navigation.goBack();
    }
   
    render(){
        return (
            <>
        <GButtonComponent 
            buttonStyle={styles.buttonStyle} 
            textStyle={styles.buttonTextStyle}
            buttonText= "Back"
            onPress={this.goBack}
        />
            <GCommonFlatList 
                data={listData}
                numColumns={2}
                inverted={-1}
                initialNumToRender={10}
                initialScrollIndex={20}
                // horizontal
                updateFlatList={this.updateFlatList}
                onEndReached={this.onEndReachedFunction}
                onEndReachedThreshold={0.1}
                ListHeaderComponent={this.renderHeader}
                ListFooterComponent={this.renderFooter}
            />   
            </>
           
        );
    }
}



ListComponent.propTypes = {
    navigation : PropTypes.instanceOf(Object)
  };
  
  ListComponent.defaultProps = {
    navigation : {}
 
  };

export default ListComponent;

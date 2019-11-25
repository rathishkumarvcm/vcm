import React, { Component } from 'react';
import { View , Text, Dimensions} from 'react-native';
import { GPagination,GButtonComponent } from '../../CommonComponents';
import { StyleSheet } from "react-native";
import { scaledHeight } from '../../Utils/Resolution';
import PropTypes from 'prop-types';


const {width} = Dimensions.get('window');

const data = [
    {
      id: 1,
      text: 'Page 1 in Development',
    },
    {
      id: 2,
      text: 'Page 2 in Development',
    },
    {
      id: 3,
      text: 'Page 3 in Development'
    },
    {
      id : 4,
      text : "For Testing"
    }
  ];
const styles = StyleSheet.create({
    pageScroll:{
        width: width,
        height:400,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#6B8E23'
    },
    buttonStyle:{
      height:scaledHeight(40),
      width:'90%',
      justifyContent: "center",
      alignItems:'center',
      borderRadius:scaledHeight(5),
      backgroundColor:"#06748C",
      marginTop:scaledHeight(30),
      marginLeft:scaledHeight(10)
      
  },
  buttonTextStyle:{
      fontSize: scaledHeight(14),
      fontWeight: "bold",
      lineHeight:scaledHeight(20),
  }
});


class PaginationComponent extends Component {
    constructor(props){
        super(props);
        this.state={
            pageNumber : 0
        };
    }

    updateFlatList = ({ item}) => {
        return(<View key={item.id} 
            style={styles.pageScroll}
               >
            <Text>{item.text}</Text>
               </View>
        );
    }

    onScrollEnd(e) {
        let contentOffset = e.nativeEvent.contentOffset;
        let viewSize = e.nativeEvent.layoutMeasurement;
    
        // Divide the horizontal offset by the width of the view to see which page is visible
        let pageNum = Math.floor(contentOffset.x / viewSize.width);
        this.setState({
          pageNumber : pageNum
        });
      }
    
    goBack = ()=>this.props.navigation.goBack();
    
    render(){
        return (
        <>
          <GButtonComponent 
          buttonStyle={styles.buttonStyle} 
          textStyle={styles.buttonTextStyle}
          buttonText= {"Back"}
          onPress={this.goBack}
          />
            <GPagination 
            updateFlatList={this.updateFlatList} 
            horizontal 
            data={data} 
            onScroll={(e) => this.onScrollEnd(e)}  
            pageNumber={this.state.pageNumber} 
            />
        </>
        );
    }
}




PaginationComponent.propTypes = {
    navigation : PropTypes.instanceOf(Object)
  };
  
  PaginationComponent.defaultProps = {
 
  };


export default PaginationComponent;

import React, { Component } from 'react';
import { View , Text, Dimensions, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import { GPagination,GButtonComponent } from '../../CommonComponents';
import { scaledHeight } from '../../Utils/Resolution';


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
    buttonStyle:{
      alignItems:'center',
      backgroundColor:"#06748C",
      borderRadius:scaledHeight(5),
      height:scaledHeight(40),
      justifyContent: "center",
      marginLeft:scaledHeight(10),
      marginTop:scaledHeight(30),
      width:'90%'
      
  },
    buttonTextStyle:{
      fontSize: scaledHeight(14),
      fontWeight: "bold",
      lineHeight:scaledHeight(20),
  },
  pageScroll:{
        alignItems:'center',
        backgroundColor:'#6B8E23',
        height:400,
        justifyContent:'center',
        width
    }
});


class PaginationComponent extends Component {
    constructor(props){
        super(props);
        this.state={
            pageNumber : 0
        };
    }



    onScrollEnd(e) {
        const {contentOffset} = e.nativeEvent;
        const viewSize = e.nativeEvent.layoutMeasurement;
    
        //  Divide the horizontal offset by the width of the view to see which page is visible
        const pageNum = Math.floor(contentOffset.x / viewSize.width);
        this.setState({
          pageNumber : pageNum
        });
      }

      updateFlatList = ({ item}) => {
        return(
<View key={item.id} 
            style={styles.pageScroll}
>
            <Text>{item.text}</Text>
</View>
        );
    }
    
    goBack = ()=>{
      const {navigation} = this.props;
      navigation.goBack();
    }
    
    render(){
      const {pageNumber} = this.state;
        return (
        <>
          <GButtonComponent 
          buttonStyle={styles.buttonStyle} 
          textStyle={styles.buttonTextStyle}
          buttonText= "Back"
          onPress={this.goBack}
          />
            <GPagination 
            updateFlatList={this.updateFlatList} 
            horizontal 
            data={data} 
            pageNumber={pageNumber} 
            />
        </>
        );
    }
}




PaginationComponent.propTypes = {
    navigation : PropTypes.instanceOf(Object)
  };
  
  PaginationComponent.defaultProps = {
    navigation : {}
 
  };


export default PaginationComponent;

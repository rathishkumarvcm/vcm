import React from 'react';
import { View,TouchableOpacity,Text,FlatList} from 'react-native';
import PropTypes from "prop-types";
import styles from './styles';
// import { GFlatListView } from '../../CommonComponents';



const GuestUserNewsAndCommentary = (props) => {   

    return (
        <View>
            <FlatList
                data={props.data}
                renderItem={this.updateDataList}
                keyExtractor={item => item.title}
            />
        </View>
    );

};

updateDataList = ({ item }) => {
    console.log('item',item);
    
    return (
        <View>
            <TouchableOpacity>
                <Text> {item.title} </Text>
            </TouchableOpacity>
        </View>
    
    );
  }


GuestUserNewsAndCommentary.propTypes = {
    onPress: PropTypes.func
  };
  
  GuestUserNewsAndCommentary.defaultProps = {
    onPress: PropTypes.func
  };

export default GuestUserNewsAndCommentary;
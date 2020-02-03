import React, { Component } from 'react';
import { TextInput, View , Text, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import { GSearchComponent,GButtonComponent } from '../../CommonComponents';
import { scaledHeight } from '../../Utils/Resolution';

const promiseCall = new Promise(function(resolve) {
    setTimeout(function() {
     const nData = [
        {id: 1,text: 'One'},{id: 2,text: 'Two'},
        {id: 3,text: 'Three'},{id : 4,text : "Four"},
        {id : 5,text : "Five"},{id : 6,text : "Six"},
        {id : 7,text : "Seven"},{id : 8,text : "Eight"},
        {id : 9,text : "Nine"},{id : 10,text : "Ten"}
      ];
      resolve(nData);
    }, 5000);
  });

const data = [{id: 1,text: 'One'},{id: 2,text: 'Two'},{id: 3,text: 'Three'},{id : 4,text : "Four"}];
const newData = [{id: 1,text: 'One'},{id: 2,text: 'Two'},{id: 3,text: 'Three'},{id : 4,text : "Four"},{id : 5,text : "Five"},{id : 6,text : "Six"},{id : 7,text : "Seven"},{id : 8,text : "Eight"},{id : 9,text : "Nine"},{id : 10,text : "Ten"}];

const styles = StyleSheet.create({
  buttonStyle:{
    alignItems:'center',
    backgroundColor:"#06748C",
    borderRadius:scaledHeight(5),
    height:scaledHeight(40),
    justifyContent: "center",
    marginLeft:scaledHeight(10),
    marginTop:scaledHeight(20),
    width:'90%'
    
},
  buttonTextStyle:{
    fontSize: scaledHeight(14),
    fontWeight: "bold",
    lineHeight:scaledHeight(20),
},
  container : {
    height:scaledHeight(50),
    width:'100%'
  },
  listArea :{
    alignItems:'center',
    backgroundColor:'#6B8E23',
    height:scaledHeight(30),
    justifyContent:'center',
    width: '100%'
  },
textArea:{
    borderBottomWidth :1,
    marginTop:'10%',
    width:'90%'
  },
});

 
class SearchComponent extends Component {

    constructor(props){
        super(props);
        this.state={
            promiseVal : '',
            flatListData : data,
            loading:false,
            noData : false
        };
    }
      
    promiseCalled = () => {
      const appendArray=[];
        this.state.flatListData.map((item) => {
            if(item.text.search(this.state.promiseVal) != -1){
                appendArray.push(item);
            }
        });

        if(appendArray.length > 0){
          this.setState({
            flatListData : appendArray,
            noData : false
        });
        }
        else{
          this.setState({
            // flatListData : [],
            noData:true
        });
        }
    }

    onScrollEnd() {
      if(!this.state.loading){
        promiseCall.then((value)=>{
          alert("List is going to update with new data");
           this.setState({flatListData : value,loading:true},()=>{
             console.log(this.state.flatListData);
           });
       });
      }
    }

    onChangeMethod = (text) =>{
      if(text == ''){
        this.setState({
          flatListData : newData,
          noData : false,
        //   loading : false
        });
      }
      this.setState({promiseVal:text});
    }

    keyExtractor = item => item.id.toString();

    updateFlatList({ item}) {
        return (
          <View key={item.id} 
            style={styles.listArea}
          >
            <Text>{item.text}</Text>
          </View>
        );
      }

    goback = ()=>this.props.navigation.goBack();

    render(){
        return(
          <View style={styles.container}>
            <GButtonComponent 
                // disabled
                buttonStyle={styles.buttonStyle} 
                textStyle={styles.buttonTextStyle}
                buttonText= "Back"
                onPress={this.goback}
            />
          <Text style={{fontSize:20,marginTop:'2%',
        marginBottom:'2%',
        height:30,
        color:'green'}}
          >
                        Search Component:
          </Text>
          <TextInput style={styles.textArea}
          onChangeText={(text) => this.onChangeMethod(text)}
          value={this.state.promiseVal}
          onBlur={this.promiseCalled}
          />
          <TextInput />
            <GSearchComponent data={this.state.flatListData} onScroll={(e) => this.onScrollEnd(e)} updateFlatList={this.updateFlatList} noData={this.state.noData} />
          </View>
        );
    }
}

SearchComponent.propTypes = {
    navigation : PropTypes.instanceOf(Object)
  };
  
  SearchComponent.defaultProps = {
 
  };


export default SearchComponent;
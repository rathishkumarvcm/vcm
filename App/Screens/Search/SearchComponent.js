import React, { Component } from 'react';
import { TextInput, View , Text, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import { GSearchComponent,GButtonComponent } from '../../CommonComponents';
import { scaledHeight } from '../../Utils/Resolution';



/*
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
  */

const setTimeout = (resolve) => {
  const nData = [
    { id: 1, text: 'One' }, { id: 2, text: 'Two' },
    { id: 3, text: 'Three' }, { id: 4, text: "Four" },
    { id: 5, text: "Five" }, { id: 6, text: "Six" },
    { id: 7, text: "Seven" }, { id: 8, text: "Eight" },
    { id: 9, text: "Nine" }, { id: 10, text: "Ten" }
  ];
  resolve(nData);
};
const promisCallBack = (resolve) => {
  setTimeout(resolve);
};

const promiseCall = new Promise(promisCallBack, 5000);




const data = [{id: 1,text: 'One1'},{id: 2,text: 'Two'},{id: 3,text: 'Three'},{id : 4,text : "Four"}];
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
      

    onScrollEnd() {
      const {loading} = this.state;
      if(!loading){
        promiseCall.then((value)=>{
           this.setState({flatListData : value,loading:true},()=>{
           });
       });
      }
    } 
    
    promiseCalled = () => {
      const {flatListData,promiseVal} = this.state;
      const appendArray=[];
        flatListData.map((item) => {
            if(item.text.search(promiseVal) !== -1){
                appendArray.push(item);
            }
            return appendArray;
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



    onChangeMethod = (text) =>{
      if(text === ''){
        this.setState({
          flatListData : newData,
          noData : false,
        //   loading : false
        });
      }
      this.setState({promiseVal:text});
    }

    keyExtractor = item => item.id.toString();

    goback = ()=>{
      const {navigation} = this.props;
      navigation.goBack();
    }

    updatedFlatList = ({item}) =>{
      return (
        <View key={item.id} 
          style={styles.listArea}
        >
          <Text>{item.text}</Text>
        </View>
      );
    }


    render(){
      const {flatListData,promiseVal,noData} = this.state;
        return(
          <View style={styles.container}>
            <GButtonComponent 
                // disabled
                buttonStyle={styles.buttonStyle} 
                textStyle={styles.buttonTextStyle}
                buttonText= "Back"
                onPress={this.goback}
            />
          <Text>
                        Search Component:
          </Text>
          <TextInput style={styles.textArea}
          // onChangeText={(text) => this.onChangeMethod(text)}
          value={promiseVal}
          onBlur={this.promiseCalled}
          />
          <TextInput />
            <GSearchComponent data={flatListData} updateFlatList={this.updatedFlatList} noData={noData} />
          </View>
        );
    }
}

SearchComponent.propTypes = {
    navigation : PropTypes.instanceOf(Object)
  };
  
  SearchComponent.defaultProps = {
    navigation : {}
 
  };


export default SearchComponent;
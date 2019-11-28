/* global require */
import React, { Component } from 'react';
import { View , StyleSheet, TouchableOpacity, Text,Dimensions,Image,FlatList,Modal} from 'react-native';
import {GIcon} from './GIcon';
import { scaledHeight, scaledWidth} from '../Utils/Resolution';
import PropTypes from "prop-types";

const {width} = Dimensions.get('window');


const newData = [
    {
      naviagteTo: 'profilePreference',
      title: 'Home',
    },
    {
      naviagteTo:'generalSettings',
      title: 'Settings',
    },
    {
      naviagteTo:'profileSettings',
      title: 'Profile',
    },
    {
      naviagteTo:'deliverySettings',
      title: 'Delivery',
    },
    {
        naviagteTo:'marketingandPrivacySettings',
        title: 'Marketing and Privacy',
      },
      {
        naviagteTo:'automaticInvestment',
        title: 'Automatic Investment Plan',
      },
      // {
      //   naviagteTo:'systematicWithdrawal',
      //   title: 'Systamatic Withdrawal Plan',
      // },
      {
          //navigateTo:'Logout'
          title: 'Sign Out',
      }
  ];

 const styles = StyleSheet.create({
    loginHeader:{
        flex:.12,
        flexDirection:'row',
        backgroundColor:'#FFFFFF',
        paddingLeft:'4%',
        paddingRight:'4%',
        width:'100%'
    },
    registernowButton:{
       borderColor:'#61285F',
       borderWidth:1,
       width:width/3.3,
       borderRadius:scaledHeight(14),
       height:scaledHeight(28),
       backgroundColor:'#FFFFFF',
       alignItems:'center',
       justifyContent:'center'
    },
    registernowText:{
        fontSize:scaledHeight(10),
        color:'#56565A'
    },
    modalView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F7FAFF',
      },
      modalInsideView: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F7FAFF',
        height: "100%",
        width: "100%",
       
      },
      modalRedColorText: {
         marginTop: 10
      },
      modalGreenColorText: {
         marginTop: 10
      },
      modalImage: {
        width: 30, height: 30, marginTop: 20
      },
      signIntext:{
        textAlign: 'left',
        fontSize: scaledHeight(25),
        color: '#535353',
        flexWrap: 'wrap',
    }
});

class GHeaderComponent extends Component {
    constructor(props){
        super(props);
        //set true to isLoading if data for this screen yet to be received and wanted to show loader.
        this.state={
            menuList:false,
            SignOut:false,
            ModalVisibleStatus: true,
        };
    }
    showModal = () => {
        this.setState({
          ModalVisibleStatus: true,
         
        });
        setTimeout(() => {
          this.setState({
            ModalVisibleStatus: false,
            SignOut:false
          });
          }, 1000);
          this.props.navigation.navigate('login'); 
      }
    
    
    headerClicked = ()=>this.props.navigation.navigate('login');

    setMenu = ()=>{this.setState({menuList : !this.state.menuList});}

    navigateProfile = ()=>this.props.navigation.navigate('profileSettings')

    
    
    updateDataList = ({ item }) => 
    {
    return (<TouchableOpacity 
        style={{
            height:scaledHeight(50),
            borderBottomWidth:1,
            borderColor : "#DEDEDF",
            justifyContent:'center'}
        } 
        onPress={this.newMethod(item)}
            >
        <Text> {item.title} </Text>
            </TouchableOpacity>);
    }

    newMethod(item) {

        return () => {
            if(item.title=="SignOut")
            {  
                this.setState({SignOut:true});
                this.showModal();
                
            }
            else{
            this.props.navigation.navigate(item.naviagteTo);}};
    }

    render(){
        
        return (
    
   <>
        {this.props.register ?  
         <TouchableOpacity style={styles.loginHeader}>
            <TouchableOpacity 
             style={{width:scaledWidth(100)}} 
             onPress={this.headerClicked}
            >
            <Image style={{width:'100%',height:scaledHeight(100),alignItems:'flex-start'}}
               resizeMode="contain" 
                source={require("../Images/logo.png")} 
            />
            </TouchableOpacity>
             
        <View style={{width:'60%'}} />

        <TouchableOpacity style={{alignItems:'flex-end',marginTop:scaledHeight(25),justifyContent:'center'}}>
                    <GIcon 
                        name="typing"
                        type="entypo"
                        size={50}
                        color="grey"
                    />
        </TouchableOpacity>
         </TouchableOpacity>
        
        
        :
        <>
        <TouchableOpacity style={styles.loginHeader}>
            <TouchableOpacity style={{width:'25%',height:scaledWidth(50)}}
            onPress={this.headerClicked}
            >
            <Image style={{width:'100%',alignItems:'flex-start',justifyContent:'flex-start'}}
         resizeMode="contain" 
         source={require("../Images/logo.png")}
            />
            </TouchableOpacity>
            
        <View style={{width:'15%'}} />

        <TouchableOpacity style={{alignItems:'center',justifyContent:'center',marginTop:scaledHeight(15)}}
        onPress={this.setMenu}
        >
                    <GIcon 
                        name="user"
                        type="evilicon"
                        size={40}
                        color="black"
                    />
        </TouchableOpacity>

        <View style={{width:'20%'}} />

        <TouchableOpacity style={{alignItems:'center',justifyContent:'center'}}>
                    <GIcon 
                        name="ios-search"
                        type="ionicon"
                        size={30}
                        color="black"
                    />
        </TouchableOpacity>

        <TouchableOpacity style={{alignItems:'flex-end',justifyContent:'center'}}>
                    <GIcon 
                        name="menu"
                        type="material"
                        size={40}
                        color="black"
                    />
        </TouchableOpacity>
        </TouchableOpacity>
        {this.state.menuList && 
            <TouchableOpacity 
            onPress={this.navigateProfile}
            style={{height:scaledHeight(250),marginTop:scaledHeight(85),zIndex: 2,position:'absolute',borderWidth:1,width:'100%',borderColor : "#DEDEDF",backgroundColor:'white'}}
            >
                <FlatList
                    data={newData}
                    renderItem={this.updateDataList}
                    keyExtractor={item => item.title}
                />
                { this.state.SignOut ?
             (
             <Modal
                transparent={true}
                visible={this.state.ModalVisibleStatus}>
                <View style={styles.modalView}>
                  <View style={styles.modalInsideView}>
                    <Text style={styles.signIntext}>Signing Out </Text>
                    <Image source={require('../Images/logo.png')} style={styles.modalImage} ></Image>
                  </View>
                </View>
              </Modal>):null
                }
            </TouchableOpacity> }
            
        </>
        
        
        
        }
        
     
   </>
    );
}
}
GHeaderComponent.propTypes = {
    register: PropTypes.bool,
    navigation : PropTypes.instanceOf(Object)
  };
  
  GHeaderComponent.defaultProps = {
 
  };

export default GHeaderComponent;


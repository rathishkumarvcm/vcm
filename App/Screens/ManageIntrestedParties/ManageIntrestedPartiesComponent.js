import React, { Component } from 'react';
import { Text, View, ScrollView ,TouchableOpacity, FlatList } from 'react-native';
import { styles } from './styles';
import { GIcon, GHeaderComponent, GFooterComponent } from '../../CommonComponents';
import gblStrings from '../../Constants/GlobalStrings';
import PropTypes from "prop-types";
import CardHeader from './CardHeader';


class manageIntrestedPartiesComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isSavedSuccess:false,
            isCollapsable:false,
            collapseIcon:"-",
            showModal:true
        };
    }
   
    componentDidMount() {
       
    }

    addIntrestedParty=(data)=>()=>{
        this.props.navigation.navigate("addIntrestedParties",{acc_Data:data});
    }

    onClickEdit=(data,key)=>()=>()=>{
        console.log("edit Data::::",data,key);
       // this.props.navigation.navigate("editIntrestedParty",{acc_Data:data, acc_Data_key:key});
    }

    renderIntrestedParties=({item})=>{
        return(
            <View style={styles.innerContainerView}>
                <CardHeader item={item} navigate={this.onClickEdit(item.key)} />
                <View style={[styles.paddingStyleLeft,styles.marginBottomStyle]}>
                    <View style={styles.marginTopStyle}>
                        <Text style={styles.shortContentText}>{gblStrings.accManagement.name}</Text>
                        <Text style={styles.beneNameStyle}>{item.fname+" "+item.mname+" "+item.lname}</Text>
                    </View>
                    <View style={styles.marginTopStyle}>
                        <Text style={styles.shortContentText}>{gblStrings.accManagement.relationToAccountHolder}</Text>
                        <Text style={styles.shortContentValueText}>{item.relationship_To_Account_holder}</Text>
                    </View>
                    <View style={styles.marginTopStyle}>
                    <Text style={styles.shortContentText}>{gblStrings.accManagement.noOfAccTagged}</Text>
                        <Text style={styles.shortContentValueText}>{"#"+item.accounts_Tagged}</Text>
                    </View>
                </View>
            </View>
        );
    }

    renderData=({item})=>{
        return(
            <View style={styles.blockMarginTop}>
              <View style={styles.titleHeadingView}>
                <Text style={[styles.titleHeaderText,styles.paddingHorizontalStyle]}>{this.state.collapseIcon}</Text>
                <Text style={styles.titleHeaderText}>{item.account_Type}</Text>
              </View>
              <View style={styles.line} />
              <View style={styles.containerView}>
                <View style={styles.containerHeaderView}>
                  <Text style={styles.containerHeaderText}>{" - Acc Name - " + item.account_Name + " | " + "Acc Number - " + item.account_Number}</Text>
                  <View style={styles.addBtn}>
                    <TouchableOpacity onPress={this.addIntrestedParty(item)}>
                      <Text style={styles.editBtnText}>{gblStrings.accManagement.addNew}</Text>
                    </TouchableOpacity>
                  </View>
                </View>
                {item.intrestedParty &&
                  <FlatList
                    data={item.intrestedParty}
                    extraData={this.props}
                    keyExtractor={this.generateKeyExtractor}
                    renderItem={this.renderIntrestedParties} 
                  />
                }
              </View>
            </View>
          );
    }

    generateKeyExtractor = (item) => item.key;

    render() {
        let intrestedParties = [];
        if(this.props.manageIntrestedPartiesData && this.props.manageIntrestedPartiesData.list_manage_intrested_parties ){
            intrestedParties = this.props.manageIntrestedPartiesData.list_manage_intrested_parties;
        }
        return (
            <View style={styles.container} >
                <GHeaderComponent navigation={this.props.navigation} />
                <ScrollView style={styles.flexMainView} keyboardShouldPersistTaps="always" ref={this.setScrollViewRef}>
                <View style={styles.mainHeadingView}>
                    {this.state.isSavedSuccess &&
                        <View style={styles.notificationView}>
                            <TouchableOpacity style={styles.flexSmall}>
                                <GIcon 
                                    name="check"
                                    type="MaterialIcons"
                                    size={40}
                                    color="#707070"
                                />
                            </TouchableOpacity>
                            <View style={styles.saveSuccessMsgTxt}>
                                <Text style={styles.notificationTxt}>{gblStrings.accManagement.intrestedPartiesAddedSuccessMeg}</Text>
                            </View>
                            <TouchableOpacity style={styles.flexSmall} onPress={this.updateNotificationMsgState}>
                                <GIcon 
                                    name="close"
                                    type="EvilIcons"
                                    size={40}
                                    color="#707070"
                                />
                            </TouchableOpacity>
                        </View>
                    }
                    <Text style={styles.mainHeadlineText}>
                        {gblStrings.accManagement.manageIntrestedParties}
                    </Text>
                </View>
                <FlatList
                    data={intrestedParties}
                    extraData={this.props}
                    keyExtractor={this.generateKeyExtractor}
                    renderItem={this.renderData}
                />
                <View style={styles.borderInternal} />
                <View style={styles.mainHeadingView}>
                    <Text style={styles.disclaimerTextHeading}>{gblStrings.accManagement.VCDiscalimerTitle}</Text>
                    <Text style={styles.disclaimerTxt}>{gblStrings.accManagement.VCDiscalimerDescContent}</Text>
                </View>
                <GFooterComponent />
                </ScrollView>
            </View>

        );
    }
}

manageIntrestedPartiesComponent.propTypes = {
    navigation: PropTypes.instanceOf(Object).isRequired,
    manageIntrestedPartiesData: PropTypes.instanceOf(Object).isRequired
};

export default manageIntrestedPartiesComponent;
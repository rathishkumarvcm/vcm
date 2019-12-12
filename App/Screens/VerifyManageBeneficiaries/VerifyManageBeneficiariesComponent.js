import React, {Component} from 'react';
import {Text, View, ScrollView, TouchableOpacity, FlatList} from 'react-native';
import {styles} from './styles';
import {
  GHeaderComponent,
  GFooterComponent,
  GButtonComponent
} from '../../CommonComponents';
import gblStrings from '../../Constants/GlobalStrings';
import PropTypes from 'prop-types';


class VerifyManageBenificiariesComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      bene_Data:{}
    };
  }

  componentDidMount() {
    console.log("verify Screen",this.props.navigation.getParam('mBData'));
    this.updateInitialData();
  }

  updateInitialData=()=>{
    this.setState({bene_Data:this.props.navigation.getParam('mBData')});
  }

  onClickEdit=()=>{
    this.props.navigation.goBack();
  }

  onClickCancel=()=>{
    this.props.navigation.navigate("manageBeneficiaries");
  }

  onClickSubmit=()=>{
    const payloadData=this.getData();
    this.props.saveBeneficiaryData("verifyBeneficiary",payloadData);
    this.props.navigation.navigate("manageBeneficiaries",{showMsg:true,successMsg:"Data has been added successfully"});
  }

  getData = () => {
    let update_Bene_Data = {}, list=[];
        update_Bene_Data = this.state.bene_Data;
        if (this.props && this.props.manageBeneficiaryData && this.props.manageBeneficiaryData.manage_beneficiary ) {
            list=this.props.manageBeneficiaryData.manage_beneficiary;
        }
        list.map((m,n)=>{
          if(m.key=== update_Bene_Data.key){
            list.splice(n,1,update_Bene_Data);
          }
        });
    return list;
  }


  renderContingentBeneficiary=({item})=>{
    return(
      <View style={styles.marginStyle}>
        <View style={[styles.flexStyle,styles.paddingHorizontalStyle]}>
          <Text style={styles.titleHeaderText}>{gblStrings.accManagement.contingentInfo}</Text>
          <TouchableOpacity onPress={this.onClickEdit}>
            <Text style={styles.editBtnText}>{gblStrings.common.edit}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.line} /> 
        <View style={styles.paddingHorizontalStyle}>
          <View style={styles.contentViewBlock}>
            <Text style={styles.shortContentText}>{gblStrings.accManagement.name}</Text>
            <Text style={styles.shortContentValueText}>{item.bene_Name}</Text>
          </View>
          <View style={styles.contentViewBlock}>
            <Text style={styles.shortContentText}>{gblStrings.accManagement.socialSecurityNo}</Text>
            <Text style={styles.shortContentValueText}>{item.social_security_number}</Text>
          </View>
          <View style={styles.contentViewBlock}>
            <Text style={styles.shortContentText}>{gblStrings.accManagement.dob}</Text>
            <Text style={styles.shortContentValueText}>{item.dob}</Text>
          </View>
          <View style={styles.contentViewBlock}>
            <Text style={styles.shortContentText}>{gblStrings.accManagement.emailAddress}</Text>
            <Text style={styles.shortContentValueText}>{"$ "+item.email}</Text>
          </View>
          <View style={styles.contentViewBlock}>
            <Text style={styles.shortContentText}>{gblStrings.accManagement.beneficiary_type}</Text>
            <Text style={styles.shortContentValueText}>{item.beneficiaryType}</Text>
          </View>
          <View style={styles.contentViewBlock}>
            <Text style={styles.shortContentText}>{gblStrings.accManagement.relationToOwner}</Text>
            <Text style={styles.shortContentValueText}>{item.relationship_To_Insured}</Text>
          </View>
          <View style={styles.contentViewBlock}>
            <Text style={styles.shortContentText}>{gblStrings.accManagement.distributionPercentage}</Text>
            <Text style={styles.shortContentValueText}>{"$ "+item.distribution_Per}</Text>
          </View>
        </View>
      </View>
    );
  }

  renderTransferOnDeathBeneficiary = ({item}) => {
    return(
      <View style={styles.marginStyle}>
        <View style={[styles.flexStyle,styles.paddingHorizontalStyle]}>
            <Text style={styles.titleHeaderText}>{gblStrings.accManagement.verifyTOD}</Text>
            <TouchableOpacity onPress={this.onClickEdit}>
              <Text style={styles.editBtnText}>{gblStrings.common.edit}</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.line} /> 
        <View style={styles.paddingHorizontalStyle}>
          <View style={styles.contentViewBlock}>
            <Text style={styles.shortContentText}>{gblStrings.accManagement.name}</Text>
            <Text style={styles.shortContentValueText}>{item.bene_Name}</Text>
          </View>
          <View style={styles.contentViewBlock}>
            <Text style={styles.shortContentText}>{gblStrings.accManagement.socialSecurityNo}</Text>
            <Text style={styles.shortContentValueText}>{item.social_security_number}</Text>
          </View>
          <View style={styles.contentViewBlock}>
            <Text style={styles.shortContentText}>{gblStrings.accManagement.dob}</Text>
            <Text style={styles.shortContentValueText}>{item.dob}</Text>
          </View>
          <View style={styles.contentViewBlock}>
            <Text style={styles.shortContentText}>{gblStrings.accManagement.emailAddress}</Text>
            <Text style={styles.shortContentValueText}>{"$ "+item.email}</Text>
          </View>
          <View style={styles.contentViewBlock}>
            <Text style={styles.shortContentText}>{gblStrings.accManagement.beneficiary_type}</Text>
            <Text style={styles.shortContentValueText}>{item.beneficiaryType}</Text>
          </View>
          <View style={styles.contentViewBlock}>
            <Text style={styles.shortContentText}>{gblStrings.accManagement.relationToOwner}</Text>
            <Text style={styles.shortContentValueText}>{item.relationship_To_Insured}</Text>
          </View>
          <View style={styles.contentViewBlock}>
            <Text style={styles.shortContentText}>{gblStrings.accManagement.distributionPercentage}</Text>
            <Text style={styles.shortContentValueText}>{"$ "+item.distribution_Per}</Text>
          </View>
        </View>
      </View>
    );
  }

  renderPrimaryBeneficiary=({item})=>{
    return(
      <View style={styles.marginStyle}>
        <View style={[styles.flexStyle,styles.paddingHorizontalStyle]}>
            <Text style={styles.titleHeaderText}>{gblStrings.accManagement.primaryInfo}</Text>
            <TouchableOpacity onPress={this.onClickEdit}>
              <Text style={styles.editBtnText}>{gblStrings.common.edit}</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.line} /> 
        <View style={styles.paddingHorizontalStyle}>
          <View style={styles.contentViewBlock}>
            <Text style={styles.shortContentText}>{gblStrings.accManagement.name}</Text>
            <Text style={styles.shortContentValueText}>{item.bene_Name}</Text>
          </View>
          <View style={styles.contentViewBlock}>
            <Text style={styles.shortContentText}>{gblStrings.accManagement.socialSecurityNo}</Text>
            <Text style={styles.shortContentValueText}>{item.social_security_number}</Text>
          </View>
          <View style={styles.contentViewBlock}>
            <Text style={styles.shortContentText}>{gblStrings.accManagement.dob}</Text>
            <Text style={styles.shortContentValueText}>{item.dob}</Text>
          </View>
          <View style={styles.contentViewBlock}>
            <Text style={styles.shortContentText}>{gblStrings.accManagement.emailAddress}</Text>
            <Text style={styles.shortContentValueText}>{"$ "+item.email}</Text>
          </View>
          <View style={styles.contentViewBlock}>
            <Text style={styles.shortContentText}>{gblStrings.accManagement.beneficiary_type}</Text>
            <Text style={styles.shortContentValueText}>{item.beneficiaryType}</Text>
          </View>
          <View style={styles.contentViewBlock}>
            <Text style={styles.shortContentText}>{gblStrings.accManagement.relationToOwner}</Text>
            <Text style={styles.shortContentValueText}>{item.relationship_To_Insured}</Text>
          </View>
          <View style={styles.contentViewBlock}>
            <Text style={styles.shortContentText}>{gblStrings.accManagement.distributionPercentage}</Text>
            <Text style={styles.shortContentValueText}>{"$ "+item.distribution_Per}</Text>
          </View>
        </View>
      </View>
    );
  }
  
  generateKeyExtractor = (item) => item.key;

  render() {
    return (
      <View style={styles.container}>
        <GHeaderComponent navigation={this.props.navigation} />
        <ScrollView style={styles.flexMainView} >
          <View style={styles.mainHeadingView}>
            <Text style={styles.manageBenificiariesHeadline}>
              {gblStrings.accManagement.manageBeneficiaries}
            </Text>
          </View>
          <View style={styles.line} />

          <View style={styles.contentViewInternal} >
            <View style={styles.contentViewBlock}>
              <Text style={styles.shortContentText}>{this.state.bene_Data.account_Type}</Text>
              <Text style={styles.shortContentValueText}>{this.state.bene_Data.account_Name}</Text>
            </View>
            <View style={styles.contentViewBlock}>
              <Text style={styles.shortContentText}>{gblStrings.accManagement.registrationOwner}</Text>
              <Text style={styles.shortContentValueText}>{this.state.bene_Data.account_Name}</Text>
            </View>
            <View style={styles.contentViewBlock}>
              <Text style={styles.shortContentText}>{gblStrings.accManagement.accountNumber}</Text>
              <Text style={styles.shortContentValueText}>{this.state.bene_Data.account_Number}</Text>
            </View>
            <View style={styles.contentViewBlock}>
              <Text style={styles.shortContentText}>{gblStrings.accManagement.balance}</Text>
              <Text style={styles.shortContentValueText}>{"$ "+this.state.bene_Data.accumulated_Value}</Text>
            </View>
          </View>

          {this.state.bene_Data.primary_Bene &&
            <FlatList
              data={this.state.bene_Data.primary_Bene}
              keyExtractor={this.generateKeyExtractor}
              renderItem={this.renderPrimaryBeneficiary} 
            />
          }
          {this.state.bene_Data.contingent_Bene &&
            <FlatList
              data={this.state.bene_Data.contingent_Bene}
              keyExtractor={this.generateKeyExtractor}
              renderItem={this.renderContingentBeneficiary} 
            />
          }
          {this.state.bene_Data.transfer_on_Death_Bene &&
            <FlatList
              data={this.state.bene_Data.transfer_on_Death_Bene}
              keyExtractor={this.generateKeyExtractor}
              renderItem={this.renderTransferOnDeathBeneficiary} 
            />
          }

          {/*--------------------------- Button View --------------------------------*/}

          <View style={styles.btnGrp}>
            <GButtonComponent
              buttonStyle={styles.normalWhiteBtn}
              buttonText={gblStrings.common.save}
              textStyle={styles.normalWhiteBtnTxt}
            />
            <GButtonComponent
              buttonStyle={styles.normalWhiteBtn}
              buttonText={gblStrings.common.cancel}
              textStyle={styles.normalWhiteBtnTxt}
              onPress={this.onClickCancel}
            />
            <GButtonComponent
              buttonStyle={styles.normalWhiteBtn}
              buttonText={gblStrings.common.back}
              textStyle={styles.normalWhiteBtnTxt}
              onPress={this.onClickEdit}
            />
            <GButtonComponent
              buttonStyle={styles.normalBlackBtn}
              buttonText={gblStrings.common.submit}
              textStyle={styles.normalBlackBtnTxt}
              onPress={this.onClickSubmit}
            />
          </View>
          {/*--------------------------- Footer View --------------------------------*/}
          <View style={styles.footerView} />
          <View style={styles.settingsBorder} />
          <View style={styles.blockMarginTop} />
          <View style={styles.mainHeadingView}>
            <Text style={styles.disclaimerTextHeading}>
              {gblStrings.accManagement.VCDiscalimerTitle}
            </Text>
            <Text style={styles.disclaimerTxt}>
              {gblStrings.accManagement.VCDiscalimerDescContent}
            </Text>
          </View>
          <GFooterComponent />
        </ScrollView>
      </View>
    );
  }
}

VerifyManageBenificiariesComponent.propTypes = {
  navigation: PropTypes.instanceOf(Object),
  saveBeneficiaryData: PropTypes.func,
  manageBeneficiaryData:PropTypes.instanceOf(Object)
};

export default VerifyManageBenificiariesComponent;

import React, {Component} from 'react';
import {Text, View, ScrollView,TouchableOpacity, FlatList} from 'react-native';
import {styles} from './styles';
import { GHeaderComponent, GIcon, GFooterComponent} from '../../CommonComponents';
import gblStrings from '../../Constants/GlobalStrings';
import PropTypes from 'prop-types';


class ManageBenificiariesComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      isCollapsable:false,
      collapseIcon:"-",
      notificationMsg:"",
      isSuccessNotification:false,
    };
  }

  componentDidMount() {
   
  }

  handleEdit=(data)=>{
    this.props.navigation.navigate("editManageBeneficiaries",{ acc_Data:data });
  }

  generateKeyExtractor = (item) => item.key;

  renderContingentBeneficiary=({item})=>{
    return(
      <View style={styles.innerContainerView}>
        <View style={styles.innerHeaderView}>
          <View style={styles.flexDirectionStyle}>
            <Text style={styles.shortContentText}>{gblStrings.accManagement.contractNumber}</Text>
            <Text style={[styles.shortContentValueText,styles.paddingStyleLeft]}>{item.contract_Number}</Text>
          </View>
          <TouchableOpacity style={styles.sideBtn}>
            <GIcon name="ellipsis-v" type="font-awesome" size={30} color="black" />
          </TouchableOpacity>
        </View>
        <View style={[styles.paddingStyleLeft,styles.marginBottomStyle]}>
          <View style={styles.marginTopStyle}>
            <Text style={styles.shortContentText}>{gblStrings.accManagement.contingentBeneficiary}</Text>
            <Text style={styles.beneNameStyle}>{item.bene_Name}</Text>
          </View>
          <View style={styles.marginTopStyle}>
            <Text style={styles.shortContentText}>{gblStrings.accManagement.relationToInsured}</Text>
            <Text style={styles.shortContentValueText}>{item.relationship_To_Insured}</Text>
          </View>
          <View style={styles.marginTopStyle}>
            <Text style={styles.shortContentText}>{gblStrings.accManagement.accumulatedValue}</Text>
            <Text style={styles.shortContentValueText}>{"$ "+item.accumulated_Value}</Text>
          </View>
          <View style={styles.marginTopStyle}>
            <Text style={styles.shortContentText}>{gblStrings.accManagement.distribution}</Text>
            <Text style={styles.shortContentValueText}>{item.distribution_Per+ " %"}</Text>
          </View>
          <View style={styles.marginTopStyle}>
            <Text style={styles.infoShortText}>{"Last Updated on "+ item.last_modified}</Text>
          </View>
        </View>
      </View>    
    );
  }

  renderTransferOnDeathBeneficiary = ({item}) => {
    return(
      <View style={styles.innerContainerView}>
        <View style={styles.innerHeaderView}>
          <View style={styles.flexDirectionStyle}>
            <Text style={styles.shortContentText}>{gblStrings.accManagement.contractNumber}</Text>
            <Text style={[styles.shortContentValueText,styles.paddingStyleLeft]}>{item.contract_Number}</Text>
          </View>
          <TouchableOpacity style={styles.sideBtn}>
            <GIcon name="ellipsis-v" type="font-awesome" size={30} color="black" />
          </TouchableOpacity>
        </View>
        <View style={[styles.paddingStyleLeft,styles.marginBottomStyle]}>
          <View style={styles.marginTopStyle}>
            <Text style={styles.shortContentText}>{gblStrings.accManagement.primaryBeneficiary}</Text>
            <Text style={styles.beneNameStyle}>{item.bene_Name}</Text>
          </View>
          <View style={styles.marginTopStyle}>
            <Text style={styles.shortContentText}>{gblStrings.accManagement.relationToInsured}</Text>
            <Text style={styles.shortContentValueText}>{item.relationship_To_Insured}</Text>
          </View>
          <View style={styles.marginTopStyle}>
            <Text style={styles.shortContentText}>{gblStrings.accManagement.accumulatedValue}</Text>
            <Text style={styles.shortContentValueText}>{"$ "+item.accumulated_Value}</Text>
          </View>
          <View style={styles.marginTopStyle}>
          <Text style={styles.shortContentText}>{gblStrings.accManagement.distribution}</Text>
            <Text style={styles.shortContentValueText}>{item.distribution_Per+ " %"}</Text>
          </View>
          <View style={styles.marginTopStyle}>
            <Text style={styles.infoShortText}>{"Last Updated on "+item.last_modified}</Text>
          </View>
        </View>
      </View>
    );
  }

  renderPrimaryBeneficiary=({item})=>{
    return(
      <View style={styles.innerContainerView}>
        <View style={styles.innerHeaderView}>
          <View style={styles.flexDirectionStyle}>
            <Text style={styles.shortContentText}>{gblStrings.accManagement.contractNumber}</Text>
            <Text style={[styles.shortContentValueText,styles.paddingStyleLeft]}>{item.contract_Number}</Text>
          </View>
          <TouchableOpacity style={styles.sideBtn}>
            <GIcon name="ellipsis-v" type="font-awesome" size={30} color="black" />
          </TouchableOpacity>
        </View>
        <View style={[styles.paddingStyleLeft,styles.marginBottomStyle]}>
          <View style={styles.marginTopStyle}>
            <Text style={styles.shortContentText}>{gblStrings.accManagement.primaryBeneficiary}</Text>
            <Text style={styles.beneNameStyle}>{item.bene_Name}</Text>
          </View>
          <View style={styles.marginTopStyle}>
            <Text style={styles.shortContentText}>{gblStrings.accManagement.relationToInsured}</Text>
            <Text style={styles.shortContentValueText}>{item.relationship_To_Insured}</Text>
          </View>
          <View style={styles.marginTopStyle}>
            <Text style={styles.shortContentText}>{gblStrings.accManagement.accumulatedValue}</Text>
            <Text style={styles.shortContentValueText}>{"$ "+item.accumulated_Value}</Text>
          </View>
          <View style={styles.marginTopStyle}>
          <Text style={styles.shortContentText}>{gblStrings.accManagement.distribution}</Text>
            <Text style={styles.shortContentValueText}>{item.distribution_Per+ " %"}</Text>
          </View>
          <View style={styles.marginTopStyle}>
            <Text style={styles.infoShortText}>{"Last Updated on "+item.last_modified}</Text>
          </View>
        </View>
      </View>
    );
  }

  renderBeneficiaryData=({item})=>{
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
            <View style={styles.flexDirectionStyle}>
              <Text style={styles.containerHeaderText}>{"  Value - $" + item.accumulated_Value + " | " + gblStrings.accManagement.distributionPercentage + " - " + item.distribution_Per +"%"}</Text>
              <TouchableOpacity onPress={()=>this.handleEdit(item)}>
                <Text style={styles.editBtnText}>{gblStrings.common.edit}</Text>
              </TouchableOpacity>
            </View>
          </View>
          {item.primary_Bene &&
            <FlatList
              data={item.primary_Bene}
              keyExtractor={this.generateKeyExtractor}
              renderItem={this.renderPrimaryBeneficiary} 
            />
          }
          {item.contingent_Bene &&
            <FlatList
              data={item.contingent_Bene}
              keyExtractor={this.generateKeyExtractor}
              renderItem={this.renderContingentBeneficiary} 
            />
          }
          {item.transfer_on_Death_Bene &&
            <FlatList
              data={item.transfer_on_Death_Bene}
              keyExtractor={this.generateKeyExtractor}
              renderItem={this.renderTransferOnDeathBeneficiary} 
            />
          }
        </View>
      </View>
    );
  }

  render() {
    let beneficiary_Data = [];
    if(this.props.manageBeneficiaryData && this.props.manageBeneficiaryData.manage_beneficiary && this.props.manageBeneficiaryData.manage_beneficiary){
      beneficiary_Data = this.props.manageBeneficiaryData.manage_beneficiary;
    }
    return (
      <View style={styles.container}>
        <GHeaderComponent navigation={this.props.navigation} />
        <ScrollView style={styles.flexMainView}>
          <View style={styles.mainHeadingView}>
            <Text style={styles.manageBenificiariesHeadline}>
              {gblStrings.accManagement.manageBeneficiaries}
            </Text>
          </View>
          <View style={styles.line} />
          {this.state.isSuccessNotification ?
            <View style={styles.notificationView}>
              <TouchableOpacity style={styles.flexSmall}>
                <GIcon name="check" type="MaterialIcons" size={40} color="#707070" />
              </TouchableOpacity>
              <View style={styles.saveSuccessMsgTxt}>
                <Text style={styles.notificationTxt}>{this.state.notificationMsg}</Text>
              </View>
              <TouchableOpacity style={styles.flexSmall}>
                <GIcon name="close" type="EvilIcons" size={40} color="#707070" />
              </TouchableOpacity>
            </View>:null
          }
          <View style={styles.mainHeadingView}>
            <Text style={styles.contentText}>
              {gblStrings.accManagement.beneficiariesAccount}
              <Text style={styles.contactUsLink}>
              {gblStrings.accManagement.contactUs}
              </Text>
            </Text>
          </View>
          <FlatList
            data={beneficiary_Data}
            extraData={this.props}
            keyExtractor={this.generateKeyExtractor}
            renderItem={this.renderBeneficiaryData}
          />
          <View style={styles.footerView} />
          <View style={styles.line} />
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

ManageBenificiariesComponent.propTypes = {
  navigation: PropTypes.instanceOf(Object),
  manageBeneficiaryData: PropTypes.instanceOf(Object)
};

export default ManageBenificiariesComponent;

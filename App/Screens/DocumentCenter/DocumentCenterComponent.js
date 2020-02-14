import Dash from 'react-native-dash';
import React, { Component } from 'react';
import { Text, View, ScrollView, TouchableOpacity, } from 'react-native';
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';
import PropTypes from 'prop-types';
import styles from './styles';

import { GHeaderComponent, GDropDownComponent, GFooterSettingsComponent, GIcon } from '../../CommonComponents';
import gblStrings from '../../Constants/GlobalStrings';

const supportedDocumentData = [
    { "key": "key1", "value": "All Documents" },
  ];

const documentorderData = [
    { "key": "key1", "value": "Descending" },
    { "key": "key2", "value": "Ascending" },
  ];
const documentsortorderData = [
    { "key": "key1", "value": "Date" },
    { "key": "key2", "value": "Name" },
  ];

class DocumentCenterComponent extends Component {
    constructor(props) {
        super(props);
        this.scrollRef = React.createRef();
        //  set true to isLoading if data for this screen yet to be received and wanted to show loader.
        this.state = {
           // isLoading: false,            
            documents: [],
            selectedsortorder: 'Date',
            selecteddocument: 'All Documents',
            selectedorder: 'Descending',
            supportedDocumentFlag: false,
            supportedDocumentMsg: ""               
        };
        this.docuemntMenu = [];
    }  

    static getDerivedStateFromProps(props, prevState){
        // initialize state variable and return. If no changes required for state
        // variable then return empty object. return {}

        const {documentinitialState} = props;      
        const {documents} = prevState; 
        if (documentinitialState && documents.length === 0 ){
            if(documentinitialState.documentsList){  
                return {
                    documents: documentinitialState.documentsList
                };                                                                    
            }       
        }else {
            return {
                documents: prevState.documents
            };
        }   
        return {};     
    }    
    
    goBack = () => {
        const{ navigation }=this.props;
        navigation.goBack();
    }

    navigateaccountMessagingInvestmentAccounts = () =>{
        const {navigation} = this.props;
        navigation.navigate('accountMessagingInvestmentAccounts');
    }

    selectedSupportedDocuemnt = () => (text) => {
        this.setState({ selecteddocument: text });
    }

    selectedOrderDocuemnt = () => (text) => {
        this.setState({ selectedorder: text });
    }

    seletedSortOrderDocumenter = () => (text) => {
        this.setState({ selectedsortorder: text});
    }

    setDocuemntMenuRef = index => input => {
        this.docuemntMenu[Number(index)] = input;
    }

    hideMenu = (index) => () => {
        this.docuemntMenu[Number(index)].hide();
    }

    showMenu = (index) => () => {
        this.docuemntMenu[Number(index)].show();
    }

    render() {
        const{ navigation }=this.props;       
        const{ documents, supportedDocumentFlag, supportedDocumentMsg, selecteddocument, selectedorder, selectedsortorder }=this.state;       
        
        return (
            <View style={styles.container}>
                <GHeaderComponent navigation={navigation} />
                <ScrollView style={styles.scrollViewFlex} ref={this.scrollRef}>
                    <View style={styles.settingsView}>
                        <TouchableOpacity style={styles.touchOpacityPosition} onPress={this.goBack}>
                            <Text style={styles.settingsInfo}>
                                {gblStrings.documentcenterComponent.home}
                            </Text>
                        </TouchableOpacity>                     
                        <Text style={styles.settingsInfoCurrent}>
                            {gblStrings.documentcenterComponent.documentcenter}
                        </Text>
                    </View>

                    <View style={styles.settingsInfoHead}>
                        <Text style={styles.settingsInfoHeadTilte}>
                            {gblStrings.documentcenterComponent.documentcenter}
                        </Text>
                        <TouchableOpacity style={styles.touchOpacityPosition} onPress={this.navigateaccountMessagingInvestmentAccounts}>
                            <Text style={styles.settingsInfoSubHead}>
                                {gblStrings.documentcenterComponent.documentpreference}
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.touchOpacityPosition} onPress={this.goBack}>
                            <Text style={styles.settingsInfoSubHead}>
                                {gblStrings.documentcenterComponent.downloadadobereader}
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.touchOpacityPosition} onPress={this.goBack}>
                            <Text style={styles.settingsInfoSubHead}>
                                {gblStrings.documentcenterComponent.helpandfaq}
                            </Text>
                        </TouchableOpacity>
                        <View style={styles.settingsInfoDivider} />
                    </View>    
                    <View style={styles.documentfilterview}>
                        <View style={styles.documentfilterrowview}>
                            <View style={styles.documentfilterflexallview}>
                                <GDropDownComponent
                                    showtitle={false}
                                    dropDownTextName={styles.lblTxt}
                                    data={supportedDocumentData}
                                    textInputStyle={styles.dropdownTextInput}
                                    dropDownLayout={styles.dropDownLayout}
                                    dropDownValue={selecteddocument}
                                    selectedDropDownValue={this.selectedSupportedDocuemnt()}
                                    errorFlag={supportedDocumentFlag}
                                    errorText={supportedDocumentMsg}
                                />
                            </View>
                            <TouchableOpacity style={styles.documentfilterflexfilterview}>
                                <Text style={styles.documentfiltertext}>{gblStrings.documentcenterComponent.filterdocuments}</Text>
                            </TouchableOpacity>                                
                        </View>
                        <View style={styles.documentsortbyview}>
                            <Text style={styles.documentsortbytext}>{gblStrings.documentcenterComponent.sortby}</Text>
                        </View>                                
                        <View style={styles.documentfilterrowview}>
                            <View style={styles.documentfilterflexallview}>
                                <GDropDownComponent
                                    showtitle={false}
                                    dropDownTextName={styles.lblTxt}
                                    data={documentsortorderData}
                                    textInputStyle={styles.dropdownTextInput}
                                    dropDownLayout={styles.dropDownLayout}
                                    dropDownValue={selectedsortorder}
                                    selectedDropDownValue={this.seletedSortOrderDocumenter()}
                                    errorFlag={supportedDocumentFlag}
                                    errorText={supportedDocumentMsg}
                                />                                        
                            </View>
                            <View style={styles.documentfilterflexfilterview}>
                                <GDropDownComponent
                                    showtitle={false}
                                    dropDownTextName={styles.lblTxt}
                                    data={documentorderData}
                                    textInputStyle={styles.dropdownTextInput}
                                    dropDownLayout={styles.dropDownLayout}
                                    dropDownValue={selectedorder}
                                    selectedDropDownValue={this.selectedOrderDocuemnt()}
                                    errorFlag={supportedDocumentFlag}
                                    errorText={supportedDocumentMsg}
                                />
                            </View>                                
                        </View>
                        <View style={styles.settingsInfoDivider} />
                    </View>                                 
                    <View style={styles.documentcontainer}>  
                        {
                            documents.map((document,index) => {
                                return (      
                                <View style={styles.documentindvcontainer} key={document.id}> 
                                    <View style={styles.documenttitleview}>
                                        <View style={styles.documenttitleviewtext}>                                
                                            <Text>
                                                <Text style={styles.documenttitletext}>{document.documentname}</Text>                                                    
                                                <Text style={styles.documenttitletexttype}> ( {document.documentType} )</Text>
                                            </Text>
                                        </View>
                                        <View style={styles.documenttitleviewmore}>
                                            <Menu
                                                ref={this.setDocuemntMenuRef(index)}
                                                button={(
                                                    <TouchableOpacity onPress={this.showMenu(index)}>
                                                        <GIcon
                                                            name="more-vert"
                                                            type="material"
                                                            size={40}
                                                            color="#544A54"
                                                        />
                                                    </TouchableOpacity>
                                                )}
                                            >
                                                <MenuDivider />
                                                <MenuItem onPress={this.hideMenu(index)}>{gblStrings.documentcenterComponent.edit}</MenuItem>
                                                <MenuDivider />
                                                <MenuItem onPress={this.hideMenu(index)}>{gblStrings.documentcenterComponent.print}</MenuItem>
                                                <MenuDivider />
                                                <MenuItem onPress={this.hideMenu(index)}>{gblStrings.documentcenterComponent.export}</MenuItem>
                                                <MenuDivider />
                                            </Menu>
                                        </View>
                                    </View>
                                    <Dash style={styles.documentdottedline} dashGap={4} dashLength={2} dashColor="#9DB4CE" />
                                    <View style={styles.documentdetailcontainer}>
                                        <Text style={styles.documentdetailheadertext}>
                                            {gblStrings.documentcenterComponent.accountname}
                                        </Text>
                                        <Text style={styles.documentdetailtext}>
                                            {document.accountname}
                                        </Text>
                                        <Text style={styles.documentdetailheadernexttext}>
                                            {gblStrings.documentcenterComponent.documentdate}
                                        </Text>
                                        <Text style={styles.documentdetailtext}>
                                            {document.documentdate}
                                        </Text>
                                        <Text style={styles.documentdetailheadernexttext}>
                                            {gblStrings.documentcenterComponent.category}
                                        </Text>
                                        <Text style={styles.documentdetailtext}>
                                            {document.category}
                                        </Text>
                                        <Text style={styles.documentdetailheadernexttext}>
                                            {gblStrings.documentcenterComponent.status}
                                        </Text>
                                        <Text style={styles.documentdetailtext}>
                                            {document.status}
                                        </Text>
                                    </View>                            
                                </View>
                                );                    
                            })
                        } 
                    </View> 

                    <TouchableOpacity style={styles.backBtn} onPress={this.goBack}>
                        <Text style={styles.backButtonText}>{gblStrings.userManagement.back}</Text>
                    </TouchableOpacity>

                    <GFooterSettingsComponent />
                </ScrollView>
            </View>
            
        );
    }
}

DocumentCenterComponent.propTypes = {
    navigation: PropTypes.instanceOf(Object),     
    documentinitialState : PropTypes.instanceOf(Object)

};

DocumentCenterComponent.defaultProps = {
    navigation : {},   
    documentinitialState:{}

};

export default DocumentCenterComponent;
import React, { Component } from 'react';
import { Text, View,ScrollView, TouchableOpacity, Platform } from 'react-native';
import PropTypes from "prop-types";
import * as mime from 'react-native-mime-types';
import DocumentPicker from 'react-native-document-picker';
import styles from './styles';
import { GButtonComponent, GHeaderComponent, GFooterSettingsComponent, GIcon, showAlert } from '../../CommonComponents';
import { CustomPageWizard } from '../../AppComponents';
import gblStrings from '../../Constants/GlobalStrings';
import AppUtils from '../../Utils/AppUtils';

const maxFileLimit=10; //  No. of Files
const maxFileSize=30; //  Maximum file size 30 MB

class SpecialtyAccSubmitComponent extends Component {
    constructor(props) {
        super(props);
        //  set true to isLoading if data for this screen yet to be received and wanted to show loader.
        this.state = {
            // isLoading: false,
            // itemID: "",
            // pageName: "",
            // selectedItemID: "",
            // selectedItemName: "",
            multipleFile: [], 
            fileSelected:false,
            errorMessage:"",
        };
    }

    /*----------------------
                                 Component LifeCycle Methods 
                                                                 -------------------------- */
    componentDidMount() {

    }

    componentDidUpdate() {
        AppUtils.debugLog("==Did Update Called==");        
    }

    /*----------------------
                                 Button Events
                                                                 -------------------------- */
    onClickHeader = () => {
        AppUtils.debugLog("#TODO : onClickHeader");
    }

    goBack = () => {
        const {navigation} = this.props;
        navigation.goBack();
    }

    onClickCancel = () => {
        const {navigation} = this.props;
        navigation.goBack('termsAndConditions');
    }

    //  onClickSave = () => {
    //     //  this.validateFields();
    //  }

    onClickSubmit = () => {
       //  this.validateFields();
    }

    // onPressCheck = (keyName) => () => {       
    //     this.setState({        
    //         [keyName]: !this.state[keyName]
    //     });
    // }

    // onSelected = (item) => {
    //     AppUtils.debugLog(`item: ${ item.id}`);
    //     this.setState({ selectedItemID: item.id });
    //     this.setState({ selectedItemName: item.name });
    //     //   alert("You selected :: " + item.name)
    // }

    uploadSelectedFiles = () => {
        const{multipleFile} = this.state;
        if(multipleFile.length > 0){
            const size = 0;
            multipleFile.map((item) => {
                return( size === size+item.size );
            });   

            if((size / 1024 ** 2) > maxFileSize){
                this.setState({ fileSelected:true,errorMessage:'Total Size limit should be less than 30 MB' });
            }else {
                showAlert(gblStrings.common.appName ,"File uploaded successfully",gblStrings.common.ok);               
            }            
        }else {
            this.setState({ fileSelected:true,errorMessage:'Please select a file before uploading' });
        }
    }

    async uploadImage() {
        //  Opening Document Picker for selection of multiple file
        try {
            let results;

            //  Android File formats
            if(Platform.OS === 'android'){          
              results = await DocumentPicker.pickMultiple({
                type: [
                     //  DocumentPicker.types.allFiles
                    mime.lookup('docx'),
                    mime.lookup('doc'),
                    mime.lookup('jpg'),
                    mime.lookup('jpeg'),
                    mime.lookup('png'),
                    mime.lookup('xls'),
                    mime.lookup('pdf'),
                    mime.lookup('gif'),
                    mime.lookup('bmp')
                    ]                          
              });
            }
  
            //  IOS File formats
            if(Platform.OS === 'ios'){          
              results = await DocumentPicker.pickMultiple({
                type: [
                  'org.openxmlformats.wordprocessingml.document',
                  'com.adobe.pdf',             
                  'org.openxmlformats.spreadsheetml.sheet',    
                  //  DocumentPicker.types.images,            
                ]
              });
            }  
  
            //  for (const res of results) {
            //    //  Printing the log realted to the file
            //    console.log(`res : ${ JSON.stringify(res)}`);
            //    console.log(`URI : ${ res.uri}`);
            //    console.log(`Type : ${ res.type}`);
            //    console.log(`File Name : ${ res.name}`);
            //    console.log(`File Size : ${ res.size}`);
            //  }

            //  Setting the state to show multiple file attributes

            if(results.length > maxFileLimit){
                this.setState({ fileSelected:true,errorMessage:`You can attach only ${maxFileLimit} file` });
            }else{
                this.setState({ multipleFile: results,fileSelected:false });
            }            

          } catch (err) {
            //  Handling any exception (If any)
            if (DocumentPicker.isCancel(err)) {
              //  If user canceled the document selection
              //  alert('Canceled from multiple doc picker');
            } else {
              //  For Unknown Error         
              showAlert(gblStrings.common.appName ,`Unknown Error: ${ JSON.stringify(err)}`,gblStrings.common.ok);   
              throw err;
            }
          }
    }
    

    /*----------------------
                                 Render Methods
                                                                 -------------------------- */
    render() {

        const currentPage = 6;
        const { navigation } = this.props;
        const accType = navigation.getParam('accType', '');
        const { fileSelected,multipleFile,errorMessage } = this.state;
        return (
            <View style={styles.container}>
                <GHeaderComponent navigation={navigation}
                onPress={this.onClickHeader}
                />
                <ScrollView style={styles.scrollViewFlex}>

                    <Text style={styles.accTypeTilte}>
                        {accType}
                    </Text>

                    <CustomPageWizard currentPage={currentPage} pageName={`${currentPage }  ${gblStrings.common.mail}`} />

                    { /* -----------Personal Info -------------------*/}
                    <View style={styles.sectionGrp}>
                        <View style={styles.accTypeSelectSection}>
                            <Text style={styles.headings}>
                                {gblStrings.common.mail}
                            </Text>                           
                        </View>

                        <Text style={styles.lblLine} />
                        <Text style={styles.sectionDescTxt}>
                            {gblStrings.accManagement.completeApplication}
                        </Text>

                        <Text style={styles.mailingText}>
                            {gblStrings.accManagement.byUploading}
                        </Text>

                        <View style={styles.selectFileContainer}>                     

                            <GButtonComponent
                                buttonStyle={styles.selectFilesBtn}
                                buttonText={gblStrings.accManagement.selectFiles}
                                textStyle={styles.selectFilesBtnTxt}
                                onPress={this.uploadImage}
                            />
                           
                            <GIcon
                                name="file-upload"
                                type="material"
                                size={30}
                                color="#E9E4E4"
                            />
                            <TouchableOpacity onPress={this.uploadSelectedFiles}>
                                <Text style={styles.uploadText}>
                                    {gblStrings.common.upload}
                                </Text>
                            </TouchableOpacity>
                        </View>

                        {                           
                        fileSelected ? (
                            <View style={styles.selectedFileDescContainer}>
                                <Text style={styles.fileDesctextStyleError}>
                                    {errorMessage}
                                </Text>
                            </View>
                          )
                            : null
                        }

                        {/* Showing the data of selected Multiple files */}
                        {multipleFile.map((item) => (
                            <View style={styles.selectedFileDescContainer} key={item.name}>
                                
                                <Text style={styles.fileDesctextStyle}>
                                    {item.name ? item.name : ''}

                                    {/* {'\n'}
                                    Type: {item.type ? item.type : ''}
                                    {'\n'}
                                    File Size: {item.size ? item.size : ''}
                                    {'\n'}
                                    URI: {item.uri ? item.uri : ''}
                                    {'\n'}                            */}
                                </Text>   
                                {                                                    
                                <Text style={styles.fileDesctextStyleError}>
                                    {((item.size / 1024 ** 2) < maxFileSize) ? '' : 'Size limit of file should be less than 30 MB' }
                                </Text>  
                                }                     
                                
                                {/* <Image source={{"uri":item.uri}} style={styles.userAvatar} /> */}
                            
                            </View>
                        ))}

                        <View style={styles.uploadFileContainer}>
                            <Text style={styles.uploadFileTitle}>
                                {gblStrings.accManagement.attachLimit}
                            </Text>      
                            <Text style={styles.uploadFileDivider}>
                                {gblStrings.accManagement.attachdivider}
                            </Text>                    
                            <Text style={styles.uploadFileDesc}>
                                {gblStrings.accManagement.noOfFiles}
                            </Text>                    
                        </View>

                        <View style={styles.uploadFileContainer}>
                            <Text style={styles.uploadFileTitle}>
                                {gblStrings.accManagement.sizeLimitPerFile}
                            </Text>      
                            <Text style={styles.uploadFileDivider}>
                                {gblStrings.accManagement.attachdivider}
                            </Text>                    
                            <Text style={styles.uploadFileDesc}>
                                {gblStrings.accManagement.megaBytes}
                            </Text>                    
                        </View>

                        <View style={styles.uploadFileContainer}>
                            <Text style={styles.uploadFileTitle}>
                                {gblStrings.accManagement.totalSizeLimit}
                            </Text>      
                            <Text style={styles.uploadFileDivider}>
                                {gblStrings.accManagement.attachdivider}
                            </Text>                    
                            <Text style={styles.uploadFileDesc}>
                                {gblStrings.accManagement.megaBytes}
                            </Text>                    
                        </View>

                        <View style={styles.uploadFileContainer}>
                            <Text style={styles.uploadFileTitle}>
                                {gblStrings.accManagement.fileTypesAllow}
                            </Text>      
                            <Text style={styles.uploadFileDivider}>
                                {gblStrings.accManagement.attachdivider}
                            </Text>                    
                            <Text style={styles.uploadFileDesc}>
                                {gblStrings.accManagement.fileFormat}
                            </Text>                    
                        </View>

                        <Text style={styles.orText}>
                            {gblStrings.accManagement.orText}
                        </Text>

                        <View style={styles.childSectionGrp}>
                            <View style={styles.mailContainer}>
                                <Text style={styles.mailingText}>
                                    {gblStrings.accManagement.byMailing}
                                </Text>
                                <Text style={styles.addressTitleTxt}>
                                    {gblStrings.common.victoryCapital}
                                </Text>                               
                                <Text style={styles.addressTxt}>
                                    {gblStrings.common.victoryCapitalAddress}
                                </Text>
                               
                                <Text style={styles.orText}>
                                    {gblStrings.accManagement.orText}
                                </Text>
                                <Text style={styles.addressTxt}>
                                    {gblStrings.accManagement.youCanAlsoFax}
                                </Text>
                                <Text style={styles.phoneNoTxt}>
                                    {gblStrings.common.supportVCMFaxNumber}
                                </Text>
                            </View>
                        </View>
                    </View>

                    { /* ----------- Buttons Group -------------------*/}

                    <View style={styles.btnGrp}>

                        {/* <GButtonComponent
                            buttonStyle={styles.normalWhiteBtn}
                            buttonText={gblStrings.common.save}
                            textStyle={styles.normalWhiteBtnTxt}
                            onPress={this.onClickSave}
                        /> */}
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
                            onPress={this.goBack}
                        />
                        <GButtonComponent
                            buttonStyle={styles.normalBlackBtn}
                            buttonText={gblStrings.common.submit}
                            textStyle={styles.normalBlackBtnTxt}
                            onPress={this.onClickSubmit}
                        />
                    </View>
                    { /* ----------- Disclaimer -------------------*/}                   
                   
                    <GFooterSettingsComponent />
                </ScrollView>
            </View>
        );
    }
}

SpecialtyAccSubmitComponent.propTypes = {
    navigation: PropTypes.instanceOf(Object),
    //  accOpeningData: PropTypes.instanceOf(Object),
  };

  SpecialtyAccSubmitComponent.defaultProps = {  
    navigation : {},
    //  accOpeningData : {},  
};

export default SpecialtyAccSubmitComponent;

import React, { Component } from 'react';
import { Text, View,ScrollView } from 'react-native';
import PropTypes from "prop-types";
import ImagePicker from 'react-native-image-picker';
import { styles } from './styles';
import { GButtonComponent, GHeaderComponent, GFooterSettingsComponent, GIcon } from '../../CommonComponents';
import { CustomPageWizard } from '../../AppComponents';
import gblStrings from '../../Constants/GlobalStrings';
import * as ActionTypes from "../../Shared/ReduxConstants/ServiceActionConstants";
import AppUtils from '../../Utils/AppUtils';

const imagePickerOptions = {
    title: 'Select Image',
    customButtons: [
        { name: 'customOptionKey', title: 'Choose Photo from Custom Option' },
    ],
    storageOptions: {
        skipBackup: true,
        path: 'images',
        avatarSource: ''
    },
};

class SpecialtyAccSubmitComponent extends Component {
    constructor(props) {
        super(props);
        // set true to isLoading if data for this screen yet to be received and wanted to show loader.
        this.state = {
            isLoading: false,
            itemID: "",
            pageName: "",
            selectedItemID: "",
            selectedItemName: ""
        };
    }

    /*----------------------
                                 Component LifeCycle Methods 
                                                                 -------------------------- */
    componentDidMount() {

    }

    componentDidUpdate(prevProps) {
        AppUtils.Dlog("==Did Update Called==");
        const uploadImgKey = ActionTypes.UPLOAD_AVATAR;
        if (this.props.accOpeningData[uploadImgKey]) {
            if (this.props.accOpeningData[uploadImgKey] !== prevProps.accOpeningData[uploadImgKey]) {
                const tempResponse = this.props.accOpeningData[uploadImgKey];
               // alert ("Image stautus \n::"+JSON.stringify(tempResponse));
                if (tempResponse && tempResponse.b) {
                    if (tempResponse.b.Location) {
                        alert(`Image Uploaded Successfully \n::${ tempResponse.b.Location}`);
                    }
                }
            }
        }
    }

    /*----------------------
                                 Button Events
                                                                 -------------------------- */
    onClickHeader = () => {
        console.log("#TODO : onClickHeader");
    }

    goBack = () => {
        this.props.navigation.goBack();
    }

    onClickCancel = () => {
        this.props.navigation.goBack('termsAndConditions');
    }

    // onClickSave = () => {
    //    // this.validateFields();
    // }

    onClickSubmit = () => {
       // this.validateFields();
    }

    onPressCheck = (keyName) => () => this.setState({
        [keyName]: !this.state[keyName]
    });

    onSelected = (item) => {
        console.log(`item: ${ item.id}`);
        this.setState({ selectedItemID: item.id });
        this.setState({ selectedItemName: item.name });
        //  alert("You selected :: " + item.name)
    }

    uploadImage = () => {
        ImagePicker.showImagePicker(imagePickerOptions, (response) => {
            // AppUtils.Dlog('Response = ', response);

            if (response.didCancel) {
                AppUtils.Dlog('User cancelled image picker');
            } else if (response.error) {
                AppUtils.Dlog('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                AppUtils.Dlog('User tapped custom button: ', response.customButton);
            } else {
                AppUtils.Dlog('IMAGE PICKER SUCCESS::> ');

                const source = { uri: response.uri };
                const base64source = { uri: `data:image/jpeg;base64,${ response.data}` };
                // AppUtils.Dlog("base64source", base64source.length);
                this.setState({
                    userAvatar: source
                });
                if (response.data && response.data !== null && response.data !== undefined && response.data.length > 0) {
                    const payload = {
                        "Body": `${ response.data}`
                    };
                    this.props.uploadAavatarImg(payload);
                }

            }
        });
    }

    /*----------------------
                                 Render Methods
                                                                 -------------------------- */
    render() {

        const currentPage = 6;
        const { navigation } = this.props;
        const accType = navigation.getParam('accType', '');
        return (
            <View style={styles.container}>
                <GHeaderComponent navigation={this.props.navigation}
                onPress={this.onClickHeader}
                />
                <ScrollView style={styles.scrollViewFlex}>

                    <Text style={styles.accTypeTilte}>
                        {accType}
                    </Text>

                    <CustomPageWizard currentPage={currentPage} pageName={`${currentPage }  ${gblStrings.common.mail}`} />

                    { /* -----------Personal Info -------------------*/}
                    <View style={[styles.sectionGrp]}>
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
                            <Text style={styles.uploadText}>
                                {gblStrings.common.upload}
                            </Text>
                        </View>

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
    navigation: PropTypes.instanceOf(Object).isRequired,
    uploadAavatarImg: PropTypes.func,
    accOpeningData: PropTypes.instanceOf(Object),
  };

  SpecialtyAccSubmitComponent.defaultProps = {  
    uploadAavatarImg: null ,
};

export default SpecialtyAccSubmitComponent;

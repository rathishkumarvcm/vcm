import React, { Component } from 'react';
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { GHeaderComponent, GFooterSettingsComponent, GIcon, GButtonComponent } from '../../CommonComponents';
import PropTypes from 'prop-types';
import { CustomCheckBox } from '../../AppComponents';
import gblStrings from '../../Constants/GlobalStrings';

class AccountMessagingDeviceManagementComponent extends Component {
    constructor(props) {
        super(props);
        //set true to isLoading if data for this screen yet to be received and wanted to show loader.
        this.state = {
            isLoading: false,
            deviceSelected: false
        };
    }

    goBack = () => {
        this.props.navigation.goBack();
    }

    saveButtonAction = () => {        
        console.log('Save Button Clicked...');       
        const payloadData = {
            deviceSelected: this.state.deviceSelected
        };
        this.props.saveData(payloadData);
        this.props.navigation.goBack();                
        
    }

    setDeviceState = () => {     
        this.setState({deviceSelected : !this.state.deviceSelected });
    }

    navigategeneralSettings = () => this.props.navigation.navigate('generalSettings');

    componentDidMount() {
        if (this.props && this.props.accMessageDeviceinitialState){
            (this.props.accMessageDeviceinitialState.deviceSelected);
                this.setState({ deviceSelected : this.props.accMessageDeviceinitialState.deviceSelected });
        }        
    }
   
    render() {
        return (
            <View style={styles.container}>
                <GHeaderComponent
                    navigation={this.props.navigation}
                />
                <ScrollView style={{ flex: 0.85 }}>
                    <View style={styles.settingsView}>
                        <TouchableOpacity style={styles.touchOpacityPosition} onPress={this.navigategeneralSettings}>
                            <Text style={styles.settingsInfo}>
                                {gblStrings.settingAccountMessaging.setting}
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.touchOpacityPosition} onPress={this.goBack}>
                            <Text style={styles.settingsInfo}>
                                {gblStrings.settingAccountMessaging.accountMessagingArrow}
                            </Text>
                        </TouchableOpacity>
                        <Text style={styles.settingsInfoCurrent}>
                            {gblStrings.settingAccountMessaging.accountMessagingDeviceManageArrow}
                        </Text>
                    </View>

                    <View style={styles.settingsInfoHead}>
                        <Text style={styles.settingsInfoHeadTilte}>
                            {gblStrings.settingAccountMessaging.deviceManagementTitle}
                        </Text>
                        <Text style={styles.settingsInfo}>
                            {gblStrings.settingAccountMessaging.accountMessagingDeviceManageTitleDesc}
                        </Text>
                    </View>

                    <View style={styles.devicecontainer}>
                        <View style={styles.deviceHeaderview}>
                            <GIcon
                                name="minus"
                                type="antdesign"
                                size={30}
                                color="#088ACC"
                            />
                            <Text style={styles.deviceHeaderViewTitle}>
                                {gblStrings.settingAccountMessaging.deviceManagementTitle}
                            </Text>
                        </View>
                    </View>
                    <View style={styles.devicecontainerBottom}>
                        <Text style={styles.devicePushNotifyText}>
                            {gblStrings.settingAccountMessaging.accountMessagingDeviceManagePushNotify}
                        </Text>
                        <Text style={styles.devicePushNotifyText}>
                            {gblStrings.settingAccountMessaging.accountMessagingDeviceManageDeviceRemove}
                        </Text>

                        <View style={styles.deviceSectionGrp} >
                            <CustomCheckBox
                                size={20}
                                itemBottom={0}
                                itemTop={0}
                                outerCicleColor={"#707070"}
                                innerCicleColor={"#61285F"}
                                labelStyle={styles.deviceSectionTxt}
                                label={'iPhone XR'}
                                selected={this.state.deviceSelected}
                                onPress={this.setDeviceState}
                            />                            
                        </View>                              
                        <Text style={styles.lastUsedText}>{'        last used : 08/08/2019'}</Text>   
                    </View>
                   
                    <GButtonComponent
                        buttonStyle={styles.cancelButton}
                        buttonText={gblStrings.common.cancel}
                        textStyle={styles.cancelButtonText}
                        onPress={this.goBack}
                    />
                    <GButtonComponent
                        buttonStyle={styles.saveButton}
                        buttonText={gblStrings.common.save}
                        textStyle={styles.saveButtonText}
                        onPress={this.saveButtonAction}
                    />
                    <GFooterSettingsComponent />
                </ScrollView>
            </View>
        );
    }
}

AccountMessagingDeviceManagementComponent.propTypes = {
    navigation: PropTypes.instanceOf(Object)
};

AccountMessagingDeviceManagementComponent.defaultProps = {

};

export default AccountMessagingDeviceManagementComponent;

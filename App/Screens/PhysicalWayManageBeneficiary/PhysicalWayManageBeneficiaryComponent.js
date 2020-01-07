import React, { Component } from 'react';
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import { GHeaderComponent, GFooterComponent, GButtonComponent, GIcon } from '../../CommonComponents';
import gblStrings from '../../Constants/GlobalStrings';


class PhysicalWayManageBeneficiaryComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            disableNextButton: false
        };
    }

    render() {
        const { navigation } = this.props;
        return (
            <View style={styles.container}>
                <GHeaderComponent navigation={navigation} />
                <ScrollView style={styles.mainFlex}>

                    <View style={styles.paddingHorizontalStyle}>
                        <View style={styles.marginTopStyle}>
                            <Text style={styles.mainHeadingStyles}>Upload/ Mail Supporting Docs</Text>
                        </View>
                        <View style={styles.line} />
                        <View style={styles.marginTopStyle}>
                            <Text style={styles.normalTextTitle}>
                                Download and complete the “Mutual Fund Designation of Beneficiary -<Text style={styles.highlightedTextTitle}>Traditional</Text>, <Text style={styles.highlightedTextTitle}>Roth</Text>, <Text style={styles.highlightedTextTitle}>SEP</Text> and <Text style={styles.highlightedTextTitle}>Simple</Text> IRAs” form
                            </Text>
                        </View>
                        <View style={styles.marginTopStyle}>
                            <Text style={styles.contentTextStyle}>You may also upload the required docs or mail/fax to the address and number mentioned below</Text>
                        </View>
                        <View style={styles.uploadBtnContainer}>
                            <TouchableOpacity style={styles.selectBtnStyle}>
                                <Text style={styles.selectFileText}>Select files</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.uploadIconBtn}>
                                <GIcon name="file-upload" type="material" size={35} color="#E9E4E4" />
                                <Text style={styles.uploadTxt}>Upload</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.detailsContainer}>
                            <View style={styles.contentDetailView}>
                                <Text style={styles.detailTxtTitle}>Attachment limit</Text>
                                <Text style={styles.colonTxt}>:</Text>
                                <Text style={styles.detailTxtValue}>10 file</Text>
                            </View>
                            <View style={styles.contentDetailView}>
                                <Text style={styles.detailTxtTitle}>Size limit per file</Text>
                                <Text style={styles.colonTxt}>:</Text>
                                <Text style={styles.detailTxtValue}>30 MB (megabytes)</Text>
                            </View>
                            <View style={styles.contentDetailView}>
                                <Text style={styles.detailTxtTitle}>Total size limit</Text>
                                <Text style={styles.colonTxt}>:</Text>
                                <Text style={styles.detailTxtValue}>30 MB (megabytes)</Text>
                            </View>
                            <View style={styles.contentDetailView}>
                                <Text style={styles.detailTxtTitle}>Files types allowed</Text>
                                <Text style={styles.colonTxt}>:</Text>
                                <Text style={styles.detailTxtValue}>PDF, JPG, JPEG, GIF, BMP, PNG, XLS, DOC, DOCX</Text>
                            </View>
                        </View>
                        <Text style={styles.orTextStyle}>(or)</Text>
                        <View style={styles.marginTop}>
                            <Text style={styles.mailingTitle}>By Mailing</Text>
                            <View style={styles.marginTopStyle}>
                                <Text style={styles.mailingAddName}>Victory Capital </Text>
                                <Text style={styles.mailingAddress}>P.O. Box 659453 San Antonio, TX 78265-9009</Text>

                            </View>
                        </View>
                        <View style={styles.lastMarginTop}>
                            <Text style={styles.orTextStyle}>(or)</Text>
                            <Text style={styles.normalTextTitle}>You can also fax your application to <Text style={styles.highlightedTextTitle}>800-292-8177</Text></Text>
                        </View>
                    </View>

                    {/* ----------------- Button Group -------------------- */}

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
                        />
                        <GButtonComponent
                            buttonStyle={styles.normalWhiteBtn}
                            buttonText={gblStrings.common.back}
                            textStyle={styles.normalWhiteBtnTxt}
                        />
                        <GButtonComponent
                            buttonStyle={this.state.disableNextButton ? styles.normalBlackDisabledBtn : styles.normalBlackBtn}
                            buttonText={gblStrings.common.submit}
                            textStyle={this.state.disableNextButton ? styles.normalBlackBtnTxt : styles.normalBlackBtnDisabledTxt}
                            disabled={this.state.disableNextButton}
                        />
                    </View>

                    {/* ---------------------- Footer View -------------------- */}

                    <View style={styles.fullLine} />
                    <View style={styles.tNCFlex}>
                        <Text style={styles.tNcHeader}>{gblStrings.userManagement.VCDiscalimerTitle}{"\n"}</Text>
                        <Text style={styles.tNcBody}>{gblStrings.userManagement.VCDiscalimerDesc}{"\n"}{"\n"}{gblStrings.userManagement.VCPrivacyNoticeDesc} </Text>
                    </View>
                    <GFooterComponent />
                </ScrollView>

            </View>

        );
    }
}


PhysicalWayManageBeneficiaryComponent.propTypes = {
    navigation: PropTypes.instanceOf(Object)
};

PhysicalWayManageBeneficiaryComponent.defaultProps = {
    navigation: {}
};

export default PhysicalWayManageBeneficiaryComponent;
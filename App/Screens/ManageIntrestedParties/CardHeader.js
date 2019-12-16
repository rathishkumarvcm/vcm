import React, { Component } from 'react';
import { View, Text,TouchableOpacity } from 'react-native';
import { GIcon } from '../../CommonComponents';
import PropTypes from "prop-types";
import { styles } from './styles';
import gblStrings from '../../Constants/GlobalStrings';

class CardHeader extends Component{

    state={
        showModal:false,
    }
    updateState=()=>{
        this.setState({showModal:!this.state.showModal});
    }

    render(){
        return(
            <View >
                <View style={styles.innerHeaderView}>
                    <View style={styles.flexDirectionStyle}>
                         <Text style={styles.shortContentText}>{gblStrings.accManagement.contractNumber}</Text>
                        <Text style={[styles.shortContentValueText,styles.paddingStyleLeft]}>{this.props.item.contract_Number}</Text>
                    </View>
                    <TouchableOpacity style={styles.sideBtn} onPress={this.updateState}>
                        <GIcon name="dots-three-vertical" type="entypo" size={30} color="black" />
                    </TouchableOpacity>
                </View>
                {this.state.showModal?
                <View style={styles.shadowView}>
                    <TouchableOpacity onPress={this.props.navigate()}>
                        <Text style={styles.lblTxtInner} >{gblStrings.common.edit}</Text>
                    </TouchableOpacity>
                    <Text style={styles.lblLine} />
                    <TouchableOpacity>
                        <Text style={styles.lblTxtInner} >{gblStrings.common.delete}</Text>
                    </TouchableOpacity>
                </View>:null
                }
            </View>        
        );
    }
}

CardHeader.propTypes = {
    item: PropTypes.instanceOf(Object).isRequired,
    navigate: PropTypes.func
};

export default CardHeader;
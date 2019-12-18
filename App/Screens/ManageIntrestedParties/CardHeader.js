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

    edit=()=>{
        this.setState({showModal:false});
        this.props.navigate();
    }

    delete=()=>{
        this.setState({showModal:false});
        this.props.onDelete();
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
                    <TouchableOpacity onPress={this.edit}>
                        <Text style={styles.lblTxtInner} >{gblStrings.common.edit}</Text>
                    </TouchableOpacity>
                    <Text style={styles.lblLine} />
                    <TouchableOpacity onPress={this.delete}>
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
    navigate: PropTypes.func,
    onDelete: PropTypes.func
};

export default CardHeader;
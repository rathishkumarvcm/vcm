import React from 'react';
import { TouchableOpacity } from 'react-native';
import PropTypes from "prop-types";
import { scaledHeight } from '../Utils/Resolution';
import { GInputComponent, GIcon} from '../CommonComponents';




const CustomDropDown = React.forwardRef ((props) => (
    <TouchableOpacity 
    style={{
        zindex: 35, flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end', marginTop: scaledHeight(9),
    }} 
    onPress={props.onPress}
    ref={props.inputref}

    >

        <GInputComponent
            propInputStyle={props.propInputStyle}
            placeholder={props.placeholder}
            editable={false}
            value={props.value}
        />

        <TouchableOpacity style={{ alignItems: 'center', position: 'absolute' }} onPress={props.onPress}>
            <GIcon
                name="md-arrow-dropdown"
                type="ionicon"
                size={20}
                color="black"
            />
        </TouchableOpacity>
    </TouchableOpacity>
));

CustomDropDown.propTypes = {
    onPress: PropTypes.func,
    inputref: PropTypes.func,
    propInputStyle: PropTypes.instanceOf(Object),
    placeholder: PropTypes.string,
    value:PropTypes.string
};

CustomDropDown.defaultProps = {
    onPress: null,
    inputref: null,
    propInputStyle: {},
    placeholder: "",
    value:""

};
export default CustomDropDown;
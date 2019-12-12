import { connect } from "react-redux";
import editAddressInfoComponent from './EditAddressInfoComponent';
import {profileSettingsAction} from '../../Shared/Actions';

const mapStateToProps = (state /* , props */) => (
  {
    profileState: state.profileInformationData,
    stateCityData:state.addressFormatData
  }
);

const mapDispatchToProps = {
  ...profileSettingsAction
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(editAddressInfoComponent);
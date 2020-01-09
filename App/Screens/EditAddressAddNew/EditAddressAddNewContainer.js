import { connect } from "react-redux";
import editAddressAddNewComponent from './EditAddressAddNewComponent';
import { profileSettingsAction } from "../../Shared/Actions";
import { addressFormatActions } from "../../Shared/Actions";

const mapStateToProps = (state /* , props */) => (
  {
    profileState: state.profileInformationData,
    stateCityData: state.addressFormatData
  }
);

const mapDispatchToProps = {
  ...profileSettingsAction,
  ...addressFormatActions
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(editAddressAddNewComponent);
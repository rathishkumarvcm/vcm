import { connect } from "react-redux";
import editOccupationInfoComponent from './EditOccupationInfoComponent';
import { profileSettingsAction, addressFormatActions } from "../../Shared/Actions";

const mapStateToProps = (state /* , props */) => (
  {
    profileState: state.profileInformationData,
    profileSettingsLookup: state.masterLookUpData,
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
)(editOccupationInfoComponent);
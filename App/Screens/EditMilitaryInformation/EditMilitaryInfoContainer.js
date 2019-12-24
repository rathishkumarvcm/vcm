import { connect } from "react-redux";
import editMilitaryInfoComponent from './EditMilitaryInfoComponent';
import { accOpeningActions, profileSettingsAction } from "../../Shared/Actions";

const mapStateToProps = (state /* , props */) => (
  {
    accOpeningData: state.accOpeningReducerData,
    profileSettingsLookup: state.masterLookUpData,
    profileState: state.profileInformationData,
  }
);

const mapDispatchToProps = {
  ...accOpeningActions,
  ...profileSettingsAction
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(editMilitaryInfoComponent);
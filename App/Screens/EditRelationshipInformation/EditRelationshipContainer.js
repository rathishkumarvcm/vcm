import { connect } from "react-redux";
import editRelationshipComponent from './EditRelationshipComponent';
import { profileSettingsAction } from "../../Shared/Actions";

const mapStateToProps = (state /* , props */) => (
  {
    profileSettingsLookup: state.masterLookUpData,
    profileState: state.profileInformationData
  }
);

const mapDispatchToProps = {
  ...profileSettingsAction
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(editRelationshipComponent);
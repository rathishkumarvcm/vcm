import { connect } from "react-redux";
import editAddFinancialInfoComponent from './EditAddFinancialInfoComponent';
import { profileSettingsAction } from "../../Shared/Actions";

const mapStateToProps = (state /* , props */) => (
  {
    profileSettingsLookup: state.masterLookUpData
  }
);

const mapDispatchToProps = {
  ...profileSettingsAction
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(editAddFinancialInfoComponent);
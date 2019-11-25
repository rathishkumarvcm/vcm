import { connect } from "react-redux";
import ProfileSettingsComponent from './ProfileSettingsComponent';

const mapStateToProps = (state /* , props */) => (
  {
    initialState: state.initialAppData
  }
);

const mapDispatchToProps = {
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileSettingsComponent);
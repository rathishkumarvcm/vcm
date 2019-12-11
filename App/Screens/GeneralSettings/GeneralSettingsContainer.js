import { connect } from "react-redux";
import GeneralSettingsComponent from './GeneralSettingsComponent';

const mapStateToProps = (state /* , props */) => (
    {
      initialState :state.initialAppData,
    }
  );

const mapDispatchToProps = {   
  };

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(GeneralSettingsComponent);
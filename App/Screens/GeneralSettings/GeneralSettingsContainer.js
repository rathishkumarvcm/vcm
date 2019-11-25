import { connect } from "react-redux";
import GeneralSettingsComponent from './GeneralSettingsComponent';
import { getLogin } from "../../Shared/Reducers";
import { loginActions } from "../../Shared/Actions";


const mapStateToProps = (state /* , props */) => (
    {
      loginData: getLogin(state)
    }
  );

const mapDispatchToProps = {
    ...loginActions
  };

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(GeneralSettingsComponent);
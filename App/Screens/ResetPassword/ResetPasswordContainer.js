import { connect } from "react-redux";
import ResetPasswordComponent from './ResetPasswordComponent';
import {loginActions} from "../../Shared/Actions";


const mapStateToProps = (state) => (
  {
    loginData:state.loginData,
    initialState :state.initialAppData
  }
);

const mapDispatchToProps = {
  ...loginActions
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(ResetPasswordComponent);
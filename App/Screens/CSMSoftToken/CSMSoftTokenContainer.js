import { connect } from "react-redux";
import CSMOtpSoftToken from './CSMSoftTokenComponent';
import {loginActions,SignInMethodsActions} from "../../Shared/Actions";


const mapStateToProps = (state) => (
  {
    loginState: state.loginData,
    initialState :state.initialAppData,
    signInMethodsData : state.signInMethodsData

  }
);

const mapDispatchToProps = {
  ...loginActions,
  ...SignInMethodsActions
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(CSMOtpSoftToken);
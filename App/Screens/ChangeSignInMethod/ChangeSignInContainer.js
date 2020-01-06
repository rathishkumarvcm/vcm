import { connect } from "react-redux";
import ChangeSignInMethodComponent from './ChangeSignInMethodComponent';
import {loginActions,SignInMethodsActions} from "../../Shared/Actions";


const mapStateToProps = (state) => (
  {
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
  )(ChangeSignInMethodComponent);
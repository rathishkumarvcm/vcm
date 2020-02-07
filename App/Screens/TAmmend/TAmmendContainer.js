import { connect } from "react-redux";
import TAmmendComponent from './TAmmendComponent';
import { loginActions, ammendActions, purchaseActions } from "../../Shared/Actions";


const mapStateToProps = (state) => (
  {
    loginState: state.loginData,
    initialState: state.initialAppData,
    amendReducerData: state.amendReducerData
  }
);

const mapDispatchToProps = {
  ...loginActions,
  ...ammendActions,
  ...purchaseActions
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TAmmendComponent);
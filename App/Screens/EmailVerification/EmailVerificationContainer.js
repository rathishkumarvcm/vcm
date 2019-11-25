import { connect } from "react-redux";
import EmailVerificationComponent from './EmailVerificationComponent';
import { loginActions } from "../../Shared/Actions";


const mapStateToProps = (state /* , props */) => (
    {
      //loginData: getLogin(state)
    }
  );

const mapDispatchToProps = {
    ...loginActions
  };

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(EmailVerificationComponent);
import { connect } from "react-redux";
import OnlineIDVerificationComponent from './OnlineIDVerificationComponent';
import { loginActions } from "../../Shared/Actions";


const mapStateToProps = ( /* , props */) => (
    {
      // loginData: getLogin(state)
    }
  );

const mapDispatchToProps = {
    ...loginActions
  };

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(OnlineIDVerificationComponent);
import { connect } from "react-redux";
import OtpSeucrityConfirmComponent from './OtpSeucrityConfirmComponent';
import {loginActions} from "../../Shared/Actions";



const mapStateToProps = (state /* , props */) => (
    {
      loginState: state.loginData,
      initialState :state.initialAppData,
      saveQuestionsData: state.saveQuestionsData,
    }
  );

const mapDispatchToProps = {
  ...loginActions
  };

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(OtpSeucrityConfirmComponent);
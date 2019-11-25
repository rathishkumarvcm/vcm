import { connect } from "react-redux";
import RecoveryOtpComponent from './RecoverOtpComponent';




const mapStateToProps = (state /* , props */) => (
    {
      initialState :state.initialAppData
    }
  );

const mapDispatchToProps = {
    
  };

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(RecoveryOtpComponent);
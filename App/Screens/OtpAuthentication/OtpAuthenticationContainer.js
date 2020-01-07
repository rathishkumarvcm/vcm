import { connect } from "react-redux";
import OtpAuthenticationComponent from './OtpAuthenticationComponent';


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
  )(OtpAuthenticationComponent);
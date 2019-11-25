import { connect } from "react-redux";
import OtpConfirmComponent from './OtpConfirmComponent';
import { getLogin } from "../../Shared/Reducers";


const mapStateToProps = (state /* , props */) => (
    {
      loginData: getLogin(state)
    }
  );

const mapDispatchToProps = {
   
  };

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(OtpConfirmComponent);
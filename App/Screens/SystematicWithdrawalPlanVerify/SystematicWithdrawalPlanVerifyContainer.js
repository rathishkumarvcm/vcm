import { connect } from "react-redux";
import SystematicWithdrawalPlanVerifyComponent from './SystematicWithdrawalPlanVerifyComponent';



const mapStateToProps = (state /* , props */) => (
    {
      systematicWithdrawalState:state.systematicWithdrawalData,
    }
  );

const mapDispatchToProps = {
    
  };

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(SystematicWithdrawalPlanVerifyComponent);
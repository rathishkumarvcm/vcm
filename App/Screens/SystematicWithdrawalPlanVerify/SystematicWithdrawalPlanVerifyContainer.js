import { connect } from "react-redux";
import SystematicWithdrawalPlanVerifyComponent from './SystematicWithdrawalPlanVerifyComponent';



const mapStateToProps = (state /* , props */) => (
    {
      systematicWithdrawalProps:state.systematicWithdrawalData,
    }
  );

const mapDispatchToProps = {
    
  };

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(SystematicWithdrawalPlanVerifyComponent);
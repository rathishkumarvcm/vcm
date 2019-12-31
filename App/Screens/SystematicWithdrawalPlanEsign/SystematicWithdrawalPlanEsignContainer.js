import { connect } from "react-redux";
import SystematicWithdrawalPlanEsignComponent from './SystematicWithdrawalPlanEsignComponent';
import {addSystematicWithdrawalActions } from "../../Shared/Actions";


const mapStateToProps = (state /* , props */) => (
    {
      systematicWithdrawalState:state.systematicWithdrawalData,
    }
  );

const mapDispatchToProps = {
    ...addSystematicWithdrawalActions
  };

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(SystematicWithdrawalPlanEsignComponent);
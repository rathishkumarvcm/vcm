import { connect } from "react-redux";
import SystematicWithdrawalPlanScheduleComponent from './SystematicWithdrawalPlanScheduleComponent';



const mapStateToProps = (state) => ({
      systematicWithdrawalState:state.systematicWithdrawalData,
    }
  );

const mapDispatchToProps = {
    
  };

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(SystematicWithdrawalPlanScheduleComponent);
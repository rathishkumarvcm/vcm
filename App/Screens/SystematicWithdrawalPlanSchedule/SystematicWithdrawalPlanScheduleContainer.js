import { connect } from "react-redux";
import SystematicWithdrawalPlanScheduleComponent from './SystematicWithdrawalPlanScheduleComponent';



const mapStateToProps = (state) => ({
      systematicWithdrawalProps:state.systematicWithdrawalData,
    }
  );

const mapDispatchToProps = {
    
  };

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(SystematicWithdrawalPlanScheduleComponent);
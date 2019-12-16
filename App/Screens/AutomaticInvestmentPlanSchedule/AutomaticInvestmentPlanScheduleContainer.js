import { connect } from "react-redux";
import AutomaticInvestmentPlanScheduleComponent from './AutomaticInvestmentPlanScheduleComponent';



const mapStateToProps = (state) => ({
      automaticInvestmentState:state.automaticInvestmentData,
    });

const mapDispatchToProps = {
    
  };

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(AutomaticInvestmentPlanScheduleComponent);
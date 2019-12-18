import { connect } from "react-redux";
import AutomaticInvestmentPlanScheduleComponent from './AutomaticInvestmentPlanScheduleComponent';
import {addAutomaticInvestmentActions } from "../../Shared/Actions";


const mapStateToProps = (state) => ({
      automaticInvestmentState:state.automaticInvestmentData,
    });

const mapDispatchToProps = {
  ...addAutomaticInvestmentActions
  };

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(AutomaticInvestmentPlanScheduleComponent);
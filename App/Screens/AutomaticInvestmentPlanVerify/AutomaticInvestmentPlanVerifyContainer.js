import { connect } from "react-redux";
import AutomaticInvestmentPlanVerifyComponent from './AutomaticInvestmentPlanVerifyComponent';
import {addAutomaticInvestmentActions } from "../../Shared/Actions";


const mapStateToProps = (state) => ({
    automaticInvestmentState:state.automaticInvestmentData,
    }
  );

const mapDispatchToProps = {
  ...addAutomaticInvestmentActions
  };

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(AutomaticInvestmentPlanVerifyComponent);
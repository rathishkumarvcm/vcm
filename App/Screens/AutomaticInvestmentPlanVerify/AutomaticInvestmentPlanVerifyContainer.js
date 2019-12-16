import { connect } from "react-redux";
import AutomaticInvestmentPlanVerifyComponent from './AutomaticInvestmentPlanVerifyComponent';



const mapStateToProps = (state) => ({
    automaticInvestmentState:state.automaticInvestmentData,
    }
  );

const mapDispatchToProps = {
    
  };

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(AutomaticInvestmentPlanVerifyComponent);
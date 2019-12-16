import { connect } from "react-redux";
import autoInvestmentComponent from './AutomaticInvestmentComponent';



const mapStateToProps = (state) => ({
      automaticInvestmentState:state.automaticInvestmentData,
  });

const mapDispatchToProps = {
    
  };

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(autoInvestmentComponent);
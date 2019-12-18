import { connect } from "react-redux";
import autoInvestmentAccountComponent from './AutomaticInvestmentAccountComponent';
import { addAutomaticInvestmentActions } from "../../Shared/Actions";



const mapStateToProps = (state) => ({
      accountState:state.accountData,
      automaticInvestmentState:state.automaticInvestmentData,
  });

const mapDispatchToProps = {
    ...addAutomaticInvestmentActions
  };

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(autoInvestmentAccountComponent);
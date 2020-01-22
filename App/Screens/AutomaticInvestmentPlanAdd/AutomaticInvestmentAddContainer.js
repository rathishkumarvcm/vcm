import { connect } from "react-redux";
import autoInvestmentAddComponent from './AutomaticInvestmentAddComponent';
import { accOpeningActions,bankAccountAction } from "../../Shared/Actions";// addAutomaticInvestmentActions



const mapStateToProps = (state) => ({
      fundListState:state.accOpeningReducerData,
      automaticInvestmentState:state.automaticInvestmentData,
      bankAccountInfo: state.bankAccountReducerData.bankAccountInfo,

  });

const mapDispatchToProps = {
  ...accOpeningActions,
  // ...addAutomaticInvestmentActions,
  ...bankAccountAction
  };

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(autoInvestmentAddComponent);
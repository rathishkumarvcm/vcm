import { connect } from "react-redux";
import autoInvestmentAddComponent from './AutomaticInvestmentAddComponent';
import { accOpeningActions,addAutomaticInvestmentActions } from "../../Shared/Actions";// ,getBankAccountInfo



const mapStateToProps = (state) => ({
      // automaticInvestmentState:state.automaticInvestmentData,
      fundListState:state.accOpeningReducerData,
      automaticInvestmentState:state.automaticInvestmentData,
      // bankAccountInfo: state.bankAccountReducerData.bankAccountInfo,

  });

const mapDispatchToProps = {
  ...accOpeningActions,
  ...addAutomaticInvestmentActions,
 //  ...getBankAccountInfo
  };

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(autoInvestmentAddComponent);
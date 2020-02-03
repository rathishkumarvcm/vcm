import { connect } from "react-redux";
import autoInvestmentAddComponent from './AutomaticInvestmentAddComponent';
import { accOpeningActions,bankAccountAction,addressFormatActions } from "../../Shared/Actions";// addAutomaticInvestmentActions



const mapStateToProps = (state) => ({
      fundListState:state.accOpeningReducerData,
      automaticInvestmentState:state.automaticInvestmentData,
      addressFormatData:state.addressFormatData,
      bankAccountInfo: state.bankAccountReducerData.bankAccountInfo,

  });

const mapDispatchToProps = {
  ...accOpeningActions,
  // ...addAutomaticInvestmentActions,
  ...bankAccountAction,
  ...addressFormatActions
  };

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(autoInvestmentAddComponent);
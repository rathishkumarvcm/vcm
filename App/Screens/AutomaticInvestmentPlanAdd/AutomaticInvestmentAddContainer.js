import { connect } from "react-redux";
import autoInvestmentAddComponent from './AutomaticInvestmentAddComponent';
import { accOpeningActions,addAutomaticInvestmentActions } from "../../Shared/Actions";



const mapStateToProps = (state) => ({
      //automaticInvestmentState:state.automaticInvestmentData,
      fundListState:state.accOpeningReducerData

  });

const mapDispatchToProps = {
  ...accOpeningActions,
  ...addAutomaticInvestmentActions

  };

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(autoInvestmentAddComponent);
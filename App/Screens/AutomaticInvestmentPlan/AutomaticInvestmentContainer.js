import { connect } from "react-redux";
import autoInvestmentComponent from './AutomaticInvestmentComponent';
//import {addAutomaticInvestmentActions } from "../../Shared/Actions";


const mapStateToProps = (state) => ({
      automaticInvestmentState:state.automaticInvestmentData,
  });

const mapDispatchToProps = {
  //...addAutomaticInvestmentActions
  };

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(autoInvestmentComponent);
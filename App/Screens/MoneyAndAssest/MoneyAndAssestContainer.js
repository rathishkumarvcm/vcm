import { connect } from "react-redux";
import MoneyAndAssestComponent from './MoneyAndAssestComponent';
import {moneyAssestActions} from "../../Shared/Actions";

const mapStateToProps = ( state /* , props */) => ({
      moneyAndAssestProps:state.moneyAndAssestData,
  }
);

const mapDispatchToProps = {
  ...moneyAssestActions
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MoneyAndAssestComponent);
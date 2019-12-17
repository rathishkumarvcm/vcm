import { connect } from 'react-redux';
import LiquidationPageOneComponent from './LiquidationPageOneComponent';
import { liquidationPageOneActions } from "../../Shared/Actions";

/*----------------------
                                  Redux Methods
                                                             -------------------------- */

const mapStateToProps = (state /* , props */) => ({
    liquidationPageOneInitialState: state.liquidationPageOneData,
});

const mapDispatchToProps = {
  ...liquidationPageOneActions,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LiquidationPageOneComponent);

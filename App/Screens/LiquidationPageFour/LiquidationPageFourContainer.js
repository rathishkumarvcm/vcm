import { connect } from 'react-redux';
import LiquidationPageFourComponent from './LiquidationPageFourComponent';
import { liquidationPageFourActions } from "../../Shared/Actions";

/*----------------------
                                  Redux Methods
                                                             -------------------------- */

const mapStateToProps = (state /* , props */) => ({
    liquidationPageFourInitialState: state.liquidationPageFourData,
    liquidationPageOneInitialState: state.liquidationPageOneData,
    liquidationPageTwoInitialState: state.liquidationPageTwoData,
});

const mapDispatchToProps = {
  ...liquidationPageFourActions,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LiquidationPageFourComponent);

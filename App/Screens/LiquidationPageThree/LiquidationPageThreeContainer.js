import { connect } from 'react-redux';
import LiquidationPageThreeComponent from './LiquidationPageThreeComponent';
import { liquidationPageThreeActions } from "../../Shared/Actions";

/*----------------------
                                  Redux Methods
                                                             -------------------------- */

const mapStateToProps = (state /* , props */) => ({
    liquidationPageThreeInitialState: state.liquidationPageThreeData,
    liquidationPageOneInitialState: state.liquidationPageOneData,
});

const mapDispatchToProps = {
  ...liquidationPageThreeActions,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LiquidationPageThreeComponent);

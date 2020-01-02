import { connect } from 'react-redux';
import LiquidationFinishComponent from './LiquidationFinishComponent';
import { liquidationActions, ammendActions } from "../../Shared/Actions";

/*----------------------
                                  Redux Methods
                                                             -------------------------- */

const mapStateToProps = (state /* , props */) => ({
  liquidationInitialState: state.liquidationData,
  amendReducerData:state.amendReducerData
});

const mapDispatchToProps = {
  ...liquidationActions,
  ...ammendActions
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LiquidationFinishComponent);

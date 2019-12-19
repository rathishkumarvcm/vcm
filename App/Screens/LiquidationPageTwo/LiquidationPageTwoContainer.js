import { connect } from 'react-redux';
import LiquidationPageTwoComponent from './LiquidationPageTwoComponent';
import { liquidationPageTwoActions } from "../../Shared/Actions";

/*----------------------
                                  Redux Methods
                                                             -------------------------- */

const mapStateToProps = (state /* , props */) => ({
    liquidationPageTwoInitialState: state.liquidationPageTwoData,
});

const mapDispatchToProps = {
  ...liquidationPageTwoActions,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LiquidationPageTwoComponent);

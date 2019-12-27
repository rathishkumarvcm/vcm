import { connect } from 'react-redux';
import PurchaseFourComponent from './PurchaseScreenFourComponent';
import { liquidationActions } from "../../Shared/Actions";

/*----------------------
                                  Redux Methods
                                                             -------------------------- */

const mapStateToProps = (state /* , props */) => ({
  liquidationInitialState: state.liquidationData,
});

const mapDispatchToProps = {
  ...liquidationActions,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PurchaseFourComponent);

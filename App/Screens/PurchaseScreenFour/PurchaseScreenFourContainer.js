import { connect } from 'react-redux';
import PurchaseFourComponent from './PurchaseScreenFourComponent';
import { ammendActions,purchaseActions } from "../../Shared/Actions";

/*----------------------
                                  Redux Methods
                                                             -------------------------- */

const mapStateToProps = (state /* , props */) => ({
  purchaseData: state.purchaseData,
  amendReducerData: state.amendReducerData,
});

const mapDispatchToProps = {
  ...ammendActions,
  ...purchaseActions
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PurchaseFourComponent);

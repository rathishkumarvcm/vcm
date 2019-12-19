import { connect } from 'react-redux';
import PurchaseScreenOneComponent from './PurchaseScreenOneComponent';
import { purchaseActions } from "../../Shared/Actions";

/*----------------------
                                  Redux Methods
                                                             -------------------------- */

const mapStateToProps = (state /* , props */) => ({
  purchaseData: state.purchaseData,
});

const mapDispatchToProps = {
  ...purchaseActions,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PurchaseScreenOneComponent);

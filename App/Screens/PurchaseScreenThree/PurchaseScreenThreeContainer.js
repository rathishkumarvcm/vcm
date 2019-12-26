import { connect } from 'react-redux';
import PurchaseScreenThreeComponent from './PurchaseScreenThreeComponent';
import { purchaseActions, accOpeningActions } from "../../Shared/Actions";

/*----------------------
                                  Redux Methods
                                                             -------------------------- */

const mapStateToProps = (state /* , props */) => ({
  purchaseData: state.purchaseData,
  accOpeningData: state.accOpeningReducerData,
  masterLookupStateData: state.masterLookupStateData
});

const mapDispatchToProps = {
  ...purchaseActions,
  ...accOpeningActions
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PurchaseScreenThreeComponent);

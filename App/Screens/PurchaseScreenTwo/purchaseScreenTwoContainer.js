import { connect } from 'react-redux';
import PurchaseScreenTwoComponent from './PurchaseScreenTwoComponent';
import { accOpeningActions, purchaseActions} from "../../Shared/Actions";
/*----------------------
                                  Redux Methods
                                                             -------------------------- */

const mapStateToProps = (state /* , props */) => ({
    accOpeningData: state.accOpeningReducerData,
    initialState: state.initialAppData,
    masterLookupStateData: state.masterLookUpData,
    purchaseData:state.purchaseData
});

const mapDispatchToProps = {
  ...accOpeningActions,
  ...purchaseActions
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PurchaseScreenTwoComponent);

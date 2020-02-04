import { connect } from 'react-redux';
import ExchangeScreenThreeComponent from './exchangeScreenThreeComponent';
import { accOpeningActions, exchangeActions, purchaseActions } from "../../Shared/Actions";
/* ----------------------
                                  Redux Methods
                                                             -------------------------- */

const mapStateToProps = (state /* , props */) => ({
  accOpeningData: state.accOpeningReducerData,
  initialState: state.initialAppData,
  masterLookupStateData: state.masterLookUpData,
  exchangeData: state.exchangeData,
  purchaseData: state.purchaseData
});

const mapDispatchToProps = {
  ...accOpeningActions,
  ...exchangeActions,
  ...purchaseActions
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ExchangeScreenThreeComponent);

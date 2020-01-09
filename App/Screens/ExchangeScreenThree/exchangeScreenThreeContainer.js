import { connect } from 'react-redux';
import ExchangeScreenThreeComponent from './exchangeScreenThreeComponent';
import { accOpeningActions, exchangeActions } from "../../Shared/Actions";
/* ----------------------
                                  Redux Methods
                                                             -------------------------- */

const mapStateToProps = (state /* , props */) => ({
  accOpeningData: state.accOpeningReducerData,
  initialState: state.initialAppData,
  masterLookupStateData: state.masterLookUpData,
  exchangeData: state.exchangeData,
});

const mapDispatchToProps = {
  ...accOpeningActions,
  ...exchangeActions
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ExchangeScreenThreeComponent);

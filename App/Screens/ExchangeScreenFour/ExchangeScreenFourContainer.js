import { connect } from 'react-redux';
import ExchangeScreenFourComponent from './ExchangeScreenFourComponent';
import { exchangeActions,ammendActions } from "../../Shared/Actions";
/* ----------------------
                                  Redux Methods
                                                             -------------------------- */

const mapStateToProps = (state /* , props */) => ({
  
  exchangeData: state.exchangeData,
  amendReducerData: state.amendReducerData,
});

const mapDispatchToProps = {
  
  ...exchangeActions
  ,...ammendActions
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ExchangeScreenFourComponent);

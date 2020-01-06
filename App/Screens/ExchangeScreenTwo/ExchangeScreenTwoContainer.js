import { connect } from 'react-redux';
import ExchangeScreenTwoComponent from './ExchangeScreenTwoComponent';
import { exchangeActions } from "../../Shared/Actions";

/*----------------------
                                  Redux Methods
                                                             -------------------------- */

const mapStateToProps = (state /* , props */) => ({
  exchangeData: state.exchangeData,
});

const mapDispatchToProps = {
  ...exchangeActions,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ExchangeScreenTwoComponent);

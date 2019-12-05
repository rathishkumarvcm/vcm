import { connect } from 'react-redux';
import AccountMessagingAdviceComponent from './AccountMessagingAdviceComponent';
import { accMessagingAdviceActions } from "../../Shared/Actions";

/*----------------------
                                  Redux Methods
                                                             -------------------------- */

const mapStateToProps = (state /* , props */) => ({
  accMessageAdviceinitialState: state.accMessagingAdviceData,  
});

const mapDispatchToProps = {
  ...accMessagingAdviceActions,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AccountMessagingAdviceComponent);

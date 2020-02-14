import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AccountSummaryComponent from './AccountSummaryComponent';
import { addHoldingGroup, removeHoldingGroup } from '../../Shared/Actions/AccountSummaryAction';

// const mapStateToProps = () => {
//     return {

//     };
// };
// const mapDispatchToProps = () => {
//     return {

//     };
// };

const mapStateToProps = (state /* , props */) => ({
        accountSummaryInitialState: state.accountSummaryData,
});

const mapDispatchToProps = (dispatch) => ({
        addHoldingGroup: bindActionCreators(addHoldingGroup, dispatch),
        removeHoldingGroup: bindActionCreators(removeHoldingGroup, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(AccountSummaryComponent);

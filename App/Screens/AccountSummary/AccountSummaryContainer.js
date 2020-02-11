import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AccountSummaryComponent from './AccountSummaryComponent';
import { addHoldingGroup } from '../../Shared/Actions/AccountSummaryAction';

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

const mapDispatchToProps = (dispatch) => {
        return {
                addHoldingGroup: bindActionCreators(addHoldingGroup, dispatch)
        };
};

export default connect(mapStateToProps, mapDispatchToProps)(AccountSummaryComponent);

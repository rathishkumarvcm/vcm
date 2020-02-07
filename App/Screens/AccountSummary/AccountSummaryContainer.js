import { connect } from 'react-redux';
import AccountSummaryComponent from './AccountSummaryComponent';

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

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(AccountSummaryComponent);

import { connect } from "react-redux";
import BankAccountsComponent from './BankAccountsComponent';
import { bankAccountAction } from "../../Shared/Actions";


const mapStateToProps = (state /* , props */) => (
    {
        bankAccountInfo: state.bankAccountReducerData.bankAccountInfo,
    }
);

const mapDispatchToProps = {
    ...bankAccountAction
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BankAccountsComponent);
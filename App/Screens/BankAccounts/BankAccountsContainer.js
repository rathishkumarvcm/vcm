import { connect } from "react-redux";
import BankAccountsComponent from './BankAccountsComponent';
import { getBankAccountInfo } from "../../Shared/Actions";


const mapStateToProps = (state /* , props */) => (
    {
        bankAccountInfo: state.bankAccountReducerData.bankAccountInfo,
    }
);

const mapDispatchToProps = {
    ...getBankAccountInfo
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BankAccountsComponent);
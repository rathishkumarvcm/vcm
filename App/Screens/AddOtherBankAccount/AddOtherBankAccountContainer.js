import { connect } from "react-redux";
import AddOtherBankAccountComponent from './AddOtherBankAccountComponent';
import { addBankAccountAction } from "../../Shared/Actions";

/*----------------------
                                  Redux Methods
                                                             -------------------------- */

const mapStateToProps = (state /* , props */) => (
    {
        addBankAccount: state.addBankAccountData
    }
);

const mapDispatchToProps = {
    ...addBankAccountAction
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AddOtherBankAccountComponent);
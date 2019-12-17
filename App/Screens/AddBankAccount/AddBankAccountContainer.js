import { connect } from "react-redux";
import AddBankAccountComponent from './AddBankAccountComponent';
import { getPopularBankNames } from "../../Shared/Actions";


const mapStateToProps = (state /* , props */) => (
    {
        popularBankInfo: state.popularBankReducerData.popularBankInfo,
    }
);

const mapDispatchToProps = {
    ...getPopularBankNames
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AddBankAccountComponent);
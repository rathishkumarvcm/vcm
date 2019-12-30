import { connect } from "react-redux";
import DividentsForAccountComponent from './DividentsForAccountComponent';
import { getDividentsInfo } from "../../Shared/Actions";


const mapStateToProps = (state /* , props */) => (
    {
        dividentsInfo: state.dividentsReducerData.dividentsInfo,
    }
);

const mapDispatchToProps = {
    ...getDividentsInfo
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DividentsForAccountComponent);
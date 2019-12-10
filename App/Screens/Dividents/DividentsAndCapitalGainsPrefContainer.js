import { connect } from "react-redux";
import DividentsAndCapitalGainsPrefComponent from './DividentsAndCapitalGainsPrefComponent';
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
)(DividentsAndCapitalGainsPrefComponent);
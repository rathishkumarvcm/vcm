import { connect } from "react-redux";
import CheckBookComponent from './CheckBookComponent';
import { getCheckBookInfo} from "../../Shared/Actions";


const mapStateToProps = (state /* , props */) => (
    {
        checkBookInfo: state.orderCheckBookReducerData.checkBookInfo,        
    }
);

const mapDispatchToProps = {
    ...getCheckBookInfo
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CheckBookComponent);
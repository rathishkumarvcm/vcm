import { connect } from "react-redux";
import CheckBookPlaceOrder from './CheckBookPlaceOrderComponent';

const mapStateToProps = (state) => (
    {
        checkBookInfo: state.orderCheckBookReducerData.checkBookInfo,
    }
);

const mapDispatchToProps = {
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CheckBookPlaceOrder);
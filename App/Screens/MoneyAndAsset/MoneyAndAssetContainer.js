import { connect } from "react-redux";
import MoneyAndAssetComponent from './MoneyAndAssetComponent';
import {moneyAssestActions} from "../../Shared/Actions";

const mapStateToProps = ( state /* , props */) => ({
      moneyAndAssetProps:state.moneyAndAssetData,
  }
);

const mapDispatchToProps = {
  ...moneyAssestActions
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MoneyAndAssetComponent);
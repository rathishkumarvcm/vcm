import { connect } from "react-redux";
import ModifySecQuesComponent from './ModifySecurityQuesComponent';
import {loginActions} from "../../Shared/Actions";
import {accOpeningActions,ModifySecurityQuestionsActions} from '../../Shared/Actions';



const mapStateToProps = (state) => (
  {
    loginState: state.loginData,
    initialState :state.initialAppData,
    accOpeningData: state.accOpeningReducerData,
    masterLookupStateData: state.masterLookUpData,
    saveQuestionsData: state.saveQuestionsData,
  }
);

const mapDispatchToProps = {
  ...loginActions,
  ...accOpeningActions,
  ...ModifySecurityQuestionsActions
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(ModifySecQuesComponent);


  
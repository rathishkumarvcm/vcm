import { connect } from "react-redux";
import DeliverySettingsComponent from './DeliverySettingsComponent';
import { deliverySettingsActions } from "../../Shared/Actions";

const mapStateToProps = (state /* , props */) => (
    {     
      initialState :state.initialAppData,
      deliverySettingsinitialState: state.deliverySettingsData,  
    }
  );

const mapDispatchToProps = { 
  ...deliverySettingsActions
  };

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(DeliverySettingsComponent);